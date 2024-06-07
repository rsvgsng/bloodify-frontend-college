import React from 'react'
import style from './AdminUsers.module.css'
import { SiMicrosoftexcel } from 'react-icons/si'
import { useSelector } from 'react-redux'
import { RootState } from '../features/store'
import { IBloodRequestMain } from './Admin.Interface'
function AdminBloodRequest() {
    const bloodRequests = useSelector((state: RootState) => state?.main?.bloodRequestsData)
    let data: IBloodRequestMain = bloodRequests

    return (
        <React.Fragment>
            <div className={style.users__section}>

                <div className={style.top__bar}>
                    <h1>Blood Requests ({data?.data?.length})</h1>
                    <div className={style.right__bar}>

                        <div className={style.dload__logo}>
                            <select>
                                <option>Blood Type</option>
                                <option>A+</option>
                                <option>A-</option>
                                <option>B+</option>
                                <option>B-</option>
                                <option>AB+</option>
                                <option>AB-</option>
                                <option>O+</option>
                                <option>O-</option>
                            </select>
                        </div>
                    </div>

                </div>


                <div className={style.users__table}>
                    <table>
                        {/* user id, user name , fullname,district,bloodtype,fulladdress,role */}
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Patient Name</th>
                            <th>Hospital</th>
                            <th>Needed Blood Type</th>
                            <th>District</th>
                            <th>Required By</th>
                            <th>Details</th>
                        </tr>

                        {

                            data?.data?.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.reqID}</td>
                                        <td>{item.userName}</td>
                                        <td>{item.patientName}</td>
                                        <td>{item.Hospital}</td>
                                        <td>{item.bloodGroup}</td>
                                        <td>{item.District}</td>
                                        <td>
                                            {item.requestedDate}
                                        </td>
                                        <td>{item.details}</td>
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

export default AdminBloodRequest