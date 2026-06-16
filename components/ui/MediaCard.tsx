"use client";

import { motion } from "framer-motion";

interface MediaCardProps {
  title: string;
  image: string;
}

export default function MediaCard({ title, image }: MediaCardProps) {
  return (
    <motion.div
      className="relative w-64 h-36 rounded-xl overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(10, 132, 255, 0.5)" }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="text-text-primary font-semibold truncate">{title}</h3>
      </div>
    </motion.div>
  );
}
