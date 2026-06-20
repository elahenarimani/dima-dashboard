// import dashboardLogo from "../../public/dashboardLogo.png";
import Image from "next/image";
import dashboardLogo from "../../public/dashboardLogo.png";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={dashboardLogo}
            alt="Dashboard Logo"
            width={40}
            height={40}
          />
          {/* <LayoutDashboard className="w-6 h-6 text-indigo-600" /> */}
          <span className="text-xl font-bold text-slate-800 tracking-tight">
            CoreApp
          </span>
        </div>
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
          <a
            href="#features"
            className="hover:text-indigo-600 transition-colors"
          >
            {" "}
            Features
          </a>
          <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">
            Sign In
          </button>
        </nav>
      </div>
    </header>
  );
}
