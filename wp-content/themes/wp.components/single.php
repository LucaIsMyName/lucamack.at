<?php get_header(); ?>
<section class="[ single ]">
        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                        <?php get_template_part('entry'); ?>
        <?php endwhile;
        endif; ?>
</section>
<?php get_footer(); ?>