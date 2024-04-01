<?php

add_action('after_setup_theme', 'template_setup');
function template_setup()
{
    load_theme_textdomain('components', get_template_directory() . '/languages');
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('responsive-embeds');
    add_theme_support('automatic-feed-links');
    add_theme_support('html5', array('search-form', 'navigation-widgets'));
    add_theme_support('woocommerce');
    add_theme_support('custom-logo');
    global $content_width;
    if (!isset($content_width)) {
        $content_width = 1920;
    }
    register_nav_menus(array('main-menu' => esc_html__('Main Menu', 'components')));
    register_nav_menus(array('footer-menu' => esc_html__('Footer Menu', 'components')));
    register_nav_menus(array('action-menu' => esc_html__('Action Menu', 'components')));
    register_nav_menus(array('lang-menu' => esc_html__('Language Menu', 'components')));
}

add_action('wp_enqueue_scripts', 'template_enqueue');
function template_enqueue()
{
    // wp_enqueue_style('template-style', get_stylesheet_uri());
    wp_enqueue_style('template-style', get_template_directory_uri() . '/style.css', array(), time());

    // wp_enqueue_script('jquery');
}

// var_dump(get_stylesheet_uri());
add_action('wp_footer', 'template_footer');
function template_footer()
{
    ?>

    <?php
}
add_filter('document_title_separator', 'template_document_title_separator');
function template_document_title_separator($sep)
{
    $sep = esc_html('|');
    return $sep;
}
add_filter('the_title', 'template_title');
function template_title($title)
{
    if ($title == '') {
        return esc_html('...');
    } else {
        return wp_kses_post($title);
    }
}
function template_schema_type()
{
    $schema = 'https://schema.org/';
    if (is_single()) {
        $type = "Article";
    } elseif (is_author()) {
        $type = 'ProfilePage';
    } elseif (is_search()) {
        $type = 'SearchResultsPage';
    } else {
        $type = 'WebPage';
    }
    echo 'itemscope itemtype="' . esc_url($schema) . esc_attr($type) . '"';
}
add_filter('nav_menu_link_attributes', 'template_schema_url', 10);
function template_schema_url($atts)
{
    $atts['itemprop'] = 'url';
    return $atts;
}
if (!function_exists('template_wp_body_open')) {
    function template_wp_body_open()
    {
        do_action('wp_body_open');
    }
}

add_filter('the_content_more_link', 'template_read_more_link');
function template_read_more_link()
{
    if (!is_admin()) {
        return ' <a href="' . esc_url(get_permalink()) . '" class="more-link">' . sprintf(__('...%s', 'components'), '<span class="screen-reader-text">  ' . esc_html(get_the_title()) . '</span>') . '</a>';
    }
}
add_filter('excerpt_more', 'template_excerpt_read_more_link');
function template_excerpt_read_more_link($more)
{
    if (!is_admin()) {
        global $post;
        return ' <a href="' . esc_url(get_permalink($post->ID)) . '" class="more-link">' . sprintf(__('...%s', 'components'), '<span class="screen-reader-text">  ' . esc_html(get_the_title()) . '</span>') . '</a>';
    }
}
add_filter('big_image_size_threshold', '__return_false');
add_filter('intermediate_image_sizes_advanced', 'template_image_insert_override');
function template_image_insert_override($sizes)
{
    unset($sizes['medium_large']);
    unset($sizes['1536x1536']);
    unset($sizes['2048x2048']);
    return $sizes;
}
add_action('widgets_init', 'template_widgets_init');
function template_widgets_init()
{
    register_sidebar(
        array(
            'name' => esc_html__('Sidebar Widget Area', 'components'),
            'id' => 'primary-widget-area',
            'before_widget' => '<li id="%1$s" class="widget-container %2$s">',
            'after_widget' => '</li>',
            'before_title' => '<h3 class="widget-title">',
            'after_title' => '</h3>',
        )
    );
}
add_action('wp_head', 'template_pingback_header');
function template_pingback_header()
{
    if (is_singular() && pings_open()) {
        printf('<link rel="pingback" href="%s" />' . "\n", esc_url(get_bloginfo('pingback_url')));
    }
}
add_action('comment_form_before', 'template_enqueue_comment_reply_script');
function template_enqueue_comment_reply_script()
{
    if (get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}
function template_custom_pings($comment)
{
    ?>
    <li <?php comment_class(); ?> id="li-comment-<?php comment_ID(); ?>">
        <?php echo esc_url(comment_author_link()); ?>
    </li>
    <?php
}
add_filter('get_comments_number', 'template_comment_count', 0);
function template_comment_count($count)
{
    if (!is_admin()) {
        global $id;
        $get_comments = get_comments('status=approve&post_id=' . $id);
        $comments_by_type = separate_comments($get_comments);
        return count($comments_by_type['comment']);
    } else {
        return $count;
    }
}

// Add Excerpt
add_post_type_support('page', 'excerpt');

// Disbale Comments

function df_disable_comments_post_types_support()
{
    $post_types = get_post_types();
    foreach ($post_types as $post_type) {
        if (post_type_supports($post_type, 'comments')) {
            remove_post_type_support($post_type, 'comments');
            remove_post_type_support($post_type, 'trackbacks');
        }
    }
}
add_action('admin_init', 'df_disable_comments_post_types_support');

// Close comments on the front-end
function df_disable_comments_status()
{
    return false;
}
add_filter('comments_open', 'df_disable_comments_status', 20, 2);
add_filter('pings_open', 'df_disable_comments_status', 20, 2);

// Hide existing comments
function df_disable_comments_hide_existing_comments($comments)
{
    $comments = array();
    return $comments;
}
add_filter('comments_array', 'df_disable_comments_hide_existing_comments', 10, 2);

// Remove comments page in menu
function df_disable_comments_admin_menu()
{
    remove_menu_page('edit-comments.php');
}
add_action('admin_menu', 'df_disable_comments_admin_menu');

// Redirect any user trying to access comments page
function df_disable_comments_admin_menu_redirect()
{
    global $pagenow;
    if ($pagenow === 'edit-comments.php') {
        wp_redirect(admin_url());
        exit;
    }
}
add_action('admin_init', 'df_disable_comments_admin_menu_redirect');

// Remove comments metabox from dashboard
function df_disable_comments_dashboard()
{
    remove_meta_box('dashboard_recent_comments', 'dashboard', 'normal');
}
add_action('admin_init', 'df_disable_comments_dashboard');

// Remove comments links from admin bar
function df_disable_comments_admin_bar()
{
    if (is_admin_bar_showing()) {
        remove_action('admin_bar_menu', 'wp_admin_bar_comments_menu', 60);
    }
}
add_action('init', 'df_disable_comments_admin_bar');

$lazyblocks = array(
    'blueprint',
    'text',
    'block',
    'image',
    'card',
    'form',
    'hero',
    'slider',
    'heading',
    'horizontal-scroll-container',
    'horizontal-scroll-item',
    'table-of-contents',
    'divider',
    'buttons',
    'sidebar',
    'info-panel',
    'modal',
    'link',
    'marquee',
    'feed',
    'accordion',
    'accordion-group',
    'accordion-item',
    'accordion-title',
    'accordion-content',
    'tabs',
    'audioplayer',
    'columns-two',
    'columns-three',
    'columns-four',
    'columns-fluid',
    'description-list',
    'sticky',
);

foreach ($lazyblocks as $lazyblock) {
    add_filter('lazyblock/' . $lazyblock . '/frontend_allow_wrapper', '__return_false');
}

/**
 * Disable WP/Gutenberg Default Stylesheet
 */
function disable_gutenberg_wp_enqueue_scripts()
{
    wp_dequeue_style('wp-block-library');
    wp_dequeue_style('wp-block-library-theme');
    wp_dequeue_style('global-styles');
}
add_filter('wp_enqueue_scripts', 'disable_gutenberg_wp_enqueue_scripts', 100);



function cc_mime_types($mimes)
{
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');

// function get_custom_logo_url()
// {
//     $custom_logo_id = get_theme_mod('custom_logo');
//     // var_dump( $custom_logo_id);
//     $image = wp_get_attachment_image_src($custom_logo_id, 'full');
//     return $image[0];
// }

// add_action("init", function () {
//     // TODO: Replace with the actual page ID or title
//     if (!is_page("page-without-cache"))
//         return;

//     header("Cache-Control: no-cache, no-store, must-revalidate"); // HTTP 1.1.
//     header("Pragma: no-cache"); // HTTP 1.0.
//     header("Expires: 0"); // Proxies.
// }, 10);

// Add backend styles for Gutenberg.
add_action('enqueue_block_editor_assets', 'gutenberg_editor_assets');

function gutenberg_editor_assets()
{
    // Load the theme styles within Gutenberg.
    wp_enqueue_style('my-gutenberg-editor-styles', get_theme_file_uri('/gutenberg-editor-styles.css'));
}

/**
 * Enable vCard Upload 
 *
 */
function be_enable_vcard_upload($mime_types)
{
    $mime_types['vcf'] = 'text/vcard';
    return $mime_types;
}
add_filter('upload_mimes', 'be_enable_vcard_upload');



function getIcon($icon = "arrow-up")
{
    $getIcon = file_get_contents(get_theme_file_uri('\/icons\/' . $icon . '.svg'));
    var_dump($getIcon);
    return $getIcon;
}