<?php

/**
 * Buttons
 */
?>

<section class="[ block buttons ]" style="
    /* Block */
    --block--max-width: var(--size-<?= $attributes['max-width'] ?>);
    --block--spacing-y: var(--spacing-<?= $attributes['spacing-vertical'] ?>);
    --block--spacing-x: var(--spacing-<?= $attributes['spacing-horizontal'] ?>);
    /* Buttons */
    --buttons--font-size: var(--font-size-<?= $attributes['button-font-size'] ?>);
    --buttons--font-family: var(--font-family-<?= $attributes['button-font-family'] ?>);
    --buttons--font-weight: var(--font-weight-<?= $attributes['button-font-weight'] ?>);
    --buttons--spacing: var(--spacing-<?= $attributes['button-spacing'] ?>);
    --buttons--width: var(--size-<?= $attributes['button-width'] ?>);
    --buttons--border-radius: var(--border-radius-<?= $attributes['button-border-radius'] ?>);
    --buttons--justify: <?= $attributes['button-justify'] ?>;
    ">
    <div class="[ container ]">
        <?php foreach ($attributes['buttons'] as $button): ?>
            <<?php if ($button['enable-link']): ?>a<?php else: ?>button<?php endif; ?>
                <?php if ($button['enable-link']): ?>target="<?= $button['target']; ?>"<?php endif; ?>
                title="<?= $button['text']; ?>" <?php if ($button['enable-link']): ?>href="<?= $button['link']; ?>"<?php endif; ?>
                class="[ button <?= $button['button-type']; ?> ]" <?= $button['attribute']; ?>>

                <?php if (isset($button['image']['url'])): ?>
                    <figure class="[ image ]">
                        <?php
                        // Extract the relative path from the full URL
                        $upload_dir = wp_upload_dir();
                        $relative_path = str_replace($upload_dir['baseurl'], '', $button['image']['url']);

                        // Check if the image is an SVG
                        if (pathinfo($button['image']['url'], PATHINFO_EXTENSION) === 'svg') {
                            // Construct the full path to the SVG file
                            $svg_path = $upload_dir['basedir'] . $relative_path;
                            // Read SVG file content and echo it
                            echo file_get_contents($svg_path);
                        } else {
                            // Handle other image formats as before
                            ?>
                            <img width="32px" height="32px" alt="<?= $button['image']['alt']; ?>"
                                src="<?= $button['image']['url']; ?>" />
                            <?php
                        }
                        ?>
                    </figure>
                <?php endif; ?>
                <?php if ($button['text'] != ''): ?>
                    <div class="[ text ]">
                        <?= $button['text']; ?>
                    </div>
                <?php endif; ?>
            </<?php if ($button['enable-link']): ?>a<?php else: ?>button<?php endif; ?>>
        <?php endforeach; ?>
    </div>
</section>