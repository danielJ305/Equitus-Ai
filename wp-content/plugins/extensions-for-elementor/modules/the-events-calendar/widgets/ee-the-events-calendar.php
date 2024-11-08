<?php

namespace ElementorExtensions\Modules\TheEventsCalendar\Widgets;

if (!defined('ABSPATH')) exit;

use ElementorExtensions\Base\Base_Widget;
use Elementor\Controls_Manager;
use Elementor\Group_Control_Border;
use Elementor\Group_Control_Background;
use Elementor\Group_Control_Typography;
use Elementor\Group_Control_Image_Size;
use Elementor\Utils;
use Elementor\Repeater;
use Elementor\Control_Media;
use Elementor\Icons_Manager;
use Elementor\Group_Control_Box_Shadow;

class EE_The_Events_Calendar extends Base_Widget
{

    public function get_name()
    {
        return $this->widget_name_prefix . 'the-events-calendar';
    }

    public function get_title()
    {
        return __('The Event Calendar', 'elementor-for-extensions');
    }

    public function get_icon()
    {
        return 'eicon-hypster';
    }

    public function get_script_depends()
    {
        return [
            'ee-mb-jquery-ui',
            'moment',
            'ee-mb-fullcalendar',
            'ee-mb-daygrid',
            'ee-mb-list',
            'ee-mb-interaction',
            'ee-mb-timegrid'
        ];
    }

    public function get_keywords()
    {
        return ['the', 'events', 'calendar', 'tec', 'th'];
    }

    protected function _register_controls()
    {

        $this->start_controls_section(
            'event_content',
            [
                'label' => __('Events', 'elementor-for-extensions'),
            ]
        );

        $this->add_control(
            'event_view',
            [
                'label' => __('Event View', 'elementor-for-extensions'),
                'type' => Controls_Manager::SELECT,
                'default' => 'detail',
                'options' => [
                    'detail' => __('Detail View', 'elementor-for-extensions'),
                    'summary' => __('Summary View', 'elementor-for-extensions'),
                    'calendar' => __('Calendar View', 'elementor-for-extensions'),
                ],
                'frontend_available' => true,
            ]
        );

        $this->add_control(
            'disable_link',
            [
                'label' => __('Disable Event Page Link', 'elementor-for-extensions'),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => __('Yes', 'elementor-for-extensions'),
                'label_off' => __('No', 'elementor-for-extensions'),
                'return_value' => 'yes',
                'default' => 'label_off',
                'frontend_available' => true,
                'condition' => [
                    'event_view' => 'summary'
                ],
            ]
        );

        $this->add_control(
            'enable_event_detail',
            [
                'label' => __('Enable Event Detail', 'elementor-for-extensions'),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => __('Yes', 'elementor-for-extensions'),
                'label_off' => __('No', 'elementor-for-extensions'),
                'return_value' => 'yes',
                'default' => 'label_off',
                'frontend_available' => true,
                'condition' => [
                    'event_view!' => 'detail'
                ],
            ]
        );

        $this->add_control(
            'default_calendar_view',
            [
                'label' => __('Calendar Default View', 'elementor-for-extensions'),
                'type' => Controls_Manager::SELECT,
                'default' => 'dayGridMonth',
                'options' => [
                    'dayGridMonth' => __('Month View', 'elementor-for-extensions'),
                    'timeGridWeek' => __('Week View', 'elementor-for-extensions'),
                    'timeGridDay' => __('Day View', 'elementor-for-extensions'),
                    'listMonth' => __('List View', 'elementor-for-extensions'),
                ],
                'condition' => [
                    'event_view' => 'calendar'
                ],
                'frontend_available' => true,
            ]
        );

        $this->add_control(
            'show_future_events',
            [
                'label' => __('Show Future Events', 'elementor-for-extensions'),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => __('Yes', 'elementor-for-extensions'),
                'label_off' => __('No', 'elementor-for-extensions'),
                'return_value' => 'yes',
                'default' => '',
                'frontend_available' => true,
                'condition' => ['event_view' => 'summary'],
            ]
        );

        $this->add_control(
            'hide_past_events',
            [
                'label' => __('Hide Past Events', 'elementor-for-extensions'),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => __('Yes', 'elementor-for-extensions'),
                'label_off' => __('No', 'elementor-for-extensions'),
                'return_value' => 'yes',
                'default' => '',
                'condition' => ['event_view' => 'summary'],
            ]
        );

        $this->add_control(
            'default_to_next_event',
            [
                'label' => __('Default to Next Available Event', 'elementor-for-extensions'),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => __('Yes', 'elementor-for-extensions'),
                'label_off' => __('No', 'elementor-for-extensions'),
                'return_value' => 'yes',
                'default' => '',
                'condition' => ['event_view' => 'summary'],
            ]
        );

        $this->add_control(
            'default_to_show_time',
            [
                'label' => __('Show Time', 'elementor-for-extensions'),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => __('Yes', 'elementor-for-extensions'),
                'label_off' => __('No', 'elementor-for-extensions'),
                'return_value' => 'yes',
                'default' => '',
                'condition' => ['event_view' => 'summary'],
                'frontend_available' => true,
            ]
        );
        $this->add_control(
            'default_to_show_time_formate',
            [
                'label' => __('Time Format', 'elementor-for-extensions'),
                'type' => Controls_Manager::TEXT,
                'label_block' => true,
                'condition' => ['event_view' => 'summary'],
                'default' => __('h:i A', 'elementor-for-extensions'),
                'placeholder' => __('Enter time formate', 'elementor-for-extensions'),
                'description' => __('h:i a => 05:00 pm, <br>
				H:i a => 17:00 pm, <br>
				h:i A => 05:00 PM <br>
				H - 24-hour format of an hour (00 to 23) <br>
				h - 12-hour format of an hour with leading zeros (01 to 12) <br>
				i - Minutes with leading zeros (00 to 59) <br>
				s - Seconds with leading zeros (00 to 59) <br>
				a - Lowercase Ante meridiem and Post meridiem (am or pm) <br>
				', 'elementor-for-extensions'),
                'frontend_available' => true
            ]
        );


        $this->add_responsive_control(
            'event_columns',
            [
                'label' => __('Columns', 'elementor-for-extensions'),
                'type' => Controls_Manager::SELECT,
                'default' => 'myeventon_wrapper-4',
                'options' => [
                    'myeventon_wrapper-12' => __('1', 'elementor-for-extensions'),
                    'myeventon_wrapper-6' => __('2', 'elementor-for-extensions'),
                    'myeventon_wrapper-4' => __('3', 'elementor-for-extensions'),
                    'myeventon_wrapper-3' => __('4', 'elementor-for-extensions'),
                    'myeventon_wrapper-24' => __('5', 'elementor-for-extensions'),
                    'myeventon_wrapper-2' => __('6', 'elementor-for-extensions'),
                ],
                // 'devices' => [ 'desktop', 'tablet', 'mobile' ],
                'desktop_default' => [
                    'default' => 'myeventon_wrapper-4',
                ],
                'tablet_default' => [
                    'default' => 'myeventon_wrapper-6',
                ],
                'mobile_default' => [
                    'default' => 'myeventon_wrapper-12',
                ],
                'condition' => [
                    'event_view' => 'detail'
                ],
                'frontend_available' => true,
                // 'selectors' => [
                // 	'{{WRAPPER}} .tec_ee_mb_events_wrapper .myeventon_wrapper' => 'width: {{SIZE}}%;',
                // ],
            ]
        );

        $this->add_control(
            'column_gap',
            [
                'label' => __('Column Gap', 'elementor-for-extensions'),
                'type' => Controls_Manager::SELECT,
                'default' => 'medium',
                'options' => [
                    'small' => __('Small', 'elementor-for-extensions'),
                    'medium' => __('Medium', 'elementor-for-extensions'),
                    'large' => __('Large', 'elementor-for-extensions'),
                    'collapsed' => __('Collapsed', 'elementor-for-extensions'),
                ],
                'condition' => [
                    'event_view' => 'detail'
                ],
                'frontend_available' => true,
            ]
        );

        $this->add_responsive_control(
            'row_gap',
            [
                'label' => __('Row Gap', 'elementor-for-extensions'),
                'type' => Controls_Manager::SLIDER,
                'range' => [
                    'px' => [
                        'min' => 1,
                        'max' => 100,
                    ],
                ],
                'condition' => [
                    'event_view' => 'detail'
                ],
                'default' => [
                    'size' => 20
                ],
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_wrapper' => 'margin-bottom: {{SIZE}}px'
                ],
            ]
        );

        $this->add_control(
            'show_image',
            [
                'label' => __('Show Image', 'elementor-for-extensions'),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => __('Yes', 'elementor-for-extensions'),
                'label_off' => __('No', 'elementor-for-extensions'),
                'return_value' => 'yes',
                'frontend_available' => true,
                'default' => 'yes',
                'condition' => [
                    'event_view' => 'detail'
                ],
            ]
        );

        $this->add_control(
            'auto_height',
            [
                'label' => __('Equal Height', 'elementor-for-extensions'),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => __('Yes', 'elementor-for-extensions'),
                'label_off' => __('No', 'elementor-for-extensions'),
                'return_value' => 'yes',
                'frontend_available' => true,
                'default' => 'yes',
                'condition' => [
                    'event_view' => 'detail'
                ],
            ]
        );

        $this->add_control(
            'show_time',
            [
                'label' => __('Show Time', 'elementor-for-extensions'),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => __('Yes', 'elementor-for-extensions'),
                'label_off' => __('No', 'elementor-for-extensions'),
                'return_value' => 'yes',
                'frontend_available' => true,
                'default' => 'yes',
                'condition' => [
                    'event_view' => 'detail'
                ],
            ]
        );

        $this->add_control(
            'show_filter',
            [
                'label' => __('Show Filter', 'elementor-for-extensions'),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => __('Yes', 'elementor-for-extensions'),
                'label_off' => __('No', 'elementor-for-extensions'),
                'return_value' => 'yes',
                'frontend_available' => true,
                'default' => 'yes',
                'condition' => [
                    'event_view' => 'detail'
                ],
            ]
        );

        $this->add_control(
            'show_title',
            [
                'label' => __('Show Title', 'elementor-for-extensions'),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => __('Yes', 'elementor-for-extensions'),
                'label_off' => __('No', 'elementor-for-extensions'),
                'return_value' => 'yes',
                'frontend_available' => true,
                'default' => 'yes',
                'condition' => [
                    'event_view' => 'detail'
                ],
            ]
        );

        $this->add_control(
            'show_date',
            [
                'label' => __('Show Date', 'elementor-for-extensions'),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => __('Yes', 'elementor-for-extensions'),
                'label_off' => __('No', 'elementor-for-extensions'),
                'return_value' => 'yes',
                'frontend_available' => true,
                'default' => 'yes',
                'condition' => [
                    'event_view' => 'detail'
                ],
            ]
        );

        $this->add_control(
            'show_date_before_title',
            [
                'label' => __('Show Date Before Title', 'elementor-for-extensions'),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => __('Yes', 'elementor-for-extensions'),
                'label_off' => __('No', 'elementor-for-extensions'),
                'return_value' => 'yes',
                'frontend_available' => true,
                'default' => 'label_off',
                'condition' => [
                    'event_view' => 'detail',
                    'show_date' => 'yes'
                ],
            ]
        );

        $this->add_control(
            'add_link_to_date',
            [
                'label' => __('Add Page Link To Date', 'elementor-for-extensions'),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => __('Yes', 'elementor-for-extensions'),
                'label_off' => __('No', 'elementor-for-extensions'),
                'return_value' => 'yes',
                'frontend_available' => true,
                'default' => 'label_off',
                'condition' => [
                    'event_view' => 'detail',
                ],
            ]
        );

        $this->add_control(
            'add_link_to_title',
            [
                'label' => __('Add Page Link To Title', 'elementor-for-extensions'),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => __('Yes', 'elementor-for-extensions'),
                'label_off' => __('No', 'elementor-for-extensions'),
                'return_value' => 'yes',
                'frontend_available' => true,
                'default' => 'label_off',
                'condition' => [
                    'event_view' => 'detail',
                ],
            ]
        );

        $this->add_control(
            'show_end_date',
            [
                'label' => __('Show End Date', 'elementor-for-extensions'),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => __('Yes', 'elementor-for-extensions'),
                'label_off' => __('No', 'elementor-for-extensions'),
                'return_value' => 'yes',
                'frontend_available' => true,
                'default' => 'label_off',
                'condition' => [
                    'event_view' => 'detail',
                    'show_date' => 'yes'
                ],
            ]
        );

        $this->add_control(
            'show_option_excerpt_content',
            [
                'label' => __('Show Excerpt / Content', 'elementor-for-extensions'),
                'type' => Controls_Manager::SELECT,
                'default' => 'excerpt',
                'options' => [
                    'excerpt' => __('Excerpt', 'elementor-for-extensions'),
                    'content' => __('Content', 'elementor-for-extensions'),
                ],
                'condition' => [
                    'event_view' => 'detail'
                ],
                'frontend_available' => true,
            ]
        );

        $this->add_control(
            'excerpt_length',
            [
                'label' => __('Excerpt Length', 'elementor-for-extensions'),
                'type' => Controls_Manager::NUMBER,
                'default' => 15,
                'frontend_available' => true,
                'condition' => [
                    'event_view' => 'detail',
                    'show_option_excerpt_content' => 'excerpt'
                ],
            ]
        );

        // $this->add_control(
        // 	'show_meta',
        // 	[
        // 		'label' => __( 'Show Meta', 'elementor-for-extensions' ),
        // 		'type' => Controls_Manager::SWITCHER,
        // 		'label_on' => __( 'Yes', 'elementor-for-extensions' ),
        // 		'label_off' => __( 'No', 'elementor-for-extensions' ),
        // 		'return_value' => 'yes',
        // 		'frontend_available' => true,
        // 		'default' => 'yes',
        // 		'condition' => [
        // 			'event_view' => 'detail'
        // 		],
        // 	]
        // );
        $this->add_control(
            'show_cost',
            [
                'label' => __('Show Cost', 'elementor-for-extensions'),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => __('Yes', 'elementor-for-extensions'),
                'label_off' => __('No', 'elementor-for-extensions'),
                'return_value' => 'yes',
                'frontend_available' => true,
                'default' => 'yes',
                'condition' => [
                    'event_view' => 'detail'
                ],
            ]
        );

        $this->add_control(
            'show_website',
            [
                'label' => __('Show Website', 'elementor-for-extensions'),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => __('Yes', 'elementor-for-extensions'),
                'label_off' => __('No', 'elementor-for-extensions'),
                'return_value' => 'yes',
                'frontend_available' => true,
                'condition' => [
                    'event_view' => 'detail'
                ],
            ]
        );

        $this->add_control(
            'event_website_text_icon',
            [
                'label' => __('Website Icon', 'elementor-for-extensions'),
                'type' => Controls_Manager::ICONS,
                'condition' => [
                    'event_view' => 'detail',
                    'show_website' => 'yes'
                ],
            ]
        );

        $this->add_control(
            'event_website_text',
            [
                'label' => __('Website Text', 'elementor-for-extensions'),
                'type' => Controls_Manager::TEXT,
                'label_block' => false,
                'condition' => [
                    'event_view' => 'detail',
                    'show_website' => 'yes'
                ],
                'frontend_available' => true,
            ]
        );

        $this->add_control(
            'show_location',
            [
                'label' => __('Show Location', 'elementor-for-extensions'),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => __('Yes', 'elementor-for-extensions'),
                'label_off' => __('No', 'elementor-for-extensions'),
                'return_value' => 'yes',
                'frontend_available' => true,
                'condition' => [
                    'event_view' => 'detail'
                ],
            ]
        );

        $this->add_control(
            'show_seperator',
            [
                'label' => __('Add Meta Seperator', 'elementor-for-extensions'),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => __('Yes', 'elementor-for-extensions'),
                'label_off' => __('No', 'elementor-for-extensions'),
                'return_value' => 'yes',
                'frontend_available' => true,
                'condition' => [
                    'event_view' => 'detail'
                ],
            ]
        );

        $this->add_control(
            'anchor_link',
            [
                'label' => __('Anchor Link', 'elementor-for-extensions'),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => __('Yes', 'elementor-for-extensions'),
                'label_off' => __('No', 'elementor-for-extensions'),
                'return_value' => 'yes',
                'frontend_available' => true,
                'condition' => [
                    'event_view' => 'detail'
                ],
            ]
        );

        $this->add_control(
            'read_more_text',
            [
                'label' => __('Read More', 'elementor-for-extensions'),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => __('Yes', 'elementor-for-extensions'),
                'label_off' => __('No', 'elementor-for-extensions'),
                'return_value' => 'yes',
                'frontend_available' => true,
                'default' => 'yes',
                'condition' => [
                    'event_view' => 'detail'
                ],
            ]
        );

        $this->add_control(
            'event_read_more_text',
            [
                'label' => __('Link Text', 'elementor-for-extensions'),
                'type' => Controls_Manager::TEXT,
                'label_block' => true,
                'condition' => ['event_view' => 'detail'],
                'default' => __('Read more', 'elementor-for-extensions'),
                'placeholder' => __('Enter read more link text here', 'elementor-for-extensions'),
                'frontend_available' => true,
            ]
        );

        $this->add_control(
            'event_limit',
            [
                'label' => __('Event Limit', 'elementor-for-extensions'),
                'type' => Controls_Manager::NUMBER,
                'label_block' => false,
                'min' => -1,
                'max' => 100,
                'step' => 1,
                'default' => 3,
                'separator' => 'before',
                'description' => __('Limit events by default on page load', 'elementor-for-extensions'),
                'frontend_available' => true,
                'condition' => [
                    'event_view' => 'summary'
                ],
            ]
        );

        $this->add_control(
            'event_offset',
            [
                'label' => __('Event Offset', 'elementor-for-extensions'),
                'type' => Controls_Manager::NUMBER,
                'label_block' => false,
                'min' => -1,
                'max' => 100,
                'step' => 1,
                'default' => 3,
                'description' => __('Limit events when you click on "Show more button"', 'elementor-for-extensions'),
                'frontend_available' => true,
                'condition' => ['event_view' => 'summary'],
            ]
        );

        $this->add_control(
            'event_date_formate',
            [
                'label' => __('Date Format', 'elementor-for-extensions'),
                'type' => Controls_Manager::SELECT,
                'default' => 'l dS F Y',
                'options' => [
                    '' => __('Select', 'elementor-for-extensions'),
                    'l dS F Y' => __('Monday 30th June 2008', 'elementor-for-extensions'),
                    'd-m-Y' => __('30-06-2008', 'elementor-for-extensions'),
                    'Y-m-d' => __('2008-06-30', 'elementor-for-extensions'),
                    'd M Y' => __('30 June 2008', 'elementor-for-extensions'),
                    'M dS, Y' => __('July 1st, 2008', 'elementor-for-extensions'),
                ],
                'frontend_available' => true,
                'condition' => ['event_view' => 'detail'],
            ]
        );

        $this->add_control(
            'free_event_date_formate',
            [
                'label' => __('Text Date Format', 'elementor-for-extensions'),
                'type' => Controls_Manager::TEXT,
                'frontend_available' => true,
                'description' => esc_html__('Manually type date format ex. M jS Y (May 10th 2022)', 'elementor-for-extensions'),
                'condition' => ['event_view' => 'detail'],
            ]
        );

        $this->add_control(
            'hide_future_events',
            [
                'label' => __('Hide Future Events', 'elementor-for-extensions'),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => __('Show', 'elementor-for-extensions'),
                'label_off' => __('Hide', 'elementor-for-extensions'),
                'return_value' => 'yes',
                'default' => 'yes',
                'condition' => [
                    'event_view' => ['detail', 'calendar']
                ],
                'frontend_available' => true
            ]
        );

        $this->add_control(
            'past_event_section',
            [
                'label' => __('Show Past Event Section', 'elementor-for-extensions'),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => __('Show', 'elementor-for-extensions'),
                'label_off' => __('Hide', 'elementor-for-extensions'),
                'return_value' => 'yes',
                'default' => 'yes',
                'condition' => [
                    'event_view' => ['detail', 'calendar']
                ],
                'frontend_available' => true
            ]
        );

        $this->add_control(
            'past_event_title',
            [
                'label' => __('Past Event Title', 'elementor-for-extensions'),
                'type' => Controls_Manager::TEXT,
                'label_block' => true,
                'condition' => ['past_event_section' => 'yes', 'event_view' => 'detail'],
                'default' => __('Past Events', 'elementor-for-extensions'),
                'placeholder' => __('Enter past event title from here', 'elementor-for-extensions'),
                'frontend_available' => true
            ]
        );

        $this->add_control(
            'no_events_message',
            [
                'label' => esc_html__('No Events Message', 'elementor-for-extensions'),
                'type' => Controls_Manager::TEXTAREA,
                'rows' => 3,
                'label_block' => true,
                'default' => esc_html__('There are no events available, please add new event.', 'elementor-for-extensions'),
                'condition' => ['event_view' => 'detail'],
            ]
        );

        $this->end_controls_section();

        $this->start_controls_section(
            'image',
            [
                'label' => __('Image', 'elementor-for-extensions'),
                'condition' => ['event_view' => 'detail'],
            ]
        );

        $this->add_control(
            'thumbnail_size',
            [
                'label' => __('Image Size', 'elementor-for-extensions'),
                'type' => Controls_Manager::SELECT,
                'default' => 'thumbnail',
                'options' => [
                    'thumbnail' => __('Thumbnail - 150 x 150', 'elementor-for-extensions'),
                    'medium' => __('Medium - 300 x 300', 'elementor-for-extensions'),
                    'medium_large' => __('Medium Large - 768 x 0', 'elementor-for-extensions'),
                    'large' => __('Large - 1024 x 1024', 'elementor-for-extensions'),
                    '1536x1536' => __('1536x1536 - 1536 x 1536', 'elementor-for-extensions'),
                    '2048x2048' => __('2048x2048 - 2048 x 2048', 'elementor-for-extensions'),
                    'full' => __('Full', 'elementor-for-extensions'),
                ],
                'frontend_available' => true,
            ]
        );

        // $this->add_group_control(
        // 	Group_Control_Image_Size::get_type(),
        // 	[
        // 		'name' => 'thumbnail', // // Usage: `{name}_size` and `{name}_custom_dimension`, in this case `thumbnail_size` and `thumbnail_custom_dimension`.
        // 		'exclude' => [ 'custom' ],
        // 		'include' => [],
        // 		'frontend_available' => true,
        // 		'default' => 'large',
        // 	]
        // );


        $this->add_responsive_control(
            'image_width',
            [
                'label' => __('Image Width', 'elementor-for-extensions'),
                'type' => Controls_Manager::SLIDER,
                'range' => [
                    'px' => [
                        'min' => 1,
                        'max' => 100,
                    ],
                ],
                'condition' => [
                    'event_view' => 'detail'
                ],
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_wrapper > a > .myeventon_img_wrapper' => 'width: {{SIZE}}%'
                ],
                'frontend_available' => true,
            ]
        );

        $this->end_controls_section();

        $this->start_controls_section(
            'query',
            [
                'label' => __('Query', 'elementor-for-extensions'),
                // 'condition' => ['event_view' => 'detail'],
            ]
        );

        $this->add_control(
            'source',
            [
                'label' => _x('Source', 'Posts Query Control', 'elementor-for-extensions'),
                'type' => Controls_Manager::SELECT,
                'options' => [
                    '' => esc_html__('Show All', 'elementor-for-extensions'),
                    'by_name' => esc_html__('Manual Selection', 'elementor-for-extensions'),
                    'exclude' => esc_html__('Exclude', 'elementor-for-extensions'),
                ],
                'label_block' => true,
                'frontend_available' => true,
            ]
        );

        $taxonomies = $this->getEventCalendarTaxonomies();
        $termsByTaxonomyName = $this->getTermsByTaxonomyName();

        if (!empty($taxonomies)) {
            foreach ($taxonomies as $slug => $taxonomy) {

                $this->add_control(
                    $slug,
                    [
                        'label' => esc_html__($taxonomy, 'elementor-for-extensions'),
                        'type' => Controls_Manager::SELECT2,
                        'options' => $termsByTaxonomyName[$slug],
                        'default' => [],
                        'label_block' => true,
                        'multiple' => true,
                        'condition' => [
                            'source' => 'by_name',
                            'event_view' => 'detail'
                        ],
                        'frontend_available' => true,
                    ]
                );

                $this->add_control(
                    'exclude_' . $slug,
                    [
                        'label' => esc_html__($taxonomy, 'elementor-for-extensions'),
                        'type' => Controls_Manager::SELECT2,
                        'options' => $termsByTaxonomyName[$slug],
                        'default' => [],
                        'label_block' => true,
                        'multiple' => true,
                        'condition' => [
                            'source' => 'exclude',
                            'event_view' => 'detail'
                        ],
                        'frontend_available' => true,
                    ]
                );

            }
        }

        $this->add_control(
            'event_categories',
            [
                'label' => esc_html__('Categories', 'elementor-for-extensions'),
                'type' => Controls_Manager::SELECT2,
                'options' => $this->getEventCalendarCategories(),
                'default' => [],
                'label_block' => true,
                'multiple' => true,
                'condition' => [
                    'source' => 'by_name',
                ],
                'frontend_available' => true,
            ]
        );

        $this->add_control(
            'exclude_event_categories',
            [
                'label' => esc_html__('Categories', 'elementor-for-extensions'),
                'type' => Controls_Manager::SELECT2,
                'options' => $this->getEventCalendarCategories(),
                'default' => [],
                'label_block' => true,
                'multiple' => true,
                'condition' => [
                    'source' => 'exclude',
                ],
                'frontend_available' => true,
            ]
        );

        $this->add_control(
            'start_date',
            [
                'label' => esc_html__('Start Date', 'elementor-for-extensions'),
                'type' => Controls_Manager::SELECT,
                'options' => [
                    '' => esc_html__('Any Time', 'elementor-for-extensions'),
                    'now' => esc_html__('Now', 'elementor-for-extensions'),
                    'today' => esc_html__('Today', 'elementor-for-extensions'),
                    'last month' => esc_html__('Last Month', 'elementor-for-extensions'),
                    'custom' => esc_html__('Custom', 'elementor-for-extensions'),
                ],
                'label_block' => true,
                'frontend_available' => true,
            ]
        );

        $this->add_control(
            'custom_start_date',
            [
                'label' => esc_html__('Custom Start Date', 'elementor-for-extensions'),
                'type' => Controls_Manager::DATE_TIME,
                'condition' => [
                    'start_date' => 'custom'
                ],
                'frontend_available' => true,
            ]
        );

        $this->add_control(
            'end_date',
            [
                'label' => esc_html__('End Date', 'elementor-for-extensions'),
                'type' => Controls_Manager::SELECT,
                'options' => [
                    '' => esc_html__('Any Time', 'elementor-for-extensions'),
                    'now' => esc_html__('Now', 'elementor-for-extensions'),
                    'today' => esc_html__('Today', 'elementor-for-extensions'),
                    'next month' => esc_html__('Last Month', 'elementor-for-extensions'),
                    'custom' => esc_html__('Custom', 'elementor-for-extensions'),
                ],
                'label_block' => true,
                'frontend_available' => true,
            ]
        );

        $this->add_control(
            'custom_end_date',
            [
                'label' => esc_html__('Custom End Date', 'elementor-for-extensions'),
                'type' => Controls_Manager::DATE_TIME,
                'condition' => [
                    'end_date' => 'custom'
                ],
                'frontend_available' => true,
            ]
        );

        $this->add_control(
            'query_limit',
            [
                'label' => esc_html__('Limit', 'elementor-for-extensions'),
                'type' => Controls_Manager::NUMBER,
                'default' => 6,
                'frontend_available' => true,
                'condition' => ['event_view' => 'detail'],
            ]
        );

        $this->add_control(
            'orderby',
            [
                'label' => esc_html__('Order by', 'elementor-for-extensions'),
                'type' => Controls_Manager::SELECT,
                'default' => 'event_date',
                'options' => [
                    'event_date' => esc_html__('Event Date', 'elementor-for-extensions'),
                    'title' => esc_html__('Title', 'elementor-for-extensions'),
                    'category' => esc_html__('Category', 'elementor-for-extensions'),
                    'rand' => esc_html__('Random', 'elementor-for-extensions'),
                ],
                'condition' => ['event_view' => ['detail', 'summary']],
                'frontend_available' => true,
            ]
        );

        $this->add_control(
            'order',
            [
                'label' => esc_html__('Order', 'elementor-for-extensions'),
                'type' => Controls_Manager::SELECT,
                'default' => 'DESC',
                'options' => [
                    'DESC' => esc_html__('Descending', 'elementor-for-extensions'),
                    'ASC' => esc_html__('Ascending', 'elementor-for-extensions'),
                ],
                'condition' => ['event_view' => ['detail', 'summary']],
                'frontend_available' => true,
            ]
        );

        $this->end_controls_section();

        /*@ Event style section start */
        $this->start_controls_section(
            'event_global_style',
            [
                'label' => __('Global', 'elementor-for-extensions'),
                'tab' => Controls_Manager::TAB_STYLE,
                'show_label' => false,
                'condition' => [
                    'event_view!' => 'calendar'
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Background::get_type(),
            [
                'name' => 'event_background',
                'label' => __('Background', 'elementor-for-extensions'),
                'types' => ['classic', 'gradient', 'video'],
                'selector' => '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper,{{WRAPPER}} .myeventon_summary_eventlist_wrapper',
            ]
        );

        $this->add_group_control(
            Group_Control_Border::get_type(), [
                'name' => 'event_border',
                'placeholder' => '1px',
                'default' => '1px',
                'selector' => '{{WRAPPER}} .tec-wrapper',
                'separator' => 'before',
                'condition' => ['event_view' => 'detail'],
            ]
        );

        $this->add_control(
            'event_summary_list_box_border_message',
            [
                'label' => __('Full Event Box Border', 'elementor-for-extensions'),
                'type' => Controls_Manager::HEADING,
                'separator' => 'before',
                'condition' => ['event_view' => 'summary'],
            ]
        );

        $this->add_group_control(
            Group_Control_Border::get_type(), [
                'name' => 'event_summary_list_border',
                'default' => '0px',
                'selector' => '{{WRAPPER}} .myeventon_summary_eventlist_wrapper',
                'condition' => ['event_view' => 'summary'],
            ]
        );

        $this->add_responsive_control(
            'event_summary_list_padding',
            [
                'label' => __('Padding', 'elementor-for-extensions'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper, {{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'event_summary_list_margin',
            [
                'label' => __('Margin', 'elementor-for-extensions'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
                'condition' => [
                    'event_view!' => 'detail'
                ],
            ]
        );

        $this->add_control(
            'hr',
            [
                'type' => Controls_Manager::DIVIDER,
                'style' => 'thick',
            ]
        );

        $this->add_control(
            'individual_event_summary_style',
            [
                'label' => __('Individual Event Style', 'elementor-for-extensions'),
                'type' => Controls_Manager::HEADING,
                'condition' => ['event_view' => 'summary'],
            ]
        );

        $this->add_responsive_control(
            'individual_event_image_height',
            [
                'label' => __('Event Height', 'elementor-for-extensions'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['px'],
                'range' => [
                    'px' => [
                        'min' => 63,
                        'max' => 1000,
                    ],
                ],
                'condition' => ['event_view' => 'summary'],
                'default' => [
                    'unit' => 'px',
                    'size' => 63,
                ],
                'selectors' => [
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper ul > li' => 'min-height: {{SIZE}}px;',
                ],
            ]
        );

        $this->add_responsive_control(
            'individual_event_gap',
            [
                'label' => __('Event Gap', 'elementor-for-extensions'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['px'],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 1000,
                    ],
                ],
                'condition' => ['event_view' => 'summary'],
                'default' => [
                    'unit' => 'px',
                    'size' => 0,
                ],
                'selectors' => [
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper ul > li' => 'margin-bottom: {{SIZE}}px;',
                ],
            ]
        );

        $this->add_control(
            'individual_event_image_hr',
            [
                'type' => Controls_Manager::DIVIDER,
                'style' => 'thick',
                'condition' => ['event_view' => 'summary'],
            ]
        );

        $this->add_responsive_control(
            'event_block_height',
            [
                'label' => __('Block Height', 'elementor-for-extensions'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['px'],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 1000,
                    ],
                ],
                'condition' => ['event_view!' => 'detail'],
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_wrapper' => 'height: {{SIZE}}px;',
                ],
            ]
        );

        $this->add_responsive_control(
            'event_image_width',
            [
                'label' => __('Image Width', 'elementor-for-extensions'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['%'],
                'range' => [
                    '%' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'condition' => ['event_view!' => 'detail'],
                'default' => [
                    'unit' => '%',
                    'size' => 100,
                ],
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_wrapper > a > .myeventon_img_wrapper' => 'width: {{SIZE}}%;',
                ],
            ]
        );

        $this->add_responsive_control(
            'event_content_width',
            [
                'label' => __('Content Width', 'elementor-for-extensions'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['%'],
                'range' => [
                    '%' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'condition' => ['event_view!' => 'detail'],
                'default' => [
                    'unit' => '%',
                    'size' => 80,
                ],
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper' => 'width: {{SIZE}}%;',
                ],
            ]
        );

        $this->end_controls_section();

        $this->start_controls_section(
            'detail_view_content_style',
            [
                'label' => __('Content', 'elementor-for-extensions'),
                'tab' => Controls_Manager::TAB_STYLE,
                'show_label' => false,
                'condition' => [
                    'event_view' => 'detail'
                ],
            ]
        );

        $this->add_control(
            'detail_view_content_bg_color',
            [
                'label' => __('Background Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'detail_view_content_padding',
            [
                'label' => __('Padding', 'elementor-for-extensions'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'detail_view_content_radius',
            [
                'label' => __('Radius', 'elementor-for-extensions'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Box_Shadow::get_type(),
            [
                'name' => 'detail_event_shadow',
                'label' => esc_html__('Box Shadow', 'elementor-for-extensions'),
                'selector' => '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper',
            ]
        );

        // $this->add_responsive_control(
        // 	'detail_view_content_margin',
        // 	[
        // 		'label' => __( 'Margin', 'elementor-for-extensions' ),
        // 		'type' => Controls_Manager::DIMENSIONS,
        // 		'size_units' => [ 'px', '%', 'em' ],
        // 		'selectors' => [
        // 			'{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
        // 		],
        // 	]
        // );

        $this->end_controls_section();

        /*@Image style*/
        $this->start_controls_section(
            'event_image_style',
            [
                'label' => __('Image', 'elementor-for-extensions'),
                'tab' => Controls_Manager::TAB_STYLE,
                'show_label' => false,
                'condition' => ['event_view' => 'detail'],
            ]
        );

        $this->add_responsive_control(
            'event_image_inner_spacing',
            [
                'label' => __('Padding', 'elementor-for-extensions'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'default' => [
                    'top' => 10,
                    'right' => 10,
                    'bottom' => 10,
                    'left' => 10,
                    'unit' => 'px',
                    'isLinked' => true,
                ],
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_wrapper > .myeventon_img_wrapper > .img_link > img' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'event_image_outer_spacing',
            [
                'label' => __('Margin', 'elementor-for-extensions'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_wrapper > .myeventon_img_wrapper' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'event_image_radius',
            [
                'label' => __('Radius', 'elementor-for-extensions'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_wrapper > .myeventon_img_wrapper > .img_link > img' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();

        /*@ Event Summary Filter styles*/
        $this->start_controls_section(
            'event_summary_filter_styles',
            [
                'label' => __('Filter', 'elementor-for-extensions'),
                'tab' => Controls_Manager::TAB_STYLE,
                'show_label' => false,
                'condition' => ['event_view' => 'summary'],
            ]
        );

        $this->add_control(
            'hide_filters',
            [
                'label' => __('Hide', 'elementor-for-extensions'),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => __('Yes', 'elementor-for-extensions'),
                'label_off' => __('No', 'elementor-for-extensions'),
                'return_value' => 'none',
                'default' => 'label_on',
                'condition' => ['event_view' => 'summary'],
                'selectors' => [
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper .summary_filter' => 'display:{{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'event_summary_filter_typography',
                'selector' => '{{WRAPPER}} .myeventon_summary_eventlist_wrapper .summary_filter > div > a',
            ]
        );

        $this->add_control(
            'event_summary_filter_font_color',
            [
                'label' => __('Normal Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper .summary_filter > div > a' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'event_summary_filter_font_hover_color',
            [
                'label' => __('Hover Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper .summary_filter > div > a:hover' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'event_summary_filter_active_color',
            [
                'label' => __('Active Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper .summary_filter > div > a.current' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'event_summary_filter_active_bg_color',
            [
                'label' => __('Active Background', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper .summary_filter > div > a.current' => 'background: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'event_summary_filter_normal_bg_color',
            [
                'label' => __('Normal Background', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper .summary_filter > div' => 'background: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'event_summary_filter_hover_bg_color',
            [
                'label' => __('Hover Background', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper .summary_filter > div > a:hover' => 'background: {{VALUE}};',
                ],
            ]
        );


        $this->add_responsive_control(
            'event_summary_filter_spacing',
            [
                'label' => __('Margin', 'elementor-for-extensions'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper .summary_filter > div' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();

        /*@ Event Summary Date Title styles*/
        $this->start_controls_section(
            'event_date_main_title_style',
            [
                'label' => __('Month Heading', 'elementor-for-extensions'),
                'tab' => Controls_Manager::TAB_STYLE,
                'show_label' => false,
                'condition' => ['event_view' => 'summary'],
            ]
        );

        $this->add_control(
            'hide_month_heading',
            [
                'label' => __('Hide', 'elementor-for-extensions'),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => __('Yes', 'elementor-for-extensions'),
                'label_off' => __('No', 'elementor-for-extensions'),
                'return_value' => 'none',
                'default' => 'label_on',
                'selectors' => [
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper .summaryEventList .summary_title_wrapper' => 'display:{{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'event_date_main_title_color',
            [
                'label' => __('Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper .summaryEventList .summary_title_wrapper > .summary_month_title' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'event_date_main_title_typography',
                'selector' => '{{WRAPPER}} .myeventon_summary_eventlist_wrapper .summaryEventList .summary_title_wrapper > .summary_month_title',
            ]
        );

        $this->add_responsive_control(
            'event_date_main_title_spacing',
            [
                'label' => __('Margin', 'elementor-for-extensions'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper .summaryEventList .summary_title_wrapper > .summary_month_title' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_control(
            'event_date_main_title_wrapper_spacing',
            [
                'label' => __('Spacing', 'elementor-for-extensions'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['px', '%', 'em'],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 1000,
                    ],
                    '%' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                    'em' => [
                        'min' => 0,
                        'max' => 1000,
                    ],
                ],
                'default' => [
                    'unit' => 'px',
                    'size' => 0,
                ],
                'selectors' => [
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper .summaryEventList .summary_title_wrapper' => 'margin-bottom: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();

        /*@ Next Prev button styles */
        $this->start_controls_section(
            'event_summary_next_prev_button_style',
            [
                'label' => __('Next Prev Button', 'elementor-for-extensions'),
                'tab' => Controls_Manager::TAB_STYLE,
                'show_label' => false,
                'condition' => ['event_view' => 'summary'],
            ]
        );

        $this->add_control(
            'event_summary_next_prev_button_color',
            [
                'label' => __('Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper .summaryEventList .summary_title_wrapper > .summary_nextprev_buttons' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'event_summary_next_prev_button_typography',
                'selector' => '{{WRAPPER}} .myeventon_summary_eventlist_wrapper .summaryEventList .summary_title_wrapper > .summary_nextprev_buttons',
            ]
        );

        $this->add_responsive_control(
            'event_summary_next_prev_button_spacing',
            [
                'label' => __('Margin', 'elementor-for-extensions'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper .summaryEventList .summary_title_wrapper > .summary_nextprev_buttons' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'event_summary_next_prev_button_padding',
            [
                'label' => __('Padding', 'elementor-for-extensions'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper .summaryEventList .summary_title_wrapper > .summary_nextprev_buttons > span' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();

        /*@Leftbar Border style*/
        $this->start_controls_section(
            'left_handbar_style',
            [
                'label' => __('Left Border', 'elementor-for-extensions'),
                'tab' => Controls_Manager::TAB_STYLE,
                'show_label' => false,
                'condition' => ['event_view' => 'summary'],
            ]
        );

        $this->add_control(
            'left_border_normal_width',
            [
                'label' => __('Normal Border Width', 'elementor-for-extensions'),
                'type' => Controls_Manager::SLIDER,
                'range' => [
                    'px' => [
                        'max' => 50,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper ul > li' => 'border-left-width: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->add_control(
            'left_border_hover_width',
            [
                'label' => __('Hover Border Width', 'elementor-for-extensions'),
                'type' => Controls_Manager::SLIDER,
                'range' => [
                    'px' => [
                        'max' => 50,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper ul > li:hover' => 'border-left-width: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->add_control(
            'event_summary_list_left_border_color',
            [
                'label' => __('Border Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper ul > li' => 'border-left-color: {{VALUE}};',
                ],
                'condition' => ['event_view' => 'summary'],
            ]
        );

        $this->add_control(
            'event_summary_list_left_hover_border_color',
            [
                'label' => __('Hover Border Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper ul > li:hover' => 'border-left-color: {{VALUE}};',
                ],
                'condition' => ['event_view' => 'summary'],
            ]
        );

        $this->add_control(
            'event_summary_list_seperator_border_color',
            [
                'label' => __('List Seperator Border Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper ul > li::after' => 'background-color: {{VALUE}};',
                ],
                'condition' => ['event_view' => 'summary'],
            ]
        );

        $this->end_controls_section();

        /*@Date styles*/
        $this->start_controls_section(
            'event_date_style',
            [
                'label' => __('Event Date', 'elementor-for-extensions'),
                'tab' => Controls_Manager::TAB_STYLE,
                'show_label' => false,
                'condition' => [
                    'event_view!' => 'calendar'
                ],
            ]
        );

        $this->add_control(
            'event_date_layout',
            [
                'label' => __('Layout', 'elementor-for-extensions'),
                'type' => Controls_Manager::SELECT,
                'default' => 'side',
                'options' => [
                    'above' => __('Above', 'elementor-for-extensions'),
                    'side' => __('Side', 'elementor-for-extensions'),
                ],
                'condition' => ['event_view' => 'summary'],
                'frontend_available' => true,
            ]
        );

        $this->add_control(
            'event_date_color',
            [
                'label' => __('Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper .myeventon_date' => 'color: {{VALUE}};',
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper ul > li > a > div.date_wrapper > .day' => 'color: {{VALUE}};',
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper ul > li > a > div.date_wrapper.above .date_above' => 'color: {{VALUE}};',

                ],
            ]
        );

        $this->add_control(
            'event_date_hover_color',
            [
                'label' => __('Hover Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'condition' => ['event_date_layout' => 'above', 'event_view' => 'summary'],
                'selectors' => [
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper ul > li > a > div.date_wrapper.above .date_above:hover' => 'color: {{VALUE}};',

                ],
            ]
        );


        $this->add_control(
            'event_date_background',
            [
                'label' => __('Background', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'condition' => ['event_date_layout' => 'above', 'event_view' => 'summary'],
                'selectors' => [
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper ul > li > a > div.date_wrapper.above .date_above' => 'background: {{VALUE}};',
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper ul > li > a > div.date_wrapper.above' => 'border-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'event_date_hover_background',
            [
                'label' => __('Hover Background', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'condition' => ['event_date_layout' => 'above', 'event_view' => 'summary'],
                'selectors' => [
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper ul > li > a > div.date_wrapper.above .date_above:hover' => 'background: {{VALUE}};',
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper ul > li > a > div.date_wrapper.above:hover' => 'border-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'event_date_typography',
                'selector' => '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper .myeventon_date,{{WRAPPER}} .myeventon_summary_eventlist_wrapper ul > li > a > div.date_wrapper > .day,{{WRAPPER}} .myeventon_summary_eventlist_wrapper ul > li > a > div.date_wrapper.above .date_above',
            ]
        );

        $this->add_responsive_control(
            'event_date_align',
            [
                'label' => __('Alignment', 'elementor-for-extensions'),
                'type' => Controls_Manager::CHOOSE,
                'options' => [
                    'left' => [
                        'title' => __('Left', 'elementor-for-extensions'),
                        'icon' => 'fa fa-align-left',
                    ],
                    'center' => [
                        'title' => __('Center', 'elementor-for-extensions'),
                        'icon' => 'fa fa-align-center',
                    ],
                    'right' => [
                        'title' => __('Right', 'elementor-for-extensions'),
                        'icon' => 'fa fa-align-right',
                    ],
                    'justify' => [
                        'title' => __('Justified', 'elementor-for-extensions'),
                        'icon' => 'fa fa-align-justify',
                    ],
                ],
                'condition' => ['event_view' => 'detail'],
                'default' => '',
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper .myeventon_date > .day' => 'text-align: {{VALUE}};',  // old
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper .myeventon_date' => 'text-align: {{VALUE}};', // new
                ],
            ]
        );

        $this->add_control(
            'event_date_spacing',
            [
                'label' => __('Spacing', 'elementor-for-extensions'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['px', '%'],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 1000,
                    ],
                    '%' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'default' => [
                    'unit' => 'px',
                    'size' => 0,
                ],
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper .myeventon_date,{{WRAPPER}} .myeventon_summary_eventlist_wrapper ul > li > a > div.date_wrapper > .day,{{WRAPPER}} .myeventon_summary_eventlist_wrapper > .summaryEventList.above > ul > li > a > div.date_wrapper.above' => 'margin-bottom: {{SIZE}}{{UNIT}};',
                ],
                'condition' => ['event_date_layout' => 'above', 'event_view' => 'summary'],
            ]
        );

        $this->add_responsive_control(
            'event_date_margin',
            [
                'label' => __('Margin', 'elementor-for-extensions'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper .myeventon_date,{{WRAPPER}} .myeventon_summary_eventlist_wrapper ul > li > a > div.date_wrapper > .day,{{WRAPPER}} .myeventon_summary_eventlist_wrapper > .summaryEventList.above > ul > li > a > div.date_wrapper.above' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'event_date_padding',
            [
                'label' => __('Padding', 'elementor-for-extensions'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'condition' => ['event_date_layout' => 'above', 'event_view' => 'summary'],
                'selectors' => [
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper > .summaryEventList.above > ul > li >  a > div.date_wrapper.above .date_above' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();


        /*@Summary List Month styles*/
        $this->start_controls_section(
            'event_summary_month_style',
            [
                'label' => __('Event Month', 'elementor-for-extensions'),
                'tab' => Controls_Manager::TAB_STYLE,
                'show_label' => false,
                'condition' => [
                    'event_view' => 'summary',
                    'event_date_layout' => 'side',
                ],
            ]
        );

        $this->add_control(
            'event_summary_month_color',
            [
                'label' => __('Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper ul > li > a > div.date_wrapper > .month' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'event_summary_month_typography',
                'selector' => '{{WRAPPER}} .myeventon_summary_eventlist_wrapper ul > li > a > div.date_wrapper > .month',
            ]
        );

        $this->add_responsive_control(
            'event_summary_month_spacing',
            [
                'label' => __('Margin', 'elementor-for-extensions'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper ul > li > a > div.date_wrapper > .month' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();

        /*@ Title styles*/
        $this->start_controls_section(
            'event_title_style',
            [
                'label' => __('Event Title', 'elementor-for-extensions'),
                'tab' => Controls_Manager::TAB_STYLE,
                'show_label' => false,
                'condition' => [
                    'event_view!' => 'calendar'
                ],
            ]
        );

        $this->add_control(
            'event_title_color',
            [
                'label' => __('Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper a h3' => 'color: {{VALUE}};', // add new
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper h3' => 'color: {{VALUE}};',
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper ul > li > a > div.event_title > h4' => 'color: {{VALUE}};',
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper .summaryEventList.above > ul > li > a > div.event_title > h4' => 'color: {{VALUE}}!important;',
                ],
            ]
        );

        $this->add_control(
            'event_title_hover_color',
            [
                'label' => __('Hover Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper a h3:hover' => 'color: {{VALUE}};', // add new
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper h3:hover' => 'color: {{VALUE}};',
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper ul > li > a > div.event_title > h4:hover' => 'color: {{VALUE}};',
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper .summaryEventList.above > ul > li > a > div.event_title > h4:hover' => 'color: {{VALUE}}!important;',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'event_title_typography',
                'selector' => '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper a h3,{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper h3,{{WRAPPER}} .myeventon_summary_eventlist_wrapper ul > li > a > div.event_title > h4',
            ]
        );

        $this->add_responsive_control(
            'event_title_align',
            [
                'label' => __('Alignment', 'elementor-for-extensions'),
                'type' => Controls_Manager::CHOOSE,
                'options' => [
                    'left' => [
                        'title' => __('Left', 'elementor-for-extensions'),
                        'icon' => 'fa fa-align-left',
                    ],
                    'center' => [
                        'title' => __('Center', 'elementor-for-extensions'),
                        'icon' => 'fa fa-align-center',
                    ],
                    'right' => [
                        'title' => __('Right', 'elementor-for-extensions'),
                        'icon' => 'fa fa-align-right',
                    ],
                    'justify' => [
                        'title' => __('Justified', 'elementor-for-extensions'),
                        'icon' => 'fa fa-align-justify',
                    ],
                ],
                'condition' => ['event_view' => 'detail'],
                'default' => '',
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper h3,{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper h3' => 'text-align: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'event_title_spacing',
            [
                'label' => __('Spacing', 'elementor-for-extensions'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['px', '%'],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 1000,
                    ],
                    '%' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'default' => [
                    'unit' => 'px',
                    'size' => 0,
                ],
                'selectors' => [
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper ul > li > a > div.event_title' => 'margin-bottom: {{SIZE}}{{UNIT}};',
                ],
                'condition' => ['event_date_layout' => 'above', 'event_view' => 'summary'],
            ]
        );

        $this->add_responsive_control(
            'event_title_margin',
            [
                'label' => __('Margin', 'elementor-for-extensions'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper h3' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};', /* add new */
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper h3' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper ul > li > a > div.event_title > h4' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'event_title_padding',
            [
                'label' => __('Padding', 'elementor-for-extensions'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper ul > li > a > div.event_title' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper h3' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};', /* add new */
                ],
            ]
        );

        $this->end_controls_section();


        /*@ Excerpt styles*/
        $this->start_controls_section(
            'event_excerpt_style',
            [
                'label' => __('Excerpt', 'elementor-for-extensions'),
                'tab' => Controls_Manager::TAB_STYLE,
                'show_label' => false,
                'condition' => [
                    'event_view!' => 'calendar'
                ],
            ]
        );

        $this->add_control(
            'event_excerpt_color',
            [
                'label' => __('Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper .myeventon_excerpt' => 'color: {{VALUE}};', // add new
                ],
            ]
        );

        $this->add_control(
            'event_excerpt_hover_color',
            [
                'label' => __('Hover Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper .myeventon_excerpt:hover' => 'color: {{VALUE}};', // add new
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'event_excerpt_typography',
                'selector' => '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper .myeventon_excerpt',
            ]
        );

        $this->add_responsive_control(
            'event_excerpt_align',
            [
                'label' => __('Alignment', 'elementor-for-extensions'),
                'type' => Controls_Manager::CHOOSE,
                'options' => [
                    'left' => [
                        'title' => __('Left', 'elementor-for-extensions'),
                        'icon' => 'fa fa-align-left',
                    ],
                    'center' => [
                        'title' => __('Center', 'elementor-for-extensions'),
                        'icon' => 'fa fa-align-center',
                    ],
                    'right' => [
                        'title' => __('Right', 'elementor-for-extensions'),
                        'icon' => 'fa fa-align-right',
                    ],
                    'justify' => [
                        'title' => __('Justified', 'elementor-for-extensions'),
                        'icon' => 'fa fa-align-justify',
                    ],
                ],
                'condition' => ['event_view' => 'detail'],
                'default' => 'left',
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper .myeventon_excerpt' => 'text-align: {{VALUE}}!important;',
                ],
            ]
        );

        $this->add_control(
            'event_excerpt_spacing',
            [
                'label' => __('Spacing', 'elementor-for-extensions'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['px', '%'],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 1000,
                    ],
                    '%' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'default' => [
                    'unit' => 'px',
                    'size' => 0,
                ],
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper .myeventon_excerpt' => 'margin-bottom: {{SIZE}}{{UNIT}};',
                ],
                'condition' => ['event_date_layout' => 'above', 'event_view' => 'summary'],
            ]
        );

        $this->add_responsive_control(
            'event_excerpt_margin',
            [
                'label' => __('Margin', 'elementor-for-extensions'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper .myeventon_excerpt' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'event_excerpt_padding',
            [
                'label' => __('Padding', 'elementor-for-extensions'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper .myeventon_excerpt' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};', /* add new */
                ],
            ]
        );

        $this->end_controls_section();

        /*@ Content styles*/
        $this->start_controls_section(
            'event_content_style',
            [
                'label' => __('Content', 'elementor-for-extensions'),
                'tab' => Controls_Manager::TAB_STYLE,
                'show_label' => false,
                'condition' => [
                    'event_view!' => 'calendar'
                ],
            ]
        );

        $this->add_control(
            'event_content_color',
            [
                'label' => __('Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper .myeventon_content' => 'color: {{VALUE}};', // add new
                ],
            ]
        );

        $this->add_control(
            'event_content_hover_color',
            [
                'label' => __('Hover Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper .myeventon_content:hover' => 'color: {{VALUE}};', // add new
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'event_content_typography',
                'selector' => '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper .myeventon_content',
            ]
        );

        $this->add_responsive_control(
            'event_content_align',
            [
                'label' => __('Alignment', 'elementor-for-extensions'),
                'type' => Controls_Manager::CHOOSE,
                'options' => [
                    'left' => [
                        'title' => __('Left', 'elementor-for-extensions'),
                        'icon' => 'fa fa-align-left',
                    ],
                    'center' => [
                        'title' => __('Center', 'elementor-for-extensions'),
                        'icon' => 'fa fa-align-center',
                    ],
                    'right' => [
                        'title' => __('Right', 'elementor-for-extensions'),
                        'icon' => 'fa fa-align-right',
                    ],
                    'justify' => [
                        'title' => __('Justified', 'elementor-for-extensions'),
                        'icon' => 'fa fa-align-justify',
                    ],
                ],
                'condition' => ['event_view' => 'detail'],
                'default' => 'left',
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper .myeventon_content' => 'text-align: {{VALUE}}!important;',
                ],
            ]
        );

        $this->add_control(
            'event_content_spacing',
            [
                'label' => __('Spacing', 'elementor-for-extensions'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['px', '%'],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 1000,
                    ],
                    '%' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'default' => [
                    'unit' => 'px',
                    'size' => 0,
                ],
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper .myeventon_content' => 'margin-bottom: {{SIZE}}{{UNIT}};',
                ],
                'condition' => ['event_date_layout' => 'above', 'event_view' => 'summary'],
            ]
        );

        $this->add_responsive_control(
            'event_content_margin',
            [
                'label' => __('Margin', 'elementor-for-extensions'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper .myeventon_content' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'event_content_padding',
            [
                'label' => __('Padding', 'elementor-for-extensions'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper .myeventon_content' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};', /* add new */
                ],
            ]
        );

        $this->end_controls_section();

        /*@ Show More button style*/
        $this->start_controls_section(
            'line_between_events_style',
            [
                'label' => __('Line Between Events', 'elementor-for-extensions'),
                'tab' => Controls_Manager::TAB_STYLE,
                'show_label' => false,
                'condition' => ['event_view' => 'summary', 'event_date_layout' => 'above'],
            ]
        );

        $this->add_control(
            'toggle_line_between_event',
            [
                'label' => __('Show Line', 'elementor-for-extensions'),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => __('Show', 'elementor-for-extensions'),
                'label_off' => __('Hide', 'elementor-for-extensions'),
                'return_value' => 'block',
                'default' => 'label_off',
                'selectors' => [
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper ul > div.between_line_wrapper' => 'display:{{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'thickness_of_line',
            [
                'label' => __('Tickness', 'elementor-for-extensions'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['px', '%'],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 1000,
                    ],
                    '%' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'default' => [
                    'unit' => 'px',
                    'size' => 1,
                ],
                'selectors' => [
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper ul > div.between_line_wrapper > span.between_lines' => 'height: {{SIZE}}{{UNIT}};',
                ],
                'condition' => ['event_date_layout' => 'above', 'event_view' => 'summary'],
            ]
        );

        $this->add_control(
            'width_of_line',
            [
                'label' => __('Width', 'elementor-for-extensions'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['px', '%'],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 1000,
                    ],
                    '%' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'default' => [
                    'unit' => '%',
                    'size' => 100,
                ],
                'selectors' => [
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper ul > div.between_line_wrapper > span.between_lines' => 'width: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->add_control(
            'spacing_of_line',
            [
                'label' => __('Spacing', 'elementor-for-extensions'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['px', '%'],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 1000,
                    ],
                    '%' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'default' => [
                    'unit' => 'px',
                    'size' => 0,
                ],
                'selectors' => [
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper ul > div.between_line_wrapper > span.between_lines' => 'margin-bottom: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'line_alignment',
            [
                'label' => __('Alignment', 'elementor-for-extensions'),
                'type' => Controls_Manager::CHOOSE,
                'options' => [
                    'left' => [
                        'title' => __('Left', 'elementor-for-extensions'),
                        'icon' => 'fa fa-align-left',
                    ],
                    'center' => [
                        'title' => __('Center', 'elementor-for-extensions'),
                        'icon' => 'fa fa-align-center',
                    ],
                    'right' => [
                        'title' => __('Right', 'elementor-for-extensions'),
                        'icon' => 'fa fa-align-right',
                    ],
                ],
                'default' => 'left',
                'selectors' => [
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper ul > div.between_line_wrapper' => 'text-align: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'line_color',
            [
                'label' => __('Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper ul > div.between_line_wrapper > span.between_lines' => 'background: {{VALUE}};',
                ],
            ]
        );

        $this->end_controls_section();

        /*@ Show More button style*/
        $this->start_controls_section(
            'event_summary_show_more_style',
            [
                'label' => __('Show More Button', 'elementor-for-extensions'),
                'tab' => Controls_Manager::TAB_STYLE,
                'show_label' => false,
                'condition' => ['event_view' => 'summary'],
            ]
        );

        $this->add_control(
            'hide_show_more_button',
            [
                'label' => __('Hide', 'elementor-for-extensions'),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => __('Yes', 'elementor-for-extensions'),
                'label_off' => __('No', 'elementor-for-extensions'),
                'return_value' => 'none',
                'default' => 'label_on',
                'selectors' => [
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper .summaryEventList > .show_more_events' => 'display:{{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'event_summary_show_more_color',
            [
                'label' => __('Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper .summaryEventList > .show_more_events' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'event_summary_show_more_bg_color',
            [
                'label' => __('Background Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper .summaryEventList > .show_more_events' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'event_summary_show_more_typography',
                'selector' => '{{WRAPPER}} .myeventon_summary_eventlist_wrapper .summaryEventList > .show_more_events',
            ]
        );

        $this->add_responsive_control(
            'event_summary_show_more_spacing',
            [
                'label' => __('Margin', 'elementor-for-extensions'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper .summaryEventList > .show_more_events' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'event_summary_show_more_padding_spacing',
            [
                'label' => __('Padding', 'elementor-for-extensions'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .myeventon_summary_eventlist_wrapper .summaryEventList > .show_more_events' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();

        /*@ Time styles*/
        $this->start_controls_section(
            'event_time_style',
            [
                'label' => __('Time', 'elementor-for-extensions'),
                'tab' => Controls_Manager::TAB_STYLE,
                'show_label' => false,
                'condition' => ['event_view' => 'detail'],
            ]
        );

        $this->add_control(
            'event_time_color',
            [
                'label' => __('Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper span.myeventon_time' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'event_time_typography',
                'selector' => '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper span.myeventon_time',
            ]
        );

        $this->add_responsive_control(
            'event_time_align',
            [
                'label' => __('Alignment', 'elementor-for-extensions'),
                'type' => Controls_Manager::CHOOSE,
                'options' => [
                    'left' => [
                        'title' => __('Left', 'elementor-for-extensions'),
                        'icon' => 'fa fa-align-left',
                    ],
                    'center' => [
                        'title' => __('Center', 'elementor-for-extensions'),
                        'icon' => 'fa fa-align-center',
                    ],
                    'right' => [
                        'title' => __('Right', 'elementor-for-extensions'),
                        'icon' => 'fa fa-align-right',
                    ],
                    'justify' => [
                        'title' => __('Justified', 'elementor-for-extensions'),
                        'icon' => 'fa fa-align-justify',
                    ],
                ],
                'default' => 'left',
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper span.myeventon_time' => 'text-align: {{VALUE}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'event_time_spacing',
            [
                'label' => __('Margin', 'elementor-for-extensions'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper span.myeventon_time' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();

        /*@ Cost styles*/
        $this->start_controls_section(
            'event_cost_style',
            [
                'label' => __('Cost', 'elementor-for-extensions'),
                'tab' => Controls_Manager::TAB_STYLE,
                'show_label' => false,
                'condition' => ['event_view' => 'detail'],
            ]
        );

        $this->add_control(
            'event_cost_color',
            [
                'label' => __('Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper .meta_data > .myeventon_cost_data .myeventon_cost' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'event_cost_typography',
                'selector' => '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper .meta_data > .myeventon_cost_data .myeventon_cost',
            ]
        );

        $this->end_controls_section();

        /*@ Venue styles*/
        $this->start_controls_section(
            'event_venue_style',
            [
                'label' => __('Venue', 'elementor-for-extensions'),
                'tab' => Controls_Manager::TAB_STYLE,
                'show_label' => false,
                'condition' => ['event_view' => 'detail'],
            ]
        );

        $this->add_control(
            'event_venue_color',
            [
                'label' => __('Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper span.myeventon_venue' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'event_venue_typography',
                'selector' => '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper span.myeventon_venue',
            ]
        );

        $this->add_responsive_control(
            'event_venue_align',
            [
                'label' => __('Alignment', 'elementor-for-extensions'),
                'type' => Controls_Manager::CHOOSE,
                'options' => [
                    'left' => [
                        'title' => __('Left', 'elementor-for-extensions'),
                        'icon' => 'fa fa-align-left',
                    ],
                    'center' => [
                        'title' => __('Center', 'elementor-for-extensions'),
                        'icon' => 'fa fa-align-center',
                    ],
                    'right' => [
                        'title' => __('Right', 'elementor-for-extensions'),
                        'icon' => 'fa fa-align-right',
                    ],
                    'justify' => [
                        'title' => __('Justified', 'elementor-for-extensions'),
                        'icon' => 'fa fa-align-justify',
                    ],
                ],
                'default' => '',
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper span.myeventon_venue' => 'text-align: {{VALUE}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'event_venue_spacing',
            [
                'label' => __('Margin', 'elementor-for-extensions'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper span.myeventon_venue' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();


        /*@Link style*/
        $this->start_controls_section(
            'event_link_style',
            [
                'label' => __('Link', 'elementor-for-extensions'),
                'tab' => Controls_Manager::TAB_STYLE,
                'show_label' => false,
                'condition' => ['event_view' => 'detail'],
            ]
        );

        $this->add_control(
            'event_link_color',
            [
                'label' => __('Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper .link_read_wrapper > a.myeventon_link' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'event_link_hover_color',
            [
                'label' => __('Hover Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper .link_read_wrapper > a.myeventon_link:hover' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'event_link_typography',
                'selector' => '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper .link_read_wrapper > a.myeventon_link',
            ]
        );

        $this->add_responsive_control(
            'event_link_align',
            [
                'label' => __('Alignment', 'elementor-for-extensions'),
                'type' => Controls_Manager::CHOOSE,
                'options' => [
                    'left' => [
                        'title' => __('Left', 'elementor-for-extensions'),
                        'icon' => 'fa fa-align-left',
                    ],
                    'center' => [
                        'title' => __('Center', 'elementor-for-extensions'),
                        'icon' => 'fa fa-align-center',
                    ],
                    'right' => [
                        'title' => __('Right', 'elementor-for-extensions'),
                        'icon' => 'fa fa-align-right',
                    ],
                    'justify' => [
                        'title' => __('Justified', 'elementor-for-extensions'),
                        'icon' => 'fa fa-align-justify',
                    ],
                ],
                'default' => '',
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper .link_read_wrapper' => 'text-align: {{VALUE}};',
                ],
            ]
        );

        // $this->add_responsive_control(
        // 	'event_link_align_for_auto_height',
        // 	[
        // 		'label' => __( 'Alignment', 'elementor-for-extensions' ),
        // 		'type' => Controls_Manager::CHOOSE,
        // 		'options' => [
        // 			'left' => [
        // 				'title' => __( 'Left', 'elementor-for-extensions' ),
        // 				'icon' => 'fa fa-align-left',
        // 			],
        // 			'center' => [
        // 				'title' => __( 'Center', 'elementor-for-extensions' ),
        // 				'icon' => 'fa fa-align-center',
        // 			],
        // 			'right' => [
        // 				'title' => __( 'Right', 'elementor-for-extensions' ),
        // 				'icon' => 'fa fa-align-right',
        // 			],
        // 		],
        // 		'default' => '',
        // 		'selectors' => [
        // 			'{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper .link_read_wrapper' => '{{VALUE}}:0;',
        // 		],
        // 		'condition' => [ 'auto_height' => 'yes' ],
        // 	]
        // );

        $this->add_responsive_control(
            'event_link_inner_spacing',
            [
                'label' => __('Padding', 'elementor-for-extensions'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper .link_read_wrapper' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'event_link_spacing',
            [
                'label' => __('Margin', 'elementor-for-extensions'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper .link_read_wrapper' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_control(
            'event_hr1',
            [
                'type' => Controls_Manager::DIVIDER,
                'style' => 'thick',
            ]
        );

        $this->add_control(
            'selected_icon',
            [
                'label' => __('Icon', 'elementor-for-extensions'),
                'type' => Controls_Manager::ICONS,
                'label_block' => true,
            ]
        );

        $this->add_control(
            'icon_align',
            [
                'label' => __('Icon Position', 'elementor-for-extensions'),
                'type' => Controls_Manager::SELECT,
                'default' => 'right',
                'options' => [
                    'left' => __('Before', 'elementor-for-extensions'),
                    'right' => __('After', 'elementor-for-extensions'),
                ],
                'condition' => [
                    'selected_icon!' => '',
                ],
            ]
        );

        $this->add_control(
            'icon_indent',
            [
                'label' => __('Icon Spacing', 'elementor-for-extensions'),
                'type' => Controls_Manager::SLIDER,
                'range' => [
                    'px' => [
                        'max' => 50,
                    ],
                ],
                'condition' => [
                    'selected_icon!' => '',
                ],
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper .link_read_wrapper .read_more_icon.right' => 'margin-left: {{SIZE}}{{UNIT}};',
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper .link_read_wrapper .read_more_icon.left' => 'margin-right: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Border::get_type(), [
                'name' => 'link_border',
                'placeholder' => '1px',
                'default' => '1px',
                'selector' => '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper .link_read_wrapper > a.myeventon_link',
                'separator' => 'before',
            ]
        );

        $this->add_control(
            'event_link_hover_border_color',
            [
                'label' => __('Hover Border Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .tec-wrapper .tec_ee_mb_events_wrapper .myeventon_content_wrapper .link_read_wrapper > a.myeventon_link:hover' => 'border-color: {{VALUE}};',
                ],
            ]
        );

        $this->end_controls_section();


        /*@ Past events section */
        $this->start_controls_section(
            'past_events_style',
            [
                'label' => __('Past Event Heading', 'elementor-for-extensions'),
                'tab' => Controls_Manager::TAB_STYLE,
                'show_label' => false,
                'condition' => ['past_event_section' => 'yes', 'event_view' => 'detail'],
            ]
        );

        $this->add_control(
            'past_event_header_color',
            [
                'label' => __('Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .past_events_wrapper.tec-wrapper h2' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'past_event_header_typo',
                'selector' => '{{WRAPPER}} .past_events_wrapper.tec-wrapper h2',
            ]
        );

        $this->add_responsive_control(
            'past_event_header_align',
            [
                'label' => __('Alignment', 'elementor-for-extensions'),
                'type' => Controls_Manager::CHOOSE,
                'options' => [
                    'left' => [
                        'title' => __('Left', 'elementor-for-extensions'),
                        'icon' => 'fa fa-align-left',
                    ],
                    'center' => [
                        'title' => __('Center', 'elementor-for-extensions'),
                        'icon' => 'fa fa-align-center',
                    ],
                    'right' => [
                        'title' => __('Right', 'elementor-for-extensions'),
                        'icon' => 'fa fa-align-right',
                    ],
                ],
                'default' => 'center',
                'selectors' => [
                    '{{WRAPPER}} .past_events_wrapper.tec-wrapper h2' => 'text-align: {{VALUE}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'past_event_header_margin',
            [
                'label' => __('Margin', 'elementor-for-extensions'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .past_events_wrapper.tec-wrapper h2' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();


        /*@ Past events section */
        $this->start_controls_section(
            'website_text',
            [
                'label' => __('Website Text', 'elementor-for-extensions'),
                'tab' => Controls_Manager::TAB_STYLE,
                'show_label' => false,
                'condition' => ['show_website' => 'yes', 'event_view' => 'detail'],
            ]
        );

        $this->add_control(
            'website_text_color',
            [
                'label' => __('Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_link.event_website_text_icon' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'website_text_typo',
                'selector' => '{{WRAPPER}} .myeventon_link.event_website_text_icon',
            ]
        );

        $this->add_responsive_control(
            'website_text_margin',
            [
                'label' => __('Margin', 'elementor-for-extensions'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .myeventon_link.event_website_text_icon' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'website_text_padding',
            [
                'label' => __('Margin', 'elementor-for-extensions'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .myeventon_link.event_website_text_icon' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();

        /*@Calendar View Style start*/
        $this->start_controls_section(
            'event_calendar_view_style',
            [
                'label' => __('Main Header', 'elementor-for-extensions'),
                'tab' => Controls_Manager::TAB_STYLE,
                'show_label' => false,
                'condition' => ['event_view' => 'calendar'],
            ]
        );

        $this->add_control(
            'eb_header_month_list_color',
            [
                'label' => __('Header Month Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-header-toolbar h2' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'label' => __('Header Month Typo', 'elementor-for-extensions'),
                'name' => 'eb_day_month_list_typography',
                'selector' => '{{WRAPPER}} .myeventon_calendar .fc-header-toolbar h2',
            ]
        );

        $this->add_control(
            'button_styles_seperator_heading',
            [
                'label' => __('Button', 'elementor-for-extensions'),
                'type' => Controls_Manager::HEADING,
                'separator' => 'before',
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'label' => __('Typography', 'elementor-for-extensions'),
                'name' => 'eb_header_button_typo',
                'selector' => '{{WRAPPER}} .myeventon_calendar button',
            ]
        );

        $this->add_control(
            'eb_header_button_color',
            [
                'label' => __('Text Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar button' => 'color: {{VALUE}};',
                    '{{WRAPPER}} .myeventon_calendar button' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'eb_header_button_background',
            [
                'label' => __('Background Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar button' => 'background: {{VALUE}};',
                    '{{WRAPPER}} .myeventon_calendar button' => 'background: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'eb_header_active_button_text_color',
            [
                'label' => __('Active Text Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar button:focus,{{WRAPPER}} .myeventon_calendar button:focus,{{WRAPPER}} .myeventon_calendar button:hover,{{WRAPPER}} .myeventon_calendar button:hover' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'eb_header_active_button_background',
            [
                'label' => __('Active Background Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar button:focus,{{WRAPPER}} .myeventon_calendar button:focus,{{WRAPPER}} .myeventon_calendar button:hover,{{WRAPPER}} .myeventon_calendar button:hover' => 'background: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'eb_header_hover_button_text_color',
            [
                'label' => __('Hover Text Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar button:hover,{{WRAPPER}} button:hover' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'eb_header_hover_button_background',
            [
                'label' => __('Hover Background Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar button:hover,{{WRAPPER}} button:hover' => 'background: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'event_header_buttons_hr',
            [
                'type' => Controls_Manager::DIVIDER,
                'style' => 'thick',

            ]
        );

        $this->end_controls_section();

        $this->start_controls_section(
            'event_calendar_view_day_header_style',
            [
                'label' => __('Day Header', 'elementor-for-extensions'),
                'tab' => Controls_Manager::TAB_STYLE,
                'show_label' => false,
                'condition' => ['event_view' => 'calendar'],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'day_name_typography',
                'selector' => '{{WRAPPER}} .myeventon_calendar .fc-widget-header .fc-day-header',
            ]
        );

        $this->add_control(
            'eb_day_month_color',
            [
                'label' => __('Text Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-day-header' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'eb_day_month_background_color',
            [
                'label' => __('Background Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-day-header' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Border::get_type(), [
                'name' => 'event_calendar_grid_day_border',
                'placeholder' => '1px',
                'default' => '1px',
                'selector' => '{{WRAPPER}} .myeventon_calendar th.fc-day-header,{{WRAPPER}} .myeventon_calendar .fc-unthemed td.fc-head-container.fc-widget-header',
            ]
        );

        $this->add_control(
            'event_grid_day_cell_border_hr',
            [
                'type' => Controls_Manager::DIVIDER,
                'style' => 'thick',
            ]
        );

        $this->end_controls_section();


        $this->start_controls_section(
            'event_calendar_view_date_style',
            [
                'label' => __('Date', 'elementor-for-extensions'),
                'tab' => Controls_Manager::TAB_STYLE,
                'show_label' => false,
                'condition' => ['event_view' => 'calendar'],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'event_calender_date_typography',
                'selector' => '{{WRAPPER}} .myeventon_calendar td .fc-day-number',
            ]
        );

        $this->add_control(
            'eb_day_month_date_color',
            [
                'label' => __('Text Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-day-number' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'eb_date_month_background_color',
            [
                'label' => __('Background Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-day-top' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Border::get_type(), [
                'name' => 'eb_date_border',
                'placeholder' => '1px',
                'default' => '1px',
                'selector' => '{{WRAPPER}} .myeventon_calendar .fc .fc-row .fc-content-skeleton td.fc-day-top',
                'separator' => 'before',
            ]
        );

        $this->end_controls_section();

        $this->start_controls_section(
            'eb_grid_cell_styles',
            [
                'label' => __('Grid Cell', 'elementor-for-extensions'),
                'tab' => Controls_Manager::TAB_STYLE,
                'show_label' => false,
                'condition' => ['event_view' => 'calendar'],
            ]
        );

        $this->add_group_control(
            Group_Control_Border::get_type(), [
                'name' => 'event_calendar_grid_border',
                'placeholder' => '1px',
                'default' => '1px',
                'selector' => '{{WRAPPER}} .myeventon_calendar .fc-unthemed td',
            ]
        );

        $this->add_control(
            'event_grid_cell_border_hr',
            [
                'type' => Controls_Manager::DIVIDER,
                'style' => 'thick',
            ]
        );

        $this->add_control(
            'eb_hover_background_color',
            [
                'label' => __('Cell Hover Background Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar div.fc-row td.fc-day:hover' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'eb_today_color',
            [
                'label' => __('Today`s Background Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar div.fc-row td.fc-today' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'eb_cal_oddrow_color',
            [
                'label' => __('Odd Row Background Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar div.fc-row.fc-week:nth-child(odd)' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'eb_cal_evenrow_color',
            [
                'label' => __('Even Row Background Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar div.fc-row.fc-week:nth-child(even)' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->end_controls_section();

        // Add new option in Tec

        $this->start_controls_section(
            'eb_list_view_content',
            [
                'label' => __('List View', 'elementor-for-extensions'),
                'tab' => Controls_Manager::TAB_STYLE,
                'show_label' => false,
            ]
        );

        $this->add_control(
            'eb_event_date_background_color',
            [
                'label' => __('Date background color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-view.fc-listMonth-view.fc-list-view .fc-list-heading td' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'eb_cal_headrow_color',
            [
                'label' => __('Event Background Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-view.fc-listMonth-view.fc-list-view .fc-list-item td' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'eb_cal_row_hover_background_color',
            [
                'label' => __('Event Hover Background Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-view.fc-listMonth-view.fc-list-view .fc-list-item:hover td' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'eb_cal_row_color',
            [
                'label' => __('Event Text Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-view.fc-listMonth-view.fc-list-view .fc-list-item td' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'eb_cal_row_hover_color',
            [
                'label' => __('Event Text Hover Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-view.fc-listMonth-view.fc-list-view .fc-list-item:hover td' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->end_controls_section();

        $this->start_controls_section(
            'eb_month_view_content',
            [
                'label' => __('Month View', 'elementor-for-extensions'),
                'tab' => Controls_Manager::TAB_STYLE,
                'show_label' => false,
            ]
        );

        $this->add_control(
            'eb_month_bg_color',
            [
                'label' => __('Day background color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-view.fc-dayGridMonth-view.fc-dayGrid-view .fc-day-header' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'eb_month_text_color',
            [
                'label' => __('Day text color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-view.fc-dayGridMonth-view.fc-dayGrid-view .fc-day-header' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'eb_month_date_bg_color',
            [
                'label' => __('Date background color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-view.fc-dayGridMonth-view.fc-dayGrid-view .fc-day' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'eb_month_today_date_bg_color',
            [
                'label' => __('Today`s date background color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-view.fc-dayGridMonth-view.fc-dayGrid-view .fc-unthemed .fc-today' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'eb_month_date_text_color',
            [
                'label' => __('Date text color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-view.fc-dayGridMonth-view.fc-dayGrid-view .fc-day-number' => 'color: {{VALUE}}!important;',
                ],
            ]
        );

        $this->add_control(
            'eb_month_date_hover_text_color',
            [
                'label' => __('Date hover text color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-view.fc-dayGridMonth-view.fc-dayGrid-view .fc-unthemed .fc-day:hover .fc-day-top .fc-day-number' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'eb_month_date_hover_bg_color',
            [
                'label' => __('Date hover background color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-view.fc-dayGridMonth-view.fc-dayGrid-view .fc-unthemed div.fc-row td.fc-day:hover' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'eb_month_event_bg_color',
            [
                'label' => __('Event background color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-view.fc-dayGridMonth-view.fc-dayGrid-view .fc-unthemed .fc-event-container .fc-day-grid-event' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'eb_month_event_text_color',
            [
                'label' => __('Event text color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-view.fc-dayGridMonth-view.fc-dayGrid-view .fc-unthemed .fc-event-container .fc-day-grid-event' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'eb_month_event_bg_hover_color',
            [
                'label' => __('Event background hover color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-view.fc-dayGridMonth-view.fc-dayGrid-view .fc-unthemed .fc-event-container .fc-day-grid-event:hover' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'eb_month_event_text_hover_color',
            [
                'label' => __('Event text hover color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-view.fc-dayGridMonth-view.fc-dayGrid-view .fc-unthemed .fc-event-container .fc-day-grid-event:hover' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->end_controls_section();

        $this->start_controls_section(
            'eb_week_view_content',
            [
                'label' => __('Week View', 'elementor-for-extensions'),
                'tab' => Controls_Manager::TAB_STYLE,
                'show_label' => false,
            ]
        );

        $this->add_control(
            'eb_week_title_color',
            [
                'label' => __('Time title colors', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-view.fc-timeGridWeek-view.fc-timeGrid-view .fc-time-grid' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'eb_week_background_color',
            [
                'label' => __('Day background color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-view.fc-timeGridWeek-view.fc-timeGrid-view .fc-day-header' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'eb_week_day_text_color',
            [
                'label' => __('Day text color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-view.fc-timeGridWeek-view.fc-timeGrid-view .fc-day-header' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'eb_week_timeslot_background_color',
            [
                'label' => __('Timeslot background color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-view.fc-timeGridWeek-view.fc-timeGrid-view .fc-time-grid .fc-axis.fc-time.fc-widget-content' => 'background-color: {{VALUE}};',
                    // '{{WRAPPER}} .myeventon_calendar .fc-view.fc-timeGridWeek-view.fc-timeGrid-view .fc-widget-content' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'eb_week_timeslot_background_hover_color',
            [
                'label' => __('Timeslot background hover color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-view.fc-timeGridWeek-view.fc-timeGrid-view .fc-time-grid .fc-axis.fc-time.fc-widget-content:hover' => 'background-color: {{VALUE}};',
                    // '{{WRAPPER}} .myeventon_calendar .fc-view.fc-timeGridWeek-view.fc-timeGrid-view .fc-widget-content:hover' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'eb_week_today_date_bg_color',
            [
                'label' => __('Today`s date background', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-view.fc-timeGridWeek-view.fc-timeGrid-view .fc-today' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'eb_week_today_grid_color',
            [
                'label' => __('Today`s date text color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-view.fc-timeGridWeek-view.fc-timeGrid-view .fc-today' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'eb_week_event_bg_color',
            [
                'label' => __('Event background color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-view.fc-timeGridWeek-view.fc-timeGrid-view .fc-event-container .fc-event' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'eb_week_event_text_color',
            [
                'label' => __('Event text color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-view.fc-timeGridWeek-view.fc-timeGrid-view .fc-event-container .fc-event' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'eb_week_event_bg_hover_color',
            [
                'label' => __('Event background hover color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-view.fc-timeGridWeek-view.fc-timeGrid-view .fc-event-container .fc-event:hover' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'eb_week_event_text_hover_color',
            [
                'label' => __('Event text hover color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-view.fc-timeGridWeek-view.fc-timeGrid-view .fc-event-container .fc-event:hover' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->end_controls_section();

        $this->start_controls_section(
            'eb_day_view_content',
            [
                'label' => __('Day View', 'elementor-for-extensions'),
                'tab' => Controls_Manager::TAB_STYLE,
                'show_label' => false,
            ]
        );

        $this->add_control(
            'eb_day_today_date_bg_color',
            [
                'label' => __('Header day background', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-view.fc-timeGridDay-view.fc-timeGrid-view .fc-day-header' => 'background-color: {{VALUE}}!important;',
                ],
            ]
        );

        $this->add_control(
            'eb_day_today_grid_color',
            [
                'label' => __('Header day text color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-view.fc-timeGridDay-view.fc-timeGrid-view .fc-day-header span' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'eb_day_title_color',
            [
                'label' => __('Time title colors', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-view.fc-timeGridDay-view.fc-timeGrid-view .fc-time-grid' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'eb_day_timeslot_background_color',
            [
                'label' => __('Timeslot background color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-view.fc-timeGridDay-view.fc-timeGrid-view .fc-time-grid .fc-axis.fc-time.fc-widget-content' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'eb_day_timeslot_background_hover_color',
            [
                'label' => __('Timeslot background hover color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-view.fc-timeGridDay-view.fc-timeGrid-view .fc-time-grid .fc-axis.fc-time.fc-widget-content:hover' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'eb_day_odd_row_bg_color',
            [
                'label' => __('Odd row background', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-view.fc-timeGridDay-view.fc-timeGrid-view .fc-event-container .fc-event' => 'background-color: transparent!important; border:0px;',
                    '{{WRAPPER}} .myeventon_calendar .fc-view.fc-timeGridDay-view.fc-timeGrid-view .fc-slats tr:nth-child(odd) .fc-widget-content' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'eb_day_even_row_bg_color',
            [
                'label' => __('Even row background', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-view.fc-timeGridDay-view.fc-timeGrid-view .fc-event-container .fc-event' => 'background-color: transparent!important; border:0px;',
                    '{{WRAPPER}} .myeventon_calendar .fc-view.fc-timeGridDay-view.fc-timeGrid-view .fc-slats tr:nth-child(even) .fc-widget-content' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'eb_day_event_bg_color',
            [
                'label' => __('Event background color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'description' => __('This will override the even and odd row background', 'elementor-for-extensions'),
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-view.fc-timeGridDay-view.fc-timeGrid-view .fc-event-container .fc-event .fc-content' => 'background-color: {{VALUE}}!important;padding:5px;',
                ],
            ]
        );

        $this->add_control(
            'eb_day_event_text_color',
            [
                'label' => __('Event text color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-view.fc-timeGridDay-view.fc-timeGrid-view .fc-event-container .fc-event' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'eb_day_event_text_hover_color',
            [
                'label' => __('Event text hover color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-view.fc-timeGridDay-view.fc-timeGrid-view .fc-event-container .fc-event:hover' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->end_controls_section();

        // Add new option in Tec
        $this->start_controls_section(
            'eb_event_content',
            [
                'label' => __('Event Label', 'elementor-for-extensions'),
                'tab' => Controls_Manager::TAB_STYLE,
                'show_label' => false,
                'condition' => ['event_view' => 'calendar'],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'eb_event_label_typography',
                'selector' => '{{WRAPPER}} .myeventon_calendar tr .fc-event-container',
            ]
        );

        $this->add_control(
            'eb_event_label_text_color',
            [
                'label' => __('Text Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-event-container .fc-event' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'eb_event_label_text_hover_color',
            [
                'label' => __('Hover Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-event-container .fc-event:hover' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'eb_event_label_background',
            [
                'label' => __('Background Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-event-container .fc-event' => 'background-color: {{VALUE}}; border-color:{{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'eb_event_label_hover_background',
            [
                'label' => __('Hover Background Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar .fc-event-container .fc-event:hover' => 'background-color: {{VALUE}}; border-color:{{VALUE}};',
                ],
            ]
        );

        $this->end_controls_section();

        /*@Calendar detail view style */
        /*@Leftbar Border style*/
        $this->start_controls_section(
            'detail_left_handbar_style',
            [
                'label' => __('Detail Left Border', 'elementor-for-extensions'),
                'tab' => Controls_Manager::TAB_STYLE,
                'show_label' => false,
                'condition' => ['event_view' => 'calendar'],
            ]
        );

        $this->add_control(
            'detail_left_border_normal_width',
            [
                'label' => __('Normal Border Width', 'elementor-for-extensions'),
                'type' => Controls_Manager::SLIDER,
                'range' => [
                    'px' => [
                        'max' => 50,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar_summaryview ul > li' => 'border-left-width: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->add_control(
            'detail_left_border_hover_width',
            [
                'label' => __('Hover Border Width', 'elementor-for-extensions'),
                'type' => Controls_Manager::SLIDER,
                'range' => [
                    'px' => [
                        'max' => 50,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar_summaryview ul > li:hover' => 'border-left-width: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->add_control(
            'detail_event_summary_list_left_border_color',
            [
                'label' => __('Border Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar_summaryview ul > li' => 'border-left-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'detail_event_summary_list_left_hover_border_color',
            [
                'label' => __('Hover Border Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar_summaryview ul > li:hover' => 'border-left-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'detail_event_summary_list_seperator_border_color',
            [
                'label' => __('List Seperator Border Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar_summaryview ul > li::after' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->end_controls_section();

        $this->start_controls_section(
            'detail_event_date_style',
            [
                'label' => __('Detail Event Date', 'elementor-for-extensions'),
                'tab' => Controls_Manager::TAB_STYLE,
                'show_label' => false,
                'condition' => ['event_view' => 'calendar'],
            ]
        );

        $this->add_control(
            'detail_event_date_color',
            [
                'label' => __('Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar_summaryview ul > li > a > div.date_wrapper > .day' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'detail_event_date_hover_color',
            [
                'label' => __('Hover Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar_summaryview ul > li:hover > a > div.date_wrapper > .day' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'detail_event_date_typography',
                'selector' => '{{WRAPPER}} .myeventon_calendar_summaryview ul > li > a > div.date_wrapper > .day',
            ]
        );

        $this->add_responsive_control(
            'detail_event_date_spacing',
            [
                'label' => __('Margin', 'elementor-for-extensions'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar_summaryview ul > li > a > div.date_wrapper > .day' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'detail_event_date_padding',
            [
                'label' => __('Padding', 'elementor-for-extensions'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar_summaryview ul > li > a > div.date_wrapper > .day' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();

        $this->start_controls_section(
            'detail_event_summary_month_style',
            [
                'label' => __('Detail Event Month', 'elementor-for-extensions'),
                'tab' => Controls_Manager::TAB_STYLE,
                'show_label' => false,
                'condition' => ['event_view' => 'calendar'],
            ]
        );

        $this->add_control(
            'detail_event_summary_month_color',
            [
                'label' => __('Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar_summaryview ul > li > a > div.date_wrapper > .month' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'detail_event_summary_month_hover_color',
            [
                'label' => __('Hover Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar_summaryview ul > li:hover > a > div.date_wrapper > .month' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'detail_event_summary_month_typography',
                'selector' => '{{WRAPPER}} .myeventon_calendar_summaryview ul > li > a > div.date_wrapper > .month',
            ]
        );

        $this->add_responsive_control(
            'detail_event_summary_month_spacing',
            [
                'label' => __('Margin', 'elementor-for-extensions'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar_summaryview ul > li > a > div.date_wrapper > .month' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'detail_event_month_padding',
            [
                'label' => __('Padding', 'elementor-for-extensions'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar_summaryview ul > li > a > div.date_wrapper > .month' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();

        /*@ Title styles*/
        $this->start_controls_section(
            'detail_event_title_style',
            [
                'label' => __('Detail Event Title', 'elementor-for-extensions'),
                'tab' => Controls_Manager::TAB_STYLE,
                'show_label' => false,
                'condition' => ['event_view' => 'calendar'],
            ]
        );

        $this->add_control(
            'detail_event_title_color',
            [
                'label' => __('Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar_summaryview ul > li > a > div.event_title > h4' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'detail_event_title_hover_color',
            [
                'label' => __('Hover Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar_summaryview ul > li:hover > a > div.event_title > h4' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'detail_event_title_typography',
                'selector' => '{{WRAPPER}} .myeventon_calendar_summaryview ul > li > a > div.event_title > h4',
            ]
        );

        $this->add_responsive_control(
            'detail_event_title_align',
            [
                'label' => __('Alignment', 'elementor-for-extensions'),
                'type' => Controls_Manager::CHOOSE,
                'options' => [
                    'left' => [
                        'title' => __('Left', 'elementor-for-extensions'),
                        'icon' => 'fa fa-align-left',
                    ],
                    'center' => [
                        'title' => __('Center', 'elementor-for-extensions'),
                        'icon' => 'fa fa-align-center',
                    ],
                    'right' => [
                        'title' => __('Right', 'elementor-for-extensions'),
                        'icon' => 'fa fa-align-right',
                    ],
                    'justify' => [
                        'title' => __('Justified', 'elementor-for-extensions'),
                        'icon' => 'fa fa-align-justify',
                    ],
                ],
                'default' => '',
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar_summaryview ul > li > a > div.event_title' => 'text-align: {{VALUE}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'detail_event_title_spacing',
            [
                'label' => __('Margin', 'elementor-for-extensions'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar_summaryview ul > li > a > div.event_title > h4' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'detail_event_title_padding',
            [
                'label' => __('Padding', 'elementor-for-extensions'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar_summaryview ul > li > a > div.event_title' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();

        $this->start_controls_section(
            'detail_event_dropdown_style',
            [
                'label' => __('Detail Event Dropdown', 'elementor-for-extensions'),
                'tab' => Controls_Manager::TAB_STYLE,
                'show_label' => false,
                'condition' => ['event_view!' => 'detail'],
            ]
        );

        $this->add_responsive_control(
            'detail_event_dropdown_padding',
            [
                'label' => __('Padding', 'elementor-for-extensions'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar_summaryview .summary_cal_description' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                    '{{WRAPPER}} .summaryEventList .summary_cal_description' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_control(
            'detail_event_dropdown_bg',
            [
                'label' => __('Background Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar_summaryview .summary_cal_description' => 'background: {{VALUE}};',
                    '{{WRAPPER}} .summaryEventList .summary_cal_description' => 'background: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'detail_event_dropdown_time_title_color',
            [
                'label' => __('Title Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar_summaryview .summary_cal_description .time_icon > i' => 'color: {{VALUE}};',
                    '{{WRAPPER}} .myeventon_calendar_summaryview .summary_cal_description .summary_cal_data h3' => 'color: {{VALUE}};',
                    '{{WRAPPER}} .summaryEventList .summary_cal_description .time_icon > i' => 'color: {{VALUE}};',
                    '{{WRAPPER}} .summaryEventList .summary_cal_description .summary_cal_data h3' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'label' => __('Title Typo', 'elementor-for-extensions'),
                'name' => 'detail_event_dropdown_time_title_typography',
                'selector' => '{{WRAPPER}} .myeventon_calendar_summaryview .summary_cal_description .time_icon > i,{{WRAPPER}} .myeventon_calendar_summaryview .summary_cal_description .summary_cal_data h3,{{WRAPPER}} .summaryEventList .summary_cal_description .time_icon > i,{{WRAPPER}} .summaryEventList .summary_cal_description .summary_cal_data h3',
            ]
        );

        $this->add_control(
            'detail_event_dropdown_time_string_color',
            [
                'label' => __('Time Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .myeventon_calendar_summaryview .summary_cal_description .summary_cal_data p' => 'color: {{VALUE}};',
                    '{{WRAPPER}} .summaryEventList .summary_cal_description .summary_cal_data p' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'label' => __('Time Typo', 'elementor-for-extensions'),
                'name' => 'detail_event_dropdown_time_string_typography',
                'selector' => '{{WRAPPER}} .myeventon_calendar_summaryview .summary_cal_description .summary_cal_data p,{{WRAPPER}} .summaryEventList .summary_cal_description .summary_cal_data p',
            ]
        );

        $this->end_controls_section();

        $this->start_controls_section(
            'default_to_show_time_style',
            [
                'label' => __('Time', 'elementor-for-extensions'),
                'tab' => Controls_Manager::TAB_STYLE,
                'show_label' => false,
                'condition' => ['default_to_show_time' => 'yes', 'event_view' => 'summary'],
            ]
        );

        $this->add_control(
            'default_to_show_time_background',
            [
                'label' => __('Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'condition' => ['default_to_show_time' => 'yes', 'event_view' => 'summary'],
                'selectors' => [
                    '{{WRAPPER}} .default_to_show_time_formate' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'default_to_show_time_typography',
                'selector' => '{{WRAPPER}} .default_to_show_time_formate',
            ]
        );

        $this->end_controls_section();
        /*@ Calendar view style ends here*/

        /*@ No events found message style */
        $this->start_controls_section(
            'no_events_message_section',
            [
                'label' => __('No Events Message', 'elementor-for-extensions'),
                'tab' => Controls_Manager::TAB_STYLE,
                'show_label' => false,
                'condition' => ['event_view' => 'detail'],
            ]
        );

        $this->add_control(
            'no_events_message_color',
            [
                'label' => __('Color', 'elementor-for-extensions'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .no_events_msg' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'no_events_message_typography',
                'selector' => '{{WRAPPER}} .no_events_msg',
            ]
        );

        $this->add_responsive_control(
            'no_events_message_align',
            [
                'label' => __('Alignment', 'elementor-for-extensions'),
                'type' => Controls_Manager::CHOOSE,
                'options' => [
                    'left' => [
                        'title' => __('Left', 'elementor-for-extensions'),
                        'icon' => 'fa fa-align-left',
                    ],
                    'center' => [
                        'title' => __('Center', 'elementor-for-extensions'),
                        'icon' => 'fa fa-align-center',
                    ],
                    'right' => [
                        'title' => __('Right', 'elementor-for-extensions'),
                        'icon' => 'fa fa-align-right',
                    ],
                    'justify' => [
                        'title' => __('Justified', 'elementor-for-extensions'),
                        'icon' => 'fa fa-align-justify',
                    ],
                ],
                'default' => '',
                'selectors' => [
                    '{{WRAPPER}} .no_events_msg' => 'text-align: {{VALUE}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'no_events_message_margin',
            [
                'label' => __('Margin', 'elementor-for-extensions'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .no_events_msg' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'no_events_message_padding',
            [
                'label' => __('Padding', 'elementor-for-extensions'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .no_events_msg' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();

        /*@ Filters */
        $this->start_controls_section(
            'event_filter_section',
            [
                'label' => __('Filter', 'elementor-for-extensions'),
                'tab' => Controls_Manager::TAB_STYLE,
                'show_label' => false,
                'condition' => [
                    'event_view' => 'detail',
                    'show_filter' => 'yes'
                ],
            ]
        );

        $this->add_responsive_control(
            'filters_width',
            [
                'label' => __('Width', 'elementor-extensions'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['%', 'px'],
                'default' => [
                    'unit' => '%',
                    'size' => '20',
                ],
                'range' => [
                    '%' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                    'px' => [
                        'min' => 0,
                        'max' => 1000,
                        'step' => 5,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .categories_tribe_filter' => 'width: {{SIZE}}{{UNIT}}',
                ],
            ]
        );

        $this->add_responsive_control(
            'filters_margin',
            [
                'label' => __('Margin', 'elementor-for-extensions'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .categories_tribe_filter' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();
    }

    protected function getEventCalendarCategories()
    {

        $list = array();

        if ($this->is_tac_installed_activated()) {
            return $list;
        }

        $defaults = array('taxonomy' => 'tribe_events_cat', 'hide_empty' => false);

        $categories_tribe = get_terms($defaults);
        foreach ($categories_tribe as $category_tribe) {
            $name = $category_tribe->name;
            $list[$category_tribe->slug] = __($name, 'elementor-for-extensions');
        }
        return $list;
    }

    protected function getEventCalendarTaxonomies()
    {

        $list = array();

        if ($this->is_tac_installed_activated()) {
            return $list;
        }

        $taxonomies = get_object_taxonomies('tribe_events');

        foreach ($taxonomies as $taxonomy) {

            if ($taxonomy === 'tribe_events_cat') {
                continue;
            }

            $slug = $taxonomy;
            $taxonomy = ucwords(str_replace('_', ' ', $taxonomy));
            $list[$slug] = __($taxonomy, 'elementor-for-extensions');
        }

        return $list;
    }

    protected function getTermsByTaxonomyName()
    {

        $taxonomies = $this->getEventCalendarTaxonomies();

        $termsByTaxonomy = [];

        foreach ($taxonomies as $slug => $taxonomy) {
            $terms = get_terms($slug, array(
                'hide_empty' => false,
            ));

            $termList = [];
            foreach ($terms as $term) {
                $termList[$term->slug] = $term->name;
            }

            $termsByTaxonomy[$slug] = $termList;
        }

        return $termsByTaxonomy;
    }

    protected function render()
    {

        if ($this->is_tac_installed_activated()) {
            echo $this->is_tac_installed_activated();
            return;
        }

        $settings = $this->get_settings_for_display();
        $taxonomies = $this->getEventCalendarTaxonomies();
        $taxonomy_settings = [];
        $setting_keys = array_keys($settings);

        foreach ($taxonomies as $slug => $taxonomy) {
            if (in_array($slug, $setting_keys)) {
                $taxonomy_settings[] = $slug;
            }
        }

        $settings['taxonomy_settings'] = $taxonomy_settings;

        $defaults = array('taxonomy' => 'tribe_events_cat');
        $categories_tribe = get_terms($defaults);
        ?>
        <?php
        if ($settings['event_view'] == 'detail'):
            if ($settings['show_filter'] == 'yes'):
                ?>
                <select class="categories_tribe_filter">
                    <option value="">All</option>
                    <?php
                    foreach ($categories_tribe as $categories) {
                        ?>
                        <option value="<?php echo esc_attr($categories->slug); ?>"><?php echo esc_html($categories->name); ?></option>
                        <?php
                    }
                    ?>
                </select>
            <?php
            endif;
        endif;
        ?>
        <?php
        if ($settings['event_view'] == 'detail'):
            $this->ee_mb_detail_event_view($settings);
        elseif ($settings['event_view'] == 'summary'):

            $atts = $settings;
            $atts['month'] = date('Y-m');
            $atts['next_available_loop'] = 1;
            $current_month = date('m');
            $current_year = date('Y');

            /*@ If current month have no any events then enable next the month who have events */
            if (!empty($settings['default_to_next_event'])):

                $upcomingEvents = tribe_get_events(array(
                    'posts_per_page' => 1,
                    'eventDisplay' => 'list' // only upcoming
                ));

                $limitMonthYear = date('Y-m-d');
                if (!empty($upcomingEvents)) {
                    $limitMonthYear = tribe_get_start_date($upcomingEvents[0]->ID, false, 'Y-m-d');
                }

                $upcomingYearLimit = date('Y-m', strtotime('+1 month', strtotime($limitMonthYear)));
                $current_month = $this->checkEventExistInCurrentMonthSummaryList($atts, $upcomingYearLimit);

                $atts['month'] = $current_month;
                $availableMonthYear = explode('-', $current_month);
                $current_month = $availableMonthYear[1];
                $current_year = $availableMonthYear[0];
            endif;

            $all_years = $this->getAllYears();
            $all_months = $this->getAllMonths();

            ?>
            <div class="myeventon_summary_eventlist_wrapper">
                <div class="summary_filter" data-date-layout="<?php echo esc_attr($settings['event_date_layout']); ?>"
                     data-event-limit="<?php echo esc_attr($settings['event_limit']); ?>"
                     data-event-detail="<?php echo esc_attr($settings['enable_event_detail']); ?>"
                     data-disable-link="<?php echo esc_attr($settings['disable_link']); ?>"
                     data-hide-past-events="<?php echo esc_attr($settings['hide_past_events']); ?>"
                     data-future-events="<?php echo esc_attr($settings['show_future_events']); ?>"
                     data-event-offset="<?php echo esc_attr($settings['event_offset']); ?>">
                    <div class="month_filter_wrapper">
                        <?php
                        foreach ($all_months as $month_key => $month):
                            $month_class = '';
                            if ($current_month == $month_key):
                                $month_class = 'current';
                            endif;
                            ?>
                            <a class="<?php echo esc_attr($month_class); ?>"
                               data-month="<?php echo esc_attr($month_key); ?>"><?php echo esc_html($month); ?></a>
                        <?php
                        endforeach;
                        ?>
                    </div>
                    <div class="year_filter_wrapper">
                        <?php
                        foreach ($all_years as $year_key => $year):
                            $year_class = '';
                            if ($current_year == $year):
                                $year_class = 'current';
                            endif;
                            ?>
                            <a class="<?php echo esc_attr($year_class); ?>"
                               data-year="<?php echo esc_attr($year); ?>"><?php echo esc_html($year); ?></a>
                        <?php
                        endforeach;
                        ?>
                    </div>
                </div>

                <div class="summaryEventList <?php echo esc_attr($settings['event_date_layout']); ?>">
                    <div class="elementor_extensions_loading_overlay">
                        <div class="elementor_extensions_loader"></div>
                    </div>
                    <?php $this->ee_mb_fetch_events($atts); ?>
                </div>
            </div>
        <?php
        elseif ($settings['event_view'] == 'calendar'):
            $this->getCalendarView($settings);
        endif;
        ?>
        <div style="clear:both;"></div>
        <?php
    }

    /*@ Event View : Detail View */
    public function ee_mb_detail_event_view($settings){

        if(!empty($settings['setting'])){
            $settings = $settings['setting'];
        }

        $events = $this->eeMbGetEventList($settings);
        $column_gap = (is_array($settings['column_gap']) == 1) ? $settings['column_gap']['default'] : $settings['column_gap'];

        $auto_height = ($settings['auto_height'] === 'yes') ? 'auto_height' : '';
        $match_height = '';
        if($settings['auto_height'] === 'yes') :
            $match_height = 'data-match-height="groupName"';
        endif;
        /*
         *@ If event present then show otherwise display not found message
         */
        if(!empty($events)):

            $past_events = '';
            ?>
            <div id="filter" class="tec-wrapper <?php echo esc_attr($auto_height); ?>">
            <div class="tec_ee_mb_events_wrapper parent-<?php echo esc_attr($column_ga); ?>">
            <?php

            foreach($events as $event_key => $event):

                $event_id = $event->ID;
                $event_title = $event->post_title;
                $event_excerpt = $event->post_excerpt;
                $event_content = $event->post_content;

                $image_size = $settings['thumbnail_size'];
                $event_image = wp_get_attachment_image_src(get_post_thumbnail_id($event_id),$image_size);

                $event_start_time = $event_end_time = $event_start_date = $event_end_date = $venue = $link_icon = $event_external_url = $compare_date = $event_inner_page_link = $start_time = $end_time = '';

                $event_meta = get_post_meta($event_id);

                /*@ Event start date */
                if(!empty($event_meta['_EventStartDate'][0])):
                    $event_start_date = $event_meta['_EventStartDate'][0];
                    $start_time = date('H:i:s', strtotime($event_start_date));

                    $event_start_time = date('g:i a',strtotime($event_start_date));
                    $event_date_formate = ($settings['free_event_date_formate']) ? $settings['free_event_date_formate'] : $settings['event_date_formate'];
                    $event_start_date = date($event_date_formate,strtotime($event_start_date));

                    $original_start_date_time = $event_meta['_EventStartDate'][0];
                endif;

                /*@ Event end date */
                if(!empty($event_meta['_EventEndDate'][0])):
                    $event_end_date = $event_meta['_EventEndDate'][0];
                    $end_time = date('H:i:s', strtotime($event_end_date));
                    $event_end_time = date('g:i a',strtotime($event_end_date));
                    $event_end_date = date($event_date_formate,strtotime($event_end_date));
                    $original_end_date_time = $event_meta['_EventEndDate'][0];
                endif;

                /*@ Use compare date for past event */
                if(empty($event_end_date)) {
                    $compare_date = strtotime($original_start_date_time);

                    // If Query date set to today then show all future events inlcuding today
                    if ($start_date === 'today') {
                        if (strtotime(date('Y-m-d')) >= strtotime($original_start_date_time)) {
                            $compare_date = date('Y-m-d H:i:s');
                        }
                    }
                } else {
                    $compare_date = strtotime($original_end_date_time);
                }

                /*@ Event link start */
                if(!empty($event_meta['_ee_mb_event_page_link'][0])):
                    $event_inner_page_link = $event_meta['_ee_mb_event_page_link'][0];
                endif;

                $event_link = 'javascript:void(0);';

                if(empty($settings['disable_link'])):
                    if(!empty($event_meta['_ee_mb_event_external_link'][0])):
                        $event_link = $event_meta['_ee_mb_event_external_link'][0];
                    elseif(!empty($event_inner_page_link)):
                        $event_link = get_the_permalink($event_inner_page_link);
                    else:
                        $event_link = get_the_permalink($event_id);
                    endif;
                endif;

                $venue = $this->build_venue($event_id);

                /*@ Read more button with or without icon*/
                if(!empty($settings['event_read_more_text'])):
                    $link_icon = $settings['event_read_more_text'];

                    if ( ! empty( $settings['selected_icon']['value'] ) ) :
                        if($settings['icon_align'] == 'right'):
                            ob_start();
                            ?>
                            <?php echo $settings['event_read_more_text']; ?><span class="read_more_icon right">
                            <?php

                            if ( !empty($settings['selected_icon']) ) :
                                Icons_Manager::render_icon( $settings['selected_icon'], [ 'aria-hidden' => 'true' ] );
                            endif;
                            ?>
                            </span>
                            <?php
                            $link_icon = ob_get_clean();

                        elseif($settings['icon_align'] == 'left'):
                            ob_start();
                            ?>
                            <span class="read_more_icon left">
                            <?php
                                if ( !empty($settings['selected_icon']) ) :
                                    Icons_Manager::render_icon( $settings['selected_icon'], [ 'aria-hidden' => 'true' ] );
                                endif;
                                ?>
                            </span><?php echo $settings['event_read_more_text']; ?>
                                <?php
                            $link_icon = ob_get_clean();
                        endif;
                    else:
                        $link_icon = $settings['event_read_more_text'];
                    endif;
                endif;

                $classes = array(
                    'grid-col-desk-' . ((is_array($settings['event_columns']) == 1) ? $settings['event_columns']['default'] : $settings['event_columns']),
                    'grid-col-tablet-' . ((is_array($settings['event_columns_tablet']) == 1) ? $settings['event_columns_tablet']['default'] : $settings['event_columns_tablet']),
                    'grid-col-mobile-' . ((is_array($settings['event_columns_mobile']) == 1) ? $settings['event_columns_mobile']['default'] : $settings['event_columns_mobile']),
                );
                $classes = sprintf(' %s', implode(' ', $classes));

                ob_start();
                ?>
                <div class="myeventon_wrapper<?php echo esc_attr($classes); ?> row-gap-<?php echo esc_attr($column_gap); ?>">
                    <?php if ($settings['show_image'] == 'yes' && !empty($event_image[0])): ?>
                        <div class="myeventon_img_wrapper">
                            <?php if ($settings['anchor_link'] == 'yes' && $settings['read_more_text'] != 'yes'): ?>
                                <a href="<?php echo esc_url($event_link); ?>" class="img_link">
                                    <img src="<?php echo esc_url($event_image[0]); ?>" alt="<?php echo esc_attr(basename($event_image[0])); ?>"/>
                                </a>
                            <?php else: ?>
                                <span class="img_link">
                    <img src="<?php echo esc_url($event_image[0]); ?>" alt="<?php echo esc_attr(basename($event_image[0])); ?>"/>
                </span>
                            <?php endif; ?>
                        </div>
                    <?php endif; ?>

                    <div class="myeventon_content_wrapper">
                        <div class="inner_content_wrapper" <?php echo $match_height; ?>>

                            <?php if ($settings['show_date'] == 'yes' && $settings['show_date_before_title'] === 'yes'): ?>
                                <?php if ($settings['show_end_date'] == 'yes'): ?>
                                    <?php if ($settings['add_link_to_date'] == 'yes'): ?>
                                        <a href="<?php echo esc_url($event_link); ?>" class="myeventon_date"><?php echo esc_html($event_start_date); ?> - <?php echo esc_html($event_end_date); ?></a>
                                    <?php else: ?>
                                        <span class="myeventon_date"><?php echo esc_html($event_start_date); ?> - <?php echo esc_html($event_end_date); ?></span>
                                    <?php endif; ?>
                                <?php else: ?>
                                    <?php if ($settings['add_link_to_date'] == 'yes'): ?>
                                        <a href="<?php echo esc_url($event_link); ?>" class="myeventon_date"><?php echo esc_html($event_start_date); ?></a>
                                    <?php else: ?>
                                        <span class="myeventon_date"><?php echo esc_html($event_start_date); ?></span>
                                    <?php endif; ?>
                                <?php endif; ?>
                            <?php endif; ?>

                            <?php if ($settings['show_title'] == 'yes'): ?>
                                <div class="link_wrapper">
                                    <?php if (($settings['anchor_link'] == 'yes' && $settings['read_more_text'] != 'yes') || $settings['add_link_to_title'] === 'yes'): ?>
                                        <?php if (!empty($event_title)): ?>
                                            <a href="<?php echo esc_url($event_link); ?>" class="myeventon_link"><h3 class="myeventon_title"><?php echo esc_html($event_title); ?></h3></a>
                                        <?php endif; ?>
                                    <?php else: ?>
                                        <?php if (!empty($event_title)): ?>
                                            <span class="myeventon_link"><h3 class="myeventon_title"><?php echo esc_html($event_title); ?></h3></span>
                                        <?php endif; ?>
                                    <?php endif; ?>
                                </div>
                            <?php endif; ?>

                            <?php if ($settings['show_date'] == 'yes' && $settings['show_date_before_title'] !== 'yes'): ?>
                                <?php if ($settings['show_end_date'] == 'yes'): ?>
                                    <?php if ($settings['add_link_to_date'] == 'yes'): ?>
                                        <a href="<?php echo esc_url($event_link); ?>" class="myeventon_date"><?php echo esc_html($event_start_date); ?> - <?php echo esc_html($event_end_date); ?></a>
                                    <?php else: ?>
                                        <span class="myeventon_date"><?php echo esc_html($event_start_date); ?> - <?php echo esc_html($event_end_date); ?></span>
                                    <?php endif; ?>
                                <?php else: ?>
                                    <?php if ($settings['add_link_to_date'] == 'yes'): ?>
                                        <a href="<?php echo esc_url($event_link); ?>" class="myeventon_date"><?php echo esc_html($event_start_date); ?></a>
                                    <?php else: ?>
                                        <span class="myeventon_date"><?php echo esc_html($event_start_date); ?></span>
                                    <?php endif; ?>
                                <?php endif; ?>
                            <?php endif; ?>

                            <?php if ($settings['show_time'] == 'yes'): ?>
                                <span class="myeventon_time"><?php echo esc_html($event_start_time); ?> - <?php echo esc_html($event_end_time); ?></span>
                            <?php endif; ?>

                            <?php if ($settings['show_option_excerpt_content'] == 'content' && !empty($event_content)): ?>
                                <span class="myeventon_content"><?php echo wpautop($event_content); ?></span>
                            <?php endif; ?>

                            <?php if ($settings['show_option_excerpt_content'] == 'excerpt' && !empty($event_excerpt)): ?>
                                <span class="myeventon_excerpt"><?php echo esc_html($settings['excerpt_length'] ? substr($event_excerpt, 0, $settings['excerpt_length']) : substr($event_excerpt, 0, 50)); ?></span>
                            <?php endif; ?>
                        </div>

                        <?php if (!empty($link_icon) && $settings['read_more_text'] == 'yes'): ?>
                            <div class="link_read_wrapper">
                                <a href="<?php echo esc_url($event_link); ?>" class="myeventon_link"><?php echo $link_icon; ?></a>
                            </div>
                        <?php endif; ?>

                        <?php if (!empty($event_meta['_EventCurrencySymbol'][0]) || !empty($event_meta['_EventCost'][0]) || array_filter($venue) || !empty($event_meta['_EventURL'][0])): ?>
                            <div class="meta_data <?php echo !empty($settings['show_seperator']) ? 'seperator' : ''; ?>">
                                <div class="myeventon_cost_data">
                                    <?php if ($settings['show_cost'] == 'yes' && !empty($event_meta['_EventCost'][0])): ?>
                                        <span class="myeventon_cost">Cost: <?php echo esc_html(($event_meta['_EventCurrencyPosition'][0] == 'prefix') ? $event_meta['_EventCurrencySymbol'][0] . $event_meta['_EventCost'][0] : $event_meta['_EventCost'][0] . $event_meta['_EventCurrencySymbol'][0]); ?></span>
                                    <?php endif; ?>
                                </div>

                                <div class="meta_data_url">
                                    <?php if ($settings['show_website'] == 'yes' && !empty($event_meta['_EventURL'][0])): ?>
                                        <a href="<?php echo esc_url($event_meta['_EventURL'][0]); ?>" target="_blank" class="myeventon_link event_website_text_icon">
                                            <?php if (!empty($settings['event_website_text_icon']['value'])): ?>
                                                <i class="<?php echo esc_attr($settings['event_website_text_icon']['value']); ?>" aria-hidden="true"></i> <?php echo esc_html($settings['event_website_text']); ?>
                                            <?php else: ?>
                                                <?php echo esc_html($settings['event_website_text']); ?>
                                            <?php endif; ?>
                                        </a>
                                    <?php endif; ?>

                                    <?php if ($settings['show_location'] == 'yes' && !empty($venue) && array_filter($venue)): ?>
                                        <a href="https://maps.google.com/?q=<?php echo esc_attr(implode(',', $venue)); ?>" class="myeventon_link" target="_blank"><i class="fas fa-map-marker-alt"></i></a>
                                    <?php endif; ?>
                                </div>
                            </div>
                        <?php endif; ?>
                    </div>
                </div>
            <?php
                $event_html = ob_get_clean();

                if(($settings['past_event_section'] == 'yes') && ($compare_date < time())):
                    $past_events.=$event_html;
                else:
                    if(!empty($settings['hide_future_events']) && $settings['hide_future_events'] === 'yes' && $compare_date > time()):
                        echo $event_html;
                    endif;
                endif;
            endforeach;
            ?>
            </div>
            <?php

            if($settings['past_event_section'] == 'yes'):
                ?>
                </div>
                <div class="past_events_wrapper tec-wrapper <?php echo esc_attr($auto_height); ?>">
                <?php
                if(!empty($settings['past_event_title'])): ?>
                    <h2><?php echo esc_html($settings['past_event_title']); ?></h2>
                    <?php
                endif;
                ?>
                <div class="tec_ee_mb_events_wrapper parent-<?php echo esc_attr($column_gap); ?>">
                <?php echo $past_events; ?>
                </div><?php
            endif;
            ?>
            </div>
            <?php
        else:
            if(!empty($settings['no_events_message'])) { ?>
                <span class='no_events_msg'><?php echo esc_html($settings['no_events_message']); ?></span>
            <?php
            } else { ?>
                <span class='no_events_msg'>There are no events available, please add new event.</span>
            <?php
            }
        endif;
    }

    public function eeMbGetEventList($settings = null)
    {

        if ($this->is_tac_installed_activated()) {
            return [];
        }

        $eventLimit = -1;
        if (!empty($settings)) :

            $eventView = $settings['event_view'];
            // if ($eventView === 'detail') :
            $atts['event_tax'] = '';
            $start_date = ('custom' == $settings['start_date']) ? $settings['custom_start_date'] : $settings['start_date'];
            $end_date = ('custom' == $settings['end_date']) ? $settings['custom_end_date'] : $settings['end_date'];
            $hide_past_events = (!empty($settings['past_event_section'])) ? sanitize_text_field($settings['past_event_section']) : '';

            if (!empty($settings['limit'])) :
                $eventLimit = $settings['limit'];
            elseif (!empty($settings['query_limit'])) :
                $eventLimit = $settings['query_limit'];
            endif;

            $query_args = array_filter([
                'start_date' => $start_date,
                'end_date' => $end_date,
                'orderby' => $settings['orderby'],
                'order' => $settings['order'],
                'eventDisplay' => ('custom' == $settings['start_date'] or 'custom' == $settings['end_date']) ? 'custom' : 'all',
                'posts_per_page' => $eventLimit,
                //'tag'          => 'donor-program', // or whatever the tag name is
            ]);

            if ($hide_past_events != 'yes'):
                $query_args['eventDisplay'] = 'list';
                //$query_args['start_date'] = 'now';
                $query_args['posts_per_page'] = $eventLimit;
            endif;

            if ('by_name' === $settings['source']) {

                $query_args['tax_query'] = array(
                    'relation' => 'OR',
                );

                // For Query selection
                if (!empty($settings['event_categories'])) {
                    $query_args['tax_query'][] = [
                        'taxonomy' => 'tribe_events_cat',
                        'field' => 'slug',
                        'terms' => $settings['event_categories'],
                        'operator' => 'IN'
                    ];
                }

                if (!empty($settings['taxonomy_settings'])) {
                    foreach ($settings['taxonomy_settings'] as $taxonomy) {
                        if (!empty($settings[$taxonomy])) {
                            $query_args['tax_query'][] = [
                                'taxonomy' => $taxonomy,
                                'field' => 'slug',
                                'terms' => $settings[$taxonomy],
                                'operator' => 'IN'
                            ];
                        }
                    }
                }
            }

            if ('exclude' === $settings['source']) {

                $query_args['tax_query'] = array(
                    'relation' => 'AND',
                );

                // For Query selection
                if (!empty($settings['exclude_event_categories'])) {
                    $query_args['tax_query'][] = [
                        'taxonomy' => 'tribe_events_cat',
                        'field' => 'slug',
                        'terms' => $settings['exclude_event_categories'],
                        'operator' => 'NOT IN'
                    ];
                }

                if (!empty($settings['taxonomy_settings'])) {
                    foreach ($settings['taxonomy_settings'] as $taxonomy) {
                        if (!empty($settings['exclude_' . $taxonomy])) {
                            $query_args['tax_query'][] = [
                                'taxonomy' => $taxonomy,
                                'field' => 'slug',
                                'terms' => $settings['exclude_' . $taxonomy],
                                'operator' => 'NOT IN'
                            ];
                        }
                    }
                }
            }

            // Show all events for calendar
            if (!empty($settings) && $settings['event_view'] === 'calendar') {
                $query_args['posts_per_page'] = -1;
            }

            // For frontend filters
            if (!empty($settings['event_categories'])) {
                $query_args['tax_query'][] = [
                    'taxonomy' => 'tribe_events_cat',
                    'field' => 'slug',
                    'terms' => $settings['event_categories'],
                    'operator' => 'IN'
                ];
            }

            $query_args = tribe_get_events($query_args);

            return $query_args;

        endif;

        return [];
    }

    /*@ Check for the month whose have events */
    public function checkEventExistInCurrentMonthSummaryList($atts, $upcomingYearLimit)
    {

        $hide_past_events = (!empty($atts['hide_past_events'])) ? sanitize_text_field($atts['hide_past_events']) : '';
        $default_to_show_time = (!empty($atts['default_to_show_time'])) ? sanitize_text_field($atts['default_to_show_time']) : '';
        $default_to_show_time_formate = (!empty($atts['default_to_show_time_formate'])) ? sanitize_text_field($atts['default_to_show_time_formate']) : '';
        $event_categories = (!empty($atts['event_categories'])) ? $atts['event_categories'] : '';
        $month_array = explode("-", $atts['month']);

        $month_yearstr = sanitize_text_field($month_array[0]);
        $month_monthstr = sanitize_text_field($month_array[1]);
        $current_day = '-01';

        // First time should from current and then from next month it should be 01
        if ($atts['next_available_loop'] === 1) {
            $current_day = '-' . date('d');
        }
        $month_startdate = date("Y-m-d", strtotime($month_yearstr . "-" . $month_monthstr . $current_day));
        $month_enddate = date("Y-m-01", strtotime("+1 month", strtotime($month_startdate)));

        $atts['meta_date'] = array(
            'relation' => 'AND',
            array(
                'key' => '_EventStartDate',
                'value' => $month_startdate,
                'compare' => '>=',
                'type' => 'DATETIME'
            ),
            array(
                'key' => '_EventStartDate',
                'value' => $month_enddate,
                'compare' => '<',
                'type' => 'DATETIME'
            )
        );

        $args = array(
            'post_type' => 'tribe_events',
            'post_status' => 'publish',
            'meta_query' => array($atts['meta_date']),
            'meta_key' => '_EventStartDate',
            'orderby' => 'meta_value',
            'order' => 'ASC',
        );

        // Query category filter
        if (!empty($event_categories)) {
            $args['tax_query'] = array(
                'relation' => 'AND',
            );

            $args['tax_query'][] = [
                'taxonomy' => 'tribe_events_cat',
                'terms' => $event_categories,
                'field' => 'slug',
                'operator' => 'IN'
            ];
        }
        $posts = get_posts($args);

        $incremented_month_year = date('Y-m', strtotime('+1 month', strtotime($atts['month'])));

        if (empty($posts) && $incremented_month_year !== $upcomingYearLimit):
            $atts['month'] = $incremented_month_year;
            $atts['next_available_loop'] = $atts['next_available_loop'] + 1;
            return $this->checkEventExistInCurrentMonthSummaryList($atts, $upcomingYearLimit);
        endif;

        return $atts['month'];
        wp_die();
    }

    public function ee_mb_fetch_events($atts)
    {

        global $post;
        $output = '';

        $event_date_layout = (!empty($atts['event_date_layout'])) ? sanitize_text_field($atts['event_date_layout']) : '';
        $event_limit = (!empty($atts['event_limit'])) ? intval($atts['event_limit']) : '3';
        $enable_event_detail = (!empty($atts['enable_event_detail'])) ? sanitize_text_field($atts['enable_event_detail']) : '';
        $disable_link = (!empty($atts['disable_link'])) ? sanitize_text_field($atts['disable_link']) : '';
        $hide_past_events = (!empty($atts['hide_past_events'])) ? sanitize_text_field($atts['hide_past_events']) : '';
        $default_to_show_time = (!empty($atts['default_to_show_time'])) ? sanitize_text_field($atts['default_to_show_time']) : '';
        $default_to_show_time_formate = (!empty($atts['default_to_show_time_formate'])) ? sanitize_text_field($atts['default_to_show_time_formate']) : '';
        $future_events_only = (!empty($atts['show_future_events'])) ? sanitize_text_field($atts['show_future_events']) : '';
        $offset = (!empty($atts['offset'])) ? intval($atts['offset']) : intval($atts['event_offset']);
        $start_date = ('custom' == $atts['start_date']) ? $atts['custom_start_date'] : $atts['start_date'];
        $end_date = ('custom' == $atts['end_date']) ? $atts['custom_end_date'] : $atts['end_date'];
        $eventDisplay = ('custom' == $atts['start_date'] or 'custom' == $atts['end_date']) ? 'custom' : 'all';
        $order = $atts['order'];
        $posts_per_page = (!empty($atts['limit'])) ? intval($atts['limit']) : 3;
        $event_categories = (!empty($atts['event_categories'])) ? $atts['event_categories'] : '';

        // Check if summary view's show more button clicked
        if (!empty($atts['ajax_request'])):
            $offset = $event_limit = intval($atts['offset']);
        endif;

        $limit_offset = 3;
        if (!empty($atts['limit']) && !empty($atts['offset'])):
            $limit_offset = intval($atts['limit']) + intval($atts['offset']);
        elseif (!empty($atts['limit'])):
            $limit_offset = intval($atts['limit']);
        elseif (!empty($atts['offset'])):
            $limit_offset = intval($atts['offset']);
        endif;

        $atts = shortcode_atts(apply_filters('ecs_shortcode_atts', array(
            'cat' => '',
            'month' => '',
            'limit' => $event_limit,
            'eventdetails' => 'true',
            'time' => null,
            'past' => null,
            'venue' => 'false',
            'author' => null,
            'schema' => 'true',
            'message' => 'There are no upcoming %s at this time.',
            'key' => 'End Date',
            'order' => ($hide_past_events == 'yes') ? 'DESC' : 'ASC',
            'orderby' => 'startdate',
            'viewall' => 'false',
            'excerpt' => 'false',
            'thumb' => 'false',
            'thumbsize' => '',
            'thumbwidth' => '',
            'thumbheight' => '',
            'contentorder' => apply_filters('ecs_default_contentorder', 'title, thumbnail, excerpt, date, venue', $atts),
            'event_tax' => '',
            'hide_show_more' => '',
            'enable_event_detail' => $enable_event_detail,
            'default_to_show_time' => $default_to_show_time,
            'default_to_show_time_formate' => $default_to_show_time_formate,
            'event_categories' => $event_categories,
            'start_date' => $start_date,
            'end_date' => $end_date,
            'order' => $order,
            'eventDisplay' => $eventDisplay,
            'posts_per_page' => $posts_per_page,
            'disable_link' => $disable_link,
            'hide_past_events' => $hide_past_events,
            'show_future_events' => $future_events_only,
        ), $atts), $atts, 'ecs-list-events');

        /* Category */
        if ($atts['cat']) {
            if (strpos($atts['cat'], ",") !== false) {
                $atts['cats'] = explode(",", $atts['cat']);
                $atts['cats'] = array_map('trim', $atts['cats']);
            } else {
                $atts['cats'] = array(trim($atts['cat']));
            }

            $atts['event_tax'] = array(
                'relation' => 'OR',
            );

            foreach ($atts['cats'] as $cat) {
                $atts['event_tax'][] = array(
                    'taxonomy' => 'es_event_cat',
                    'field' => 'name',
                    'terms' => $cat,
                );
                $atts['event_tax'][] = array(
                    'taxonomy' => 'es_event_cat',
                    'field' => 'slug',
                    'terms' => $cat,
                );
            }
        }

        /* Past Event */
        $meta_date_compare = '>=';
        $meta_date_date = current_time('Y-m-d H:i:s');

        if ($atts['time'] == 'past' || !empty($atts['past'])) {
            $meta_date_compare = '<';
        }

        /* Key, used in filtering events by date */
        if (str_replace(' ', '', trim(strtolower($atts['key']))) == 'startdate') {
            $atts['key'] = '_EventStartDate';
        } else {
            $atts['key'] = '_EventStartDate';
        }

        /* Orderby */
        if (str_replace(' ', '', trim(strtolower($atts['orderby']))) == 'enddate') {
            $atts['orderby'] = '_EventEndDate';
        } elseif (trim(strtolower($atts['orderby'])) == 'title') {
            $atts['orderby'] = 'title';
        } else {
            $atts['orderby'] = '_EventStartDate';
        }

        /* Date */
        $atts['meta_date'] = array(
            array(
                'key' => $atts['key'],
                'value' => $meta_date_date,
                'compare' => $meta_date_compare,
                'type' => 'DATETIME'
            )
        );

        /* Specific Month */
        if ('current' == $atts['month']) {
            $atts['month'] = current_time('Y-m');
        }
        if ('next' == $atts['month']) {
            $atts['month'] = date('Y-m', strtotime('+1 months', current_time('timestamp')));
        }
        if ($atts['month']) {
            // $atts['month'] = sprintf("%02d", $atts['month']);
            $month_array = explode("-", $atts['month']);
            $month_array[1] = sprintf("%02d", $month_array[1]);
            $month_yearstr = sanitize_text_field($month_array[0]);
            $month_monthstr = sanitize_text_field($month_array[1]);
            $month_startdate = date("Y-m-d", strtotime($month_yearstr . "-" . $month_monthstr . "-01"));
            $month_enddate = date("Y-m-01", strtotime("+1 month", strtotime($month_startdate)));

            // If Query date set to today then show all future events inlcuding today
            if ($start_date === 'today') {
                if (strtotime(date('Y-m-d')) >= strtotime($month_startdate)) {
                    $month_startdate = date('Y-m-d');
                }
            }

            if (!empty($future_events_only)):
                $atts['meta_date'] = array(
                    'relation' => 'AND',
                    array(
                        'key' => $atts['key'],
                        'value' => $month_startdate,
                        'compare' => '>=',
                        'type' => 'DATETIME'
                    )
                );
            else:
                $atts['meta_date'] = array(
                    'relation' => 'AND',
                    array(
                        'key' => $atts['key'],
                        'value' => $month_startdate,
                        'compare' => '>=',
                        'type' => 'DATETIME'
                    ),
                    array(
                        'key' => $atts['key'],
                        'value' => $month_enddate,
                        'compare' => '<',
                        'type' => 'DATETIME'
                    )
                );
            endif;
        }

        $args = array(
            'post_type' => 'tribe_events',
            'post_status' => 'publish',
            'posts_per_page' => -1,
            // 'tax_query'=> $atts['event_tax'], // removed
            'meta_key' => ((trim($atts['orderby']) and 'title' != $atts['orderby']) ? $atts['orderby'] : $atts['key']),
            'orderby' => ($atts['orderby'] == 'title' ? 'title' : 'meta_value'),
            'author' => $atts['author'],
            'order' => $atts['order'],
            'meta_query' => array($atts['meta_date']),
        );
        // new code
        $args['start_date'] = $start_date;
        $args['end_date'] = $end_date;
        $args['order'] = $atts['order'];
        $args['eventDisplay'] = ('custom' == $atts['start_date'] or 'custom' == $atts['end_date']) ? 'custom' : 'all';

        if (!empty($atts['query_limit'])):
            $args['posts_per_page'] = $atts['query_limit'];
        endif;

        // category
        if (!empty($event_categories)) {
            $args['tax_query'] = array(
                'relation' => 'AND',
            );
            foreach ($event_categories as $cat) {
                $args['tax_query'][] = [
                    'taxonomy' => 'tribe_events_cat',
                    'terms' => $cat,
                    'field' => 'slug',
                ];
            }
        }

        $posts = tribe_get_events($args);

        $total_events = count($posts);

        // if($hide_past_events == 'yes'):
        // 	$posts = array_reverse($posts);
        // endif;

        $next_month = date('Y-m', strtotime("+1 months", strtotime($atts['month'])));
        $prev_month = date('Y-m', strtotime("-1 months", strtotime($atts['month'])));

        ?>
        <div class="summary_title_wrapper">
            <p class="summary_month_title"><?php echo esc_html(date('F, Y', strtotime($atts['month']))); ?></p>
            <p class="summary_nextprev_buttons">
        <span id="summary_prev" class="summary_btn_prev"
              data-start_date="<?php echo esc_attr($start_date); ?>"
              data-end_date="<?php echo esc_attr($end_date); ?>"
              data-order="<?php echo esc_attr($atts['order']); ?>"
              data-eventDisplay="<?php echo esc_attr($eventDisplay); ?>"
              data-posts_per_page="<?php echo esc_attr($atts['limit']); ?>"
              data-event_categories="<?php echo esc_attr(json_encode($event_categories)); ?>"
              data-default_to_show_time_formate="<?php echo esc_attr($default_to_show_time_formate); ?>"
              data-default_to_show_time="<?php echo esc_attr($default_to_show_time); ?>"
              data-date="<?php echo esc_attr($prev_month); ?>"
              data-date-layout="<?php echo esc_attr($event_date_layout); ?>"
              data-event-detail="<?php echo esc_attr($enable_event_detail); ?>"
              data-disable-link="<?php echo esc_attr($disable_link); ?>"
              data-hide-past-events="<?php echo esc_attr($hide_past_events); ?>">
            <i class="fa fa-angle-left"></i>
        </span>

                <span id="summary_next" class="summary_btn_next"
                      data-start_date="<?php echo esc_attr($start_date); ?>"
                      data-end_date="<?php echo esc_attr($end_date); ?>"
                      data-order="<?php echo esc_attr($atts['order']); ?>"
                      data-eventDisplay="<?php echo esc_attr($eventDisplay); ?>"
                      data-posts_per_page="<?php echo esc_attr($atts['limit']); ?>"
                      data-event_categories="<?php echo esc_attr(json_encode($event_categories)); ?>"
                      data-default_to_show_time_formate="<?php echo esc_attr($default_to_show_time_formate); ?>"
                      data-default_to_show_time="<?php echo esc_attr($default_to_show_time); ?>"
                      data-date="<?php echo esc_attr($next_month); ?>"
                      data-date-layout="<?php echo esc_attr($event_date_layout); ?>"
                      data-event-detail="<?php echo esc_attr($enable_event_detail); ?>"
                      data-disable-link="<?php echo esc_attr($disable_link); ?>"
                      data-hide-past-events="<?php echo esc_attr($hide_past_events); ?>">
            <i class="fa fa-angle-right"></i>
        </span>
            </p>
        </div>

        <?php

        if (!empty($posts)):

            $allPosts = [];
            $counter = 0;
            $event_inner_page_link = '';

            foreach ((array)$posts as $post_index => $post):
                $id = $post->ID;

                setup_postdata($post);

                $start_date = get_post_meta($id, '_EventStartDate')[0];
                $end_date = get_post_meta($id, '_EventEndDate')[0];

                $start_time = date('H:i:s', strtotime($start_date));
                $end_time = date('H:i:s', strtotime($end_date));

                $is_hide = empty($end_date) ? strtotime($start_date) : strtotime($end_date);
                $hide_events = $is_hide <= time() && $hide_past_events === 'yes' ? false : true;

                /* Event link start */
                $event_meta = get_post_meta($id);
                if (!empty($event_meta['_ee_mb_event_page_link'][0])) {
                    $event_inner_page_link = $event_meta['_ee_mb_event_page_link'][0];
                }

                $event_link = 'javascript:void(0);';
                if (empty($disable_link)) {
                    if (!empty($event_meta['_ee_mb_event_external_link'][0])) {
                        $event_link = $event_meta['_ee_mb_event_external_link'][0];
                    } elseif (!empty($event_inner_page_link)) {
                        $event_link = get_the_permalink($event_inner_page_link);
                    } else {
                        $event_link = get_the_permalink($id);
                    }
                }

                if ($hide_events) {
                    $allPosts[$counter]['hide_events'] = $hide_events;
                    $allPosts[$counter]['start_date'] = $start_date;
                    $allPosts[$counter]['end_date'] = $end_date;
                    $allPosts[$counter]['event_link'] = $event_link;
                    $allPosts[$counter]['event_inner_page_link'] = $event_inner_page_link;
                    $allPosts[$counter]['title'] = get_the_title();
                    $counter++;
                }

            endforeach;

            $allPosts = array_slice($allPosts, 0, $event_limit, true);

            if (!empty($allPosts)):
                ?>
                <ul>
                    <?php foreach ((array)$allPosts as $post_index => $post): ?>
                        <?php
                        $hide_events = $post['hide_events'];
                        $start_date = $post['start_date'];
                        $end_date = $post['end_date'];
                        $event_link = $post['event_link'];
                        $event_inner_page_link = $post['event_inner_page_link'];
                        $title = $post['title'];
                        $eventlink = ($atts['enable_event_detail'] == 'yes' || (!empty($disable_link) && $disable_link == 'yes')) ? 'javascript:void(0);' : $event_link;
                        ?>
                        <li>
                            <a href="<?php echo esc_url($eventlink); ?>">
                                <div class="date_wrapper <?php echo esc_attr($event_date_layout); ?>">
                                    <?php if ($event_date_layout == 'above'): ?>
                                        <div class="date_above"><?php echo esc_html(date('F d, Y', strtotime($start_date))); ?></div>
                                    <?php else: ?>
                                        <div class="day"><?php echo esc_html(date('j', strtotime($start_date))); ?></div>
                                        <div class="month"><?php echo esc_html(date('M', strtotime($start_date))); ?></div>
                                    <?php endif; ?>
                                </div>

                                <div class="event_title">
                                    <h4><?php echo esc_html($title); ?></h4>
                                    <?php if ($default_to_show_time == 'yes'): ?>
                                        <p class="default_to_show_time_formate">
                                            <?php if (!empty($start_date)): ?>
                                                <?php echo esc_html(date($default_to_show_time_formate, strtotime($start_date))); ?>
                                            <?php endif; ?>
                                            <?php if (!empty($end_date)): ?>
                                                <?php echo ' - ' . esc_html(date($default_to_show_time_formate, strtotime($end_date))); ?>
                                            <?php endif; ?>
                                        </p>
                                    <?php endif; ?>
                                </div>
                            </a>
                        </li>

                        <?php if ($atts['enable_event_detail'] == 'yes'): ?>
                            <div class="summary_cal_description">
                                <a href="<?php echo esc_url($event_link); ?>">
                                    <span class="time_icon"><i class="fa fa-clock-o"></i></span>
                                    <div class="summary_cal_data">
                                        <h3>Time</h3>
                                        <p>
                                            <?php if (!empty($start_date)): ?>
                                                <?php
                                                $day = date('l', strtotime($start_date));
                                                $startdate = date('jS', strtotime($start_date));
                                                ?>
                                                (<?php echo esc_html($day) . ' ' . esc_html($startdate); ?>) <?php echo esc_html(date($default_to_show_time_formate, strtotime($start_date))); ?>
                                            <?php endif; ?>

                                            <?php if (!empty($end_date)): ?>
                                                <?php
                                                $endday = date('l', strtotime($end_date));
                                                $enddate = date('jS', strtotime($end_date));
                                                ?>
                                                - (<?php echo esc_html($endday) . ' ' . esc_html($enddate); ?>) <?php echo esc_html(date($default_to_show_time_formate, strtotime($end_date))); ?>
                                            <?php endif; ?>
                                        </p>
                                    </div>
                                </a>
                            </div>
                        <?php endif; ?>

                        <div class="between_line_wrapper"><span class="between_lines"></span></div>

                    <?php endforeach; ?>
                </ul>

                <?php
                $limit = $event_limit < $total_events;
                if (isset($atts['hide_show_more']) && empty($atts['hide_show_more']) && $limit):
                    ?>
                    <p class="show_more_events">Show More Events</p>
                <?php else: ?>
                    <p class="no_events">No more events found</p>
                <?php endif; ?>

                <input type="hidden" name="hd_limit_offset" id="hd_limit_offset"
                       value="<?php echo esc_attr($limit_offset); ?>" autocomplete="off"/>
                <input type="hidden" name="hd_offset" id="hd_offset" value="<?php echo esc_attr($offset); ?>"
                       autocomplete="off"/>
            <?php else: ?>
                <p class="no_events">No more events found</p>
            <?php endif; ?>

        <?php else: ?>
            <p class="no_events">No more events found</p>
        <?php endif;

        wp_reset_postdata();
        return $output;
    }


    public function getAllYears()
    {

        global $wpdb;
        $year_query = "SELECT DISTINCT `meta_value` FROM $wpdb->postmeta WHERE `meta_key` LIKE '_EventStartDate' ORDER BY `meta_value` ASC";
        $years = $wpdb->get_results($year_query, OBJECT);

        $all_years = [];
        if (!empty($years)):
            foreach ($years as $key => $year):
                $all_years[] = date('Y', strtotime($year->meta_value));
            endforeach;
            $all_years = array_unique($all_years);
        endif;
        return $all_years;
        wp_die();
    }

    public function getAllMonths()
    {
        $all_months = array(
            '01' => 'January',
            '02' => 'February',
            '03' => 'March',
            '04' => 'April',
            '05' => 'May',
            '06' => 'June',
            '07' => 'July',
            '08' => 'August',
            '09' => 'September',
            '10' => 'October',
            '11' => 'November',
            '12' => 'December',
        );

        return $all_months;
        wp_die();
    }

    public function getSummaryListAjax($request)
    {
        if (isset($request['month_year']) && !empty($request)):
            $month_year = sanitize_text_field($request['month_year']);
        else:
            $month_year = sanitize_text_field($request['year'] . '-' . $request['month']);
        endif;

        $atts = array(
            'month' => $month_year,
        );

        if (isset($request['limit']) && !empty($request)):
            $atts['limit'] = intval($request['limit']);
        endif;

        if (isset($request['event_date_layout'])):
            $atts['event_date_layout'] = sanitize_text_field($request['event_date_layout']);
        endif;

        if (isset($request['enable_event_detail'])):
            $atts['enable_event_detail'] = sanitize_text_field($request['enable_event_detail']);
        endif;

        if (isset($request['disable_link'])):
            $atts['disable_link'] = sanitize_text_field($request['disable_link']);
        endif;

        if (isset($request['hide_past_events'])):
            $atts['hide_past_events'] = sanitize_text_field($request['hide_past_events']);
        endif;

        if (isset($request['show_future_events'])):
            $atts['show_future_events'] = sanitize_text_field($request['show_future_events']);
        endif;

        if (isset($request['action'])):
            $atts['ajax_request'] = $request['action'];
        endif;

        if (isset($request['offset'])):
            $atts['offset'] = intval($request['offset']);
        endif;

        if (isset($request['default_to_show_time'])):
            $atts['default_to_show_time'] = sanitize_text_field($request['default_to_show_time']);
        endif;

        if (isset($request['default_to_show_time_formate'])):
            $atts['default_to_show_time_formate'] = sanitize_text_field($request['default_to_show_time_formate']);
        endif;


        if (isset($request['start_date'])):
            $atts['start_date'] = sanitize_text_field($request['start_date']);
        endif;

        if (isset($request['end_date'])):
            $atts['end_date'] = sanitize_text_field($request['end_date']);
        endif;

        if (isset($request['order'])):
            $atts['order'] = sanitize_text_field($request['order']);
        endif;

        if (isset($request['eventDisplay'])):
            $atts['eventDisplay'] = sanitize_text_field($request['eventDisplay']);
        endif;

        if (isset($request['posts_per_page'])):
            $atts['posts_per_page'] = sanitize_text_field($request['posts_per_page']);
        endif;

        if (isset($request['event_categories'])):
            $atts['event_categories'] = $request['event_categories'];
        endif;

        // $args['start_date']     = $start_date; event_categories
        // $args['end_date']       = $end_date;
        // $args['order']          = $atts['order'];
        // $args['eventDisplay'] 	 = ( 'custom' == $atts['start_date'] or 'custom' == $atts['end_date'] ) ? 'custom' : 'all';
        // $args['posts_per_page'] = $atts['limit'];

        $this->ee_mb_fetch_events($atts);
    }

    /*@ Calendar view*/
    public function getCalendarView($settings)
    {

        $enable_event_detail = $settings['enable_event_detail'];
        $default_to_show_time = $settings['default_to_show_time'];
        $disable_link = $settings['disable_link'];

        $events = $this->eeMbGetEventList($settings);

        /*
		*@ If event present then show otherwise display not found message
		*/
        if (!empty($events)):
            $count = 0;
            foreach ($events as $event_key => $event):
                $event_id = $event->ID;
                $event_title = $event->post_title;
                $event_excerpt = $event->post_excerpt;
                $event_link = get_the_permalink($event_id);

                $event_start_date = $event_end_date = '';

                $event_meta = get_post_meta($event_id);
                if (!empty($event_meta['_EventStartDate'][0])):
                    $event_start_date = $event_meta['_EventStartDate'][0];
                    // $event_start_date = date('Y-m-d',strtotime($event_start_date));
                endif;

                if (!empty($event_meta['_EventEndDate'][0])):
                    $event_end_date = $event_meta['_EventEndDate'][0];
                    // $event_end_date = date('Y-m-d',strtotime($event_end_date));
                endif;

                $event_data[$count]['title'] = esc_attr($event_title);
                $event_data[$count]['excerpt'] = esc_attr($event_excerpt);
                $event_data[$count]['start'] = $event_start_date;
                $event_data[$count]['end'] = $event_end_date;
                $event_data[$count]['url'] = ($enable_event_detail == 'yes' || (!empty($disable_link) && $disable_link == 'yes')) ? 'javascript:void(0);' : esc_url($event_link);
                $count++;
            endforeach;
        endif;

        $calendar_id = uniqid();
        $calendar_data = json_encode(@$event_data, JSON_PRETTY_PRINT);
        $enable_event_detail = esc_attr($enable_event_detail);
        $disable_link = esc_attr($disable_link);
        $date_border = esc_attr($settings['eb_date_border_border']);
        ?>

        <div class='tec myeventon_calendar' data-id='<?php echo $calendar_id; ?>' data-caldata='<?php echo $calendar_data; ?>' data-event-detail='<?php echo $enable_event_detail; ?>' data-disable-link='<?php echo $disable_link; ?>' data-date-border='<?php echo $date_border; ?>'>
            <div id='calendar-<?php echo $calendar_id; ?>'></div>
        </div>

        <?php if ($enable_event_detail == 'yes'): ?>
            <div class="myeventon_calendar_summaryview"></div>
        <?php endif;

    }

   /*@ Event list below calendar*/
    public function getEventListByDay($request)
    {
        if (!empty($request['date'])):
            $posts = get_posts(array(
                'post_type' => 'tribe_events',
                'post_status' => 'publish',
                'hide_upcoming' => true,
                'posts_per_page' => -1,
                'meta_query' => array(
                    array(
                        'key' => '_EventStartDate',
                        'value' => $request['date'],
                        'compare' => '=',
                        'type' => 'DATE'
                    ),
                ),
            ));

            if (!empty($posts)):
                ?>
                <ul>
                    <?php foreach ((array)$posts as $post_index => $post):
                        $id = $post->ID;

                        $start_date = get_post_meta($id, '_EventStartDate');
                        $end_date = get_post_meta($id, '_EventEndDate');

                        /*@ Event start date */
                        $event_start_date = '';
                        if (!empty($start_date[0])):
                            $event_start_date = $start_date[0];
                            $start_time = date('H:i:s', strtotime($event_start_date));
                        endif;

                        /*@ Event end date */
                        $event_end_date = '';
                        if (!empty($end_date[0])):
                            $event_end_date = $end_date[0];
                            $end_time = date('H:i:s', strtotime($event_end_date));
                        endif;

                        $event_link = 'javascript:void(0);';
                        $event_meta = get_post_meta($id);
                        $event_inner_page_link = '';

                        if (empty($request['disable_link'])):
                            if (!empty($event_meta['_ee_mb_event_external_link'][0])):
                                $event_link = $event_meta['_ee_mb_event_external_link'][0];
                            elseif (!empty($event_inner_page_link)):
                                $event_link = get_the_permalink($event_inner_page_link);
                            else:
                                $event_link = get_the_permalink($id);
                            endif;
                        endif;
                        ?>
                        <li>
                            <a href="javascript:void(0);">
                                <div class="date_wrapper">
                                    <div class="day"><?php echo date('j', strtotime($request['date'])); ?></div>
                                    <div class="month"><?php echo date('M', strtotime($request['date'])); ?></div>
                                </div>

                                <div class="event_title">
                                    <h4><?php echo $post->post_title; ?></h4>
                                </div>
                            </a>

                            <div class="summary_cal_description">
                                <a href="<?php echo esc_url($event_link); ?>">
                                    <span class="time_icon"><i class="fa fa-clock-o"></i></span>

                                    <div class="summary_cal_data">
                                        <h3>Time</h3>
                                        <p>
                                            <?php if (!empty($event_start_date)):
                                                $day = date('l', strtotime($event_start_date));
                                                echo '(' . $day . ') ' . date('h:i', strtotime($event_start_date));
                                            endif;

                                            if (!empty($event_end_date)):
                                                echo ' - ' . date('h:i', strtotime($event_end_date));
                                            endif; ?>
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </li>
                    <?php endforeach; ?>
                </ul>
            <?php else: ?>
                <p class="no_events">No more events found</p>
            <?php endif;
        endif;
        wp_die();
    }


    public function build_venue($id)
    {

        try {
            $address = tribe_get_address($id);
            $country = tribe_get_country($id);
            $city = tribe_get_city($id);
            $state_province = tribe_get_stateprovince($id);
            // $state                 = tribe_get_state( $id );
            $province = tribe_get_province($id);
            $zip = tribe_get_zip($id);

            $properties = [
                'address' => $address,
                'country' => $country,
                'city' => $city,
                'state_province' => $state_province,
                // 'state'                 => $state,
                'province' => $province,
                'zip' => $zip,
            ];
        } catch (\Exception $e) {
            return [];
        }

        return $properties;
    }

    protected function content_template()
    {

    }

    public function is_tac_installed_activated() {

        // Ensure the necessary files for get_plugins() are included
        if (!function_exists('get_plugins')) {
            require_once ABSPATH . 'wp-admin/includes/plugin.php';
        }

        $plugin = 'the-events-calendar/the-events-calendar.php';
        $installed_plugins = get_plugins();
        $admin_url = get_admin_url();

        if (isset($installed_plugins[$plugin]) && !is_plugin_active($plugin)) {
            if (!current_user_can('activate_plugins')) {
                return;
            }

            $activation_url = wp_nonce_url($admin_url . 'plugins.php?action=activate&amp;plugin=' . $plugin . '&amp;plugin_status=all&amp;paged=1&amp;s', 'activate-plugin_' . $plugin);
            $message = __('Please activate The Event Calendar plugin.', 'elementor-extensions');
            $button_text = __('Activate The Event Calendar Now', 'elementor-extensions');

            ob_start();
            ?>
            <div class="error">
                <p><?php echo esc_html($message); ?></p>
                <p><a href="<?php echo esc_url($activation_url); ?>" class="button-primary" target="_blank"><?php echo esc_html($button_text); ?></a></p>
            </div>
            <?php
            return ob_get_clean();

        } else if (!isset($installed_plugins[$plugin])) {
            if (!current_user_can('install_plugins')) {
                return;
            }

            $install_url = wp_nonce_url(self_admin_url('update.php?action=install-plugin&plugin=the-events-calendar'), 'install-plugin_the_events_calendar');
            $message = __('Please install The Event Calendar plugin', 'elementor-extensions');
            $button_text = __('Install The Event Calendar Now', 'elementor-extensions');

            ob_start();
            ?>
            <div class="error">
                <p><?php echo esc_html($message); ?></p>
                <p><a href="<?php echo esc_url($install_url); ?>" class="button-primary"><?php echo esc_html($button_text); ?></a></p>
            </div>
            <?php
            return ob_get_clean();
        }

        return false;
    }

}