
import React from "react";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <img 
        src="/lovable-uploads/9db66151-e103-4bbb-9f7f-ea5cf6ceefda.png" 
        alt="Planej.AI Logo"
        className="w-10 h-10"
      />
      <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        Planej.AI
      </span>
    </div>
  );
};

export default Logo;
