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
import { getBloodRequest } from './features/mainSlice'
export let isLoggedin = localStorage.getItem('token') ? true : false

function App() {
  const dispatch = useDispatch<any>()

  if (isLoggedin) {
    dispatch(getBloodRequest())

  }

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
