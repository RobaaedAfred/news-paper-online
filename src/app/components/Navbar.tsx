
import Image from "next/image";
import Navbarlink from "./Navbarlink";

const Navbar = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <nav className="border-b bg-white">
      <div className="relative mx-auto flex min-h-32 max-w-7xl items-center justify-center px-4 py-4">

        {/* Center Content */}
        <div className="flex flex-col items-center">

          {/* Logo + Name + Date */}
          <div className="flex items-center gap-3">
            <Image
              className="h-10 w-10 object-contain"
              src="/logo.webp"
              height={40}
              width={40}
              alt="Bangla News 24 logo"
            />

            <div className="flex flex-col">
              <span className="text-xl font-bold">
                Bangla News 24
              </span>

              <span className="text-sm text-gray-500">
                {date}
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <Navbarlink />
        </div>

        {/* Right: Authentication Buttons */}
        <div className="absolute right-4 flex items-center gap-3">
          <button className="rounded-md border border-gray-300 px-4 py-2 text-sm hover:bg-gray-100">
            সাইন ইন
          </button>

          <button className="rounded-md bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700">
            সাইন আপ
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

