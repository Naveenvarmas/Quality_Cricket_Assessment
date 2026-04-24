import bat1 from "../assets/images/bat1.png";
import gloves1 from "../assets/images/gloves1.png";
import stumps1 from "../assets/images/stumps1.png";
import kit1 from "../assets/images/kit1.png";

const categories = [
  { id: 1, name: "Bats", image: bat1 },
  { id: 2, name: "Gloves", image: gloves1 },
  { id: 3, name: "Stumps", image: stumps1 },
  { id: 4, name: "Kits", image: kit1 },
  { id: 5, name: "Accessories", image: gloves1 },
  { id: 6, name: "Training Gear", image: bat1 },
];

function Categories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-blue-600 uppercase tracking-[5px] text-sm">
            Browse Store
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold mt-3">
            Shop By Category
          </h2>

          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Everything you need for cricket performance and practice.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {categories.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 rounded-2xl p-5 text-center hover:shadow-lg transition group cursor-pointer"
            >
              <div className="h-24 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-full group-hover:scale-110 transition duration-300"
                />
              </div>

              <h3 className="mt-4 font-semibold text-sm sm:text-base">
                {item.name}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Categories;