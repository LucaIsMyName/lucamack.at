<?php

/**
 * Columns - Two
 */
?>

<section class="[ block columns-two ]" style="
     /* Block */
    --block--max-width: var(--size-<?= $attributes['max-width'] ?>);
    --block--spacing-y: var(--spacing-<?= $attributes['spacing-vertical'] ?>);
    --block--spacing-x: var(--spacing-<?= $attributes['spacing-horizontal'] ?>);
    /* Columns Two */
    --columns-two--gap: var(--spacing-<?= $attributes['columns-gap'] ?>, 0);
    --columns-two--align: <?= $attributes['columns-align'] ?>;
    <?php if ($attributes['enable-columns-mobile']): ?>
    --columns-two--width-mobile: var(--columns-two--column-formula);
    --columns-two--direction-mobile: row;
    <?php else: ?>
    --columns-two--width-mobile: 100%;
    <?php endif; ?>
    ">
    <div class="[ container ]">
        <?= $attributes['inner-blocks'] ?>
    </div>
</section>