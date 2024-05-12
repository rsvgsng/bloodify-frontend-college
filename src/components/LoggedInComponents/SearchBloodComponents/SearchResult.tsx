import React from 'react'
import style from './SearchResult.module.css'
import { TbDatabaseSearch } from "react-icons/tb";

function SearchResult() {


    return (
        <React.Fragment>
            <div className={style.search__result__box}>
                <div className={style.header__ttl}>
                    <h2>Search Results (10):</h2>
                </div>

                <div className={style.search__result__body}>
                    {/* <div className={style.not__searched}>
                        <h3>
                            Please search for blood donors <TbDatabaseSearch />
                        </h3>
                    </div> */}
                    {
                        Array(10).fill(0).map((e) => {
                            return (
                                <div className={style.result__item}>
                                    <div className={style.blood__type}>A+</div>
                                    <div className={style.doner__details}>
                                        <div className={style.doner__name}>John Doe</div>
                                        <div className={style.doner__address}>Birtamode-4 , Jhapa</div>
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

export default SearchResult