import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => (
  <section id="hero" className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
    <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="text-5xl font-bold mb-4">
      Hi, I'm Arshad.
    </motion.h1>
    <motion.p initial={{ y: 50 }} animate={{ y: 0 }} transition={{ delay: 0.5, duration: 1 }} className="text-xl max-w-xl text-center">
      I'm a Computer Science student at George Mason University specializing in AI, ML, and Full-Stack Development.
    </motion.p>
  </section>
);