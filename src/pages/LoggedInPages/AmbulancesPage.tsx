import React from 'react'
import style from './AmbulancesPage.module.css'
import SearchAmbulance from '../../components/LoggedInComponents/AmbulanceComponet/SearchAmbulance'
import AmbulanceResult from '../../components/LoggedInComponents/AmbulanceComponet/AmbulanceResult'
function AmbulancesPage() {
    return (
        <React.Fragment>
            <div className={style.request__container}>
                <div className={style.section1__container}>
                    <div className={style.left_item}>
                        <SearchAmbulance />
                    </div>
                    <div className={style.right__item}>
                        <AmbulanceResult />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AmbulancesPage