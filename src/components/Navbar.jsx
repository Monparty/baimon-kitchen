import './App.css'
import { Link } from 'react-router-dom'

function App() {
  return (
    <nav className="navbar">
        <div className='logo'>
            <img src="../public/images/Logo.png" />
            <Link to={"/"}>Baimon Kitchen</Link>
        </div>
        <div className="links">
            <Link to={"/"}>HOME</Link>
            <Link to={"/menu"}>MENU</Link>
            <Link to={"/about"}>ABOUT</Link>
            <Link to={"/contact"}>CONTACT</Link>
        </div>
    </nav>
  )
}

export default App
