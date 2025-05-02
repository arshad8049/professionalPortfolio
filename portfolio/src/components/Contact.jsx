import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    alert('Thank you for reaching out!');
  };

  return (
    <section id="contact" className="py-20 container mx-auto px-6 bg-white">
      <motion.h2 initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.6 }} className="text-4xl font-bold mb-6">
        Contact
      </motion.h2>
      <motion.form onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="max-w-lg mx-auto space-y-4">
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400" required />
        <input type="email" name="email" placeholder="Your Email" onChange={handleChange} className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400" required />
        <textarea name="message" placeholder="Your Message" onChange={handleChange} rows="5" className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400" required />
        <button type="submit" className="w-full bg-indigo-500 text-white py-3 rounded-md font-semibold hover:bg-indigo-600 transition">Send Message</button>
      </motion.form>
    </section>
  )
};