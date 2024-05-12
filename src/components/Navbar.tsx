import React from 'react'
import styles from './Navbar.module.css'
import logo from '../Assets/logo.png'
import { useNavigate, useLocation } from 'react-router-dom'
import { isLoggedin } from '../App'
import { MdDashboard, MdNewspaper, MdEvent, MdBloodtype } from "react-icons/md";
import { FaAmbulance } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
    const navigate = useNavigate()
    return (
        <React.Fragment>
            <div className={styles.nav__container}>
                <div
                    onClick={() => navigate('/')}

                    className={styles.left__item}>
                    <img src={logo} />
                    <h2>Bloodify</h2>
                </div>
                {
                    isLoggedin ?
                        <LoggedInNav />
                        : <LoggedOutNav />
                }




            </div>
        </React.Fragment>
    )
}

export default Navbar



function LoggedOutNav() {
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <div className={styles.right__item}>
            <ul>
                <li
                    style={{
                        color: location.pathname === '/' ? 'red' : 'black'
                    }}
                    onClick={() => navigate('/')}

                >Home</li>
                <li
                    style={{
                        color: location.pathname === '/About' ? 'red' : 'black'
                    }}
                    onClick={() => navigate('/About')}
                >About Us</li>
                <li
                    style={{
                        color: location.pathname === '/Login' ? 'red' : 'black'
                    }}
                    onClick={() => navigate('/Login')}

                >Login</li>
                <li
                    onClick={() => navigate('/Signup')}
                    style={{
                        backgroundColor: 'red',
                        color: 'white',
                        padding: '10px 10px',
                        borderRadius: '5px'

                    }}>Join Now</li>
            </ul>
        </div>
    )
}

function LoggedInNav() {
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <div className={styles.right__item}>
            <ul>
                <li
                    style={{
                        color: location.pathname === '/' ? 'red' : 'black'
                    }}
                    onClick={() => navigate('/')}

                >Dashboard

                    <MdDashboard /></li>
                <li
                    style={{
                        color: location.pathname === '/SearchBlood' ? 'red' : 'black'
                    }}
                    onClick={() => navigate('/SearchBlood')}
                >Search Blood
                    <MdBloodtype />
                </li>

                <li
                    style={{
                        color: location.pathname === '/Ambulances' ? 'red' : 'black'
                    }}
                    onClick={() => navigate('/Ambulances')}
                >Ambulances
                    <FaAmbulance />
                </li>


                <li
                    className={styles.user__name__s}
                    onClick={() => {
                        localStorage.removeItem('token')
                        window.location.reload()
                    }}
                ><FaUserCircle />
                    <p>
                        rsvgsngrsv
                    </p>
                </li>
            </ul>
        </div >
    )
}