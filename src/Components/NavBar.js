import { Link } from "react-router-dom";
import "./NavBar.css"
export default function NavBar() {
  return (
    <nav>
      <div className="navItems"> 
      <div className="item">
        <Link className="link" to='/'>Home 👾</Link>
      </div>
        <div className="item">
          <Link className="link" to="/games">Games 🕹️</Link>
        </div>
      </div>
      <h1 style={{color:"green"}}>🎮 PM Games 🎮</h1> 
      <button className="navButton">
          <Link className="link" to="/games/new">New Game 📀</Link>
      </button>

    </nav>
  );
}