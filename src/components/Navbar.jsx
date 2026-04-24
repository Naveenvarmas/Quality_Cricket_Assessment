import { useState } from "react";
import { NavLink,useLocation } from "react-router-dom";
import logo from "../assets/images/logo1.png";
import userImg from "../assets/images/review.jpg";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import {
  Bell,
  ShoppingCart,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

function Navbar() {

  const navigate =
  useNavigate();

const location =
  useLocation();

  const { cart } = useCart();

  const [mobileMenu, setMobileMenu] =
    useState(false);

  const [userMenu, setUserMenu] =
    useState(false);

    const handleLogout = () => {
  localStorage.removeItem(
    "user"
  );

  setUserMenu(false);

  navigate("/login");
};

  const navClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
      : "text-gray-700 hover:text-blue-600";

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/">
          <img
            src={logo}
            alt="logo"
            className="h-12 object-contain"
          />
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <NavLink
            to="/"
            className={navClass}
          >
            Home
          </NavLink>

          <NavLink
              to="/products"
              className={`${
              location.pathname ===
              "/products" &&
               !location.search
                       ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                       : "text-gray-700 hover:text-blue-600"
              }`}
              >
               All Products
         </NavLink>

          <NavLink
            to="/products?category=accessories"
            className={`${
                        location.pathname ===
                                    "/products" &&
                        location.search.includes(
                                    "category=accessories"
                        )
                                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                                    : "text-gray-700 hover:text-blue-600"
            }`}
            >
              Accessories
      </NavLink>

          <NavLink
            to="/contact"
            className={navClass}
          >
            Contact Us
          </NavLink>

          <NavLink
            to="/faq"
            className={navClass}
          >
            FAQ’s
          </NavLink>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Bell */}
          <div className="relative hidden sm:block">
            <Bell size={20} />

            <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              12
            </span>
          </div>

          {/* Cart */}
          <NavLink
            to="/cart"
            className="relative"
          >
            <ShoppingCart size={20} />

            <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              {cart.length}
            </span>
          </NavLink>

          {/* User Dropdown */}
          <div className="relative hidden sm:block">
            <button
              onClick={() =>
                setUserMenu(
                  !userMenu
                )
              }
              className="flex items-center gap-2"
            >
              <img
                src={userImg}
                alt="user"
                className="w-9 h-9 rounded-full object-cover"
              />

              <span className="text-sm">
                Pranay
              </span>

              <ChevronDown size={16} />
            </button>

            {userMenu && (
              <div className="absolute right-0 top-12 w-52 bg-white border rounded-xl shadow-lg p-2 z-50">
                <NavLink
                  to="/account"
                  className="block px-4 py-2 rounded hover:bg-gray-100"
                  onClick={() =>
                    setUserMenu(
                      false
                    )
                  }
                >
                  My Account
                </NavLink>

                <NavLink
                  to="/orders"
                  className="block px-4 py-2 rounded hover:bg-gray-100"
                  onClick={() =>
                    setUserMenu(
                      false
                    )
                  }
                >
                  My Orders
                </NavLink>

                <NavLink
                  to="/admin/dashboard"
                  className="block px-4 py-2 rounded hover:bg-gray-100 text-indigo-600 font-medium"
                  onClick={() =>
                    setUserMenu(
                      false
                    )
                  }
                >
                  Admin Panel
                </NavLink>

                <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 rounded hover:bg-gray-100 text-red-500"
                 >
                  Logout
              </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() =>
              setMobileMenu(
                !mobileMenu
              )
            }
            className="md:hidden"
          >
            {mobileMenu ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden border-t bg-white px-4 py-4 space-y-4 text-sm font-medium">
          <NavLink
            to="/"
            className="block"
            onClick={() =>
              setMobileMenu(
                false
              )
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className="block"
            onClick={() =>
              setMobileMenu(
                false
              )
            }
          >
            All Products
          </NavLink>

          <NavLink
            to="/products?category=accessories"
            className="block"
            onClick={() =>
              setMobileMenu(
                false
              )
            }
          >
            Accessories
          </NavLink>

          <NavLink
            to="/orders"
            className="block"
            onClick={() =>
              setMobileMenu(
                false
              )
            }
          >
            Orders
          </NavLink>

          <NavLink
            to="/admin/dashboard"
            className="block text-indigo-600"
            onClick={() =>
              setMobileMenu(
                false
              )
            }
          >
            Admin Panel
          </NavLink>
        </div>
      )}
    </header>
  );
}

export default Navbar;