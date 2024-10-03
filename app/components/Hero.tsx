"use client";
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { DownloadSimple } from '@phosphor-icons/react';
import useDownloader from 'react-use-downloader'

const Hero = () => {
  const {download} = useDownloader();
  const fileUrl = '/docs/dev-sde.pdf'
  const fileName = 'mycv.pdf'
  return (
    <section id="hero" className="min-h-screen flex items-center justify-between">
      <div className="w-full lg:flex lg:items-center lg:justify-between">
        {/* Text Section - Takes up 50% of the width on large screens */}
        <div className="w-full lg:w-1/2 lg:text-left p-8">
          <motion.h1
            className="text-4xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Hola there! I'm Dev Jain
          </motion.h1>
          <h2 className="text-2xl mt-4">
            I'm a{' '}
            <Typewriter
              words={['Full Stack Developer', 'Software Developer', 'Open Source Contributor']}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          
          {/* Buttons Section */}
          <div className="mt-8 flex space-x-4">
            <motion.a
              href="#contact"
              className="px-6 py-3 bg-blue-500 text-white rounded-full text-lg shadow-lg hover:bg-blue-600 transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Contact Me
            </motion.a>

            <motion.button
              className="px-6 py-3 bg-gray-500 text-white rounded-full text-lg shadow-lg hover:bg-gray-600 transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={()=>download(fileUrl,fileName)}
            >
              <span><DownloadSimple size={24} weight="bold" className='inline'/></span> Resume
            </motion.button>
          </div>
        </div>

        {/* Illustration Section - Takes up 50% of the width and full height of the section */}
        <motion.div
          className="hidden lg:block w-full lg:w-1/2 h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/avatarimg.png"
            alt="Hero illustration"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
