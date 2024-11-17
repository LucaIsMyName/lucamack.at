<section class="block post-types <?= $attributes['layout'] ?> <?= $attributes['style'] ?> <?php foreach ($attributes['post-types'] as $post_type) {
        echo 'has-' . $post_type . ' ';
      } ?>" style="
/* Block */
    --block--max-width: var(--size-<?= $attributes['max-width'] ?>);
    --block--spacing-y: var(--spacing-<?= $attributes['spacing-vertical'] ?>);
    --block--spacing-x: var(--spacing-<?= $attributes['spacing-horizontal'] ?>);">
  <div class="container">
    <ul>

      <?php
      // Get the current language using Polylang
      $current_language = pll_current_language();
      $posts_per_page = !empty($attributes['max-posts']) ? (int) $attributes['max-posts'] : 4; // Default to 4 posts per page
      $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;

      foreach ($attributes['post-types'] as $post_type) {
        $args = array(
          'post_type' => $post_type,
          'posts_per_page' => $posts_per_page,
          'paged' => $paged,
          'lang' => $current_language
        );

        $query = new WP_Query($args);

        if ($query->have_posts()):
          while ($query->have_posts()):
            $query->the_post();
            ?>
            <li data-post-type="<?= $post_type ?>">
              <a title="<?php the_title(); ?>" href="<?php the_permalink(); ?>">
                <?php if ($attributes['has-excerpt']): ?>
                  <figure class="image" title="<?php the_title(); ?>">
                    <?php the_post_thumbnail(); ?>
                  </figure>
                <?php endif; ?>
                <h2 class="<?= $attributes['headline-size'] ?>"><?php the_title(); ?></h2>
                <?php if ($attributes['has-date'] || $attributes['has-author']): ?>
                  <section class="meta">
                    <small>
                      <?php if ($attributes['has-date']) {
                        the_date();
                      } ?>
                      <?php if ($attributes['has-date'] && $attributes['has-author']): ?>
                        |
                      <?php endif; ?>
                      <?php if ($attributes['has-author']) {
                        the_author();
                      } ?>
                    </small>
                  </section>
                <?php endif; ?>
                <?php if ($attributes['has-excerpt']): ?>
                  <section class="excerpt">
                    <p><?php the_excerpt(); ?></p>
                  </section>
                <?php endif; ?>
              </a>
            </li>
            <?php
          endwhile;
          wp_reset_postdata();
        else:
          echo '<!--<li>No ' . $post_type . ' found in ' . $current_language . '.</li>-->';
        endif;
      }
      ?>
    </ul>

    <!-- Pagination -->
    <?php if ($query->max_num_pages > 1): ?>
      <div class="pagination">
        <?php
        echo paginate_links(
          array(
            'base' => esc_url_raw(get_pagenum_link(1)) . '%_%',
            'format' => 'page/%#%/',
            'current' => max(1, $paged),
            'total' => $query->max_num_pages,
            'prev_text' => __('« Previous', 'text-domain'),
            'next_text' => __('Next »', 'text-domain'),
            'type' => 'list',
            'end_size' => 2,
            'mid_size' => 2,
          )
        );
        ?>
      </div>
    <?php endif; ?>
  </div>
</section>
