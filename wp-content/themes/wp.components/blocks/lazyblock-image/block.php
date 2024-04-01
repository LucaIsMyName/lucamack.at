<?php

/**
 * Image
 */
?>

<section class="[ block image ]" style="
    /* Block */
    --block--max-width: var(--size-<?= $attributes['max-width'] ?>);
    --block--spacing-y: var(--spacing-<?= $attributes['spacing-vertical'] ?>);
    --block--spacing-x: var(--spacing-<?= $attributes['spacing-horizontal'] ?>);
    /* Image */
    --image--filter: <?= $attributes['image-filter'] ?>;
    --image--filter-hover: <?= $attributes['image-filter-hover'] ?>;
    --image--border-radius: var(--border-radius-<?= $attributes['image-border-radius'] ?>);
    --image--border-width: calc(var(--px) * <?= $attributes['image-border-width'] ?>);
    --image--border-color: var(--color-<?= $attributes['image-border-color'] ?>);

    ">
    <div class="[ container ]">
        <figure title="<?= esc_html($attributes['image']['title']); ?>">

            <?php
            // Extract the relative path from the full URL
            $upload_dir = wp_upload_dir();
            $relative_path = str_replace($upload_dir['baseurl'], '', $attributes['image']['url']);

            // Check if the image is an SVG
            if (pathinfo($attributes['image']['url'], PATHINFO_EXTENSION) === 'svg') {
                // Construct the full path to the SVG file
                $svg_path = $upload_dir['basedir'] . $relative_path;
                // Read SVG file content and echo it
                echo file_get_contents($svg_path);
            } else {
                // Handle other image formats as before
                ?>
                <?php if (isset($attributes['image-desktop']['url'])): ?>
                    <source media="(min-width:960px)" srcset="<?= esc_url($attributes['image-desktop']['url']); ?>">
                <?php endif; ?>
                <?php if (isset($attributes['image-tablet']['url'])): ?>
                    <source media="(min-width:560px)" srcset="<?= esc_url($attributes['image-tablet']['url']); ?>">
                <?php endif; ?>
                <?php if (isset($attributes['image']['url'])): ?>
                    <img width="1024" src="<?= esc_url($attributes['image']['url']); ?>"
                        alt="<?= esc_attr($attributes['image']['alt']); ?>">
                <?php endif; ?>

                <?php
            }
            ?>

            <?php if ($attributes['image']['title'] != '...'): ?>
                <figcaption class="[ caption ] <?php if ($attributes['enable-caption']): ?><?php else: ?>vh<?php endif; ?>">
                    <p class="small">
                        <?= esc_html($attributes['image']['title']); ?>
                    </p>
                    <small class="small">
                        <?= esc_html($attributes['image']['description']); ?>
                    </small>
                </figcaption>
            <?php endif; ?>
        </figure>
    </div>
</section>