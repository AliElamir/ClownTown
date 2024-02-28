import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const Clown = () => {
  const [clowns, setClowns] = useState([])

  const getClowns = async () => {
    try {
      const response = await axios.get("http://localhost:3000/clowns")
      setClowns(response.data)
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
          <div key={clown._id}>
            <h3>{clown.name}</h3>
            <img src={clown.image} alt={clown.name} />
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
