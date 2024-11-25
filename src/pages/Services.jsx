import { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";

const Services = () => {
  const [activeTab, setActiveTab] = useState("all");

  const serviceCategories = {
    design: [
      {
        icon: "🎨",
        title: "Custom Design Consultation",
        description:
          "Personalized design sessions with our expert interior designers.",
        price: "Starting at ₵299",
      },
      {
        icon: "🖌️",
        title: "Space Planning",
        description:
          "Optimize your living space with professional layout strategies.",
        price: "Starting at ₵199",
      },
    ],
    manufacturing: [
      {
        icon: "🛠️",
        title: "Custom Furniture Crafting",
        description:
          "Handcrafted furniture tailored to your exact specifications.",
        price: "Custom Pricing",
      },
      {
        icon: "🪵",
        title: "Material Selection",
        description:
          "Premium wood and material sourcing for unique furniture pieces.",
        price: "Included with Design",
      },
    ],
    support: [
      {
        icon: "🚚",
        title: "White Glove Delivery",
        description:
          "Premium delivery and installation service across major cities.",
        price: "Free with ₵1000+ Purchase",
      },
      {
        icon: "🔧",
        title: "Furniture Restoration",
        description:
          "Expert repair and refurbishment of your cherished furniture.",
        price: "Starting at ₵149",
      },
    ],
  };

  const filteredServices =
    activeTab === "all"
      ? Object.values(serviceCategories).flat()
      : serviceCategories[activeTab];

  return (
    <section className="min-h-screen bg-gray-50 pt-16">
      <Breadcrumb title="Services" />

      <div className="container mx-auto px-4">
        <h1 className="text-center text-4xl font-bold text-gray-800 mb-10">
          Our Comprehensive Services
        </h1>

        {/* Service Category Tabs */}
        <div className="flex justify-center mb-8 space-x-4">
          {[
            { key: "all", label: "All Services" },
            { key: "design", label: "Design Services" },
            { key: "manufacturing", label: "Manufacturing" },
            { key: "support", label: "Support & Delivery" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`
                px-4 py-2 rounded-full transition
                ${
                  activeTab === tab.key
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className="
                bg-white 
                rounded-lg 
                shadow-md 
                p-6 
                text-center 
                transform 
                transition 
                hover:scale-105 
                hover:shadow-xl
                group
              "
            >
              <div className="text-6xl mb-4 group-hover:text-blue-600 transition">
                {service.icon}
              </div>
              <h2 className="text-xl font-semibold mb-3">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="text-blue-700 font-medium">{service.price}</div>
              <button
                className="
                mt-4
                bg-black 
                text-white 
                px-6 
                py-2 
                rounded-full 
                hover:bg-blue-700 
                transition
              "
              >
                Book Consultation
              </button>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="text-center mt-12 bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Why Choose Our Services?</h3>
          <div className="flex justify-center space-x-6 text-gray-700">
            <div>
              <h4 className="font-semibold">✓ Expert Craftmanship</h4>
              <p>Highest quality materials and techniques</p>
            </div>
            <div>
              <h4 className="font-semibold">✓ Custom Solutions</h4>
              <p>Tailored to your unique needs and style</p>
            </div>
            <div>
              <h4 className="font-semibold">✓ Comprehensive Support</h4>
              <p>From design to delivery and beyond</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
