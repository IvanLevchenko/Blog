import { FC, useEffect, useState } from 'react';
import './Profile.css';
import _axios from '../../axios/axios'
import { state } from '../../store/reducers/state';
import { getUser } from '../../axios/api';
import { setLoginedUserAction } from '../../store/actions/userAction';

export const Profile: FC = () => {
  interface UserData {
    user: string,
    _id: string
  }

  const store = state.getState()
  let [userData, setUserData] = useState<UserData>();

  useEffect(() => {
    const userId: string | undefined = window.location.href.split('/').at(-1)
    store.user.then(response=> {
      document.cookie = 'token=' + response.token;  
      getUser(response.token, userId).then(response => {
        setUserData(response.data.user[0])
      })
      setLoginedUserAction({ logined: true })
    })
  }, [])

  return (
    <div className="profile-wrapper">
      <div className="profile-header">
        <div className="profile-header__img"><img src="" alt="avatar" /></div>
        <div className="profile-header__info">
          <p className="profile-header__nickname">{userData?.user}</p>
        </div>
      </div>
      <div className="pofile-body"></div>
    </div>
  )
}