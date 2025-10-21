import { NavLink, Outlet } from "react-router-dom";
import { assets } from "../assets/assets";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useUser, SignIn } from "@clerk/clerk-react";

export default function Layout() {
  const { user } = useUser();
  const [sidebarOpen, isSidebarOpen] = useState(false);
  return user ? (
    <div className="h-screen bg-white dark:bg-gray-900">
      <nav className="flex items-center justify-between w-full border-b border-gray-700 ">
        <NavLink to={"/"} className="px-4 py-2" end>
          <img src={assets.logo} alt="logo" className="h-auto -mt-2 w-32" />
        </NavLink>
        <button
          onClick={() => isSidebarOpen(!sidebarOpen)}
          className="px-4 py-2 sm:hidden"
        >
          {sidebarOpen ? <X color="#fff" /> : <Menu color="#fff" />}
        </button>
      </nav>
      <aside className="flex-1 w-full flex h-[calc(100vh-64px)]">
        <Sidebar sidebar={sidebarOpen} setSidebar={isSidebarOpen} />
        <div className="flex-1 bg-gray-800">
          <Outlet />
        </div>
      </aside>
    </div>
  ) : (
    <div className="flex items-center justify-center h-screen">
      <SignIn />
    </div>
  );
}
