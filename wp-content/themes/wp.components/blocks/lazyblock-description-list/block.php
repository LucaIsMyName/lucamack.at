<?php

/**
 * Description List
 */
?>

<section class="[ block description-list ]" style="
    /* Block */
    --block--max-width: var(--size-<?= $attributes['max-width'] ?>);
    --block--spacing-y: var(--spacing-<?= $attributes['spacing-vertical'] ?>);
    --block--spacing-x: var(--spacing-<?= $attributes['spacing-horizontal'] ?>);
    ">
    <div class="[ container ]">
        <<?= $attributes['list-type']; ?> class="[ list ]">
            <?php foreach ($attributes['description-list'] as $item): ?>
                <li class="[ list-item ]">
                    <div data-wysiwyg class="[ title ]">
                        <?= $item['title']; ?>
                    </div>
                    <div data-wysiwyg class="[ text ]">
                        <?= $item['text']; ?>
                    </div>
                </li>
            <?php endforeach; ?>
        </<?= $attributes['list-type']; ?>>
    </div>
</section>