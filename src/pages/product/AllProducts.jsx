import { useState } from "react";
import {
  Link,
  useSearchParams,
} from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import products from "../../pages/data/Products";

/* FILTER SECTION */
function FilterSection({
  title,
  stateKey,
  items,
  open,
  toggle,
  selectedTypes,
  toggleType,
}) {
  return (
    <div className="border-b pb-4">
      <button
        onClick={() => toggle(stateKey)}
        className="w-full flex justify-between items-center py-2 font-semibold uppercase text-[15px]"
      >
        {title}
        <span>{open[stateKey] ? "⌃" : "⌄"}</span>
      </button>

      {open[stateKey] && (
        <div className="space-y-2 pt-2 text-sm text-gray-700">
          {items.map((item) => (
            <label
              key={item}
              className="flex items-center gap-2"
            >
              <input
                type="checkbox"
                className="w-3 h-3"
                checked={
                  title === "Product Type"
                    ? selectedTypes.includes(item)
                    : false
                }
                onChange={() =>
                  title === "Product Type"
                    ? toggleType(item)
                    : null
                }
              />
              {item}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

function AllProducts() {

  const [searchParams] =
  useSearchParams();

const urlCategory =
  searchParams.get("category");

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [selectedTypes, setSelectedTypes] = useState([]);

  const [open, setOpen] = useState({
    collection: false,
    vendor: false,
    type: false,
    stock: false,
    size: false,
  });

  const toggle = (key) => {
    setOpen({
      ...open,
      [key]: !open[key],
    });
  };

  const toggleType = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type)
        ? prev.filter((item) => item !== type)
        : [...prev, type]
    );
  };

 let filteredProducts = [...products];

if (urlCategory === "accessories") {
  filteredProducts =
    products.filter((item) =>
      [
        "Helmet",
        "Gloves",
        "Stumps",
        "Kit",
      ].includes(item.category)
    );
}

if (urlCategory === "bat") {
  filteredProducts =
    products.filter(
      (item) =>
        item.category ===
        "Bat"
    );
}

  /* Search */
  filteredProducts = filteredProducts.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  /* Product Type Filter */
  if (selectedTypes.length > 0) {
    filteredProducts = filteredProducts.filter((item) =>
      selectedTypes.includes(item.category)
    );
  }

  /* Sorting */
  if (sort === "high") {
    filteredProducts.sort(
      (a, b) =>
        Number(b.price) - Number(a.price)
    );
  }

  if (sort === "low") {
    filteredProducts.sort(
      (a, b) =>
        Number(a.price) - Number(b.price)
    );
  }

  return (
    <>
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 py-8">
        {/* HEADER */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-8">
            Featured Products
          </h2>

          {/* Desktop */}
          <div className="hidden lg:block relative h-14">
            <div className="flex justify-center">
              <input
                type="text"
                placeholder="Search Products"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="w-[420px] h-[44px] border border-gray-300 rounded-full px-6 text-sm outline-none"
              />
            </div>

            <div className="absolute top-0 right-0">
              <select
                value={sort}
                onChange={(e) =>
                  setSort(e.target.value)
                }
                className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm outline-none"
              >
                <option value="default">
                  Sort By Price
                </option>
                <option value="high">
                  Price, high to low
                </option>
                <option value="low">
                  Price, low to high
                </option>
              </select>
            </div>
          </div>

          {/* Tablet + Mobile */}
          <div className="lg:hidden flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Search Products"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="flex-1 h-[44px] border border-gray-300 rounded-full px-6 text-sm outline-none"
            />

            <select
              value={sort}
              onChange={(e) =>
                setSort(e.target.value)
              }
              className="md:w-[220px] h-[44px] bg-indigo-600 text-white px-5 rounded-full text-sm outline-none"
            >
              <option value="default">
                Sort By Price
              </option>
              <option value="high">
                Price, high to low
              </option>
              <option value="low">
                Price, low to high
              </option>
            </select>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* SIDEBAR */}
          <aside className="lg:col-span-1 mb-8 lg:mb-0">
            <h3 className="font-semibold text-lg mb-6 uppercase">
              Filters
            </h3>

            <div className="space-y-5">
              <FilterSection
                title="Collection"
                stateKey="collection"
                open={open}
                toggle={toggle}
                items={[
                  "All Products",
                  "Cricket Accessories",
                  "English Willow Bats",
                  "Junior Range",
                ]}
              />

              <FilterSection
                title="Vendor"
                stateKey="vendor"
                open={open}
                toggle={toggle}
                items={["MRF", "SS"]}
              />

              <FilterSection
                title="Product Type"
                stateKey="type"
                open={open}
                toggle={toggle}
                selectedTypes={selectedTypes}
                toggleType={toggleType}
                items={[
                  "Bat",
                  "Helmet",
                  "Gloves",
                  "Stumps",
                  "Kit",
                ]}
              />

              <FilterSection
                title="Availability"
                stateKey="stock"
                open={open}
                toggle={toggle}
                items={[
                  "In Stock",
                  "Out Of Stock",
                ]}
              />

              <FilterSection
                title="Size"
                stateKey="size"
                open={open}
                toggle={toggle}
                items={[
                  "Boys",
                  "Junior",
                  "Senior",
                  "Small",
                  "Large",
                ]}
              />
            </div>
          </aside>

          {/* PRODUCTS */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="text-center group"
                >
                  <div className="h-36 flex items-center justify-center border rounded p-3 bg-white">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full object-contain group-hover:scale-105 transition"
                    />
                  </div>

                  <h3 className="text-[11px] leading-4 mt-3 text-gray-800 min-h-[34px]">
                    {product.name}
                  </h3>

                  <div className="mt-2">
                    <span className="text-blue-600 font-semibold text-sm">
                      ${product.price}
                    </span>

                    <span className="text-gray-400 line-through text-xs ml-2">
                      ${product.oldPrice}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <p className="text-center mt-10 text-gray-500">
                No products found.
              </p>
            )}

            {/* PAGINATION */}
            <div className="flex justify-center gap-4 mt-12 text-sm">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>...</span>
              <span>10</span>
              <span className="font-medium cursor-pointer">
                Next
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AllProducts;