import { Link } from "react-router-dom";
const Navbar=()=>{
    return(
        <div className="navbar">
            <nav className="navbar navbar-dark bg-dark fixed-top" style={{padding: '20px', margin: '20px auto', position: 'fixed'}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{fontSize: '25px'}}>College Website</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="offcanvas offcanvas-end text-bg-dark" tabIndex={-1} id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Navigate</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">Know your College</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/courses">Courses</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/gallery">Gallery</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">Contact Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/dataforadmission">Admission</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li><a className="dropdown-item" href="#">Know Your College</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex mt-3" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </nav>
        </div>
    )
}

export default Navbar;