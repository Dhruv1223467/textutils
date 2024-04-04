import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg ${props.mode ? 'bg-white' : 'bg-dark'} ${props.mode ? 'text-black' : 'text-white'}`}>
  <div className="container-fluid">
    <Link className={`navbar-brand ${props.mode ? 'text-black' : 'text-white'}`} to="/">{props.h1}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link active ${props.mode ? 'text-black' : 'text-white'}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${props.mode ? 'text-black' : 'text-white'}`} to="/About">About</Link>
        </li>
      </ul>
    </div>
    <div className="form-check form-switch">
  <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode?"Enable":"Disable"} Dark Mode</label>
</div>
  </div>
</nav>
  )
}
Navbar.defaultProps={
    h1: 'it is default'
};
