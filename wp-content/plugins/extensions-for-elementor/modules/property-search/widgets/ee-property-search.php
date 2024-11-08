<?php
namespace ElementorExtensions\Modules\PropertySearch\Widgets;

if ( ! defined( 'ABSPATH' ) ) exit;

use ElementorExtensions\Base\Base_Widget;
use Elementor\Controls_Manager;
use Elementor\Group_Control_Border;
use Elementor\Group_Control_Background;
use Elementor\Group_Control_Typography;
use ElementorExtensions\Admin\EE_MB_Setting_Common;
use ElementorExtensions\Classes\Utils;

class EE_Property_Search extends Base_Widget {

	public function get_name() {
		return $this->widget_name_prefix.'property-search';
	}

	public function get_title() {
		return __( 'Property Search', 'elementor-extensions' );
	}

	public function get_icon() {
		return 'eicon-welcome';
	}

	public function get_script_depends() {
		return [
			'ee-mb-googlemap-api',
		];
	} 

	public function get_keywords() {
		return [ 'p', 'pro', 'ps', 'search', 'property' ];
	}
	
	protected function _register_controls() {
		
		/*@Content Start */
		$this->start_controls_section(
            'searchbox_content',
            [
                'label' => __( 'Search Box', 'elementor-extensions' ),
                'tab' => Controls_Manager::TAB_CONTENT,
				'show_label' => true,
            ]
		);

		$this->add_control(
			'searchbox_title',
			[
				'label'       => __( 'Title', 'elementor-extensions' ),
				'type'        => Controls_Manager::TEXT,
				'placeholder' => __( 'Enter your title', 'elementor-extensions' ),
				'default'     => __('Find your perfect property with Your Sitename', 'elementor-extensions' ),
				'label_block' => true,
			]
		);

		$this->add_control(
			'searchbox_text_placeholder',
			[
				'label'       => __( 'Textbox Placeholder', 'elementor-extensions' ),
				'type'        => Controls_Manager::TEXT,
				'placeholder' => __( 'Enter textbox placeholder text', 'elementor-extensions' ),
				'default'     => __('Type a location or postcode to begin search', 'elementor-extensions' ),
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

		$all_pages = Utils::get_pages();
		$page = get_page_by_path( 'property-search' );
		$default_pro_page = '';
		if(!empty((array)$page)):
			$default_pro_page = $page->ID;
		endif;
		
		$this->add_control(
			'properties_page',
			[
				'label'       => __( 'Properties Page', 'elementor-extensions' ),
				'type'        => Controls_Manager::SELECT,
				'default'     => $default_pro_page,
				'options' 	  => $all_pages,
				'description' => __('Select the page where you will add the "Properties" widget. Search will take you to that page and displays property listing.', 'elementor-extensions' ),
				'label_block' => true,
			]
		);

		$this->end_controls_section();
		
		$this->start_controls_section(
            'searchbox_style',
            [
                'label' => __( 'Search Box', 'elementor-extensions' ),
                'tab' => Controls_Manager::TAB_STYLE,
				'show_label' => true,
            ]
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => 'searchbox_background',
				'label' => __( 'Background', 'elementor-extensions' ),
				'types' => [ 'classic', 'gradient' ],
				'selector' => '{{WRAPPER}} .ee_mb_property_searchbox_wrapper',
			]
		);

		$this->add_responsive_control(
			'searchbox_width',
			[
				'label' => __( 'Searchbox Width', 'elementor-extensions' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 1000,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
					'default' => [
						'unit' => '%',
					],
				],
				'selectors' => [
					'{{WRAPPER}} .ee_mb_property_searchbox_wrapper' => 'width: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name' => 'searchbox_border',
				'label' => __( 'Searchbox Border', 'elementor-extensions' ),
				'show_label' => true,
				'selector' => '{{WRAPPER}} .ee_mb_property_searchbox_wrapper',
			]
		);

		$this->add_control(
			'searchbox_border_radius',
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
				'default' => [
					'size' => 5,
					'unit' => 'px',
				],
				'label_block' => true,
				'selectors' => [
					'{{WRAPPER}} .ee_mb_property_searchbox_wrapper' => 'border-radius: {{SIZE}}{{UNIT}};',
				],
				'separator' => 'before',
			]
		);
 
		$this->add_control(
			'title_style_heading',
			[
				'label' => __( 'Title Style', 'elementor-extensions' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'title_typography',
				'label' => __( 'Typography', 'elementor-extensions' ),
				'selector' => '{{WRAPPER}} .ee_mb_property_searchbox_wrapper .ee_mb_property_searchbox_title',
			]
		);

		$this->add_control(
			'title_color',
			[
				'label' => __( 'Text Color', 'elementor-extensions' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .ee_mb_property_searchbox_wrapper .ee_mb_property_searchbox_title' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'input_style_heading',
			[
				'label' => __( 'Input Style', 'elementor-extensions' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'text_typography',
				'label' => __( 'Typographpy', 'elementor-extensions' ),
				'selector' => '{{WRAPPER}} .ee_mb_property_searchbox_wrapper input,{{WRAPPER}} .ee_mb_property_searchbox_wrapper input::placeholder',
			]
		);

		$this->add_control(
			'input_text_color',
			[
				'label' => __( 'Text Color', 'elementor-extensions' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .ee_mb_property_searchbox_wrapper input' => 'color: {{VALUE}};',
					'{{WRAPPER}} .ee_mb_property_searchbox_wrapper input::placeholder' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'input_background',
			[
				'label' => __( 'Background', 'elementor-extensions' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .ee_mb_property_searchbox_wrapper input' => 'background: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name' => 'input_border',
				'label' => __( 'Border', 'elementor-extensions' ),
				'show_label' => true,
				'selector' => '{{WRAPPER}} .ee_mb_property_searchbox_wrapper input',
			]
		);

		$this->add_control(
			'input_border_radius',
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
				'default' => [
					'size' => 3,
					'unit' => 'px',
				],
				'label_block' => true,
				'selectors' => [
					'{{WRAPPER}} .ee_mb_property_searchbox_wrapper input' => 'border-radius: {{SIZE}}{{UNIT}};',
				],
				'separator' => 'after',
			]
		);

		
		$this->add_control(
			'button_style_heading',
			[
				'label' => __( 'Button Style', 'elementor-extensions' ),
				'type' => Controls_Manager::HEADING,
			]
		);
		

		$this->add_control(
			'button_background',
			[
				'label' => __( 'Button Background', 'elementor-extensions' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .ee_mb_property_searchbox_wrapper .ee_mb_prperty_searchbox_inner_wrapper button' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'button_color',
			[
				'label' => __( 'Button Text Color', 'elementor-extensions' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .ee_mb_property_searchbox_wrapper .ee_mb_prperty_searchbox_inner_wrapper button' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'button_typography',
				'label' => __( 'Button Typography', 'elementor-extensions' ),
				'selector' => '{{WRAPPER}} .ee_mb_property_searchbox_wrapper .ee_mb_prperty_searchbox_inner_wrapper button',
			]
		);

		$this->end_controls_section();
	}

	protected function render() {
		$settings = $this->get_settings_for_display();

		$gmapkey = EE_MB_Setting_Common::get_settings_key( 'ee_mb_integration_setting', 'ee_mb_google_map_key' );

		if ( empty($gmapkey) ): ?>
            <b style="text-align:center;width:100%;display:inline-block;"><?php echo __( 'You have not set your Google Maps API key to enable autocomplete feature for property search. Add it from ', 'elementor-extensions' ); ?><a target="_blank" href="<?php echo esc_attr(admin_url('admin.php?page=elementor-extensions#integration')); ?>">here</a>.</b>
		<?php
        endif;

		$action_url = site_url('property-search');
		$page_id = $settings['properties_page'];
		if ( empty($page_id) ): ?>
			    <b style="text-align:center;width:100%;display:inline-block;"><?php echo __( 'Select the page where you will add the "Properties" widget. Search will take you to that page and displays property listing.', 'elementor-extensions' ); ?></b>
            <?php
		else:
			$action_url = get_the_permalink($page_id);
		endif;
		
		$title = $settings['searchbox_title'];
		$text_placeholder = $settings['searchbox_text_placeholder'];
		$btn_label = $settings['searchbox_button_label'];

		$pro_general_setting = EE_MB_Setting_Common::get_settings_key( 'ee_mb_property_setting' );

		$data_settings['country_restriction'] = (isset($pro_general_setting->country_restriction)) ? $pro_general_setting->country_restriction : '';


		?>
			<form class="ee_mb_homepage_searchbox_form" method="get" action="<?php echo esc_url($action_url); ?>" data-settings='<?php echo esc_attr(json_encode($data_settings)); ?>'>
			    <div class="ee_mb_property_searchbox_wrapper">
			        <span class="ee_mb_property_searchbox_title"><?php echo esc_html($title); ?></span>
			        <div class="ee_mb_prperty_searchbox_inner_wrapper">
			            <input type="text" name="location" id="ee_mb_property_txt" placeholder="<?php echo esc_attr($text_placeholder); ?>" required/>
			            <input type="hidden" name="radius" value="5"/>
			            <input type="hidden" name="lat" id="ee_mb_property_lat" value=""/>
			            <input type="hidden" name="long" id="ee_mb_property_long" value=""/>
			            <input type="hidden" name="view" value="grid"/>
			            <input type="hidden" name="pagination" value="1"/>
			            <button type="submit"><?php echo esc_html($btn_label); ?></button>
			        </div>
			    </div>
			</form>
			<div style="clear:both;"></div>
		<?php
	}

	protected function content_template() {
		
	}	
}
