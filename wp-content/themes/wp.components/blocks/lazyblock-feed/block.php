<?php

/**
 * @name: feed
 */

?>


<section class="[ block feed ]" style="
     /* Block */
    --block--max-width: var(--size-<?= $attributes['max-width'] ?>);
    --block--spacing-y: var(--spacing-<?= $attributes['spacing-vertical'] ?>);
    --block--spacing-x: var(--spacing-<?= $attributes['spacing-horizontal'] ?>);
    /* Divider */
    --feed--align: <?= $attributes['feed-align'] ?>; /* 'start', 'center' or 'end' */
    --feed--color:var(--color-<?= $attributes['feed-color'] ?>); 
    --feed--image-size: calc(var(--size-1) * <?= $attributes['feed-image-size'] ?>);
    --feed--accent-color:var(--color-<?= $attributes['feed-accent-color'] ?>);
    --feed--bullet-radius: var(--border-radius-<?= $attributes['feed-bullet-radius'] ?>);
    --feed--bullet-size: calc(var(--size-1) * <?= $attributes['feed-bullet-size'] ?>);
    --feed--line-style: <?= $attributes['feed-line-style'] ?>;

    ">
    <div class="[ container ]">
        <ul class="[ feed-list ]">
            <?php $aosType = "fade-up";
            $aosDuration = 400;
            $aosDelay = 100; ?>
            <?php foreach ($attributes['feed'] as $item): ?>
                <li class="[ feed-item ] <?php if ($attributes['enable-feed-bullets']): ?><?php else: ?>no-bullets<?php endif; ?>"
                    <?php if ($attributes['enable-onload']): ?>data-aos="fade" data-aos-duration="<?= $aosDuration ?>"
                        data-aos-delay="<?= $aosDelay; ?><?php endif; ?>">
                    <section class="[ content ]">
                        <?php if ($attributes['enable-img']): ?>
                            <figure class="[ image ]">
                                <?php
                                // Extract the relative path from the full URL
                                $upload_dir = wp_upload_dir();
                                $relative_path = str_replace($upload_dir['baseurl'], '', $item['image']['url']);

                                // Check if the image is an SVG
                                if (pathinfo($item['image']['url'], PATHINFO_EXTENSION) === 'svg') {
                                    // Construct the full path to the SVG file
                                    $svg_path = $upload_dir['basedir'] . $relative_path;
                                    // Read SVG file content and echo it
                                    echo file_get_contents($svg_path);
                                } else {
                                    // Handle other image formats as before
                                    ?>
                                    <img width="32px" height="32px" alt="<?= $item['image']['alt']; ?>"
                                        src="<?= $item['image']['url']; ?>" />
                                    <?php
                                }
                                ?>
                            </figure>
                        <?php endif; ?>
                        <section class="[ text ]" <?php if ($attributes['enable-onload']): ?>data-aos-duration="<?= $aosDuration ?>" <?php endif; ?>>
                            <?= $item['text'] ?>
                        </section>
                    </section>
                </li>
            <?php endforeach; ?>
        </ul>
    </div>
</section>