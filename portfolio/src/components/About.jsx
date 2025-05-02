import React from 'react';
import { motion } from 'framer-motion';

export const About = () => (
  <section id="about" className="py-20 container mx-auto px-6">
    <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="text-4xl font-bold mb-6">
      About Me
    </motion.h2>
    <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="text-lg leading-relaxed">
      I'm currently pursuing a B.S. in Computer Science at George Mason University with a GPA of 3.7, expected graduation May 2026. I have strong foundations in Data Structures & Algorithms, Software Engineering, and Cloud Computing.
    </motion.p>
  </section>
);