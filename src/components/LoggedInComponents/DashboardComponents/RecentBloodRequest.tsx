import React from 'react'
import style from './RecentBloodRequest.module.css'
function RecentBloodRequest() {

    return (
        <React.Fragment>
            <div className={style.side__bar}>
                {/* This is sidebar */}
            </div>


            <div className={style.recent__reqs}>
                <div className={style.header__ttl}>
                    <h2>Recent <span style={{ color: 'red' }}>Blood Requests</span>  </h2>
                </div>

                <div className={style.recent__blood__req__container}>
                    {
                        Array(20).fill(0).map((_, i) => {
                            return (
                                <div className={style.req__item__blood}>
                                    <div className={style.blood__type}>
                                        <h3>A+</h3>
                                    </div>
                                    <div className={style.patient__name}>
                                        <h3>Rishav Ghising </h3>
                                    </div>

                                </div>
                            )
                        })
                    }


                </div>

            </div>
        </React.Fragment>
    )
}

export default RecentBloodRequest