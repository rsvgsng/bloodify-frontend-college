import React from 'react'
import style from './SearchResult.module.css'
import { TbDatabaseSearch } from "react-icons/tb";
import { useSelector } from 'react-redux';
import { RootState } from '../../../features/store';
import { SearchResponseType, Sr } from '../../../utils/ResponseTypes';

function SearchResult() {
    let searchData: any = useSelector((state: RootState) => state.main.searchBloodData)
    let data: SearchResponseType | any = searchData

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

                            data.data?.map((e: Sr) => {
                                return (
                                    <div className={style.result__item}>
                                        <div className={style.blood__type}>{e.bloodType}</div>
                                        <div className={style.doner__details}>
                                            <div className={style.doner__name}>
                                                {e.fullName}
                                            </div>
                                            <div className={style.doner__address}>
                                                {e.fullAddress} , {e.district}
                                            </div>
                                            <div className={style.doner__address}>
                                                {e.phone}
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) ||
                            <div className={style.not__searched}>
                                <h3>
                                    No result found <TbDatabaseSearch />
                                </h3>
                            </div>

                    }

                </div>
            </div>

        </React.Fragment>
    )
}

export default SearchResult