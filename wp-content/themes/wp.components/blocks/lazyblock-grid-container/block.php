<?php

/**
 * Grid Container
 */
?>

<section class="[ block grid-container ]" style="
     /* Block */
    --block--max-width: var(--size-<?= $attributes['max-width'] ?>);
    --block--spacing-y: var(--spacing-<?= $attributes['spacing-vertical'] ?>);
    --block--spacing-x: var(--spacing-<?= $attributes['spacing-horizontal'] ?>);
    /* Grid Container */
    --grid-container--columns: <?= $attributes['columns'] ?>;
    --grid-container--rows: <?= $attributes['rows'] ?>;
    --grid-container--gap: var(--spacing-<?= $attributes['gap'] ?>);
    ">
  <div class="[ container ]">
    <?= $attributes['grid-items'] ?>
  </div>
</section>