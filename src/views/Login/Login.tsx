import { FC, FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import * as api from '../../api'

import player from '../../assets/images/home/player.png'
import Logo from '../../assets/images/home/logo.png'
import { InputField } from "../../component/InputField/InputField";
import { Button } from "../../component/Button/Button";

import './Login.scss'

export const Login: FC = () => {

  const navigate = useNavigate()

  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')

  const onLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = {
      username: username,
      password: password
    }
    api.loginAuthentication(data)
      .then(response => {
        if (response.code === 'OK') {
          navigate('/dashboard')
        }
      })
      .catch(e => {
        if (e instanceof api.UnauthorizedError) {
          setError('Wrong Credentials!')
        }
        return undefined
      })
      setUsername('')
      setPassword('')
  }

  return(
    <div className="Login">
      <div className='Login__form'>
        <img src={Logo} width={160} className='Login__form-img mx-auto pb-3' alt='logo'/>
        <h1 className='Login__form-title'>Login to your account</h1>
        <form onSubmit={onLogin} className='Login__form-body'>
          <div className="Login__form-body--input">
            <InputField placeholder='Username' value={username}
                        onChange={(event) => setUsername(event.target.value)} />
          </div>
          <div className='Login__form-body--input'>
            <InputField placeholder='Password' value={password}
                        onChange={(event) => setPassword(event.target.value)} type='password'/>
          </div>
          <Button type='submit' className='Login__form-body--btn'>Login</Button>
        </form>
        <p>{error && error}</p>
      </div>
      <div className='Login__hero'>
        <img src={player} alt='hero_image'/>
      </div>
    </div>
  )
}
