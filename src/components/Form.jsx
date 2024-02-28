import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Form = () => {
  const navigate = useNavigate()

  let obj = {
    name: '',
    image: ''
  }

  const handleChange = (e) => {
    obj = {
      ...obj,
      [e.target.id]: e.target.value
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(obj)
    const response = await axios.post('http://localhost:3000/clowns', obj)
    console.log(response)
    navigate('/clowns')
    e.target.reset()
  }

  const handleClear = (e) => {
    e.preventDefault()
    e.target.reset()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Clown Name : </label>
        <input className='input' onChange={handleChange} id="name" type="text" />
        <label htmlFor="image">Picture :</label>
        <input className='input' onChange={handleChange} id="image" type="text" />
        {/* <button onClick={handleClear} type="clear">
          Clear
        </button> */}
        
        <button className='buttons margins paddings' type="submit">Add the clown</button>
      </form>
    </>
  )
}

export default Form
