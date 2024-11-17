<?php
$blogInfo = esc_attr(get_bloginfo('name'));
$blogUrl = esc_url(home_url('/'));
?>
</main>
</div>

<footer class="[ footer ]" role="contentinfo">
    <div data-footer-copyright class="[ brand ]">
        <a href="<?= $blogUrl ?>" class="[ logo ]">
            <img width="64px" height="64px" alt="<?php bloginfo('title'); ?> Logo" class=""
                src="<?= get_custom_logo_url() ?>">

        </a>
        <span class="">
            &copy;
            <?php bloginfo('title'); ?>
            <?php echo date("Y"); ?>
        </span>
    </div>
    <div class="[ nav-action ]">
        <!-- <?php
        wp_nav_menu(array('theme_location' => 'action-menu', 'link_before' => '<div class="" itemprop="name">', 'link_after' => '</div>'));
        ?>
         -->
        <?php include 'actions-nav.php'; ?>

    </div>
    <!-- <nav data-main-nav class="[ nav-main ]">
        <?php
        wp_nav_menu(array('theme_location' => 'main-menu', 'link_before' => '<div class=" " itemprop="name">', 'link_after' => '</div>'));
        ?>
    </nav> -->
    <nav data-secondary-nav class="[ nav-wrapper ]">

        <div class="[ nav-footer ]">
            <?php
            wp_nav_menu(array('theme_location' => 'footer-menu', 'link_before' => '<div class="" itemprop="name">', 'link_after' => '</div>'));
            ?>
        </div>
    </nav>
</footer>
<section class="to-top-container">
    <a href="#page-content" class="to-top-button" title="Zum Anfang" tooltip="Zum Anfang" tooltip-strategy="fixed" tooltip-offset-y="5"
        tooltip-placement="left">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
        </svg>
    </a>
</section>
<section class="nightshift-overlay">
</section>
</div>

<!-- <script src="<?= get_template_directory_uri() ?>/js/accessibility.js"> -->
<script type="module">
    import { tildeToUmlautTop } from '<?= get_template_directory_uri() ?>/js/tilde-to-umlaut.js';
    import { initCoolUnderline } from '<?= get_template_directory_uri() ?>/js/underline.js';

    document.addEventListener('DOMContentLoaded', async () => {
        await Promise.all([
            tildeToUmlautTop('.animate-tilde-to-umlaut'),
            // initCoolUnderline()
        ]);
    });

    // Reinitialize animations when color theme changes
    const observer = new MutationObserver(() => {
        tildeToUmlautTop('.animate-tilde-to-umlaut');
    });

    observer.observe(document.body, {
        attributes: true,
        attributeFilter: ['color-theme']
    });
</script>

<style>
    u {
        text-decoration: none;
    }

    .animate-tilde-to-umlaut {
        position: relative;
        display: inline-block;
    }
</style>
<?php wp_footer(); ?>

</body>

</html>