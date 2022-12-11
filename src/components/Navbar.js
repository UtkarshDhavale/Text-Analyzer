import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {

  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">{props.about}</a>
                </li>
              </ul>
              {/*
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
              */}

              <p style={{marginBottom: "0"}}>Choose you favourite Theme:</p>

              <div className={`form-check form-switch text-${(props.mode==="dark")?"light":"dark"}`}>
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{(props.mode==="dark")?"Enable Light Mode": "Enable Dark Mode"}</label>
              </div>

            </div>
          </div>
        </nav>
    </div>
  )
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    home: PropTypes.string,
    about: PropTypes.string
}

Navbar.defaultProps = {
    title: "Set Title here",
    home: "Home",
    about: "About"
}
