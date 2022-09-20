import { fetchData } from "./utils/fetch.mjs";
import { BASE_URL, loginURL, registerURL } from "./consts/endpoints.mjs";

const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('login-email');
  const password = document.getElementById('login-password');

  const payload = JSON.stringify({ email: email.value, password: password.value });

  async function login() {
    try {
      const user = await fetchData(`${BASE_URL}${loginURL}`, {
        method: 'POST',
        body: payload,
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      });
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('name', user.name);
      window.location.href = `profile.html?name=${user.name}`;
    }
    catch(error) {
      console.log(error);
    }
  }

  login();
});