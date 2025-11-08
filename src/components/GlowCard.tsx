
import React from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  hoverScale?: number;
  delayIndex?: number;
  intensity?: 'low' | 'medium' | 'high';
}

const GlowCard: React.FC<GlowCardProps> = ({ 
  children, 
  className = '', 
  hoverScale = 1.02,
  delayIndex = 0,
  intensity = 'medium'
}) => {
  const controls = useAnimation();
  
  // Define glow intensity levels with enhanced effects
  const glowIntensity = {
    low: {
      initial: "0 0 10px rgba(255, 255, 255, 0.12), 0 0 20px rgba(255, 255, 255, 0.08)",
      hover: "0 0 25px rgba(255, 255, 255, 0.2), 0 0 50px rgba(255, 255, 255, 0.15)"
    },
    medium: {
      initial: "0 0 15px rgba(255, 255, 255, 0.15), 0 0 25px rgba(255, 255, 255, 0.1)",
      hover: "0 0 35px rgba(255, 255, 255, 0.25), 0 0 60px rgba(255, 255, 255, 0.15)"
    },
    high: {
      initial: "0 0 20px rgba(255, 255, 255, 0.2), 0 0 30px rgba(255, 255, 255, 0.12)",
      hover: "0 0 45px rgba(255, 255, 255, 0.3), 0 0 70px rgba(255, 255, 255, 0.2)"
    }
  };

  // Enhanced animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      rotate: -2,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: delayIndex * 0.1,
        ease: [0.215, 0.61, 0.355, 1], // Custom easing
      }
    },
    hover: { 
      scale: hoverScale,
      rotate: 1,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: { 
      scale: 0.98,
      rotate: 0,
      transition: {
        duration: 0.1
      }
    }
  };

  const glowVariants = {
    initial: {
      opacity: 0,
      scale: 0.8
    },
    hover: {
      opacity: [0.5, 0.4, 0.5], // Subtle pulse
      scale: 1.2,
      transition: {
        opacity: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        },
        scale: {
          duration: 0.3
        }
      }
    }
  };

  return (
    <motion.div
      className={`glow-card ${className}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      whileTap="tap"
      viewport={{ once: true }}
      onHoverStart={() => {
        controls.start("hover");
      }}
      onHoverEnd={() => {
        controls.start("initial");
      }}
      style={{
        boxShadow: glowIntensity[intensity].initial,
        position: 'relative'
      }}
    >
      <motion.div 
        className="relative z-10 h-full backdrop-blur-sm"
        animate={{
          y: [-1, 1, -1],
          transition: {
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }
        }}
      >
        {children}
      </motion.div>

      {/* Enhanced hover effects */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"
        variants={glowVariants}
        initial="initial"
        animate={controls}
      />

      {/* Animated border gradient */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)'
        }}
        animate={{
          backgroundPosition: ['200% 0', '-200% 0'],
          transition: {
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      />

      {/* Corner accent */}
      <motion.div
        className="absolute top-0 right-0 w-8 h-8"
        style={{
          background: 'linear-gradient(135deg, transparent 50%, rgba(255,255,255,0.1))'
        }}
        whileHover={{
          opacity: [0.3, 0.6, 0.3],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      />
    </motion.div>
  );
};

export default GlowCard;
