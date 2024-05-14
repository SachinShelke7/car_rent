import { Link } from "react-router-dom";

const Home = () => {
  // Array of car details
  const carDetails = [
    {
      name: "Toyota Camry",
      available: true,
      from: "Pune",
      to: "Mumbai",
      image:
        "https://www.shutterstock.com/shutterstock/photos/2417240373/display_1500/stock-photo-side-view-cherry-red-business-sedan-car-2417240373.jpg",
    },
    {
      name: "Honda Civic",
      available: false,
      from: "Mumbai",
      to: "Goa",
      image:
        "https://www.shutterstock.com/shutterstock/photos/2126929628/display_1500/stock-photo-side-turkey-january-blue-kia-sportage-is-parking-on-the-street-on-a-summer-day-2126929628.jpg",
    },
    {
      name: "BMW 5 Series",
      available: true,
      from: "Delhi",
      to: "Jaipur",
      image:
        "https://www.shutterstock.com/shutterstock/photos/1859211877/display_1500/stock-photo-istanbul-turkey-november-kia-sportage-is-a-compact-suv-built-by-the-south-korean-1859211877.jpg",
    },
    {
      name: "Mercedes-Benz E-Class",
      available: false,
      from: "Jaipur",
      to: "Udaipur",
      image:
        "https://www.shutterstock.com/shutterstock/photos/2223469105/display_1500/stock-photo-istanbul-turkey-november-hybrid-electric-vehicle-model-kia-sportage-hev-is-built-by-2223469105.jpg",
    },
    {
      name: "Audi A6",
      available: true,
      from: "Bangalore",
      to: "Chennai",
      image:
        "https://www.shutterstock.com/shutterstock/photos/1712173885/display_1500/stock-photo-blue-business-car-with-shiny-front-lights-color-bright-1712173885.jpg",
    },
    {
      name: "Lexus ES",
      available: true,
      from: "Chennai",
      to: "Hyderabad",
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div>
      {/* Full-width Banner */}
      <img
        src="https://www.wallpapertip.com/wmimgs/40-409112_bmw-aristo-uhd-8k-wallpaper-black-car-at.jpg"
        alt="Car"
        className="object-cover w-full h-[50vh]"
      />

      {/* Car Cards Section */}
      <div className="container px-4 py-8 mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-center">Available Cars</h2>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {/* Render car cards */}
          {carDetails.map((car, index) => (
            <div
              key={index}
              className="max-w-md overflow-hidden bg-white rounded-lg shadow-lg"
            >
              <img
                src={car.image}
                alt="Car"
                className="object-cover w-full h-64"
              />
              <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold">{car.name}</div>
                <p className="text-base text-gray-700">From: {car.from}</p>
                <p className="text-base text-gray-700">To: {car.to}</p>
                <p className="text-base text-gray-700">
                  {car.available ? "Available" : "Not Available"}
                </p>
              </div>
              <div className="px-6 py-4">
                <Link
                  to="/contact"
                  className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
