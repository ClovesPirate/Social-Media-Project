export async function fetchData(url, options) {
  const response = await fetch(url, options);
  if (response.ok) {
    return await response.json();
  }
  throw new Error(`${response.status} ${response.statusText}`);
}

export function logout(token, name) {
  localStorage.removeItem(name);
  localStorage.removeItem(token);
  window.location.href = 'login.html';
}

export function login(user) {
  localStorage.setItem('token', user.accessToken);
  localStorage.setItem('name', user.name);
  window.location.href = 'profile.html';
}

export function createPost(item) {
  return `<div class="py-3 border-bottom border-top rounded my-3">
            <div class="d-flex align-items-center">
              <h2 class="border-start border-5 border-secondary ms-2 ps-3 text-primary">${item.title}</h2>
              <span class="ms-3 text-muted">${item.created}</span>
            </div>
            <p class="mt-2 ms-4">${item.body}</p>
          </div>`
}