import reviewImg from "../assets/images/review.jpg";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const reviews = [
  1, 2, 3, 4
];

function CustomerReviews() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold underline decoration-blue-600">
            Customer Reviews
          </h2>

          <p className="text-gray-500 mt-3 text-lg">
            What our customer say about quality cricket
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {reviews.map((item) => (
            <div
              key={item}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <FaQuoteLeft className="text-blue-600 text-5xl mb-5" />

              <p className="text-gray-700 leading-8 text-sm">
                It's an online shop and we found them accidentally and landed
                up in their office. They have provided excellent service and I
                bought the cricket kit for my son. The quality and the staff
                is excellent. I would refer everyone to buy cricket kit from
                them.
              </p>

              {/* User */}
              <div className="flex items-center gap-3 mt-6">
                <img
                  src={reviewImg}
                  alt="reviewer"
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-semibold">
                    Pranay Shukla
                  </h4>

                  <p className="text-gray-500 text-sm">
                    Cricket Player
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mt-4 text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default CustomerReviews;