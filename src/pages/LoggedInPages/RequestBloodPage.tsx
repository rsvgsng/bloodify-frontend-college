import React from 'react'
import style from './RequestBloodPage.module.css'
import { districtsOfNepal } from '../../components/LoggedInComponents/SearchBloodComponents/SearchBloodBox'
// Patient Name , Contact Person , Blood grp, District,Hospital,Contact Number,Details
function RequestBloodPage() {
    return (
        <React.Fragment>
            <div className={style.blood__request__container}>
                <div className={style.header__ttl}>
                    <h2>Add Blood Request</h2>
                </div>
                <div className={style.main__request__form}>
                    <form >

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

                        <label htmlFor="district">District</label>
                        <select name="district" id="district">
                            {
                                districtsOfNepal.map((_, i) => {
                                    return (
                                        <option key={i} value={_.name}>{_.name}</option>
                                    )
                                })
                            }
                        </select>

                        <label htmlFor="hospital">Hospital</label>
                        <input type="text" name="hospital" id="hospital" placeholder="Hospital" required />

                        <label htmlFor="contactNumber">Contact Number</label>
                        <input type="text" name="contactNumber" id="contactNumber" placeholder="Contact Number" required />

                        <label htmlFor="details">Details</label>
                        <textarea name="details" id="details"
                            rows={10}
                            placeholder="Details" required></textarea>

                        <button type="submit">Request</button>


                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default RequestBloodPage