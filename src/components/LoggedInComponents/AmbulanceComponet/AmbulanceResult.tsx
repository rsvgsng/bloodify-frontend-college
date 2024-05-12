import React from 'react'
import style from './AmbulanceResult.module.css'
import { FaAmbulance } from "react-icons/fa";

function AmbulanceResult() {
    return (
        <React.Fragment>
            <div className={style.search__result__box}>
                <div className={style.header__ttl}>
                    <h2>Search Results (6):</h2>
                </div>

                <div className={style.search__result__body}>
                    {/* <div className={style.not__searched}>
                    <h3>
                        Please search for blood donors <TbDatabaseSearch />
                    </h3>
                </div> */}
                    {
                        Array(6).fill(0).map((e) => {
                            return (
                                <div className={style.result__item}>
                                    <div className={style.blood__type}>
                                        <FaAmbulance />
                                    </div>
                                    <div className={style.doner__details}>
                                        <div className={style.doner__name}>Nepal Redcross S</div>
                                        <div className={style.doner__address}>Birtamode-4 , Jhapa</div>
                                        <div className={style.doner__address}>9806071128</div>
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

export default AmbulanceResult