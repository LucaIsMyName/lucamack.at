<?php

/**
 * Divider
 */
?>

<section class="[ block divider ]" style="
     /* Block */
    --block--max-width: var(--size-<?= $attributes['max-width'] ?>);
    --block--spacing-y: var(--spacing-<?= $attributes['spacing-vertical'] ?>);
    --block--spacing-x: var(--spacing-<?= $attributes['spacing-horizontal'] ?>);
    /* Divider */
    --divider--style: <?= $attributes['divider-style'] ?>;
    --divider--height: <?= $attributes['divider-height'] ?>;
    --divider--color:var(--color-<?= $attributes['divider-color'] ?>);
    --divider--spacing: var(--spacing-<?= $attributes['spacing-vertical'] ?>)
    ">
    <div class="[ container ]">
        <?php if ($attributes['enable-horizontal-row']): ?>
            <hr class="[ horizontal-row ]">
        <?php endif; ?>
    </div>
</section>