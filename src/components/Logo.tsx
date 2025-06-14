
import { Sparkles } from "lucide-react";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="relative">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        Planej.AI
      </span>
    </div>
  );
};

export default Logo;
