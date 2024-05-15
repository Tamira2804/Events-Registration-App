import React from 'react'
import { List } from './EventsList.styled'
import EventItem from 'components/EventItem'

const EventsList = ({ eventsAll }) => {
  return (
    <List>
      {eventsAll.map((event) => (
        <EventItem key={event._id} event={event} />
      ))}
    </List>
  )
}

export default EventsList
