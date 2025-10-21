/* eslint-disable no-unused-vars */
import { Protect, useClerk, useUser } from "@clerk/clerk-react";
import {
  Eraser,
  FileText,
  Hash,
  House,
  Image,
  LogOut,
  Scissors,
  SquarePen,
  Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/ai", label: "Dashboard", Icon: House },
  { to: "/ai/write-article", label: "Write Article", Icon: SquarePen },
  { to: "/ai/blog-titles", label: "Blog Titles", Icon: Hash },
  { to: "/ai/generate-images", label: "Generate Images", Icon: Image },
  { to: "/ai/remove-background", label: "Remove Background", Icon: Eraser },
  { to: "/ai/remove-object", label: "Remove Object", Icon: Scissors },
  { to: "/ai/review-resume", label: "Review Resume", Icon: FileText },
  { to: "/ai/community", label: "Community", Icon: Users },
];

export default function Sidebar({ sidebar, setSidebar }) {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();
  console.log(user);
  return (
    <div
      className={`w-60 bg-white dark:bg-gray-900 flex flex-col items-center justify-between text-white border-r border-gray-700 max-sm:absolute top-14 bottom-0
        ${sidebar ? "translate-x-0" : "max-sm:-translate-x-full"}
        transition-all duration-300 ease-in-out
        `}
    >
      <div className="my-7 w-full">
        <img
          src={user.imageUrl}
          alt="User avatar"
          className="w-13 rounded-full mx-auto"
        />
        <p className="mt-1 text-center">{user.fullName}</p>
        <nav className="px-6 mt-5 text-sm text-gray-300 font-medium">
          {navItems.map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/ai"}
              onClick={() => setSidebar(false)}
              className={({ isActive }) =>
                `px-3.5 py-2.5 flex items-center gap-3 rounded ${
                  isActive
                    ? "bg-gradient-to-r from-[#3C81F6] to-[#9234EA] text-white"
                    : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : ""}`} />
                  {label}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="w-full border-t border-gray-700 p-4 px-7 flex items-center justify-between">
        <button
          onClick={openUserProfile}
          className="flex gap-2 items-center cursor-pointer"
        >
          <img
            src={user.imageUrl}
            alt="User avatar"
            className="w-8 rounded-full"
          />
          <div className="text-start">
            <h1 className="text-sm font-medium">{user.fullName}</h1>
            <p className="text-xs text-gray-300">
              <Protect plan="premium" fallback="Free">
                Premium{" "}
              </Protect>
              Plan
            </p>
          </div>
        </button>
        <LogOut
          onClick={signOut}
          className="w-4.5 text-gray-400 hover:text-gray-200 transition cursor-pointer"
        />
      </div>
    </div>
  );
}
