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
Hey there! 👋 I'm Dev!<br/>

🚀 Full Stack Dev | 🛠️ DevOps Ninja | 🤖 Aspiring AI Engineer<br/><br/>

When I'm not busy coding or dreaming up the next big thing in AI, you can probably find me optimizing systems like they're a Rubik's cube 🧩—and yeah, I never get tired of solving them!<br/>

💡 Fun Fact: I write code like I make coffee—strong, efficient, and guaranteed to keep things running smoothly! ☕💻<br/>

🌍 I build scalable things and make sure they don’t break, kinda like a digital superhero—except my cape is a hoodie! 🦸‍♂️👾<br/>

And in my free time? Well, I'm probably experimenting with new tech—because "debugging" is my cardio. 🏃‍♂️💨
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
