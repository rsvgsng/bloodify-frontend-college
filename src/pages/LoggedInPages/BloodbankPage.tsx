import React from 'react'
import style from './SearchBloodPage.module.css'
import SearchBloodBox from '../../components/LoggedInComponents/SearchBloodComponents/SearchBloodBox'
import SearchResult from '../../components/LoggedInComponents/SearchBloodComponents/SearchResult'
import BloodBankSearch from '../../components/LoggedInComponents/BloodBankComponent/BloodBankSearch'
import BloodBankResults from '../../components/LoggedInComponents/BloodBankComponent/BloodBankResults'
function BloodbankPage() {
    return (
        <React.Fragment>
            <div className={style.request__container}>
                <div className={style.section1__container}>
                    <div className={style.left_item}>
                        <BloodBankSearch />
                    </div>
                    <div className={style.right__item}>
                        <BloodBankResults />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default BloodbankPage