import { fetchData } from "./utils/functions.mjs"
import { postsURL } from "./consts/endpoints.mjs"
import { createPost } from "./utils/functions.mjs";
import { postOptionsValidated } from "./consts/fetchOptions.mjs";

const postContainer = document.getElementById('postContainer');
const token = localStorage.getItem('token');

async function fetchPosts() {
  
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  }
  try {
    const posts = await fetchData(postsURL, options);
  console.log(posts);
  
  const ListsOfPosts = posts.map(createPost).join("");
  postContainer.innerHTML = ListsOfPosts;
  }
  catch(error) {
    console.log(error);
  }
}

fetchPosts();

const postForm = document.getElementById('postForm');

postForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const postTitle = document.getElementById('title');
  const postBody = document.getElementById('textAreaFeed');

  const payload = JSON.stringify({ title: postTitle.value, body: postBody.value });

  async function publishPost() {
    try {
      const post = await fetchData(postsURL, postOptionsValidated('POST', payload, token))
    }
    catch(error) {
      console.log(error);
    }
  }

  publishPost();
})
