import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Software Development Engineer (Research)',
    company: 'GCP AI, George Mason University',
    date: 'Aug 2024 – Present',
    details: [
      'Part of insightLegi research project working on legal systems and policy lab.',
      'Trained Generative AI models using GCP Vertex AI and NLP toolkits.',
      'Hosted a 75 person Datathon and achieved 94% vertex accuracy.'
    ],
  },
];
export const Experience = () => (
    <section id="experience" className="py-20 container mx-auto px-6">
      <motion.h2 initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="text-4xl font-bold mb-8">
        Experience
      </motion.h2>
      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.3 }} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">{exp.role}</h3>
            <p className="text-indigo-600">{exp.company} | {exp.date}</p>
            <ul className="list-disc ml-5 mt-2">
              {exp.details.map((det, j) => <li key={j}>{det}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );