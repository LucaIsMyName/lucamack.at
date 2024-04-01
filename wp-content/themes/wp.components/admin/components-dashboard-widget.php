<?php

/**
 * Add a new dashboard widget.
 */
function template_add_dashboard_widgets()
{
    wp_add_dashboard_widget(
        'template_dashboard_widget', // widget id
        'Template Dashboard', // widget title
        'template_dashboard_widget_function' // widget callback function
    );
}
add_action('wp_dashboard_setup', 'template_add_dashboard_widgets');

/**
 * Output the contents of the dashboard widget
 */
function template_dashboard_widget_function()
{
?>
<div>
<h2>Components Theme</h2>
<section>
    <p>PHP Info</p>
    <?php phpInfo(); ?>
</section>
</div>
<?php
}