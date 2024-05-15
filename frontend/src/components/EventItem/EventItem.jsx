import React from 'react'
import {
  CardThumb,
  Title,
  Descr,
  BtnWrapper,
  StyledLink,
} from './EventItem.styled'

const EventItem = ({ event }) => {
  return (
    <CardThumb>
      <Title>{event.title}</Title>
      <Descr>{event.description}</Descr>
      <p>{event.organizer}</p>
      <p>{event.date}</p>
      <BtnWrapper>
        <StyledLink to={`/register/${event._id}`}>Registration</StyledLink>
        <StyledLink to={`/participants/${event._id}`}>View</StyledLink>
      </BtnWrapper>
    </CardThumb>
  )
}

export default EventItem
