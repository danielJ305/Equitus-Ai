<?php
namespace ElementorExtensions\Classes;

if ( ! defined( 'ABSPATH' ) ) exit; 

abstract class EE_MB_Custom_Field{
    
    
	public $settings_id    = '';
	public $tabs           = array( 'general' => 'General' );
	protected $settings    = array();
	protected $fields      = array();
	protected $posted_data = array();

	private static $_instance;

	public static function instance() {
		if ( is_null( self::$_instance ) ) {
			self::$_instance = new self();
		}

		return self::$_instance;
	}
	
	public function init_settings() {
		$this->settings = (array) get_option( $this->settings_id );
		foreach ( $this->fields as $tab_key => $tab ) {
			
			foreach ( $tab as $name => $field ) {
				
				if( isset( $this->settings[ $name ] ) ) {
					$this->fields[ $tab_key ][ $name ]['default'] = $this->settings[ $name ];
				}	
			
			}
		}
	}
		
	/**
	 * Gets and option from the settings API, using defaults if necessary to prevent undefined notices.
	 *
	 * @param  string $key
	 * @param  mixed  $empty_value
	 * @return mixed  The value specified for the option or a default value for the option.
	 */
	public function get_option( $key, $empty_value = null ) {
		if ( empty( $this->settings ) ) {
			$this->init_settings();
		}
		/* Get option default if unset. */
		if ( ! isset( $this->settings[ $key ] ) ) {
			$form_fields = $this->fields;
			foreach ( $this->tabs as $tab_key => $tab_title ) {
				if( isset( $form_fields[ $tab_key ][ $key ] ) ) {
					$this->settings[ $key ] = isset( $form_fields[ $tab_key ][ $key ]['default'] ) ? $form_fields[ $tab_key ][ $key ]['default'] : '';
				
				}
			}
			
		}
		if ( ! is_null( $empty_value ) && empty( $this->settings[ $key ] ) && '' === $this->settings[ $key ] ) {
			$this->settings[ $key ] = $empty_value;
		}
		return $this->settings[ $key ];
	}
  	
  	/**
	 * Validate text field
	 * @param  string $key name of the field
	 * @return string     
	 */
	public function validate_text( $key ){
		$text  = $this->get_option( $key );
		if ( isset( $this->posted_data[ $key ] ) ) {
			$text = wp_kses_post( trim( stripslashes( $this->posted_data[ $key ] ) ) );
		}
		return $text;
    }
    
    /**
	 * Validate date field
	 * @param  string $key name of the field
	 * @return string     
	 */
	public function validate_date( $key ){
		$text  = $this->get_option( $key );
		if ( isset( $this->posted_data[ $key ] ) ) {
			$text = wp_kses_post( trim( stripslashes( $this->posted_data[ $key ] ) ) );
		}
		return $text;
    }
    
    /**
	 * Validate time field
	 * @param  string $key name of the field
	 * @return string     
	 */
	public function validate_time( $key ){
		$text  = $this->get_option( $key );
		if ( isset( $this->posted_data[ $key ] ) ) {
			$text = wp_kses_post( trim( stripslashes( $this->posted_data[ $key ] ) ) );
		}
		return $text;
    }
    
	/**
	 * Validate textarea field
	 * @param  string $key name of the field
	 * @return string      
	 */
	public function validate_textarea( $key ){
		$text  = $this->get_option( $key );
		 
		if ( isset( $this->posted_data[ $key ] ) ) {
			$text = wp_kses( trim( stripslashes( $this->posted_data[ $key ] ) ),
				array_merge(
					array(
						'iframe' => array( 'src' => true, 'style' => true, 'id' => true, 'class' => true )
					),
					wp_kses_allowed_html( 'post' )
				)
			);
		}
		return $text;
	}

	/**
	 * Validate WPEditor field
	 * @param  string $key name of the field
	 * @return string      
	 */
	public function validate_wpeditor( $key ){
		$text  = $this->get_option( $key );
		 
		if ( isset( $this->posted_data[ $key ] ) ) {
			$text = wp_kses( trim( stripslashes( $this->posted_data[ $key ] ) ),
				array_merge(
					array(
						'iframe' => array( 'src' => true, 'style' => true, 'id' => true, 'class' => true )
					),
					wp_kses_allowed_html( 'post' )
				)
			);
		}
		return $text;
	}

	/**
	 * Validate select field
	 * @param  string $key name of the field
	 * @return string      
	 */
	public function validate_select( $key ) {
		$value = $this->get_option( $key );
		if ( isset( $this->posted_data[ $key ] ) ) {
			$value = stripslashes( $this->posted_data[ $key ] );
		}
		return $value;
	}

	/**
	 * Validate radio
	 * @param  string $key name of the field
	 * @return string      
	 */
	public function validate_radio( $key ) {
		$value = $this->get_option( $key );
		if ( isset( $this->posted_data[ $key ] ) ) {
			$value = stripslashes( $this->posted_data[ $key ] );
		}
		return $value;
	}

	/**
	 * Validate checkbox field
	 * @param  string $key name of the field
	 * @return string      
	 */
	public function validate_checkbox( $key ) {
		$status = '';
		if ( isset( $this->posted_data[ $key ] ) && ( 1 == $this->posted_data[ $key ] ) ) {
			$status = '1';
		}
		return $status;
	}

	/**
	 * Adding fields 
	 * @param array $array options for the field to add
	 * @param string $tab tab for which the field is
	 */
	public function add_field( $array, $tab = 'general' ) {

		$allowed_field_types = array(
			'text',
			'textarea',
			'wpeditor',
			'select',
			'radio',
            'checkbox',
            'section',
            'date',
            'time'
        );

		/* If a type is set that is now allowed, don't add the field */
		if( isset( $array['type'] ) && $array['type'] != '' && ! in_array( $array['type'], $allowed_field_types ) ){
			return;
        }
        
		$defaults = array(
			'name' => '',
			'title' => '',
			'placeholder' => '',
			'type' => 'text',
			'options' => array(),
			'default' => '',
			'desc' => '',
        );
            
        $array = array_merge( $defaults, $array );
		
		if( $array['name'] == '' &&  $array['type'] !== 'section') {
			return;
        }
        
		foreach ( $this->fields as $tabs ) {
			if( isset( $tabs[ $array['name'] ] ) ) {
				trigger_error( 'There is alreay a field with name ' . $array['name'] );
				return;
			}
        }
        
		/* If there are options set, then use the first option as a default value */
		if( ! empty( $array['options'] ) && $array['default'] == '' ) {
			$array_keys = array_keys( $array['options'] );
			$array['default'] = $array_keys[0];
        }
        
		if( ! isset( $this->fields[ $tab ] ) ) {
			$this->fields[ $tab ] = array();
        }
        
		$this->fields[ $tab ][ $array['name'] ] = $array;
	}
	
	/**
	 * Adding tab
	 * @param array $array options
	 */
	public function add_tab( $array ) {
		$defaults = array(
			'slug' => '',
			'title' => '' );
		$array = array_merge( $defaults, $array );
		if( $array['slug'] == '' || $array['title'] == '' ){
			return;
		}
		$this->tabs[ $array['slug'] ] = $array['title'];
	}
	/**
	 * Rendering fields 
	 * @param  string $tab slug of tab
	 * @return void  
	 */
	public function render_fields( $tab ) {
		if( ! isset( $this->fields[ $tab ] ) ) {
			?>
            <p><?php echo esc_html__( 'There are no settings on these page.', 'textdomain' ); ?></p>
            <?php
			return;
		}
		foreach ( $this->fields[ $tab ] as $name => $field ) {
			
			$this->{ 'render_' . $field['type'] }( $field );
		}
	}
	/**
	 * Render text field
	 * @param  string $field options
	 * @return void     
	 */
	public function render_text( $field ){
		extract( $field );
		?>

		<tr>
			<th>
				<label for="<?php echo esc_attr($name); ?>"><?php echo esc_attr($title); ?></label>
			</th>
			<td>
				<input type="<?php echo esc_attr($type); ?>" name="<?php echo esc_attr($name); ?>" id="<?php echo esc_attr($name); ?>" value="<?php echo esc_attr($default); ?>" placeholder="<?php echo esc_attr($placeholder); ?>" />
				<?php if( $desc != '' ) {
				        ?>
					<p class="description"><?php echo $desc; ?></p>
                    <?php
				}?>
			</td>
		</tr>

		<?php
    }

    /**
	 * Render date field
	 * @param  string $field options
	 * @return void     
	 */
	public function render_date( $field ){
		extract( $field );

		$name = esc_attr( $name );
		$type = esc_attr( $type );
		$title = esc_html( $title );
		$default = esc_attr( $default );
		$placeholder = esc_html( $placeholder );
		$desc = esc_html( $desc );

		?>

		<tr>
			<th>
				<label for="<?php echo esc_attr($name); ?>"><?php echo esc_html($title); ?></label>
			</th>
			<td>
				<input class="es_date_picker" type="text" name="<?php echo esc_attr($name); ?>" id="<?php echo esc_attr($name); ?>" value="<?php echo esc_attr($default); ?>" placeholder="<?php echo esc_attr($placeholder); ?>" />
				<?php if( $desc != '' ) {
				    ?>
					    <p class="description"><?php echo $desc; ?></p>
                    <?php
				}?>
			</td>
        </tr>
        
		<?php
    }

    /**
	 * Render time field
	 * @param  string $field options
	 * @return void     
	 */
	public function render_time( $field ){
		extract( $field );

		$name = esc_attr( $name );
		$type = esc_attr( $type );
		$title = esc_html( $title );
		$default = esc_attr( $default );
		$placeholder = esc_html( $placeholder );
		$desc = esc_html( $desc );
		?>

		<tr>
			<th>
				<label for="<?php echo esc_attr($name); ?>"><?php echo esc_html($title); ?></label>
			</th>
			<td>
				<input class="es_time_picker" type="text" name="<?php echo esc_attr($name); ?>" id="<?php echo esc_attr($name); ?>" value="<?php echo esc_attr($default); ?>" placeholder="<?php echo esc_attr($placeholder); ?>" />
                <?php if ( $desc != '' ) : ?>
                    <p class="description"><?php echo esc_html( $desc ); ?></p>
                <?php endif; ?>
            </td>
        </tr>
        
		<?php
    }
    
    /**
	 * Render section field
	 * @param  string $field options
	 * @return void     
	 */
	public function render_section( $field ){
		extract( $field );

		$title = esc_html( $title );
		?>

        <tr>
			<td colspan="2" class="es_section_header">
				<div class="es_section_header">
					<h4><?php _e($title); ?></h4>
                </div>
			</td>
		</tr>

		<?php
    }
    
	/**
	 * Render textarea field
	 * @param  string $field options
	 * @return void      
	 */
	public function render_textarea( $field ){
		extract( $field );

		$name = esc_attr( $name );
		$type = esc_attr( $type );
		$title = esc_html( $title );
		$default = esc_textarea( $default );
		$placeholder = esc_html( $placeholder );
		$desc = esc_html( $desc );
		?>

		<tr>
			<th>
				<label for="<?php echo esc_attr($name); ?>"><?php echo esc_html($title); ?></label>
			</th>
			<td>
				<textarea name="<?php echo esc_attr($name); ?>" id="<?php echo esc_attr($name); ?>" placeholder="<?php echo esc_attr($placeholder); ?>" cols="50" rows="3"><?php echo $default; ?></textarea>
                <?php if ( $desc != '' ) : ?>
                    <p class="description"><?php echo esc_html( $desc ); ?></p>
                <?php endif; ?>
            </td>
		</tr>

		<?php
	}
	/**
	 * Render WPEditor field
	 * @param  string $field  options
	 * @return void      
	 */
	public function render_wpeditor( $field ){
		
		extract( $field );

		$name = esc_attr( $name );
		$title = esc_html( $title );
		$desc = esc_html( $desc );
		$default = html_entity_decode($default);
		?>
		
		<tr>
			<th>
				<label for="<?php echo esc_attr($name); ?>"><?php echo esc_html($title); ?></label>
			</th>
			<td>
				<?php wp_editor( $default, $name, array('wpautop' => false) ); ?>
                <?php if ( $desc != '' ) : ?>
                    <p class="description"><?php echo esc_html( $desc ); ?></p>
                <?php endif; ?>
            </td>
		</tr>

		<?php
	}
	/**
	 * Render select field
	 * @param  string $field options
	 * @return void      
	 */
	public function render_select( $field ) {
		extract( $field );

		$name = esc_attr( $name );
		$title = esc_html( $title );
		$default = esc_attr( $default );
		$desc = esc_html( $desc );
		?>

		<tr>
			<th>
				<label for="<?php echo esc_attr($name); ?>"><?php echo esc_html($title); ?></label>
			</th>
            <td>
                <select name="<?php echo esc_attr( $name ); ?>" id="<?php echo esc_attr( $name ); ?>">
                    <?php foreach ( $options as $value => $text ) : ?>
                        <option value="<?php echo esc_attr( $value ); ?>" <?php echo selected( $default, $value, false ); ?>>
                            <?php echo esc_html( $text ); ?>
                        </option>
                    <?php endforeach; ?>
                </select>
                <?php if ( $desc != '' ) : ?>
                    <p class="description"><?php echo esc_html( $desc ); ?></p>
                <?php endif; ?>
            </td>
        </tr>

		<?php
	}
	/**
	 * Render radio
	 * @param  string $field options
	 * @return void      
	 */
	public function render_radio( $field ) {
		extract( $field );

		$name = esc_attr( $name );
		$type = esc_attr( $type );
		$title = esc_html( $title );
		$default = esc_attr( $default );
		$desc = esc_html( $desc );
		?>

		<tr>
			<th>
				<label for="<?php echo esc_attr($name); ?>"><?php echo esc_html($title); ?></label>
			</th>
			<td>
                <?php foreach ( $options as $value => $text ) : ?>
                    <input
                            name="<?php echo esc_attr( $name ); ?>"
                            id="<?php echo esc_attr( $name ); ?>"
                            type="<?php echo esc_attr( $type ); ?>"
                        <?php echo checked( $default, esc_attr( $value ), false ); ?>
                            value="<?php echo esc_attr( $value ); ?>"
                    >
                    <?php echo esc_html( $text ); ?><br/>
                <?php endforeach; ?>

                <?php if ( $desc != '' ) : ?>
                    <p class="description"><?php echo esc_html( $desc ); ?></p>
                <?php endif; ?>
            </td>
		</tr>

		<?php
	}
	/**
	 * Render checkbox field
	 * @param  string $field options
	 * @return void      
	 */
	public function render_checkbox( $field ) {
		extract( $field );

		$name = esc_attr( $name );
		$type = esc_attr( $type );
		$title = esc_html( $title );
		$default = esc_attr( $default );
		$placeholder = esc_html( $placeholder );
		$desc = esc_html( $desc );
		?>

		<tr>
			<th>
				<label for="<?php echo esc_attr($name); ?>"><?php echo esc_html($title); ?></label>
			</th>
			<td>
				<input <?php checked( $default, '1', true ); ?> type="<?php echo esc_attr($type); ?>" name="<?php echo esc_attr($name); ?>" id="<?php echo esc_attr($name); ?>" value="1" placeholder="<?php echo esc_attr($placeholder); ?>" />
				<?php echo $desc; ?>
			</td>
		</tr>

		<?php
	}

	public function sanitize( $key, $val ) {

		switch ( $key ) {

			case '_ee_mb_event_location':
				return sanitize_textarea_field( $val );
				break;

			case '_ee_mb_event_website':
			case '_ee_mb_event_external_link':
				return esc_url( $val );
				break;

			default:
				return sanitize_text_field( $val );
				break;
		}
	}
}
