import { Link } from 'react-router-dom'

const Room = ({ rooms }) => {
  return (
    <Link to={`/rooms/${rooms.id}`}>
      <div>
        <h1 className="headers">Spooky Room</h1>
        <h2>{rooms.name}</h2>
        <img src={rooms.image} alt={rooms.name} />
      </div>
    </Link>
  )
}

export default Room
