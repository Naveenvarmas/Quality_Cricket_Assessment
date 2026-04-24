import Navbar from "../components/Navbar";
import stadium from "../assets/images/stadium.png";

function AuthLayout({ children }) {
  return (
    <>
      <Navbar />

      <section
        className="min-h-screen bg-cover bg-center relative flex items-center justify-center px-4 py-10"
        style={{ backgroundImage: `url(${stadium})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/35"></div>

        {/* Card */}
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-[420px] p-8 sm:p-10">
          {children}
        </div>
      </section>
    </>
  );
}

export default AuthLayout;