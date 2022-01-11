import { useNavigate } from 'react-router-dom';
import './Header.css';
import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/state';


export const Header: FC = () => {
  const navigate = useNavigate()
  let [isUserLogined, setUserLogined] = useState(false)
  const userState = useSelector((state: RootState) => state.user)

  useEffect(() => {
    if(document.cookie.split(';').find(cookie => cookie.match(/token=.+/))) {
      setUserLogined(true)
    } else {
      setUserLogined(false)
    }
  }, [window.location.href])

  
  return (
    <nav className="header">
      <h2>Blog</h2>
      <ul style={{'display': isUserLogined ? 'flex' : 'none'}}>
        <li className="header__link" onClick={() => navigate('/feed')}>Home</li>
        <li className="header__link" onClick={() => navigate('/')}>My profile</li>
      </ul>
    </nav>
  )
};