import React from 'react';

const AboutPage = () => {
  // Update this array with your team members' information and image paths
  const teamMembers = [
    { 
      id: 1, 
      name: "Team Member 1", 
      role: "Team Leader",
      imagePath: "/path/to/member1-image.jpg"
    },
    { 
      id: 2, 
      name: "Team Member 2", 
      role: "Team Member",
      imagePath: "/path/to/member2-image.jpg"
    },
    { 
      id: 3, 
      name: "Team Member 3", 
      role: "Team Member",
      imagePath: "/path/to/member3-image.jpg"
    },
    { 
      id: 4, 
      name: "Team Member 4", 
      role: "Team Member",
      imagePath: "/path/to/member4-image.jpg"
    },
    { 
      id: 5, 
      name: "Team Member 5", 
      role: "Team Member",
      imagePath: "/path/to/member5-image.jpg"
    },
    { 
      id: 6, 
      name: "Team Member 6", 
      role: "Team Member",
      imagePath: "/path/to/member6-image.jpg"
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
                  <div className="w-40 h-40 rounded-full bg-[#EBF5FF] mb-6 overflow-hidden transform transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={member.imagePath}
                      alt={`${member.name}'s profile`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-[#5296B8] font-semibold text-xl mb-2">{member.name}</h3>
                  <p className="text-gray-600 text-lg">{member.role}</p>
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