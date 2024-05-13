const Contact = () => {
    return (
      <div className="min-h-screen bg-gray-100">
        {/* Contact section */}
        <div className="py-16 text-center text-gray-800 bg-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-4 text-4xl font-semibold">Contact Us</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Contact details card */}
              <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-[1.01] m-2">
                <h3 className="mb-4 text-2xl font-semibold">Contact Details</h3>
                <p className="mb-2 text-lg"><span className="font-semibold text-gray-800">Address:</span> 123 Main Street, Pune, India</p>
                <p className="mb-2 text-lg"><span className="font-semibold text-gray-800">Email:</span> pankajrajule@gmail.com</p>
                <p className="mb-2 text-lg"><span className="font-semibold text-gray-800">Phone:</span> +91 1234567890</p>
              </div>
              {/* Enquiry card */}
              <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-[1.01] m-2">
                <h3 className="mb-4 text-2xl font-semibold">Enquiry</h3>
                <form className="text-left">
                  <div className="mb-4">
                    <label htmlFor="name" className="block mb-2 text-lg font-semibold text-gray-800">Name</label>
                    <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="contact" className="block mb-2 text-lg font-semibold text-gray-800">Contact Number</label>
                    <input type="tel" id="contact" name="contact" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="location" className="block mb-2 text-lg font-semibold text-gray-800">Location From-To</label>
                    <input type="text" id="location" name="location" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 text-lg font-semibold text-gray-800">Email</label>
                    <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block mb-2 text-lg font-semibold text-gray-800">Message</label>
                    <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"></textarea>
                  </div>
                  <button type="submit" className="px-6 py-3 font-semibold text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-600">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;