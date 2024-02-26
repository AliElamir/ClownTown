import { useState, useEffect } from 'react'
import axios from 'axios'
import Room from '../components/Room'

const ThemePark = () => {
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    const getRooms = async () => {
      // const response = // get information from the database
      // setRooms(...)
    }
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
