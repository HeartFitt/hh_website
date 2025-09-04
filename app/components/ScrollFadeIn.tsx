import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

interface ScrollFadeInProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  delay?: number;
  threshold?: number;
}

const variants = {
  hidden: (direction: string) => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 40 };
      case "down":
        return { opacity: 0, y: -40 };
      case "left":
        return { opacity: 0, x: 40 };
      case "right":
        return { opacity: 0, x: -40 };
      default:
        return { opacity: 0 };
    }
  },
  visible: { opacity: 1, x: 0, y: 0 },
};

export default function ScrollFadeIn({
  children,
  direction = "up",
  duration = 0.4,
  delay = 0,
  threshold = 0.2,
}: ScrollFadeInProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [controls, threshold]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      custom={direction}
      variants={variants}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}
