import { useState, useEffect } from 'react'
import axios from 'axios'

const Clown = () => {
  const [clowns, setClowns] = useState([])

  useEffect(() => {
    const getClowns = async () => {
      // const response = // get information from the database
      // setClowns(...)
    }
    getClowns()
  }, [])

  return (
    <div>
      <h1 className="headers">Clowny clown</h1>
      <section className="container-grid">
        {clowns.map((clown) => (
          <div key={clowns.id}>
            <h3>{clown.name}</h3>
            <img src={clown.image} alt={clown.name} />
          </div>
        ))}
      </section>
    </div>
  )
}

export default Clown
