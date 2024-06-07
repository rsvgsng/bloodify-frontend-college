import React from 'react'
import style from './AdminUsers.module.css'
import { BiPlus } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../features/store'
import { IAdminAmbulanceMain } from './Admin.Interface'
import Modal from 'react-responsive-modal'
import { districtsOfNepal } from '../components/LoggedInComponents/SearchBloodComponents/SearchBloodBox'
import { API_ROUTE } from '../utils/Constants'
import { getAdminDash, getAmbulancesAdmin } from '../features/mainSlice'
import { FiDelete } from 'react-icons/fi'
import { CgRemove } from 'react-icons/cg'

function AdminAmbulance() {
    let ambu = useSelector((state: RootState) => state.main.AdminAmbulanceData)
    let data: IAdminAmbulanceMain = ambu
    let dispatch = useDispatch<any>()
    const [open, setOpen] = React.useState(false)


    async function handleDeleteAmbu(e: string) {
        console.log(e)
        let c = confirm(`Are you sure you want to delete  ${e.ambulanceProvider}'s ambulance?`)
        if (!c) return
        let a = await fetch(API_ROUTE + `/admin/DeleteAmbulance/${e.ambulanceId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
        })
        let b = await a.json()
        if (b.statusCode === 200) {
            alert(b.data)
            dispatch(getAmbulancesAdmin())
            dispatch(getAdminDash())
        }
        else {
            alert(b.message)
        }
    }


    async function handleAddAmbulance(
        e: React.FormEvent<HTMLFormElement>
    ) {

        e.preventDefault()
        let formData = new FormData(e.currentTarget)
        let ambulanceProvider = formData.get('ambulanceProvider')
        let ambulanceLocation = formData.get('ambulanceLocation')
        let ambulanceContact = formData.get('ambulanceContact')
        let ambulanceDistrict = formData.get('district')


        if (!ambulanceProvider || !ambulanceLocation || !ambulanceContact || !ambulanceDistrict) return alert('Please fill all the fields')
        if (ambulanceContact.length !== 10) return alert('Please enter a valid contact number')


        let a = await fetch(API_ROUTE + '/admin/AddAmbulance', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                ambulanceProvider,
                ambulanceLocation,
                ambulanceContact,
                ambulanceDistrict
            })
        })
        let b = await a.json()
        if (b.statusCode === 200) {
            alert(b.data)
            dispatch(getAmbulancesAdmin())
            dispatch(getAdminDash())
            setOpen(false)
        }
        else {
            alert(b.message)
        }

    }

    return (
        <React.Fragment>

            <Modal open={open} onClose={() => { setOpen(false) }}
                styles={{
                    closeButton: { cursor: "pointer" },
                    modal: { borderRadius: "10px", width: '700px    ' }

                }}

                center>
                <div className={style.add__ttl}>
                    <h3>
                        Add an Ambulance
                    </h3>
                    <form action="#" onSubmit={(e) => handleAddAmbulance(e)} className={style.add__bankform}>
                        <label htmlFor="ambulanceProvider">Ambulance Provider</label>
                        <input
                            name="ambulanceProvider"
                            type="text"
                            placeholder="Ambulance Provider"
                        />

                        <label htmlFor="ambulanceLocation">Ambulance Location</label>
                        <input
                            name="ambulanceLocation"
                            type="text"
                            placeholder="Ambulance Location"
                        />
                        <label htmlFor="ambulanceContact">Contact</label>
                        <input
                            name="ambulanceContact"
                            type="text"
                            placeholder="Contact" />




                        <label htmlFor="district">Select district</label>
                        <select name="district" id="district">
                            {
                                districtsOfNepal.map((_, i) => {
                                    return (
                                        <option key={i} value={_.name}>{_.name}</option>
                                    )
                                })
                            }
                        </select>
                        <br />
                        <button type="submit" value="Add Bank" >
                            Add Campaign
                        </button>
                    </form>


                </div>


            </Modal>
            <div className={style.users__section}>
                <div className={style.top__bar}>
                    <h1>All Ambulances ({data?.data?.length})</h1>
                    <div className={style.right__search}>
                        <div className={style.dload__logo} onClick={() => setOpen(true)} >
                            <BiPlus /> Add Ambulance
                        </div>
                    </div>

                </div>


                <div className={style.users__table}>
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>Ambulance Provider</th>
                            <th>Ambulance Location</th>
                            <th>Contact</th>
                            <th>District</th>
                            <th>Action</th>
                        </tr>

                        {

                            data?.data?.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.ambulanceId}</td>
                                        <td>{item.ambulanceProvider}</td>
                                        <td>{item.ambulanceLocation}</td>
                                        <td>{item.ambulanceContact}</td>
                                        <td>{item.ambulanceDistrict}</td>
                                        <td
                                            onClick={(e) => handleDeleteAmbu(item)}
                                            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', padding: 10 }}>
                                            <CgRemove style={{ marginRight: 10 }} /> Remove
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

export default AdminAmbulance