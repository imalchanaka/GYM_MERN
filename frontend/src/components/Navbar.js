import { Link } from 'react-router-dom'

const Navbar = () => {
//nav bar body

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>imal workout</h1>
        </Link>
      </div>
    </header>
  )
}

export default Navbar