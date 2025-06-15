
import { Shield, CheckCircle, Award } from "lucide-react";

const SecurityBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "99.9% de Uptime",
      subtitle: "Disponibilidade Garantida",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      iconBg: "bg-gradient-to-br from-green-100 to-emerald-100",
      iconColor: "text-green-600",
      borderColor: "border-green-200/50"
    },
    {
      icon: CheckCircle,
      title: "Conformidade LGPD",
      subtitle: "Proteção Total de Dados",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
      iconBg: "bg-gradient-to-br from-blue-100 to-indigo-100",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200/50"
    },
    {
      icon: Award,
      title: "ISO 27001",
      subtitle: "Certificação Internacional",
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-violet-50",
      iconBg: "bg-gradient-to-br from-purple-100 to-violet-100",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200/50"
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      {/* Mobile Layout - Vertical Stack with Large Spacing */}
      <div className="grid grid-cols-1 gap-8 sm:hidden">
        {badges.map((badge, index) => (
          <div
            key={index}
            className={`${badge.bgColor} ${badge.borderColor} rounded-3xl p-8 border-2 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 backdrop-blur-sm`}
          >
            <div className="flex flex-col items-center text-center space-y-6">
              <div className={`${badge.iconBg} p-6 rounded-2xl shadow-md`}>
                <badge.icon className={`w-12 h-12 ${badge.iconColor}`} />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                  {badge.title}
                </h3>
                <p className="text-base text-gray-600 font-medium">
                  {badge.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tablet Layout - Asymmetric Grid */}
      <div className="hidden sm:grid lg:hidden gap-8">
        {/* First badge - Full width top */}
        <div className="w-full flex justify-center mb-4">
          {(() => {
            const firstBadge = badges[0];
            return (
              <div className={`${firstBadge.bgColor} ${firstBadge.borderColor} rounded-3xl p-10 border-2 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 backdrop-blur-sm max-w-2xl w-full`}>
                <div className="flex items-center justify-center space-x-8">
                  <div className={`${firstBadge.iconBg} p-6 rounded-2xl shadow-md flex-shrink-0`}>
                    <firstBadge.icon className={`w-16 h-16 ${firstBadge.iconColor}`} />
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">
                      {firstBadge.title}
                    </h3>
                    <p className="text-lg text-gray-600 font-medium">
                      {firstBadge.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
        
        {/* Bottom two badges - Side by side */}
        <div className="grid grid-cols-2 gap-8">
          {badges.slice(1).map((badge, index) => (
            <div
              key={index + 1}
              className={`${badge.bgColor} ${badge.borderColor} rounded-3xl p-8 border-2 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 backdrop-blur-sm`}
            >
              <div className="flex flex-col items-center text-center space-y-6">
                <div className={`${badge.iconBg} p-5 rounded-2xl shadow-md`}>
                  <badge.icon className={`w-12 h-12 ${badge.iconColor}`} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {badge.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium">
                    {badge.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout - Staggered Grid with Different Heights */}
      <div className="hidden lg:grid grid-cols-12 gap-8 items-stretch">
        {/* First badge - Larger, spans more columns */}
        <div className="col-span-5">
          {(() => {
            const firstBadge = badges[0];
            return (
              <div className={`${firstBadge.bgColor} ${firstBadge.borderColor} rounded-3xl p-12 border-2 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 backdrop-blur-sm h-full flex flex-col justify-center`}>
                <div className="flex flex-col items-center text-center space-y-8">
                  <div className={`${firstBadge.iconBg} p-8 rounded-3xl shadow-lg`}>
                    <firstBadge.icon className={`w-20 h-20 ${firstBadge.iconColor}`} />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-4xl font-bold text-gray-900">
                      {firstBadge.title}
                    </h3>
                    <p className="text-xl text-gray-600 font-medium leading-relaxed">
                      {firstBadge.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Second and third badges - Vertical stack, smaller */}
        <div className="col-span-7 flex flex-col space-y-8">
          {badges.slice(1).map((badge, index) => (
            <div
              key={index + 1}
              className={`${badge.bgColor} ${badge.borderColor} rounded-3xl p-8 border-2 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 backdrop-blur-sm flex-1`}
            >
              <div className="flex items-center space-x-6 h-full">
                <div className={`${badge.iconBg} p-6 rounded-2xl shadow-md flex-shrink-0`}>
                  <badge.icon className={`w-14 h-14 ${badge.iconColor}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {badge.title}
                  </h3>
                  <p className="text-lg text-gray-600 font-medium leading-relaxed">
                    {badge.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecurityBadges;
