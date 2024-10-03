"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to send email via EmailJS or any other API service
    console.log('Form submitted', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border rounded-md shadow-sm"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border rounded-md shadow-sm"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="mt-1 p-2 block w-full border rounded-md shadow-sm"
          ></textarea>
        </div>

        <motion.button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
      </form>

      {/* Social Links */}
      <div className="mt-8 text-center">
        <p className="mb-4">Connect with me:</p>
        <div className="space-x-4">
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
            <GithubLogo weight="bold" className="inline w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
            <LinkedinLogo size={32} weight="bold" className="inline w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
