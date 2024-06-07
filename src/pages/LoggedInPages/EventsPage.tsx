import React from 'react'
import style from './EventsPage.module.css'
import { MdDateRange } from 'react-icons/md'
import { GrOrganization } from "react-icons/gr";
import imagec from '../../Assets/campimg.png'
import { useSelector } from 'react-redux';
import { RootState } from '../../features/store';
import { ICampaignsMain } from '../../AdminPages/Admin.Interface';
function CampaignsPage() {
    const campaigns = useSelector((state: RootState) => state.main.UserCampaignsData)
    let data: ICampaignsMain = campaigns



    return (
        <React.Fragment>
            <div className={style.event__container}>
                <div className={style.header__ttl}>
                    <h2>Upcoming Campaigns
                        ({data?.data?.filter((e) => e?.isFinished == false).length})
                    </h2>
                </div>
                <div className={style.event__body}>
                    {
                        data?.data

                            ?.filter((e) => e?.isFinished == false)
                            ?.map((e) => {
                                return (
                                    <div className={style.news__item} onClick={(e) => { }}>
                                        <div className={style.news__image}>
                                            <img src={imagec} alt="" />
                                        </div>
                                        <div className={style.details__news}>

                                            <div className={style.news__title}>
                                                <h3>{e.description}</h3>
                                            </div>
                                            <div className={style.news__meta}>
                                                <div className={style.news__date}>
                                                    <MdDateRange />
                                                    <span>
                                                        {
                                                            new Date(e.campaignStartDate).toDateString()

                                                            + " to " + new Date(e.campaignEndDate).toDateString()
                                                        }
                                                    </span>
                                                </div>
                                                <div className={style.news__author}>
                                                    <GrOrganization />
                                                    <span>{e.campaignOrganizer}</span>
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