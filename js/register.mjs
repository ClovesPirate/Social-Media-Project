import { fetchData } from "./utils/functions.mjs";
import { registerURL } from "./consts/endpoints.mjs";
import { postOptions } from "./consts/fetchOptions.mjs";

const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('registerName');
  const password = document.getElementById('registerPassword');
  const email = document.getElementById('registerEmail');

  const payload = JSON.stringify({ name: username.value, email: email.value, password: password.value });

  console.log(payload);
  // async function fetchRegister() {
  //   try {
  //     const user = await fetchData(registerURL, postOptions('POST', payload));
  //     console.log(user)
  //   }
  //   catch(error) {
  //     console.log(error);
  //   }
  // }

  // fetchRegister();

  fetch('https://nf-api.onrender.com/api/v1/social/auth/register', {
    method: 'POST',
    body: payload,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  })
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log(err));
});