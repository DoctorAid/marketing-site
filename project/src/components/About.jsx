import React from 'react';
import { Linkedin } from 'lucide-react';

const AboutPage = () => {
  
  const teamMembers = [
    { 
      id: 1, 
      name: "Sandith Sithmaka Thenuwra", 
      role: "Team Leader",
      imagePath: "/Sandith.png",
      linkedIn: "https://www.linkedin.com/in/sandith02/"
    },
    { 
      id: 2, 
      name: "Sakith Seneviratne", 
      role: "Team Member",
      imagePath: "/Sakith.png",
      linkedIn: "https://www.linkedin.com/in/sakith-seneviratne-8341a9269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    { 
      id: 3, 
      name: "Nimesha Dahanayaka", 
      role: "Team Member",
      imagePath: "/Nimesha.png",
      linkedIn: "https://www.linkedin.com/in/nimesha-dahanayaka-104649265"
    },
    { 
      id: 4, 
      name: "Lakmindee Jayamanne", 
      role: "Team Member",
      imagePath: "/Lakmindee.png",
      linkedIn: "http://www.linkedin.com/in/lakmindee-jayamanne-a3838a193"
    },
    { 
      id: 5, 
      name: "Chanugi Bandara", 
      role: "Team Member",
      imagePath: "/Chanugi.png",
      linkedIn: "https://www.linkedin.com/in/miyunika-bandara-3a3489339/"
    },
    { 
      id: 6, 
      name: "Amaya Subasinghe", 
      role: "Team Member",
      imagePath: "/Amaya.png",
      linkedIn: "https://www.linkedin.com/in/amaya-subasinghe-3b0193294"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#EBF5FF] to-white">
      <main className="flex-1 flex flex-col items-center justify-center py-16 px-4">
        <div className="w-full max-w-6xl mx-auto space-y-24">
          <section className="text-center">
            <h1 className="text-5xl font-bold text-[#5296B8] mb-12">Mission</h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              At DoctorAid, we believe healthcare should be accessible, organized, and stress-free. Our platform is
              designed to streamline the process of connecting patients with doctors while providing doctors with the
              tools they need to manage their practice efficiently.
            </p>
          </section>

          <section className="text-center">
            <h2 className="mb-16">
              <span className="text-5xl font-bold text-[#5296B8]">Meet Our </span>
              <span className="text-5xl font-bold text-[#2C3E50]">Team</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
              {teamMembers.map((member) => (
                <div key={member.id} className="flex flex-col items-center group">
                  <div className="relative">
                    <div className="w-36 h-36 rounded-full bg-[#EBF5FF] mb-4 overflow-hidden transform transition-transform duration-300 group-hover:scale-105">
                      <img
                        src={member.imagePath}
                        alt={`${member.name}'s profile`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <a
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center bg-primary bg-opacity-50 rounded-full mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <Linkedin className="w-8 h-8 text-white" />
                    </a>
                  </div>
                  <h3 className="text-[#5296B8] text-2xl font-bold mx-12 mb-1 transition-transform duration-300 group-hover:scale-105 drop-shadow-md">
                    {member.name}
                  </h3>
                  <p className="text-black text-sm">{member.role}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
