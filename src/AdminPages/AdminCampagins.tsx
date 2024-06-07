import React from 'react'
import { districtsOfNepal } from '../components/LoggedInComponents/SearchBloodComponents/SearchBloodBox'
import style from './AdminUsers.module.css'
import { IoIosAddCircle } from 'react-icons/io'
import Modal from 'react-responsive-modal';

function AdminCampagins() {

    const [campaign, setCampaign] = React.useState<'upcoming' | 'past'>('upcoming')
    const [pastModel, setPastModel] = React.useState<boolean>(false)
    const [upcomingModel, setUpcomingModel] = React.useState<boolean>(false)









    if (campaign === 'upcoming') return (
        <React.Fragment>

            {/* Upcoming Model Box */}

            <Modal
                styles={{
                    closeButton: { cursor: "pointer" },
                    modal: { borderRadius: "10px", width: '700px    ' }

                }}
                closeOnOverlayClick={false}
                open={upcomingModel}
                onClose={
                    () => setUpcomingModel(false)
                } center>

                <div className={style.add__ttl}>
                    <h3>Add a upcoming campaign</h3>
                    <form action="#" onSubmit={(e) => null} className={style.add__bankform}>
                        <label htmlFor="campaignId">Campaign ID</label>
                        <input
                            name="campaignId"
                            type="number"
                            placeholder="Campaign ID"
                        />

                        <label htmlFor="campaignName">Campaign Name</label>
                        <input
                            name="campaignName"
                            type="text"
                            placeholder="Campaign Name"
                        />
                        <label htmlFor="organizer">Organizer</label>
                        <input
                            name="organizer"
                            type="text"
                            placeholder="Organizer" />

                        <label htmlFor="startDate">Start Date</label>
                        <input
                            name="startDate"
                            type="date" />

                        <label htmlFor="endDate">End Date</label>
                        <input
                            name="endDate"
                            type="date" />


                        <label htmlFor="description">Description</label>
                        <textarea

                            name="description"
                            placeholder="Description"
                            rows={10}
                        ></textarea>
                        <button type="submit" value="Add Bank" >
                            Add Campaign
                        </button>
                    </form>
                </div>

            </Modal>


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


                        <div className={style.dload__logo}

                            onClick={() => setUpcomingModel(true)}
                        >
                            <IoIosAddCircle /> Add Upcoming Campagins
                        </div>

                    </div>

                </div>


                <div className={style.users__table}>
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>Campagin Name</th>
                            <th>Duration</th>
                            <th>Organizer</th>
                            <th>Description</th>

                        </tr>

                        {

                            Array(30).fill(1).map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item}</td>
                                        <td>user{item}</td>
                                        <td>user{item} fullname</td>
                                        <td>user{item} district</td>
                                        <td>user{item} bloodtype</td>

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