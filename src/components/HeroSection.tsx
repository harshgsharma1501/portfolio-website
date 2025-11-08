
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  // Animated background particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section ref={ref} className="min-h-screen flex items-center px-4 py-20 relative overflow-hidden">
      {/* Animated Background Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/10 backdrop-blur-sm"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated gradient mesh */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Enhanced corner light effects */}
      <motion.div 
        className="corner-light-premium"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="corner-light-premium" 
        style={{ right: 0, left: 'auto', transform: 'rotate(90deg)' }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          delay: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Animated light rays */}
      <motion.div 
        className="light-ray-premium opacity-30" 
        style={{ top: '10%', left: '-10%', width: '80%', transform: 'rotate(25deg)' }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
          x: [-10, 10, -10],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="light-ray-premium opacity-20" 
        style={{ top: '30%', left: '-5%', width: '60%', transform: 'rotate(15deg)' }}
        animate={{
          opacity: [0.1, 0.3, 0.1],
          x: [-5, 15, -5],
        }}
        transition={{
          duration: 7,
          delay: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="light-ray-premium opacity-10" 
        style={{ top: '60%', left: '-15%', width: '70%', transform: 'rotate(-10deg)' }}
        animate={{
          opacity: [0.05, 0.2, 0.05],
          x: [-15, 5, -15],
        }}
        transition={{
          duration: 9,
          delay: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Enhanced central premium glow effect */}
      <motion.div 
        className="absolute w-[800px] h-[800px] rounded-full bg-radial-glow-premium opacity-60 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Inner glow rings */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)',
          }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
      
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Circular Image Frame - Left Side */}
        <motion.div
          className="relative order-2 md:order-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Outer glow ring */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-white/5"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Image container */}
          <motion.div
            className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-2 border-white/20 backdrop-blur-sm"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Add your image here */}
            <img
              src="/harsh-sharma.jpg"
              alt="Harsh Sharma"
              className="w-full h-full object-cover"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>
          
          {/* Decorative elements */}
          <motion.div
            className="absolute -inset-4 border-2 border-white/10 rounded-full"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        {/* Content - Right Side */}
        <div className="order-1 md:order-2 text-left">
          <motion.h1 
            className="hero-heading relative text-4xl md:text-6xl lg:text-7xl font-extrabold font-display italic mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="absolute -inset-x-10 -inset-y-6 bg-white/5 rounded-3xl blur-3xl -z-10"></span>
            <motion.span 
              className="inline-block"
              initial="hidden"
              animate="visible"
              custom={0}
              variants={textVariants}
            >
              Hi, I'm Harsh Sharma,
            </motion.span>{" "}
            <motion.span 
              className="inline-block hero-text-gradient"
              initial="hidden"
              animate="visible"
              custom={1}
              variants={textVariants}
            >
              turning ideas into powerful digital products.
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl font-light font-body italic text-white/80 mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Building robust solutions with code, design, and caffeine.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <a 
              href="#projects" 
              className="cta-button-premium group inline-flex items-center gap-2"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
