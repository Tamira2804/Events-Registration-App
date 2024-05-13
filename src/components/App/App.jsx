import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home'
import EventsBoard from '../../pages/Events_Board'
import EventRegistration from 'pages/EventRegistration'
import EventParticipants from 'pages/EventParticipants'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/board' element={<EventsBoard />} />
        <Route path='/registration' element={<EventRegistration />} />
        <Route path='/participants' element={<EventParticipants />} />
      </Routes>
    </>
  )
}

export default App
