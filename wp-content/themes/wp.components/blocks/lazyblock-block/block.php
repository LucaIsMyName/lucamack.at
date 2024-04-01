<?php

/**
 * Block
 */
?>

<section id="<?= $attributes['custom-id'] ?>" class="[ block wrapper ] <?= $attributes['custom-class'] ?>" style="
    /* Block */
    --block--display: <?= $attributes['display'] ?>;
    --block--display-sm: <?= $attributes['display-sm'] ?>;
    --block--max-width: var(--size-<?= $attributes['max-width'] ?>);
    --block--spacing-y: var(--spacing-<?= $attributes['spacing-vertical'] ?>);
    --block--spacing-y--sm: var(--spacing-<?= $attributes['spacing-vertical--sm'] ?>, var(--spacing-<?= $attributes['spacing-vertical'] ?>));
    --block--spacing-y--md: var(--spacing-<?= $attributes['spacing-vertical--md'] ?>, var(--spacing-<?= $attributes['spacing-vertical-sm'] ?>));
    --block--spacing-x: var(--spacing-<?= $attributes['spacing-horizontal'] ?>);
    --block--spacing-x--sm: var(--spacing-<?= $attributes['spacing-horizontal--sm'] ?>, var(--spacing-<?= $attributes['spacing-horizontal'] ?>));
    --block--spacing-x--md: var(--spacing-<?= $attributes['spacing-horizontal--md'] ?>, var(--spacing-<?= $attributes['spacing-vertical-sm'] ?>));
    <?php if ($attributes['background-color'] != 'background' || 'transparent'): ?>
    --block--color-background: var(--color-<?= $attributes['background-color'] ?>);
    --block--color-background-light: var(--color-<?= $attributes['background-color'] ?>-light);
    --block--color-background-dark: var(--color-<?= $attributes['background-color'] ?>-dark);
    --block--color-background-transparent: var(--color-<?= $attributes['background-color'] ?>-transparent);
    <?php endif; ?>
    <?php if ($attributes['color'] != 'text'): ?>
    --block--color-text: var(--color-<?= $attributes['color'] ?>);
    --block--color-text-light: var(--color-<?= $attributes['color'] ?>-light);
    --block--color-text-dark: var(--color-<?= $attributes['color'] ?>-dark);
    --block--color-text-transparent: var(--color-<?= $attributes['color'] ?>-transparent);
    <?php endif; ?>
    <?php if ($attributes['border-width'] != 0): ?>
    --block--border-width: calc(var(--px) * <?= $attributes['border-width'] ?>);
    --block--border-color: var(--color-<?= $attributes['border-color'] ?>);
    --block--border-style: <?= $attributes['border-style'] ?>;
    --block--border-radius: var(--border-radius-<?= $attributes['border-radius'] ?>);
    <?php endif; ?>
    <?php if ($attributes['z-index'] != 'initial'): ?>
    --block--z-index: <?= $attributes['z-index'] ?>;
    <?php endif; ?>
    <?php if (isset($attributes['enable-bg-image'])): ?>
    --block--bg-image: <?= esc_url($attributes['bg-image']['url']) ?>;
    --block--bg-position: <?= $attributes['bg-position'] ?>;
    --block--bg-repeat: <?= $attributes['bg-repeat'] ?>;
    --block--bg-size: <?= $attributes['bg-size'] ?>;
    <?php endif; ?>
    <?php if ($attributes['enable-gradient']): ?>
    --block--gradient: <?= $attributes['gradient-type'] ?>-gradient(
        <?php if ($attributes['gradient-type'] == 'linear'): ?>
            to bottom, 
        <?php endif; ?>
        <?= $attributes['gradient-color-1'] ?>, <?= $attributes['gradient-color-2'] ?>)
    <?php else: ?>
    --block--gradient: none;
    <?php endif; ?>
    " data-viewport <?php if ($attributes['viewport-offset'] != ''): ?>data-viewport-offset="<?= $attributes['viewport-offset'] ?>" <?php endif; ?>>
    <div class="[ container ]" <?php if ($attributes['wysiwyg']): ?>data-wysiwyg<?php endif; ?>>

        <?php if ($attributes['enable-parallax']): ?>
            <div class="[ parallax parallax-<?= $attributes['parallax-speed']; ?> ]">
            <?php endif; ?>


            <?php if ($attributes['enable-onload']): ?>
                <div class="[ onload ]" data-aos="<?= $attributes['onload-style'] ?>"
                    data-aos-duration="<?= $attributes['onload-duration'] ?>"
                    data-aos-delay="<?= $attributes['onload-delay'] ?>"
                    data-aos-easing="<?= $attributes['onload-easing'] ?>">
                <?php endif; ?>

                <?= $attributes['inner-blocks'] ?>

                <?php if ($attributes['enable-onload']): ?>
                </div>
            <?php endif; ?>

            <?php if ($attributes['enable-parallax']): ?>
            </div>
        <?php endif; ?>
    </div>
</section>