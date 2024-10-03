"use client";
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto text-center">
        <motion.img
          src="/images/devimg.jpg"
          alt="Profile"
          className="rounded-full w-32 mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.p
          className="text-lg mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Hey, I’m Dev Jain, a passionate Full Stack Developer who loves building meaningful applications. Here’s what I can offer...
        </motion.p>
        <div className="mt-6">
          <motion.a href="https://github.com" className="mx-4">
            <GithubLogo weight='bold' size={24}/>
          </motion.a>
          <motion.a href="https://linkedin.com" className="mx-4">
            <LinkedinLogo weight='bold' size={24}/>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default About;
