import React from 'react'
import style from './RecentBloodRequest.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../features/store'
import { RequestBloodType } from '../../../utils/ResponseTypes'
import { setDrawerData, setDrawerOpen } from '../../../features/mainSlice'
function RecentBloodRequest() {
    const bloodRequest: any = useSelector((state: RootState) => state.main.bloodRequestData)
    let data: RequestBloodType[] = bloodRequest.data
    const dispatch = useDispatch()
    return (
        <React.Fragment>
            <div className={style.side__bar}>
                {/* This is sidebar */}
            </div>


            <div className={style.recent__reqs}>
                <div className={style.header__ttl}>
                    <h2>Recent <span style={{ color: 'red' }}>Blood Requests {data ? `(${data.length})` : null}</span>  </h2>
                </div>

                <div className={style.recent__blood__req__container}>
                    {
                        data?.map((_, i) => {
                            return (
                                <div className={style.req__item__blood}
                                    onClick={() => {
                                        dispatch(setDrawerOpen(true)),
                                            dispatch(setDrawerData(_))
                                    }}
                                >
                                    <div className={style.blood__type}>
                                        <h3>{_.bloodGroup}</h3>
                                    </div>
                                    <div className={style.patient__name}>
                                        <h3>{_.patientName} </h3>
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