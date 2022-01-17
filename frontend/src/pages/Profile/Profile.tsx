import { FC, useEffect, useState } from 'react';
import './Profile.css';
import _axios from '../../axios/axios'
import { RootState, state } from '../../store/state';
import { getUser } from '../../axios/api';
import { useNavigate } from 'react-router-dom'

//images
import timeImage from '../../assets/profile/time.svg';
import calendarImage from '../../assets/profile/calendar.svg';
import locationImage from '../../assets/profile/location.svg';
import articleImage from '../../assets/profile/article.svg';
import defaultUserPhoto from '../../assets/profile/user.svg'
import { setUserData } from '../../store/slices/userSlice';
import { useDispatch } from 'react-redux';

export const Profile: FC = () => {
  interface responseUserData {
    user: {
      _id: string,
      user: string,
      password: string,
      img?: string
    }
    token: string
  }
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let [responseUserData, setResponseUserData] = useState<responseUserData>();

  useEffect(() => {
    if(window.location.pathname.match(/api\/v1\/user\/.+/) ) {
      const userId: string = window.location.href.split('/').at(-1)
      const token = document.cookie.split(';').filter(cookie => cookie.match(/token=.+/))[0].split('token=')[1]
      
      getUser(token, userId).then(response => {
        setResponseUserData({...response.data})
        dispatch(setUserData(response.data))
      })
    }

    if(!document.cookie.split(';').find(cookie => cookie.match(/token=.+/))) {
      navigate('/')
    }

  }, [])

  let [isLogout, setLogout] = useState<boolean>(false)
  
  const handlePopup = () => {
    setLogout(!isLogout)
    document.body.style.overflow = !isLogout ? 'hidden' : 'visible'
  }
  
  const logoutUser = (logout: boolean) => {
    if(logout) {
      let cookies = document.cookie.split(';');

      for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        let eqPos = cookie.indexOf('=');
        let name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
        document.cookie = name + '=;max-age=0';
      }

      return navigate('/')
    }
    handlePopup()
  }

  return (
    <div className="profile-wrapper">
      <div className="popup-wrapper" style={isLogout ? {'display': 'block'} : {'display': 'none'}}>
        <div className="logout-popup">
          <h3>Are you sure you want to exit from account?</h3>
          <div className="logout-popup__buttons">
            <button onClick={() => logoutUser(true)}>Yes</button>
            <button onClick={() => logoutUser(false)}>Cancel</button>
          </div>
        </div>
      </div>
      <div className="profile-header">
        <div className="profile-header__img">
          <img src={responseUserData?.user?.img ? responseUserData?.user?.img : defaultUserPhoto} alt="avatar" />
        </div>
        <p className="profile-header__nickname">{responseUserData?.user.user}</p>
        <div className="profile-header__info">
          <div className="profile-header__info_block">
            <img src={locationImage} alt="" />
            <p className="profile-header__info_block_text">Location:</p>
          </div>
          <div className="profile-header__info_block">
            <img src={calendarImage} alt="" />
            <p className="profile-header__info_block_text">Age:</p>      
          </div>
          <div className="profile-header__info_block">
            <img src={timeImage} alt="" />
            <p className="profile-header__info_block_text">Registered:</p>
          </div>
          <div className="profile-header__info_block">
            <img src={articleImage} alt="" />
            <p className="profile-header__info_block_text">Articles:</p>
          </div>
        </div>
      </div>
      <div className="profile-body">
        <div className="profile-body__interactive">
          <button className="profile-body__interactive-button" 
            onClick={() => navigate('/create-post')}
          >
          Create post
          </button>
          <button className="profile-body__interactive-button" onClick={() => navigate(`/edit/${responseUserData.token}`)} >Edit profile</button>
          <button className="profile-body__interactive-button" onClick={handlePopup}>Log out</button>
        </div>
        <div className="profile-body__header">
          <p>By date</p>
          <p>By size</p>
          <p>By Rating</p>
        </div> 
      </div>
    </div>
  )
}