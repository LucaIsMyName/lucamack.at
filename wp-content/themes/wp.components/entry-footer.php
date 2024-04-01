<footer class="[ entry-footer ] sr">
    <span class=""><?php esc_html_e('Categories: ', 'components'); ?><?php the_category(', '); ?></span>
    <span class=""><?php the_tags(); ?></span>
    <?php if (comments_open()) {
        echo '<span class="">|</span> <span class=""><a href="' . esc_url(get_comments_link()) . '">' . sprintf(esc_html__('Comments', 'components')) . '</a></span>';
    } ?>
</footer>