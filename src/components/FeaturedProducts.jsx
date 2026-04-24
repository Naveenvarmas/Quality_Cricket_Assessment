import { useState } from "react";
import { NavLink } from "react-router-dom";

import bat1 from "../assets/images/bat1.png";
import bat2 from "../assets/images/bat2.png";
import bat3 from "../assets/images/bat3.png";
import helmet from "../assets/images/helmet.png";
import gloves1 from "../assets/images/gloves1.png";
import gloves2 from "../assets/images/gloves2.png";
import stumps1 from "../assets/images/stumps1.png";
import kit1 from "../assets/images/kit1.png";

function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "MRF Genius Grand Edition Bat",
      price: 120,
      oldPrice: 160,
      image: bat1,
      category: "bat",
      brand: "mrf",
    },
    {
      id: 2,
      name: "SS TON Range Maximus Bat",
      price: 100,
      oldPrice: 190,
      image: bat2,
      category: "bat",
      brand: "ss",
    },
    {
      id: 3,
      name: "SS Summer Duffle Cricket Kit",
      price: 410,
      oldPrice: 600,
      image: bat3,
      category: "bat",
      brand: "ss",
    },
    {
      id: 4,
      name: "SS TON Range TON Maximus",
      price: 100,
      oldPrice: 160,
      image: gloves1,
      category: "accessories",
      brand: "ss",
    },
    {
      id: 5,
      name: "SS Cricket Helmet",
      price: 210,
      oldPrice: 280,
      image: helmet,
      category: "accessories",
      brand: "ss",
    },
    {
      id: 6,
      name: "Spring Loaded Stumps",
      price: 80,
      oldPrice: 100,
      image: stumps1,
      category: "accessories",
      brand: "mrf",
    },
    {
      id: 7,
      name: "SS Batting Gloves",
      price: 140,
      oldPrice: 200,
      image: gloves2,
      category: "accessories",
      brand: "ss",
    },
    {
      id: 8,
      name: "Premium Kit Bag",
      price: 230,
      oldPrice: 320,
      image: kit1,
      category: "accessories",
      brand: "mrf",
    },
  ];

  const [active, setActive] =
    useState("all");

  const tabs = [
    {
      label: "All Products",
      value: "all",
    },
    {
      label: "Cricket Bats",
      value: "bat",
    },
    {
      label: "Accessories",
      value:
        "accessories",
    },
    {
      label: "MRF",
      value: "mrf",
    },
    {
      label: "SS TON",
      value: "ss",
    },
  ];

  const filtered =
    active === "all"
      ? products
      : products.filter(
          (item) =>
            item.category ===
              active ||
            item.brand ===
              active
        );

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          Featured Products
        </h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() =>
                setActive(
                  tab.value
                )
              }
              className={`px-5 py-2 rounded-full text-sm border transition ${
                active ===
                tab.value
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white text-gray-700 hover:border-indigo-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filtered.map(
            (item) => (
              <NavLink
                to="/products"
                key={item.id}
                className="group"
              >
                <div className="border rounded-xl p-4 hover:shadow-lg transition bg-white h-full">
                  <div className="h-36 flex items-center justify-center">
                    <img
                      src={
                        item.image
                      }
                      alt={
                        item.name
                      }
                      className="max-h-full group-hover:scale-105 transition"
                    />
                  </div>

                  <h3 className="text-sm mt-4 leading-5 min-h-[40px]">
                    {item.name}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-sm">
                    <span className="text-indigo-600 font-bold">
                      $
                      {
                        item.price
                      }
                    </span>

                    <span className="text-gray-400 line-through">
                      $
                      {
                        item.oldPrice
                      }
                    </span>
                  </div>
                </div>
              </NavLink>
            )
          )}
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <NavLink
            to="/products"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-3 rounded-full"
          >
            View All
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;