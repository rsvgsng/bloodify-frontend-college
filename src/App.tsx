import React from 'react'
import HomePage from './pages/HomePage'
import { Navigate, Route, Router, Routes } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import Layout from './components/Layout'
import LoginPage from './pages/LoginPage'
import AboutPage from './pages/AboutPage'
import DashboardPage from './pages/LoggedInPages/DashboardPage'
import AmbulancesPage from './pages/LoggedInPages/AmbulancesPage'
import SearchBloodPage from './pages/LoggedInPages/SearchBloodPage'
import BloodbankPage from './pages/LoggedInPages/BloodbankPage'
import RequestBloodPage from './pages/LoggedInPages/RequestBloodPage'
import { Toaster } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { getAdminDash, getAllBloodBanks, getAllBloodRequests, getAllUsersAdmin, getAmbulancesAdmin, getBloodRequest, getCampaginsAdmin, getCampaginsUser, getPing, setUsername } from './features/mainSlice'
export let isLoggedin = localStorage.getItem('token') ? true : false
import { jwtDecode } from "jwt-decode";
import CampaignPage from './pages/LoggedInPages/CampaignPage'
import 'react-responsive-modal/styles.css';

import './App.css'
import { TbFidgetSpinner } from 'react-icons/tb'
import Adminlayout from './AdminPages/Adminlayout'
import Admindash from './AdminPages/Admindash'
import AdminUsers from './AdminPages/AdminUsers'
import AdminBloodRequest from './AdminPages/AdminBloodRequest'
import AdminBloodBank from './AdminPages/AdminBloodBank'
import AdminCampagins from './AdminPages/AdminCampagins'
import CampaignsPage from './pages/LoggedInPages/EventsPage'
import AdminAmbulance from './AdminPages/AdminAmbulance'
function App() {
  const dispatch = useDispatch<any>()
  const [view, setView] = React.useState<'admin' | 'user' | 'blank' | 'notlogged'>(isLoggedin ? 'blank' : 'notlogged')

  React.useEffect(() => {
    if (isLoggedin) {
      dispatch(getPing()).then((res: any) => {
        let role = res.payload.role
        console.log(role)
        if (role === 'admin') {
          dispatch(getAdminDash())
          dispatch(getAllUsersAdmin())
          dispatch(getAllBloodRequests())
          dispatch(getAllBloodBanks())
          dispatch(getCampaginsAdmin())
          dispatch(getAmbulancesAdmin())
          return setView('admin')
        }

        if (role === 'user') {
          dispatch(getBloodRequest())
          dispatch(getCampaginsUser())
          dispatch(setUsername(jwtDecode(localStorage.getItem("token")).userName))
          return setView('user')
        }
        localStorage.removeItem('token'),
          window.location.reload()

      })

    }
  }, [])

  if (view === 'blank') return (
    <React.Fragment>
      <div className="loading__init" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#f0f0f0'
      }}>
        <div className="auth__msg">
          <h1>
            Welcome to Bloodify
          </h1>
          <TbFidgetSpinner />
          <p className='loading__text'>
            Authorizing your account and loading your dashboard.....
          </p>

        </div>
      </div>
    </React.Fragment>
  )

  if (view === 'admin') return (
    <React.Fragment>
      <Toaster />
      <Routes>
        <Route path='/' element={<Adminlayout />} >
          <Route path="/" element={<Admindash />} />
          <Route path="/Users" element={<AdminUsers />} />
          <Route path="/BloodRequests" element={<AdminBloodRequest />} />
          <Route path="/BloodBanks" element={<AdminBloodBank />} />
          <Route path="/Campagins" element={<AdminCampagins />} />
          <Route path="/Ambulances" element={<AdminAmbulance />} />

          <Route path="*" element={<Navigate to={'/'} />} />
        </Route>
      </Routes>
    </React.Fragment>
  )

  if (isLoggedin) return (
    <React.Fragment>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<DashboardPage />} />
          <Route path="/SearchBlood" element={<SearchBloodPage />} />
          <Route path="/Ambulances" element={<AmbulancesPage />} />
          <Route path="/BloodRequest" element={<RequestBloodPage />} />
          <Route path="/BloodBank" element={<BloodbankPage />} />
          <Route path="/Campaigns" element={<CampaignsPage />} />
          <Route path="/CampaignsPast" element={<CampaignPage />} />


          <Route path="*" element={<Navigate to={'/'} />} />
        </Route>
      </Routes>
    </React.Fragment>
  )

  return (
    <React.Fragment>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<HomePage />} />
          <Route path="/Signup" element={<SignupPage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="*" element={<Navigate to={'/'} />} />
        </Route>
      </Routes>
    </React.Fragment>
  )
}

export default App
