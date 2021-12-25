import { useNavigate } from 'react-router-dom';
import './Header.css';
import { state } from '../../store/reducers/state';
import { FC, useCallback, useEffect, useState } from 'react';

export const Header: FC = () => {
  const history = useNavigate()
  const store = state.getState()
  let [isUserLogined, setUserLogined] = useState(false)
  
  const checkLoginedUser = (): void => {
    console.log(store)
    // store.user.then(response => {
      // if(response.data.logined) {
      //   setUserLogined(true)
      // }
      // console.log(response)
    // })
  }
  
  state.subscribe(checkLoginedUser)

  // state.subscribe(checkLoginedUser)

  return (
    <nav className="header">
      <h2>Blog</h2>
      <ul>
        <li className="header__link" onClick={() => history('/')}>Home</li>
        {isUserLogined 
        ? <li className="header__link" onClick={() => history('/')}>My profile</li>
        : <li className="header__link" onClick={() => history('/login')}>Sign In</li>
        }
      </ul>
    </nav>
  )
};