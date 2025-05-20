import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdLeaderboard } from "react-icons/md";
import { RiMovie2Fill } from "react-icons/ri";
import { MdLocalActivity } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning  fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand ms-3" to="/"><img src="/assets/images/logo.png" alt="logo"  width={60}/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-3 text-white">
                        <li className="nav-item ">
                        <Link className="nav-link d-flex align-items-center" to=""><AiFillHome size={25} className='me-2' />Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link d-flex align-items-center" to=""><RiMovie2Fill size={25} className='me-2'/>Movies</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link d-flex align-items-center " to=""><MdLocalActivity size={25} className='me-2'/>LOL Pass</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link d-flex align-items-center" to=""><MdLeaderboard  size={25} className='me-2'/>Ranking</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 gap-2">
                        <li className="nav-item">
                        <Link className="nav-link " to=""><BsFillBookmarkHeartFill size={30} /></Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link " to=""><IoMdNotifications size={30}/></Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link " to=""><CgProfile size={30}/></Link>
                        </li>
                    </ul>
                    </div>
                </div>
      </nav>
    </>
  )
}

export default Navbar;
