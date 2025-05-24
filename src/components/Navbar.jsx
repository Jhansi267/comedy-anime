import React, { useState } from 'react';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdLeaderboard, MdLocalActivity } from "react-icons/md";
import { RiMovie2Fill } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [showMovieSubmenu, setShowMovieSubmenu] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const navigate = useNavigate();

  const toggleMovieSubmenu = () => {
    setShowMovieSubmenu(prev => !prev);
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(prev => !prev);
  };

  const activeStyle = {
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#ffa500",
    borderRadius: "10px",
    padding: "5px 10px",
  };

  const comedyHoverStyle = {
    transition: "transform 0.2s ease, background-color 0.2s ease",
    borderRadius: "10px",
  };

  const getHoverStyle = (name) =>
    hoveredLink === name
      ? {
          backgroundColor: "#ffcc00",
          color: "#000",
          transform: "rotate(-2deg) scale(1.1)",
        }
      : {};

  const handleLogout = () => {
    console.log("Logging out...");
    navigate('/login');
  };

  return (
    <>
      <style>{`
        :root {
          --nav-bg: linear-gradient(to right, #ff758c, #ff7eb3, #ff8c7e, #ff9a5a);
        }
        .navbar-nav .nav-link {
          transition: all 0.2s ease;
          border-radius: 10px;
        }
        .dropdown-item:hover {
          background-color: #ffeeba;
          border-radius: 5px;
        }
      `}</style>

      <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ background: 'var(--nav-bg)' }}>
        <div className="container-fluid">
          <NavLink className="navbar-brand ms-3" to="/home">
            <img src="/assets/images/logo.png" alt="logo" width={60} />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-3 text-white">

              {/* Home */}
              <li className="nav-item" key="home">
                <NavLink
                  to="/home"
                  className="nav-link d-flex align-items-center"
                  style={({ isActive }) =>
                    isActive
                      ? { ...activeStyle, ...comedyHoverStyle }
                      : { ...comedyHoverStyle, ...getHoverStyle("home") }
                  }
                  onMouseEnter={() => setHoveredLink("home")}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <AiFillHome size={25} /><span className="ms-2">Home</span>
                </NavLink>
              </li>

              {/* Movies with submenu */}
              <li
                className="nav-item position-relative"
                key="movies"
                onMouseLeave={() => setShowMovieSubmenu(false)}
              >
                <div
                  className="nav-link d-flex align-items-center"
                  style={{
                    cursor: 'pointer',
                    ...comedyHoverStyle,
                    ...(hoveredLink === "movies" ? getHoverStyle("movies") : {})
                  }}
                  onClick={toggleMovieSubmenu}
                  onMouseEnter={() => setHoveredLink("movies")}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <RiMovie2Fill size={25} />
                  <span className="ms-2">Movies</span>
                </div>

                {showMovieSubmenu && (
                  <ul
                    className="position-absolute bg-white shadow p-2 rounded"
                    style={{ top: '100%', left: 0, zIndex: 1000 }}
                    onMouseLeave={() => setShowMovieSubmenu(false)}
                  >
                    <li>
                      <Link
                        to="/Movies/AllPrankEpisodes"
                        className="dropdown-item"
                        style={{ color: '#000', padding: '5px 10px' }}
                        onClick={() => setShowMovieSubmenu(false)}
                      >
                        All Prank Episodes
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Movies/Embarrassing"
                        className="dropdown-item"
                        style={{ color: '#000', padding: '5px 10px' }}
                        onClick={() => setShowMovieSubmenu(false)}
                      >
                        Embarrassing
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Movies/Supernatural"
                        className="dropdown-item"
                        style={{ color: '#000', padding: '5px 10px' }}
                        onClick={() => setShowMovieSubmenu(false)}
                      >
                        Supernatural
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* LOL Pass */}
              <li className="nav-item" key="lol">
                <NavLink
                  to="/Subscription"
                  className="nav-link d-flex align-items-center"
                  style={({ isActive }) =>
                    isActive
                      ? { ...activeStyle, ...comedyHoverStyle }
                      : { ...comedyHoverStyle, ...getHoverStyle("lol") }
                  }
                  onMouseEnter={() => setHoveredLink("lol")}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <MdLocalActivity size={25} /><span className="ms-2">LOL Pass</span>
                </NavLink>
              </li>

              {/* Ranking */}
              <li className="nav-item" key="ranking">
                <NavLink
                  to="/FanRankings"
                  className="nav-link d-flex align-items-center"
                  style={({ isActive }) =>
                    isActive
                      ? { ...activeStyle, ...comedyHoverStyle }
                      : { ...comedyHoverStyle, ...getHoverStyle("ranking") }
                  }
                  onMouseEnter={() => setHoveredLink("ranking")}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <MdLeaderboard size={25} /><span className="ms-2">Ranking</span>
                </NavLink>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto mb-2 gap-2">

              {/* Bookmarks */}
              <li className="nav-item" key="bookmarks">
                <NavLink
                  to="/WishList"
                  className="nav-link"
                  style={({ isActive }) =>
                    isActive
                      ? { ...activeStyle, ...comedyHoverStyle }
                      : { ...comedyHoverStyle, ...getHoverStyle("bookmarks") }
                  }
                  onMouseEnter={() => setHoveredLink("bookmarks")}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <BsFillBookmarkHeartFill size={30} />
                </NavLink>
              </li>

              {/* Profile with dropdown */}
              <li className="nav-item position-relative" key="profile" style={{ cursor: 'pointer' }}>
                <div
                  className="nav-link d-flex align-items-center"
                  onClick={toggleProfileDropdown}
                  onMouseEnter={() => setHoveredLink("profile")}
                  onMouseLeave={() => setHoveredLink(null)}
                  style={{
                    ...comedyHoverStyle,
                    ...(hoveredLink === "profile" ? getHoverStyle("profile") : {})
                  }}
                >
                  <CgProfile size={30} />
                  <span className="ms-2"></span>
                </div>

                {showProfileDropdown && (
                  <ul
                    className="position-absolute bg-white shadow p-2 rounded"
                    style={{ top: '100%', right: 0, zIndex: 1000, minWidth: '150px' }}
                    onMouseLeave={() => setShowProfileDropdown(false)}
                  >
                    <li>
                      <NavLink
                        to="/profile"
                        className="dropdown-item"
                        style={{ color: '#000', padding: '8px 12px' }}
                        onClick={() => setShowProfileDropdown(false)}
                      >
                        Profile
                      </NavLink>
                    </li>
                    <li>
                      <button
                        className="dropdown-item btn btn-link"
                        style={{ color: '#000', padding: '8px 12px', textAlign: 'left' }}
                        onClick={() => {
                          setShowProfileDropdown(false);
                          handleLogout();
                        }}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
