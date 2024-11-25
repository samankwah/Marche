// import Breadcrumb from "../components/Breadcrumb";

// const FeaturedSection = () => {
//   const categories = [
//     {
//       name: "White Shape Chair",
//       bgColor: "bg-yellow-100",
//       image: "/images/chair-feature.jpg",
//     },
//     {
//       name: "Wood Rubber Chair",
//       bgColor: "bg-purple-100",
//       image: "/images/rubber-chair.jpg",
//     },
//     {
//       name: "Stylish Wooden Chair",
//       bgColor: "bg-pink-100",
//       image: "/images/wooden-chair.jpg",
//     },
//   ];

//   return (
//     <section className="bg-gray-50 pt-16">
//       <Breadcrumb title="Features" />
//       <div className="container mx-auto">
//         <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
//           Featured Categories
//         </h3>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {categories.map((cat, index) => (
//             <div
//               key={index}
//               className={`p-6 rounded-lg text-center shadow-md ${cat.bgColor}`}
//             >
//               <img
//                 src={cat.image}
//                 alt={cat.name}
//                 className="w-full h-40 object-cover rounded-lg mb-4"
//               />
//               <h4 className="text-xl font-semibold">{cat.name}</h4>
//               <button className="mt-4 bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600">
//                 Shop Now
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedSection;

import Breadcrumb from "../components/Breadcrumb";

const FeaturedSection = () => {
  const categories = [
    {
      name: "White Shape Chair",
      bgColor: "bg-yellow-100",
      image: "/images/chair-feature.jpg",
      description:
        "Discover our exquisite white shape chair, a modern masterpiece that will elevate any space.",
    },
    {
      name: "Wood Rubber Chair",
      bgColor: "bg-purple-100",
      image: "/images/rubber-chair.jpg",
      description:
        "Indulge in the timeless elegance of our wood and rubber chair, perfect for a touch of rustic charm.",
    },
    {
      name: "Stylish Wooden Chair",
      bgColor: "bg-pink-100",
      image: "/images/wooden-chair.jpg",
      description:
        "Elevate your living space with our stunning stylish wooden chair, a statement piece that exudes sophistication.",
    },
  ];

  return (
    <section className="bg-gray-50 pt-16">
      <Breadcrumb title="Features" />
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Featured Categories
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-md transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg ${cat.bgColor}`}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold mb-2">{cat.name}</h4>
              <p className="text-gray-600 mb-4">{cat.description}</p>
              <button className="mt-4 bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors duration-300">
                Shop Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
