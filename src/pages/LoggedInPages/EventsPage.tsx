import React from 'react'
import style from './EventsPage.module.css'
import { MdDateRange } from 'react-icons/md'
import { GrOrganization } from "react-icons/gr";

function CampaignsPage() {
    return (
        <React.Fragment>
            <div className={style.event__container}>
                <div className={style.header__ttl}>
                    <h2>Upcoming Campaigns </h2>
                </div>
                <div className={style.event__body}>
                    {
                        Array(10).fill(0).map((e) => {
                            return (
                                <div className={style.news__item} onClick={(e) => { }}>
                                    <div className={style.news__image}>
                                        <img src="https://facts.net/wp-content/uploads/2023/09/12-fascinating-facts-about-floppa-1695888446.jpg" alt="" />
                                    </div>
                                    <div className={style.details__news}>

                                        <div className={style.news__title}>
                                            <h3>Blood donation on the ocassion of new year</h3>
                                        </div>
                                        <div className={style.news__meta}>
                                            <div className={style.news__date}>
                                                <MdDateRange />
                                                <span>
                                                    2021-09-09
                                                </span>
                                            </div>
                                            <div className={style.news__author}>
                                                <GrOrganization />
                                                <span>Redcross Birtamode</span>
                                            </div>

                                        </div>

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

export default CampaignsPage