<?php get_header(); ?>
<header class="[ author ]">
    <?php the_post(); ?>
    <h1 class="" itemprop="name"><?php the_author_link(); ?></h1>
    <div class="" itemprop="description"><?php if ('' != get_the_author_meta('user_description')) {
                                                            echo esc_html(get_the_author_meta('user_description'));
                                                        } ?></div>
    <?php rewind_posts(); ?>
</header>
<?php while (have_posts()) : the_post(); ?>
    <?php get_template_part('entry'); ?>
<?php endwhile; ?>
<?php get_template_part('nav', 'below'); ?>
<?php get_footer(); ?>