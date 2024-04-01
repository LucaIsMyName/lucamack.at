<?php

/**
 * Accordion Content
 */
?>

<section class="[ block accordion-content ]" style="
    /* Block */
    --block--max-width: var(--size-<?= $attributes['max-width'] ?>);
    --block--spacing-y: var(--spacing-<?= $attributes['spacing-vertical'] ?>);
    --block--spacing-x: var(--spacing-<?= $attributes['spacing-horizontal'] ?>);
    ">
    <div class="[ container ]" data-accordion-content data-wysiwyg>
        <?= $attributes['inner-blocks'] ?>
    </div>
</section>