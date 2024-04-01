<?php get_header(); ?>
<section class="[ search ]">
    <?php if (have_posts()): ?>
        <header class="">
            <h1 class="" itemprop="name">
                <?php printf(esc_html__('Resultate für: %s', 'components'), get_search_query()); ?>
            </h1>
        </header>
        <?php while (have_posts()):
            the_post(); ?>
            <?php get_template_part('entry'); ?>
        <?php endwhile; ?>
        <?php get_template_part('nav', 'below'); ?>
    <?php else: ?>
        <article id="post-0" class="">
            <header class="">
                <h1 class="" itemprop="name">
                    <?php esc_html_e('Nichts gefunden.', 'components'); ?>
                </h1>
            </header>
            <div class="" itemprop="mainContentOfPage">
                <p>
                    <?php esc_html_e('Keine Beiträge Gefunden.', 'components'); ?>
                </p>
            </div>
        </article>
    <?php endif; ?>
</section>
<?php get_footer(); ?>