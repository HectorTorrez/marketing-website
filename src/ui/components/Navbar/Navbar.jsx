import { Link, NavLink } from "react-router-dom"
import './Navbar.css'
export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar--ul">
        <NavLink className={({ isActive, isPeding }) =>
          isPeding ? "peding" : isActive ? "active" : ""
        } to='/'>
          <li>Home</li>
        </NavLink>
      </ul>
    </nav>
  )
}