<?php

/**
 * Link
 */
?>

<a href="<?= esc_url($attributes['url']) ?>" target="<?= $attributes['target'] ?>" class="[ block link ]" style="
     /* Block */
    --block--max-width: var(--size-<?= $attributes['max-width'] ?>);
    --block--spacing-y: var(--spacing-<?= $attributes['spacing-vertical'] ?>);
    --block--spacing-x: var(--spacing-<?= $attributes['spacing-horizontal'] ?>);
    ">
  <?= $attributes['inner-block'] ?>
</a>