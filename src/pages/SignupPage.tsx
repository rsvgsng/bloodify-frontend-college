import React from 'react'
import style from './SignupPage.module.css'
import signupimg from '../Assets/signup.png'
function SignupPage() {
    function handleform(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const form = e.currentTarget
        const data = new FormData(form)
        const username = data.get('username')
        const password = data.get('password')
        const fullname = data.get('fullname')
        const phonenumber = data.get('phonenumber')
        const address = data.get('address')
        const bloodtype = data.get('bloodtype')
        console.log({ username, password, fullname, phonenumber, address, bloodtype })

    }
    return (
        <React.Fragment>
            <section className={style.signup__section}>
                <div className={style.left__item}>
                    <img src={signupimg} />
                </div>
                <div className={style.right__item}>
                    <h2>Signup</h2>
                    <form onSubmit={(e) => handleform(e)}>
                        <label htmlFor="username">Your username:</label>
                        <input required name='username' type="username" placeholder="Enter your username" />

                        <label htmlFor="password">Your new password:</label>
                        <input required name='password' type="password" placeholder="Enter your password" />

                        <label htmlFor="fullname">Your fullname:</label>
                        <input required name='fullname' type="text" placeholder="Enter your fullname" />

                        <label htmlFor="phonenumber">Your phone number:</label>
                        <input required name='phonenumber' type="number" placeholder="Enter your phone" />

                        <label htmlFor="address">Your full address:</label>
                        <input required name='address' type="text" placeholder="Enter your Address" />

                        <label htmlFor="bloodtype">Your blood type:</label>

                        <select name="bloodtype" id="">
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>

                        <button type="submit">Signup</button>
                    </form>
                </div>
            </section>
        </React.Fragment>
    )
}

export default SignupPage