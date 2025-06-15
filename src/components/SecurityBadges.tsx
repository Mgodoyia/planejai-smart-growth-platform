
import { Shield, CheckCircle, Award } from "lucide-react";

const SecurityBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "99.9% de Uptime",
      subtitle: "Disponibilidade Garantida",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: CheckCircle,
      title: "Conformidade LGPD",
      subtitle: "Proteção Total de Dados",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Award,
      title: "ISO 27001",
      subtitle: "Certificação Internacional",
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Mobile Layout - Stacked */}
      <div className="grid grid-cols-1 gap-4 sm:hidden">
        {badges.map((badge, index) => (
          <div
            key={index}
            className={`${badge.bgColor} rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300`}
          >
            <div className="flex items-center gap-4">
              <div className={`${badge.iconBg} p-3 rounded-xl flex-shrink-0`}>
                <badge.icon className={`w-6 h-6 ${badge.iconColor}`} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-gray-900 leading-tight">
                  {badge.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {badge.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tablet Layout - 2 columns for first two, 1 for last */}
      <div className="hidden sm:grid lg:hidden">
        <div className="grid grid-cols-2 gap-4 mb-4">
          {badges.slice(0, 2).map((badge, index) => (
            <div
              key={index}
              className={`${badge.bgColor} rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300`}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`${badge.iconBg} p-4 rounded-xl mb-4`}>
                  <badge.icon className={`w-8 h-8 ${badge.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {badge.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {badge.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <div className={`${badges[2].bgColor} rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 max-w-sm w-full`}>
            <div className="flex flex-col items-center text-center">
              <div className={`${badges[2].iconBg} p-4 rounded-xl mb-4`}>
                <badges[2].icon className={`w-8 h-8 ${badges[2].iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {badges[2].title}
              </h3>
              <p className="text-sm text-gray-600">
                {badges[2].subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - 3 columns */}
      <div className="hidden lg:grid grid-cols-3 gap-6">
        {badges.map((badge, index) => (
          <div
            key={index}
            className={`${badge.bgColor} rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
          >
            <div className="flex flex-col items-center text-center">
              <div className={`${badge.iconBg} p-5 rounded-2xl mb-6`}>
                <badge.icon className={`w-10 h-10 ${badge.iconColor}`} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {badge.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {badge.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecurityBadges;
