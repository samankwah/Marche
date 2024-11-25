import HeroSection from "../components/HeroSection";
import ProductSection from "../components/ProductSection";
import FurnitureStore from "../components/FurnitureStore ";
import FurnitureGrid from "../components/FurnitureGrid";
import ArchitectComponent from "../components/ArchitectComponent";
// import FeaturedSection from "../components/FeaturedSection";
import InstagramSection from "../components/InstagramSection";

function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <ProductSection />
      <FurnitureStore />
      <FurnitureGrid />
      <ArchitectComponent />
      {/* <FeaturedSection /> */}
      <InstagramSection />
    </div>
  );
}

export default Home;
