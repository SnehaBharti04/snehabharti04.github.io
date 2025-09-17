import { motion } from "framer-motion";

const MorphingBlob = () => {
  return (
    <div className="absolute inset-0 z-[-1] overflow-hidden">
      <motion.div
        className="absolute w-96 h-96 opacity-30"
        style={{
          background: "linear-gradient(45deg, #1b692c, #404771)",
          borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
          filter: "blur(40px)",
        }}
        animate={{
          borderRadius: [
            "30% 70% 70% 30% / 30% 30% 70% 70%",
            "70% 30% 30% 70% / 70% 70% 30% 30%",
            "50% 50% 50% 50% / 50% 50% 50% 50%",
            "30% 70% 70% 30% / 30% 30% 70% 70%"
          ],
          x: [-100, 100, -50, -100],
          y: [-50, 50, 100, -50],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute w-72 h-72 opacity-20 right-0 bottom-0"
        style={{
          background: "linear-gradient(135deg, #404771, #94a3b8)",
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          filter: "blur(50px)",
        }}
        animate={{
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "40% 60% 70% 30% / 40% 70% 30% 60%",
            "30% 70% 40% 60% / 30% 40% 60% 70%",
            "60% 40% 30% 70% / 60% 30% 70% 40%"
          ],
          x: [50, -50, 0, 50],
          y: [0, -100, 50, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </div>
  );
};

export default MorphingBlob;