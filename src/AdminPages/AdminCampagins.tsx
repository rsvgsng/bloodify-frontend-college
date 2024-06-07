import React from 'react'
import { districtsOfNepal } from '../components/LoggedInComponents/SearchBloodComponents/SearchBloodBox'
import style from './AdminUsers.module.css'
import { SiMicrosoftexcel } from 'react-icons/si'
import { IoIosAddCircle } from 'react-icons/io'

function AdminCampagins() {

    const [campaign, setCampaign] = React.useState<'upcoming' | 'past'>('upcoming')


    if (campaign === 'upcoming') return (
        <React.Fragment>
            <div className={style.users__section}>

                <div className={style.campaign__selector}>
                    <select
                        onChange={(e) => {
                            if (e.target.value === 'Upcoming Campaign') setCampaign('upcoming')
                            else setCampaign('past')
                        }}
                    >
                        <option>Select Campaigns</option>
                        <option>Past Campaign</option>
                        <option>Upcoming Campaign</option>
                    </select>
                </div>
                <div className={style.top__bar}>
                    <h1>Upcoming Campagins</h1>

                    <div className={style.right__bar}>


                        <div className={style.dload__logo}>
                            <IoIosAddCircle /> Add Upcoming Campagins
                        </div>
                        <div className={style.dload__logo}>
                            <select>
                                <option>Select District</option>
                                {
                                    districtsOfNepal.map((item, index) => {
                                        return (
                                            <option key={index}>{item.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>

                </div>


                <div className={style.users__table}>
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>Campagin Name</th>
                            <th>Duration</th>
                            <th>No. of Doners</th>
                            <th>Organizer</th>
                            <th>Description</th>
                            <th>Action</th>

                        </tr>

                        {

                            Array(30).fill(1).map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item}</td>
                                        <td>user{item}</td>
                                        <td>user{item} fullname</td>
                                        <td>user{item} contact</td>
                                        <td>user{item} district</td>
                                        <td>user{item} bloodtype</td>

                                        <td style={{ display: 'flex' }}>
                                            <button style={{ width: '100%' }}>Download</button>
                                        </td>

                                    </tr>
                                )
                            })
                        }
                    </table>
                </div>
            </div>
        </React.Fragment>
    )


    // Past 
    return (
        <React.Fragment>
            <div className={style.users__section}>

                <div className={style.campaign__selector}>
                    <select
                        onChange={(e) => {
                            if (e.target.value === 'Upcoming Campaign') setCampaign('upcoming')
                            else setCampaign('past')
                        }}
                    >
                        <option>Select Campaigns</option>
                        <option>Past Campaign</option>
                        <option>Upcoming Campaign</option>
                    </select>
                </div>
                <div className={style.top__bar}>
                    <h1>Past Campagins</h1>

                    <div className={style.right__bar}>


                        <div className={style.dload__logo}>
                            <IoIosAddCircle /> Add Past Campagins
                        </div>
                        <div className={style.dload__logo}>
                            <select>
                                <option>Select District</option>
                                {
                                    districtsOfNepal.map((item, index) => {
                                        return (
                                            <option key={index}>{item.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>

                </div>


                <div className={style.users__table}>
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>Campagin Name</th>
                            <th>Duration</th>
                            <th>No. of Doners</th>
                            <th>Organizer</th>
                            <th>Description</th>
                            <th>Doner List</th>

                        </tr>

                        {

                            Array(10).fill(1).map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item}</td>
                                        <td>user{item}</td>
                                        <td>user{item} fullname</td>
                                        <td>user{item} contact</td>
                                        <td>user{item} district</td>
                                        <td>user{item} bloodtype</td>
                                        <td>
                                            <button style={{ width: '100%' }}>View</button>
                                        </td>

                                    </tr>
                                )
                            })
                        }
                    </table>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AdminCampagins