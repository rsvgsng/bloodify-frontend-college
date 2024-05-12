import React from 'react'
import style from './QuickItems.module.css'
import { MdBloodtype } from "react-icons/md";
import { FaAmbulance } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

import { MdEventAvailable } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
let ql = [
    {
        name: "Search for Blood",
        icon: <FaSearch />,
        link: '/SearchBlood'
    },
    {
        name: "Blood Bank",
        icon: <MdBloodtype />,
        link: "/BloodBank"

    },

    {
        name: "Blood Requests",
        icon: <MdBloodtype />,
        link: "/BloodRequests"
    },
    {
        name: "Ambulance List",
        icon: <FaAmbulance />,
        link: '/Ambulances'
    },
    {
        name: "Read News",
        icon: <FaNewspaper />,
        link: '/News'
    },

    {
        name: "Events",
        icon: <MdEventAvailable />,
        link: '/Events'
    }
]

function QuickItems() {
    const navigate = useNavigate()
    return (
        <React.Fragment>
            <div className={style.quick__links}>
                <div className={style.header__ttl}>
                    <h2>Quick Links</h2>
                </div>
                <div className={style.container__items__quick}>
                    {
                        ql.map((_, i) => {
                            return (
                                <div
                                    onClick={() => navigate(`${_.link}`)}
                                    className={style.quick__item}>
                                    {_.icon}
                                    <div className={style.quick__item__ttl}>
                                        <h3>{_.name}</h3>
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

export default QuickItems