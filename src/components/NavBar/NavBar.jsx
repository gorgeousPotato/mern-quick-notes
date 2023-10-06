import { Link } from "react-router-dom"
import * as userService from "../../utilities/users-service"
import "./NavBar.css"

export default function NavBar({ user, setUser }) {
  function handleLogout() {
    userService.logOut();
    setUser(null);
  }
  return(
    <nav>
      <h3>Welcome, {user.name}</h3>
      <Link to="" onClick={ handleLogout }>Log Out</Link>
    </nav>
  );
}