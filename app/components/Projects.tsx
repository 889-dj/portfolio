"use client";
import { GithubLogo,Link} from '@phosphor-icons/react';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Comfy Sloth',
    image: 'images/image.png',
    timeline: '2023',
    technologies: ['React', 'Axios','React Query','Auth0','Stripe'],
    github: 'https://github.com/889-dj/',
    live: 'https://cumfysloth.netlify.app',
  },
  {
    name: 'Comfy Sloth',
    image: 'images/image.png',
    timeline: '2023',
    technologies: ['React', 'Axios','React Query','Auth0','Stripe'],
    github: 'https://github.com/889-dj/',
    live: 'https://cumfysloth.netlify.app',
  },
  {
    name: 'Comfy Sloth',
    image: 'images/image.png',
    timeline: '2023',
    technologies: ['React', 'Axios','React Query','Auth0','Stripe'],
    github: 'https://github.com/889-dj/',
    live: 'https://cumfysloth.netlify.app',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl mb-8">Projects</h2>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="card outline p-6"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <img src={project.image} alt={project.name} />
              <h3 className="text-xl mt-4">{project.name}</h3>
              <p className="text-gray-500">{project.timeline}</p>
              <div className="mt-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tag rounded-lg bg-slate-200 p-1 ml-1">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex mt-4">
                <a href={project.github} className="mr-4">
                  <GithubLogo size={24} weight='bold'/>
                </a>
                <a href={project.live}>
                  <Link size={24} weight="bold"/>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
