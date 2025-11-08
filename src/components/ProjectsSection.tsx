
import React from 'react';
import { motion } from 'framer-motion';
import GlowCard from './GlowCard';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  url: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Quizzy",
      description: "An AI-powered quiz application that generates quizzes on various topics using OpenAI's API. Users can take quizzes, view their scores, and track their progress over time. The app features a sleek and responsive design built with React and Tailwind CSS.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "OpenAI API"],
      url: "https://quizzy-frontend-yqhp.onrender.com/"
    },
    {
      id: 2,
      title: "Ashley Global Exim",
      description: "A fully responsive company website for Ashley Global Exim, an agricultural export–import enterprise based in Maharashtra. The platform showcases the company’s products, services, and business profile to international clients, enhancing its digital presence and credibility.",
      techStack: ["Vite+React", "EmailJS", "TailwindCSS","Hostinger", "Figma", "Cloudinery" ],
      url: "https://ashleyglobalexim.com"
    },
    {
      id: 3,
      title: "LearnStream",
      description: "A full-stack web application built to provide a responsive and efficient platform for managing and showcasing data or services. It was developed to simplify user interaction, ensure smooth data flow between frontend and backend, and offer reliable online accessibility through Vercel and Render deploymen",
      techStack: ["HTML","Tailwind CSS","React.js","Node.js","Express.js","Mongoose","MongoDB Atlas","Postman","Vercel (Frontend)", "Onrender (Backend)" ],

      url: "#"
    },
    // {
    //   id: 4,
    //   title: "Project 4",
    //   description: "456",
    //   techStack: ["Svelte", "Ruby on Rails", "MySQL"],
    //   url: "#"
    // },
    // {
    //   id: 5,
    //   title: "Project 5",
    //   description: "789",
    //   techStack: ["Next.js", "Spring Boot", "SQLite"],
    //   url: "#"     
    // },
    // {
    //   id : 6,
    //   title: "Project 6",
    //   description: "101",
    //   techStack: ["Golang", "ASP.NET", "Firebase"],
    //   url: "#"
    // }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Premium light effect for top corner */}
      <div className="corner-light-premium top-0 right-0 opacity-50"></div>
      
      {/* Light rays */}
      <div className="light-ray-premium opacity-20" style={{ top: '30%', right: '-20%', width: '70%', transform: 'rotate(165deg)' }}></div>
      <div className="light-ray-premium opacity-15" style={{ top: '60%', right: '-10%', width: '50%', transform: 'rotate(150deg)' }}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className="section-heading-premium relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <GlowCard 
                intensity={index % 3 === 0 ? 'high' : index % 2 === 0 ? 'medium' : 'low'}
                className="group h-full"
                hoverScale={1.03}
              >
                <div className="p-6 h-full flex flex-col relative z-10">
                  {/* Premium highlight effect on hover */}
                  <div className="absolute -inset-x-4 -inset-y-4 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 -z-10 blur-2xl transition-opacity"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-white via-white/20 to-transparent transition-all duration-500"></div>
                  
                  <h3 className="text-2xl font-bold italic mb-3 group-hover:text-white transition-colors">{project.title}</h3>
                  <p className="text-white/70 mb-6 group-hover:text-white/90 transition-colors">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.techStack.map((tech, i) => (
                      <span 
                        key={i} 
                        className="text-xs px-3 py-1 bg-dark-200/50 backdrop-blur-sm border border-white/5 rounded-full text-white/60 group-hover:text-white/90 group-hover:border-white/20 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.url} 
                    className="inline-flex items-center gap-1 text-sm text-white/70 hover:text-white group-hover:text-white/90 transition-colors relative mt-auto"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/30 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
