import { FC, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../../store/slices/userSlice'
import { useNavigate } from 'react-router-dom'
import _axios from '../../axios/axios';
import { loginUser } from '../../axios/api'
import './SignIn.css';

export const SignIn: FC = () => {
  const dispatch = useDispatch()  
  let [loginMode, setLoginMode] = useState<Boolean>(true)
  let [isButtonDisabled, setButtonDisabled] = useState<Boolean>(false)
  let login = useRef<HTMLInputElement>(null)
  let password = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  const fetchUser = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    let userInfo = {
      login: '',
      password: ''
    }

    setButtonDisabled(true)

    userInfo.login = login.current!.value
    userInfo.password = password.current!.value

    try {
      await loginUser(userInfo).then((response) => {
        setButtonDisabled(false)
        dispatch(setUserData(response.data))
        navigate(`/api/v1/user/${response.data.responseObject[0]._id}`)
      })
    } catch(error) {
      setButtonDisabled(false)
      console.error(error)
    }
  }

  return (
    <div className="form-wrapper">
      <form className="form">
        <h2>Sign {loginMode ? 'In' : 'Up'}</h2>
        <input 
          type="text" 
          className="form__login" 
          placeholder="Enter your login" 
          required
          ref={login}
        />
        <input 
          type="password" 
          className="form__password" 
          placeholder="Enter your password" 
          required
          ref={password}
        />
        <button 
          type="submit" 
          className="form__submit-button"
          onClick={fetchUser}
          disabled={isButtonDisabled ? true : false}
          >
          Sign {loginMode ? 'In' : 'Up'}
        </button>
      </form>  
      <p onClick={() => setLoginMode(!loginMode)}>{loginMode ? 'Haven\'t registered yet? Sign up' : 'Already have an account? Sign in'}</p>
    </div>
  )
};