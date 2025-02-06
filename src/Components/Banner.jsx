import './Banner.css';

function Banner() {
  const whatsappRedirect = () => {
    // WhatsApp link
    window.location.href = 'https://www.apple.com'; // Replace this with your WhatsApp link
  };

  return (
    <div className='container'>
      <div className='banner'>
        <button onClick={whatsappRedirect} className='whatsapp-button'>
          <i className="fab fa-whatsapp" aria-hidden="true"></i>
          <h5>Whatsapp Now</h5>
        </button>
      </div>
    </div>
  );
}

export default Banner;
