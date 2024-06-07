import React from 'react'
import style from './Adminlayout.module.css'
import Clock from '../utils/Clock'
import { useSelector } from 'react-redux'
import { RootState } from '../features/store'
import { Outlet, useNavigate } from 'react-router-dom'
function Adminlayout() {
    let time: any = useSelector((state: RootState) => state.main.pingData)
    let navigate = useNavigate()
    return (
        <React.Fragment>

            <div className={style.top__bar}>
                <div className={style.left__item}>
                    <p> Logged in as {time.userName.toUpperCase()} (ADMIN)</p>
                </div>
                <div className={style.admin__ttl}>
                    <h2>BLOODIFY ADMIN DASHBOARD</h2>
                </div>
                <div className={style.right__item}>
                    <p>
                        Server Time:   <Clock initialTime={time.serverTime} />
                    </p>
                </div>
            </div>


            <div className={style.main__container}>
                <div className={style.nav__admin}>
                    <ul>
                        <li onClick={() => navigate('/')}>
                            Dashboard
                        </li>
                        <li onClick={() => navigate('/Users')}>
                            Users
                        </li>
                        <li
                            onClick={() => navigate('/BloodRequests')}
                        >
                            Blood Requests
                        </li>
                        <li
                            onClick={() => navigate('/BloodBanks')}
                        >
                            Blood Banks
                        </li>

                        <li
                            onClick={() => navigate('/Campagins')}
                        >
                            Campagins
                        </li>
                        <li>
                            Ambulances
                        </li>
                        <li>
                            News
                        </li>
                    </ul>
                </div>

            </div>
            <div className={style.main__outlet}>
                <Outlet />
            </div>






        </React.Fragment>
    )
}

export default Adminlayout