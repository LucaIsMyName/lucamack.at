<?php

/**
 * Blueprint
 */
?>

<section 
    class="[ block blueprint ]"
    style="
    /* Block */
    --block--max-width: var(--size-<?= $attributes['max-width'] ?>);
    --block--spacing-y: var(--spacing-<?= $attributes['spacing-vertical'] ?>);
    --block--spacing-x: var(--spacing-<?= $attributes['spacing-horizontal'] ?>);
    ">
    <div class="[ container ]">
        <?= $attributes['inner-blocks'] ?>
    </div>
</section>