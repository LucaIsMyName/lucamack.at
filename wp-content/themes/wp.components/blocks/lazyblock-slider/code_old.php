<picture>
    <?php if (isset($slide['image-md']['url'])): ?>
        <source media="(min-width:960px)" srcset="<?= esc_url($slide['image-md']['url']); ?>">
    <?php endif; ?>
    <?php if (isset($slide['image']['url'])): ?>
        <img width="960" height="960" src="<?= esc_url($slide['image']['url']); ?>"
            alt="<?= esc_attr($slide['image']['alt']); ?>">
    <?php endif; ?>
</picture>