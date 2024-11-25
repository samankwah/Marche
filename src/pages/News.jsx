import Breadcrumb from "../components/Breadcrumb";

const News = () => {
  const newsItems = [
    {
      title: "New Furniture Collection Launched",
      date: "May 15, 2024",
      excerpt:
        "Exciting new designs that blend modern aesthetics with comfort.",
    },
    {
      title: "Sustainability Initiative Announcement",
      date: "April 22, 2024",
      excerpt: "Our commitment to eco-friendly manufacturing processes.",
    },
    {
      title: "Design Trends for 2024",
      date: "January 10, 2024",
      excerpt: "Explore the latest interior design trends in furniture.",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 pt-16">
      <Breadcrumb title="News" />

      <div className="container mx-auto px-4">
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">
          Latest News
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {newsItems.map((newsItem, index) => (
            <div
              key={index}
              className="
                bg-white 
                rounded-lg 
                shadow-md 
                p-6 
                transform 
                transition 
                hover:scale-105 
                hover:shadow-xl
              "
            >
              <h2 className="text-xl font-semibold mb-2">{newsItem.title}</h2>
              <p className="text-gray-500 mb-4">{newsItem.date}</p>
              <p className="text-gray-700">{newsItem.excerpt}</p>
              <button
                className="
                mt-4
                bg-black 
                text-white 
                px-4 
                py-2 
                rounded-full 
                hover:bg-gray-800 
                transition
              "
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
