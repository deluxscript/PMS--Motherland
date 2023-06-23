import {FC, FormEvent, useState} from "react"
import {useNavigate} from "react-router-dom"
import * as api from '../../api'

import player from '../../images/home/player.png'
import Logo from '../../images/home/logo.png'

import './Login.css'

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
    <div className="heroHeight flex justify-center items-center">
      <div className='bg-yellowColor w-1/2 h-full'>
        <div className='flex flex-col justify-center mx-auto w-1/2 h-full'>
          <img src={Logo} width={160} className='mx-auto pb-3'/>
          <h1 className='text-2xl font-bold'>Login to your account</h1>
          <form onSubmit={onLogin} className="mx-auto w-full">
            <div className="flex flex-col">
              <div className='my-2'>
                <input
                  type="text"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  placeholder="Username"
                  className="focus:outline-none border w-full h-14 py-2 px-4 rounded-tl-md"
                />
              </div>
              <div className='my-2'>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Password"
                  className="focus:outline-none border w-full h-14 py-2 px-4 rounded-tl-md"
                />
              </div>
              <button type="submit"
                className="bg-blackColor text-white py-2 mt-4 h-14 px-6 rounded-tr-md">Login
              </button>
            </div>
          </form>
          <p>{error && error}</p>
        </div>
      </div>
      <div className='bg-blackColor w-1/2 h-full'>
        <div className='flex justify-center items-center h-full'>
          <img src={player} />
        </div>
      </div>
    </div>
  )
}
