import React, { useState, useEffect } from 'react'
import Container from 'components/Container'
import { Wrapper } from './EventsBoard.styled'
import EventsList from 'components/EventsList'
import axios from 'axios'

const EventsBoard = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    axios
      .get('/events')
      .then((res) => {
        console.log(res.data)
        setEvents(res.data)
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <Container>
      <Wrapper>
        <h1>Event Board</h1>
        <EventsList eventsAll={events} />
      </Wrapper>
    </Container>
  )
}

export default EventsBoard
