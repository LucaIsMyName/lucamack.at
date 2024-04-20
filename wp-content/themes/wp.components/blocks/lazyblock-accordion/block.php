<?php

/**
 * Accordion 
 */
?>

<section class="[ block accordion ]" style="
    /* Block */
    --block--max-width: var(--size-<?= $attributes['max-width'] ?>);
    --block--spacing-y: var(--spacing-<?= $attributes['spacing-vertical'] ?>);
    --block--spacing-x: var(--spacing-<?= $attributes['spacing-horizontal'] ?>);
    ">
    <div class="[ container ]" data-accordion-group>
        <?php foreach ($attributes['accordion'] as $item): ?>
            <section data-accordion class="[ accordion-item ]">
                <button data-accordion-title class="[ title ]" title="Mehr Information">
                    <section>
                            <?= $item['title']; ?>
                    </section>
                    <div class="[ collapse ]">
                        <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.5 8.25L12 15.75L4.5 8.25" stroke="currentColor" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </button>
                <div data-accordion-content tabindex="-1" data-wysiwyg class="[ text ]">
                    <?= $item['text']; ?>
                </div>
            </section>
        <?php endforeach; ?>
    </div>
</section>