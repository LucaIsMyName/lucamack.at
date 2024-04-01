<?php

/**
 * Accordion Item
 */
?>

<section class="[ block accordion-item ]" style="
    /* Block */
    --block--max-width: var(--size-<?= $attributes['max-width'] ?>);
    --block--spacing-y: var(--spacing-<?= $attributes['spacing-vertical'] ?>);
    --block--spacing-x: var(--spacing-<?= $attributes['spacing-horizontal'] ?>);
    ">
    <div class="[ container ]" data-accordion>
        <?= $attributes['inner-blocks'] ?>
    </div>
</section>