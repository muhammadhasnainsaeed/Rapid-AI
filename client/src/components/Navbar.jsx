import { assets } from "../assets/assets";
import { NavLink } from "react-router";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-2 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <NavLink to={"/"} className="-m-4" end>
              <img src={assets.logo} alt="" className="h-24 w-auto" />
            </NavLink>
          </div>
          <div className="flex flex-1 justify-end">
            {user ? (
              <UserButton />
            ) : (
              <button
                onClick={openSignIn}
                className="text-sm/6 font-semibold text-gray-900 dark:text-white"
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </button>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
