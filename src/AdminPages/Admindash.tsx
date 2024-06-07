import React from 'react'
import style from './Admindash.module.css'
import StatCard from '../AdminComponents/StatCard'
import { FaAmbulance, FaHospitalAlt, FaUsers } from 'react-icons/fa'
import { MdBloodtype, MdCampaign, MdLocalHospital } from 'react-icons/md'
import { BiSolidDonateBlood } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { RootState } from '../features/store'
import { IDashMain } from './Admin.Interface'
function Admindash() {



    let dashData = useSelector((e: RootState) => e?.main?.adminDashData)
    let dd: IDashMain = dashData



    return (
        <React.Fragment>
            <div className={style.dash__container}>

                <section className={style.card__stat}>
                    <StatCard StatIcon={<FaUsers />} statName=' Users' statValue={dd?.data?.recentBloodRequestscount.users_count} />
                    <StatCard StatIcon={<FaAmbulance />} statName=' Ambulances' statValue={dd?.data?.recentBloodRequestscount.ambulances_count} />
                    <StatCard StatIcon={<MdBloodtype />} statName=' Requests' statValue={dd?.data?.recentBloodRequestscount.bloodRequests_count} />
                    <StatCard StatIcon={<MdLocalHospital />} statName=' Blood Banks' statValue={dd?.data?.recentBloodRequestscount.bloodBank_count} />
                    <StatCard StatIcon={<MdCampaign />} statName='Ongoing Campings' statValue={dd?.data?.recentBloodRequestscount.campaigns_count} />
                </section>


                <section className={style.recent__donation__req}>
                    <div className={style.header__tb}>
                        <h3>Recent Blood Requests:</h3>
                        <span>View all</span>
                    </div>
                    <table>
                        {/* user id, user name , fullname,district,bloodtype,fulladdress,role */}
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Required By</th>

                            <th>Hospital</th>
                            <th>Contact</th>
                            <th>District</th>
                            <th>Blood Type</th>
                            <th>Needed By</th>

                            <th>Details</th>
                        </tr>

                        {

                            dd?.data?.recentBloodRequests.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item?.reqID}</td>
                                        <td>{item?.userName}</td>
                                        <td>{item?.patientName} </td>

                                        <td>{item?.Hospital} </td>
                                        <td>{item?.contactNumber} </td>
                                        <td>{item?.District} </td>
                                        <td>{item?.bloodGroup} </td>

                                        <td>{item?.requestedDate} </td>

                                        <td>{item?.details} </td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                </section>

                <section className={style.recent__donation__req}>
                    <div className={style.header__tb}>
                        <h3>Recent Joined Users:</h3>
                        <span>View all</span>
                    </div>
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Fullname</th>
                            <th>Contact</th>
                            <th>District</th>
                            <th>Bloodtype</th>
                        </tr>
                        {

                            dd?.data?.recentUsers.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item?.userID}</td>
                                        <td>{item?.userName}</td>
                                        <td>{item?.fullName} </td>
                                        <td>{item?.phone} </td>
                                        <td>{item?.district} </td>
                                        <td>{item?.bloodType} </td>
                                    </tr>
                                )
                            })
                        }
                    </table>

                </section>


            </div>
        </React.Fragment>
    )
}

export default Admindash