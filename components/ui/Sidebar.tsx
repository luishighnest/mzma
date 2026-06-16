"use client";

import { motion } from "framer-motion";
import { Home, Search, Tv, Film, Library, Settings } from "lucide-react";

const menuItems = [
  { icon: Home, label: "Home" },
  { icon: Search, label: "Search" },
  { icon: Tv, label: "TV Shows" },
  { icon: Film, label: "Movies" },
  { icon: Library, label: "Library" },
  { icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  return (
    <motion.aside
      className="fixed left-0 top-0 h-screen w-20 flex flex-col items-center py-8 bg-surface/80 backdrop-blur-xl border-r border-white/5"
      initial={{ width: 80 }}
      whileHover={{ width: 240 }}
    >
      <div className="mb-12">
        <div className="w-10 h-10 bg-accent rounded-full" />
      </div>
      <nav className="flex flex-col gap-6 w-full px-4">
        {menuItems.map((item, index) => (
          <button key={index} className="flex items-center gap-4 text-text-secondary hover:text-text-primary transition-colors">
            <item.icon className="w-6 h-6" />
            <motion.span initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="whitespace-nowrap font-medium">
              {item.label}
            </motion.span>
          </button>
        ))}
      </nav>
    </motion.aside>
  );
}
