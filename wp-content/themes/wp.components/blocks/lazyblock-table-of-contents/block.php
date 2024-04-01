<?php

/**
 * Table of Contents
 */
?>

<section class="[ block table-of-contents ]" style="
    /* Block */
    --block--max-width: var(--size-<?= $attributes['max-width'] ?>);
    --block--spacing-y: var(--spacing-<?= $attributes['spacing-vertical'] ?>);
    --block--spacing-x: var(--spacing-<?= $attributes['spacing-horizontal'] ?>);
    ">
    <div class="[ container ]">
        <aside data-table-of-contents="<?= $attributes['toc-area'] ?>"
            data-table-of-contents-headlines="<?= $attributes['toc-headlines'] ?>"
            data-table-of-contents-link="<?= $attributes['toc-link'] ?>">
        </aside>
    </div>
</section>
