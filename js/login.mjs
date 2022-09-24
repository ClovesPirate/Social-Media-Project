import { fetchData, login } from "./utils/functions.mjs";
import { loginURL, registerURL } from "./consts/endpoints.mjs";
import { postOptions } from "./consts/fetchOptions.mjs";

const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', (e) => {

  const form = e.target;
  if (form.invalid) {
    e.preventDefault();
    // Inputs not valid
  }

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
})

loginForm.addEventListener('submit', function(e) {
  
  const form = e.target;
  if (form.invalid) {
    e.preventDefault;
  }

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

// loginForm.addEventListener('submit', function(e) {
//   e.preventDefault();

//   const email = document.getElementById('loginEmail');
//   const password = document.getElementById('loginPassword');

//   const payload = JSON.stringify ({ email: email.value, password: password.value});

//   fetch('https://nf-api.onrender.com/api/v1/social/auth/login', {
//     method: 'POST',
//     body: payload,
//     headers: {
//       'Content-Type': 'application/json; charset=UTF-8',
//     },
//   })
//   .then(response => response.json())
//   .then(user => {
//     console.log(user);
//     localStorage.setItem('token', user.accessToken);
//     localStorage.setItem('name', user.name);
//     window.location.href = `profile.html`;
//   })
//   .catch(err => console.log(err));
// })