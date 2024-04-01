<?php

/**
 * Accordion Group
 */
?>

<section class="[ block accordion-group ]" style="
    /* Block */
    --block--max-width: var(--size-<?= $attributes['max-width'] ?>);
    --block--spacing-y: var(--spacing-<?= $attributes['spacing-vertical'] ?>);
    --block--spacing-x: var(--spacing-<?= $attributes['spacing-horizontal'] ?>);
    ">
    <div class="[ container ]" data-accordion-group>
        <?= $attributes['inner-blocks'] ?>
    </div>
</section>