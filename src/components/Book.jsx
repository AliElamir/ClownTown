import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Book = () => {
  const [clowns, setClowns] = useState([])
  const [insideClowns, setInsideClowns] = useState([])
  const [outsideClowns, setOutsideClowns] = useState([])

  let navigate = useNavigate()
  const { id } = useParams()

  const getClowns = async () => {
    try {
      const response = await axios.get("http://localhost:3000/clowns")
      const inside = await axios.get(`http://localhost:3000/rooms/${id}`)
      setClowns(response.data)
      setInsideClowns(inside.data.clowns)

      let allClowns = response.data
      let inclowns = inside.data.clowns
      let outClowns = allClowns
      for (let i = 0; i < inclowns.length; i++) {
        console.log(inclowns[i])
        const index = outClowns.findIndex((c) => c._id === inclowns[i]._id)
        if (index > -1) {
          outClowns.splice(index, 1)
        }
      }
      setOutsideClowns([...outClowns])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getClowns()
  }, [])

  const addClown = (clown) => {
    setInsideClowns((prevInsideClowns) => [...prevInsideClowns, clown])
    setOutsideClowns((prevClowns) => {
      let index = prevClowns.findIndex((c) => c._id === clown._id)
      console.log(index)
      prevClowns.splice(index, 1)
      return [...prevClowns]
    })
  }

  const removeClown = (clown) => {
    setOutsideClowns((prevInsideClowns) => [...prevInsideClowns, clown])
    setInsideClowns((prevClowns) => {
      let index = prevClowns.findIndex((c) => c._id === clown._id)
      console.log(index)
      prevClowns.splice(index, 1)
      return [...prevClowns]
    })
  }

  const clearAllClown = () => {
    setInsideClowns([])
  }

  const handleSubmit = async () => {
    let bookedClowns = []
    insideClowns.forEach((clown) => {
      bookedClowns.push(clown._id)
    })
    console.log(bookedClowns)
    const response = await axios.put(`http://localhost:3000/rooms/${id}`, {
      clowns: bookedClowns
    })
    navigate('/thanks')

    console.log(response)
  }
  return (
    <div className="themeParkImg">
      <div className="bookDiv">
        <div className="insideBookDiv">
          <h3 className="bookHeaders">Clowns in the room</h3>
          <section>
            {insideClowns.map((clown) => (
              <div className="clownGrid" key={clown._id}>
                <img src={clown.image} alt={clown.name} />
                <h3>{clown.name}</h3>
                <button
                  className="buttons paddings"
                  onClick={() => {
                    removeClown(clown)
                  }}
                >
                  remove this clown
                </button>
                {/* <button
                onClick={() => {
                  addClown(clown)
                }}
              >
                remove this clown
              </button> */}
              </div>
            ))}
          </section>
        </div>
        <div className="outsideBookDiv">
          <h3 className="bookHeaders">All Our Clowns</h3>
          <section>
            {outsideClowns.map((clown) => (
              <div className="clownGrid" key={clown._id}>
                <img src={clown.image} alt={clown.name} />
                <h3 className="bookHeaders">{clown.name}</h3>
                <button
                  className="buttons paddings"
                  onClick={() => {
                    addClown(clown)
                  }}
                >
                  add this clown
                </button>
              </div>
            ))}
          </section>
        </div>
      </div>
      <div className="centers">
        <button className="buttons paddings" onClick={handleSubmit}>
          Book this room
        </button>
      </div>
    </div>
  )
}
export default Book
