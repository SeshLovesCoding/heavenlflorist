import './ProductCard.css'

function ProductCard() {
    return (
        <div className="container my-5 d-flex flex-column align-items-center">
            <div className='product-title'>
            <h1 className='product-title-text'>Top Picks</h1>
            </div>
            <div className="product-subtitle">
            <h5>Our Favourites</h5>
            </div>
            <div className='product-card-section justify-content-center d-flex flex-wrap gap-5 py-5'>
            <div
                className="card text-white"
                style={{
                borderRadius: "20px",
                overflow: "hidden",
                minWidth: "350px",
                height: "480px"
            }}>
                <img
                    src="https://picsum.photos/200/300?grayscale"
                    className="card-img"
                    alt="..."/>
                <div
                    className="card-img-overlay d-flex flex-column justify-content-end px-4"
                    style={{
                    background: "rgba(0, 0, 0, 0.5)",
                    paddingBottom: "100px"
                }}>
                    <p>Title</p>
                    <h3 style={{marginBottom:"15px",marginTop:"-15px"}}>Card Title</h3>
                    <button className='button-product'>Click Here <span className='arrow-right'>→</span></button>
                </div>
            </div>

            <div
                className="card text-white flex-wrap"
                style={{
                borderRadius: "20px",
                overflow: "hidden",
                minWidth: "350px",
                height: "480px"
            }}>
                <img
                    src="https://picsum.photos/200/300?grayscale"
                    className="card-img"
                    alt="..."/>
                <div
                    className="card-img-overlay d-flex flex-column justify-content-end px-4"
                    style={{
                    background: "rgba(0, 0, 0, 0.5)",
                    paddingBottom: "100px"
                }}>
                    <p>Title</p>
                    <h3 style={{marginBottom:"15px",marginTop:"-15px"}}>Card Title</h3>
                    <button className='button-product'>Click Here <span className='arrow-right'>→</span></button>
                </div>
            </div>

            <div
                className="card text-white flex-wrap"
                style={{
                borderRadius: "20px",
                overflow: "hidden",
                minWidth: "350px",
                height: "480px"
            }}>
                <img
                    src="https://picsum.photos/200/300?grayscale"
                    className="card-img"
                    alt="..."/>
                <div
                    className="card-img-overlay d-flex flex-column justify-content-end px-4"
                    style={{
                    background: "rgba(0, 0, 0, 0.5)",
                    paddingBottom: "100px"
                }}>
                    <p>Title</p>
                    <h3 style={{marginBottom:"15px",marginTop:"-15px"}}>Card Title</h3>
                    <button className='button-product'>Click Here <span className='arrow-right'>→</span></button>
                </div>
            </div>

            <div
                className="card text-white flex-wrap"
                style={{
                borderRadius: "20px",
                overflow: "hidden",
                minWidth: "350px",
                height: "480px"
            }}>
                <img
                    src="https://picsum.photos/200/300?grayscale"
                    className="card-img"
                    alt="..."/>
                <div
                    className="card-img-overlay d-flex flex-column justify-content-end px-4"
                    style={{
                    background: "rgba(0, 0, 0, 0.5)",
                    paddingBottom: "100px"
                }}>
                    <p>Title</p>
                    <h3 style={{marginBottom:"15px",marginTop:"-15px"}}>Card Title</h3>
                    <button className='button-product'>Click Here <span className='arrow-right'>→</span></button>
                </div>
            </div>

            <div
                className="card text-white flex-wrap"
                style={{
                borderRadius: "20px",
                overflow: "hidden",
                minWidth: "350px",
                height: "480px"
            }}>
                <img
                    src="https://picsum.photos/200/300?grayscale"
                    className="card-img"
                    alt="..."/>
                <div
                    className="card-img-overlay d-flex flex-column justify-content-end px-4"
                    style={{
                    background: "rgba(0, 0, 0, 0.5)",
                    paddingBottom: "100px"
                }}>
                    <p>Title</p>
                    <h3 style={{marginBottom:"15px",marginTop:"-15px"}}>Card Title</h3>
                    <button className='button-product'>Click Here <span className='arrow-right'>→</span></button>
                </div>
            </div>

            <div
                className="card text-white flex-wrap"
                style={{
                borderRadius: "20px",
                overflow: "hidden",
                minWidth: "350px",
                height: "480px",
            }}>
                <img
                    src="https://picsum.photos/200/300?grayscale"
                    className="card-img"
                    alt="..."/>
                <div
                    className="card-img-overlay d-flex flex-column justify-content-end px-4"
                    style={{
                    background: "rgba(0, 0, 0, 0.5)",
                    paddingBottom: "100px"
                }}>
                    <p>Title</p>
                    <h3 style={{marginBottom:"15px",marginTop:"-15px"}}>Card Title</h3>
                    <button className='button-product'>Click Here <span className='arrow-right'>→</span></button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ProductCard;