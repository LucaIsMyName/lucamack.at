<?php

/**
 * @name: modal
 * 
 * 
 * data-modal-id="id"
 * data-modal-toggle-close="id"
 * data-modal-toggle-open="id"
 * data-modal-toggle="id"
 * 
 * 
 */
?>

<section class="[ block modal ]" style="
    /* Block */
    --block--max-width: var(--size-<?= $attributes['max-width'] ?>);
    --block--spacing-y: var(--spacing-<?= $attributes['spacing-vertical'] ?>);
    --block--spacing-x: var(--spacing-<?= $attributes['spacing-horizontal'] ?>);
    /* --block--color-background: var(--color-<?= $attributes['background-color'] ?>);
    --block--color-text: var(--color-<?= $attributes['color'] ?>); */
    /* Modal */
    --modal--width: var(--size-<?= $attributes['modal-width'] ?>);
    --modal--justify: <?= $attributes['modal-justify'] ?>;
    --modal--align: <?= $attributes['modal-align'] ?>;
    --modal--min-height: <?= $attributes['modal-min-height'] ?>;
    --modal--color-darken: var(--color-<?= $attributes['color'] ?>-transparent);
    --modal--border-radius: var(--border-radius-<?= $attributes['modal-border-radius'] ?>);
    ">
    <div class="[ container ]">
        <section data-modal id="<?= $attributes['modal-id'] ?>" data-modal-active="">
            <section class="[ modal-content ]">
                <div class="[ modal-header ]">
                    <div>
                        <p><?= $attributes['headline'] ?><p>
                    </div>
                    <button data-modal-toggle-close="<?= $attributes['modal-id'] ?>">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
                <div class="[ inner-blocks ]">
                    <?= $attributes['inner-blocks'] ?>
                </div>
            </section>
        </section>
    </div>
</section>