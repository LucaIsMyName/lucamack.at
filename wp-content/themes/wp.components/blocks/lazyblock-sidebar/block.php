<?php

/**
 * Sidebar
 */
?>

<section class="[ block sidebar ]" style="
    /* Block */
    --block--max-width: var(--size-<?= $attributes['max-width'] ?>);
    --block--spacing-y: var(--spacing-<?= $attributes['spacing-vertical'] ?>);
    --block--spacing-x: var(--spacing-<?= $attributes['spacing-horizontal'] ?>);
    /* --block--color-background: var(--color-<?= $attributes['background-color'] ?>);
    --block--color-text: var(--color-<?= $attributes['color'] ?>); */
    /* Sidebar */
    <?php if (isset($attributes['sidebar-position'])): ?>
    --sidebar--position: sticky;
    <?php endif; ?>
    --sidebar--width-sm: var(--size-<?= $attributes['sidebar-width-sm'] ?>);
    --sidebar--spacing: var(--spacing-<?= $attributes['sidebar-spacing'] ?>);
    --sidebar--direction: <?= $attributes['sidebar-direction'] ?>;
    ">
    <div class="[ container ]">
        <aside class="[ sidebar-container ]">
            <?php if ($attributes['sidebar-position']): ?>
                <div class="[ sticky ]">
                <? endif; ?>
                <section data-wysiwyg class="[ text ]">
                    <?= $attributes['text'] ?>
                </section>
                <?php if ($attributes['enable-toc']): ?>
                    <section class="toc" data-table-of-contents="[toc-area]"
                        data-table-of-contents-headlines="h1,h2,h3, h4, h5, h6" data-table-of-contents-link="true">
                    </section>
                <?php endif; ?>
                <?php if ($attributes['enable-widgets']): ?>
                    <section class="[ widget-area ]" data-widget-area>
                        <!-- Render Widgets here -->
                    </section>
                <?php endif; ?>

                <?php if ($attributes['sidebar-position']): ?>
                </div>
            <? endif; ?>

        </aside>
        <article toc-area class="[ content ]">
            <?= $attributes['inner-blocks'] ?>
        </article>
    </div>
</section>