import { useState, useEffect } from 'react'
import axios from 'axios'

const Clown = () => {
  const [clowns, setClowns] = useState([])

  const getClowns = async () => {
    try {
      const response = await axios.get('http://localhost:3000/clowns')
      setClowns(response)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getClowns()
  }, [])

  return (
    <div>
      <h1 className="headers">Clowny clown</h1>
      <section className="container-grid">
        {clowns.map((clown) => (
          <div key={clowns._id}>
            <h3>{clown.name}</h3>
            <img src={clown.image} alt={clown.name} />
          </div>
        ))}
      </section>
    </div>
  )
}

export default Clown
