<?php

if (!class_exists('acf_field_true_false')) :

    class acf_field_true_false extends acf_field
    {


        /*
        *  __construct
        *
        *  This function will setup the field type data
        *
        *  @type    function
        *  @date    5/03/2014
        *  @since   5.0.0
        *
        *  @param   n/a
        *  @return  n/a
        */

        function initialize()
        {

            // vars
            $this->name = 'true_false';
            $this->label = __('True / False', 'acf');
            $this->category = 'choice';
            $this->defaults = array(
                'default_value' => 0,
                'message' => '',
                'ui' => 0,
                'ui_on_text' => '',
                'ui_off_text' => '',
            );

        }


        /*
        *  render_field()
        *
        *  Create the HTML interface for your field
        *
        *  @param   $field - an array holding all the field's data
        *
        *  @type    action
        *  @since   3.6
        *  @date    23/01/13
        */

        function render_field($field)
        {

            // vars
            $input = array(
                'type' => 'checkbox',
                'id' => $field['id'],
                'name' => $field['name'],
                'value' => '1',
                'class' => $field['class'],
                'autocomplete' => 'off',
            );

            $hidden = array(
                'name' => $field['name'],
                'value' => 0,
            );

            $active = $field['value'] ? true : false;

            // checked
            if ($active) {
                $input['checked'] = 'checked';
            }

            // ui
            if ( $field['ui'] ) {

                // vars
                if ( $field['ui_on_text'] === '' ) {
                    $field['ui_on_text'] = esc_html__( 'Yes', 'acf' );
                }
                if ( $field['ui_off_text'] === '' ) {
                    $field['ui_off_text'] = esc_html__( 'No', 'acf' );
                }

                // update input
                $input['class'] .= ' acf-switch-input';

                ob_start();
                ?>
                <div class="acf-switch<?php echo $active ? ' -on' : ''; ?>">
                    <span class="acf-switch-on"><?php echo esc_html( $field['ui_on_text'] ); ?></span>
                    <span class="acf-switch-off"><?php echo esc_html( $field['ui_off_text'] ); ?></span>
                    <div class="acf-switch-slider"></div>
                </div>
                <?php
                $switch = ob_get_clean();
            }


            ?>
            <div class="acf-true-false">
            <?php acf_hidden_input($hidden); ?>
            <label>
            <input <?php echo acf_esc_attr($input); ?>/>
            <?php
            if ($switch) {
                ?>
                <div class="acf-switch<?php echo esc_attr(($active ? ' -on' : '')); ?>">
                    <span class="acf-switch-on"><?php echo esc_html($field['ui_on_text']); ?></span>
                    <span class="acf-switch-off"><?php echo esc_html($field['ui_off_text']); ?></span>
                    <div class="acf-switch-slider"></div>
                </div>
                <?php
                if ($field['message']) :
                    ?>
                    <span class="message"><?php echo acf_esc_html($field['message']); ?></span><?php endif; ?>
                </label>
                </div>
                <?php

            }
        }


        /*
        *  render_field_settings()
        *
        *  Create extra options for your field. This is rendered when editing a field.
        *  The value of $field['name'] can be used (like bellow) to save extra data to the $field
        *
        *  @type    action
        *  @since   3.6
        *  @date    23/01/13
        *
        *  @param   $field  - an array holding all the field's data
        */

        function render_field_settings($field)
        {

            // message
            acf_render_field_setting(
                $field,
                array(
                    'label' => __('Message', 'acf'),
                    'instructions' => __('Displays text alongside the checkbox', 'acf'),
                    'type' => 'text',
                    'name' => 'message',
                )
            );

            // default_value
            acf_render_field_setting(
                $field,
                array(
                    'label' => __('Default Value', 'acf'),
                    'instructions' => '',
                    'type' => 'true_false',
                    'name' => 'default_value',
                )
            );

            // ui
            acf_render_field_setting(
                $field,
                array(
                    'label' => __('Stylised UI', 'acf'),
                    'instructions' => '',
                    'type' => 'true_false',
                    'name' => 'ui',
                    'ui' => 1,
                    'class' => 'acf-field-object-true-false-ui',
                )
            );

            // on_text
            acf_render_field_setting(
                $field,
                array(
                    'label' => __('On Text', 'acf'),
                    'instructions' => __('Text shown when active', 'acf'),
                    'type' => 'text',
                    'name' => 'ui_on_text',
                    'placeholder' => __('Yes', 'acf'),
                    'conditions' => array(
                        'field' => 'ui',
                        'operator' => '==',
                        'value' => 1,
                    ),
                )
            );

            // on_text
            acf_render_field_setting(
                $field,
                array(
                    'label' => __('Off Text', 'acf'),
                    'instructions' => __('Text shown when inactive', 'acf'),
                    'type' => 'text',
                    'name' => 'ui_off_text',
                    'placeholder' => __('No', 'acf'),
                    'conditions' => array(
                        'field' => 'ui',
                        'operator' => '==',
                        'value' => 1,
                    ),
                )
            );

        }


        /*
        *  format_value()
        *
        *  This filter is appied to the $value after it is loaded from the db and before it is returned to the template
        *
        *  @type    filter
        *  @since   3.6
        *  @date    23/01/13
        *
        *  @param   $value (mixed) the value which was loaded from the database
        *  @param   $post_id (mixed) the $post_id from which the value was loaded
        *  @param   $field (array) the field array holding all the field options
        *
        *  @return  $value (mixed) the modified value
        */

        function format_value($value, $post_id, $field)
        {

            return empty($value) ? false : true;

        }


        /*
        *  validate_value
        *
        *  description
        *
        *  @type    function
        *  @date    11/02/2014
        *  @since   5.0.0
        *
        *  @param   $post_id (int)
        *  @return  $post_id (int)
        */

        function validate_value($valid, $value, $field, $input)
        {

            // bail early if not required
            if (!$field['required']) {

                return $valid;

            }

            // value may be '0'
            if (!$value) {

                return false;

            }

            // return
            return $valid;

        }


        /*
        *  translate_field
        *
        *  This function will translate field settings
        *
        *  @type    function
        *  @date    8/03/2016
        *  @since   5.3.2
        *
        *  @param   $field (array)
        *  @return  $field
        */

        function translate_field($field)
        {

            // translate
            $field['message'] = acf_translate($field['message']);
            $field['ui_on_text'] = acf_translate($field['ui_on_text']);
            $field['ui_off_text'] = acf_translate($field['ui_off_text']);

            // return
            return $field;

        }

        /**
         * Return the schema array for the REST API.
         *
         * @param array $field
         * @return array
         */
        public function get_rest_schema(array $field)
        {
            $schema = array(
                'type' => array('boolean', 'null'),
                'required' => !empty($field['required']),
            );

            if (isset($field['default_value']) && '' !== $field['default_value']) {
                $schema['default'] = (bool)$field['default_value'];
            }

            return $schema;
        }

        /**
         * Apply basic formatting to prepare the value for default REST output.
         *
         * @param mixed $value
         * @param string|int $post_id
         * @param array $field
         * @return mixed
         */
        public function format_value_for_rest($value, $post_id, array $field)
        {
            return (bool)$value;
        }

    }

// initialize
acf_register_field_type( 'acf_field_true_false' );

endif;