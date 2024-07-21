<ul class="block post-types <?= $attributes['layout'] ?>">

  <?php

  // Array of custom post types
  $custom_post_types = array(
    'post',
    'documentation',
    'artikel'
  ); // Add more post types as needed
  
  // Loop through each custom post type
  foreach ($custom_post_types as $post_type) {
    // Query custom post types
    $args = array(
      'post_type' => $post_type,
      'posts_per_page' => 2 // Retrieve all posts of the custom post type
    );
    $query = new WP_Query($args);

    // Loop through custom post types
    if ($query->have_posts()):
      while ($query->have_posts()):
        $query->the_post();
        ?>
        <li>
          <a href="<?php the_permalink(); ?>">
            <h2><?php the_title(); ?></h2>
            <p><?php the_excerpt(); ?></p>
          </a>
          <!-- You can display other post information here -->
        </li>
        <?php
      endwhile;
      wp_reset_postdata(); // Reset post data
    else:
      // No custom post types found
      echo '<li>No ' . $post_type . ' found.</li>';
    endif;
  }
  ?>
</ul>