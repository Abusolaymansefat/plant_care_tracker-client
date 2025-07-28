import Container from "../Container";
import { AiOutlineMenu } from "react-icons/ai";
import { FiSun, FiMoon } from "react-icons/fi";
import { useState } from "react";
import { NavLink } from "react-router";
import useAuth from "../../../hooks/useAuth";
import avatarImg from "../../../assets/images/placeholder.jpg";
import logo from "../../../assets/images/logo-flat.png";
import { useTheme } from "../../../context/ThemeContext";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, setDarkMode } = useTheme();

  return (
    <div className="fixed w-full z-10 shadow-sm bg-white dark:bg-gray-900 transition">
      <div className="py-4 border-b-[1px] border-gray-200 dark:border-gray-700">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            {/* Logo */}
            <NavLink to="/">
              <img src={logo} alt="logo" width="100" height="100" />
            </NavLink>

            <div className="flex items-center gap-4">
              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition"
              >
                {darkMode ? (
                  <FiSun className="text-yellow-400 text-xl" />
                ) : (
                  <FiMoon className="text-gray-800 dark:text-gray-200 text-xl" />
                )}
              </button>

              {/* Dropdown Menu */}
              <div className="relative">
                <div className="flex flex-row items-center gap-3">
                  <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 dark:border-gray-600 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                  >
                    <AiOutlineMenu className="dark:text-white" />
                    <div className="hidden md:block">
                      <img
                        className="rounded-full"
                        referrerPolicy="no-referrer"
                        src={user && user.photoURL ? user.photoURL : avatarImg}
                        alt="profile"
                        height="30"
                        width="30"
                      />
                    </div>
                  </div>
                </div>

                {isOpen && (
                  <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] overflow-hidden right-0 top-12 text-sm bg-white dark:bg-gray-800 text-black dark:text-white">
                    <div className="flex flex-col cursor-pointer">
                      <NavLink
                        to="/"
                        className="px-4 py-3 hover:bg-neutral-100 dark:hover:bg-gray-700 transition font-semibold"
                      >
                        Home
                      </NavLink>
                      {user ? (
                        <>
                          <NavLink
                            to="/dashboard"
                            className="px-4 py-3 hover:bg-neutral-100 dark:hover:bg-gray-700 transition font-semibold"
                          >
                            Dashboard
                          </NavLink>
                          <div
                            onClick={logOut}
                            className="px-4 py-3 hover:bg-neutral-100 dark:hover:bg-gray-700 transition font-semibold cursor-pointer"
                          >
                            Logout
                          </div>
                        </>
                      ) : (
                        <>
                          <NavLink
                            to="/login"
                            className="px-4 py-3 hover:bg-neutral-100 dark:hover:bg-gray-700 transition font-semibold"
                          >
                            Login
                          </NavLink>
                          <NavLink
                            to="/signup"
                            className="px-4 py-3 hover:bg-neutral-100 dark:hover:bg-gray-700 transition font-semibold"
                          >
                            Sign Up
                          </NavLink>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
