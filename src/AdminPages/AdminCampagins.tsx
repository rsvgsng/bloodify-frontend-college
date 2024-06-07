import React, { ChangeEvent } from 'react'
import style from './AdminUsers.module.css'
import { IoIosAddCircle } from 'react-icons/io'
import Modal from 'react-responsive-modal';
import { API_ROUTE } from '../utils/Constants';
import * as XLSX from 'xlsx';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../features/store';
import { ICampaignsMain } from './Admin.Interface';
import { getCampaginsAdmin } from '../features/mainSlice';


function AdminCampagins() {
    const [campaign, setCampaign] = React.useState<'upcoming' | 'past'>('upcoming')
    const [pastModel, setPastModel] = React.useState<boolean>(false)
    const [upcomingModel, setUpcomingModel] = React.useState<boolean>(false)
    const dispatch = useDispatch();
    const [file, setFile] = React.useState<Data[]>([]);
    const [showDoners, setShowDoners] = React.useState<{ isShown: boolean, data: any }>({ isShown: false, data: [] })
    const x = useSelector((state: RootState) => state?.main?.campaignsAdminData)
    let data: ICampaignsMain = x;




    async function handleUpcoming(
        e: React.FormEvent<HTMLFormElement>
    ) {
        e.preventDefault()
        const form = e.currentTarget
        const campaignID = form.campaignId.value
        const campaignName = form.campaignName.value
        const campaignOrganizer = form.organizer.value
        const campaignStartDate = form.startDate.value
        const campaignEndDate = form.endDate.value
        const description = form.description.value

        let data = {
            campaignID,
            campaignName,
            campaignOrganizer,
            campaignStartDate,
            campaignEndDate,
            description,
            isFinished: false
        }
        let res = await fetch(API_ROUTE + '/admin/AddCampaign', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + localStorage.getItem('token')
            },
            body: JSON.stringify(data)
        })
        let response = await res.json()

        if (response.statusCode === 200) {
            alert('Campaign Added')
            setUpcomingModel(false)
            dispatch(getCampaginsAdmin())

        } else {
            alert(response.message)
        }



    }



    async function handlePast(
        e: React.FormEvent<HTMLFormElement>
    ) {
        e.preventDefault()
        const form = e.currentTarget
        const campaignID = form.campaignId.value
        const campaignName = form.campaignName.value
        const campaignOrganizer = form.organizer.value
        const campaignStartDate = form.startDate.value
        const campaignEndDate = form.endDate.value
        const description = form.description.value

        if (new Date(campaignEndDate) < new Date(campaignStartDate)) {
            alert('End date should be greater than start date')
            return
        }


        file.forEach(async (doner: any) => {
            if (!doner.donerContact || !doner.donerFullName || !doner.donerLocation) {
                alert('Please fill all the fields in the excel file')
                return
            }
        })

        let data = {
            campaignID,
            campaignName,
            campaignOrganizer,
            campaignStartDate,
            campaignEndDate,
            description,
            doners: file,
            isFinished: true
        }

        let a = await fetch(API_ROUTE + '/admin/AddPastCampaigns', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + localStorage.getItem('token')
            },
            body: JSON.stringify(data)
        })

        let response = await a.json()
        if (response.statusCode === 200) {
            alert('Campaign Added')
            setPastModel(false)
            dispatch(getCampaginsAdmin())
        } else {
            alert(response.message)
        }
    }





    if (campaign === 'upcoming') return (
        <React.Fragment>
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
                    <form action="#" onSubmit={(e) => handleUpcoming(e)} className={style.add__bankform}>
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
                            min={new Date().toISOString().split('T')[0]}

                            type="date" />

                        <label htmlFor="endDate">End Date</label>
                        <input
                            name="endDate"
                            min={new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0]}

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

                            data?.data
                                ?.filter((item) => !item.isFinished)
                                ?.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.campaignID}</td>
                                            <td>{item.campaignName}</td>
                                            <td>{
                                                new Date(item.campaignStartDate).toDateString() + ' - ' + new Date(item.campaignEndDate).toDateString()
                                            } </td>
                                            <td>{item.campaignOrganizer}</td>
                                            <td>{item.description}</td>

                                        </tr>
                                    )
                                })
                        }
                    </table>
                </div>
            </div>
        </React.Fragment>
    )

    interface Data {
        [key: string]: any; // Adjust according to the structure of your data
    }

    const handleFileUpload = (event: ChangeEvent<HTMLInputElement>): void => {
        const file = event.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>): void => {
            const binaryStr = e.target?.result as string;
            const workbook = XLSX.read(binaryStr, { type: 'binary' });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const jsonData: Data[] = XLSX.utils.sheet_to_json(worksheet);
            setFile(jsonData);
        };

        reader.readAsBinaryString(file);
    };

    // Past 
    return (
        <React.Fragment>


            <Modal styles={{
                closeButton: { cursor: "pointer" },
                modal: { borderRadius: "10px", width: '700px    ' }
            }} open={showDoners.isShown} onClose={() => setShowDoners({
                isShown: false,
                data: []
            })} center>

                {
                    showDoners?.data?.length > 0 ? <div className={style.users__table}>
                        <table>
                            <tr>
                                <th>Full Name</th>
                                <th>Contact</th>
                                <th>Location</th>
                            </tr>

                            {
                                showDoners?.data?.map((item: any, index: number) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.donerFullName}</td>
                                            <td>{item.donerContact}</td>
                                            <td>{item.donerLocation}</td>
                                        </tr>
                                    )
                                })
                            }
                        </table>
                    </div> : null
                }


            </Modal>


            <Modal styles={{
                closeButton: { cursor: "pointer" },
                modal: { borderRadius: "10px", width: '700px    ' }
            }} open={pastModel} onClose={() => setPastModel(false)} center>
                <div className={style.add__ttl}>
                    <h3>Add a upcoming campaign</h3>
                    <form action="#" onSubmit={(e) => handlePast(e)} className={style.add__bankform}>
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

                        <label htmlFor="donerList">Doners</label>
                        <p
                            style={{
                                fontSize: '12px',
                                marginBottom: '10px'
                            }}
                        >
                            Please upload a file containing the list of doners in excel format. You can download the sample file from <a href="/AddUpcomingDemo.xlsx">here</a>
                        </p>
                        <input
                            onChange={(e) => {
                                if (e.target.files) {
                                    handleFileUpload(e)
                                }
                            }}

                            type="file" name="donerList" />
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
                    <h1>Past Campagins</h1>

                    <div className={style.right__bar}>


                        <div className={style.dload__logo}

                            onClick={() => setPastModel(true)}
                        >
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

                            data?.data
                                ?.filter((item) => item.isFinished)

                                ?.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.campaignID}</td>
                                            <td>{item.campaignName}</td>
                                            <td>{
                                                new Date(item.campaignStartDate).toDateString() + ' - ' + new Date(item.campaignEndDate).toDateString()
                                            } </td>
                                            <td>{
                                                item.doners?.length || '-'

                                            }</td>
                                            <td>{item.campaignOrganizer}</td>
                                            <td>{item.description}</td>

                                            <td>
                                                <button
                                                    onClick={() => {
                                                        setShowDoners({
                                                            isShown: true,
                                                            data: item.doners
                                                        })
                                                    }}
                                                    style={{ width: '100%' }}>View ({item.doners?.length})</button>
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