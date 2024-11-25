import PropTypes from "prop-types"; // Import PropTypes
// Removed unused Card import
// import { Card } from "../components/ui/card";
import Stylish from "../assets/stylish.png";
import OfficeWoodChair from "../assets/officewoodchair.png";
import DiningTable from "../assets/DiningTable.png";
import BumbooMug from "../assets/BumbooMug.png";
import BlackSofa from "../assets/BlackSofa.png";
import WoodenJanusTableLamp from "../assets/WoodenJanusTableLamp.png";
import BlackAvoaChair from "../assets/BlackAvoaChair.png";
import WoodenTool from "../assets/WoodenTool.png";
import MiroDiningTableSmallest from "../assets/MiroDiningTableSmallest.png";
import UnderDressingTableKit from "../assets/UnderDressingTableKit.png";

const products = {
  bestSeller: [
    {
      id: 1,
      name: "Office Wood Chair",
      price: 3500.0,
      image: OfficeWoodChair,
    },
    {
      id: 2,
      name: "Dining Table For Family",
      price: 8999.0,
      image: DiningTable,
    },
    {
      id: 3,
      name: "Bumboo Mug - Wood Craft",
      price: 1500.0,
      image: BumbooMug,
    },
  ],
  newArrival: [
    {
      id: 4,
      name: "Black Sofa Set - Wood Craft",
      price: 77000.0,
      image: BlackSofa,
    },
    {
      id: 5,
      name: "Wooden Janus Table Lamp",
      price: 11000.0,
      image: WoodenJanusTableLamp,
    },
    {
      id: 6,
      name: "Black Avoa Chair",
      price: 799.0,
      image: BlackAvoaChair,
    },
  ],
  featured: [
    {
      id: 7,
      name: "Wooden Tool",
      price: 3800.0,
      image: WoodenTool,
    },
    {
      id: 8,
      name: "Miro Dining Table Smallest",
      price: 4999.0,
      image: MiroDiningTableSmallest,
    },
    {
      id: 9,
      name: "Under Dressing Table Kit",
      price: 7200.0,
      image: UnderDressingTableKit,
    },
  ],
};

const ProductSection = ({ title, items }) => (
  <div className="flex-1">
    <h2 className="text-lg font-semibold mb-4 uppercase border-b border-gray-300 pb-2">
      {title}
    </h2>
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="flex items-center space-x-4">
          <img
            src={item.image}
            alt={item.name}
            className="w-20 h-20 object-cover bg-gray-100"
          />
          <div>
            <h3 className="font-medium">{item.name}</h3>
            <p className="text-gray-600">₵{item.price.toLocaleString()}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Define prop types for ProductSection
ProductSection.propTypes = {
  title: PropTypes.string.isRequired, // title must be a string
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired, // items must be an array of objects
};

const FurnitureStore = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 mb-16">
      {/* Hero Section */}
      <div className="bg-gray-100 mb-16 rounded-lg overflow-hidden">
        <div className="container relative flex justify-between items-center px-4">
          <div className="max-w-fit pl-6">
            <h1 className="text-4xl font-bold mb-3">
              <span>STYLISH </span>
              <span className="text-gray-600 font-medium">MINIMAL CHAIR </span>
              {/* <span>CHAIR</span> */}
            </h1>
            <button className="mt-4 text-sm font-medium underline">
              VIEW NOW
            </button>
          </div>
          <img
            src={Stylish}
            alt="Minimal Chair"
            className="relative bottom-10 right-0 w-80 h-60 object-contain"
          />
        </div>
      </div>

      {/* Product Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ProductSection title="Best Seller" items={products.bestSeller} />
        <ProductSection title="New Arrival" items={products.newArrival} />
        <ProductSection title="Featured" items={products.featured} />
      </div>
    </div>
  );
};

export default FurnitureStore;
