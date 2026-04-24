import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo1.png";
import { House } from "lucide-react";
import {
  LayoutDashboard,
  PlusSquare,
  Package,
  ShoppingBag,
  BarChart3,
  Search,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

function AdminLayout({ title, children }) {
  const [openMenu, setOpenMenu] =
    useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "flex items-center gap-3 bg-indigo-600 text-white px-4 py-3 rounded-lg text-sm font-medium"
      : "flex items-center gap-3 text-gray-600 hover:bg-gray-100 px-4 py-3 rounded-lg text-sm font-medium";

  const SidebarLinks = () => (
    <>
          <NavLink
            to="/"
            className={linkClass}
            onClick={() => setOpenMenu(false)}
           >
               <House size={18} />
               Home Website
          </NavLink>
      <NavLink
        to="/admin/dashboard"
        className={linkClass}
        onClick={() =>
          setOpenMenu(false)
        }
      >
        <LayoutDashboard size={18} />
        Dashboard
      </NavLink>

      <NavLink
        to="/admin/add-products"
        className={linkClass}
        onClick={() =>
          setOpenMenu(false)
        }
      >
        <PlusSquare size={18} />
        Add Products
      </NavLink>

      <NavLink
        to="/admin/products"
        className={linkClass}
        onClick={() =>
          setOpenMenu(false)
        }
      >
        <Package size={18} />
        All Products
      </NavLink>

      <NavLink
        to="/admin/orders"
        className={linkClass}
        onClick={() =>
          setOpenMenu(false)
        }
      >
        <ShoppingBag size={18} />
        Orders
      </NavLink>

      <NavLink
        to="/admin/reports"
        className={linkClass}
        onClick={() =>
          setOpenMenu(false)
        }
      >
        <BarChart3 size={18} />
        Reports
      </NavLink>
    </>
  );

  return (
    <section className="min-h-screen bg-gray-100 flex">
      {/* Desktop Sidebar */}
      <aside className="w-72 bg-white border-r hidden md:flex md:flex-col">
        <div className="px-6 py-6 border-b">
          <img
            src={logo}
            alt="logo"
            className="h-12 object-contain"
          />
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          <SidebarLinks />
        </nav>
      </aside>

      {/* Mobile Drawer */}
      {openMenu && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() =>
              setOpenMenu(false)
            }
          ></div>

          {/* Drawer */}
          <aside className="absolute left-0 top-0 h-full w-72 bg-white shadow-xl flex flex-col">
            <div className="px-5 py-5 border-b flex items-center justify-between">
              <img
                src={logo}
                alt="logo"
                className="h-10 object-contain"
              />

              <button
                onClick={() =>
                  setOpenMenu(false)
                }
              >
                <X size={22} />
              </button>
            </div>

            <nav className="flex-1 px-4 py-5 space-y-2 overflow-y-auto">
              <SidebarLinks />
            </nav>
          </aside>
        </div>
      )}

      {/* Right Side */}
      <div className="flex-1 min-w-0">
        {/* Topbar */}
        <header className="bg-white border-b px-4 md:px-8 py-4 flex items-center justify-between gap-4">
          {/* Left */}
          <div className="flex items-center gap-3">
            {/* Mobile Menu Button */}
            <button
              onClick={() =>
                setOpenMenu(true)
              }
              className="md:hidden w-10 h-10 border rounded-lg flex items-center justify-center"
            >
              <Menu size={20} />
            </button>

            <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
              {title}
            </h1>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="border rounded-lg pl-10 pr-4 py-2 w-56 md:w-64 outline-none"
              />

              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>

            {/* User */}
            <button className="flex items-center gap-2 border rounded-lg px-3 py-2 bg-white">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-semibold">
                P
              </div>

              <span className="hidden sm:block text-sm font-medium">
                Pranay
              </span>

              <ChevronDown size={16} />
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="p-4 md:p-8">
          {children}
        </main>
      </div>
    </section>
  );
}

export default AdminLayout;