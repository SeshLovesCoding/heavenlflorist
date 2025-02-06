import './Navbar.css'

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg py-3">
  <div className="container d-flex justify-content-between align-items-center">
    {/* Navbar Brand */}
    <a className="navbar-brand d-flex align-items-center" href="#">
      <img
        className="logo me-2"
        src="/image/logo-transparent.png"
        alt="Logo"
        width="40"
        height="40"
      />
      HeavenL Florist
    </a>

    {/* Toggler Button */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Navbar Links */}
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav text-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Packages
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Best Seller
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Pricing
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}
export default Navbar;