<?php
namespace ElementorExtensions\Modules\Table\Widgets;

if ( ! defined( 'ABSPATH' ) ) exit;

use ElementorExtensions\Base\Base_Widget;
use ElementorExtensions\Controls\EE_MB_Group_Control_Transition;

use Elementor\Repeater;
use Elementor\Icons_Manager;
use Elementor\Controls_Manager;
use Elementor\Utils;
use Elementor\Group_Control_Border;
use Elementor\Group_Control_Typography;
use Elementor\Group_Control_Image_Size;
use Elementor\Group_Control_Box_Shadow;
use Elementor\Core\Kits\Documents\Tabs\Global_Colors;
use Elementor\Core\Kits\Documents\Tabs\Global_Typography;

class EE_Table extends Base_Widget {

	private $cell_counter = 0;

	public function get_name() {
		return $this->widget_name_prefix.'table';
	}

	public function get_title() {
		return __( 'Table', 'elementor-extensions' );
	}

	public function get_icon() {
		return 'eicon-table';
	}

	public function get_script_depends() {
		return ['ee-mb-table-sorter'];
	}

	public function get_keywords() {
		return [ 'table', 'tab', 'ta', 'tb' ];
	}

	protected function _register_cell_controls( $repeater, $condition = array() ) {

		$repeater->add_control(
			'cell_content',
			[
				'label' 		=> __( 'Cell Content', 'elementor-extensions' ),
				'type'		=> Controls_Manager::SELECT,
				'default'	=> 'text',
				'options' 	=> [
					'text' 		=> __( 'Text', 'elementor-extensions' ),
				],
				'condition'	=> array_merge( $condition, [] ),
			]
		);

		$repeater->add_control(
			'cell_text',
			[
				'label' 		=> __( 'Cell Text', 'elementor-extensions' ),
				'type' 			=> Controls_Manager::TEXT,
				'dynamic' 		=> [ 'active' => true ],
				'condition'		=> array_merge(
					$condition, [
						'cell_content' 	=> 'text',
					]
				),
			]
		);

		$repeater->add_control(
			'selected_cell_icon',
			[
				'label' => __( 'Icon', 'elementor-extensions' ),
				'type' => Controls_Manager::ICONS,
				'fa4compatibility' => 'cell_icon',
				'label_block' 	=> true,
				'condition'		=> array_merge(
					$condition, [
						'cell_content' 	=> 'text',
					]
				),
			]
		);

		$repeater->add_control(
			'cell_icon_align',
			[
				'label' 	=> __( 'Icon Position', 'elementor-extensions' ),
				'type' 		=> Controls_Manager::SELECT,
				'default' 	=> 'left',
				'options' 	=> [
					'left' 		=> __( 'Before', 'elementor-extensions' ),
					'right' 	=> __( 'After', 'elementor-extensions' ),
				],
				'condition'		=> array_merge(
					$condition, [
						'cell_content' 	=> 'text',
						'selected_cell_icon[value]!' 	=> '',
					]
				),
			]
		);

		$repeater->add_control(
			'cell_icon_indent',
			[
				'label' 	=> __( 'Icon Spacing', 'elementor-extensions' ),
				'type' 		=> Controls_Manager::NUMBER,
				'dynamic' 	=> [ 'active' => true ],
				'min'		=> 0,
				'max'		=> 48,
				'default'	=> '',
				'step'		=> 1,
				'condition'		=> array_merge(
					$condition, [
						'cell_content' 	=> 'text',
						'selected_cell_icon[value]!' 	=> '',
					]
				),
				'selectors' => [
					'{{WRAPPER}} {{CURRENT_ITEM}} .ele-site-table__text .ele-site-align-icon--right' => 'margin-left: {{SIZE}}px;',
					'{{WRAPPER}} {{CURRENT_ITEM}} .ele-site-table__text .ele-site-align-icon--left' => 'margin-right: {{SIZE}}px;',
				],
			]
		);

		$repeater->add_control(
			'cell_span',
			[
				'label'   		=> __( 'Column Span', 'elementor-extensions' ),
				'title' 		=> __( 'How many columns should this column span across.', 'elementor-extensions' ),
				'type'    		=> Controls_Manager::NUMBER,
				'dynamic' 		=> [ 'active' => true ],
				'default' 		=> 1,
				'min'     		=> 1,
				'max'     		=> 20,
				'step'    		=> 1,
				'condition'		=> array_merge( $condition, [] ),
			]
		);

		$repeater->add_control(
			'cell_row_span',
			[
				'label'   		=> __( 'Row Span', 'elementor-extensions' ),
				'title' 		=> __( 'How many rows should this column span across.', 'elementor-extensions' ),
				'type'    		=> Controls_Manager::NUMBER,
				'dynamic' 		=> [ 'active' => true ],
				'default' 		=> 1,
				'min'     		=> 1,
				'max'     		=> 20,
				'step'    		=> 1,
				'condition'		=> array_merge( $condition, [] ),
				'separator'		=> 'below',
			]
		);

		$repeater->add_control(
			'_item_id',
			[
				'label' 		=> __( 'CSS ID', 'elementor-extensions' ),
				'type' 			=> Controls_Manager::TEXT,
				'dynamic' 		=> [ 'active' => true ],
				'default' 		=> '',
				'label_block' 	=> false,
				'title' 		=> __( 'Add your custom id WITHOUT the Pound key. e.g: my-id', 'elementor-extensions' ),
			]
		);

		$repeater->add_control(
			'css_classes',
			[
				'label' 		=> __( 'CSS Classes', 'elementor-extensions' ),
				'type' 			=> Controls_Manager::TEXT,
				'dynamic' 		=> [ 'active' => true ],
				'default' 		=> '',
				'prefix_class' 	=> '',
				'label_block' 	=> false,
				'title' 		=> __( 'Add your custom class WITHOUT the dot. e.g: my-class', 'elementor-extensions' ),
			]
		);

	}

	protected function _register_controls() {
		
		$this->start_controls_section(
			'section_header',
			[
				'label' => __( 'Header', 'elementor-extensions' ),
			]
		);

			$this->add_control(
				'sortable',
				[
					'label' 		=> __( 'Sortable', 'elementor-extensions' ),
					'type' 			=> Controls_Manager::SWITCHER,
					'label_on' 		=> __( 'Yes', 'elementor-extensions' ),
					'label_off' 	=> __( 'No', 'elementor-extensions' ),
					'return_value' 	=> 'yes',
					'description'   => __( 'Enables sorting rows by clicking on header cells.', 'elementor-extensions' ),
					'frontend_available' => true,
				]
			);

			$this->add_control(
				'responsive',
				[
					'label' 		=> __( 'Responsive', 'elementor-extensions' ),
					'description'   => __( 'Converts the header row into individual headers for each cell on mobile.', 'elementor-extensions' ),
					'type' 			=> Controls_Manager::SWITCHER,
					'default'		=> 'responsive',
					'label_on' 		=> __( 'Yes', 'elementor-extensions' ),
					'label_off' 	=> __( 'No', 'elementor-extensions' ),
					'return_value' 	=> 'responsive',
					'prefix_class'	=> 'ele-site-table--'
				]
			);

			$this->add_control(
				'scrollable',
				[
					'label' 		=> __( 'Scroll In Responsive', 'elementor-extensions' ),
					'description'   => __( 'Enable scroll in mobile view.', 'elementor-extensions' ),
					'type' 			=> Controls_Manager::SWITCHER,
					'default'		=> 'label_off',
					'label_on' 		=> __( 'Yes', 'elementor-extensions' ),
					'label_off' 	=> __( 'No', 'elementor-extensions' ),
					'return_value' 	=> 'scrollable',
					'frontend_available' => true,
				]
			);

			$this->add_control(
				'mobile_headers_hide',
				[
					'label' 		=> __( 'Hide on Mobile', 'elementor-extensions' ),
					'type' 			=> Controls_Manager::SWITCHER,
					'label_on' 		=> __( 'Yes', 'elementor-extensions' ),
					'label_off' 	=> __( 'No', 'elementor-extensions' ),
					'return_value' 	=> 'hide',
					'description'   => __( 'Hide headers completely on mobile.', 'elementor-extensions' ),
					'frontend_available' => true,
					'prefix_class'	=> 'ele-site-table-mobile-header--',
					'condition'		=> [
						'responsive'			=> 'responsive',
					],
				]
			);

			$this->add_control(
				'mobile_headers_auto',
				[
					'label' 		=> __( 'Auto Mobile Headers', 'elementor-extensions' ),
					'type' 			=> Controls_Manager::SWITCHER,
					'label_on' 		=> __( 'Yes', 'elementor-extensions' ),
					'label_off' 	=> __( 'No', 'elementor-extensions' ),
					'return_value' 	=> 'yes',
					'default'		=> 'yes',
					'description'   => __( 'Try to automatically fetch corresponding headers content on mobile. Works only when column span values are not used.', 'elementor-extensions' ),
					'frontend_available' => true,
					'condition'		=> [
						'responsive'			=> 'responsive',
						'mobile_headers_hide!' 	=> 'hide',
					],
				]
			);

			$this->add_control(
				'mobile_headers_display',
				[
					'label' 		=> __( 'Mobile Display', 'elementor-extensions' ),
					'type' 			=> Controls_Manager::CHOOSE,
					'default' 		=> 'row',
					'options' 		=> [
						'row'    	=> [
							'title' 	=> __( 'Column', 'elementor-extensions' ),
							'icon' 		=> 'eicon-column',
						],
						'column' 		=> [
							'title' 	=> __( 'Row', 'elementor-extensions' ),
							'icon' 		=> 'eicon-menu-bar',
						],
					],
					'condition'		=> [
						'responsive'			=> 'responsive',
						'mobile_headers_hide!' 	=> 'hide',
					],
					'label_block'	=> false,
					'prefix_class'	=> 'ele-site-table-mobile-header--'
				]
			);

			$repeater_header = new Repeater();

			$this->_register_cell_controls( $repeater_header, [] );

			$this->add_control(
				'header_cells',
				[
					'label' 	=> __( 'Columns', 'elementor-extensions' ),
					'type' 		=> Controls_Manager::REPEATER,
					'default' 	=> [
						[
							'cell_text' 	=> __( 'First header', 'elementor-extensions' ),
						],
						[
							'cell_text' 	=> __( 'Second header', 'elementor-extensions' ),
						],
						[
							'cell_text' 	=> __( 'Third header', 'elementor-extensions' ),
						],
					],
					'prevent_empty'		=> true,
					'fields' 			=>  $repeater_header->get_controls(),
					'title_field' 		=> '{{{ cell_text }}}',
				]
			);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_content',
			[
				'label' => __( 'Body', 'elementor-extensions' ),
			]
		);

			$repeater_elements = new Repeater();

			$repeater_elements->add_control(
				'type',
				[
					'label'		=> __( 'Start new', 'elementor-extensions' ),
					'type'		=> Controls_Manager::SELECT,
					'default'	=> 'cell',
					'options' 	=> [
						'row' 		=> __( 'Row', 'elementor-extensions' ),
						'cell' 		=> __( 'Cell', 'elementor-extensions' ),
					],

				]
			);

			$repeater_elements->add_control(
				'cell_type',
				[
					'label' 		=> __( 'Cell Type', 'elementor-extensions' ),
					'type'		=> Controls_Manager::SELECT,
					'default'	=> 'td',
					'options' 	=> [
						'td' 	=> __( 'Default', 'elementor-extensions' ),
						'th' 	=> __( 'Header', 'elementor-extensions' ),
					],
					'condition'	=> [
						'type'		=> 'cell',
					]
				]
			);

			$repeater_elements->add_control(
				'cell_header',
				[
					'label' 		=> __( 'Mobile Header', 'elementor-extensions' ),
					'description'	=> __( 'Overrides value set by Auto Mobile Header option.', 'elementor-extensions' ),
					'title' 		=> __( 'Specify the header text for this cell to appear on mobile', 'elementor-extensions' ),
					'type' 			=> Controls_Manager::TEXT,
					'dynamic' 		=> [ 'active' => true ],
					'condition'	=> [
						'type'		=> 'cell',
					]
				]
			);

			$this->_register_cell_controls( $repeater_elements, [ 'type' => 'cell' ] );

			$repeater_elements->add_control(
				'link',
				[
					'label' 		=> __( 'Link', 'elementor-extensions' ),
					'type' 			=> Controls_Manager::URL,
					'dynamic' 		=> [ 'active' => true ],
					'label_block'	=> false,
					'placeholder' 	=> esc_url( home_url( '/' ) ),
					'condition'	=> [
						'type'		=> 'cell',
					]
				]
			);

			$this->add_control(
				'rows',
				[
					'label' 	=> __( 'Rows', 'elementor-extensions' ),
					'type' 		=> Controls_Manager::REPEATER,
					'default' 	=> [
						[
							'type' 		=> 'row',
						],
						[
							'type' 			=> 'cell',
							'cell_text' 	=> __( 'First column', 'elementor-extensions' ),
							'cell_type'		=> 'td',
						],
						[
							'type' 			=> 'cell',
							'cell_text' 	=> __( 'Second column', 'elementor-extensions' ),
							'cell_type'		=> 'td',
						],
						[
							'type' 			=> 'cell',
							'cell_text' 	=> __( 'Third column', 'elementor-extensions' ),
							'cell_type'		=> 'td',
						],
						[
							'type' 			=> 'row',
						],
						[
							'type' 			=> 'cell',
							'cell_text' 	=> __( 'First column', 'elementor-extensions' ),
						],
						[
							'type' 			=> 'cell',
							'cell_text' 	=> __( 'Second column', 'elementor-extensions' ),
						],
						[
							'type' 			=> 'cell',
							'cell_text' 	=> __( 'Third column', 'elementor-extensions' ),
						],
					],
					'fields' 			=>  $repeater_elements->get_controls(),
					'title_field' 		=> 'Start {{ type }}: {{{ cell_text }}}',
				]
			);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_table_style',
			[
				'label' 	=> __( 'Table', 'elementor-extensions' ),
				'tab' 		=> Controls_Manager::TAB_STYLE,
			]
		);

			$this->add_responsive_control(
				'size',
				[
					'label' => __( 'Maximum Size', 'elementor-extensions' ),
					'type' => Controls_Manager::SLIDER,
					'default' => [
						'size' => 100,
						'unit' => '%',
					],
					'size_units' => [ '%', 'px' ],
					'range' => [
						'%' => [
							'min' => 1,
							'max' => 100,
						],
						'px' => [
							'min' => 1,
							'max' => 1200,
						],
					],
					'selectors' => [
						'{{WRAPPER}} .elementor-widget-container' => 'max-width: {{SIZE}}{{UNIT}};',
					],
				]
			);

			$this->add_responsive_control(
				'align',
				[
					'label' 		=> __( 'Alignment', 'elementor-extensions' ),
					'type' 			=> Controls_Manager::CHOOSE,
					'default'		=> 'center',
					'options' 		=> [
						'flex-start' 		=> [
							'title' => __( 'Left', 'elementor-extensions' ),
							'icon' 	=> 'eicon-h-align-left',
						],
						'center' 	=> [
							'title' => __( 'Center', 'elementor-extensions' ),
							'icon' 	=> 'eicon-h-align-center',
						],
						'flex-end' 	=> [
							'title' => __( 'Right', 'elementor-extensions' ),
							'icon' 	=> 'eicon-h-align-right',
						],
					],
					'selectors' 	=> [
						'{{WRAPPER}}' => 'justify-content: {{VALUE}};',
					],
				]
			);

			$this->add_group_control(
				EE_MB_Group_Control_Transition::get_type(),
				[
					'name' 			=> 'table',
					'selector' 		=> '{{WRAPPER}} .ele-site-table__row,
										{{WRAPPER}} .ele-site-table__cell',
				]
			);

			$this->update_control( 'table_transition', array(
				'default' => 'custom',
			));

		$this->end_controls_section();

		$this->start_controls_section(
			'section_rows_style',
			[
				'label' 	=> __( 'Rows', 'elementor-extensions' ),
				'tab' 		=> Controls_Manager::TAB_STYLE,
			]
		);

			$this->add_group_control(
				Group_Control_Border::get_type(),
				[
					'name' 		=> 'row_border',
					'label' 	=> __( 'Border', 'elementor-extensions' ),
					'selector' 	=> '{{WRAPPER}} .ele-site-table__row',
				]
			);

			$this->add_control(
				'row_alternate',
				[
					'label'		=> __( 'Alternate', 'elementor-extensions' ),
					'type'		=> Controls_Manager::SELECT,
					'default'	=> 'even',
					'options' 	=> [
						'even' 	=> __( 'Even', 'elementor-extensions' ),
						'odd' 	=> __( 'Odd', 'elementor-extensions' ),
					],

				]
			);

			$this->start_controls_tabs( 'tabs_row_style' );

			$this->start_controls_tab( 'tab_row_default_style', [ 'label' => __( 'Default', 'elementor-extensions' ) ] );

				$this->add_control(
					'row_style_heading',
					[
						'label'		=> __( 'Default', 'elementor-extensions' ),
						'type'		=> Controls_Manager::HEADING,
					]
				);

				$this->add_responsive_control(
					'row_color',
					[
						'label' 	=> __( 'Color', 'elementor-extensions' ),
						'type' 		=> Controls_Manager::COLOR,
						'global' => [
							'default' => Global_Colors::COLOR_TEXT,
						],
						'selectors' => [
							'{{WRAPPER}} .ele-site-table__row .ele-site-table__text' => 'color: {{VALUE}};',
						],
					]
				);

				$this->add_responsive_control(
					'row_background',
					[
						'label' 	=> __( 'Background Color', 'elementor-extensions' ),
						'type' 		=> Controls_Manager::COLOR,
						'selectors' => [
							'{{WRAPPER}} .ele-site-table__row' => 'background-color: {{VALUE}};',
						],
					]
				);

				$this->add_control(
					'row_style_hover_heading',
					[
						'label'		=> __( 'Hover', 'elementor-extensions' ),
						'type'		=> Controls_Manager::HEADING,
					]
				);

				$this->add_control(
					'row_hover_color',
					[
						'label' 	=> __( 'Color', 'elementor-extensions' ),
						'type' 		=> Controls_Manager::COLOR,
						'selectors' => [
							'(desktop+){{WRAPPER}} .ele-site-table__row:hover .ele-site-table__text' => 'color: {{VALUE}};',
						],
					]
				);

				$this->add_control(
					'row_hover_background',
					[
						'label' 	=> __( 'Background Color', 'elementor-extensions' ),
						'type' 		=> Controls_Manager::COLOR,
						'selectors' => [
							'(desktop+){{WRAPPER}} .ele-site-table__row:hover' => 'background-color: {{VALUE}};',
						],
					]
				);

			$this->end_controls_tab();

			$this->start_controls_tab( 'tab_row_alternate_style', [ 'label' => __( 'Alternate', 'elementor-extensions' ) ] );

				$this->add_control(
					'row_style_alternate_heading',
					[
						'label'		=> __( 'Default', 'elementor-extensions' ),
						'type'		=> Controls_Manager::HEADING,
					]
				);

				$this->add_responsive_control(
					'row_alternate_color',
					[
						'label' 	=> __( 'Color', 'elementor-extensions' ),
						'type' 		=> Controls_Manager::COLOR,
						'selectors' => [
							'{{WRAPPER}} .ele-site-table--odd .ele-site-table__row:nth-child(odd) .ele-site-table__text,
							 {{WRAPPER}} .ele-site-table--even .ele-site-table__row:nth-child(even) .ele-site-table__text' => 'color: {{VALUE}};',
						],
					]
				);

				$this->add_responsive_control(
					'row_alternate_background',
					[
						'label' 	=> __( 'Background Color', 'elementor-extensions' ),
						'type' 		=> Controls_Manager::COLOR,
						'selectors' => [
							'{{WRAPPER}} .ele-site-table--odd .ele-site-table__row:nth-child(odd),
							 {{WRAPPER}} .ele-site-table--even .ele-site-table__row:nth-child(even)' => 'background-color: {{VALUE}};',
						],
					]
				);

				$this->add_control(
					'row_style_alternate_hover_heading',
					[
						'label'		=> __( 'Hover', 'elementor-extensions' ),
						'type'		=> Controls_Manager::HEADING,
					]
				);

				$this->add_control(
					'row_alternate_hover_color',
					[
						'label' 	=> __( 'Color', 'elementor-extensions' ),
						'type' 		=> Controls_Manager::COLOR,
						'selectors' => [
							'(desktop+){{WRAPPER}} .ele-site-table--odd .ele-site-table__row:nth-child(odd):hover .ele-site-table__text,
							 {{WRAPPER}} .ele-site-table--even .ele-site-table__row:nth-child(even):hover .ele-site-table__text' => 'color: {{VALUE}};',
						],
					]
				);

				$this->add_control(
					'row_alternate_hover_background',
					[
						'label' 	=> __( 'Background Color', 'elementor-extensions' ),
						'type' 		=> Controls_Manager::COLOR,
						'selectors' => [
							'(desktop+){{WRAPPER}} .ele-site-table--odd .ele-site-table__row:nth-child(odd):hover,
							 {{WRAPPER}} .ele-site-table--even .ele-site-table__row:nth-child(even):hover' => 'background-color: {{VALUE}};',
						],
					]
				);

			$this->end_controls_tab();

			$this->end_controls_tabs();

		$this->end_controls_section();

		$this->start_controls_section(
			'section_cells_style',
			[
				'label' 	=> __( 'Cells', 'elementor-extensions' ),
				'tab' 		=> Controls_Manager::TAB_STYLE,
			]
		);

			$this->add_group_control(
				Group_Control_Typography::get_type(),
				[
					'name' 		=> 'cell_typography',
					'label' 	=> __( 'Typography', 'elementor-extensions' ),
					'global' => [
						'default' => Global_Typography::TYPOGRAPHY_TEXT,
					],
					'selector' 	=> '{{WRAPPER}} td.ele-site-table__cell',
				]
			);

			$this->start_controls_tabs( 'tabs_cell_colors' );

			$this->start_controls_tab( 'tab_cell_colors', [ 'label' => __( 'Default', 'elementor-extensions' ) ] );

				$this->add_responsive_control(
					'cell_color',
					[
						'label' 	=> __( 'Color', 'elementor-extensions' ),
						'type' 		=> Controls_Manager::COLOR,
						'global' => [
							'default' => Global_Colors::COLOR_TEXT,
						],
						'selectors' => [
							'{{WRAPPER}} .ele-site-table__cell .ele-site-table__text' => 'color: {{VALUE}};',
						],
					]
				);

				$this->add_responsive_control(
					'cell_background',
					[
						'label' 	=> __( 'Background Color', 'elementor-extensions' ),
						'type' 		=> Controls_Manager::COLOR,
						'selectors' => [
							'{{WRAPPER}} .ele-site-table__cell' => 'background-color: {{VALUE}};',
						],
					]
				);

			$this->end_controls_tab();

			$this->start_controls_tab( 'tab_cell_hover_colors', [ 'label' => __( 'Hover', 'elementor-extensions' ) ] );

				$this->add_control(
					'cell_hover_color',
					[
						'label' 	=> __( 'Color', 'elementor-extensions' ),
						'type' 		=> Controls_Manager::COLOR,
						'selectors' => [
							'(desktop+){{WRAPPER}} .ele-site-table__cell:hover .ele-site-table__text' => 'color: {{VALUE}};',
						],
					]
				);

				$this->add_control(
					'cell_hover_background',
					[
						'label' 	=> __( 'Background Color', 'elementor-extensions' ),
						'type' 		=> Controls_Manager::COLOR,
						'selectors' => [
							'(desktop+){{WRAPPER}} .ele-site-table__cell:hover' => 'background-color: {{VALUE}};',
						],
					]
				);

			$this->end_controls_tab();

			$this->end_controls_tabs();

			$this->start_controls_tabs( 'tabs_cell_style' );

			$this->start_controls_tab( 'tab_cell_default_style', [ 'label' => __( 'Default', 'elementor-extensions' ) ] );

				$this->add_responsive_control(
					'cell_padding',
					[
						'label' 		=> __( 'Padding', 'elementor-extensions' ),
						'type' 			=> Controls_Manager::DIMENSIONS,
						'size_units' 	=> [ 'px', 'em', '%' ],
						'selectors' 	=> [
							'{{WRAPPER}} .ele-site-table__text' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
						],
					]
				);

				$this->add_responsive_control(
					'cell_align',
					[
						'label' 		=> __( 'Align Text', 'elementor-extensions' ),
						'type' 			=> Controls_Manager::CHOOSE,
						'default' 		=> '',
						'options' 		=> [
							'flex-start'    		=> [
								'title' 	=> __( 'Left', 'elementor-extensions' ),
								'icon' 		=> 'fa fa-align-left',
							],
							'center' 		=> [
								'title' 	=> __( 'Center', 'elementor-extensions' ),
								'icon' 		=> 'fa fa-align-center',
							],
							'flex-end' 		=> [
								'title' 	=> __( 'Right', 'elementor-extensions' ),
								'icon' 		=> 'fa fa-align-right',
							],
						],
						'selectors'		=> [
							'{{WRAPPER}} .ele-site-table__text' 	=> 'justify-content: {{VALUE}};',
						]
					]
				);

				$this->add_responsive_control(
					'cell_alignment_height',
					[
						'label' => __( 'Cell Height', 'elementor-extensions' ),
						'type' => Controls_Manager::SLIDER,
						'default' => [
							'size' => '',
							'unit' => 'px',
						],
						'size_units' => [ '%', 'px' ],
						'range' => [
							'%' => [
								'min' => 1,
								'max' => 100,
							],
							'px' => [
								'min' => 1,
								'max' => 1200,
							],
						],
						'selectors' => [
							'{{WRAPPER}} .ele-site-table__text' => 'height: {{SIZE}}{{UNIT}};',
						],
					]
				);

				$this->add_responsive_control(
					'cell_vertical_align',
					[
						'label' 		=> __( 'Vertical Align Text', 'elementor-extensions' ),
						'type' 			=> Controls_Manager::CHOOSE,
						'default' 		=> '',
						'options' 		=> [
							'flex-start'    => [
								'title' 	=> __( 'Top', 'elementor-extensions' ),
								'icon' 		=> 'eicon-v-align-top',
							],
							'center'    		=> [
								'title' 	=> __( 'Middle', 'elementor-extensions' ),
								'icon' 		=> 'eicon-v-align-middle',
							],
							'flex-end' 		=> [
								'title' 	=> __( 'Bottom', 'elementor-extensions' ),
								'icon' 		=> 'eicon-v-align-bottom',
							],
						],
						'selectors'		=> [
							'{{WRAPPER}} .ele-site-table__text' => 'align-items: {{VALUE}};',
						]
					]
				);

				$this->add_group_control(
					Group_Control_Border::get_type(),
					[
						'name' 		=> 'cell_border',
						'label' 	=> __( 'Border', 'elementor-extensions' ),
						'selector' 	=> '{{WRAPPER}} .ele-site-table__cell',
					]
				);

			$this->end_controls_tab();

			$this->start_controls_tab( 'tab_cell_first_style', [ 'label' => __( 'First', 'elementor-extensions' ) ] );

				$this->add_responsive_control(
					'cell_first_padding',
					[
						'label' 		=> __( 'Padding', 'elementor-extensions' ),
						'type' 			=> Controls_Manager::DIMENSIONS,
						'size_units' 	=> [ 'px', 'em', '%' ],
						'selectors' 	=> [
							'{{WRAPPER}} .ele-site-table__cell:first-child .ele-site-table__text' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
						],
					]
				);

				$this->add_responsive_control(
					'cell_first_align',
					[
						'label' 		=> __( 'Align Text', 'elementor-extensions' ),
						'type' 			=> Controls_Manager::CHOOSE,
						'default' 		=> '',
						'options' 		=> [
							'flex-start'    		=> [
								'title' 	=> __( 'Left', 'elementor-extensions' ),
								'icon' 		=> 'fa fa-align-left',
							],
							'center' 		=> [
								'title' 	=> __( 'Center', 'elementor-extensions' ),
								'icon' 		=> 'fa fa-align-center',
							],
							'flex-end' 		=> [
								'title' 	=> __( 'Right', 'elementor-extensions' ),
								'icon' 		=> 'fa fa-align-right',
							],
						],
						'selectors'		=> [
							'{{WRAPPER}} .ele-site-table__cell:first-child .ele-site-table__text' => 'justify-content: {{VALUE}};',
						]
					]
				);

				$this->add_group_control(
					Group_Control_Border::get_type(),
					[
						'name' 		=> 'cell_first_border',
						'label' 	=> __( 'Border', 'elementor-extensions' ),
						'selector' 	=> '(tablet+){{WRAPPER}} .ele-site-table__cell:first-child',
					]
				);

			$this->end_controls_tab();

			$this->start_controls_tab( 'tab_cell_last_style', [ 'label' => __( 'Last', 'elementor-extensions' ) ] );

				$this->add_responsive_control(
					'cell_last_padding',
					[
						'label' 		=> __( 'Padding', 'elementor-extensions' ),
						'type' 			=> Controls_Manager::DIMENSIONS,
						'size_units' 	=> [ 'px', 'em', '%' ],
						'selectors' 	=> [
							'{{WRAPPER}} .ele-site-table__cell:last-child .ele-site-table__text' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
						],
					]
				);

				$this->add_responsive_control(
					'cell_last_align',
					[
						'label' 		=> __( 'Align Text', 'elementor-extensions' ),
						'type' 			=> Controls_Manager::CHOOSE,
						'default' 		=> '',
						'options' 		=> [
							'flex-start'    		=> [
								'title' 	=> __( 'Left', 'elementor-extensions' ),
								'icon' 		=> 'fa fa-align-left',
							],
							'center' 		=> [
								'title' 	=> __( 'Center', 'elementor-extensions' ),
								'icon' 		=> 'fa fa-align-center',
							],
							'flex-end' 		=> [
								'title' 	=> __( 'Right', 'elementor-extensions' ),
								'icon' 		=> 'fa fa-align-right',
							],
						],
						'selectors'		=> [
							'{{WRAPPER}} .ele-site-table__cell:last-child .ele-site-table__text' => 'justify-content: {{VALUE}};',
						]
					]
				);

				$this->add_group_control(
					Group_Control_Border::get_type(),
					[
						'name' 		=> 'cell_last_border',
						'label' 	=> __( 'Border', 'elementor-extensions' ),
						'selector' 	=> '(tablet+){{WRAPPER}} .ele-site-table__cell:last-child',
					]
				);

			$this->end_controls_tab();

			$this->end_controls_tabs();

		$this->end_controls_section();

		$this->start_controls_section(
			'section_header_style',
			[
				'label' 	=> __( 'Headers', 'elementor-extensions' ),
				'tab' 		=> Controls_Manager::TAB_STYLE,
			]
		);

			$this->add_control(
				'mobile_headers_size',
				[
					'label' => __( 'Mobile Width (%)', 'elementor-extensions' ),
					'type' => Controls_Manager::SLIDER,
					'default' => [
						'size' => 50,
					],
					'range' => [
						'px' => [
							'min' => 10,
							'max' => 90,
							'step'=> 10,
						],
					],
					'condition' => [
						'mobile_headers_hide!' => 'hide',
					],
					'selectors' => [
						'{{WRAPPER}} .ele-site-table__cell[data-title]:before' => 'flex-basis: {{SIZE}}%;',
					],
				]
			);

			$this->add_group_control(
				Group_Control_Typography::get_type(),
				[
					'name' 		=> 'header_typography',
					'label' 	=> __( 'Typography', 'elementor-extensions' ),
					'global' => [
						'default' => Global_Typography::TYPOGRAPHY_ACCENT,
					],
					'selector' 	=> '{{WRAPPER}} th.ele-site-table__cell',
				]
			);

			$this->add_responsive_control(
				'header_alignment_height',
				[
					'label' => __( 'Header`s Cell Height', 'elementor-extensions' ),
					'type' => Controls_Manager::SLIDER,
					'default' => [
						'size' => '',
						'unit' => 'px',
					],
					'size_units' => [ '%', 'px' ],
					'range' => [
						'%' => [
							'min' => 1,
							'max' => 100,
						],
						'px' => [
							'min' => 1,
							'max' => 1200,
						],
					],
					'selectors' => [
						'{{WRAPPER}} th.ele-site-table__cell .ele-site-table__text' => 'height: {{SIZE}}{{UNIT}};',
					],
				]
			);

			$this->add_responsive_control(
				'header_vertical_align',
				[
					'label' 		=> __( 'Vertical Align Text', 'elementor-extensions' ),
					'type' 			=> Controls_Manager::CHOOSE,
					'default' 		=> '',
					'options' 		=> [
						'flex-start'    => [
							'title' 	=> __( 'Top', 'elementor-extensions' ),
							'icon' 		=> 'eicon-v-align-top',
						],
						'center'    	=> [
							'title' 	=> __( 'Middle', 'elementor-extensions' ),
							'icon' 		=> 'eicon-v-align-middle',
						],
						'flex-end' 		=> [
							'title' 	=> __( 'Bottom', 'elementor-extensions' ),
							'icon' 		=> 'eicon-v-align-bottom',
						],
					],
					'selectors'		=> [
						'{{WRAPPER}} th.ele-site-table__cell .ele-site-table__text' => 'align-items: {{VALUE}};',
					]
				]
			);

			$this->start_controls_tabs( 'tabs_header_colors' );

			$this->start_controls_tab( 'tab_header_colors', [ 'label' => __( 'Default', 'elementor-extensions' ) ] );

				$this->add_responsive_control(
					'header_cell_color',
					[
						'label' 	=> __( 'Color', 'elementor-extensions' ),
						'type' 		=> Controls_Manager::COLOR,
						'selectors' => [
							'{{WRAPPER}} th.ele-site-table__cell .ele-site-table__text' => 'color: {{VALUE}};',
							'{{WRAPPER}} .ele-site-table__cell[data-title]:before' => 'color: {{VALUE}};',
						],
					]
				);

				$this->add_responsive_control(
					'header_cell_background',
					[
						'label' 	=> __( 'Background Color', 'elementor-extensions' ),
						'type' 		=> Controls_Manager::COLOR,
						'global' => [
							'default' => Global_Colors::COLOR_PRIMARY,
						],
						'selectors' => [
							'{{WRAPPER}} th.ele-site-table__cell' => 'background-color: {{VALUE}};',
							'{{WRAPPER}} .ele-site-table__cell[data-title]:before' => 'background-color: {{VALUE}};',
						],
					]
				);

			$this->end_controls_tab();

			$this->start_controls_tab( 'tab_header_hover_colors', [ 'label' => __( 'Hover', 'elementor-extensions' ) ] );

				$this->add_control(
					'header_cell_hover_color',
					[
						'label' 	=> __( 'Color', 'elementor-extensions' ),
						'type' 		=> Controls_Manager::COLOR,
						'selectors' => [
							'(tablet+){{WRAPPER}} th.ele-site-table__cell:hover .ele-site-table__text' => 'color: {{VALUE}};',
						],
					]
				);

				$this->add_control(
					'header_cell_hover_background',
					[
						'label' 	=> __( 'Background Color', 'elementor-extensions' ),
						'type' 		=> Controls_Manager::COLOR,
						'selectors' => [
							'(tablet+){{WRAPPER}} th.ele-site-table__cell:hover' => 'background-color: {{VALUE}};',
						],
					]
				);

			$this->end_controls_tab();

			$this->end_controls_tabs();

			$this->start_controls_tabs( 'tabs_header_style' );

			$this->start_controls_tab( 'tab_header_default_style', [ 'label' => __( 'Default', 'elementor-extensions' ) ] );

				$this->add_responsive_control(
					'header_cell_padding',
					[
						'label' 		=> __( 'Padding', 'elementor-extensions' ),
						'type' 			=> Controls_Manager::DIMENSIONS,
						'size_units' 	=> [ 'px', 'em', '%' ],
						'selectors' 	=> [
							'{{WRAPPER}} th.ele-site-table__cell .ele-site-table__text' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
							'{{WRAPPER}} .ele-site-table__cell[data-title]:before' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
						],
					]
				);

				$this->add_group_control(
					Group_Control_Border::get_type(),
					[
						'name' 		=> 'header_cell_border',
						'label' 	=> __( 'Border', 'elementor-extensions' ),
						'selector' 	=>
							'{{WRAPPER}} th.ele-site-table__cell, {{WRAPPER}} .ele-site-table__cell[data-title]:before',
					]
				);

			$this->end_controls_tab();

			$this->start_controls_tab( 'tab_header_first_style', [ 'label' => __( 'First', 'elementor-extensions' ) ] );

				$this->add_responsive_control(
					'header_cell_first_padding',
					[
						'label' 		=> __( 'Padding', 'elementor-extensions' ),
						'type' 			=> Controls_Manager::DIMENSIONS,
						'size_units' 	=> [ 'px', 'em', '%' ],
						'selectors' 	=> [
							'{{WRAPPER}} th.ele-site-table__cell:first-child .ele-site-table__text' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
							'{{WRAPPER}} .ele-site-table__cell:first-child[data-title]:before' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
						],
					]
				);

				$this->add_group_control(
					Group_Control_Border::get_type(),
					[
						'name' 		=> 'header_cell_first_border',
						'label' 	=> __( 'Border', 'elementor-extensions' ),
						'selector' 	=>
							'(tablet+){{WRAPPER}} th.ele-site-table__cell:first-child, {{WRAPPER}} .ele-site-table__cell:first-child[data-title]:before',
					]
				);

			$this->end_controls_tab();

			$this->start_controls_tab( 'tab_header_last_style', [ 'label' => __( 'Last', 'elementor-extensions' ) ] );

				$this->add_responsive_control(
					'header_cell_last_padding',
					[
						'label' 		=> __( 'Padding', 'elementor-extensions' ),
						'type' 			=> Controls_Manager::DIMENSIONS,
						'size_units' 	=> [ 'px', 'em', '%' ],
						'selectors' 	=> [
							'{{WRAPPER}} th.ele-site-table__cell:last-child .ele-site-table__text' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
							'{{WRAPPER}} .ele-site-table__cell:last-child[data-title]:before' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
						],
					]
				);

				$this->add_group_control(
					Group_Control_Border::get_type(),
					[
						'name' 		=> 'header_cell_last_border',
						'label' 	=> __( 'Border', 'elementor-extensions' ),
						'selector' 	=>
							'(tablet+){{WRAPPER}} th.ele-site-table__cell:last-child, {{WRAPPER}} .ele-site-table__cell:last-child[data-title]:before',
					]
				);

			$this->end_controls_tab();

			$this->end_controls_tabs();

		$this->end_controls_section();

		$this->start_controls_section(
			'section_columns_style',
			[
				'label' 	=> __( 'Columns', 'elementor-extensions' ),
				'tab' 		=> Controls_Manager::TAB_STYLE,
			]
		);

			$repeater_columns = new Repeater();

			$repeater_columns->add_control(
				'span',
				[
					'label' 		=> __( 'Span', 'elementor-extensions' ),
					'title'			=> __( 'Rule applies to this number of columns starting after the previous rule.', 'elementor-extensions' ),
					'type' 			=> Controls_Manager::NUMBER,
					'default' 		=> 1,
					'min' 			=> 1,
					'step' 			=> 1,
					'label_block' 	=> false,
				]
			);

			$repeater_columns->add_control(
				'column_background',
				[
					'label' 	=> __( 'Background Color', 'elementor-extensions' ),
					'type' 		=> Controls_Manager::COLOR,
					'selectors' => [
						'(tablet+){{WRAPPER}} {{CURRENT_ITEM}}' => 'background-color: {{VALUE}};',
					],
				]
			);

			$repeater_columns->add_group_control(
				Group_Control_Border::get_type(),
				[
					'name' 		=> 'column_border',
					'label' 	=> __( 'Border', 'elementor-extensions' ),
					'selector' 	=> '(tablet+){{WRAPPER}} {{CURRENT_ITEM}}',
				]
			);

			$repeater_columns->add_control(
				'column_size',
				[
					'label' => __( 'Width', 'elementor-extensions' ),
					'type' => Controls_Manager::SLIDER,
					'size_units' => [ '%', 'px' ],
					'range' => [
						'%' => [
							'min' => 1,
							'max' => 100,
						],
						'px' => [
							'min' => 1,
							'max' => 1200,
						],
					],
					'selectors' => [
						'(tablet+){{WRAPPER}} {{CURRENT_ITEM}}' => 'width: {{SIZE}}{{UNIT}};',
					],
				]
			);

			$this->add_control(
				'rules',
				[
					'label' 			=> __( 'Column Rules', 'elementor-extensions' ),
					'type' 				=> Controls_Manager::REPEATER,
					'fields' 			=> $repeater_columns->get_controls(),
					'prevent_empty'		=> true,
					'title_field' 		=> 'Column',
					'default'			=> [
						[
							'span'		=> 1
						]
					]
				]
			);

		$this->end_controls_section();
	}

	protected function render() {
		$settings = $this->get_settings_for_display();

		if ( empty( $settings['rows'] ) )
				return;

		$this->add_render_attribute( [
			'table' => [
				'class' => [
					'ele-site-table',
					'ele-site-table--' . $settings['row_alternate'],
					'ele-site-table--' . $settings['scrollable'],
				],
			],
			'body-row' => [
				'class' => 'ele-site-table__row',
			],
			'body-cell-text-inner' => [
				'class' => 'ele-site-table__text__inner',
			],
		] );

		if ( $settings['sortable'] ) {
			$this->add_render_attribute( 'table', 'class', 'ele-site-table--sortable' );
		}

		if ( $settings['rules'] ) {
			$this->add_render_attribute( 'table', 'class', 'ele-site-table--rules' );
		} ?>
		
		<table <?php echo $this->get_render_attribute_string( 'table' ); ?>>

			<?php

			$this->render_rules();
			$this->render_header();

			?><tbody><?php

				if ( $this->is_invalid_first_row() ) {
					?><tr <?php echo $this->get_render_attribute_string( 'body-row' ); ?>><?php
				}

				foreach ( $settings['rows'] as $index => $row ) {
					call_user_func( [ $this, 'render_' . $row['type'] ], $row, $index );
				}

				?></tr>
			</tbody>
		</table>

		<?php
	}

	protected function is_invalid_first_row() {
		$settings = $this->get_settings_for_display();

		if ( 'row' === $settings['rows'][0]['type'] )
			return false;

		return true;
	}

	protected function render_rules() {
		$settings = $this->get_settings_for_display();

		if ( $settings['rules'] ) { ?>
			<colgroup>
				<?php foreach( $settings['rules'] as $rule ) { ?>
				<col span="<?php echo esc_attr($rule['span']); ?>" class="elementor-repeater-item-<?php echo (!empty($rule['_id'])) ? esc_attr($rule['_id']) : ''; ?>">
				<?php } ?>
			</colgroup>
		<?php }

	}

	protected function render_header() {
		$settings = $this->get_settings_for_display();

		if ( empty( $settings['header_cells'] ) )
			return;

		$this->add_render_attribute( [
			'header-row' => [
				'class' => 'ele-site-table__row',
			],
			'header-cell-text' => [
				'class' => [
					'ele-site-table__text',
				],
			],
			'header-cell-text-inner' => [
				'class' => [
					'ele-site-table__text__inner',
				],
			],
			'sort' => [
				'class' => [
					'esicon',
					'esicon-sort-up-down',
				],
			],
			'sort-up' => [
				'class' => [
					'esicon',
					'esicon-sort-up',
				],
			],
			'sort-down' => [
				'class' => [
					'esicon',
					'esicon-sort-down',
				],
			],
		] );

		$this->add_inline_editing_attributes( 'header-cell-text-inner', 'basic' );

		?><thead>
			<tr <?php echo $this->get_render_attribute_string( 'header-row' ); ?>>

			<?php foreach ( $settings['header_cells'] as $index => $item ) {

				$header_cell_key 				= $this->get_repeater_setting_key( 'cell', 'header_cells', $index );
				$header_cell_text_key 		= $this->get_repeater_setting_key( 'cell-text', 'header_cells', $index );
				$header_cell_inner_text_key = $this->get_repeater_setting_key( 'cell-text-inner', 'header_cells', $index );
				$header_cell_icon_wrapper_key 	= $this->get_repeater_setting_key( 'cell-icon-wrapper', 'header_cells', $index );
				$header_cell_icon_key 			= $this->get_repeater_setting_key( 'cell-icon', 'header_cells', $index );

				$item_id = (!empty($item['_id'])) ? $item['_id'] : '';

				$this->add_render_attribute( [
					$header_cell_key => [
						'class' => [
							'ele-site-table__cell',
							'elementor-repeater-item-' .$item_id
						],
					],
					$header_cell_text_key => [
						'class' => 'ele-site-table__text',
					],
					$header_cell_inner_text_key => [
						'class' => 'ele-site-table__text__inner',
					],
				] );

				if ( $item['_item_id'] )
					$this->add_render_attribute( $header_cell_key, 'id', $item['_item_id'] );

				if ( $item['css_classes'] )
					$this->add_render_attribute( $header_cell_key, 'class', $item['css_classes'] );

				if ( $item['cell_span'] > 1 )
					$this->add_render_attribute( $header_cell_key, 'colspan', $item['cell_span'] );

				if ( $item['cell_row_span'] > 1 )
					$this->add_render_attribute( $header_cell_key, 'rowspan', $item['cell_row_span'] );

				$this->add_inline_editing_attributes( $header_cell_inner_text_key, 'basic' );
				/* Output header contents */
				?><th <?php echo $this->get_render_attribute_string( $header_cell_key ); ?>>
					<span <?php echo $this->get_render_attribute_string( $header_cell_text_key ); ?>>

					<?php 
					$header_cell_icon_key_class = '';
				
					if ( 'text' === $item['cell_content'] && ! empty( $item['selected_cell_icon']['value'] )) {

						$header_cell_icon_key_class = $item['selected_cell_icon']['value'];

						$this->add_render_attribute( [
							$header_cell_icon_wrapper_key => [
								'class' => 'ele-site-align-icon--' . $item['cell_icon_align'],
							],
							$header_cell_icon_key => [
								'class' => esc_attr( $header_cell_icon_key_class ),
							],
						] );

						?><span <?php echo $this->get_render_attribute_string( $header_cell_icon_wrapper_key ); ?>>
							<i <?php echo $this->get_render_attribute_string( $header_cell_icon_key ); ?>></i>
						</span><?php
					}

						?><span <?php echo $this->get_render_attribute_string( 'header-cell-text-inner' ); ?>>
							<?php echo esc_html($item['cell_text']); ?>
						</span>

						<?php if ( 'yes' === $settings['sortable'] ) { ?>
							<span <?php echo $this->get_render_attribute_string( 'sort' ); ?>></span>
							<span <?php echo $this->get_render_attribute_string( 'sort-up' ); ?>></span>
							<span <?php echo $this->get_render_attribute_string( 'sort-down' ); ?>></span>
						<?php } ?>

					</span>
				</th>

			<?php } /* foreach */ ?>
			</tr>
		</thead><?php
	}

	protected function render_cell( $row, $index ) {

		$settings = $this->get_settings_for_display();

		$text_tag 		= 'span';
		$header_text 	= $row['cell_header'];

		$cell_key 				= $this->get_repeater_setting_key( 'cell', 'rows', $index );
		$cell_text_key 			= $this->get_repeater_setting_key( 'cell-text', 'rows', $index );
		$cell_text_inner_key 	= $this->get_repeater_setting_key( 'cell-text-inner', 'rows', $index );
		$cell_icon_wrapper_key 	= $this->get_repeater_setting_key( 'cell-icon-wrapper', 'rows', $index );
		$cell_icon_key 			= $this->get_repeater_setting_key( 'cell-icon', 'rows', $index );

		if ( ! empty( $row['link']['url'] ) ) {

			$text_tag = 'a';

			$this->add_render_attribute( $cell_text_key, 'href', $row['link']['url'] );

			if ( $row['link']['is_external'] ) {
				$this->add_render_attribute( $cell_text_key, 'target', '_blank' );
			}

			if ( ! empty( $row['link']['nofollow'] ) ) {
				$this->add_render_attribute( $cell_text_key, 'rel', 'nofollow' );
			}
		}

		if ( 'hide' !== $settings['mobile_headers_hide'] ) {
			if ( 'yes' === $settings['mobile_headers_auto'] ) {

				/* Fetch corresponding header cell text */
				if ( isset( $settings['header_cells'][ $this->cell_counter ] ) && '' === $row['cell_header'] ) {
					$header_text = $settings['header_cells'][ $this->cell_counter ]['cell_text'];
				}

				/* Increment to next cell */
				$this->cell_counter ++;
			}
		}

		$row_id = (!empty($row['_id'])) ?  $row['_id'] : '';

		$this->add_render_attribute( [
			$cell_key => [
				'class' => [
					'ele-site-table__cell',
					'elementor-repeater-item-' . $row_id,
				],
			],
			$cell_text_key => [
				'class' => [
					'ele-site-table__text',
				],
			],
			$cell_text_inner_key => [
				'class' => 'ele-site-table__text__inner',
			],
		] );

		$this->add_inline_editing_attributes( $cell_text_inner_key, 'basic' );

		if ( $row['_item_id'] )
			$this->add_render_attribute( $cell_key, 'id', $row['_item_id'] );

		if ( $row['css_classes'] )
			$this->add_render_attribute( $cell_key, 'class', $row['css_classes'] );

		if ( $header_text )
			$this->add_render_attribute( $cell_key, 'data-title', $header_text );

		if ( $row['cell_span'] > 1 )
			$this->add_render_attribute( $cell_key, 'colspan', $row['cell_span'] );

		if ( $row['cell_row_span'] > 1 )
			$this->add_render_attribute( $cell_key, 'rowspan', $row['cell_row_span'] );

		/* Output cell contents */
		?>
		<<?php echo esc_attr($row['cell_type']); ?> <?php echo $this->get_render_attribute_string( $cell_key ); ?>>
			<<?php echo esc_attr($text_tag); ?> <?php echo $this->get_render_attribute_string( $cell_text_key ); ?>>

			<?php

			$header_cell_icon_key_class = '';
			if ( 'text' === $row['cell_content'] && ! empty( $row['selected_cell_icon']['value'] ) ) {

				$header_cell_icon_key_class = $row['selected_cell_icon']['value'];

				$this->add_render_attribute( [
					$cell_icon_wrapper_key => [
						'class' => 'ele-site-align-icon--' . $row['cell_icon_align'],
					],
					$cell_icon_key => [
						'class' => esc_attr( $header_cell_icon_key_class ),
					],
				] );

				?><span <?php echo $this->get_render_attribute_string( $cell_icon_wrapper_key ); ?>>
					<i <?php echo $this->get_render_attribute_string( $cell_icon_key ); ?>></i>
				</span>
			<?php } ?>

				<span <?php echo $this->get_render_attribute_string( 'body-cell-text-inner' ); ?>>
					<?php echo $row['cell_text']; ?>
				</span>
			</<?php echo esc_attr($text_tag); ?>>
		</<?php echo esc_attr($row['cell_type']); ?>><?php
	}

	protected function render_row( $row, $index ) {

		$settings 	= $this->get_settings_for_display();
		$row_count 	= count( $settings['rows'] );
		$row_key 	= $this->get_repeater_setting_key( 'body-row', 'rows', $index );
		$counter 	= $index + 1;

		$row_id = (!empty($row['_id'])) ?  $row['_id'] : '';
		$this->add_render_attribute( [
			$row_key => [
				'class' => [
					'ele-site-table__row',
					'elementor-repeater-item-' . $row_id,
				],
			],
		] );

		if ( $row['_item_id'] )
			$this->add_render_attribute( $row_key, 'id', $row['_item_id'] );

		if ( $row['css_classes'] )
			$this->add_render_attribute( $row_key, 'class', $row['css_classes'] );

		if ( $counter > 1 && $counter < $row_count ) {

			/* Break into new row */
			?></tr><tr <?php echo $this->get_render_attribute_string( $row_key ); ?>>

		<?php } else if ( 1 === $counter && false === $this->is_invalid_first_row() ) {
			?><tr <?php echo $this->get_render_attribute_string( $row_key ); ?>>
		<?php }

		$this->cell_counter = 0;
	}

	protected function render_cell_icon( $index, $item, $type = 'cell' ) {
		if ( 'text' === $item['cell_content'] && ( ! empty( $item['cell_icon'] ) || ! empty( $item['selected_cell_icon']['value'] ) ) ) {
			$icon_wrapper_key 	= $this->get_repeater_setting_key( 'icon-wrapper', $type, $index );
			$icon_key 			= $this->get_repeater_setting_key( 'icon', $type, $index );

			$migrated = isset( $item['__fa4_migrated']['selected_cell_icon'] );
			$is_new = empty( $item['cell_icon'] ) && Icons_Manager::is_migration_allowed();

			$this->add_render_attribute( [
				$icon_wrapper_key => [
					'class' => [
						'ee-icon',
						'ee-icon-support--svg',
						'ee-icon--' . $item['cell_icon_align'],
					],
				],
			] );

			if ( ! empty( $item['cell_icon'] ) ) {
				$this->add_render_attribute( [
					$icon_key => [
						'class' => esc_attr( $item['cell_icon'] ),
						'aria-hidden' => 'true',
					],
				] );
			}

			?><span <?php echo $this->get_render_attribute_string( $icon_wrapper_key ); ?>><?php
				if ( $is_new || $migrated ) {
					Icons_Manager::render_icon( $item['selected_cell_icon'], [ 'aria-hidden' => 'true' ] );
				} else {
					?><i <?php echo $this->get_render_attribute_string( $icon_key ); ?>></i><?php
				}
			?></span><?php
		}
	}
}
