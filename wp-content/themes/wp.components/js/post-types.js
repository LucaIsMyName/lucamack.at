document.addEventListener('DOMContentLoaded', function() {
  // AJAX request
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://lucamack.at/wp-admin/admin-ajax.php'); // WordPress AJAX URL
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
              var response = JSON.parse(xhr.responseText);
              console.log(response);
              if (response) {
                  // Iterate through each post in the response and append/display them
                  response.forEach(function(post) {
                      // Manipulate the DOM to display the posts as desired
                      var postContainer = document.getElementById('custom-posts-container');
                      var postDiv = document.createElement('div');
                      postDiv.className = 'post';
                      postDiv.innerHTML = '<h2>' + post.title + '</h2><p>' + post.content + '</p>';
                      postContainer.appendChild(postDiv);
                  });
              } else {
                  // Handle no response
              }
          } else {
              // Handle AJAX error
              console.error('AJAX request failed with status: ' + xhr.status);
          }
      }
  };
  var data = 'action=load_custom_posts'; // Action hook registered in functions.php
  xhr.send(data);
});
