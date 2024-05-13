import React from 'react'
import style from './RequestBloodPage.module.css'
import { districtsOfNepal } from '../../components/LoggedInComponents/SearchBloodComponents/SearchBloodBox'
import toast from 'react-hot-toast'
import { API_ROUTE } from '../../utils/Constants'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getBloodRequest } from '../../features/mainSlice'
import { RootState } from '../../features/store'

function RequestBloodPage() {
    let navigate = useNavigate()
    const dispatch = useDispatch<any>()
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const form = e.currentTarget
        const data = new FormData(form)
        const patientName = data.get('patientName')
        const bloodGroup = data.get('bloodGroup')
        const District = data.get('District')
        const Hospital = data.get('Hospital')
        const contactNumber = data.get('contactNumber')
        const requestedDate = data.get('requestedDate')
        const details = data.get('details')

        if (!patientName || !bloodGroup || !District || !Hospital || !contactNumber || !requestedDate || !details) {
            return toast.error('Please fill all fields', {
                duration: 4000,
                position: 'top-center',
            })
        }
        let a = await fetch(API_ROUTE + '/main/RequestBlood', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + localStorage.getItem('token') || ''
            },
            body: JSON.stringify({ patientName, bloodGroup, District, Hospital, contactNumber, requestedDate, details })
        })
        let res = await a.json()
        if (res.statusCode == 200) {
            toast.success(res.data, {
                duration: 4000,
                position: 'top-center',
            })
            dispatch(getBloodRequest())
            navigate('/')
        } else {
            toast.error(res.message, {
                duration: 4000,
                position: 'top-center',
            })
        }
    }


    return (
        <React.Fragment>
            <div className={style.blood__request__container}>
                <div className={style.header__ttl}>
                    <h2>Add Blood Request</h2>
                </div>
                <div className={style.main__request__form}>
                    <form
                        onSubmit={(e) => handleSubmit(e)}
                    >

                        <label htmlFor="patientName">Patient Name</label>
                        <input type="text" name="patientName" id="patientName" placeholder="Patient Name" required />


                        <label htmlFor="bloodGroup">Blood Group</label>

                        <select name="bloodGroup" id="bloodGroup">
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>

                        <label htmlFor="District">District</label>
                        <select name="District" id="district">
                            {
                                districtsOfNepal.map((_, i) => {
                                    return (
                                        <option key={i} value={_.name}>{_.name}</option>
                                    )
                                })
                            }
                        </select>

                        <label htmlFor="Hospital">Hospital</label>
                        <input type="text" name="Hospital" id="hospital" placeholder="Hospital" required />

                        <label htmlFor="contactNumber">Contact Number</label>
                        <input type="text" name="contactNumber" id="contactNumber" placeholder="Contact Number" required />

                        <label htmlFor="requestedDate">Requested date</label>
                        <input
                            min={new Date().toISOString().split('T')[0]}
                            type="date" name="requestedDate" id="date" required />

                        <label htmlFor="details">Details</label>
                        <textarea name="details" id="details"
                            rows={10}
                            placeholder="Details" required></textarea>
                        <button
                            type="submit">Request</button>

                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default RequestBloodPage