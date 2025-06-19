import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400">
      <div className="relative">
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-300 via-pink-400 to-purple-500 animate-spin-slow shadow-2xl"></div>
        <span className="absolute inset-0 flex items-center justify-center text-3xl font-extrabold text-white drop-shadow-glow font-mono">
          ✨
        </span>
      </div>
      <p className="mt-8 text-2xl font-bold text-white font-mono tracking-widest animate-pulse">
        Loading...
      </p>
    </div>
  );
}
