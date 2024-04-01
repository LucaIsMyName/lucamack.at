<?php

/**
 * Hero
 */
?>

<section class="[ block hero ]" style="
    /* Block */
    --block--max-width: var(--size-<?= $attributes['max-width'] ?>);
    --block--spacing-y: var(--spacing-<?= $attributes['spacing-vertical'] ?>);
    --block--spacing-x: var(--spacing-<?= $attributes['spacing-horizontal'] ?>);
    /* Hero */
    --hero--min-height: <?= $attributes['hero-min-height'] ?>;
    ">

    <div class="[ container ]">
        <?php if (isset($attributes['background-image']['url'])): ?>
            <div class="[ image ]">
                <figure title="<?= $attributes['background-image']['description'] ?>" <?php if($attributes['enable-onload']): ?>data-aos-duration="600" data-aos="fade-up" data-aos-delay="600" data-aos-easing="ease"<?php endif; ?> >
                    <picture>
                        <?php if (isset($attributes['background-image-desktop']['url'])): ?>
                            <source media="(min-width:1240px)"
                                srcset="<?= esc_url($attributes['background-image-desktop']['url']); ?>">
                        <?php endif; ?>
                        <?php if (isset($attributes['background-image-tablet']['url'])): ?>
                            <source media="(min-width:769px)"
                                srcset="<?= esc_url($attributes['background-image-tablet']['url']); ?>">
                        <?php endif; ?>
                        <img width="1920" height="1080" src="<?= $attributes['background-image']['url'] ?>"
                            alt="<?= $attributes['background-image']['alt'] ?>" />
                    </picture>
                </figure>
            </div>
        <?php endif; ?>
        <section class="[ inner-blocks ]">
            <?= $attributes['inner-blocks'] ?>
        </section>
    </div>
</section>