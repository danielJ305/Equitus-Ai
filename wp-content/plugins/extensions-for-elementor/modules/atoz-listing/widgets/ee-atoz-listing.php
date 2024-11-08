<?php
namespace ElementorExtensions\Modules\AtozListing\Widgets;

if ( ! defined( 'ABSPATH' ) ) exit;

use ElementorExtensions\Base\Base_Widget;
use Elementor\Controls_Manager;
use Elementor\Group_Control_Typography;
use Elementor\Group_Control_Box_Shadow;
use Elementor\Group_Control_Border;
use Elementor\Group_Control_Background;
use ElementorExtensions\Classes\Utils;

class EE_Atoz_Listing extends Base_Widget {

	public function get_name() {
		return $this->widget_name_prefix.'atoz-listing';
	}

	public function get_title() {
		return __( 'A to Z Listing', 'elementor-extensions' );
	}

	public function get_icon() {
		return 'eicon-animated-headline';
	}

	public function get_keywords() {
		return [ 'atoz', 'listing', 'atozlisting', 'az', 'a', 'z', 'azl' ];
	}

	protected function _register_controls() {

		$this->start_controls_section(
            'content_section',
            [
                'label' => __('Content', 'elementor-extensions'),
                'tab' => Controls_Manager::TAB_CONTENT,
             ]
		);

		$post_types = Utils::get_post_types();

		$this->add_control(
			'post_type',
			[
				'label' 		=> __( 'Post type', 'elementor-extensions' ),
				'type' 			=> Controls_Manager::SELECT,
				'default' 		=> 'post',
				'options'		=> $post_types
			]
		);

		$this->add_control(
			'list_number_after_letter',
			[
				'label' => __( 'List numbers after Letters', 'elementor-extensions' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => __( 'Yes', 'elementor-extensions' ),
				'label_off' => __( 'No', 'elementor-extensions' ),
				'return_value' => 'yes',
				'frontend_available' => true
			]
		);

		$this->add_control(
			'show_feature_image',
			[
				'label' => __( 'Show feature image', 'elementor-extensions' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => __( 'Yes', 'elementor-extensions' ),
				'label_off' => __( 'No', 'elementor-extensions' ),
				'return_value' => 'yes',
				'frontend_available' => true
			]
		);

		$this->add_control(
			'brand_logo_width',
			[
				'label' => esc_html__( 'Logo max width', 'elementor-extensions' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 1000,
						'step' => 5,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'default' => [
					'unit' => '%',
					'size' => 50,
				],
				'condition' => ['show_feature_image' => 'yes'],
				'selectors' => [
					'{{WRAPPER}} .az-listing-container .posts ul li .brand-logo img' => 'max-width: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'brand_logo_align',
			[
				'label' => __( 'Logo alignment', 'elementor-extensions' ),
				'type' => Controls_Manager::CHOOSE,
				'options' => [
					'left' => [
						'title' => __( 'Left', 'elementor-extensions' ),
						'icon' => 'fa fa-align-left',
					],
					'center' => [
						'title' => __( 'Center', 'elementor-extensions' ),
						'icon' => 'fa fa-align-center',
					],
					'right' => [
						'title' => __( 'Right', 'elementor-extensions' ),
						'icon' => 'fa fa-align-right',
					],
				],
				'default' => 'center',
				'condition' => ['show_feature_image' => 'yes'],
				'selectors' => [
					'{{WRAPPER}} .az-listing-container .posts ul li .brand-logo' => 'text-align: {{VALUE}};',
				],
			]
		);

		$this->add_responsive_control(
			'brand_title_align',
			[
				'label' => __( 'Title alignment', 'elementor-extensions' ),
				'type' => Controls_Manager::CHOOSE,
				'options' => [
					'left' => [
						'title' => __( 'Left', 'elementor-extensions' ),
						'icon' => 'fa fa-align-left',
					],
					'center' => [
						'title' => __( 'Center', 'elementor-extensions' ),
						'icon' => 'fa fa-align-center',
					],
					'right' => [
						'title' => __( 'Right', 'elementor-extensions' ),
						'icon' => 'fa fa-align-right',
					],
				],
				'default' => 'center',
				'selectors' => [
					'{{WRAPPER}} .az-listing-container .posts ul li .brand-title' => 'text-align: {{VALUE}};',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
            'section_general_style',
            [
                'label' => __( 'General', 'elementor-extensions' ),
                'tab' => Controls_Manager::TAB_STYLE
            ]
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => 'background',
				'label' => __( 'Background', 'elementor-extensions' ),
				'types' => [ 'classic', 'gradient' ],
				'selector' => '{{WRAPPER}} .az-listing-container',
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'box_shadow',
				'label' => __( 'Box Shadow', 'elementor-extensions' ),
				'selector' => '{{WRAPPER}} .az-listing-container',
			]
		);

		$this->add_responsive_control(
			'padding',
			[
				'label' => __( 'Padding', 'elementor-extensions' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em' ],
				'selectors' => [
					'{{WRAPPER}} .az-listing-container' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'margin',
			[
				'label' => __( 'Margin', 'elementor-extensions' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em' ],
				'selectors' => [
					'{{WRAPPER}} .az-listing-container' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name' => 'border',
				'label' => __( 'Border', 'elementor-extensions' ),
				'selector' => '{{WRAPPER}} .az-listing-container',
				'separator' => 'before'
			]
		);

		$this->add_control(
			'border_radius',
			[
				'label' => __( 'Border Radius', 'elementor-extensions' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%' ],
				'selectors' => [
					'{{WRAPPER}} .az-listing-container' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}}',
				]
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
            'section_alphabets_style',
            [
                'label' => __( 'Alphabets', 'elementor-extensions' ),
                'tab' => Controls_Manager::TAB_STYLE
            ]
		);

		$this->add_responsive_control(
			'hide_show_alphabet',
			[
				'label' => __( 'Hide', 'elementor-extensions' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => __( 'No', 'elementor-extensions' ),
				'label_off' => __( 'Yes', 'elementor-extensions' ),
				'return_value' => 'none',
				'default' => 'label_off',
				'selectors' => [
					'{{WRAPPER}} .az-listing-container .alphabets' => 'display:{{VALUE}};',
                ],
			]
		);

			$this->start_controls_tabs( 'alphabet_tabs' );

				$this->start_controls_tab( 'normal_alphabet', [ 'label' => __( 'Normal', 'elementor-extensions' ) ] );
					$this->add_group_control(
						Group_Control_Typography::get_type(),
						[
							'name' => 'alphabet_typography',
							'label' => __( 'Typography', 'elementor-extensions' ),
							'selector' => '{{WRAPPER}} .az-listing-container ul.alphabets li a',
						]
					);

					$this->add_control(
						'alphabet_color',
						[
							'label' => __( 'Color', 'elementor-extensions' ),
							'type' => Controls_Manager::COLOR,
							'selectors' => [
								'{{WRAPPER}} .az-listing-container ul.alphabets li a' => 'color: {{VALUE}}',
							],
						]
					);

					$this->add_control(
						'alphabet_background',
						[
							'label' => __( 'Background', 'elementor-extensions' ),
							'type' => Controls_Manager::COLOR,
							'selectors' => [
								'{{WRAPPER}} .az-listing-container ul.alphabets li' => 'background: {{VALUE}}',
							],
						]
					);

					$this->add_responsive_control(
						'alphabet_padding',
						[
							'label' => __( 'Padding', 'elementor-extensions' ),
							'type' => Controls_Manager::DIMENSIONS,
							'size_units' => [ 'px', '%', 'em' ],
							'selectors' => [
								'{{WRAPPER}} .az-listing-container ul.alphabets li' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
							],
						]
					);

					$this->add_group_control(
						Group_Control_Border::get_type(),
						[
							'name' => 'alphabet_border',
							'label' => __( 'Border', 'elementor-extensions' ),
							'selector' => '{{WRAPPER}} .az-listing-container ul.alphabets li',
							'separator' => 'before'
						]
					);

				$this->end_controls_tab();

				$this->start_controls_tab( 'hover_alphabet', [ 'label' => __( 'Hover', 'elementor-extensions' ) ] );
					$this->add_group_control(
						Group_Control_Typography::get_type(),
						[
							'name' => 'hover_alphabet_typography',
							'label' => __( 'Typography', 'elementor-extensions' ),
							'selector' => '{{WRAPPER}} .az-listing-container ul.alphabets li:hover a',
						]
					);

					$this->add_control(
						'hover_alphabet_color',
						[
							'label' => __( 'Color', 'elementor-extensions' ),
							'type' => Controls_Manager::COLOR,
							'selectors' => [
								'{{WRAPPER}} .az-listing-container ul.alphabets li:hover a' => 'color: {{VALUE}}',
							],
						]
					);

					$this->add_control(
						'hover_alphabet_background',
						[
							'label' => __( 'Background', 'elementor-extensions' ),
							'type' => Controls_Manager::COLOR,
							'selectors' => [
								'{{WRAPPER}} .az-listing-container ul.alphabets li:hover' => 'background: {{VALUE}}',
							],
						]
					);

				$this->end_controls_tab();

				$this->start_controls_tab( 'active_alphabet', [ 'label' => __( 'Active', 'elementor-extensions' ) ] );
					$this->add_group_control(
						Group_Control_Typography::get_type(),
						[
							'name' => 'active_alphabet_typography',
							'label' => __( 'Typography', 'elementor-extensions' ),
							'selector' => '{{WRAPPER}} .az-listing-container ul.alphabets li.active a',
						]
					);

					$this->add_control(
						'active_alphabet_color',
						[
							'label' => __( 'Color', 'elementor-extensions' ),
							'type' => Controls_Manager::COLOR,
							'selectors' => [
								'{{WRAPPER}} .az-listing-container ul.alphabets li.active a' => 'color: {{VALUE}}',
							],
						]
					);

					$this->add_control(
						'active_alphabet_background',
						[
							'label' => __( 'Background', 'elementor-extensions' ),
							'type' => Controls_Manager::COLOR,
							'selectors' => [
								'{{WRAPPER}} .az-listing-container ul.alphabets li.active' => 'background: {{VALUE}}',
							],
						]
					);

					$this->add_responsive_control(
						'active_alphabet_padding',
						[
							'label' => __( 'Padding', 'elementor-extensions' ),
							'type' => Controls_Manager::DIMENSIONS,
							'size_units' => [ 'px', '%', 'em' ],
							'selectors' => [
								'{{WRAPPER}} .az-listing-container ul.alphabets li.active' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
							],
						]
					);

					$this->add_group_control(
						Group_Control_Border::get_type(),
						[
							'name' => 'active_alphabet_border',
							'label' => __( 'Border', 'elementor-extensions' ),
							'selector' => '{{WRAPPER}} .az-listing-container ul.alphabets li.active',
							'separator' => 'before'
						]
					);

				$this->end_controls_tab();

				$this->start_controls_tab( 'container_alphabet', [ 'label' => __( 'Container', 'elementor-extensions' ) ] );

					$this->add_control(
						'alphabet_container_background',
						[
							'label' => __( 'Background', 'elementor-extensions' ),
							'type' => Controls_Manager::COLOR,
							'selectors' => [
								'{{WRAPPER}} .az-listing-container ul.alphabets' => 'background: {{VALUE}}',
							],
						]
					);

					$this->add_responsive_control(
						'alphabet_container_padding',
						[
							'label' => __( 'Padding', 'elementor-extensions' ),
							'type' => Controls_Manager::DIMENSIONS,
							'size_units' => [ 'px', '%', 'em' ],
							'selectors' => [
								'{{WRAPPER}} .az-listing-container ul.alphabets' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
							],
						]
					);

					$this->add_responsive_control(
						'alphabet_container_margin',
						[
							'label' => __( 'Margin', 'elementor-extensions' ),
							'type' => Controls_Manager::DIMENSIONS,
							'size_units' => [ 'px', '%', 'em' ],
							'selectors' => [
								'{{WRAPPER}} .az-listing-container ul.alphabets' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
							],
						]
					);

					$this->add_group_control(
						Group_Control_Border::get_type(),
						[
							'name' => 'alphabet_container_border',
							'label' => __( 'Border', 'elementor-extensions' ),
							'selector' => '{{WRAPPER}} .az-listing-container ul.alphabets',
							'separator' => 'before'
						]
					);

				$this->end_controls_tab();

			$this->end_controls_tabs();

		$this->end_controls_section();


		$this->start_controls_section(
            'section_categories_style',
            [
                'label' => __( 'Categories', 'elementor-extensions' ),
                'tab' => Controls_Manager::TAB_STYLE
            ]
		);

		$this->add_responsive_control(
			'hide_show_categories',
			[
				'label' => __( 'Hide', 'elementor-extensions' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => __( 'No', 'elementor-extensions' ),
				'label_off' => __( 'Yes', 'elementor-extensions' ),
				'return_value' => 'none',
				'default' => 'label_off',
				'selectors' => [
					'{{WRAPPER}} .az-listing-container .categories_wrapper' => 'display:{{VALUE}};',
                ],
			]
		);

			$this->start_controls_tabs( 'categories_tabs' );

				$this->start_controls_tab( 'normal_category', [ 'label' => __( 'Normal', 'elementor-extensions' ) ] );
					$this->add_group_control(
						Group_Control_Typography::get_type(),
						[
							'name' => 'categories_typography',
							'label' => __( 'Typography', 'elementor-extensions' ),
							'selector' => '{{WRAPPER}} .az-listing-container ul.categories li a',
						]
					);

					$this->add_control(
						'categories_color',
						[
							'label' => __( 'Color', 'elementor-extensions' ),
							'type' => Controls_Manager::COLOR,
							'selectors' => [
								'{{WRAPPER}} .az-listing-container ul.categories li a' => 'color: {{VALUE}}',
							],
						]
					);

					$this->add_control(
						'categories_background',
						[
							'label' => __( 'Background', 'elementor-extensions' ),
							'type' => Controls_Manager::COLOR,
							'selectors' => [
								'{{WRAPPER}} .az-listing-container ul.categories li' => 'background: {{VALUE}}',
							],
						]
					);

					$this->add_responsive_control(
						'categories_padding',
						[
							'label' => __( 'Padding', 'elementor-extensions' ),
							'type' => Controls_Manager::DIMENSIONS,
							'size_units' => [ 'px', '%', 'em' ],
							'selectors' => [
								'{{WRAPPER}} .az-listing-container ul.categories li' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
							],
						]
					);

					$this->add_responsive_control(
						'categories_margin',
						[
							'label' => __( 'Margin', 'elementor-extensions' ),
							'type' => Controls_Manager::DIMENSIONS,
							'size_units' => [ 'px', '%', 'em' ],
							'selectors' => [
								'{{WRAPPER}} .az-listing-container ul.categories li' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
							],
						]
					);

					$this->add_group_control(
						Group_Control_Border::get_type(),
						[
							'name' => 'categories_border',
							'label' => __( 'Border', 'elementor-extensions' ),
							'selector' => '{{WRAPPER}} .az-listing-container ul.categories li',
							'separator' => 'before'
						]
					);

				$this->end_controls_tab();

				$this->start_controls_tab( 'hover_category', [ 'label' => __( 'Hover', 'elementor-extensions' ) ] );
					$this->add_group_control(
						Group_Control_Typography::get_type(),
						[
							'name' => 'hover_categories_typography',
							'label' => __( 'Typography', 'elementor-extensions' ),
							'selector' => '{{WRAPPER}} .az-listing-container ul.categories li:hover a',
						]
					);

					$this->add_control(
						'hover_categories_color',
						[
							'label' => __( 'Color', 'elementor-extensions' ),
							'type' => Controls_Manager::COLOR,
							'selectors' => [
								'{{WRAPPER}} .az-listing-container ul.categories li:hover a' => 'color: {{VALUE}}',
							],
						]
					);

					$this->add_control(
						'hover_categories_background',
						[
							'label' => __( 'Background', 'elementor-extensions' ),
							'type' => Controls_Manager::COLOR,
							'selectors' => [
								'{{WRAPPER}} .az-listing-container ul.categories li:hover' => 'background: {{VALUE}}',
							],
						]
					);

				$this->end_controls_tab();

				$this->start_controls_tab( 'active_category', [ 'label' => __( 'Active', 'elementor-extensions' ) ] );
					$this->add_group_control(
						Group_Control_Typography::get_type(),
						[
							'name' => 'active_category_typography',
							'label' => __( 'Typography', 'elementor-extensions' ),
							'selector' => '{{WRAPPER}} .az-listing-container ul.categories li.active a',
						]
					);

					$this->add_control(
						'active_category_color',
						[
							'label' => __( 'Color', 'elementor-extensions' ),
							'type' => Controls_Manager::COLOR,
							'selectors' => [
								'{{WRAPPER}} .az-listing-container ul.categories li.active a' => 'color: {{VALUE}}',
							],
						]
					);

					$this->add_control(
						'active_category_background',
						[
							'label' => __( 'Background', 'elementor-extensions' ),
							'type' => Controls_Manager::COLOR,
							'selectors' => [
								'{{WRAPPER}} .az-listing-container ul.categories li.active' => 'background: {{VALUE}}',
							],
						]
					);

				$this->end_controls_tab();

				$this->start_controls_tab( 'label_category', [ 'label' => __( 'Label', 'elementor-extensions' ) ] );
					$this->add_group_control(
						Group_Control_Typography::get_type(),
						[
							'name' => 'label_categories_typography',
							'label' => __( 'Typography', 'elementor-extensions' ),
							'selector' => '{{WRAPPER}} .az-listing-container .categories_wrapper span',
						]
					);

					$this->add_control(
						'label_categories_color',
						[
							'label' => __( 'Color', 'elementor-extensions' ),
							'type' => Controls_Manager::COLOR,
							'selectors' => [
								'{{WRAPPER}} .az-listing-container .categories_wrapper span' => 'color: {{VALUE}}',
							],
						]
					);

					$this->add_responsive_control(
						'label_categories_padding',
						[
							'label' => __( 'Padding', 'elementor-extensions' ),
							'type' => Controls_Manager::DIMENSIONS,
							'size_units' => [ 'px', '%', 'em' ],
							'selectors' => [
								'{{WRAPPER}} .az-listing-container .categories_wrapper span' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
							],
						]
					);

					$this->add_responsive_control(
						'label_categories_margin',
						[
							'label' => __( 'Margin', 'elementor-extensions' ),
							'type' => Controls_Manager::DIMENSIONS,
							'size_units' => [ 'px', '%', 'em' ],
							'selectors' => [
								'{{WRAPPER}} .az-listing-container .categories_wrapper span' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
							],
						]
					);
				$this->end_controls_tab();

			$this->end_controls_tabs();

		$this->end_controls_section();

		$this->start_controls_section(
            'section_listings_style',
            [
                'label' => __( 'Listing', 'elementor-extensions' ),
                'tab' => Controls_Manager::TAB_STYLE
            ]
		);

			$this->start_controls_tabs( 'listings_tabs' );
				$this->start_controls_tab( 'alphabet_tab_style', [ 'label' => __( 'Alphabet', 'elementor-extensions' ) ] );
					$this->add_group_control(
						Group_Control_Typography::get_type(),
						[
							'name' => 'listing_alphabet_typo',
							'label' => __( 'Typography', 'elementor-extensions' ),
							'selector' => '{{WRAPPER}} .az-listing-container .posts_listing .letter span',
						]
					);

					$this->add_control(
						'listings_alphabet_color',
						[
							'label' => __( 'Color', 'elementor-extensions' ),
							'type' => Controls_Manager::COLOR,
							'selectors' => [
								'{{WRAPPER}} .az-listing-container .posts_listing .letter span' => 'color: {{VALUE}}',
							],
						]
					);

					$this->add_control(
						'listings_alphabet_background',
						[
							'label' => __( 'Background', 'elementor-extensions' ),
							'type' => Controls_Manager::COLOR,
							'selectors' => [
								'{{WRAPPER}} .az-listing-container .posts_listing .letter' => 'background: {{VALUE}}',
							],
						]
					);

					$this->add_responsive_control(
						'listings_alphabet_padding',
						[
							'label' => __( 'Padding', 'elementor-extensions' ),
							'type' => Controls_Manager::DIMENSIONS,
							'size_units' => [ 'px', '%', 'em' ],
							'selectors' => [
								'{{WRAPPER}} .az-listing-container .posts_listing .letter' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
							],
						]
					);

					$this->add_responsive_control(
						'listings_alphabet_margin',
						[
							'label' => __( 'Margin', 'elementor-extensions' ),
							'type' => Controls_Manager::DIMENSIONS,
							'size_units' => [ 'px', '%', 'em' ],
							'selectors' => [
								'{{WRAPPER}} .az-listing-container .posts_listing .letter' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
							],
						]
					);

					$this->add_group_control(
						Group_Control_Border::get_type(),
						[
							'name' => 'listings_alphabet_border',
							'label' => __( 'Border', 'elementor-extensions' ),
							'selector' => '{{WRAPPER}} .az-listing-container .posts_listing .letter',
							'separator' => 'before'
						]
					);

				$this->end_controls_tab();

				$this->start_controls_tab( 'normal_listing_link', [ 'label' => __( 'Normal Link', 'elementor-extensions' ) ] );
					$this->add_group_control(
						Group_Control_Typography::get_type(),
						[
							'name' => 'listing_link_typography',
							'label' => __( 'Typography', 'elementor-extensions' ),
							'selector' => '{{WRAPPER}} .az-listing-container .posts ul li a',
						]
					);

					$this->add_control(
						'listing_link_color',
						[
							'label' => __( 'Color', 'elementor-extensions' ),
							'type' => Controls_Manager::COLOR,
							'selectors' => [
								'{{WRAPPER}} .az-listing-container .posts ul li a' => 'color: {{VALUE}}',
							],
						]
					);


				$this->end_controls_tab();

				$this->start_controls_tab( 'hover_listing_link', [ 'label' => __( 'Hover Link', 'elementor-extensions' ) ] );
					$this->add_group_control(
						Group_Control_Typography::get_type(),
						[
							'name' => 'hover_listing_link_typography',
							'label' => __( 'Typography', 'elementor-extensions' ),
							'selector' => '{{WRAPPER}} .az-listing-container .posts ul li:hover a',
						]
					);

					$this->add_control(
						'hover_listing_link_color',
						[
							'label' => __( 'Color', 'elementor-extensions' ),
							'type' => Controls_Manager::COLOR,
							'selectors' => [
								'{{WRAPPER}} .az-listing-container .posts ul li:hover a' => 'color: {{VALUE}}',
							],
						]
					);

				$this->end_controls_tab();

			$this->end_controls_tabs();

		$this->end_controls_section();
	}

    protected function render() {
        $settings = $this->get_settings_for_display();
        $posts = $this->getPostByPostType($settings);

        if (empty($posts)) {
            echo esc_html('There are no posts available');
            return;
        }

        $alphabets_listing = $this->getPostsWithAlphabets($posts, $settings);
        $post_alphabets = $alphabets_listing['alphabets'];
        $listing_alphabets = $this->getAlphabets();
        $categories = $this->getTaxonomyByPostType($settings);

        ?>
        <div class="az-listing-container">
            <?php if ($settings['hide_show_categories'] !== 'none') : ?>
                <ul class="alphabets">
                    <?php foreach ($listing_alphabets as $alphabet) : ?>
                        <li class="<?php echo in_array($alphabet, $post_alphabets) ? 'active' : ''; ?>">
                            <a href="<?php echo in_array($alphabet, $post_alphabets) ? '#' . esc_html($alphabet) : 'javascript:void(0);'; ?>">
                                <?php echo esc_html($alphabet); ?>
                            </a>
                        </li>
                    <?php endforeach; ?>
                </ul>
            <?php endif; ?>

            <?php if ($settings['hide_show_alphabet'] !== 'none') : ?>
                <div class="categories_wrapper">
                    <span>Categories:</span>
                    <ul class="categories">
                        <?php
                        $all_cat = json_encode([
                            "post_type" => $settings['post_type'],
                            "name" => "All",
                        ], JSON_PRETTY_PRINT);
                        ?>
                        <li class='active'><a href='javascript:void(0);' id='all' data-setting='<?php echo esc_attr($all_cat); ?>'>All</a></li>
                        <?php foreach ($categories as $category) : ?>
                            <?php
                            $name = $category['name'];
                            $taxonomy_data = json_encode($category, JSON_PRETTY_PRINT);
                            $cat_name_load = strtolower(preg_replace('/[^a-z0-9]+/', '', str_replace(['&amp;', '&', ' '], '', $name)));
                            ?>
                            <li><a href='javascript:void(0);' id='<?php echo esc_attr($cat_name_load); ?>' data-setting='<?php echo esc_attr($taxonomy_data); ?>'><?php echo esc_html($name); ?></a></li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            <?php endif; ?>

            <div id="listings">
                <?php $this->printListing($alphabets_listing); ?>
            </div>

            <div class="elementor_extensions_loading_overlay">
                <div class="elementor_extensions_loader"></div>
            </div>
        </div>
        <?php
    }

    /*@ Print post based on first character of post */
    protected function printListing($alphabets_listing) {
        $post_alphabets = $alphabets_listing['alphabets'];

        if (!empty($post_alphabets)) :
            foreach ($post_alphabets as $alphabet) :
                ?>
                <div class="posts_listing" id="<?php echo esc_attr($alphabet); ?>">
                    <div class="letter">
                        <span><?php echo esc_html($alphabet); ?></span>
                    </div>
                    <?php if (!empty($alphabets_listing['listings']) && !empty($alphabets_listing['listings'][$alphabet])) : ?>
                        <div class="posts">
                            <ul>
                                <?php foreach ($alphabets_listing['listings'][$alphabet] as $list) : ?>
                                    <?php $img = $list['image'] ? '<span class="brand-logo"><img src="' . esc_url($list['image']) . '"/></span>' : ''; ?>
                                    <li>
                                        <a href="<?php echo esc_url($list['link']); ?>">
                                            <?php echo $img; ?>
                                            <span class="brand-title"><?php echo esc_html($list['post_title']); ?></span>
                                        </a>
                                    </li>
                                <?php endforeach; ?>
                            </ul>
                        </div>
                    <?php endif; ?>
                </div>
            <?php
            endforeach;
        else :
            ?>
            <span class="not_found">There is no posts available at the moment, Please add some.</span>
        <?php
        endif;
    }

    /*@ Making a list of post based on Alphabates */
	protected function getPostsWithAlphabets($posts, $settings=null){

		$response = $alphabets = $num_alphabets = $listings = $numeric_arr = [];

		$is_list_number = (!empty($settings['list_number_after_letter']) && $settings['list_number_after_letter'] === 'yes');
		foreach($posts as $key => $post):

			$title = $post->post_title;

			$alpha_title = str_replace(' ', '-', $title); /* Replaces all spaces with hyphens. */
			$alpha_title = preg_replace('/[^A-Za-z0-9\-]/', '', $alpha_title); /* Removes special chars. */

			$alphabet = strtoupper(substr($alpha_title, 0, 1));

			/* grab the url for the full size featured image */
			$featured_img = '';
			if (!empty($settings['show_feature_image']) && $settings['show_feature_image'] === 'yes') {
				$featured_img = get_the_post_thumbnail_url($post->ID,'full');
			}

			if(is_numeric($alphabet) && $is_list_number):
				$num_alphabets[] = $alphabet;
				$numeric_arr[$alphabet][$key]['link'] = get_the_permalink($post->ID);
				$numeric_arr[$alphabet][$key]['post_title'] = $title;
				$numeric_arr[$alphabet][$key]['image'] = $featured_img;
			else:
				$alphabets[] = $alphabet;
				$listings[$alphabet][$key]['link'] = get_the_permalink($post->ID);
				$listings[$alphabet][$key]['post_title'] = $title;
				$listings[$alphabet][$key]['image'] = $featured_img;
			endif;
		endforeach;

		/* Separate numeric array */
		if($is_list_number):
			$listings = $listings + $numeric_arr;
			$alphabets = array_merge($alphabets, $num_alphabets);
		else:
			asort($alphabets);
		endif;

		$alphabets = array_unique($alphabets);
		$response['alphabets'] = $alphabets;
		$response['listings'] = $listings;

		return $response;
	}

	/*@ Print A-Z alphabates */
	protected function getAlphabets(){
		$alphabets = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];

		return $alphabets;
	}

	/*@ Get taxonomy/category names with required data for ajax */
	protected function getTaxonomyByPostType($settings){

		$taxonomy_objects = get_object_taxonomies( $settings['post_type'], 'objects' );

		$categories = [];

		if(!empty($taxonomy_objects)):
			$count = 0;
			foreach($taxonomy_objects as $tax_key => $taxonomy):

				$args = array(
					'taxonomy'     => $tax_key,
					'orderby'      => 'name',
					'hide_empty'   => 0,
					'order'        => 'ASC',
					'hide_empty'   => true
				);

				$cats = get_categories($args);

				if(!empty($cats)):

					foreach($cats as $key => $cat):
						$slug = $cat->slug;
						$categories[$slug]['taxonomy'] = $tax_key;
						$categories[$slug]['slug'] = $slug;
						$categories[$slug]['name'] = $cat->name;
						$categories[$slug]['post_type'] = $settings['post_type'];
						$count++;
					endforeach;
				endif;

			endforeach;
		endif;

		ksort($categories);

		return $categories;
	}

	/*@ Filter post by category/taxonomy slug using Ajax */
	public function getPostCategoriesById($request){

		$cat_data = $request['cat_data'];

		$settings = '';
		if(!empty($request['widget_settings'])):
			$settings = $request['widget_settings'];
		endif;

		$name = sanitize_text_field($cat_data['name']);
		$post_type = sanitize_text_field($cat_data['post_type']);

		$args = array(
			'post_type' => $post_type,
			'post_status' => 'publish',
			'posts_per_page' => -1,
			'orderby' => 'title',
			'order' => 'ASC'
		);

		if($name !== 'All'):
			$taxonomy = sanitize_text_field($cat_data['taxonomy']);
			$slug = sanitize_text_field($cat_data['slug']);

			$args['tax_query'] =  array(
				array(
					'taxonomy' => $taxonomy,
					'field' => 'slug',
					'terms' => $slug
				)
			);
		endif;

		$posts = get_posts( $args );

		if(!empty($posts)):
			$alphabets_listing = $this->getPostsWithAlphabets($posts, $settings);
			$post_alphabets = $alphabets_listing['alphabets'];

			$this->printListing($alphabets_listing);
		else:
            ?>
			    <span class="not_found">There is no any post available.</span>
            <?php
		endif;
	}

	/*@ Get posts by post type */
	protected function getPostByPostType($settings){
		$post_type = $settings['post_type'];

		if(!empty($post_type)):
			$posts = get_posts([
				'numberposts' => -1,
				'post_type' => $post_type,
				'orderby' => 'title',
				'order' => 'ASC'
			]);
			return $posts;

		else:
            ?>
			<p>Please select a post type</p>
            <?php
		endif;
	}

	protected function content_template() {

	}
}
