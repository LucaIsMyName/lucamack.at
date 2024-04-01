<?php

/**
 * horizontal-scroll-container
 */
?>

<section class="[ block horizontal-scroll-container ]" style="
    /* Block */
    --block--max-width: var(--size-<?= $attributes['max-width'] ?>);
    --block--spacing-y: var(--spacing-<?= $attributes['spacing-vertical'] ?>);
    --block--spacing-x: var(--spacing-<?= $attributes['spacing-horizontal'] ?>);
    --block--spacing-x: var(--spacing-<?= $attributes['spacing-horizontal'] ?>);
    --block--align: <?= $attributes['align'] ?>;
    --block--justify: <?= $attributes['justify'] ?>;
    --block--height: <?= $attributes['height'] ?>;
    ">
    <div class="[ container ]" data-horizontal-scroll
        data-horizontal-scroll-offset="<? if ($attributes['offset'] != ''): ?><?= $attributes['offset']; ?><?php endif; ?>"
        data-horizontal-scroll-anchor="<? if ($attributes['anchor'] != 'top'): ?><?= $attributes['anchor']; ?><?php endif; ?>">
        <?= $attributes['inner-blocks'] ?>
    </div>
</section>