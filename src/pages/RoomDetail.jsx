import Room from '../components/Room'
import Clown from '../components/Clown'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const RoomDetail = () => {
  const { id } = useParams()

  const [roomDetail, setRoomDetail] = useState({})

  const getRoomDetail = async () => {
    const response = await axios.get(`http://localhost:3000/rooms/${id}`)
    console.log(response.data)
    setRoomDetail(response.data)
  }

  useEffect(() => {
    getRoomDetail()
  }, [id])

  return (
    <>
      <div>
        hello sayed
        <h3>{roomDetail.name}</h3>
        <img
          className="imgLarge"
          src={roomDetail.image}
          alt={roomDetail.name}
        />
      </div>
      <button>
        <Link to={`/room/book/${id}`}>Book</Link>
      </button>
    </>
  )
}

export default RoomDetail
