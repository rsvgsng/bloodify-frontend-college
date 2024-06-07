import React from 'react'
import style from './CampaignPage.module.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../features/store'
import { ICampaignsMain } from '../../AdminPages/Admin.Interface'
import Modal from 'react-responsive-modal'
function CampaignPage() {

    const [open, setOpen] = React.useState(false)
    let data: ICampaignsMain = useSelector((state: RootState) => state.main.UserCampaignsData)
    return (
        <React.Fragment>

            <Modal open={open} onClose={() => { setOpen(false) }} center>
                <h2>Doner List</h2>
                <div className={style.users__table}>
                    <table>
                        <tr>
                            <th>Doner Name</th>
                            <th>Doner Location</th>
                            <th>Doner Contact</th>
                        </tr>
                        {
                            data?.data
                                ?.filter((e) => e?.isFinished == true)
                                ?.map((item, index) => {
                                    return (
                                        item.doners?.map((doner, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{doner.donerFullName}</td>
                                                    <td>{doner.donerLocation}</td>
                                                    <td>{doner.donerContact}</td>
                                                </tr>
                                            )
                                        })
                                    )
                                })
                        }
                    </table>
                </div>
            </Modal>

            <div className={style.campaign__container}>
                <div className={style.header__ttl}>
                    <h2>Past Campaigns</h2>
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
                            data?.data
                                ?.filter((e) => e?.isFinished == true)

                                ?.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.campaignID}</td>
                                            <td>{item.campaignName}</td>
                                            <td>{new Date(item.campaignStartDate).toDateString()} to {new Date(item.campaignEndDate).toDateString()}</td>
                                            <td>{item.doners?.length || 0}</td>
                                            <td>{item.campaignOrganizer}</td>
                                            <td>{item.description}</td>
                                            <td>
                                                <button

                                                    onClick={() => { setOpen(true) }}
                                                >View</button>
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

export default CampaignPage