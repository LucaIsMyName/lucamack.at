<?php

/**
 * Text
 */
?>

<section class="[ block text ]" style="
     /* Block */
    --block--max-width: var(--size-<?= $attributes['max-width'] ?>);
    --block--spacing-y: var(--spacing-<?= $attributes['spacing-vertical'] ?>);
    --block--spacing-x: var(--spacing-<?= $attributes['spacing-horizontal'] ?>);
    --block--color-text: var(--color-<?= $attributes['color'] ?>);
    ">
    <div data-wysiwyg class="[ container ]">
        <?= $attributes['text'] ?>
    </div>
</section>