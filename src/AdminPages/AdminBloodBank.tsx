import React, { ChangeEvent } from 'react';
import style from './AdminUsers.module.css';
import { SiMicrosoftexcel } from 'react-icons/si';
import { districtsOfNepal } from '../components/LoggedInComponents/SearchBloodComponents/SearchBloodBox';
import { IoIosAddCircle } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../features/store';
import { IBloodBankMain } from './Admin.Interface';
import * as XLSX from 'xlsx';
import Modal from 'react-responsive-modal';
import { API_ROUTE } from '../utils/Constants';
import { getAdminDash, getAllBloodBanks } from '../features/mainSlice';

function AdminBloodBank() {
    const dispatch = useDispatch<any>();

    const bloodBanks = useSelector((state: RootState) => state?.main?.bloodBankData);
    let data: IBloodBankMain = bloodBanks;

    const [district, setDistrict] = React.useState<string>("all");



    const [openModel, setOpenModel] = React.useState(false)

    const [file, setFile] = React.useState<File | null>(null)

    const [addBankModel, setAddBankModel] = React.useState(false)

    const [uploadModel, setUploadModel] = React.useState(false)


    interface Data {
        [key: string]: any; // Adjust according to the structure of your data
    }

    const [excelData, setExcelData] = React.useState<Data[]>([]);

    const exportToExcel = () => {
        let a = confirm(`Do you want to download ${data?.data?.length} bloodbank data in excel format ?`)
        if (!a) return
        const worksheet = XLSX.utils.json_to_sheet(data?.data || []);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Users');
        XLSX.writeFile(workbook, 'bloodbank_data.xlsx');
    };


    // Parse the excel file
    const handleFileUpload = (event: ChangeEvent<HTMLInputElement>): void => {
        const file = event.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onload = (e: ProgressEvent<FileReader>): void => {
            const binaryStr = e.target?.result as string;
            const workbook = XLSX.read(binaryStr, { type: 'binary' });

            // Assuming the data is in the first sheet
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];

            // Convert the sheet to JSON
            const jsonData: Data[] = XLSX.utils.sheet_to_json(worksheet);
            setExcelData(jsonData);
        };

        reader.readAsBinaryString(file);
    };


    async function handleAddBank(e: React.FormEvent<HTMLFormElement>) {
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
            BankName: bankName,
            Location: bankLocation,
            Contact: bankContact,
            District: bankDistrict
        }

        let p = await fetch(API_ROUTE + '/admin/AddBloodBank?mode=single', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(data)
        })

        let res = await p.json()
        if (res.statusCode === 200) {
            dispatch(getAdminDash())
            dispatch(getAllBloodBanks())
            setAddBankModel(false)
            alert("Bank Added Successfully")
        } else {
            alert(res.data)
        }

    }


    async function handleExcelUpload() {
        if (excelData.length === 0) {
            alert("Please upload the excel file first")
            return
        }
        let a = confirm(`Do you want to upload ${excelData.length} bloodbank data ?`)
        if (!a) return

        let p = await fetch(API_ROUTE + '/admin/AddBloodBank?mode=bulk', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(excelData)
        })
        let res = await p.json()
        if (res.statusCode === 200) {
            dispatch(getAdminDash())
            dispatch(getAllBloodBanks())
            setUploadModel(false)
            alert("Bank Added Successfully")
        } else {
            alert(res.message)
        }


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
                            onChange={(e) =>
                                handleFileUpload(e)
                            }
                        />
                        <br />
                        <p
                            style={{
                                fontSize: 12,
                                color: "grey"
                            }}
                        >
                            A sample excel file can be downloaded from <a href="/BloodBank.xlsx"> here</a>
                        </p>

                        <button onClick={handleExcelUpload}>
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
