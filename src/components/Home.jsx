
import { Link } from 'react-router-dom';

const Home = () => {
  let car_image_url="https://www.shutterstock.com/shutterstock/photos/1712173885/display_1500/stock-photo-blue-business-car-with-shiny-front-lights-color-bright-1712173885.jpg"
  let car_image_url1="https://www.shutterstock.com/shutterstock/photos/2417240373/display_1500/stock-photo-side-view-cherry-red-business-sedan-car-2417240373.jpg"
  let car_image_url2="https://www.shutterstock.com/shutterstock/photos/2126929628/display_1500/stock-photo-side-turkey-january-blue-kia-sportage-is-parking-on-the-street-on-a-summer-day-2126929628.jpg"
  let car_image_url3="https://www.shutterstock.com/shutterstock/photos/1859211877/display_1500/stock-photo-istanbul-turkey-november-kia-sportage-is-a-compact-suv-built-by-the-south-korean-1859211877.jpg"
  let car_image_url4="https://www.shutterstock.com/shutterstock/photos/2223469105/display_1500/stock-photo-istanbul-turkey-november-hybrid-electric-vehicle-model-kia-sportage-hev-is-built-by-2223469105.jpg"
  let car_image_url0="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  return (
        <div>
            {/* Full-width Banner */}
            <img src={car_image_url0} alt="Car" className="object-cover w-full h-[50vh]" />

            {/* Car Cards Section */}
            <div className="container px-4 py-8 mx-auto">
                <h2 className="mb-8 text-3xl font-bold text-center">Featured Cars</h2>
                <div className="flex flex-wrap items-center justify-center gap-8">
                    {/* Car Cards */}
                    <div className="max-w-md overflow-hidden bg-white rounded-lg shadow-lg">
                        <img src={car_image_url} alt="Car" className="object-cover w-full h-64" />
                        <div className="px-6 py-4">
                            <div className="mb-2 text-xl font-bold">Car Model</div>
                            <p className="text-base text-gray-700">Car Details Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="px-6 py-4">
                            <Link to="/contact" className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Enquire Now</Link>
                        </div>
                    </div>
                    {/* Car Cards */}
                    <div className="max-w-md overflow-hidden bg-white rounded-lg shadow-lg">
                        <img src={car_image_url1} alt="Car" className="object-cover w-full h-64" />
                        <div className="px-6 py-4">
                            <div className="mb-2 text-xl font-bold">Car Model</div>
                            <p className="text-base text-gray-700">Car Details Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="px-6 py-4">
                            <Link to="/contact" className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Enquire Now</Link>
                        </div>
                    </div>
                    {/* Car Cards */}
                    <div className="max-w-md overflow-hidden bg-white rounded-lg shadow-lg">
                        <img src={car_image_url2} alt="Car" className="object-cover w-full h-64" />
                        <div className="px-6 py-4">
                            <div className="mb-2 text-xl font-bold">Car Model</div>
                            <p className="text-base text-gray-700">Car Details Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="px-6 py-4">
                            <Link to="/contact" className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Enquire Now</Link>
                        </div>
                    </div>
                    {/* Car Cards */}
                    <div className="max-w-md overflow-hidden bg-white rounded-lg shadow-lg">
                        <img src={car_image_url3} alt="Car" className="object-cover w-full h-64" />
                        <div className="px-6 py-4">
                            <div className="mb-2 text-xl font-bold">Car Model</div>
                            <p className="text-base text-gray-700">Car Details Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="px-6 py-4">
                            <Link to="/contact" className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Enquire Now</Link>
                        </div>
                    </div>
                    {/* Car Cards */}
                    <div className="max-w-md overflow-hidden bg-white rounded-lg shadow-lg">
                        <img src={car_image_url4} alt="Car" className="object-cover w-full h-64" />
                        <div className="px-6 py-4">
                            <div className="mb-2 text-xl font-bold">Car Model</div>
                            <p className="text-base text-gray-700">Car Details Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="px-6 py-4">
                            <Link to="/contact" className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Enquire Now</Link>
                        </div>
                    </div>

                    {/* Add more car cards similarly */}
                </div>
            </div>

            {/* Footer Section */}
            <footer className="mt-8 text-center">
                <div className="flex justify-center mb-4">
                    {/* Car Images */}
                    <img src={car_image_url} alt="Car" className="object-cover w-16 h-16 rounded-full" />
                    {/* Add more car images similarly */}
                </div>
                <p className="text-gray-500">© 2024 Car Rent. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
