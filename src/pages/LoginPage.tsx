import React from 'react'
import style from './SignupPage.module.css'
import signupimg from '../Assets/signup.png'
import { API_ROUTE } from '../utils/Constants'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { getBloodRequest } from '../features/mainSlice';

function LoginPage() {
  async function handleform(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const username = data.get('username')
    const password = data.get('password')
    if (!username || !password) return toast.error('Please fill all fields', {
      duration: 4000,
      position: 'top-center',
    })

    let p = await fetch(API_ROUTE + '/auth/login', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    let res = await p.json()
    if (res.statusCode == 200) {
      localStorage.setItem('token', res.data)
      window.location.href = '/'

    } else {
      console.log(res)
      toast.error(res.message, {
        duration: 4000,
        position: 'top-center',

      })
    }

  }
  return (
    <React.Fragment>
      <section className={style.signup__section}>
        <div className={style.left__item}>
          <img src={signupimg} />
        </div>
        <div className={style.right__item}>
          <h2>Login</h2>
          <form onSubmit={(e) => handleform(e)}>
            <label htmlFor="username"> username:</label>
            <input required name='username' type="username" placeholder="Enter your username" />

            <label htmlFor="password"> password:</label>
            <input required name='password' type="password" placeholder="Enter your password" />



            <button
              onClick={() => {
                handleform
              }}
              type="submit">Login</button>
          </form>
        </div>
      </section>
    </React.Fragment>
  )
}

export default LoginPage