import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const EventParticipants = () => {
  const { eventId } = useParams()
  const [participants, setParticipants] = useState([])

  useEffect(() => {
    axios
      .get(`/participants/${eventId}`)
      .then((res) => {
        setParticipants(res.data)
      })
      .catch((err) => console.error(err))
  }, [eventId])

  return (
    <div>
      <h1>Учасники події</h1>
      <ul>
        {participants.map((participant) => (
          <li key={participant._id}>
            <p>
              <strong>Ім'я:</strong> {participant.name}
            </p>
            <p>
              <strong>Електронна пошта:</strong> {participant.email}
            </p>
            <p>
              <strong>Дата народження:</strong> {participant.dob}
            </p>
            <p>
              <strong>Де дізнався про подію:</strong> {participant.source}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default EventParticipants
