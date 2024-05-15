import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const EventRegistration = () => {
  const { eventId } = useParams()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dob: '',
    source: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(`/participants`, { ...formData, eventId })
      alert('Реєстрація успішно завершена!')
    } catch (err) {
      console.error(err)
      alert('Виникла помилка при реєстрації.')
    }
  }

  return (
    <div>
      <h1>Форма реєстрації на подію</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder="Ім'я"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type='email'
          name='email'
          placeholder='Електронна пошта'
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type='date'
          name='dob'
          placeholder='Дата народження'
          value={formData.dob}
          onChange={handleChange}
          required
        />
        <input
          type='text'
          name='source'
          placeholder='Де ви дізналися про цю подію?'
          value={formData.source}
          onChange={handleChange}
          required
        />
        <button type='submit'>Зареєструватися</button>
      </form>
    </div>
  )
}

export default EventRegistration
