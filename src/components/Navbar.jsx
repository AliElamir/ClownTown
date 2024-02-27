import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="themepark">Clown Town</Link>
        <Link to="clowns">View All Clowns</Link>
      </nav>
    </header>
  )
}

export default Header
