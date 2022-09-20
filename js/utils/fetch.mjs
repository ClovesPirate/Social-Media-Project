export async function fetchData(url, options) {
  const response = await fetch(url, options);
  if (response.ok) {
    return await response.json();
  }
  throw new Error(`${response.status} ${response.statusText}`);
}

export function displayError(message = 'An error has occured while retrieving data from the server. You can try reloading by pushing this button.') {
  return `<div class='error-container'>
            <p class='error'>${message}</p>
            <button class='btn btn-primary' onClick='window.location.reload();'>Reload</button>
          </div>`
};