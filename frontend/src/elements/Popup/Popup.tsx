import e from 'express';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom'
import './Popup.css'

interface Props {
  isLogout?: Boolean,
  isProfileChanging?: Boolean,
  handlePopup: Function,
}

export const Popup: FC<Props> = ({ isLogout, isProfileChanging, handlePopup }) => {

  const navigate = useNavigate()

  const logoutUser = (logout: boolean, option: string) => {
    if(logout) {
      const cookie = document.cookie.split(';').filter(cookie => cookie.match(/token=.+/)).join(';')
      document.cookie = cookie + '; max-age=0'
      return navigate('/')
    }
    handlePopup(option)
  }

  if(isLogout) {
    return (
      <div className="popup-wrapper" style={isLogout || isProfileChanging ? {'display': 'block'} : {'display': 'none'}}>
        <div className="logout-popup">
          <h3>Are you sure you want to exit from account?</h3>
          <div className="logout-popup__buttons">
            <button onClick={() => logoutUser(true, 'LOGOUT')}>Yes</button>
            <button onClick={() => logoutUser(false, 'LOGOUT')}>Cancel</button>
          </div>
        </div>
      </div>
    )
  } else if (isProfileChanging) {
    return <></>
  } else {
    return <></>
  }
}