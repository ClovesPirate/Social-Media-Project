export function postOptions(method, body) {
  return {
    method: method,
    body: body,
    headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    },
  }
}

export function postOptionsValidated(method, body, token) {
  return {
    method: method,
    body: body,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json;'
    }
  }
}