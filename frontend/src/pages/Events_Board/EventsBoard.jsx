import React from 'react'
import Container from 'components/Container'
import { Wrapper } from './EventsBoard.styled'
import EventsList from 'components/EventsList'

const Events_Board = () => {
  return (
    <Container>
      <Wrapper>
        <h1>Event Board</h1>
        <EventsList />
      </Wrapper>
    </Container>
  )
}

export default Events_Board
