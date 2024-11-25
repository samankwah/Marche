import Light1 from "../assets/light1.webp";
import Light2 from "../assets/light2.webp";

const HeroSection = () => {
  return (
    <header className="container relative mx-auto flex min-h-[28rem] overflow-hidden bg-[#D2E9E3] px-5 py-14 lg:py-20 xl:px-28 mt-16">
      {/* Text Content */}
      <div className="z-10 space-y-8 w-full md:w-1/2 md:space-y-16">
        <div className="space-y-4">
          <h1 className="text-4xl -top -16 font-light capitalize leading-[1.2] md:text-5xl">
            <span className="font-medium">Marché</span> Number #1 Trusted
            furniture website.
          </h1>
          <p className="font-medium text-orange-400">
            coming soon in your door with a huge discount.
          </p>
          <button className="mt-6 px-6 py-2 text-sm uppercase tracking-wider transition-colors duration-300 hover:border-orange-500">
            VIEW NOW
          </button>
          <hr className=" hidden w-2/12  md:block "></hr>
        </div>
      </div>

      {/* Image Content - Responsive positioning */}
      <div className="absolute top-0 right-0 h-full w-1/2">
        <div className="relative h-full w-full">
          <img
            src={Light2}
            alt="Lamp Image One"
            className="absolute -top-16 right-64 hidden w-80 scale-150 transform object-cover object-center md:flex md:right-32 lg:right-48 xl:right-80 xl:w-96"
          />
          <img
            src={Light1}
            alt="Lamp Image Two"
            className="absolute -top-32 right-32 hidden w-80 scale-125 transform object-cover object-center md:flex md:right-8 lg:right-16 xl:right-32 xl:w-96"
          />
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
