"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigations } from "../../constants/navigations";
import Logo from "@/public/logo.svg";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

// Framer motion variants
const containerVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      staggerChildren: 0.05, // Subtle stagger
    },
  },
  exit: {
    x: "100%",
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 100,
      damping: 20,
      staggerChildren: 0.03, // Faster stagger on exit
      staggerDirection: -1, // Reverse stagger on exit
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
} as const;

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Background Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9998] bg-black/50"
            onClick={onClose}
          />
          {/* Sidebar Panel */}
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
            className="fixed top-0 right-0 z-[9999] h-full w-full max-w-full bg-[#111112]  p-6 shadow-2xl overflow-hidden  flex flex-col"
          >
            {/* Header: Logo and Close Button */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-between mb-10"
            >
              {/* Complex Logo Gradient Text */}

              <img src={Logo.src} alt="Logo" />

              {/* Close Button */}
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-3 bg-[#1D1D1E] rounded-xl hover:bg-[#252526] transition-colors"
              >
                {/* ✕ Icon */}
                <span className="text-[#8E8E93] text-xl block leading-none">
                  ✕
                </span>
              </motion.button>
            </motion.div>

            {/* Menu Items */}
            <nav className="flex-1">
              <motion.ul variants={itemVariants} className="space-y-1">
                {navigations.map((item, index) => (
                  <motion.li key={index} variants={itemVariants}>
                    <motion.a
                      href={item.href}
                      whileHover={{ scale: 1.02 }}
                      className={`flex items-center justify-between py-6 ${
                        index !== navigations.length - 1
                          ? "border-b border-[#252526]"
                          : ""
                      } text-[#F5F5F7] font-semibold text-[22px] transition-colors`}
                      style={{
                        fontFamily:
                          '"SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif',
                      }}
                    >
                      {item.title}
                      {/* > Arrow Icon */}
                      <span className="text-[#8E8E93] text-xl block leading-none">
                        ❯
                      </span>
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>

            {/* Subdued Gradient Glow (Bottom Right) */}
            <div className="absolute -bottom-10 -right-20 w-80 h-80 rounded-full blur-[100px] bg-brand-gradient opacity-30 -z-10" />
            <div className="absolute top-10 -left-20 w-80 h-80 rounded-full blur-[100px] bg-brand-gradient opacity-10 -z-10" />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
