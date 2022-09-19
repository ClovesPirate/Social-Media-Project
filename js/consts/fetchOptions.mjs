export const postOptions = {
  method: 'POST',
  body: payload,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
}

export const postOptionsToken = {
  method: 'POST',
  body: payload,
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json; charset=UTF-8',
  },
}

export const putOptionsToken = {
  method: 'PUT',
  body: payload,
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json; charset=UTF-8',
  },
}

export const deleteOptionsToken = {
  method: 'DELETE',
  body: payload,
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json; charset=UTF-8',
  },
}