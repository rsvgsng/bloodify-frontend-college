import React from 'react'
import style from './NewsPage.module.css'
import { FaUserCircle } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

function NewsPage() {
    let navigate = useNavigate()
    let img = `https://facts.net/wp-content/uploads/2023/09/12-fascinating-facts-about-floppa-1695888446.jpg`
    return (
        <React.Fragment>
            <div className={style.news__container}>
                <div className={style.header__ttl}>
                    <h2>Latest News </h2>

                </div>

                <div className={style.news__body}>

                    {
                        Array(10).fill(0).map((e) => {
                            return (
                                <div className={style.news__item} onClick={(e) => navigate('/News/ok')}>
                                    <div className={style.news__image}>
                                        <img src={img} alt="news" />
                                    </div>
                                    <div className={style.details__news}>

                                        <div className={style.news__title}>
                                            <h3>This is funny floppa</h3>
                                        </div>
                                        <div className={style.news__meta}>
                                            <div className={style.news__author}>
                                                <FaUserCircle />
                                                <span>Admin</span>
                                            </div>
                                            <div className={style.news__date}>
                                                <MdDateRange />
                                                <span>12-12-2021</span>
                                            </div>
                                        </div>
                                        <div className={style.news__excerpt}>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, aperiam?.....
                                            </p>
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

export default NewsPage