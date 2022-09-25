import { fetchData } from "./utils/functions.mjs";
import { registerURL } from "./consts/endpoints.mjs";
import { postOptions } from "./consts/fetchOptions.mjs";

const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const username = document.getElementById('register-name');
  const password = document.getElementById('register-password');
  const email = document.getElementById('register-email');

  const payload = JSON.stringify({ name: username.value, email: email.value, password: password.value });

  async function fetchRegister() {
    try {
      const user = await fetchData(registerURL, postOptions('POST', payload));
      console.log(user)
    }
    catch(error) {
      console.log(error);
    }
  }

  fetchRegister();
});