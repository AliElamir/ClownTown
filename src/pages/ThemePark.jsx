import { useState, useEffect } from 'react'
import axios from 'axios'
import Room from '../components/Room'

const ThemePark = () => {
  const [rooms, setRooms] = useState([])

  const getRooms = async () => {
    try {
      const response = await axios.get('http://localhost:3000/rooms')
      setRooms(response.data)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getRooms()
  }, [])

  return (
    <>
      <div>
        <h1 className="headers">Our Rooms</h1>
        <section className="container-grid">
          {rooms.map((room) => (
            <Room key={room._id} rooms={room} />
          ))}
        </section>
      </div>
    </>
  )
}

export default ThemePark
