import React from 'react';
import style from './AdminUsers.module.css';
import { SiMicrosoftexcel } from 'react-icons/si';
import { districtsOfNepal } from '../components/LoggedInComponents/SearchBloodComponents/SearchBloodBox';
import { IoIosAddCircle } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { RootState } from '../features/store';
import { IBloodBankMain } from './Admin.Interface';
import * as XLSX from 'xlsx';
import Modal from 'react-responsive-modal';

function AdminBloodBank() {

    const bloodBanks = useSelector((state: RootState) => state?.main?.bloodBankData);
    let data: IBloodBankMain = bloodBanks;

    const [district, setDistrict] = React.useState<string>("all");



    const [openModel, setOpenModel] = React.useState(false)

    const [file, setFile] = React.useState<File | null>(null)

    const [addBankModel, setAddBankModel] = React.useState(false)

    const [uploadModel, setUploadModel] = React.useState(false)

    const exportToExcel = () => {
        let a = confirm(`Do you want to download ${data?.data?.length} bloodbank data in excel format ?`)
        if (!a) return
        // Convert the data to a worksheet
        const worksheet = XLSX.utils.json_to_sheet(data?.data || []);
        // Create a new workbook
        const workbook = XLSX.utils.book_new();
        // Append the worksheet to the workbook
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Users');
        // Write the workbook to a file
        XLSX.writeFile(workbook, 'bloodbank_data.xlsx');
    };

    console.log(file)
    function handleAddBank(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const formData = new FormData(form);
        const bankName = formData.get("bankName") as string;
        const bankLocation = formData.get("bankLocation") as string;
        const bankContact = formData.get("bankContact") as string;
        const bankDistrict = formData.get("district") as string;
        if (!bankName || !bankLocation || !bankContact || !bankDistrict) {
            alert("Please fill all the fields");
            return;
        }
        const data = {
            bankName,
            bankLoaction: bankLocation,
            bankContact,
            bankDistrict
        }
        console.log(data);
    }
    return (
        <React.Fragment>

            {/* Main Model */}
            <Modal
                styles={{
                    closeButton: { cursor: "pointer" },
                    modal: { borderRadius: "10px" }

                }}
                closeOnOverlayClick={false}
                open={openModel}
                onClose={
                    () => setOpenModel(false)
                } center>
                <div className={style.add__ttl}>
                    <div className={style.two__btn}>
                        <h2
                            onClick={() => {
                                setAddBankModel(true)
                                setOpenModel(false)

                            }}
                        >Add a Blood Bank</h2>
                        <h2

                            onClick={() => {
                                setUploadModel(true)
                                setOpenModel(false)
                            }}
                        >Upload Excel File</h2>
                    </div>
                </div>


            </Modal>

            {/*  Add bank model*/}

            <Modal

                styles={{
                    closeButton: { cursor: "pointer" },
                    modal: { borderRadius: "10px", width: '700px    ' }
                }}

                closeOnOverlayClick={false}
                open={addBankModel}
                onClose={
                    () => setAddBankModel(false)
                } center>
                <div className={style.add__ttl}>
                    <h3>Add a blood bank</h3>
                    <form action="#" onSubmit={(e) => handleAddBank(e)} className={style.add__bankform}>
                        <input
                            name="bankName"
                            type="text"
                            placeholder="Bank Name"
                        />
                        <input
                            name="bankLocation"
                            type="text" placeholder="Location" />
                        <input
                            name="bankContact"
                            type="number" placeholder="Contact" />
                        <select

                            name="district" id="">
                            <option value="1">District</option>
                            {districtsOfNepal.map((item, index) => {
                                return (
                                    <option key={index} value={item.name.toLowerCase()}>{item.name}</option>
                                );
                            })}
                        </select>
                        <button type="submit" value="Add Bank" >
                            Add Bank
                        </button>
                    </form>
                </div>
            </Modal>

            {/*  Upload model*/}
            <Modal

                styles={{
                    closeButton: { cursor: "pointer" },
                    modal: { borderRadius: "10px", width: "700px" }
                }}

                closeOnOverlayClick={false}
                open={uploadModel}
                onClose={
                    () => setUploadModel(false)
                } center>
                <div className={style.add__ttl} style={{ padding: 10, marginTop: 10 }}>
                    <div className={style.upload__area}>
                        <h3>Choose your excel file and upload</h3>
                        <br />
                        <input
                            type="file"
                            onChange={(e) => setFile(e.target.files?.[0])}
                        />

                        <button>
                            Upload
                        </button>

                    </div>
                </div>
            </Modal>



            <div className={style.users__section}>

                <div className={style.top__bar}>
                    <h1>Blood Banks ({data?.data?.length})</h1>
                    <div className={style.right__bar}>
                        <div className={style.dload__logo} onClick={exportToExcel}>
                            <SiMicrosoftexcel /> Download
                        </div>

                        <div className={style.dload__logo}
                            onClick={() => setOpenModel(true)}
                        >
                            <IoIosAddCircle /> Add Blood Bank
                        </div>
                        <div className={style.dload__logo}>
                            <select
                                onChange={(e) => setDistrict(e.target.value.toLowerCase())}
                                value={district}
                            >
                                <option value="all">All</option>
                                {districtsOfNepal.map((item, index) => {
                                    return (
                                        <option key={index} value={item.name.toLowerCase()}>{item.name}</option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                </div>

                <div className={style.users__table}>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Bank Name</th>
                                <th>Location</th>
                                <th>Contact</th>
                                <th>District</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.data
                                ?.filter((item) => {
                                    if (district === "all") {
                                        return true;
                                    }
                                    return item.bankDistrict.toLowerCase() === district;
                                })
                                ?.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.bankID}</td>
                                            <td>{item.bankName}</td>
                                            <td>{item.bankLoaction}</td>
                                            <td>{item.bankContact}</td>
                                            <td>{item.bankDistrict}</td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
    );
}

export default AdminBloodBank;
