import { FC, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../../store/slices/userSlice'
import { useNavigate } from 'react-router-dom'
import _axios from '../../axios/axios';
import { loginUser, registerUser } from '../../axios/api'
import { RootState } from '../../store/state';
import './SignIn.css';
import { Loader } from '../../elements/Loader/Loader';

export const SignIn: FC = () => {
  const dispatch = useDispatch()  
  let [loginMode, setLoginMode] = useState<Boolean>(true)
  let [isButtonDisabled, setButtonDisabled] = useState<Boolean>(false)
  let [isSignInFailed, setSignInFailed] = useState<Boolean>(false)
  let [isLoaderShown, setLoaderShown] = useState<Boolean>(true)
  let login = useRef<HTMLInputElement>(null)
  let password = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  const userState = useSelector((state: RootState) => state.user)

  interface UserRequestResponse {
    user: string,
    password: string,
    _id: string,
    __v: number
    img?: string
  }

  useEffect(() => {
    if(document.cookie.split(';').find(cookie => cookie.match(/token=.+/))) {
      loginUser({ 
        token: document.cookie.split(';')
          .filter(cookie => cookie.match(/token=.+/))[0]
          .split('token=')[1]
      }).then(response => {
        dispatch(setUserData(response.data.user))
        document.cookie = 'token=' + response.data.token
        navigate(`/api/v1/user/${response.data.user._id}`)
        setLoaderShown(false)
      })
    }
  }, [])

  const fetchUser = async (e?: React.FormEvent<HTMLButtonElement>, registerResponse?: UserRequestResponse) => {
    if(e) e.preventDefault()

    setButtonDisabled(true)

    try {
      await loginUser(
        registerResponse?.hasOwnProperty('_id')
        ? {registerResponse, justRegistered: true}
        : {login: login.current!.value, password: password.current!.value}
        ).then((response) => {
        setButtonDisabled(false)
        dispatch(setUserData(response.data))
        document.cookie = 'token=' + response.data.token
        navigate(`/api/v1/user/${response.data.responseObject._id}`)
      })
    } catch(error) {
      setButtonDisabled(false)
      setSignInFailed(true)
      console.error(error)
    }
  }

  const handleUser = async (e: React.FormEvent<HTMLButtonElement>) => {
    if(loginMode) fetchUser(e)
    else {
      e.preventDefault()
      await registerUser({ login: login.current!.value, password: password.current!.value }).then(response => {
        fetchUser(null, response.data.responseObject)
      })
    }
  }

  return (
    <div className="form-wrapper">
      <Loader isShown={isLoaderShown} />
      <form className="form">
        <div className={`form-alert ${isSignInFailed ? 'show' : ''}`}>Ooops, seems that you try to use incorrect login/password, try again</div>
        <h2>Sign {loginMode ? 'In' : 'Up'}</h2>
        <input 
          type="text" 
          className={isSignInFailed ? 'failed' : 'form__login'} 
          placeholder="Enter your login" 
          required
          ref={login}
        />
        <input 
          type="password" 
          className={isSignInFailed ? 'failed' : 'form__password'} 
          placeholder="Enter your password" 
          required
          ref={password}
        />
        <button 
          type="submit" 
          className="form__submit-button"
          onClick={(e) => handleUser(e)}
          disabled={isButtonDisabled ? true : false}
          >
          Sign {loginMode ? 'In' : 'Up'}
        </button>
      </form>  
      <p onClick={() => {
          login.current.value = ''
          password.current.value = ''
          setLoginMode(!loginMode)
          setSignInFailed(false)
        }
      }>
        {loginMode ? 'Haven\'t registered yet? Sign up' : 'Already have an account? Sign in'}
      </p>
    </div>
  )
};