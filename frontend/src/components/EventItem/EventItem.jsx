import React from 'react'
import {
  CardThumb,
  Title,
  Descr,
  BtnWrapper,
  StyledLink,
} from './EventItem.styled'

const EventItem = ({ event }) => {
  const { title, description, organizer, date } = event

  return (
    <CardThumb>
      <Title>{title}</Title>
      <Descr>{description}</Descr>
      <p>{organizer}</p>
      <p>{date}</p>
      <BtnWrapper>
        <StyledLink to={'/registration'}>Registration</StyledLink>
        <StyledLink to={'/participants'}>View</StyledLink>
      </BtnWrapper>
    </CardThumb>
  )
}

export default EventItem
