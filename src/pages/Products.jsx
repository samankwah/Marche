import { useState, useMemo } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { LayoutGrid, List, Search, Filter } from "lucide-react";
import SynnesChair from "../assets/synneschair.png";
import TableLampForDesk from "../assets/TableLampForDesk.png";
// import SingleSpeakerRing from "../assets/SingleSpeakerRing.png";
import OfficeWoodChair from "../assets/officewoodchair.png";
// import BlackSofa from "../assets/BlackSofa.png";
import WoodenTool from "../assets/WoodenTool.png";
import AureaCoffeeTable from "../assets/AureaCoffeeTable.png";
import ComfortableChair from "../assets/ComfortableChair.png";
import BlackAvoaChair from "../assets/BlackAvoaChair.png";
import LuxeriousChairForOffice from "../assets/LuxeriousChairForOffice.png";
import BlackChairWooden from "../assets/BlackChairWooden.png";

const FilterSidebar = ({
  onSearch,
  onClearAll,
  onCategoryChange,
  onColorChange,
  onPriceChange,
  onShippingChange,
  activeCategory,
  activeColor,
  priceRange,
  withShipping,
  categories,
  colors,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`w-64 bg-white p-6 rounded-lg shadow-lg border border-gray-200 sticky top-16 ${
        isOpen ? "block" : "hidden md:block"
      }`}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">FILTER BY</h2>
        <button
          onClick={onClearAll}
          className="text-emerald-500 text-sm hover:text-emerald-600"
        >
          Clear All
        </button>
      </div>

      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search product..."
          className="w-full px-4 py-2 border border-gray-200 rounded-lg pr-10"
          onChange={(e) => onSearch(e.target.value)}
        />
        <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
      </div>

      <div className="mb-6">
        <h3 className="text-gray-800 font-medium mb-3">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.name}>
              <button
                className={`text-left w-full py-1 ${
                  activeCategory === category.name
                    ? "text-emerald-500 font-medium"
                    : "text-gray-600 hover:text-gray-800"
                }`}
                onClick={() => onCategoryChange(category.name)}
              >
                {category.name} ({category.count})
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-gray-800 font-medium mb-3">Colors</h3>
        <div className="flex gap-2 flex-wrap">
          {colors.map((color) => (
            <button
              key={color.name}
              className={`w-6 h-6 rounded-full ${color.class} ${
                activeColor === color.name
                  ? "ring-2 ring-offset-2 ring-emerald-500"
                  : ""
              }`}
              title={color.name}
              onClick={() => onColorChange(color.name)}
            />
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-gray-800 font-medium mb-3">Price Range</h3>
        <input
          type="range"
          min="0"
          max="77000"
          value={priceRange}
          onChange={(e) => onPriceChange(Number(e.target.value))}
          className="w-full accent-emerald-500"
        />
        <div className="text-right text-gray-600 mt-1">
          ₵{priceRange.toLocaleString()}.00
        </div>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="shipping"
          className="mr-2"
          checked={withShipping}
          onChange={(e) => onShippingChange(e.target.checked)}
        />
        <label htmlFor="shipping" className="text-gray-600">
          Shipping
        </label>
      </div>
    </div>
  );
};

const ProductsHeader = ({
  totalProducts,
  onSortChange,
  onViewChange,
  currentView,
}) => {
  return (
    <div className="flex justify-between items-center mb-6 pb-4">
      <div className="flex items-center space-x-4">
        <button
          className={`p-2 rounded ${
            currentView === "grid" ? "bg-gray-100" : "hover:bg-gray-100"
          }`}
          onClick={() => onViewChange("grid")}
        >
          <LayoutGrid size={20} className="text-gray-600" />
        </button>
        <button
          className={`p-2 rounded ${
            currentView === "list" ? "bg-gray-100" : "hover:bg-gray-100"
          }`}
          onClick={() => onViewChange("list")}
        >
          <List size={20} className="text-gray-600" />
        </button>
        <span className="hidden md:block text-sm text-gray-500">
          {totalProducts} Products found
        </span>
      </div>
      <hr className="hidden w-2/5 md:block"></hr>
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-500">sort by</span>
        <select
          className="text-sm text-gray-700 bg-transparent border-none focus:ring-0 cursor-pointer"
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="name-asc">Name (A - Z)</option>
          <option value="name-desc">Name (Z - A)</option>
          <option value="price-asc">Price (Lowest)</option>
          <option value="price-desc">Price (Highest)</option>
        </select>
      </div>
      <button
        className="p-2 rounded bg-gray-100 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Filter size={20} className="text-gray-600" />
      </button>
    </div>
  );
};

const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: WoodenTool,
      name: "Wooden Tool",
      price: 3800,
      category: "Furniture",
      brand: "Brand A",
      color: "Brown",
      inStock: true,
      isFavorite: false,
    },
    {
      id: 2,
      image: TableLampForDesk,
      name: "Table Lamp For Desk",
      price: 2700,
      category: "Lighting",
      brand: "Brand B",
      color: "Gold",
      inStock: true,
      isFavorite: false,
    },
    {
      id: 3,
      image: ComfortableChair,
      name: "Comfortable Chair",
      price: 15000,
      category: "Lounge Chairs",
      brand: "Brand C",
      color: "Black",
      inStock: true,
      isFavorite: false,
    },
    {
      id: 4,
      image: SynnesChair,
      name: "Synnes Chair",
      price: 3100,
      category: "Furniture",
      brand: "Brand D",
      color: "Natural",
      inStock: false,
      isFavorite: false,
    },
    {
      id: 5,
      image: AureaCoffeeTable,
      name: "Aurea Coffee Table",
      price: 4999,
      category: "Furniture",
      brand: "Brand A",
      color: "Natural",
      inStock: true,
      isFavorite: false,
    },
    {
      id: 6,
      image: OfficeWoodChair,
      name: "Office Wood Chair",
      price: 3500,
      category: "Furniture",
      brand: "Brand B",
      color: "Brown",
      inStock: true,
      isFavorite: false,
    },
    {
      id: 7,
      image: OfficeWoodChair,
      name: "Office Wood Chair",
      price: 3500,
      category: "Furniture",
      brand: "Brand B",
      color: "Yellow",
      inStock: true,
      isFavorite: false,
    },
    {
      id: 8,
      image: BlackAvoaChair,
      name: "Black Avoa Chair",
      price: 3500,
      category: "Sofas",
      brand: "Brand B",
      color: "Brown",
      inStock: true,
      isFavorite: false,
    },
    {
      id: 9,
      image: LuxeriousChairForOffice,
      name: "Luxerious chair for office",
      price: 3500,
      category: "Architect",
      brand: "Brand B",
      color: "Black",
      inStock: true,
      isFavorite: false,
    },
    {
      id: 10,
      image: BlackChairWooden,
      name: "Black Chair - Wooden Craft",
      price: 3500,
      category: "Sofas",
      brand: "Brand B",
      color: "Brown",
      inStock: true,
      isFavorite: false,
    },
  ]);

  // Filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeColor, setActiveColor] = useState("All");
  const [priceRange, setPriceRange] = useState(77000);
  const [withShipping, setWithShipping] = useState(false);
  const [sortBy, setSortBy] = useState("price-asc");
  const [viewMode, setViewMode] = useState("grid");

  const categories = useMemo(() => {
    const categoryCounts = products.reduce((acc, product) => {
      acc[product.category] = (acc[product.category] || 0) + 1;
      return acc;
    }, {});

    return [
      { name: "All", count: products.length },
      ...Object.entries(categoryCounts).map(([name, count]) => ({
        name,
        count,
      })),
    ];
  }, [products]);

  const colors = [
    { name: "All", class: "bg-gray-200" },
    { name: "Brown", class: "bg-amber-700" },
    { name: "Gold", class: "bg-yellow-400" },
    { name: "Black", class: "bg-black" },
    { name: "Natural", class: "bg-emerald-500" },
  ];

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesSearch = product.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const matchesCategory =
          activeCategory === "All" || product.category === activeCategory;
        const matchesColor =
          activeColor === "All" || product.color === activeColor;
        const matchesPrice = product.price <= priceRange;

        return matchesSearch && matchesCategory && matchesColor && matchesPrice;
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        if (sortBy === "name-asc") return a.name.localeCompare(b.name);
        if (sortBy === "name-desc") return b.name.localeCompare(a.name);
      });
  }, [searchTerm, activeCategory, activeColor, priceRange, sortBy]);

  const handleClearAll = () => {
    setSearchTerm("");
    setActiveCategory("All");
    setActiveColor("All");
    setPriceRange(77000);
  };

  return (
    <section className="min-h-screen bg-gray-50 pt-16">
      <div className="relative">
        <Breadcrumb title="Products" />
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="hidden md:block">
            <FilterSidebar
              onSearch={setSearchTerm}
              onClearAll={handleClearAll}
              onCategoryChange={setActiveCategory}
              onColorChange={setActiveColor}
              onPriceChange={setPriceRange}
              onShippingChange={setWithShipping}
              activeCategory={activeCategory}
              activeColor={activeColor}
              priceRange={priceRange}
              withShipping={withShipping}
              categories={categories}
              colors={colors}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <ProductsHeader
              totalProducts={filteredProducts.length}
              onSortChange={setSortBy}
              onViewChange={setViewMode}
              currentView={viewMode}
            />

            <div
              className={`${
                viewMode === "grid" ? "grid md:grid-cols-3 gap-6" : "space-y-4"
              }`}
            >
              {filteredProducts.map((product) => (
                <div key={product.id} className="">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-auto w-auto object-fill rounded-md"
                  />
                  <h3 className="text-lg font-medium text-gray-800 mt-4">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 mt-1">
                    ₵{product.price.toLocaleString()}.00
                  </p>
                  {/* <button className="mt-4 bg-emerald-500 text-white py-2 px-4 rounded hover:bg-emerald-600">
                    Add to Cart
                  </button> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
