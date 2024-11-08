<?php
namespace ElementorExtensions\Modules\Properties\Widgets;

if ( ! defined( 'ABSPATH' ) ) exit;

use ElementorExtensions\Base\Base_Widget;
use Elementor\Controls_Manager;
use Elementor\Group_Control_Border;
use Elementor\Group_Control_Background;
use Elementor\Group_Control_Typography;
use ElementorExtensions\Admin\EE_MB_Setting_Common;

class EE_Properties extends Base_Widget {

	public $currency = '$';

	public function get_name() {
		return $this->widget_name_prefix.'properties';
	}

	public function get_title() {
		return __( 'Properties', 'elementor-extensions' );
	}

	public function get_icon() {
		return 'eicon-welcome';
	}

	public function get_style_depends() {
		return [
			'ee-mb-property-page',
		];
	} 

	public function get_script_depends() {
		return [
			'ee-mb-googlemap-api',
			'ee-mb-property-page'
		];
	} 

	public function get_keywords() {
		return [ 'p', 'properties', 'pro', 'ps' ];
	}
	
	protected function _register_controls() {

		$this->start_controls_section(
            'properties_section',
            [
                'label' => __( 'Properties', 'elementor-extensions' ),
                'tab' => Controls_Manager::TAB_CONTENT,
				'show_label' => true,
            ]
		);

		$this->add_control(
			'post_per_page',
			[
				'label'              => __( 'Post Per Page', 'elementor-extensions' ),
				'type'               => Controls_Manager::NUMBER,
				'placeholder'        => __( 'Add number like 20', 'elementor-extensions' ),
				'default'            => '8',
				'description'        => __( 'Add number like 20 ', 'elementor-extensions' ),
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'default_sort',
			[
				'label' => __( 'Default Sort', 'elementor-extensions' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'most_recent',
				'options' => [
					'ASC'  => __( 'Price (Asc)', 'elementor-extensions' ),
					'DESC' => __( 'Price (Desc)', 'elementor-extensions' ),
					'most_recent' => __( 'Most Recent', 'elementor-extensions' ),
				],
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'hide_sold_stc_label',
			[
				'label' => __( 'Sold STC Label', 'elementor-extensions' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => __( 'Show', 'elementor-extensions' ),
				'label_off' => __( 'Hide', 'elementor-extensions' ),
				'return_value' => 'none',
				'default' => 'no',
				'selectors' => [
					'{{WRAPPER}} .ee_mb_property_listing_wrapper .ee_mb_property_listing .property_wrapper .sold_stc' => 'display: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'search_form',
			[
				'label' => __( 'Search Form', 'elementor-extensions' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => __( 'Show', 'elementor-extensions' ),
				'label_off' => __( 'Hide', 'elementor-extensions' ),
				'return_value' => 'yes',
				'default' => 'no',
			]
		);

		$this->add_control(
			'filter_bar',
			[
				'label' => __( 'Filter Bar', 'elementor-extensions' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => __( 'Show', 'elementor-extensions' ),
				'label_off' => __( 'Hide', 'elementor-extensions' ),
				'return_value' => 'yes',
				'default' => 'no',
			]
		);

		$this->add_control(
			'property_listing',
			[
				'label' => __( 'Property Listing', 'elementor-extensions' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => __( 'Show', 'elementor-extensions' ),
				'label_off' => __( 'Hide', 'elementor-extensions' ),
				'return_value' => 'yes',
				'frontend_available' => true,
				'default' => 'no',
			]
		);

		$this->add_control(
			'default_property_type',
			[
				'label' => __( 'Property Type', 'elementor-extensions' ),
				'type' => Controls_Manager::SELECT2,
				'multiple' => true,
				'options' => [
					'House'  => __( 'House', 'elementor-extensions' ),
					'Bungalow' => __( 'Bungalow', 'elementor-extensions' ),
					'Flat / Apartment' => __( 'Flat / Apartment', 'elementor-extensions' ),
					'Land' => __( 'Land', 'elementor-extensions' ),
					'Commercial' => __( 'Commercial', 'elementor-extensions' ),
					'Other' => __( 'Other', 'elementor-extensions' ),
				],
				'description' => __('Enter exact property type text that you have added in property page in dropdown. This will default filter out properties for you', 'elementor-extensions' ),
				'label_block' => true,
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'hide_area_filter',
			[
				'label' => __( 'Area Filter', 'elementor-extensions' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => __( 'Show', 'elementor-extensions' ),
				'label_off' => __( 'Hide', 'elementor-extensions' ),
				'return_value' => 'none',
				'default' => 'label_off',
				'selectors' => [
					'{{WRAPPER}} .area_filter' => 'display:{{VALUE}};',
                ],
			]
		);

		$this->add_control(
			'hide_sqft_filter',
			[
				'label' => __( 'Sq Ft Filter', 'elementor-extensions' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => __( 'Show', 'elementor-extensions' ),
				'label_off' => __( 'Hide', 'elementor-extensions' ),
				'return_value' => 'none',
				'default' => 'label_off',
				'selectors' => [
					'{{WRAPPER}} .sqft_filter' => 'display:{{VALUE}};',
                ],
			]
		);

		$this->end_controls_section();
		
		$this->start_controls_section(
            'property_search_section',
            [
                'label' => __( 'Search Form', 'elementor-extensions' ),
                'tab' => Controls_Manager::TAB_CONTENT,
				'show_label' => true,
            ]
		);

		$this->add_control(
			'searchbox_title',
			[
				'label'       => __( 'Title', 'elementor-extensions' ),
				'type'        => Controls_Manager::TEXT,
				'placeholder' => __( 'Enter title', 'elementor-extensions' ),
				'default'     => __('Filter your search result', 'elementor-extensions' ),
				'label_block' => true,
			]
		);

		$this->add_control(
			'searchbox_sub_title_label',
			[
				'label'       => __( 'Sub Title', 'elementor-extensions' ),
				'type'        => Controls_Manager::TEXT,
				'placeholder' => __( 'Enter sub title', 'elementor-extensions' ),
				'default'     => __('Use the filter to narrow your results', 'elementor-extensions' ),
				'label_block' => true,
			]
		);

		$this->add_control(
			'searchbox_button_label',
			[
				'label'       => __( 'Button Label', 'elementor-extensions' ),
				'type'        => Controls_Manager::TEXT,
				'placeholder' => __( 'Search', 'elementor-extensions' ),
				'default'     => __('Search', 'elementor-extensions' ),
				'label_block' => true,
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
            'search_form_style',
            [
                'label' => __( 'Search From', 'elementor-extensions' ),
                'tab' => Controls_Manager::TAB_STYLE,
				'show_label' => true,
            ]
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => 'search_form_background',
				'label' => __( 'Background', 'elementor-extensions' ),
				'types' => [ 'classic', 'gradient' ],
				'selector' => '{{WRAPPER}} .ee_mb_property_search_page_outer_wrapper',
			]
		);

		$this->add_control(
			'search_form_text_color',
			[
				'label' => __( 'Text Color', 'elementor-extensions' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .ee_mb_property_search_page_outer_wrapper label,
					{{WRAPPER}} .ee_mb_property_search_page_outer_wrapper .property_search_desc h4, 
					{{WRAPPER}} .ee_mb_property_search_page_outer_wrapper .property_search_desc span' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name' => 'search_form_border',
				'label' => __( 'Border', 'elementor-extensions' ),
				'show_label' => true,
				'selector' => '{{WRAPPER}} .ee_mb_property_search_page_outer_wrapper',
				'separator' => 'before',
			]
		);

		$this->add_control(
			'search_form_border_radius',
			[
				'label' => __( 'Border Radius', 'elementor-extensions' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px','%' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 100,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					]
				],
				'label_block' => true,
				'selectors' => [
					'{{WRAPPER}} .ee_mb_property_search_page_outer_wrapper' => 'border-radius: {{SIZE}}{{UNIT}};',
				],
				'separator' => 'before',
			]
		);

		$this->add_control(
			'property_search_button',
			[
				'label' => __( 'Button', 'elementor-extensions' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$this->start_controls_tabs( 'tabs_property_search_buttons' );

			$this->start_controls_tab(
				'tabs_property_search_button_normal',
				[
					'label' => __( 'Normal', 'elementor-extensions' ),
				]
			);

				$this->add_control(
					'search_form_button_color',
					[
						'label' => __( 'Color', 'elementor-extensions' ),
						'type' => Controls_Manager::COLOR,
						'selectors' => [
							'{{WRAPPER}} .ee_mb_property_search_page_outer_wrapper #btn_property_search' => 'color: {{VALUE}};',
						],
					]
				);

				$this->add_control(
					'search_form_button_bgcolor',
					[
						'label' => __( 'Background', 'elementor-extensions' ),
						'type' => Controls_Manager::COLOR,
						'selectors' => [
							'{{WRAPPER}} .ee_mb_property_search_page_outer_wrapper #btn_property_search' => 'background: {{VALUE}};',
						],
					]
				);

				$this->add_group_control(
					Group_Control_Typography::get_type(),
					[
						'name' => 'search_form_button_typo',
						'label' => __( 'Typographpy', 'elementor-extensions' ),
						'selector' => '{{WRAPPER}} .ee_mb_property_search_page_outer_wrapper button#btn_property_search',
					]
				);

			$this->end_controls_tab();

			$this->start_controls_tab(
				'tabs_property_search_button_hover',
				[
					'label' => __( 'Hover', 'elementor-extensions' ),
				]
			);

				$this->add_control(
					'search_form_button_color_hover',
					[
						'label' => __( 'Color', 'elementor-extensions' ),
						'type' => Controls_Manager::COLOR,
						'selectors' => [
							'{{WRAPPER}} .ee_mb_property_search_page_outer_wrapper #btn_property_search:hover' => 'color: {{VALUE}};',
						],
					]
				);

				$this->add_control(
					'search_form_button_bgcolor_hover',
					[
						'label' => __( 'Background', 'elementor-extensions' ),
						'type' => Controls_Manager::COLOR,
						'selectors' => [
							'{{WRAPPER}} .ee_mb_property_search_page_outer_wrapper #btn_property_search:hover' => 'background: {{VALUE}};',
						],
					]
				);

				$this->add_group_control(
					Group_Control_Typography::get_type(),
					[
						'name' => 'search_form_button_typo_hover',
						'label' => __( 'Typographpy', 'elementor-extensions' ),
						'selector' => '{{WRAPPER}} .ee_mb_property_search_page_outer_wrapper button#btn_property_search:hover',
					]
				);

			$this->end_controls_tab();

		$this->end_controls_tabs();


		$this->add_control(
			'search_form_labels',
			[
				'label' => __( 'Labels', 'elementor-extensions' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$this->add_control(
			'search_form_label_color',
			[
				'label' => __( 'Color', 'elementor-extensions' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .ee_mb_property_search_page_outer_wrapper .ee_mb_property_search_page_inner_wrapper label' => 'color: {{VALUE}};',
					'{{WRAPPER}} #txt_miles' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'search_form_label_bgcolor',
			[
				'label' => __( 'Background', 'elementor-extensions' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .ee_mb_property_search_page_outer_wrapper .ee_mb_property_search_page_inner_wrapper label' => 'background: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'search_form_label_typo',
				'label' => __( 'Typographpy', 'elementor-extensions' ),
				'selector' => '{{WRAPPER}} .ee_mb_property_search_page_outer_wrapper .ee_mb_property_search_page_inner_wrapper label',
			]
		);

		$this->add_control(
			'search_form_slider',
			[
				'label' => __( 'Slider', 'elementor-extensions' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$this->add_control(
			'slider_color',
			[
				'label' => __( 'Knob Color', 'elementor-extensions' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .ee_mb_property_search_page_outer_wrapper .slider::-moz-range-thumb' => 'background: {{VALUE}};',
					'{{WRAPPER}} .ee_mb_property_search_page_outer_wrapper .slider::-webkit-slider-thumb' => 'background: {{VALUE}};',
					'{{WRAPPER}} .ee_mb_property_search_page_outer_wrapper .slider::-ms-thumb' => 'background: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'slider_background',
			[
				'label' => __( 'Track Color', 'elementor-extensions' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .ee_mb_property_search_page_outer_wrapper input[type="range"]::-moz-range-track' => 'background: {{VALUE}};',
					'{{WRAPPER}} .ee_mb_property_search_page_outer_wrapper input[type="range"]::-webkit-slider-runnable-track' => 'background: {{VALUE}};',
					'{{WRAPPER}} .ee_mb_property_search_page_outer_wrapper input[type="range"]::-ms-track' => 'background: {{VALUE}};',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
            'filter_bar_section',
            [
                'label' => __( 'Filter Bar', 'elementor-extensions' ),
                'tab' => Controls_Manager::TAB_STYLE,
				'show_label' => true,
            ]
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => 'filter_bar_background',
				'label' => __( 'Background', 'elementor-extensions' ),
				'types' => [ 'classic', 'gradient' ],
				'selector' => '{{WRAPPER}} .ee_mb_property_listing_sort_bar',
			]
		);

		$this->add_control(
			'filter_bar_text_color',
			[
				'label' => __( 'Text Color', 'elementor-extensions' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .ee_mb_property_listing_sort_bar label,
					{{WRAPPER}} .ee_mb_property_listing_sort_bar .listing_result span, 
					{{WRAPPER}} .ee_mb_property_listing_sort_bar .views i' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name' => 'filter_bar_border',
				'label' => __( 'Border', 'elementor-extensions' ),
				'show_label' => true,
				'selector' => '{{WRAPPER}} .ee_mb_property_listing_sort_bar',
				'separator' => 'before',
			]
		);

		$this->add_control(
			'filter_bar_border_radius',
			[
				'label' => __( 'Border Radius', 'elementor-extensions' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px','%' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 100,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					]
				],
				'label_block' => true,
				'selectors' => [
					'{{WRAPPER}} .ee_mb_property_listing_sort_bar' => 'border-radius: {{SIZE}}{{UNIT}};',
				],
				'separator' => 'before',
			]
		);

		$this->add_control(
			'filter_bar_buttons',
			[
				'label' => __( 'Views Buttons', 'elementor-extensions' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$this->start_controls_tabs( 'tabs_filter_bar_search_buttons' );

			$this->start_controls_tab(
				'tabs_filter_bar_button_normal',
				[
					'label' => __( 'Normal', 'elementor-extensions' ),
				]
			);

				$this->add_control(
					'filter_bar_button_color',
					[
						'label' => __( 'Color', 'elementor-extensions' ),
						'type' => Controls_Manager::COLOR,
						'selectors' => [
							'{{WRAPPER}} .ee_mb_property_listing_sort_bar .views i' => 'color: {{VALUE}};',
						],
					]
				);

				$this->add_control(
					'filter_bar_button_bgcolor',
					[
						'label' => __( 'Background', 'elementor-extensions' ),
						'type' => Controls_Manager::COLOR,
						'selectors' => [
							'{{WRAPPER}} .ee_mb_property_listing_sort_bar .views ul > li' => 'background: {{VALUE}};',
						],
					]
				);

			$this->end_controls_tab();

			$this->start_controls_tab(
				'tabs_filter_bar_button_hover',
				[
					'label' => __( 'Hover', 'elementor-extensions' ),
				]
			);

				$this->add_control(
					'filter_bar_button_color_hover',
					[
						'label' => __( 'Color', 'elementor-extensions' ),
						'type' => Controls_Manager::COLOR,
						'selectors' => [
							'{{WRAPPER}} .ee_mb_property_listing_sort_bar .views ul > li:hover i' => 'color: {{VALUE}};',
						],
					]
				);

				$this->add_control(
					'filter_bar_button_bgcolor_hover',
					[
						'label' => __( 'Background', 'elementor-extensions' ),
						'type' => Controls_Manager::COLOR,
						'selectors' => [
							'{{WRAPPER}} .ee_mb_property_listing_sort_bar ul > li:hover' => 'background: {{VALUE}};',
						],
					]
				);

			$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->add_control(
			'searchbox_title_label',
			[
				'label' => __( 'Title', 'elementor-extensions' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$this->add_control(
			'searchbox_title_color',
			[
				'label' => __( 'Color', 'elementor-extensions' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .ee_mb_property_search_page_outer_wrapper .property_search_desc > h4' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'searchbox_title_typo',
				'label' => __( 'Typographpy', 'elementor-extensions' ),
				'selector' => '{{WRAPPER}} .ee_mb_property_search_page_outer_wrapper .property_search_desc > h4',
			]
		);

		$this->add_control(
			'searchbox_sub_title',
			[
				'label' => __( 'Sub Title', 'elementor-extensions' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$this->add_control(
			'searchbox_sub_title_color',
			[
				'label' => __( 'Color', 'elementor-extensions' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .ee_mb_property_search_page_outer_wrapper .property_search_desc > span' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'searchbox_sub_title_typo',
				'label' => __( 'Typographpy', 'elementor-extensions' ),
				'selector' => '{{WRAPPER}} .ee_mb_property_search_page_outer_wrapper .property_search_desc > span',
			]
		);

		$this->add_control(
			'filter_bar_labels',
			[
				'label' => __( 'Labels', 'elementor-extensions' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$this->add_control(
			'filter_bar_label_color',
			[
				'label' => __( 'Color', 'elementor-extensions' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .ee_mb_property_listing_sort_bar .listing_sort_view_wrap label' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'filter_bar_label_typo',
				'label' => __( 'Typographpy', 'elementor-extensions' ),
				'selector' => '{{WRAPPER}} .ee_mb_property_listing_sort_bar .listing_sort_view_wrap label',
			]
		);

		$this->add_control(
			'filter_bar_result_labels',
			[
				'label' => __( 'Result Label', 'elementor-extensions' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$this->add_control(
			'filter_bar_result_label_color',
			[
				'label' => __( 'Color', 'elementor-extensions' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .ee_mb_property_listing_sort_bar .listing_result span' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_responsive_control(
			'filter_bar_margin',
			[
				'label' => __( 'Margin', 'elementor-extensions' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em' ],
				'selectors' => [
					'{{WRAPPER}} .ee_mb_property_search_page_outer_wrapper' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'filter_bar_padding',
			[
				'label' => __( 'Padding', 'elementor-extensions' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em' ],
				'selectors' => [
					'{{WRAPPER}} .ee_mb_property_search_page_outer_wrapper' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
            'properties_style_section',
            [
                'label' => __( 'Properties', 'elementor-extensions' ),
                'tab' => Controls_Manager::TAB_STYLE,
				'show_label' => true,
            ]
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => 'properties_bgcolor',
				'label' => __( 'Background', 'elementor-extensions' ),
				'types' => [ 'classic', 'gradient'],
				'separator' => 'after',
				'selector' => '{{WRAPPER}} .ee_mb_property_listing',
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name' => 'properties_border',
				'label' => __( 'Border', 'elementor-extensions' ),
				'show_label' => true,
				'selector' => '{{WRAPPER}} .ee_mb_property_listing',
				'separator' => 'before',
			]
		);

		$this->add_control(
			'properties_radius',
			[
				'label' => __( 'Border Radius', 'elementor-extensions' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px','%' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 100,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					]
				],
				'label_block' => true,
				'selectors' => [
					'{{WRAPPER}} .ee_mb_property_listing' => 'border-radius: {{SIZE}}{{UNIT}};',
				],
				'separator' => 'before',
			]
		);

		$this->add_responsive_control(
			'properties_margin',
			[
				'label' => __( 'Margin', 'elementor-extensions' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em' ],
				'selectors' => [
					'{{WRAPPER}} .ee_mb_property_listing_wrapper .ee_mb_property_listing' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'properties_padding',
			[
				'label' => __( 'Padding', 'elementor-extensions' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em' ],
				'selectors' => [
					'{{WRAPPER}} .ee_mb_property_listing_wrapper .ee_mb_property_listing' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
            'property_block_style_section',
            [
                'label' => __( 'Property Block', 'elementor-extensions' ),
                'tab' => Controls_Manager::TAB_STYLE,
				'show_label' => true,
            ]
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => 'property_block_bgcolor',
				'label' => __( 'Background', 'elementor-extensions' ),
				'types' => [ 'classic', 'gradient'],
				'selector' => '{{WRAPPER}} .ee_mb_property_listing .property_wrapper',
			]
		);

		$this->add_responsive_control(
			'property_block_padding',
			[
				'label' => __( 'Padding', 'elementor-extensions' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em' ],
				'separator' => 'before',
				'selectors' => [
					'{{WRAPPER}} .ee_mb_property_listing .property_wrapper' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name' => 'property_block_border',
				'label' => __( 'Border', 'elementor-extensions' ),
				'show_label' => true,
				'selector' => '{{WRAPPER}} .ee_mb_property_listing .property_wrapper',
				'separator' => 'before',
			]
		);

		$this->add_control(
			'property_block_radius',
			[
				'label' => __( 'Border Radius', 'elementor-extensions' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px','%' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 100,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					]
				],
				'label_block' => true,
				'selectors' => [
					'{{WRAPPER}} .ee_mb_property_listing .property_wrapper' => 'border-radius: {{SIZE}}{{UNIT}};',
				],
				'separator' => 'before',
			]
		);

		$this->add_control(
			'image',
			[
				'label' => __( 'Image', 'elementor-extensions' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$this->add_responsive_control(
			'image_padding',
			[
				'label' => __( 'Padding', 'elementor-extensions' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em' ],
				'selectors' => [
					'{{WRAPPER}} .ee_mb_property_listing_wrapper .ee_mb_property_listing .property_img_wrap > img' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name' => 'image_border',
				'label' => __( 'Border', 'elementor-extensions' ),
				'show_label' => true,
				'selector' => '{{WRAPPER}} .ee_mb_property_listing_wrapper .ee_mb_property_listing .property_img_wrap',
				'separator' => 'before',
			]
		);

		$this->add_control(
			'image_border_radius',
			[
				'label' => __( 'Border Radius', 'elementor-extensions' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px','%' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 100,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					]
				],
				'label_block' => true,
				'selectors' => [
					'{{WRAPPER}} .ee_mb_property_listing_wrapper .ee_mb_property_listing .property_img_wrap' => 'border-radius: {{SIZE}}{{UNIT}};',
				],
				'separator' => 'before',
			]
		);

		$this->add_control(
			'sold_stc_label_head',
			[
				'label' => __( 'Sold STC Label', 'elementor-extensions' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$this->add_control(
			'sold_stc_label_color',
			[
				'label' => __( 'Color', 'elementor-extensions' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .ee_mb_property_listing_wrapper .ee_mb_property_listing .property_wrapper .sold_stc' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'sold_stc_label_bgcolor',
			[
				'label' => __( 'Background Color', 'elementor-extensions' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .ee_mb_property_listing_wrapper .ee_mb_property_listing .property_wrapper .sold_stc' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'sold_stc_label_typo',
				'label' => __( 'Typographpy', 'elementor-extensions' ),
				'selector' => '{{WRAPPER}} .ee_mb_property_listing_wrapper .ee_mb_property_listing .property_wrapper .sold_stc',
			]
		);

		$this->add_responsive_control(
			'sold_stc_label_margin',
			[
				'label' => __( 'Margin', 'elementor-extensions' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em' ],
				'selectors' => [
					'{{WRAPPER}} .ee_mb_property_listing_wrapper .ee_mb_property_listing .property_wrapper .sold_stc' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'title',
			[
				'label' => __( 'Title', 'elementor-extensions' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$this->add_control(
			'title_color',
			[
				'label' => __( 'Color', 'elementor-extensions' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .ee_mb_property_listing_wrapper .ee_mb_property_listing .property_title, {{WRAPPER}} .ee_mb_property_listing_wrapper #propertymap .gm-style-iw .property_title' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'title_typo',
				'label' => __( 'Typographpy', 'elementor-extensions' ),
				'selector' => '{{WRAPPER}} .ee_mb_property_listing_wrapper .ee_mb_property_listing .property_title, {{WRAPPER}} .ee_mb_property_listing_wrapper #propertymap .gm-style-iw .property_title',
			]
		);

		$this->add_responsive_control(
			'title_margin',
			[
				'label' => __( 'Margin', 'elementor-extensions' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em' ],
				'selectors' => [
					'{{WRAPPER}} .ee_mb_property_listing_wrapper .ee_mb_property_listing .property_title, {{WRAPPER}} .ee_mb_property_listing_wrapper #propertymap .gm-style-iw .property_title' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'price_label',
			[
				'label' => __( 'Price Label', 'elementor-extensions' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$this->add_control(
			'price_label_color',
			[
				'label' => __( 'Color', 'elementor-extensions' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .ee_mb_property_listing_wrapper .ee_mb_property_listing .property_price .property_price_note' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'price_label_typo',
				'label' => __( 'Typographpy', 'elementor-extensions' ),
				'selector' => '{{WRAPPER}} .ee_mb_property_listing_wrapper .ee_mb_property_listing .property_price .property_price_note',
			]
		);

		$this->add_responsive_control(
			'price_label_margin',
			[
				'label' => __( 'Margin', 'elementor-extensions' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em' ],
				'default' 		=> [
					'top' 		=> 0,
					'right' 	=> 5,
					'bottom' 	=> 0,
					'left' 		=> 0,
					'unit' 		=> 'px'
				],
				'selectors' => [
					'{{WRAPPER}} .ee_mb_property_listing_wrapper .ee_mb_property_listing .property_price .property_price_note' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'price',
			[
				'label' => __( 'Price', 'elementor-extensions' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$this->add_control(
			'price_color',
			[
				'label' => __( 'Color', 'elementor-extensions' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .ee_mb_property_listing_wrapper .ee_mb_property_listing .property_price span:nth-child(2)' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'price_typo',
				'label' => __( 'Typographpy', 'elementor-extensions' ),
				'selector' => '{{WRAPPER}} .ee_mb_property_listing_wrapper .ee_mb_property_listing .property_price span:nth-child(2)',
			]
		);

		$this->add_responsive_control(
			'price_margin',
			[
				'label' => __( 'Margin', 'elementor-extensions' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em' ],
				'default' 		=> [
					'top' 		=> 0,
					'right' 	=> 5,
					'bottom' 	=> 0,
					'left' 		=> 0,
					'unit' 		=> 'px'
				],
				'selectors' => [
					'{{WRAPPER}} .ee_mb_property_listing_wrapper .ee_mb_property_listing .property_price span:nth-child(2)' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'property_type',
			[
				'label' => __( 'Property Type', 'elementor-extensions' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$this->add_control(
			'property_type_color',
			[
				'label' => __( 'Color', 'elementor-extensions' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .ee_mb_property_listing_wrapper .ee_mb_property_listing .property_bed_type, {{WRAPPER}} .ee_mb_property_listing_wrapper .ee_mb_property_listing .property_bed_type ul li' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'property_type_typo',
				'label' => __( 'Typographpy', 'elementor-extensions' ),
				'selector' => '{{WRAPPER}} .ee_mb_property_listing_wrapper .ee_mb_property_listing .property_bed_type, {{WRAPPER}} .ee_mb_property_listing_wrapper .ee_mb_property_listing .property_bed_type ul li',
			]
		);

		$this->add_responsive_control(
			'property_type_margin',
			[
				'label' => __( 'Margin', 'elementor-extensions' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em' ],
				'selectors' => [
					'{{WRAPPER}} .ee_mb_property_listing_wrapper .ee_mb_property_listing .property_bed_type, {{WRAPPER}} .ee_mb_property_listing_wrapper .ee_mb_property_listing .property_bed_type ul li' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'property_date',
			[
				'label' => __( 'Date', 'elementor-extensions' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$this->add_control(
			'property_date_color',
			[
				'label' => __( 'Color', 'elementor-extensions' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .ee_mb_property_listing_wrapper .ee_mb_property_listing .property_listed_date' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'property_date_typo',
				'label' => __( 'Typographpy', 'elementor-extensions' ),
				'selector' => '{{WRAPPER}} .ee_mb_property_listing_wrapper .ee_mb_property_listing .property_listed_date',
			]
		);

		$this->add_responsive_control(
			'property_date_margin',
			[
				'label' => __( 'Margin', 'elementor-extensions' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em' ],
				'selectors' => [
					'{{WRAPPER}} .ee_mb_property_listing_wrapper .ee_mb_property_listing .property_listed_date' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_section();
	} 

	protected function render() {
		$settings = $this->get_settings_for_display();
		$this->getPropertiesPage($settings);
	}

	protected function getPropertiesPage($settings){

		$pro_general_setting = EE_MB_Setting_Common::get_settings_key( 'ee_mb_property_setting' );

		$this->currency = (!empty($pro_general_setting) && isset($pro_general_setting->currency_symbol)) ? $pro_general_setting->currency_symbol : '$';

		$data_location = $data_min = $data_max = $data_bedrooms = $data_radius = $data_lat = $data_long = $sort = $view = '';

		$default_property_type = $data_type = (isset($settings['default_property_type'])) ? $settings['default_property_type'] : [];

		$area = $sqft = '';
		if(isset($_GET) && !empty($_GET)):
		    $data_location =  (isset($_GET['location'])) ? sanitize_text_field($_GET['location']) : '';
		    $data_min = (isset($_GET['min'])) ? intval($_GET['min']) : '';
		    $data_max =  (isset($_GET['max'])) ? intval($_GET['max']) : '';
		    $data_bedrooms =(isset($_GET['room'])) ? intval($_GET['room']) : '';
		    $data_type =  (isset($_GET['property_type'])) ? sanitize_text_field($_GET['property_type']) : '';
		    $data_radius =  (isset($_GET['radius'])) ? intval($_GET['radius']) : '';
		    $data_lat =  (isset($_GET['lat'])) ? sanitize_text_field($_GET['lat']) : '';
		    $data_long = (isset($_GET['long'])) ? sanitize_text_field($_GET['long']) : '';
		    $sort = (isset($_GET['price_sort'])) ? sanitize_text_field($_GET['price_sort']) : '';
		    $view = (isset($_GET['view'])) ? sanitize_text_field($_GET['view']) : '';
		    $area = (isset($_GET['area'])) ? sanitize_text_field($_GET['area']) : '';
		    $sqft = (isset($_GET['sqft'])) ? sanitize_text_field($_GET['sqft']) : '';
		endif;

		$property_type_options = [
			'House',
			'Bungalow',
			'Flat / Apartment',
			'Land',
			'Commercial',
			'Other'
		];

		if (!empty($default_property_type)) :

			if (is_array($default_property_type)) :
				$property_type_options = array_intersect($default_property_type, $property_type_options);
			else:
				$property_type_options = array($default_property_type);
			endif;
		endif;
		?>
		<!-- Loading start -->
		<div class="elementor_ee_mb_loading_overlay property_search">
		    <div class="elementor_ee_mb_loader"></div>
		</div>
		<!-- Loading end -->

		<!-- Search box -->
		<?php if(!empty($settings['search_form'])): 

			$data_settings['country_restriction'] = (isset($pro_general_setting->country_restriction)) ? $pro_general_setting->country_restriction : '';
			?>
			<div class="ee_mb_property_search_page_outer_wrapper" data-settings=<?php echo json_encode($data_settings); ?>>
			    <div class="siteset-elementor-container">
			        <div class="ee_mb_property_search_page_wrapper">
			            <div class="ee_mb_property_search_page_inner_wrapper">
			                <div class="ee_mb_property_search_page_col">
			                    <div class="property_search_desc">
			                    	<?php 
				                    	if( !empty($settings['searchbox_title']) ): ?>
				                    		<h4><?php echo esc_html($settings['searchbox_title']); ?></h4>
                                            <?php
				                    	endif;

				                    	if( !empty($settings['searchbox_sub_title']) ): ?>
				                    		    <span><?php echo esc_html($settings['searchbox_sub_title']); ?></span>
                                            <?php
				                    	endif;
			                    	?>
			                    </div>
			                </div>

			                <div class="ee_mb_property_search_page_col">
			                    <div class="property_search_textbox">
			                        <div class="label_wrapper">
			                            <label>Location:</label>
			                        </div>
			                        <input type="text" name="location" value="<?php echo esc_attr($data_location); ?>" id="ee_mb_property_txt" placeholder="(e.g. area, town, postcode)"/>
			                    </div>
			                </div>

			                <div class="ee_mb_property_search_page_col promiximity-wrap">
			                    <div class="label_wrapper promiximity">
			                        <label>Search Promiximity:</label>
			                    </div>

			                    <div class="slidecontainer">
			                        <input type="range" min="1" max="20" value="<?php echo (!empty($data_radius)) ? esc_attr($data_radius) : '2' ; ?>" class="slider" id="promiximity_range"/>
			                    </div>
			                    <div id="txt_miles"></div>
			                </div>
			            </div>

			            <div class="ee_mb_property_search_page_inner_wrapper">
			                <div class="ee_mb_property_search_page_col search_btn_desk">
			                    <button type="button" id="btn_property_search">Search</button>
			                </div>

			                <div class="ee_mb_property_search_page_col price-wrap">
			                    <div class="property_search_textbox">
			                        <div class="label_wrapper">
			                            <label>Price:</label>
			                        </div>
			                        
			                        <select name="min" id="drp_min_price">
			                            <option value="">Min Price</option>
			                            <?php 
			                            $intval = 40000;
			                            for($i=0;$i<48;$i++):
			                                if($intval < '300000'):
			                                    $intval += 10000;
			                                elseif($intval < '500000'):
			                                    $intval += 25000;
			                                elseif($intval < '1000000'):
			                                    $intval += 50000;
			                                else:
			                                    $intval += 500000;
			                                endif;
			                                ?>
			                                    <option value="<?php echo esc_attr($intval); ?>" <?php echo esc_attr(($intval == $data_min) ? 'selected=""' : ''); ?>><?php echo esc_html($this->currency.number_format_i18n($intval)); ?></option>
                                            <?php
			                            endfor;
			                            ?>
			                        </select>

			                        <label class="to-lable">To:</label>
			                        
			                        <select name="max" id="drp_max_price">
			                            <option value="">Max Price</option>
			                            <?php 
			                            $intval = 40000;
			                            for($i=0;$i<48;$i++):
			                                if($intval < '300000'):
			                                    $intval += 10000;
			                                elseif($intval < '500000'):
			                                    $intval += 25000;
			                                elseif($intval < '1000000'):
			                                    $intval += 50000;
			                                else:
			                                    $intval += 500000;
			                                endif;
			                                ?>
			                                    <option value="<?php echo esc_attr($intval); ?>" <?php echo esc_attr(($intval == $data_max) ? 'selected=""' : ''); ?>><?php echo esc_attr($this->currency.number_format_i18n($intval)); ?></option>
                                            <?php
			                            endfor;
			                            ?>
			                        </select>
			                    </div>
			                </div>

			                <div class="ee_mb_property_search_page_col">
			                    <div class="property_search_textbox">
			                        <div class="label_wrapper">
			                            <label>Min Bedrooms:</label>
			                        </div>
			                        
			                        <select name="room" id="drp_bedrooms">
			                            <option value="">Select</option>
			                            <option value="1" <?php echo ($data_bedrooms == '1') ? esc_attr('selected=""') : '' ; ?>>1</option>
			                            <option value="2" <?php echo ($data_bedrooms == '2') ? esc_attr('selected=""') : '' ; ?>>2</option>
			                            <option value="3" <?php echo ($data_bedrooms == '3') ? esc_attr('selected=""') : '' ; ?>>3</option>
			                            <option value="4" <?php echo ($data_bedrooms == '4') ? esc_attr('selected=""') : '' ; ?>>4</option>
			                            <option value="5" <?php echo ($data_bedrooms == '5') ? esc_attr('selected=""') : '' ; ?>>5+</option>
			                        </select>

			                        <div class="label_wrapper">
			                            <label>Property Type:</label>
			                        </div>

			                        <select name="property_type" id="drp_property_type">
			                            <option value="">Select</option>

			                            <?php 
			                            foreach ($property_type_options as $key => $type) 
			                            {
			                            	?>
			                            	<option value="<?php echo esc_attr($type); ?>" <?php echo esc_attr(($data_type == $type) ? 'selected=""' : ''); ?>><?php echo esc_html($type); ?></option>
                                            <?php
			                            } 
			                            ?>
			                        </select>
			                    </div>
			                </div>
			                <input type="hidden" name="lat" id="ee_mb_property_lat"  value="<?php echo esc_attr($data_lat); ?>"/>
			                <input type="hidden" name="long" id="ee_mb_property_long" value="<?php echo esc_attr($data_long); ?>"/>
			                
			                <div class="ee_mb_property_search_page_col search_btn_mob">
			                	<?php 
			                		$button_label = ( !empty($settings['searchbox_button_label']) ) ? $settings['searchbox_button_label'] : 'Search';
			                		?>
                                        <button type="button" id="btn_property_search"><?php esc_html($button_label); ?></button>
                                    <?php
		                    	?>
			                </div>
			            </div> 

			             <div class="ee_mb_property_search_page_inner_wrapper">
			                <div class="ee_mb_property_search_page_col search_btn_desk">
			                    &nbsp;	
			                </div>

			                <div class="ee_mb_property_search_page_col price-wrap">
			                    <div class="property_search_textbox area_filter">
			                        <div class="label_wrapper">
			                            <label>Area:</label>
			                        </div>
			                        
			                        <input type="text" name="area" id="area" value="<?php echo esc_attr($area); ?>">
			                    </div>
			                </div>

			                <div class="ee_mb_property_search_page_col">
			                    <div class="property_search_textbox sqft_filter">
			                        <div class="label_wrapper">
			                            <label>Sq Ft:</label>
			                        </div>
			                        
			                        <input type="text" name="sqft" id="sqft" value="<?php echo esc_attr($sqft); ?>">
			                    </div>
			                </div>
			                
			                <div class="ee_mb_property_search_page_col search_btn_mob">
                                <?php
                                $button_label = !empty($settings['searchbox_button_label']) ? $settings['searchbox_button_label'] : 'Search';
                                ?>
                                <button type="button" id="btn_property_search"><?php echo esc_html($button_label); ?></button>
                            </div>
			            </div>   
			        </div>
			    </div>  
			</div>
		<?php endif; ?>

		<div class="ee_mb_property_listing_wrapper">
		    <div class="siteset-elementor-container">

		    	<?php if(!empty($settings['filter_bar'])): ?>
		        <div class="ee_mb_property_listing_sort_bar">

		            <div class="listing_sort_view_wrap">
		                <div class="sorting">
		                    <div class="label_wrapper">
		                        <label>Sort:</label>
		                    </div>
		                    
		                    <select name="price_sort" id="price_sort">
		                        <option value="">Select</option>
		                        <option value="ASC" <?php echo ($sort == 'ASC') ? 'selected=""' : '' ; ?>>Price (Asc)</option>
		                        <option value="DESC" <?php echo ($sort == 'DESC') ? 'selected=""' : '' ; ?>>Price (Desc)</option>
		                        <option value="most_recent" <?php echo ($sort == 'most_recent') ? 'selected=""' : '' ; ?>>Most Recent</option>
		                    </select>
		                </div>

		                <div class="views">
		                    <div class="label_wrapper">
		                        <label>View:</label>
		                    </div>

		                    <ul id="btn_view_group">
		                        <li data-view="grid" class="<?php echo ($view == 'grid') ? 'active' : '' ; ?>"><i class="fa fa-th"></i></li>
		                        <li data-view="map" class="<?php echo ($view == 'map') ? 'active' : '' ; ?>"><i class="fa fa-map-marker"></i></li>
		                        <li data-view="list" class="<?php echo ($view == 'list') ? 'active' : '' ; ?>"><i class="fa fa-list-ul"></i></li>
		                    </ul>
		                </div>
		            </div>

		            <div class="listing_result">
		                <span id="search_result">0</span> <span>results</span>
		            </div>
		        </div>
		        <?php endif; ?>

		        <!-- Start from here -->
		        <?php if(!empty($settings['property_listing'])): ?>
		        <div class="ee_mb_property_listing <?php echo $view; ?>" id="ee_mb_property_listing">
		        </div>
		         <?php endif; ?>
		    </div>
		    <!-- Ends here -->

		    <div id="property_pagination"></div>
		</div>
		<!-- </div> -->
		<?php
	}

	public function getPropertyCpt($request){
	    global $post;

	    $pro_general_setting = EE_MB_Setting_Common::get_settings_key('ee_mb_property_setting');
	    $ee_mb_agent = EE_MB_Setting_Common::get_settings_key('ee_mb_agent');

	    $this->currency = $pro_general_setting->currency_symbol;

	    $paged = isset($request['paged']) ? intval($request['paged']) : 1;
	    $property_args = [
	        'post_type' => 'property',
	        'posts_per_page' => -1,
	        'post_status' => 'publish'
	    ];

	    $default_sort = sanitize_text_field($request['default_sort']);

	    if ((!empty($request['price_sort']) && $request['price_sort'] == 'most_recent') || $default_sort == 'most_recent') {
	        $property_args['orderby'] = 'date';
	        $property_args['order'] = 'DESC';
	    }

	    if ((!empty($request['price_sort']) && $request['price_sort'] != 'most_recent') || $default_sort !== 'most_recent') {
	        $property_args['meta_key'] = 'price';
	        $property_args['orderby'] = 'meta_value_num';
	        $property_args['order'] = $request['price_sort'] ? sanitize_text_field($request['price_sort']) : $default_sort;
	    }

	    $location = sanitize_text_field($request['location']);
	    $proximity = intval($request['radius']);
	    $lat = (float)$request['lat'];
	    $lng = (float)$request['long'];
	    $price_max = intval($request['max']);
	    $price_min = intval($request['min']);
	    $bedrooms = intval($request['room']);
	    $area = intval($request['area']);
	    $sqft = intval($request['sqft']);
	    $property_type = $request['property_type'];

	    if (!empty($property_type) || !empty($bedrooms) || !empty($price_min) || !empty($price_max)) {
	        $meta_query = ['relation' => 'AND'];
	    }

	    if (!empty($property_type)) {
	        $meta_query[] = [
	            'key' => 'type',
	            'value' => $property_type,
	            'compare' => is_array($property_type) ? 'IN' : '='
	        ];
	    }

	    if (!empty($bedrooms)) {
	        $meta_query[] = [
	            'key' => 'bedrooms',
	            'value' => $bedrooms,
	            'compare' => '>='
	        ];
	    }

	    if (!empty($price_min)) {
	        $meta_query[] = [
	            'key' => 'price',
	            'value' => $price_min,
	            'type' => 'NUMERIC',
	            'compare' => '>='
	        ];
	    }

	    if (!empty($price_max)) {
	        $meta_query[] = [
	            'key' => 'price',
	            'value' => $price_max,
	            'type' => 'NUMERIC',
	            'compare' => '<='
	        ];
	    }

	    if (!empty($area)) {
	        $meta_query[] = [
	            'key' => 'area',
	            'value' => $area,
	            'compare' => '<='
	        ];

	        $meta_query[] = [
	            'key' => 'area',
	            'value' => 0,
	            'compare' => '>='
	        ];
	    }

	    if (!empty($sqft)) {
	        $meta_query[] = [
	            'key' => 'square_footage',
	            'value' => $sqft,
	            'compare' => '<='
	        ];

	        $meta_query[] = [
	            'key' => 'square_footage',
	            'value' => 0,
	            'compare' => '>='
	        ];
	    }

	    $get_all = false;
	    if (!empty($meta_query)) {
	        $property_args['meta_query'] = $meta_query;
	    }

	    if (empty($location)) {
	        $get_all = true;
	    }

	    $properties = get_posts($property_args);

	    $data = $map_properties = $properties_arr = [];
	    $counter = 0;

	    foreach ($properties as $property_key => $post) {
	        setup_postdata($post);
	        $property = '';
	        $post_id = $post->ID;
	        $post_location = get_post_meta($post_id, 'location', true);

	        /* Radius search start */
	        $miles = 0.0;
	        if (!empty($post_location['lat']) && (!empty($post_location['lng']))) {
	            $post_lat = !empty($post_location['lat']) ? (float)$post_location['lat'] : '';
	            $post_lng = !empty($post_location['lng']) ? (float)$post_location['lng'] : '';
	            $theta = $post_lng - $lng;
	            $dist = sin(deg2rad($post_lat)) * sin(deg2rad($lat)) + cos(deg2rad($post_lat)) * cos(deg2rad($lat)) * cos(deg2rad($theta));
	            $dist = acos($dist);
	            $dist = rad2deg($dist);
	            $miles = $dist * 60 * 1.1515;
	        }
	        /* Radius search ends */

	        if (($miles < $proximity) || ($get_all)) {
	            $property_title = $post->post_title;
	            $property_price = get_post_meta($post_id, 'price', true);
	            $property_price_note = get_post_meta($post_id, 'price_note', true);
	            $property_bedrooms = get_post_meta($post_id, 'bedrooms', true);
	            $property_type = get_post_meta($post_id, 'type', true);
	            $property_gallery = get_post_meta($post_id, 'gallery', true);
	            $property_listed_date = $post->post_date;

	            $image = '';
	            if (!empty($property_gallery)) {
	                $property_gallery = explode(',', $property_gallery);
	                $first_proprety_img_id = $property_gallery[0];
	                $image = wp_get_attachment_image_src($first_proprety_img_id, 'medium');
	                $image = $image[0];
	            }

	            if (empty($image)) {
	                $image = plugins_url('assets/img/no-imagejpg', ELEMENTOR_EXTENSIONS__FILE__);
	            }

	            if ($property_type == 'Other') {
	                $property_type = get_post_meta($post_id, 'other_type', true);
	            }

	            $sold_stc = get_post_meta($post_id, 'include_sold_subject_to_contract', true);
	            $sold_stc_lbl = isset($pro_general_setting->sold_stc_label) ? $pro_general_setting->sold_stc_label : '';

	            if ($request['view'] === 'map') {
	                $map_properties[$counter] = [
	                    $property_title,
	                    $post_lat,
	                    $post_lng,
	                    $this->currency . number_format_i18n($property_price),
	                    $property_bedrooms,
	                    $property_type,
	                    esc_url($image),
	                    'Listed on ' . date('dS F Y', strtotime($property_listed_date)),
	                    get_the_permalink($post_id)
	                ];
	            } elseif ($request['view'] === 'list') {
	                $gallery_count = count($property_gallery);
	                $agent = get_post_meta($post_id, 'agent', true);
	                $default_agent = isset($ee_mb_agent->default_agent) ? $ee_mb_agent->default_agent : '';
	                $property_agent = !empty($agent) ? $agent : $default_agent;
	                $property_overview = get_post_meta($post_id, 'overview', true);
	                $property_short_overview = get_post_meta($post_id, 'short_overview', true);
	                $property_content = !empty($property_short_overview) ? $property_short_overview : substr(strip_tags($property_overview), 0, 337);

	                $agent_meta = get_post_meta($property_agent);

	                $agent_pro_pic = '';
	                if (!empty($agent_meta['profile_picture'][0])) {
	                    $agent_profile = $agent_meta['profile_picture'][0];
	                    $pro_pic_arr = wp_get_attachment_image_src($agent_profile, 'full');
	                    $agent_pro_pic = $pro_pic_arr[0];
	                }

	                $agent_email = '';
	                if (!empty($agent_meta['email'][0])) {
	                    $agent_email = $agent_meta['email'][0];
	                }

	                ob_start();
	                ?>
	                <div class="property_wrapper">
	                    <?php if (!empty($sold_stc[0])) : ?>
	                        <span class="sold_stc"><?php echo !empty($sold_stc_lbl) ? esc_html($sold_stc_lbl) : "Sold STC"; ?></span>
	                    <?php endif; ?>

	                    <div class="property_img_main_wrapper <?php echo $gallery_count == 1 ? 'single_img' : ''; ?>">
	                        <a href="<?php echo get_the_permalink($post_id); ?>" class="propertyCard-img-link aspect-3x2 ">
	                            <div class="property_img_wrap">
	                                <img src="<?php echo esc_url($image); ?>" alt="<?php echo esc_attr(basename($image)); ?>"/>
	                            </div>

	                            <div class="propertyCard-moreInfoMeta">
	                                <span> <?php echo esc_html($gallery_count); ?> &nbsp;<i class="fa fa-camera"></i></span>
	                            </div>
	                        </a>

	                        <?php if ($gallery_count > 1) : ?>
	                            <a class="propertyCard-additionalImgs" href="<?php echo get_the_permalink($post_id); ?>" title="Additional property images">
	                                <?php for ($i = 1; $i <= 3; $i++) : ?>
	                                    <?php if (!empty($property_gallery[$i])) :
	                                        $first_proprety_img_id = $property_gallery[$i];
	                                        $image = wp_get_attachment_image_src($first_proprety_img_id, 'thumbnail');
	                                        $image = $image[0]; ?>
	                                        <div class="propertyCard-additionalImg">
	                                            <div class="propertyCard-img">
	                                                <img src="<?php echo esc_url($image); ?>" alt="<?php echo esc_attr(basename($image)); ?>">
	                                            </div>
	                                        </div>
	                                    <?php endif; ?>
	                                <?php endfor; ?>
	                            </a>
	                        <?php endif; ?>
	                    </div>

	                    <div class="property_content_wrap">
	                        <div class="property_title"><a href="<?php echo get_the_permalink($post_id); ?>"><?php echo esc_html($property_bedrooms); ?> bedrooms - <?php echo esc_html($property_type); ?></a></div>
	                        <address class="propertyCard-address">
	                            <span><?php echo esc_html($property_title); ?></span>
	                        </address>

	                        <div class="property_descpr">
	                            <?php echo wpautop($property_content); ?>
	                        </div>

	                        <div class="propertyCard-branchSummary">
	                            <span class="propertyCard-branchSummary-addedOrReduced">Added on <?php echo date('dS F Y', strtotime($property_listed_date)); ?></span>
	                            <span class="propertyCard-branchSummary-branchName"></span>
	                        </div>
	                    </div>

	                    <div class="propertyCard-header">
	                        <div class="propertyCard-price">
	                            <a class="propertyCard-priceLink propertyCard-salePrice" href="<?php echo get_the_permalink($post_id); ?>">
	                                <span class="propertyCard-priceValue"><?php echo esc_html($this->currency . number_format_i18n($property_price)); ?></span>
	                            </a>
	                            <div class="propertyCard-priceQualifier">
	                                <span><?php echo esc_html($property_price_note); ?></span>
	                            </div>
	                        </div>

	                        <div class="propertyCard-contacts">
	                            <div class="propertyCard-branchLogo">
	                                <?php if (!empty($agent_pro_pic)) : ?>
	                                    <a href="<?php echo get_the_permalink($post_id); ?>"><img src="<?php echo esc_url($agent_pro_pic); ?>" alt="<?php echo esc_attr(basename($agent_pro_pic)); ?>"/></a>
	                                <?php endif; ?>

	                                <p class="propertyCard-contactsItemDetails">
	                                    <?php if (!empty($agent_meta['phone_number'][0])) :
	                                        $agent_phone = $agent_meta['phone_number'][0]; ?>
	                                        <a class="propertyCard-contactsPhoneNumber" href="tel:<?php echo esc_attr($agent_phone); ?>"><?php echo esc_html($agent_phone); ?></a>
	                                        <a href="tel:<?php echo esc_attr($agent_phone); ?>"><span class="propertyCard-contactsPhoneRates">Local call rate</span></a>
	                                    <?php endif; ?>

	                                    <?php if (!empty($agent_meta['email'][0])) :
	                                        $agent_email = $agent_meta['email'][0]; ?>
	                                        <a href="mailto:<?php echo esc_attr($agent_email); ?>"><i class="fa fa-envelope-o"></i></a>
	                                    <?php endif; ?>
	                                </p>
	                            </div>
	                        </div>
	                    </div>
	                </div>
	                <?php
	                $properties_arr[] = ob_get_clean();
	            } else {
	                ob_start();
	                ?>
	                <div class="property_wrapper">
	                    <?php if (!empty($sold_stc[0])) : ?>
	                        <span class="sold_stc"><?php echo !empty($sold_stc_lbl) ? esc_html($sold_stc_lbl) : "Sold STC"; ?></span>
	                    <?php endif; ?>

	                    <a href="<?php echo get_the_permalink($post_id); ?>">
	                        <div class="property_img_wrap">
	                            <img src="<?php echo esc_url($image); ?>" alt="<?php echo esc_attr(basename($image)); ?>"/>
	                        </div>

	                        <div class="property_content_wrap">
	                            <div class="property_title">
	                                <span><?php echo esc_html($property_title); ?></span>
	                            </div>

	                            <div class="property_price">
	                                <span class="property_price_note"><?php echo esc_html($property_price_note); ?></span>
	                                <span><?php echo esc_html($this->currency . number_format_i18n($property_price)); ?></span>
	                            </div>

	                            <div class="property_bed_type">
	                                <span><?php echo esc_html($property_bedrooms); ?> bedrooms</span>
	                                <ul><li><?php echo esc_html($property_type); ?></li></ul>
	                            </div>

	                            <div class="property_listed_date">
	                                <span>Listed on <?php echo date('dS F Y', strtotime($property_listed_date)); ?></span>
	                            </div>
	                        </div>
	                    </a>
	                </div>
	                <?php
	                $properties_arr[] = ob_get_clean();
	            }

	            $counter++;
	        }
	    }

	    $total_pages = $page = 1;
	    if ($request['view'] !== 'map') {
	        $posts_per_page = !empty($request['post_per_page']) ? intval($request['post_per_page']) : 8;
	        $total_pages = ceil($counter / $posts_per_page);
	        $page = max($paged, 1);
	        $page = min($page, $total_pages);
	        $offset = ($page - 1) * $posts_per_page;
	        if ($offset < 0) $offset = 0;

	        $property = array_slice($properties_arr, $offset, $posts_per_page);
	    } else {
	        $property = $properties_arr;
	    }

	    $data['property'] = $property;
	    $data['map_properties'] = $map_properties;
	    $data['results'] = $counter;

	    /* Pagination start */
	    $pagination = '';

	    $big = 999999999;
	    $page_links = paginate_links([
	        'base' => str_replace($big, '%#%', esc_url(get_pagenum_link($big))),
	        'format' => '?paged=%#%',
	        'current' => $page,
	        'type' => 'array',
	        'prev_next' => true,
	        'prev_text' => __('<'),
	        'next_text' => __('>'),
	        'show_all' => false,
	        'total' => $total_pages
	    ]);

	    if (!empty($page_links)) {
	        ob_start();
	        ?>
	        <ul>
	            <?php if ($paged != '1') : ?>
	                <li class="previous disabled PagedList-skipToFirst"><a class="page-numbers" href="<?php echo get_pagenum_link(1); ?>?paged=1"><<</a></li>
	            <?php endif; ?>

	            <?php foreach ($page_links as $page_link) : ?>
	                <li><?php echo $page_link; ?></li>
	            <?php endforeach; ?>

	            <?php if ($paged != $total_pages) : ?>
	                <li class="next PagedList-skipToLast"><a class="page-numbers" href="<?php echo get_pagenum_link($total_pages); ?>">>></a></li>
	            <?php endif; ?>
	        </ul>
	        <?php
	        $pagination = ob_get_clean();
	    }

	    $data['next_pagination'] = $pagination;
	    /* Pagination ends here */

	    wp_send_json($data);
	    wp_reset_postdata();
	    wp_die();
	}


	public function sendAgentMail($request){

		$ee_mb_agent = EE_MB_Setting_Common::get_settings_key( 'ee_mb_agent' );

		$name = sanitize_text_field($request['name']);
		$email = (!empty($ee_mb_agent->sender_email)) ? sanitize_email($ee_mb_agent->sender_email) : sanitize_email($request['email']); 
		$message = html_entity_decode($request['message']);
		$telephone = sanitize_text_field($request['phone']);
		$property_link = $request['property_link'];
		$sendto = sanitize_email($request['sendto']);

		$actual_sender_email = (!empty($request['email'])) ? sanitize_email($request['email']) : $email;

		/*@Validation start*/
		$validate_input = [];
		if(empty($name)):
			$validate_input['error']['name'] = 'name required';
		endif;

		if(empty($email)):
			$validate_input['error']['email'] = 'email required';
		else:
			if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
				$validate_input['error']['email'] = 'invalid email';
			}
		endif;

		if(empty($message)):
			$validate_input['error']['message'] = 'message required';
		endif;

		if(empty($telephone)):
			$validate_input['error']['telephone'] = 'phone number required';
		endif;
		/*@Validation ends*/

		if(empty($validate_input)):
			$response = [];

			$subject = $ee_mb_agent->mail_subject;
			$mail_template = $ee_mb_agent->mail_template;

			$headers[] = 'From: '. $email . "\r\n";
			$headers[] ='Reply-To: ' . $actual_sender_email . "\r\n";
			$headers[] = 'Content-Type: text/html; charset=UTF-8';

			$mail_template = str_replace('[contact_name]',$name,$mail_template);
			$mail_template = str_replace('[contact_email]',sanitize_email($request['email']),$mail_template);
			$mail_template = str_replace('[contact_number]',$telephone,$mail_template);
			$mail_template = str_replace('[contact_message]',$message,$mail_template);
			$mail_template = str_replace('[property_link]',$property_link,$mail_template);

			$mail_template = html_entity_decode(stripslashes($mail_template));
		
			$is_mail_sent = wp_mail($sendto, $subject, $mail_template, $headers);
			
			if($is_mail_sent):
				$response = ['success' => true];
			else:
				$response = ['success' => false];
			endif;

			wp_send_json($response);
		else:
			wp_send_json($validate_input);
		endif;
		wp_die();
	}

	protected function content_template() {
		
	}	
}
