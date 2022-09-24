import { displayError, fetchData, login } from "./utils/functions.mjs";
import { loginURL, registerURL } from "./consts/endpoints.mjs";
import { postOptions } from "./consts/fetchOptions.mjs";

const loginForm = document.getElementById('login-form');
const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', (e) => {
  e.preventDefault();

  const email = document.getElementById('login-email');
  const password = document.getElementById('login-password');

  const payload = JSON.stringify({ email: email.value, password: password.value });

  async function fetchLogin() {
    try {
      const user = await fetchData(loginURL, postOptions('POST', payload));
     login(user);
    }
    catch(error) {
      console.log(error);
      displayError(message);
    }
  }

  fetchLogin();
});