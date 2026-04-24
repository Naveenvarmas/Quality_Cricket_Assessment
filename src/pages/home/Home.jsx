import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


import stadium from "../../assets/images/stadium.png";

import bat1 from "../../assets/images/bat1.png";
import bat2 from "../../assets/images/bat2.png";
import kit1 from "../../assets/images/kit1.png";

import gloves1 from "../../assets/images/gloves1.png";
import stumps1 from "../../assets/images/stumps1.png";

import FeaturedProducts from "../../components/FeaturedProducts";
import TopSellers from "../../components/TopSellers";
import AboutUs from "../../components/AboutUs";
import CustomerReviews from "../../components/CustomerReviews";
import ScrollTopButton from "../../components/ScrollTopButton";
function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        className="relative min-h-screen bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${stadium})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-7xl mx-auto px-6 min-h-screen grid lg:grid-cols-2 items-center gap-10 py-20">

          {/* Left Content */}
          <div className="text-white text-center lg:text-left">
            <p className="uppercase tracking-[6px] text-blue-300 text-sm mb-3">
              Premium Cricket Store
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              Quality <span className="text-blue-400">Cricket</span><br />
              Starts Here
            </h1>

            <p className="mt-5 text-gray-200 max-w-xl mx-auto lg:mx-0">
              Premium bats, gloves, kits and accessories designed for players
              who demand performance.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full transition font-medium">
                Shop Now
              </button>

              <button className="border border-white hover:bg-white hover:text-black px-8 py-3 rounded-full transition font-medium">
                View Products
              </button>
            </div>
          </div>

          {/* Right Images */}
          <div className="relative h-[500px] hidden lg:block">

            {/* Main Bat */}
            <img
              src={bat1}
              alt="bat"
              className="absolute left-1/2 -translate-x-1/2 top-8 w-72 drop-shadow-2xl rotate-[-12deg]"
            />

            {/* Side Bat */}
            <img
              src={bat2}
              alt="bat"
              className="absolute left-0 top-20 w-40 rotate-[-28deg] opacity-90"
            />

            {/* Side Bat */}
            <img
              src={kit1}
              alt="bat"
              className="absolute right-0 top-24 w-40 rotate-[22deg] opacity-90"
            />

            {/* Gloves */}
            <img
              src={gloves1}
              alt="gloves"
              className="absolute bottom-6 left-10 w-36"
            />

            {/* Stumps */}
            <img
              src={stumps1}
              alt="stumps"
              className="absolute bottom-0 right-8 w-32"
            />

            {/* Glow */}
            <div className="absolute w-80 h-80 bg-blue-500/20 blur-3xl rounded-full left-1/2 -translate-x-1/2 top-20"></div>
          </div>
        </div>
      </section>

      <TopSellers /> 
      <FeaturedProducts />
      <AboutUs />
      <CustomerReviews />
      <ScrollTopButton />
      <Footer />
    </>
  );
}

export default Home;