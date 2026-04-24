import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

function ScrollTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {show && (
        <button
          onClick={scrollTop}
          className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white w-14 h-14 rounded-xl shadow-xl flex items-center justify-center transition"
        >
          <FaChevronUp className="text-xl" />
        </button>
      )}
    </>
  );
}

export default ScrollTopButton;