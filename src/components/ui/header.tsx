"use client";

import { motion } from "framer-motion";
import { NavButton } from "../buttons";

const Header: React.FC = () => {
  return (
    <header className="h-20 bg-caption p-6 fixed w-full top-0 z-50 backdrop-blur-md bg-opacity-95">
      <nav className="h-full flex justify-between items-center max-w-7xl mx-auto">
        <motion.div
          className="flex grow"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* <span className="text-2xl font-bold text-foreground">The codeai</span> */}
        </motion.div>
        <motion.div
          className="flex grow gap-6 justify-end"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <NavButton scrollTo="hero">About Us</NavButton>
          <NavButton scrollTo="features">Services</NavButton>
          <NavButton scrollTo="contact-us" primary>
            Contact
          </NavButton>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;
