/**
 * Fetch and render posts and custom post types from WordPress REST API.
 * @param {string[]} postTypes - Array of post types to fetch.
 * @param {string} endpoint - The REST API endpoint for custom post types.
 * @param {string} containerSelector - The CSS selector for the container where post types will be rendered.
 */
async function fetchImageUrl(mediaId) {
  try {
    const response = await fetch(`https://lucamack.at/wp-json/wp/v2/media/${mediaId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch image URL');
    }
    const data = await response.json();
    return data.source_url; // Return the image URL
  } catch (error) {
    console.error('Error fetching image URL:', error);
    return null;
  }
}

async function fetchAndRenderPostTypes(postTypes, endpoint, containerSelector) {
  try {
    // Fetch posts
    const requests = postTypes.map(postType => fetch(`https://lucamack.at/wp-json/wp/v2/${postType}`));
    const responses = await Promise.all(requests);
    const postData = await Promise.all(responses.map(response => response.json()));

    // Fetch custom post types
    const customResponse = await fetch(endpoint);
    if (!customResponse.ok) {
      throw new Error('Failed to fetch custom post types');
    }
    const customData = await customResponse.json();

    // Combine post data and custom post data
    const allData = postData.concat([customData]);

    // Clear existing content in the container
    const container = document.querySelector(containerSelector);
    container.innerHTML = '';

    // Render each post type
    allData.forEach(posts => {
      posts.forEach(post => {
        console.log(post);
        const postContainer = document.createElement('a');
        postContainer.href = post.link;
        postContainer.setAttribute('data-post-types-category', post.type);
        postContainer.classList.add('post-item');

        // Render post title
        const titleElement = document.createElement('h2');
        titleElement.textContent = post.title.rendered;
        postContainer.appendChild(titleElement);

        
        // Render post image if available
        // Render post image if available
        if (post.featured_media) {
          const imageUrl = fetchImageUrl(post.featured_media);
          if (imageUrl) {
            const imageElement = document.createElement('img');
            imageElement.src = imageUrl;
            imageElement.alt = post.title.rendered;
            postContainer.appendChild(imageElement);
          }
        }
        
        if (post.type) {
          const typeElement = document.createElement('small');
          typeElement.src = post.type;
          postContainer.appendChild(typeElement);
        }

        // Render post excerpt
        if (post.excerpt && post.excerpt.rendered) {
          const excerptElement = document.createElement('section');
          excerptElement.innerHTML = post.excerpt.rendered;
          postContainer.appendChild(excerptElement);
        }

        container.appendChild(postContainer);
      });
    });
  } catch (error) {
    console.error('Error fetching and rendering post types:', error);
  }
}

// Call the function with your post types, custom post type endpoint, and container selector
const postTypes = ['posts', 'documentation', 'artikel', 'projekte']; // Array of post types
const customEndpoint = 'https://lucamack.at/wp-json/wp/v2/'; // Replace 'your-custom-post-type-slug' with your actual custom post type slug
const containerSelector = '[data-post-types]'; // Update with your container selector
fetchAndRenderPostTypes(postTypes, customEndpoint, containerSelector);
