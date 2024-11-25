import TableLampForDesk from "../assets/TableLampForDesk.png";
import SingleSpeakerRing from "../assets/SingleSpeakerRing.png";
import LuxeriousChairForOffice from "../assets/LuxeriousChairForOffice.png";

const ArchitectComponent = () => {
  const products = [
    {
      name: "Table Lamp For Desk",
      price: 2700.0,
      image: TableLampForDesk,
    },
    {
      name: "Sinlge Speaker Ring",
      price: 2000.0,
      image: SingleSpeakerRing,
    },
    {
      name: "Luxerious chair for office",
      price: 25000.0,
      image: LuxeriousChairForOffice,
    },
  ];

  return (
    <div className="px-4 sm:px-8 lg:px-16 max-w-screen-2xl mx-auto">
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-10 mb-12">
        <div className="col-span-1 text-start sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">Architect</h1>
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
              {index === 0 && (
                <span className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-md text-sm">
                  NEW
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

export default ArchitectComponent;
