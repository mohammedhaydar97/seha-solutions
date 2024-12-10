import React from 'react';
import { 
  ClipboardCheck, 
  Thermometer, 
  Award, 
  Link, 
  GraduationCap,
  Trash2,
  Droplets,
  MessageSquare,
  Bot,
  Users
} from 'lucide-react';

const Integrations = () => {
  const integrations = [
    {
      id: 1,
      name: "FSMS Apps",
      icon: ClipboardCheck,
      color: "bg-blue-100",
      size: "p-6",
      animation: "motion-safe:animate-[bounce_4s_ease-in-out_infinite]"
    },
    {
      id: 2,
      name: "Temperature Monitoring Apps",
      icon: Thermometer,
      color: "bg-purple-100",
      size: "p-10",
      animation: "motion-safe:animate-[bounce_5s_ease-in-out_infinite]"
    },
    {
      id: 3,
      name: "Compliance & Certification Apps",
      icon: Award,
      color: "bg-orange-100",
      size: "p-8",
      animation: "motion-safe:animate-[bounce_6s_ease-in-out_infinite]"
    },
    {
      id: 4,
      name: "Traceability Apps",
      icon: Link,
      color: "bg-green-100",
      size: "p-12",
      animation: "motion-safe:animate-[bounce_4.5s_ease-in-out_infinite]"
    },
    {
      id: 5,
      name: "Training Apps",
      icon: GraduationCap,
      color: "bg-yellow-100",
      size: "p-7",
      animation: "motion-safe:animate-[bounce_5.5s_ease-in-out_infinite]"
    },
    {
      id: 6,
      name: "Waste Management Apps",
      icon: Trash2,
      color: "bg-red-100",
      size: "p-9",
      animation: "motion-safe:animate-[bounce_4.8s_ease-in-out_infinite]"
    },
    {
      id: 7,
      name: "Hygiene & Sanitation Apps",
      icon: Droplets,
      color: "bg-indigo-100",
      size: "p-8",
      animation: "motion-safe:animate-[bounce_5.2s_ease-in-out_infinite]"
    },
    {
      id: 8,
      name: "Customer Feedback Apps",
      icon: MessageSquare,
      color: "bg-pink-100",
      size: "p-10",
      animation: "motion-safe:animate-[bounce_4.2s_ease-in-out_infinite]"
    },
    {
      id: 9,
      name: "AI Assistants Apps",
      icon: Bot,
      color: "bg-cyan-100",
      size: "p-6",
      animation: "motion-safe:animate-[bounce_5.8s_ease-in-out_infinite]"
    },
    {
      id: 10,
      name: "Team Management Apps",
      icon: Users,
      color: "bg-teal-100",
      size: "p-8",
      animation: "motion-safe:animate-[bounce_4.6s_ease-in-out_infinite]"
    }
  ];

  return (
    <div className="py-16 px-4 text-center m">
      <div className='mb-20'>
      <h2 className="text-3xl font-bold mb-4">
  Integration of <span className="text-pink-200">Food Safety Apps</span>
</h2>
      <p className="text-gray-600  max-w-2xl mx-auto text-lg font-semibold ">
        Revolutionizing the food safety sector through digital transformation
      </p>
      </div>
     

      <div  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-16 ">
        {integrations.map(({ id, name, icon: Icon, color, size, animation }) => (
          <div
            key={id}
            className="flex flex-col items-center space-y-4"
          >
            <div
              className={`${color} ${size} ${animation}
                rounded-full flex items-center justify-center transition-all 
                duration-300 hover:scale-110 cursor-pointer relative`}
            >
              <Icon className="w-8 h-8 text-gray-700" />
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-pink-400 rounded-full" />
            </div>
            <p className="text-base font-bold text-gray-700 text-center">
              {name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Integrations;