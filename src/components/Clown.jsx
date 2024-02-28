import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Clown = () => {
  const [clowns, setClowns] = useState([])

  const getClowns = async () => {
    try {
      const response = await axios.get('http://localhost:3000/clowns')
      setClowns(response.data)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getClowns()
  }, [])

  const deleteClown = async (id) => {
    const response = await axios.delete(`http://localhost:3000/clowns/${id}`)
    console.log(response)

    setClowns((prvClowns) => {
      let deleted = "e"
      const index = prvClowns.findIndex((clown) => clown._id === id)
      if (index > -1) {
        deleted = prvClowns.splice(index, 1)
      }
      return [...prvClowns]
    })
  }

  return (
    <div>
      <h1 className="headers">Clowny clown</h1>
      <section className="container-grid">
        {clowns.map((clown) => (
          <div key={clown._id}>
            <h3>{clown.name}</h3>
            <img src={clown.image} alt={clown.name} />
            <button
              onClick={() => {
                deleteClown(clown._id)
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </section>
      <section>
        <Link to={`/form`}>add a clown</Link>
      </section>
    </div>
  )
}

export default Clown
