import React from 'react'
import style from './AmbulanceResult.module.css'
import { FaAmbulance } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { RootState } from '../../../features/store';
import { sat, SearchAmbulanceType } from '../../../utils/ResponseTypes';
import { TbDatabaseSearch } from 'react-icons/tb';

function AmbulanceResult() {
    let searchAmbulanceData: any = useSelector((state: RootState) => state.main.searchAmbulanceData)
    let data: SearchAmbulanceType | any = searchAmbulanceData

    return (
        <React.Fragment>
            <div className={style.search__result__box}>
                <div className={style.header__ttl}>
                    <h2>Search Results  ({data?.data?.length || 0}):</h2>
                </div>

                <div className={style.search__result__body}>
                    {
                        data?.length < 1 ?
                            <div className={style.not__searched}>
                                <h3>
                                    Search for blood donors in your area <TbDatabaseSearch />
                                </h3>
                            </div> :
                            data?.data?.map((e: sat) => {
                                return (
                                    <div className={style.result__item}>
                                        <div className={style.blood__type}>
                                            <FaAmbulance />
                                        </div>
                                        <div className={style.doner__details}>
                                            <div className={style.doner__name}>
                                                {e.ambulanceProvider}
                                            </div>
                                            <div className={style.doner__address}>
                                                {e.ambulanceLocation}
                                            </div>
                                            <div className={style.doner__address}>
                                                {e.ambulanceContact}
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) ||
                            <div className={style.not__searched}>
                                <h3>
                                    No ambulances found. <TbDatabaseSearch />
                                </h3>
                            </div>

                    }

                </div>
            </div>

        </React.Fragment>
    )
}

export default AmbulanceResult