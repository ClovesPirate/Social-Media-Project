import { fetchData, login } from "./utils/functions.mjs";
import { loginURL } from "./consts/endpoints.mjs";
import { postOptions } from "./consts/fetchOptions.mjs";

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('loginEmail');
  const password = document.getElementById('loginPassword');

  const payload = JSON.stringify({ email: email.value, password: password.value });

  async function fetchLogin() {
    try {
      const user = await fetchData(loginURL, postOptions('POST', payload));
      login(user);
    }
    catch(error) {
      console.log(error);
    }
  }
  fetchLogin();
});