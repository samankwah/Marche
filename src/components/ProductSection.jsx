import { useState } from "react";
import PropTypes from "prop-types";
import SynnesChair from "../assets/synneschair.png";
import TableLampForDesk from "../assets/TableLampForDesk.png";
import SingleSpeakerRing from "../assets/SingleSpeakerRing.png";
import OfficeWoodChair from "../assets/officewoodchair.png";
import BlackSofa from "../assets/BlackSofa.png";
import WoodenTool from "../assets/WoodenTool.png";
import AureaCoffeeTable from "../assets/AureaCoffeeTable.png";
import ComfortableChair from "../assets/ComfortableChair.png";
import { Link } from "react-router-dom";
const categories = [
  "ALL",
  "SOFAS",
  "ARCHITECT",
  "FURNITURE",
  "DECORATION",
  "LIGHTING",
  "LOUNGE CHAIRS",
];

const products = [
  {
    id: 1,
    name: "Wooden Tool",
    price: 3800.0,
    image: WoodenTool,
    category: "FURNITURE",
    isNew: true,
    details: "Modern side table with solid wood construction",
    inStock: true,
  },
  {
    id: 2,
    name: "Table Lamp For Desk",
    price: 2700.0,
    image: TableLampForDesk,
    category: "LIGHTING",
    details: "Adjustable desk lamp with brass finish",
    inStock: true,
  },
  {
    id: 3,
    name: "Comfortable Chair",
    price: 15000.0,
    image: ComfortableChair,
    category: "LOUNGE CHAIRS",
    details: "Ergonomic lounge chair with leather upholstery",
    inStock: false,
  },
  {
    id: 4,
    name: "Synnes Chair",
    price: 3100.0,
    image: SynnesChair,
    category: "LOUNGE CHAIRS",
    details: "Scandinavian dining chair in natural wood",
    inStock: true,
  },
  {
    id: 5,
    name: "Aurea Coffee Table",
    price: 4999.0,
    image: AureaCoffeeTable,
    category: "FURNITURE",
    details: "Round coffee table with minimalist design",
    inStock: true,
  },
  {
    id: 6,
    name: "Office Wood Chair",
    price: 3500.0,
    image: OfficeWoodChair,
    category: "FURNITURE",
    onSale: true,
    details: "Ergonomic office chair with wooden frame",
    inStock: true,
  },
  {
    id: 7,
    name: "Sinlge Speaker Ring",
    price: 2000.0,
    image: SingleSpeakerRing,
    category: "DECORATION",
    details: "Wireless portable speaker with premium sound",
    inStock: true,
  },
  {
    id: 8,
    name: "Black Sofa Set - Wood Craft",
    price: 77000.0,
    image: BlackSofa,
    category: "SOFAS",
    details: "Modern 3-seater sofa with wooden accents",
    inStock: true,
  },
];

const ProductCard = ({ product }) => (
  <div className="group cursor-pointer">
    <div className="relative bg-gray-100 mb-4 aspect-square overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
      />

      {/* Overlay with quick view button */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
        <button className="bg-white text-gray-900 px-6 py-2 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          Quick View
        </button>
      </div>

      {/* Status badges */}
      <div className="absolute top-4 left-4 flex flex-col gap-2">
        {product.isNew && (
          <span className="bg-green-500 text-white text-xs px-2 py-1">NEW</span>
        )}
        {product.onSale && (
          <span className="bg-red-500 text-white text-xs px-2 py-1">SALE</span>
        )}
        {!product.inStock && (
          <span className="bg-gray-700 text-white text-xs px-2 py-1">
            OUT OF STOCK
          </span>
        )}
      </div>
    </div>

    {/* Product Info */}
    <div className="space-y-1">
      <h3 className="text-gray-900 font-medium group-hover:text-green-500 transition-colors">
        {product.name}
      </h3>
      <p className="text-gray-500 text-sm">{product.details}</p>
      <p className="text-gray-900 font-medium">
        ₵{product.price.toLocaleString()}.00
      </p>
    </div>
  </div>
);

// PropTypes validation for the ProductCard component
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    isNew: PropTypes.bool,
    onSale: PropTypes.bool,
    inStock: PropTypes.bool.isRequired,
  }).isRequired,
};

// Default props for optional properties
ProductCard.defaultProps = {
  product: {
    isNew: false,
    onSale: false,
  },
};

const ProductSection = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredProducts = products.filter(
    (product) => activeCategory === "ALL" || product.category === activeCategory
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Category Navigation */}
      <div className="mb-12">
        <ul className="flex flex-wrap items-center justify-start sm:justify-center gap-2 sm:gap-4 px-2 sm:px-4">
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => setActiveCategory(category)}
                className={`text-xs sm:text-lg tracking-wide hover:text-green-500 transition-colors relative ${
                  category === activeCategory
                    ? "text-green-500"
                    : "text-gray-600"
                }`}
              >
                {category}
                {category === activeCategory && (
                  <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-green-500" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Product Grid */}
      <div
        className={`grid gap-6 sm:gap-8 mb-12 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4`}
      >
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Go to Shop Section */}
      <div className="flex items-center justify-center my-12">
        <div className="flex-1 border-t border-gray-300 mx-4"></div>
        <Link
          to="/shop"
          className="px-6 py-2 border border-green-500 text-gray-600 font-medium hover:text-green-500 hover:border-green-500 transition-all"
        >
          GO TO SHOP
        </Link>
        <div className="flex-1 border-t border-gray-300 mx-4"></div>
      </div>
    </div>
  );
};

export default ProductSection;
