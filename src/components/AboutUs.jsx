import aboutImg from "../assets/images/about.jpg";

function AboutUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">
            About Us
          </h2>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Image */}
          <div>
            <img
              src={aboutImg}
              alt="About Quality Cricket"
              className="w-full max-w-md mx-auto rounded-xl shadow-sm"
            />
          </div>

          {/* Right Text */}
          <div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">
                Select your Bat from our collection of 100’s of actual pictures with weights.
              </h3>

              <p className="text-gray-600 leading-7">
                Every bat that arrives is carefully catalogued and listed with
                real photos and accurate details so customers know exactly what
                they are purchasing.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">
                Who Are We?
              </h3>

              <p className="text-gray-600 leading-7">
                We are trusted suppliers of premium cricket equipment, offering
                safe shopping, authentic products and fast delivery.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Why you should buy from us?
              </h3>

              <p className="text-gray-600 leading-7">
                Genuine products, competitive prices, customer support and a
                smooth online buying experience for every cricket player.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;