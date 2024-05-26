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
      foreach ($attributes['post-types'] as $post_type) {
        $args = array(
          'post_type' => $post_type,
          'posts_per_page' => -1
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
                <?php if ($attributes['has-date'] | $attributes['has-author']): ?>
                  <section class="meta">
                    <small> <?php if ($attributes['has-date']) {
                      the_date();
                    } ?>
                      <?php if ($attributes['has-date'] & $attributes['has-author']): ?>
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
              <!-- You can display other post information here -->
            </li>
            <?php
          endwhile;
          wp_reset_postdata();
        else:
          echo '<li>No ' . $post_type . ' found.</li>';
        endif;
      }
      ?>
    </ul>
  </div>
</section>