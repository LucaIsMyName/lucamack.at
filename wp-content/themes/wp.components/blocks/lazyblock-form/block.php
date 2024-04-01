<?php

/**
 * Form
 */
?>

<section class="[ block form ]" style="
    /* Block */
    --block--max-width: var(--size-<?= $attributes['max-width'] ?>);
    --block--spacing-y: var(--spacing-<?= $attributes['spacing-vertical'] ?>);
    --block--spacing-x: var(--spacing-<?= $attributes['spacing-horizontal'] ?>);
    /* Form */
    --form--spacing: var(--spacing-<?= $attributes['form-input-spacing'] ?>);
    --form--input-margin-end: var(--spacing-<?= $attributes['form-input-margin-end'] ?>);
    --form--input-color: var(--color-<?= $attributes['form-input-color'] ?>);
    --form--input-background-color: var(--color-<?= $attributes['form-input-background-color'] ?>);

    ">
    <div class="[ container ]">
        <form class="[ form-container ]" method="<?= $attributes['form-method'] ?>" action="<?= $attributes['form-action'] ?>">
            <?php foreach ($attributes['inputs'] as $input) : ?>
                <div class="[ input <?= $input['input-type']; ?> ]">
                    <label for=""><?= $input['input-name']; ?></label>
                    <input type="<?= $input['input-type']; ?>" placeholder="<?php echo $input['input-name']; ?>" />
                </div>
            <?php endforeach; ?>
            <?php if ($attributes['enable-textarea']) : ?>
                <div class="[ input textarea ]">
                    <label>Nachricht</label>
                    <textarea></textarea>
                </div>
            <?php endif; ?>
            <div class="[ submit ]">
                <input type="submit" name="Senden" title="Senden" />
            </div>
        </form>
    </div>
</section>