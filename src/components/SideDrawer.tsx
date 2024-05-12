import React from 'react'
import style from './Drawer.module.css'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../features/store'
import { setDrawerOpen } from '../features/mainSlice'
import { FaUserCircle } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";
import { FaPhoneSquare } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";

interface IDrawerData {
    patientName: string
    bloodGroup: string
    District: string
    Hospital: string
    contactNumber: string
    details: string
    requestedDate: string
    reqID: number
}

function SideDrawer() {
    const [isOpen, setIsOpen] = React.useState(true)
    const drawerData: any = useSelector((state: RootState) => state.main.drawerData)
    let data: IDrawerData = drawerData
    const drawerOpen = useSelector((state: RootState) => state.main.drawerOpen)
    const dispatch = useDispatch()



    return (
        <React.Fragment>
            <div className={style.drawer__container}>
                <Drawer
                    open={drawerOpen}
                    onClose={() => dispatch(setDrawerOpen(false))}
                    direction='right'
                    className={style.drawer}
                    overlayOpacity={0.7}
                    size={400}
                >
                    <div className={style.drawer__header}>
                        <h2>Details of recipient:</h2>
                    </div>

                    <div className={style.drawer__content}>
                        <div className={style.item__det}>
                            <FaUserCircle />
                            <div className={style.rs_s}>
                                <h3>Recepient Name</h3>
                                <p>{data.patientName}</p>
                            </div>
                        </div>
                    </div>

                    <div className={style.drawer__content}>
                        <div className={style.item__det}>
                            <FaMapMarkedAlt />
                            <div className={style.rs_s}>
                                <h3>District</h3>
                                <p>{data.District}</p>
                            </div>
                        </div>
                    </div>




                    <div className={style.drawer__content}>
                        <div className={style.item__det}>
                            <MdBloodtype />
                            <div className={style.rs_s}>
                                <h3>Requested Blood</h3>
                                <p>{data.bloodGroup}</p>
                            </div>
                        </div>
                    </div>

                    <div className={style.drawer__content}>
                        <div className={style.item__det}>
                            <FaPhoneSquare />
                            <div className={style.rs_s}>
                                <h3>Contact</h3>
                                <p>{data.contactNumber}</p>
                            </div>
                        </div>
                    </div>

                    <div className={style.drawer__content}>
                        <div className={style.item__det}>
                            <BsCalendar2DateFill />
                            <div className={style.rs_s}>
                                <h3>Needed by</h3>
                                <p>{
                                    new Date(data.requestedDate).toLocaleDateString()
                                }</p>
                            </div>
                        </div>
                    </div>


                </Drawer>
            </div>
        </React.Fragment>
    )
}

export default SideDrawer