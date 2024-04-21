<?php

/**
 * Grid Item
 */
?>

<section class="[ block grid-item ]" style="
     /* Block */
    --block--max-width: var(--size-<?= $attributes['max-width'] ?>);
    --block--spacing-y: var(--spacing-<?= $attributes['spacing-vertical'] ?>);
    --block--spacing-x: var(--spacing-<?= $attributes['spacing-horizontal'] ?>);
    /* Grid Item */
    --grid-item--column-start: <?= $attributes['column-start'] ?>;
    --grid-item--column-end: <?= $attributes['column-end'] ?>;
    --grid-item--row-start: <?= $attributes['row-start'] ?>;
    --grid-item--row-end: <?= $attributes['row-end'] ?>;
    --grid-item--column-start--sm: <?= $attributes['small-column-start'] ?>;
    --grid-item--column-end--sm: <?= $attributes['small-column-end'] ?>;
    --grid-item--row-start--sm: <?= $attributes['small-row-start'] ?>;
    --grid-item--row-end--sm: <?= $attributes['small-row-end'] ?>;
    --grid-item--column-start--md: <?= $attributes['medium-column-start'] ?>;
    --grid-item--column-end--md: <?= $attributes['medium-column-end'] ?>;
    --grid-item--row-start--md: <?= $attributes['medium-row-start'] ?>;
    --grid-item--row-end--md: <?= $attributes['medium-row-end'] ?>;
    --grid-item--column-start--lg: <?= $attributes['large-column-start'] ?>;
    --grid-item--column-end--lg: <?= $attributes['large-column-end'] ?>;
    --grid-item--row-start--lg: <?= $attributes['large-row-start'] ?>;
    --grid-item--row-end--lg: <?= $attributes['large-row-end'] ?>;
    ">
    <div class="[ container ]">
        <?= $attributes['inner-blocks'] ?>
    </div>
</section>