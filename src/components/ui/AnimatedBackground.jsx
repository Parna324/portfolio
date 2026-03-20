import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#030712]">
      
      {/* INTERACTIVE MOUSE GLOW */}
      <motion.div
        className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[100px] mix-blend-screen"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 1.5 }}
      />
      <motion.div
        className="absolute top-0 left-0 w-[200px] h-[200px] rounded-full bg-cyan-400/10 blur-[80px] mix-blend-screen"
        animate={{
          x: mousePosition.x - 100,
          y: mousePosition.y - 100,
        }}
        transition={{ type: "tween", ease: "circOut", duration: 0.5 }}
      />

      {/* DRIFTING BACKGROUND ORBS */}
      <motion.div
        animate={{
          x: [0, 100, 0, -100, 0],
          y: [0, -100, 100, 0, 0],
          scale: [1, 1.2, 0.8, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -150, 100, 0],
          y: [0, 100, -150, 0],
          scale: [1, 1.3, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] rounded-full bg-indigo-600/5 blur-[150px]"
      />
      <motion.div
        animate={{
          x: [-100, 100, 0, -100],
          y: [100, -50, 100, 100],
          scale: [0.8, 1.2, 1, 0.8],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[40%] left-[60%] w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[100px]"
      />

      {/* MATRIX / GRID OVERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-20" />
    </div>
  );
}
