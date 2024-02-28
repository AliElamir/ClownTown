import { useState, useEffect } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"

const Book = () => {
  const [clowns, setClowns] = useState([])
  const [insideClowns, setInsideClowns] = useState([])
  const [outsideClowns, setOutsideClown] = useState([])

  const { id } = useParams()

  const getClowns = async () => {
    try {
      const response = await axios.get("http://localhost:3000/clowns")
      const inside = await axios.get(`http://localhost:3000/rooms/${id}`)

      setInsideClowns(inside.data)
      // clowns.map(clown => {//includes,find
      //   (clown).find(clown._id === insideClowns._id)
      // });
      setClowns(response.data)
      console.log(insideClowns)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getClowns()
  }, [])

  const addClown = (clown) => {
    setInsideClowns((prevInsideClowns) => [...prevInsideClowns, clown])
  }

  const removeClown = (clown) => {
    // setInsideClowns((prevInsideClowns) => [...prevInsideClowns, clown])
  }

  const clearAllClown = () => {
    setInsideClowns([])
  }

  return (
    <div className="bookDiv themeParkImg">
      <div className="insideBookDiv">
        <h3>inside the room </h3>
        <section>
          {insideClowns.map((clown) => (
            <div key={clown._id}>
              <h3>{clown.name}</h3>
              <img src={clown.image} alt={clown.name} />
              {/* <button
                onClick={() => {
                  addClown(clown)
                }}
              >
                remove this clown
              </button> */}
            </div>
          ))}

          <button
            onClick={() => {
              clearAllClown()
            }}
          >
            clear all clown
          </button>
        </section>
      </div>
      <div className="outsideBookDiv">
        <h3>All Our Clowns</h3>
        <section>
          {clowns.map((clown) => (
            <div className="clownGrid" key={clown._id}>
              <img src={clown.image} alt={clown.name} />
              <h3>{clown.name}</h3>
              <button
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
  )
}
export default Book
