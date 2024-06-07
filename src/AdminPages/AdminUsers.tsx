import React from 'react'
import style from './AdminUsers.module.css'
import { SiMicrosoftexcel } from 'react-icons/si'
import { FaSearch } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { RootState } from '../features/store'
import { IUsersMain } from './Admin.Interface'
import * as XLSX from 'xlsx';

function AdminUsers() {

    const user = useSelector((state: RootState) => state?.main?.allUsersData)
    let data: IUsersMain = user
    const [search, setSearch] = React.useState<string>('')
    const exportToExcel = () => {
        let a = confirm(`Do you want to download ${data?.data?.length} users data in excel format ?`)
        if (!a) return
        // Convert the data to a worksheet
        const worksheet = XLSX.utils.json_to_sheet(data?.data || []);
        // Create a new workbook
        const workbook = XLSX.utils.book_new();
        // Append the worksheet to the workbook
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Users');
        // Write the workbook to a file
        XLSX.writeFile(workbook, 'users_data.xlsx');
    };

    return (
        <React.Fragment>
            <div className={style.users__section}>

                <div className={style.top__bar}>
                    <h1>All Users ({data?.data?.length})</h1>
                    <div className={style.right__search}>
                        <div className={style.dload__logo} onClick={exportToExcel}>
                            <SiMicrosoftexcel /> Download all users data
                        </div>
                        <div className={style.dload__logo} style={{ cursor: 'unset' }}>
                            <FaSearch />
                            <input
                                onChange={(e) => setSearch(e.target.value)}
                                type="text" placeholder="Search.." />
                        </div>
                    </div>

                </div>


                <div className={style.users__table}>
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Fullname</th>
                            <th>Contact</th>
                            <th>Address</th>
                            <th>District</th>
                            <th>Bloodtype</th>
                            <th>Role</th>
                            <th>Joined On</th>
                        </tr>

                        {

                            data?.data
                                ?.filter((val) => {
                                    if (search === "") {
                                        return val
                                    } else if (val.userName.toLowerCase()?.includes(search.toLowerCase())) {
                                        return val
                                    }
                                })
                                ?.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.userID}</td>
                                            <td>{item.userName}</td>
                                            <td>{item.fullName}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.fullAddress}</td>
                                            <td>{item.district}</td>
                                            <td>{item.bloodType}</td>
                                            <td>{item.role}</td>
                                            <td>{item.joinedOn}</td>
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

export default AdminUsers