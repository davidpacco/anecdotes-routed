import { Link } from "react-router-dom"

export function Menu() {
  const padding = {
    paddingRight: 5
  }

  return (
    <div>
      <Link to='/' style={padding}>Anecdotes</Link>
      <Link to='/create' style={padding}>Create new</Link>
      <Link to='/about' style={padding}>About</Link>
    </div>
  )
}