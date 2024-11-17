<?php

/**
 * Gallery
 */
?>

<section data-viewport
  class="[ block gallery <?= $attributes['layout'] ?>  <?php if ($attributes['animate']) : ?>animate<?php endif; ?> ]"
  style="
     /* Block */
    --block--max-width: var(--size-<?= $attributes['max-width'] ?>);
    --block--spacing-y: var(--spacing-<?= $attributes['spacing-vertical'] ?>);
    --block--spacing-x: var(--spacing-<?= $attributes['spacing-horizontal'] ?>);
    --gallery-item-min-width: calc(var(--size-<?= $attributes['image-min-width'] ?>) / 3);
    ">
  <div class="[ container ]">
    <section data-gallery
      data-gallery-has-lightbox="<?php if ($attributes['has-lightbox']): ?>true<?php else: ?>false<?php endif; ?>"
      class="gallery-container">
      <?php $i = 1; ?>
      <?php foreach ($attributes['images'] as $image): ?>
        <a href="<?= esc_url($image['image']['url']) ?>" title="<?= $image['title'] ?>" class="gallery-item"
          data-gallery-item="<?= $i ?>">
          <figure>
            <img src="<?= esc_url($image['image']['url']) ?>" alt="<?= $image['image']['alt'] ?>" />
            <figcaption class="caption">
              <p class="gallery-item-description"><?= $image['description'] ?></p>
            </figcaption>
          </figure>
        </a>
        <?php $i = $i + 1; ?>
      <?php endforeach; ?>
    </section>
  </div>
</section>