import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

export const Navbar = () => {
  const navItems = ['About', 'Experience', 'Projects', 'Contact'];
  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6 }} className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Arshad Ahmed</div>
        <div className="space-x-8">
          {navItems.map(item => (
            <ScrollLink key={item} to={item.toLowerCase()} smooth duration={500} className="cursor-pointer hover:text-indigo-600">
              {item}
            </ScrollLink>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};