<?php if (isset($attributes['image-desktop']['url'])): ?>
    <source media="(min-width:960px)" srcset="<?= esc_url($attributes['image-desktop']['url']); ?>">
<?php endif; ?>
<?php if (isset($attributes['image-tablet']['url'])): ?>
    <source media="(min-width:560px)" srcset="<?= esc_url($attributes['image-tablet']['url']); ?>">
<?php endif; ?>
<?php if (isset($attributes['image']['url'])): ?>
    <img width="1920" src="<?= esc_url($attributes['image']['url']); ?>"
        alt="<?= esc_attr($attributes['image']['alt']); ?>">
    <!-- <?= wp_get_attachment_image($attributes['image']['id'], 'large'); ?> -->
<?php endif; ?>