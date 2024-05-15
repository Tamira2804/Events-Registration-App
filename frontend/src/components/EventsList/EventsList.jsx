import React from 'react'
import { List } from './EventsList.styled'
import EventItem from 'components/EventItem'

const events = [
  {
    id: 1,
    title: 'Lorem 01',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit in diam nonumy eirmod tempor incididunt ut labore et just eu fugiat nulla pariatur et non proident. Excepteur sint occaecat cupiditat non proident et non pro ident ident is simply voluptua. Lorem ipsum dolor sit amet et  just eirmod tempor incididunt ut labore et just eu fugiat nulla pariatur et non proident. Lorem ipsum dolor sit amet et just e firmo. Lorem ipsum dolor sit amet et just e firmo is just voluptua. Lorem ipsum dolor sit amet',
    date: '25.05.2024',
    organizer: 'ELIFTECH',
  },
  {
    id: 2,
    title: 'Lorem 02',
    description: 'Lorem ipsum dolor sit amet, consectet',
    date: '25.05.2024',
    organizer: 'ELIFTECH',
  },
  {
    id: 3,
    title: 'Lorem 03',
    description: 'Lorem ipsum dolor sit amet, consectet',
    date: '25.05.2024',
    organizer: 'ELIFTECH',
  },
  {
    id: 4,
    title: 'Lorem 04',
    description: 'Lorem ipsum dolor sit amet, consectet',
    date: '25.05.2024',
    organizer: 'ELIFTECH',
  },
  {
    id: 5,
    title: 'Lorem 05',
    description: 'Lorem ipsum dolor sit amet, consectet',
    date: '25.05.2024',
    organizer: 'ELIFTECH',
  },
  {
    id: 6,
    title: 'Lorem 06',
    description: 'Lorem ipsum dolor sit amet, consectet',
    date: '25.05.2024',
    organizer: 'ELIFTECH',
  },
]

const EventsList = () => {
  return (
    <List>
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </List>
  )
}

export default EventsList
