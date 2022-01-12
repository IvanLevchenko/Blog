import _axios from './axios';

export const loginUser = (userInfo) => {
  return _axios.post('/sign-in', JSON.stringify(userInfo), {
    headers: { 'Content-Type': 'application/json' }
  })
}

export const getUser = (token, _id) => {
  return _axios.get(`/get-user?token=${token}&_id=${_id}`, {
    headers: { 
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },

  })
}

export const registerUser = (userInfo) => {
  return _axios.post('/sign-up', JSON.stringify(userInfo), {
    headers: { 'Content-Type': 'application/json' }
  })
}

export const uploadPost = (postInfo) => {
  return _axios.post('/upload-post', JSON.stringify(postInfo), {
    headers: { 'Content-Type': 'application/json' }
  })
}