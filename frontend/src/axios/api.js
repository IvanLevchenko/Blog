import _axios from './axios';

export const loginUser = (userInfo) => {
  return _axios.post('/sign-in', JSON.stringify(userInfo), {
    headers: { 'Content-Type': 'application/json' }
  })
}

export const getUser = (token, _id) => {
  return _axios.get(`/get-user?token=${token}&_id=${_id}`, {
    headers: { 'Content-Type': 'application/json' }
  })
}