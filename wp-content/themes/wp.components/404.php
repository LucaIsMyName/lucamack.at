<?php get_header(); ?>
<article id="post-0" class="[ not-found-page ]">
    <section>
        <header class="[ title ]">
            <h1 style="--font-size-fluid-md: clamp(4rem, 15vw, 10rem);" class="h1" itemprop="name"><?php esc_html_e('404', 'components'); ?></h1>
        </header>
        <div class="[ text ]" itemprop="mainContentOfPage">
            <p><?php echo 'Leider keine Seite gefunden. <br> Hier geht\'s zu <a class="text-decoration:underline" title="Zur Startseite" href="'. get_site_url() .'">Startseite</a>.'; ?></p>
        </div>
    </section>
</article>
<?php get_footer(); ?>