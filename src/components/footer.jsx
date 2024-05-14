export default function footer() {
  let car_image_url =
    "https://www.shutterstock.com/shutterstock/photos/1712173885/display_1500/stock-photo-blue-business-car-with-shiny-front-lights-color-bright-1712173885.jpg";

  return (
    <footer className="mt-8 text-center">
      <div className="flex justify-center mb-4">
        {/* Car Images */}
        <img
          src={car_image_url}
          alt="Car"
          className="object-cover w-16 h-16 rounded-full"
        />
        {/* Add more car images similarly */}
      </div>
      <p className="text-gray-500">© 2024 Sai Tours & Travels. All Rights Reserved.</p>
    </footer>
  );
}
