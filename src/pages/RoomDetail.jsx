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
    const response = await axios.get(
      `https://clowntownbackend.fly.dev/rooms/${id}`
    )
    console.log(response.data)
    setRoomDetail(response.data)
  }

  useEffect(() => {
    getRoomDetail()
  }, [id])

  return (
    <div className="roomDetailImg">
      <h3 className="headers">{roomDetail.name}</h3>
      <div className="roomDetails">
        <img
          className="imgLarge"
          src={roomDetail.image}
          alt={roomDetail.name}
        />
        <p>{roomDetail.desc}</p>
      </div>
      <section className="center">
        <button className="buttons">
          <Link to={`/room/book/${id}`}>
            <span className="black">Book Room</span>
          </Link>
        </button>
      </section>
    </div>
  )
}

export default RoomDetail
