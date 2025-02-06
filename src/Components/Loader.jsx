import logo from "../../image/logo-transparent.png";

const Loader = () => {
  return (
    <div className="loader-container">
      <img src={logo} alt="Logo" className="loader-image" />
      <p className="welcome-text">Welcome to HeavenLy Florist</p>
    </div>
  );
};

export default Loader;


