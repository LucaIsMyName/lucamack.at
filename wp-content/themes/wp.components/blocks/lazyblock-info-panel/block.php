<?php

/**
 * Text
 */
?>

<section class="[ block info-panel ]" style="
    /* Block */
    --block--max-width: var(--size-<?= $attributes['max-width'] ?>);
    --block--spacing-y: var(--spacing-<?= $attributes['spacing-vertical'] ?>);
    --block--spacing-x: var(--spacing-<?= $attributes['spacing-horizontal'] ?>);
    /* Info Panel */
    --info-panel--border-color:var(--color-<?= $attributes['panel-border-color'] ?>);
    --info-panel--background-color:var(--color-<?= $attributes['panel-background-color'] ?>);
    --info-panel--color:var(--color-<?= $attributes['panel-color'] ?>);

    ">
    <div class="[ container ]">
        <section class="[ panel ]">
            <?php if(isset($attributes['image']['url'])): ?>
                <div class="[ image ]">
                    <figure>
                        <!-- change to svg php import -->
                        <img width="64px" height="64px" src="<?= $attributes['image']['url'] ?>" />
                    </figure>
                </div>
            <?php endif; ?>
            <div data-wysiwyg class="[ text ]">
                <?= $attributes['text'] ?>
            </div>
        </section>
    </div>
</section>