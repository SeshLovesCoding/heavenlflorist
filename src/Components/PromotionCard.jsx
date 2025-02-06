import './PromotionCard.css';

function PromotionCard() {
    return (
        <div
            className="container d-flex flex-wrap justify-content-center promotion-container">
            <div className="row w-100 align-items-start">
                <div
                    className="col-lg-6 col-md-12 d-flex justify-content-center justify-content-center text-center text-lg-start">
                    <h1 className="promotion-card-title">
                        Flowers &<br/>
                        gifts for all
                        <span className="secondary-color-span"> occasions</span>.
                    </h1>
                </div>
                <div className="col-lg-6 col-md-12 d-flex justify-content-center mt-4 mt-lg-0">
                    <div className="product-card-section d-flex justify-content-start flex-wrap">
                        <div
                            className="card text-white"
                            style={{
                            borderRadius: "20px",
                            overflow: "hidden",
                            minWidth: "300px",
                            maxWidth: "100%",
                            height: "580px"
                        }}>
                            <img
                                src="https://picsum.photos/500/700?grayscale"
                                className="card-img"
                                alt="..."/>
                            <div
                                className="card-img-overlay d-flex flex-column justify-content-end px-4"
                                style={{
                                background: "rgba(0, 0, 0, 0.5)",
                                paddingBottom: "100px"
                            }}>
                                <h2>We Got You Covered!</h2>
                                <p
                                    style={{
                                    marginBottom: "15px",
                                    fontStyle: "italic"
                                }}>
                                    No matter what the occasion is, from birthdays to anniversaries, or to express
                                    your love and friendship, you’ll be able to find what you need to create special
                                    moments with the people you care about.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PromotionCard;