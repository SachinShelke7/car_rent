import { Link } from "react-router-dom";

const CallButton = () => {
  return (
    <>
      <a
        href="https://wa.me/+919561526177"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed px-2 py-1 font-semibold text-white transition-colors bg-green-500 rounded-lg shadow-lg bottom-10 right-8 hover:bg-green-600"
      >
        WhatsApp Us
      </a>
      <Link
        to="/contact"
        className="fixed px-2 py-1 font-semibold text-white transition-colors bg-green-500 rounded-lg shadow-lg bottom-10 right-[10rem] hover:bg-green-600"
      >
        Enquiry
      </Link>
        <a href="tel:+919561526177" className="fixed bottom-10 right-[15rem] md:right-[14.5rem] px-2 py-1 font-semibold text-white transition-colors bg-green-500 rounded-lg shadow-lg hover:bg-green-600">
          CALL
        </a>
    </>
  );
};

export default CallButton;
