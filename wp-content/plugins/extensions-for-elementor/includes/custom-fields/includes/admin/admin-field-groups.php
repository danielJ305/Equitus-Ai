<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

if ( ! class_exists( 'ACF_Admin_Field_Groups' ) ) :

	class ACF_Admin_Field_Groups {

		/**
		 * Array of field groups availbale for sync.
		 *
		 * @since 5.9.0
		 * @var array
		 */
		public $sync = array();

		/**
		 * The current view (post_status).
		 *
		 * @since 5.9.0
		 * @var string
		 */
		public $view = '';

		/**
		 * Constructor.
		 *
		 * @date    5/03/2014
		 * @since   5.0.0
		 *
		 * @param   void
		 * @return  void
		 */
		public function __construct() {

			// Add hooks.
			add_action( 'load-edit.php', array( $this, 'handle_redirection' ) );
			add_action( 'current_screen', array( $this, 'current_screen' ) );

			// Handle post status change events.
			add_action( 'trashed_post', array( $this, 'trashed_post' ) );
			add_action( 'untrashed_post', array( $this, 'untrashed_post' ) );
			add_action( 'deleted_post', array( $this, 'deleted_post' ) );
		}

		/**
		 * Returns the Field Groups admin URL.
		 *
		 * @date    27/3/20
		 * @since   5.9.0
		 *
		 * @param   string $params Extra URL params.
		 * @return  string
		 */
		public function get_admin_url( $params = '' ) {
			return admin_url( "edit.php?post_type=acf-field-group{$params}" );
		}

		/**
		 * Returns the Field Groups admin URL taking into account the current view.
		 *
		 * @date    27/3/20
		 * @since   5.9.0
		 *
		 * @param   string $params Extra URL params.
		 * @return  string
		 */
		public function get_current_admin_url( $params = '' ) {
			return $this->get_admin_url( ( $this->view ? '&post_status=' . $this->view : '' ) . $params );
		}

		/**
		 * Redirects users from ACF 4.0 admin page.
		 *
		 * @date    17/9/18
		 * @since   5.7.6
		 *
		 * @param   void
		 * @return  void
		 */
		public function handle_redirection() {
			if ( isset( $_GET['post_type'] ) && $_GET['post_type'] === 'acf' ) {
				wp_redirect( $this->get_admin_url() );
				exit;
			}
		}

		/**
		 * Constructor for the Field Groups admin page.
		 *
		 * @date    21/07/2014
		 * @since   5.0.0
		 *
		 * @param   void
		 * @return  void
		 */
		public function current_screen() {

			// Bail early if not Field Groups admin page.
			if ( ! acf_is_screen( 'edit-acf-field-group' ) ) {
				return;
			}

			// Get the current view.
			$this->view = isset( $_GET['post_status'] ) ? sanitize_text_field( $_GET['post_status'] ) : '';

			// Setup and check for custom actions..
			$this->setup_sync();
			$this->check_sync();
			$this->check_duplicate();

			// Modify publish post status text and order.
			global $wp_post_statuses;
			$wp_post_statuses['publish']->label_count = _n_noop( 'Active <span class="count">(%s)</span>', 'Active <span class="count">(%s)</span>', 'acf' );
			$wp_post_statuses['trash']                = acf_extract_var( $wp_post_statuses, 'trash' );

			// Add hooks.
			add_action( 'admin_enqueue_scripts', array( $this, 'admin_enqueue_scripts' ) );
			add_action( 'admin_body_class', array( $this, 'admin_body_class' ) );
			add_filter( 'views_edit-acf-field-group', array( $this, 'admin_table_views' ), 10, 1 );
			add_filter( 'manage_acf-field-group_posts_columns', array( $this, 'admin_table_columns' ), 10, 1 );
			add_action( 'manage_acf-field-group_posts_custom_column', array( $this, 'admin_table_columns_html' ), 10, 2 );
			add_filter( 'display_post_states', array( $this, 'display_post_states' ), 10, 2 );
			add_filter( 'bulk_actions-edit-acf-field-group', array( $this, 'admin_table_bulk_actions' ), 10, 1 );
			add_action( 'admin_footer', array( $this, 'admin_footer' ), 1 );
			if ( $this->view !== 'trash' ) {
				add_filter( 'page_row_actions', array( $this, 'page_row_actions' ), 10, 2 );
			}

			// Add hooks for "sync" view.
			if ( $this->view === 'sync' ) {
				add_action( 'admin_footer', array( $this, 'admin_footer__sync' ), 1 );
			}
		}

		/**
		 * Sets up the field groups ready for sync.
		 *
		 * @date    17/4/20
		 * @since   5.9.0
		 *
		 * @param   void
		 * @return  void
		 */
		public function setup_sync() {

			// Review local json field groups.
			if ( acf_get_local_json_files() ) {

				// Get all groups in a single cached query to check if sync is available.
				$all_field_groups = acf_get_field_groups();
				foreach ( $all_field_groups as $field_group ) {

					// Extract vars.
					$local    = acf_maybe_get( $field_group, 'local' );
					$modified = acf_maybe_get( $field_group, 'modified' );
					$private  = acf_maybe_get( $field_group, 'private' );

					// Ignore if is private.
					if ( $private ) {
						continue;

						// Ignore not local "json".
					} elseif ( $local !== 'json' ) {
						continue;

						// Append to sync if not yet in database.
					} elseif ( ! $field_group['ID'] ) {
						$this->sync[ $field_group['key'] ] = $field_group;

						// Append to sync if "json" modified time is newer than database.
					} elseif ( $modified && $modified > get_post_modified_time( 'U', true, $field_group['ID'] ) ) {
						$this->sync[ $field_group['key'] ] = $field_group;
					}
				}
			}
		}

		/**
		 * Enqueues admin scripts.
		 *
		 * @date    18/4/20
		 * @since   5.9.0
		 *
		 * @param   void
		 * @return  void
		 */
		public function admin_enqueue_scripts() {
			acf_enqueue_script( 'acf' );

			// Localize text.
			acf_localize_text(
				array(
					'Review local JSON changes' => __( 'Review local JSON changes', 'acf' ),
					'Loading diff'              => __( 'Loading diff', 'acf' ),
					'Sync changes'              => __( 'Sync changes', 'acf' ),
				)
			);
		}

		/**
		 * Modifies the admin body class.
		 *
		 * @date    18/4/20
		 * @since   5.9.0
		 *
		 * @param   string $classes Space-separated list of CSS classes.
		 * @return  string
		 */
		public function admin_body_class( $classes ) {
			$classes .= ' acf-admin-field-groups';
			if ( $this->view ) {
				$classes .= " view-{$this->view}";
			}
			return $classes;
		}

		/**
		 * returns the disabled post state HTML.
		 *
		 * @date    17/4/20
		 * @since   5.9.0
		 *
		 * @param   void
		 * @return  string
		 */
		public function get_disabled_post_state() {
			return '<span class="dashicons dashicons-hidden"></span> ' . _x( 'Disabled', 'post status', 'acf' );
		}

		/**
		 * Adds the "disabled" post state for the admin table title.
		 *
		 * @date    1/4/20
		 * @since   5.9.0
		 *
		 * @param   array   $post_states An array of post display states.
		 * @param   WP_Post $post The current post object.
		 * @return  array
		 */
		public function display_post_states( $post_states, $post ) {
			if ( $post->post_status === 'acf-disabled' ) {
				$post_states['acf-disabled'] = $this->get_disabled_post_state();
			}
			return $post_states;
		}

		/**
		 * Customizes the admin table columns.
		 *
		 * @date    1/4/20
		 * @since   5.9.0
		 *
		 * @param   array $columns The columns array.
		 * @return  array
		 */
		public function admin_table_columns( $_columns ) {
			$columns = array(
				'cb'              => $_columns['cb'],
				'title'           => $_columns['title'],
				'acf-description' => __( 'Description', 'acf' ),
				'acf-key'         => __( 'Key', 'acf' ),
				'acf-location'    => __( 'Location', 'acf' ),
				'acf-count'       => __( 'Fields', 'acf' ),
			);
			if ( acf_get_local_json_files() ) {
				$columns['acf-json'] = __( 'Local JSON', 'acf' );
			}
			return $columns;
		}

		/**
		 * Renders the admin table column HTML
		 *
		 * @date    1/4/20
		 * @since   5.9.0
		 *
		 * @param   string $column_name The name of the column to display.
		 * @param   int    $post_id The current post ID.
		 * @return  void
		 */
		public function admin_table_columns_html( $column_name, $post_id ) {
			$field_group = acf_get_field_group( $post_id );
			if ( $field_group ) {
				$this->render_admin_table_column( $column_name, $field_group );
			}
		}

		/**
		 * Renders a specific admin table column.
		 *
		 * @date    17/4/20
		 * @since   5.9.0
		 *
		 * @param   string $column_name The name of the column to display.
		 * @param   array  $field_group The field group.
		 * @return  void
		 */
		public function render_admin_table_column( $column_name, $field_group ) {
			switch ( $column_name ) {

				// Key.
				case 'acf-key':
					echo esc_html( $field_group['key'] );
					break;

				// Description.
				case 'acf-description':
					if ( $field_group['description'] ) { ?>
						<span class="acf-description"><?php echo acf_esc_html( $field_group['description'] ); ?></span>
					<?php }
					break;

				// Location.
				case 'acf-location':
					$this->render_admin_table_column_locations( $field_group );
					break;

				// Count.
				case 'acf-count':
					echo esc_html( acf_get_field_count( $field_group ) );
					break;

				// Local JSON.
				case 'acf-json':
					$this->render_admin_table_column_local_status( $field_group );
					break;
			}
		}

		/**
		 * Displays a visual representation of the field group's locations.
		 *
		 * @date    1/4/20
		 * @since   5.9.0
		 *
		 * @param   array $field_group The field group.
		 * @return  void
		 */
		public function render_admin_table_column_locations( $field_group ) {
			$objects = array();

			// Loop over location rules and determine connected object types.
			if ( $field_group['location'] ) {
				foreach ( $field_group['location'] as $i => $rules ) {

					// Determine object types for each rule.
					foreach ( $rules as $j => $rule ) {

						// Get location type and subtype for the current rule.
						$location                = acf_get_location_rule( $rule['param'] );
						$location_object_type    = '';
						$location_object_subtype = '';
						if ( $location ) {
							$location_object_type    = $location->get_object_type( $rule );
							$location_object_subtype = $location->get_object_subtype( $rule );
						}
						$rules[ $j ]['object_type']    = $location_object_type;
						$rules[ $j ]['object_subtype'] = $location_object_subtype;
					}

					// Now that each $rule conains object type data...
					$object_types = array_column( $rules, 'object_type' );
					$object_types = array_filter( $object_types );
					$object_types = array_values( $object_types );
					if ( $object_types ) {
						$object_type = $object_types[0];
					} else {
						continue;
					}

					$object_subtypes = array_column( $rules, 'object_subtype' );
					$object_subtypes = array_filter( $object_subtypes );
					$object_subtypes = array_values( $object_subtypes );
					$object_subtypes = array_map( 'acf_array', $object_subtypes );
					if ( count( $object_subtypes ) > 1 ) {
						$object_subtypes = call_user_func_array( 'array_intersect', $object_subtypes );
						$object_subtypes = array_values( $object_subtypes );
					} elseif ( $object_subtypes ) {
						$object_subtypes = $object_subtypes[0];
					} else {
						$object_subtypes = array( '' );
					}

					// Append to objects.
					foreach ( $object_subtypes as $object_subtype ) {
						$object = acf_get_object_type( $object_type, $object_subtype );
						if ( $object ) {
							$objects[ $object->name ] = $object;
						}
					}
				}
			}

			// Reset keys.
			$objects = array_values( $objects );

			// Display.
			$html = '';
			if ( $objects ) {
				$limit = 3;
				$total = count( $objects );

				// Icon.

				// Labels.
				$labels = array_column( $objects, 'label' );
				$labels = array_slice( $labels, 0, 3 );

                ?>
                <span class="dashicons <?php echo $objects[0]->icon . ( $total > 1 ? ' acf-multi-dashicon' : '' ); ?>"></span>
                <?php echo esc_html(implode( ', ', $labels )); ?>
                <?php
				// More.
				if ( $total > $limit ) {
				    echo esc_html(", ...");
				}
			} else {
			    ?>
				<span class="dashicons dashicons-businesswoman"></span><?php echo __( 'Various', 'acf' ); ?>
                <?php
			}
		}

		/**
		 * Returns a human readable file location.
		 *
		 * @date    17/4/20
		 * @since   5.9.0
		 *
		 * @param   string $file The full file path.
		 * @return  string
		 */
		public function get_human_readable_file_location( $file ) {

			// Generate friendly file path.
			$theme_path = get_stylesheet_directory();
			if ( strpos( $file, $theme_path ) !== false ) {
				$rel_file = str_replace( $theme_path, '', $file );
				$located  = sprintf( __( 'Located in theme: %s', 'acf' ), $rel_file );

			} elseif ( strpos( $file, WP_PLUGIN_DIR ) !== false ) {
				$rel_file = str_replace( WP_PLUGIN_DIR, '', $file );
				$located  = sprintf( __( 'Located in plugin: %s', 'acf' ), $rel_file );

			} else {
				$rel_file = str_replace( ABSPATH, '', $file );
				$located  = sprintf( __( 'Located in: %s', 'acf' ), $rel_file );
			}
			return $located;
		}

		/**
		 * Displays the local JSON status of a field group.
		 *
		 * @date    14/4/20
		 * @since   5.9.0
		 *
		 * @param   type $var Description. Default.
		 * @return  type Description.
		 */
		public function render_admin_table_column_local_status( $field_group ) {
			$json = acf_get_local_json_files();
			if ( isset( $json[ $field_group['key'] ] ) ) {
				$file = $json[ $field_group['key'] ];
				if ( isset( $this->sync[ $field_group['key'] ] ) ) {
					$url = $this->get_admin_url( '&acfsync=' . sanitize_text_field($field_group['key']) . '&_wpnonce=' . wp_create_nonce( 'bulk-posts' ) );
					?>
					<strong><?php echo __( 'Sync available', 'acf' ); ?></strong>
                    <?php
					if ( $field_group['ID'] ) { ?>
						<div class="row-actions">
                            <span class="sync"><a href="<?php echo esc_url( $url ); ?>"><?php echo __( 'Sync', 'acf' ); ?></a> | </span>
                            <span class="review"><a href="#" data-event="review-sync" data-id="<?php echo esc_attr( $field_group['ID'] ); ?>" data-href="<?php echo esc_url( $url ); ?>"><?php echo __( 'Review changes', 'acf' ); ?></a></span>
                        </div>
                        <?php
					} else { ?>
						<div class="row-actions">
                            <span class="sync"><a href="<?php echo esc_url( $url ); ?>"><?php echo __( 'Import', 'acf' ); ?></a></span>
                        </div>
					<?php }
				} else {
					echo __( 'Saved', 'acf' );
				}
			} else { ?>
				<span class="acf-secondary-text"><?php echo __( 'Awaiting save', 'acf' ); ?></span>
                <?php
			}
		}

		/**
		 * Customizes the page row actions visible on hover.
		 *
		 * @date    14/4/20
		 * @since   5.9.0
		 *
		 * @param   array   $actions The array of actions HTML.
		 * @param   WP_Post $post The post.
		 * @return  array
		 */
		public function page_row_actions( $actions, $post ) {

			// Remove "Quick Edit" action.
			unset( $actions['inline'], $actions['inline hide-if-no-js'] );

			// Append "Duplicate" action.
			$duplicate_action_url = $this->get_admin_url( '&acfduplicate=' . $post->ID . '&_wpnonce=' . wp_create_nonce( 'bulk-posts' ) );

			ob_start();
			?>
			<a href="<?php echo esc_url( $duplicate_action_url ); ?>" aria-label="<?php echo esc_attr__( 'Duplicate this item', 'acf' ); ?>"><?php echo __( 'Duplicate', 'acf' ); ?></a>
			<?php
			$actions['acfduplicate'] = ob_get_clean();


			// Return actions in custom order.
			$order = array( 'edit', 'acfduplicate', 'trash' );
			return array_merge( array_flip( $order ), $actions );
		}

		/**
		 * Modifies the admin table bulk actions dropdown.
		 *
		 * @date    15/4/20
		 * @since   5.9.0
		 *
		 * @param   array $actions The actions array.
		 * @return  array
		 */
		public function admin_table_bulk_actions( $actions ) {

			// Add "duplicate" action.
			if ( $this->view !== 'sync' ) {
				$actions['acfduplicate'] = __( 'Duplicate', 'acf' );
			}

			// Add "Sync" action.
			if ( $this->sync ) {
				if ( $this->view === 'sync' ) {
					$actions = array();
				}
				$actions['acfsync'] = __( 'Sync changes', 'acf' );
			}
			return $actions;
		}

		/**
		 * Checks for the custom "duplicate" action.
		 *
		 * @date    15/4/20
		 * @since   5.9.0
		 *
		 * @param   void
		 * @return  void
		 */
		public function check_duplicate() {

		    // Display notice on success redirect.
		    if (isset($_GET['acfduplicatecomplete'])) {
		        $ids = array_map('intval', explode(',', $_GET['acfduplicatecomplete']));

		        // Generate text.
		        $text = sprintf(
		            _n('Field group duplicated.', '%s field groups duplicated.', count($ids), 'acf'),
		            count($ids)
		        );

		        // Collect links for display.
		        ob_start();
		        ?>
		        <div>
		            <?php echo esc_html($text); ?>
		            <?php foreach ($ids as $id): ?>
		                <a href="<?php echo esc_url(get_edit_post_link($id)); ?>"><?php echo esc_html(get_the_title($id)); ?></a>
		                <?php if (end($ids) !== $id) echo ', '; ?>
		            <?php endforeach; ?>
		        </div>
		        <?php
		        $links_html = ob_get_clean();

		        // Add notice.
		        acf_add_admin_notice($links_html, 'success');
		        return;
		    }

		    // Find items to duplicate.
		    $ids = array();
		    if (isset($_GET['acfduplicate'])) {
		        $ids[] = intval($_GET['acfduplicate']);
		    } elseif (isset($_GET['post'], $_GET['action2']) && $_GET['action2'] === 'acfduplicate') {
		        $ids = array_map('intval', $_GET['post']);
		    }

		    if ($ids) {
		        check_admin_referer('bulk-posts');

		        // Duplicate field groups and generate array of new IDs.
		        $new_ids = array();
		        foreach ($ids as $id) {
		            $field_group = acf_duplicate_field_group($id);
		            $new_ids[] = $field_group['ID'];
		        }

		        // Redirect.
		        wp_redirect($this->get_admin_url('&acfduplicatecomplete=' . implode(',', $new_ids)));
		        exit;
		    }
		}


		/**
		 * Checks for the custom "acfsync" action.
		 *
		 * @date    15/4/20
		 * @since   5.9.0
		 *
		 * @param   void
		 * @return  void
		 */
		public function check_sync() {

		    // Display notice on success redirect.
		    if (isset($_GET['acfsynccomplete'])) {
		        $ids = array_map('intval', explode(',', $_GET['acfsynccomplete']));

		        // Generate text.
		        $text = sprintf(
		            _n('Field group synchronised.', '%s field groups synchronised.', count($ids), 'acf'),
		            count($ids)
		        );

		        // Collect links for display.
		        ob_start();
		        ?>
		        <div>
		            <?php echo esc_html($text); ?>
		            <?php foreach ($ids as $id): ?>
		                <a href="<?php echo esc_url(get_edit_post_link($id)); ?>"><?php echo esc_html(get_the_title($id)); ?></a>
		                <?php if (end($ids) !== $id) echo ', '; ?>
		            <?php endforeach; ?>
		        </div>
		        <?php
		        $links_html = ob_get_clean();

		        // Add notice.
		        acf_add_admin_notice($links_html, 'success');
		        return;
		    }

		    // Find items to sync.
		    $keys = array();
		    if (isset($_GET['acfsync'])) {
		        $keys[] = sanitize_text_field($_GET['acfsync']);
		    } elseif (isset($_GET['post'], $_GET['action2']) && $_GET['action2'] === 'acfsync') {
		        $keys = array_map('sanitize_text_field', $_GET['post']);
		    }

		    if ($keys && $this->sync) {
		        check_admin_referer('bulk-posts');

		        // Disable "Local JSON" controller to prevent the .json file from being modified during import.
		        acf_update_setting('json', false);

		        // Sync field groups and generate array of new IDs.
		        $files = acf_get_local_json_files();
		        $new_ids = array();
		        foreach ($this->sync as $key => $field_group) {
		            if ($field_group['key'] && in_array($field_group['key'], $keys)) {
		                // Import.
		            } elseif ($field_group['ID'] && in_array($field_group['ID'], $keys)) {
		                // Import.
		            } else {
		                // Ignore.
		                continue;
		            }
		            $local_field_group = json_decode(file_get_contents($files[$key]), true);
		            $local_field_group['ID'] = $field_group['ID'];
		            $result = acf_import_field_group($local_field_group);
		            $new_ids[] = $result['ID'];
		        }

		        // Redirect.
		        wp_redirect($this->get_current_admin_url('&acfsynccomplete=' . implode(',', $new_ids)));
		        exit;
		    }
		}


		/**
		 * Customizes the admin table subnav.
		 *
		 * @date    17/4/20
		 * @since   5.9.0
		 *
		 * @param   array $views The available views.
		 * @return  array
		 */
		public function admin_table_views( $views ) {
			global $wp_list_table, $wp_query;

			// Count items.
			$count = count( $this->sync );

			// Append "sync" link to subnav.
			if ( $count ) {
				$views['sync'] = sprintf(
					'<a %s href="%s">%s <span class="count">(%s)</span></a>',
					( $this->view === 'sync' ? 'class="current"' : '' ),
					esc_url( $this->get_admin_url( '&post_status=sync' ) ),
					esc_html( __( 'Sync available', 'acf' ) ),
					$count
				);
			}

			// Modify table pagination args to match JSON data.
			if ( $this->view === 'sync' ) {
				$wp_list_table->set_pagination_args(
					array(
						'total_items' => $count,
						'total_pages' => 1,
						'per_page'    => $count,
					)
				);
				$wp_query->post_count = 1; // At least one post is needed to render bulk drop-down.
			}
			return $views;
		}

		/**
		 * Prints scripts into the admin footer.
		 *
		 * @date    20/4/20
		 * @since   5.9.0
		 *
		 * @param   void
		 * @return  void
		 */
		function admin_footer() {
			?>
<script type="text/javascript">
(function($){

	// Displays a modal comparing local changes.
	function reviewSync( props ) {
		var modal = acf.newModal({
			title: acf.__('Review local JSON changes'),
			content: '<p class="acf-modal-feedback"><i class="acf-loading"></i> ' + acf.__('Loading diff') + '</p>',
			toolbar: '<a href="' + props.href + '" class="button button-primary button-sync-changes disabled">' + acf.__('Sync changes') + '</a>',
		});
		
		// Call AJAX.
		var xhr = $.ajax({
			url: acf.get('ajaxurl'),
			method: 'POST',
			dataType: 'json',
			data: acf.prepareForAjax({
				action:	'acf/ajax/local_json_diff',
				id: props.id
			})
		})
		.done(function( data, textStatus, jqXHR ) {
			modal.content( data.html );
			modal.$('.button-sync-changes').removeClass('disabled');
		})
		.fail(function( jqXHR, textStatus, errorThrown ) {
			if( error = acf.getXhrError(jqXHR) ) {
				modal.content( '<p class="acf-modal-feedback error">' + error + '</p>' );
			}
		});
	}
	
	// Add event listener.
	$(document).on('click', 'a[data-event="review-sync"]', function( e ){
		e.preventDefault();
		reviewSync( $(this).data() );
	});
})(jQuery);
</script>
			<?php
		}

		/**
		 * Customizes the admin table HTML when viewing "sync" post_status.
		 *
		 * @date    17/4/20
		 * @since   5.9.0
		 *
		 * @param   array $views The available views.
		 * @return  array
		 */
		public function admin_footer__sync() {
			global $wp_list_table;

			// Get table columns.
			$columns = $wp_list_table->get_columns();
			$hidden  = get_hidden_columns( $wp_list_table->screen );
			?>
<div style="display: none;">
<table>
	<tbody id="acf-the-list">
			<?php
			foreach ( $this->sync as $k => $field_group ) { ?>
				    <tr>
                <?php
				foreach ( $columns as $column_name => $column_label ) {
					$el = 'td';
					if ( $column_name === 'cb' ) {
						$el           = 'th';
						$classes      = 'check-column';
						$column_label = '';
					} elseif ( $column_name === 'title' ) {
						$classes = "$column_name column-$column_name column-primary";
					} else {
						$classes = "$column_name column-$column_name";
					}
					if ( in_array( $column_name, $hidden, true ) ) {
						$classes .= ' hidden';
					}
					?>
					    <<?php echo esc_attr($el); ?> class="<?php echo esc_attr($classes); ?>" data-colname="<?php echo esc_attr($column_label); ?>">
                    <?php
					switch ( $column_name ) {

						// Checkbox.
						case 'cb':
						    ?>
                                <label for="cb-select-<?php echo esc_attr( $k ); ?>" class="screen-reader-text"><?php echo esc_html( sprintf( __( 'Select %s', 'acf' ), $field_group['title'] ) ); ?></label>
                                <input id="cb-select-<?php echo esc_attr( $k ); ?>" type="checkbox" value="<?php echo esc_attr( $k ); ?>" name="post[]">
                            <?php
							break;

						// Title.
						case 'title':
							?>
                                <strong><span class="row-title"><?php echo esc_html( $field_group['title'] ); ?></span><?php if ( ! $field_group['active'] ) { ?> — <span class="post-state"><?php echo esc_html($this->get_disabled_post_state()); ?></span><?php } ?></strong>
                                <div class="row-actions"><span class="file acf-secondary-text"><?php echo esc_html($this->get_human_readable_file_location( $field_group['local_file'] )); ?></span></div>
                                <button type="button" class="toggle-row"><span class="screen-reader-text">Show more details</span></button>
                            <?php
							break;

						// All other columns.
						default:
							$this->render_admin_table_column( $column_name, $field_group );
							break;
					}
					?>
					    </<?php echo esc_attr($el); ?>>
                    <?php
				}
				?>
				    </tr>
                <?php
			}
			?>
	</tbody>
</table>
</div>
<script type="text/javascript">
(function($){
	$('#the-list').html( $('#acf-the-list').children() );
})(jQuery);
</script>
			<?php
		}

		/**
		 * Fires when trashing a field group post.
		 *
		 * @date    8/01/2014
		 * @since   5.0.0
		 *
		 * @param   int $post_id The post ID.
		 * @return  void
		 */
		public function trashed_post( $post_id ) {
			if ( get_post_type( $post_id ) === 'acf-field-group' ) {
				acf_trash_field_group( $post_id );
			}
		}

		/**
		 * Fires when untrashing a field group post.
		 *
		 * @date    8/01/2014
		 * @since   5.0.0
		 *
		 * @param   int $post_id The post ID.
		 * @return  void
		 */
		public function untrashed_post( $post_id ) {
			if ( get_post_type( $post_id ) === 'acf-field-group' ) {
				acf_untrash_field_group( $post_id );
			}
		}

		/**
		 * Fires when deleting a field group post.
		 *
		 * @date    8/01/2014
		 * @since   5.0.0
		 *
		 * @param   int $post_id The post ID.
		 * @return  void
		 */
		public function deleted_post( $post_id ) {
			if ( get_post_type( $post_id ) === 'acf-field-group' ) {
				acf_delete_field_group( $post_id );
			}
		}
	}

	// Instantiate.
	acf_new_instance( 'ACF_Admin_Field_Groups' );

endif; // class_exists check
