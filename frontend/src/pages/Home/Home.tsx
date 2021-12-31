import React, { FC, useEffect } from 'react';
import { loginUser } from '../../axios/api'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setUserData } from '../../store/slices/userSlice'
import './Home.css'

export const Home: FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if(document.cookie.length) {
      const token = document.cookie.split(';').find(cookie => cookie.includes('token=')).split('token=')[1]
      loginUser({token}).then(response => {
        console.log(response)
        dispatch(setUserData(response.data))
        navigate(`/api/v1/user/${response.data.user._id}`)
      })
    }
  }, [])

  return (
    <div className="home">
      <div className="home__recent-posts">
        <h4>Recent posts</h4>
      </div>
    </div>
  )
}