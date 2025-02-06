import './Footer.css';

function Footer() {
    return (
        <footer>
            <div className="container d-flex footer-container">
                <div className="col-lg-4 col-sm-6 florist-details">
                <img src="/src/image/logo-transparent.png" style={{marginBottom:"15px",width:"100px",height:"100px",border:"1px solid #ef9b96",borderRadius:"50%",backgroundColor:"white"}} alt="" />
                <h4 className='bold-text-text text-white'>HeavenL Florist</h4>
                <div className="florist-contact">
                <p className='bold-text-text'>Phone number: +60123452857</p>
                <p className='bold-text-text'>Email : heavenlflorist@gmail.com</p>
                </div>
                </div>
                <div className="col-lg-4 col-sm-6 d-flex flex-column footer-menu justify-content-end bold-text-bold">
                    <a className='footer-menu-text' href="">Home</a>
                    <a className='footer-menu-text' href="">Packages</a>
                    <a className='footer-menu-text' href="">Best Seller</a>
                    <a className='footer-menu-text' href="">Pricing</a>
                </div>
                <p className='copyright-text'>HeavenL Florist 201803304417(002877418-D) . All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;