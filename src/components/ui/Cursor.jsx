import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";

export default function Cursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-blue-600 dark:bg-cyan-400 pointer-events-none z-[9999] shadow-[0_0_15px_rgba(34,211,238,0.5)]"
      />
      
      {/* Outer Glow Ring */}
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-blue-600/30 dark:border-cyan-400/30 pointer-events-none z-[9999]"
      />

      {/* Trailing Background Glow (Large) */}
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-500/5 dark:bg-cyan-500/5 blur-[100px] pointer-events-none z-[-1]"
      />
    </>
  );
}
