"use client";

import { motion, type MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import type React from "react";

export function Reveal({
  children,
  className,
  ...props
}: MotionProps & { className?: string; children: React.ReactNode }) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

