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
import RequestBloodPage from './pages/LoggedInPages/SearchBloodPage'
import BloodbankPage from './pages/LoggedInPages/BloodbankPage'

export let isLoggedin = localStorage.getItem('token') ? true : false

function App() {

  if (isLoggedin) return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<DashboardPage />} />
          <Route path="/SearchBlood" element={<RequestBloodPage />} />
          <Route path="/Ambulances" element={<AmbulancesPage />} />
          <Route path="/News" element={<NewsPage />} />
          <Route path="/BloodRequests" element={<NewsPage />} />
          <Route path="/BloodBank" element={<BloodbankPage />} />
          <Route path="/Events" element={<EventsPage />} />
          <Route path="*" element={<Navigate to={'/'} />} />
        </Route>
      </Routes>
    </React.Fragment>
  )

  return (
    <React.Fragment>
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
