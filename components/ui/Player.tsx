"use client";

import { useState } from "react";
import { Play, Pause, Volume2, Maximize } from "lucide-react";

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative group w-full aspect-video bg-surface rounded-2xl overflow-hidden">
      <video className="w-full h-full object-cover">
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex items-center justify-between">
          <button onClick={() => setIsPlaying(!isPlaying)} className="text-text-primary">
            {isPlaying ? <Pause /> : <Play />}
          </button>
          <div className="flex-1 mx-4 h-1 bg-surface-tertiary rounded-full">
            <div className="h-full w-1/3 bg-accent rounded-full" />
          </div>
          <button className="text-text-primary"><Volume2 /></button>
          <button className="text-text-primary ml-4"><Maximize /></button>
        </div>
      </div>
    </div>
  );
}
