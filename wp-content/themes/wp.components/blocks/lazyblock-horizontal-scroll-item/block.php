<?php

/**
 * horizontal-scroll-item
 */
?>

<section class="[ block horizontal-scroll-item ]" style="
    /* Block */
    --block--max-width: var(--size-<?= $attributes['max-width'] ?>);
    --block--spacing-y: var(--spacing-<?= $attributes['spacing-vertical'] ?>);
    --block--spacing-x: var(--spacing-<?= $attributes['spacing-horizontal'] ?>);
    " data-horizontal-scroll-item>
    <div class="[ container ]">
        <?= $attributes['inner-blocks'] ?>
    </div>
</section>