jQuery(document).ready(function($) {
  var page = 1;
  var loading = false;
  var maxPages = <?php echo $query->max_num_pages; ?>;
  var postType = customPostTypesData.post_types[0]; // Change this if you have multiple post types

  function loadPosts() {
      if (!loading && page <= maxPages) {
          loading = true;
          $.ajax({
              url: customPostTypesData.ajax_url,
              type: 'post',
              data: {
                  action: 'custom_post_types_load_posts',
                  post_type: postType,
                  posts_per_page: 10, // Change this if you want to load more or fewer posts per page
                  paged: page,
              },
              success: function(response) {
                  $('#custom-post-types-posts-container').append(response);
                  page++;
                  loading = false;
              },
          });
      }
  }

  loadPosts();

  $('#custom-post-types-load-more').click(function() {
      loadPosts();
  });
});
