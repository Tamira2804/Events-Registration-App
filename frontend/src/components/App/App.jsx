import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home'
import EventsBoard from '../../pages/EventsBoard'
import EventRegistration from 'pages/EventRegistration'
import EventParticipants from 'pages/EventParticipants'

const App = () => {
  return (
    <>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/' element={<EventsBoard />} />
        <Route path='/register/:eventId' element={<EventRegistration />} />
        <Route path='/participants/:eventId' element={<EventParticipants />} />
      </Routes>
    </>
  )
}

export default App
