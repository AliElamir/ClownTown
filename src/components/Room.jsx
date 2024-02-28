import { Link } from 'react-router-dom'

const Room = ({ rooms }) => {
  return (
    <Link to={`/rooms/${rooms._id}`}>
      <div className="roomListDiv">
        <img className="roomListImg" src={rooms.image} alt={rooms.name} />
        <h2 className="roomHeader">{rooms.name}</h2>
      </div>
    </Link>
  )
}

export default Room
