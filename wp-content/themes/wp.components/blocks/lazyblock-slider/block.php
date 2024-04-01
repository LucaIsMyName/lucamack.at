<?php

/**
 * Slider
 * @todo: add more slider types/styles via JS object
 */
?>

<section class="[ block slider ]" style="
    /* Block */
    --block--max-width: var(--size-<?= $attributes['max-width'] ?>);
    --block--spacing-y: var(--spacing-<?= $attributes['spacing-vertical'] ?>);
    --block--spacing-x: var(--spacing-<?= $attributes['spacing-horizontal'] ?>);
    /* Slider */
    --swiper-theme-color:  var(--color-<?= $attributes['color'] ?>);
    --slider--align-y: <?= $attributes['slider-align-y'] ?>;
    " 
    <div class="[ container ]">
        <section class="[ slider--image-<?= $attributes['slider-style'] ?> ]" <?php if ($attributes['slider-autoplay']): ?>data-swiper-autoplay="2000" <?php endif; ?>>
            <div class="[ swiper-wrapper ]">
                <?php foreach ($attributes['slider'] as $slide): ?>
                    <figure class="[ swiper-slide ]" title="<?= esc_attr($slide['image']['title']); ?>">
                        <?php
                        // Extract the relative path from the full URL
                        $upload_dir = wp_upload_dir();
                        $relative_path = str_replace($upload_dir['baseurl'], '', $slide['image']['url']);

                        // Check if the image is an SVG
                        if (pathinfo($slide['image']['url'], PATHINFO_EXTENSION) === 'svg') {
                            // Construct the full path to the SVG file
                            $svg_path = $upload_dir['basedir'] . $relative_path;
                            // Read SVG file content and echo it
                            echo file_get_contents($svg_path);
                        } else {
                            // Handle other image formats as before
                            ?>
                            <picture>
                                <?php if (isset($slide['image-desktop']['url'])): ?>
                                    <source media="(min-width:960px)" srcset="<?= esc_url($slide['image-desktop']['url']); ?>">
                                <?php endif; ?>

                                <?php if (isset($slide['image']['url'])): ?>
                                    <img width="1920" src="<?= esc_url($slide['image']['url']); ?>"
                                        alt="<?= esc_attr($slide['image']['alt']); ?>">

                                <?php endif; ?>
                            </picture>
                            <?php
                        }
                        ?>

                    </figure>
                <?php endforeach; ?>
            </div>
            <!-- If we need navigation buttons -->
            <section class="[ slider-controls ]">
                <?php if ($attributes['enable-arrows']): ?>
                    <div class="[ slider-button-next ]"></div>
                <?php endif; ?>
                <?php if ($attributes['enable-pagination']): ?>
                    <div class="[ slider-pagination ]"></div>
                <?php endif; ?>
                <?php if ($attributes['enable-arrows']): ?>
                    <div class="[ slider-button-prev ]"></div>
                <?php endif; ?>
            </section>
        </section>
    </div>
</section>