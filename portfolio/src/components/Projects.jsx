import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { title: 'WellSpent App', award: 'Winner (2) at Hack NC 2023', description: 'Financial advisor app visualizing spending patterns and predicting financial trends.' },
  { title: 'Smart Building', award: 'First Place, GMU Hackathon 2024', description: 'ML & IoT solution to optimize energy, enhance security, and streamline maintenance.' },
  { title: 'Asclepius App', award: 'Runner-up, GMU Hackathon 2024', description: 'Healthcare app leveraging AI for symptom prediction.' },
  { title: 'MediCognize', award: 'Winner, Princeton Hackathon', description: 'AI-driven healthcare diagnostic tool for underrepresented patients.' },
];

export const Projects = () => (
  <section id="projects" className="py-20 bg-gray-100">
    <motion.h2 initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="text-4xl font-bold text-center mb-12">
      Projects
    </motion.h2>
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((proj, i) => (
        <motion.div key={i} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: i * 0.2 }} className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold">{proj.title}</h3>
          <p className="text-indigo-600 italic">{proj.award}</p>
          <p className="mt-4">{proj.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);
