import { useNavigate } from 'react-router-dom';
import './Header.css';
import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/state';


export const Header: FC = () => {
  const navigate = useNavigate()
  let [isUserLogined, setUserLogined] = useState(false)
  const userState = useSelector((state: RootState) => state.user)
  const urlRegExp: RegExp = /\/api\/v1\/user\/.+/

  useEffect(() => {
    if(window.location.href.split(window.location.host)[1].match(urlRegExp)) {
      setUserLogined(true)
    }
  }, [window.location.href])

  
  return (
    <nav className="header">
      <h2>Blog</h2>
      <ul>
        <li className="header__link" onClick={() => navigate('/')}>Home</li>
        {isUserLogined 
        ? <li className="header__link" onClick={() => navigate(`/api/v1/user/${userState.user.responseObject[0]._id}`)}>My profile</li>
        : <li className="header__link" onClick={() => navigate('/login')}>Sign In</li>
      }
      </ul>
    </nav>
  )
};