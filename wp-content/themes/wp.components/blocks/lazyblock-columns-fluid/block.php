<?php

/**
 * Columns - Fluid
 */
?>

<section 
    class="[ block columns-fluid ]"
    style="
     /* Block */
    --block--max-width: var(--size-<?= $attributes['max-width'] ?>);
    --block--spacing-y: var(--spacing-<?= $attributes['spacing-vertical'] ?>);
    --block--spacing-x: var(--spacing-<?= $attributes['spacing-horizontal'] ?>);
    /* Columns Fluid */
    --columns-fluid--column-min-width: var(--size-<?= $attributes['column-min-width'] ?>);
    --columns-fluid--gap: var(--spacing-<?= $attributes['gap'] ?>);
    --columns-fluid--align: <?= $attributes['columns-align'] ?>;
    ">
    <div class="[ container ]">
        <?= $attributes['inner-blocks'] ?>
    </div>
</section>