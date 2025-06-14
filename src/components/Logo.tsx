
import React from "react";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <img 
        src="/lovable-uploads/2cf99d1a-06c3-4551-9cf1-623d7212d576.png" 
        alt="Planej.AI Logo"
        className="w-14 h-14"
      />
      <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        Planej.AI
      </span>
    </div>
  );
};

export default Logo;
