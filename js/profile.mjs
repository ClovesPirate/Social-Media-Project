import { fetchData } from "./utils/functions.mjs"

const url = 'https://nf-api.onrender.com/api/v1/social/profiles/'

async function setup() {
  const user = localStorage.getItem('name');
  const token = localStorage.getItem('token');
  const options = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const userData = await fetchData(`${url}${user}`, options);
  console.log(userData);
}

setup();

