"use client";

import { motion } from "framer-motion";

export function AnimatedCircuit() {
  return (
    <svg
      className="absolute inset-0 -z-10 h-full w-full opacity-55"
      viewBox="0 0 1200 800"
      role="img"
      aria-label="Animated circuit trace background"
    >
      <motion.path
        d="M70 620 H260 V500 H430 V330 H680 V220 H1020"
        fill="none"
        stroke="#f59e0b"
        strokeWidth="2"
        strokeDasharray="12 12"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.path
        d="M120 190 H310 V280 H520 V470 H820 V610 H1120"
        fill="none"
        stroke="#22c55e"
        strokeWidth="2"
        strokeDasharray="8 14"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      />
    </svg>
  );
}
