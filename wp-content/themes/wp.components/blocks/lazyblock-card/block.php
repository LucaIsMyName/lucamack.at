<?php

/**
 * Blueprint
 */
?>

<section class="[ block card ]" style="
    /* Block */
    --block--max-width: var(--size-<?= $attributes['max-width'] ?>);
    --block--spacing-y: var(--spacing-<?= $attributes['spacing-vertical'] ?>);
    --block--spacing-x: var(--spacing-<?= $attributes['spacing-horizontal'] ?>);
    /* Card */
    --card--border-color:var(--color-<?= $attributes['card-border-color'] ?>);
    --card--color:var(--color-<?= $attributes['card-color'] ?>);
    --card--background-color:var(--color-<?= $attributes['card-background-color'] ?>);
    --card--spacing:var(--spacing-<?= $attributes['card-spacing'] ?>);
    --card--border-width:calc(var(--px) * <?= $attributes['card-border-width'] ?>);
    --card--border-radius:var(--border-radius-<?= $attributes['card-border-radius'] ?>);
    ">
    <div class="[ container ]">
        <section class="[ card-item ]">
            <?php if ($attributes['is-link']): ?>
                <a href="<?= esc_url($attributes['link']) ?>" target="<?= $attributes['link-target'] ?>">
                <?php endif; ?>
                <?= $attributes['inner-blocks'] ?>
                <?php if ($attributes['is-link']): ?>
                </a>
            <?php endif; ?>
        </section>
    </div>
</section>