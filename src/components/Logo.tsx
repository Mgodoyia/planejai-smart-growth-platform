
import React from "react";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/2cf99d1a-06c3-4551-9cf1-623d7212d576.png" 
        alt="Planej.AI Logo"
        className="w-16 h-16"
      />
    </div>
  );
};

export default Logo;
