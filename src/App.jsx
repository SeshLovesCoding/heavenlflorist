import { useState, useEffect } from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./Components/Navbar.jsx";
import Banner from "./Components/Banner.jsx";
import Category from "./Components/Category.jsx";
import ProductCard from "./Components/ProductCard.jsx";
import PromotionCard from "./Components/PromotionCard.jsx";
import Footer from "./Components/Footer.jsx";
import Loader from "./Components/Loader.jsx"; // Import the Loader component
import ScrollUp from "./Components/ScrollUp.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay before showing the main content
    setTimeout(() => {
      setLoading(false);
    }, 8000); // Change this value as needed
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Banner />
          <Category />
          <ProductCard />
          <PromotionCard />
          <Footer />
          <ScrollUp />
        </>
      )}
    </>
  );
}

export default App;

