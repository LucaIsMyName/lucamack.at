<?php
// Get Custom Logo to insert in Page
function get_custom_logo_url()
{
    $custom_logo_id = get_theme_mod('custom_logo');
    // var_dump( $custom_logo_id);
    $image = wp_get_attachment_image_src($custom_logo_id, 'full');
    return $image[0];
}

// Get Bloginfo as simple Var
$blogInfo = esc_attr(get_bloginfo('name'));
$blogDesc = esc_attr(get_bloginfo('description'));
// Get Blog URL as simple Var
$blogUrl = esc_url(home_url('/'));

?>
<!DOCTYPE html>
<html class="" <?php language_attributes(); ?> <?php template_schema_type(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>" />
    <meta name="viewport" content="width=device-width" />
    <meta name="description" content="<?= $blogInfo . ' | ' . $blogDesc ?>">
    <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
    <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000000" />
    <link rel="stylesheet" href="https://use.typekit.net/hju5roj.css">


    <?php wp_head(); ?>

    <link rel="stylesheet" href="<?= get_template_directory_uri() ?>/js/aos/aos.css">
    <!-- <link rel="stylesheet" href="<?= get_template_directory_uri() ?>/js/swiper/swiper.css"> -->

    <!-- Aos API Start -->
    <script defer src="<?= get_template_directory_uri() ?>/js/aos/aos.js"></script>
    <script defer src="<?= get_template_directory_uri() ?>/js/aos/aos-modules.js"></script>
    <!-- Aos API End -->

    <!-- tooltip libraries start -->
    <script defer src="<?= get_template_directory_uri() ?>/js/popper/popper.min.js"></script>
    <script defer src="<?= get_template_directory_uri() ?>/js/tippy/tippy.min.js"></script>
    <!-- tooltip libraries end -->
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/two.js/0.7.0/two.min.js"></script> -->

    <!-- simple lightbox  -->
    <link rel="stylesheet" href="<?= get_template_directory_uri() ?>/js/simple-lightbox/simple-lightbox.min.css">
    <script src="<?= get_template_directory_uri() ?>/js/simple-lightbox/simple-lightbox.min.js" defer></script>

    <!-- custom scripts -->
    <script defer src="<?= get_template_directory_uri() ?>/js/viewport-transitions.min.js"></script>
    <script defer src="<?= get_template_directory_uri() ?>/js/accordion.min.js"></script>
    <script defer src="<?= get_template_directory_uri() ?>/js/tables.min.js"></script>
    <script defer src="<?= get_template_directory_uri() ?>/js/viewport.min.js"></script>
    <script defer src="<?= get_template_directory_uri() ?>/js/scroll-state.min.js"></script>
    <script defer src="<?= get_template_directory_uri() ?>/js/audioplayer.min.js"></script>
    <script defer src="<?= get_template_directory_uri() ?>/js/tabs.min.js"></script>
    <script defer src="<?= get_template_directory_uri() ?>/js/tooltip.min.js"></script>
    <script defer src="<?= get_template_directory_uri() ?>/js/modal.min.js"></script>
    <script defer src="<?= get_template_directory_uri() ?>/js/marquee.min.js"></script>
    <script defer src="<?= get_template_directory_uri() ?>/js/flip-content.min.js"></script>
    <script defer src="<?= get_template_directory_uri() ?>/js/table-of-contents.min.js"></script>
    <script defer src="<?= get_template_directory_uri() ?>/js/tooltip.min.js"></script>
    <script defer src="<?= get_template_directory_uri() ?>/js/images.min.js"></script>
    <script defer src="<?= get_template_directory_uri() ?>/js/mobile-nav.min.js"></script>
    <script defer src="<?= get_template_directory_uri() ?>/js/dark-mode.min.js"></script>
    <script defer src="<?= get_template_directory_uri() ?>/js/external-links.min.js"></script>
    <script defer src="<?= get_template_directory_uri() ?>/js/language.min.js"></script>
    <script defer src="<?= get_template_directory_uri() ?>/js/nightshift.min.js"></script>
    <script defer src="<?= get_template_directory_uri() ?>/js/tippy.min.js" type="module"></script>
    <script defer src="<?= get_template_directory_uri() ?>/js/magnifier.min.js" type="module"></script>
    <script defer src="<?= get_template_directory_uri() ?>/js/gallery.min.js" type="module"></script>
    <script defer src="<?= get_template_directory_uri() ?>/js/post-types.js" type="module"></script>
    <script defer src="<?= get_template_directory_uri() ?>/js/letter-flip.js" type="module"></script>
    <script defer src="<?= get_template_directory_uri() ?>/js/animate.js" type="module"></script>
    <script defer src="<?= get_template_directory_uri() ?>/js/tilde-to-umlaut.js" type="module"></script>
    <script defer src="<?= get_template_directory_uri() ?>/js/underline.js" type="module"></script>
    <!-- <script defer src="<?= get_template_directory_uri() ?>/js/object-info.min.js"></script> -->
    <!-- <script>
        /**
         * select the nearest class to any element with accessibility issues
         * this will be rendered in the console
         * and will give you more overview
         * the object is optional
         */
        const accessibilityJs = {
            nearestParent: '.block',
        }
    </script>
    <script defer src="<?= get_template_directory_uri() ?>/js/accessibility.min.js"></script> -->

    <!-- <script defer src="<?= get_template_directory_uri() ?>/js/accessibility.min.js"></script> -->

</head>

<body color-theme="light" id="body" <?php body_class(); ?> data-scroll-state>
    <?php wp_body_open(); ?>
    <div id="wrapper" class="">
        <header class="[ header ]" role="banner">
            <div class="[ brand ]">
                <div class="" itemprop="publisher" itemscope itemtype="https://schema.org/Organization">

                    <?=
                        '<h1>
                    <a class="[ logo ]" href="' . $blogUrl . '" title="' . $blogInfo . '" rel="home" itemprop="url">
                        <img width="64px" height="64px" alt="' . $blogInfo . ' Logo" height="" src="' . get_custom_logo_url() . '" alt="' . $blogInfo . '">
                        
                        <span class="[ blog-info ] vh">' . $blogInfo . '</span>
                    </a>
                    <h1>';
                    ?>

                </div>
                <!-- <form method="GET" action="/?" class="search-container">
                    <input list="autocomplete" name="s" placeholder="Suche" class="search-input" type="search" />
                    <datalist id="autocomplete">
                        <option value="Design">Design</option>
                        <option value="Development">Development</option>
                        <option value="Projekte">Projekte</option>
                        <option value="Kontakt">Kontakt</option>
                    </datalist>
                </form> -->
                <section class="[ navigations ]">
                    <?php include 'actions-nav.php'; ?>
                    <!-- <div class="vr"></div> -->
                    <nav class="desktop-nav" role="navigation" itemscope
                        itemtype="https://schema.org/SiteNavigationElement">
                        <div class="[ nav ]">
                            <?php
                            wp_nav_menu(array('theme_location' => 'main-menu', 'link_before' => '<span itemprop="name" class="[ main-nav-item ]">', 'link_after' => '</span>'));
                            ?>
                            <!-- <div class="[ nav-action ]">
                                <?php
                                wp_nav_menu(array('theme_location' => 'action-menu', 'link_before' => '<div itemprop="name" class="[ action-nav-item ]">', 'link_after' => '</div>'));
                                ?>
                            </div> -->
                        </div>
                    </nav>

                    <!-- <div class="vr"></div> -->
                    <section class="[ toggle-mobile-nav ]">
                        <button data-mobile-nav="open" title="Main Navigation Open" class="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.25"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                            </svg>
                        </button>
                    </section>
                </section>
        </header>

        <!-- Mobile Nav Start -->
        <div id="mobile-nav" data-mobile-nav="container" data-mobile-nav-active="false" class="[ mobile-nav-container ]"
            title="Main Mobile Navigation Open">
            <nav class="[  ]">
                <section class="[ brand ]">
                    <a href="<?= $blogUrl ?>" class="[ logo ]">
                        <img data-logo height="" class="" src="<?= get_custom_logo_url() ?>" alt="<?= $blogInfo ?>">
                    </a>
                    <!-- <form method="GET" action="/?" class="search-container">
                        <input list="autocomplete" name="s" placeholder="Suche" class="search-input" type="search" />
                        <datalist id="autocomplete">
                            <option value="Design">Design</option>
                            <option value="Development">Development</option>
                            <option value="Projekte">Projekte</option>
                            <option value="Kontakt">Kontakt</option>
                        </datalist>
                    </form> -->
                    <div class="actions">
                        <?php include 'actions-nav.php'; ?>
                        <button data-mobile-nav="close" class="[ close ]" title="Main Mobile Navigation Close">
                            <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                                class="feather feather-x">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                </section>
                <div class="[ navigations ]">
                    <section class="[ mobile-main-nav ]">
                        <?php
                        wp_nav_menu(array('theme_location' => 'main-menu', 'link_before' => '<span class="[ main-nav-item ] gradient-text"><span itemprop="name" >', 'link_after' => '</span></span>'));
                        ?>
                    </section>
                    <section class="[ mobile-footer-nav ]">
                        <?php
                        wp_nav_menu(array('theme_location' => 'footer-menu', 'link_before' => '<span itemprop="name" class="[ footer-nav-item ]">', 'link_after' => '</span>'));
                        ?>
                    </section>
                </div>
            </nav>
            <div class="actions-navigation ">
                <button class="d-none sm-d-flex" data-phrase="Nacht Modus" tooltip="Nacht Modus"
                    tooltip-z-index="100000" tooltip-offset-y="5" tooltip-placement="bottom" tooltip-strategy="fixed"
                    tooltip-trigger="mouseenter focus" tooltip-append-to="parent" title="Turn on Nightshift"
                    nightshift-toggle class="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                </button>
                <!-- <div class="vr"></div> -->
                <button class="d-none sm-d-flex" data-phrase="Dunkler Modus" tooltip="Dunkler Modus"
                    tooltip-z-index="100000" tooltip-placement="bottom" tooltip-offset-y="5" tooltip-strategy="fixed"
                    tooltip-trigger="mouseenter focus" title="Toggle Dark Mode" dark-mode-toggle class="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                    </svg>
                </button>

                <!-- <div class="vr"></div> -->
            </div>
        </div>
        <!-- Mobile Nav End -->

        <div class="[ page-content ]" id="page-content">
            <main class="[ main-container ]" role="main">