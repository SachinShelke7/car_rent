import { Link } from "react-router-dom";

const CallButton = () => {
  return (
  

      <Link
      to="/contact"
      className="fixed bottom-10 right-48 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-green-600 transition-colors"
    >
      Enquiry
    </Link>
    
  );
};

export default CallButton;
