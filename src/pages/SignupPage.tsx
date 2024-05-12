import React from 'react'
import style from './SignupPage.module.css'
import signupimg from '../Assets/signup.png'
import { districtsOfNepal } from '../components/LoggedInComponents/SearchBloodComponents/SearchBloodBox'
import toast from 'react-hot-toast'
import { API_ROUTE } from '../utils/Constants'
function SignupPage() {
    async function handleform(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const form = e.currentTarget
        const data = new FormData(form)
        const userName = data.get('userName')
        const password = data.get('password')
        const fullName = data.get('fullName')
        const phone = data.get('phone')
        const fullAddress = data.get('fullAddress')
        const district = data.get('district')
        const bloodType = data.get('bloodType')
        if (!userName || !password || !fullName || !phone || !fullAddress || !district || !bloodType) return toast.error('Please fill all fields', {
            duration: 4000,
            position: 'top-center',
        })
        let a = await fetch(API_ROUTE + '/auth/createUser', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userName, password, fullName, phone, fullAddress, district, bloodType })
        })
        let res = await a.json()
        if (res.statusCode == 200) {
            localStorage.setItem('token', res.data)
            window.location.reload()
        } else {
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
                    <h2>Signup</h2>
                    <form onSubmit={(e) => handleform(e)}>
                        <label htmlFor="userName">Your username:</label>
                        <input required name='userName' type="username" placeholder="Enter your username" />

                        <label htmlFor="password">Your new password:</label>
                        <input required name='password' type="password" placeholder="Enter your password" />

                        <label htmlFor="fullName">Your fullname:</label>
                        <input required name='fullName' type="text" placeholder="Enter your fullname" />

                        <label htmlFor="phone">Your phone number:</label>
                        <input required name='phone' type="number" placeholder="Enter your phone" />


                        <label htmlFor="">Your District:</label>
                        <select defaultValue={'Jhapa'} name="district" id="">
                            {
                                districtsOfNepal.map((district) => {
                                    return (
                                        <option value={district.name}>{district.name}</option>
                                    )
                                })
                            }
                        </select>

                        <label htmlFor="fullAddress">Your full address:</label>
                        <input required name='fullAddress' type="text" placeholder="Enter your Address" />



                        <label htmlFor="bloodType">Your blood type:</label>

                        <select name="bloodType" id="">
                            <option selected value="A+">A+</option>
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