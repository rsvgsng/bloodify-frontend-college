import React from 'react'
import style from './DashboardPage.module.css'
import QuickItems from '../../components/LoggedInComponents/DashboardComponents/QuickItems'
import RecentBloodRequest from '../../components/LoggedInComponents/DashboardComponents/RecentBloodRequest'
import { useDispatch } from 'react-redux'
import { getBloodRequest } from '../../features/mainSlice'
function DashboardPage() {





    return (
        <React.Fragment>
            <div className={style.dasboard__container}>
                <section className={style.section1__container}>
                    <div className={style.left__sec1__item}>
                        <QuickItems />
                    </div>
                    <div className={style.right__sec1__item}>
                        <RecentBloodRequest />
                    </div>

                </section>
            </div>

        </React.Fragment>
    )
}

export default DashboardPage