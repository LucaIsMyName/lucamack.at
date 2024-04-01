<?php

/**
 * @name: tabs
 * @todo: when DOM loads set index 1 to default open tab, 
 */

$tabContainerId = rand(10000, 99999);
?>

<section class="[ block tabs ]" style="
    /* Block */
    --block--max-width: var(--size-<?= $attributes['max-width'] ?>);
    --block--spacing-y: var(--spacing-<?= $attributes['spacing-vertical'] ?>);
    --block--spacing-x: var(--spacing-<?= $attributes['spacing-horizontal'] ?>);
    /* Tabs */
    --tabs--size:var(--font-size-fluid-<?= $attributes['tabs-size'] ?>);
    --tabs--background-color:var(--color-<?= $attributes['tabs-background-color'] ?>);
    --tabs--background-color-active:var(--color-<?= $attributes['tabs-background-color'] ?>);
    --tabs--color:var(--color-<?= $attributes['tabs-color'] ?>);
    --tabs--color-active:var(--color-<?= $attributes['tabs-color'] ?>);

    ">
    <div class="[ container ]">

        <section data-tabs data-tabs-id="<?= $tabContainerId ?>" class="[ tabs-container ]">
            <div class="[ tabs-header ]">
                <?php $tabTitleId = 1; ?>
                <?php foreach ($attributes['tabs'] as $tabTitle): ?>
                    <button class="[ tab ]" data-tabs-toggle="<?= $tabContainerId ?>-<?= $tabTitleId; ?>" data-tabs-toggle-active>
                        <?php if (isset($tabTitle['icon'])): ?>
                            <div class="[ tab-image ]">
                                <?= wp_get_attachment_image($tabTitle['icon']['id'], 'large'); ?>
                            </div>
                        <?php endif; ?>
                        <?php if ($tabTitle['title'] != ''): ?>
                            <p class="[ tab-text ]">
                                <?= $tabTitle['title'] ?>
                            </p>
                        <?php endif; ?>

                    </button>
                    <?php $tabTitleId = $tabTitleId + 1; ?>
                <?php endforeach; ?>
            </div>
            <div class="[ tabs-content ]">
                <?php $tabContentId = 1; ?>
                <?php foreach ($attributes['tabs'] as $tabContent): ?>
                    <section data-wysiwyg class="[ tab-content ]" data-tabs-content="<?= $tabContainerId ?>-<?= $tabContentId ?>"
                        data-tabs-content-active aria-hidden tabindex>
                        <?= $tabContent['content'] ?>
                    </section>
                    <?php $tabContentId = $tabContentId + 1; ?>
                <?php endforeach; ?>
            </div>
        </section>
    </div>
</section>