let founderPhoto="https://scontent.fpnq13-2.fna.fbcdn.net/v/t31.18172-1/18518270_944719175631292_7562822265654053233_o.jpg?stp=dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IwWQaBaZzdEQ7kNvgFUE_rK&_nc_ht=scontent.fpnq13-2.fna&oh=00_AYCY-quxnjC47xNfxm7rwuIE_s21HLYRRvC2mVSSIwioMg&oe=66692C81"

const About = () => {
    return (
      <div className="min-h-screen bg-gray-100">
        {/* Hero section */}
        <div className="py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-4 text-4xl font-semibold text-gray-800">About Us</h2>
            <p className="text-lg text-gray-600">Car Rent is a leading car rental service provider, offering a wide range of vehicles for rent at competitive prices. Our mission is to provide our customers with the best car rental experience by offering high-quality vehicles, excellent customer service, and convenient rental options.</p>
          </div>
        </div>
        {/* Founder section */}
        <div className="max-w-4xl py-16 mx-auto">
          <div className="text-center">
            <img src={founderPhoto} alt="Founder" className="w-48 h-48 mx-auto mb-4 rounded-full shadow-lg" />
            <h3 className="mb-2 text-3xl font-semibold text-gray-800">Meet Our Founder</h3>
            <p className="text-lg text-gray-600">Pankaj Rajule</p>
            <p className="text-lg text-gray-600">Founder & CEO</p>
          </div>
          <div className="mt-8 text-lg leading-relaxed text-gray-800">
            <p>Car Rent was founded by John Doe in 2005. With a passion for cars and a vision to revolutionize the car rental industry, John started Car Rent with just a few vehicles and a commitment to providing exceptional service to customers.</p>
            <p>John Doe is an experienced entrepreneur with over 20 years of experience in the automotive industry. He has a deep knowledge of cars and a strong commitment to customer satisfaction. Under his leadership, Car Rent has grown into a successful car rental company with locations across the country.</p>
            <p>Car Rent started with humble beginnings in a small garage, but it quickly grew into a trusted name in the car rental industry. Over the years, we have expanded our fleet, improved our services, and built strong relationships with our customers. Today, we continue to innovate and strive for excellence in everything we do.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;

