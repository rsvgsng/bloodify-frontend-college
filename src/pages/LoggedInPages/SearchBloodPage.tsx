import React from 'react'
import style from './SearchBloodPage.module.css'
import SearchBloodBox from '../../components/LoggedInComponents/SearchBloodComponents/SearchBloodBox'
import SearchResult from '../../components/LoggedInComponents/SearchBloodComponents/SearchResult'
function SearchBloodPage() {
    return (
        <React.Fragment>
            <div className={style.request__container}>
                <div className={style.section1__container}>
                    <div className={style.left_item}>
                        <SearchBloodBox />
                    </div>
                    <div className={style.right__item}>
                        <SearchResult />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SearchBloodPage