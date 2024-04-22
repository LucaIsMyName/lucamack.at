<?php
// Register block

// var_dump($attributes);
?>

<section class="[ block post-types 
  typo-<?= $attributes['typography'] ?> 
  layout-<?= $attributes['layout'] ?>
  ]" style="
    /* Block */
    --block--max-width: var(--size-<?= $attributes['max-width'] ?>);
    --block--spacing-y: var(--spacing-<?= $attributes['spacing-vertical'] ?>);
    --block--spacing-x: var(--spacing-<?= $attributes['spacing-horizontal'] ?>);
    --block--color-text: var(--color-<?= $attributes['color'] ?>);
    ">
  <div class="[ container ]">
    <section 
      data-post-types 
      data-post-types-max="3"
      data-post-types-paginate="true"
      data-post-types-order="desc"
      data-post-types-orderby="date"
      data-post-types-category="all"
      data-post-types-tags="all"
      data-post-type-header="3"
      
      class="post-types-list post-type-posts post-type-docs">
    </section>
  </div>