import SynnesChair from "../assets/synneschair.png";
import StageFloorLamp from "../assets/StageFloorLamp.png";
import FoamElegentChair from "../assets/FoamElegentChair.png";

const FurnitureGrid = () => {
  const products = [
    {
      name: "Synnes Chair",
      price: 3100.0,
      image: SynnesChair,
    },
    {
      name: "Stage Floor Lamp",
      price: 3300.0,
      image: StageFloorLamp,
      isSale: true,
    },
    {
      name: "Foam Elegant Chair",
      price: 4000.0,
      image: FoamElegentChair,
    },
  ];

  return (
    <div className="px-4 sm:px-8 lg:px-16 max-w-screen-2xl mx-auto">
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-10 mb-12">
        <div className="col-span-1 text-start sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">Decoration</h1>
          <p className="text-gray-600 mb-4">
            Small be and the rain would phase distance, succeed align.
          </p>
          <button className="mt-2 text-sm font-medium underline hover:text-green-600 transition-all">
            SHOP NOW
          </button>
        </div>
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden relative"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 sm:h-72 object-cover"
            />
            <div className="p-4 text-start sm:text-left">
              <h3 className="text-lg font-medium mb-2">{product.name}</h3>
              <p className="text-gray-600 font-bold">
                ₵{product.price.toFixed(2)}
              </p>
              {product.isSale && (
                <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-md text-sm">
                  SALE
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Border Line */}
      <div className="border-t-2 border-gray-300 w-full"></div>
    </div>
  );
};

export default FurnitureGrid;
