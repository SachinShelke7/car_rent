import { Link } from "react-router-dom";

const CallButton = () => {

  return (


<>
<Link
      to="/contact"
      className="fixed px-2 py-1 font-semibold text-white transition-colors bg-green-500 rounded-lg shadow-lg bottom-10 right-[9.5rem] hover:bg-green-600"
    >
      Enquiry
    </Link>
    <div
      className="fixed px-2 py-1 font-semibold text-white transition-colors bg-green-500 rounded-lg shadow-lg bottom-10 right-[14.5rem] hover:bg-green-600"
    >
<a href="tel:+919561526177">CALL</a>

    </div>
    </>
    
  );
};

export default CallButton;
