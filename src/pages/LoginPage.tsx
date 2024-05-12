import React from 'react'
import style from './SignupPage.module.css'
import signupimg from '../Assets/signup.png'

function LoginPage() {
  function handleform(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const username = data.get('username')
    const password = data.get('password')
    console.log({ username, password })

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
                localStorage.setItem('token', '123')
                window.location.reload()
              }}
              type="submit">Login</button>
          </form>
        </div>
      </section>
    </React.Fragment>
  )
}

export default LoginPage