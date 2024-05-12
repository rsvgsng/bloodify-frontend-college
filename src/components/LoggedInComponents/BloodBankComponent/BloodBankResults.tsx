import React from 'react'
import style from '../AmbulanceComponet/AmbulanceResult.module.css'
import { BiSolidDonateBlood } from "react-icons/bi";
import { useSelector } from 'react-redux';
import { RootState } from '../../../features/store';
import { sbbt, SearchBloodBankType } from '../../../utils/ResponseTypes';
import { TbDatabaseSearch } from 'react-icons/tb';

function BloodBankResults() {
    let searchBloodBankData: any = useSelector((state: RootState) => state.main.searchBloodBankData)
    let data: SearchBloodBankType | any = searchBloodBankData

    return (
        <React.Fragment>
            <div className={style.search__result__box}>
                <div className={style.header__ttl}>
                    <h2>Search Results ({data?.data?.length || 0}):</h2>
                </div>

                <div className={style.search__result__body}>

                    {
                        data?.length < 1 ?
                            <div className={style.not__searched}>
                                <h3>
                                    Search for blood donors in your area <TbDatabaseSearch />
                                </h3>
                            </div> :

                            data?.data?.map((e: sbbt) => {
                                return (
                                    <div className={style.result__item}>
                                        <div className={style.blood__type}>
                                            <BiSolidDonateBlood />
                                        </div>
                                        <div className={style.doner__details}>
                                            <div className={style.doner__name}>{e.bankName} ({e.bankDistrict})</div>
                                            <div className={style.doner__address}>{e.bankLoaction}</div>
                                            <div className={style.doner__address}>{e.bankContact}</div>
                                        </div>
                                    </div>
                                )
                            }) ||
                            <div className={style.not__searched}>
                                <h3>
                                    No Bloodbanks found. <TbDatabaseSearch />
                                </h3>
                            </div>

                    }

                </div>
            </div>

        </React.Fragment>
    )
}

export default BloodBankResults