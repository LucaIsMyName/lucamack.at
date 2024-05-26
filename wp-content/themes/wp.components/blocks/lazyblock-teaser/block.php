<?php

/**
 * Teaser
 * 
 */
?>

<section class="[ block teasers <?= $attributes['style'] ?> ]" style="
    /* Block */
    --block--max-width: var(--size-<?= $attributes['max-width'] ?>);
    --block--spacing-y: var(--spacing-<?= $attributes['spacing-vertical'] ?>);
    --block--spacing-x: var(--spacing-<?= $attributes['spacing-horizontal'] ?>);
    /* teaser */
    ">
  <div class="[ container ]">
    <?php foreach ($attributes['teasers'] as $teaser): ?>
      <article class="[ teaser ]">
        <figure class="[ image ]">
          <picture>
            <?php if (isset($teaser['image']['url'])): ?>
              <img width="1920" src="<?= esc_url($teaser['image']['url']); ?>"
                alt="<?= esc_attr($teaser['image']['alt']); ?>">
            <?php endif; ?>
          </picture>
        </figure>
        <section class="[ content ]">
          <h2 class="[ title ]"><?= $teaser['title'] ?></h2>
          <p class="[ text ]"><?= $teaser['text'] ?></p>
          <a href="<?= esc_url($teaser['link']) ?>" class="[ button ]"><?= $teaser['title'] ?></a>
        </section>
      </article>
    <?php endforeach ?>
  </div>
</section>