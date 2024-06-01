import React from 'react'
import HomePage from './pages/HomePage'
import { Navigate, Route, Router, Routes } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import Layout from './components/Layout'
import LoginPage from './pages/LoginPage'
import AboutPage from './pages/AboutPage'
import DashboardPage from './pages/LoggedInPages/DashboardPage'
import AmbulancesPage from './pages/LoggedInPages/AmbulancesPage'
import NewsPage from './pages/LoggedInPages/NewsPage'
import EventsPage from './pages/LoggedInPages/EventsPage'
import SearchBloodPage from './pages/LoggedInPages/SearchBloodPage'
import BloodbankPage from './pages/LoggedInPages/BloodbankPage'
import SingleNewsPage from './pages/LoggedInPages/SingleNewsPage'
import RequestBloodPage from './pages/LoggedInPages/RequestBloodPage'
import { Toaster } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { getBloodRequest, getPing, setUsername } from './features/mainSlice'
export let isLoggedin = localStorage.getItem('token') ? true : false
import { jwtDecode } from "jwt-decode";
import Campaign from './components/LoggedInComponents/CampaignComponent/Campaign'
import CampaignPage from './pages/LoggedInPages/CampaignPage'
import { PiSpinnerBallThin } from 'react-icons/pi'
import './App.css'
import { TbFidgetSpinner } from 'react-icons/tb'
import Adminlayout from './AdminPages/Adminlayout'
function App() {
  const dispatch = useDispatch<any>()
  const [view, setView] = React.useState<'admin' | 'user' | 'blank' | 'notlogged'>(isLoggedin ? 'blank' : 'notlogged')

  React.useEffect(() => {
    if (isLoggedin) {
      dispatch(getPing()).then((res: any) => {
        let role = res.payload.role
        if (role === 'admin') {
          return setView('admin')
        }

        if (role === 'user') {
          dispatch(getBloodRequest())
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
            Wrapping up the last few things...
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
          <Route path="/News" element={<NewsPage />} />
          <Route path="/News/:id" element={<SingleNewsPage />} />
          <Route path="/BloodRequest" element={<RequestBloodPage />} />
          <Route path="/BloodBank" element={<BloodbankPage />} />
          <Route path="/Campaigns" element={<CampaignPage />} />
          <Route path="/Events" element={<EventsPage />} />
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
