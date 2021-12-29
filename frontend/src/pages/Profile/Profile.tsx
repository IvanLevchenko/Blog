import { FC, useEffect, useState } from 'react';
import './Profile.css';
import _axios from '../../axios/axios'
import { RootState, state } from '../../store/state';
import { getUser } from '../../axios/api';
import { useSelector } from 'react-redux';

//images
import timeImage from '../../assets/time.svg';
import calendarImage from '../../assets/calendar.svg';
import locationImage from '../../assets/location.svg';
import articleImage from '../../assets/article.svg';
import defaultUserPhoto from '../../assets/user.svg'

export const Profile: FC = () => {
  interface UserData {
    user: string,
    _id: string,
    photo?: ImageData
  }

  const userState = useSelector((state: RootState) => state.user)
  let [userData, setUserData] = useState<UserData>();

  useEffect(() => {
    const userId: string | undefined = window.location.href.split('/').at(-1)
    getUser(userState.user.token, userId).then(response => {
      setUserData({...response.data.user[0]})
    })

  }, [])

  return (
    <div className="profile-wrapper">
      <div className="profile-header">
        <div className="profile-header__img"><img src={userData?.photo ? userData?.photo : defaultUserPhoto} alt="avatar" /></div>
        <p className="profile-header__nickname">{userData?.user}</p>
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
          <button className="profile-body__interactive-button">Edit profile</button>
          <button className="profile-body__interactive-button">Log out</button>
        </div>
        <div className="profile-body__header"></div> 
      </div>
    </div>
  )
}