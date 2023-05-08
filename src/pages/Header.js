import {React,useState} from 'react'
import './../styles/Header.scss'
import {NavLink} from 'react-router-dom'
const Header = () => {

  return (
    <div>
        <nav className="navbar">
            <div className="navbar1">
                <div className="logo">
                    <img src='https://res.cloudinary.com/sownthari/image/upload/v1683424974/local_library_FILL0_wght400_GRAD0_opsz48_h79fze.svg'></img><span>Central Library</span>
                </div>
                <div className={"nav-elements active"}>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/holded">Holded</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header