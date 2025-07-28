import { NavLink } from "react-router";
import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../../../assets/images/logo-flat.png";

const Footer = () => {
  return (
    <footer className="bg-[#3A3952] text-[#faf6f6] py-10">
      <div className="container mx-auto flex flex-col items-center gap-8 px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-12">
          
          {/* Logo + Contact */}
          <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left">
            <NavLink to="/">
              <img src={logo} alt="logo" width="100" height="100" />
            </NavLink>

            <div className="space-y-2">
              <p className="flex items-center gap-2 justify-center md:justify-start">
                <FaEnvelope className="text-primary" /> 
                <a href="mailto:sefat01625@gmail.com" className="link link-hover">
                  sefat01625@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2 justify-center md:justify-start">
                <FaPhone className="text-primary" /> 
                <a href="tel:+880162519069" className="link link-hover">
                  +880162519069
                </a>
              </p>
              <p className="flex items-center gap-2 justify-center md:justify-start">
                <FaMapMarkerAlt className="text-primary" /> Dhaka, Bangladesh
              </p>
            </div>
          </div>

          {/* Nav Links (column view) */}
          <nav className="flex flex-col gap-3 text-center md:text-left font-medium">
            <h2>Useful Links</h2>
            <NavLink to="/about" className="link link-hover">About Us</NavLink>
            <NavLink to="/contact" className="link link-hover">Contact</NavLink>
            <NavLink to="/jobs" className="link link-hover">Jobs</NavLink>
            <NavLink to="/press" className="link link-hover">Press Kit</NavLink>
          </nav>

          {/* Social Links */}
          <div className="flex flex-col items-center gap-4">
            <h2 className="font-semibold">Follow Us</h2>
            <nav className="flex gap-6 text-2xl">
              <a
                href="https://www.facebook.com/abusolaymun.sefat/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/in/abu-solayman-sefat-b90922214/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Abusolaymansefat"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-800"
              >
                <FaGithub />
              </a>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <aside className="text-center pt-6 w-full border-t mt-6">
          <p>
            © {new Date().getFullYear()} - All rights reserved by{" "}
            <span className="font-semibold">Plant Care Tracker</span>
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
