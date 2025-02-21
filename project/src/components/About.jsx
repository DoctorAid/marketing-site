import React from 'react';

const AboutPage = () => {
  // Update this array with your team members' information and image paths
  const teamMembers = [
    { 
      id: 1, 
      name: "Team Member 1", 
      role: "Role 1",
      // Replace these paths with your actual image paths
      imagePath: "/path/to/member1-image.jpg"  // ← Update this path
    },
    { 
      id: 2, 
      name: "Team Member 2", 
      role: "Role 2",
      imagePath: "/path/to/member2-image.jpg"  // ← Update this path
    },
    { 
      id: 3, 
      name: "Team Member 3", 
      role: "Role 3",
      imagePath: "/path/to/member3-image.jpg"  // ← Update this path
    },
    { 
      id: 4, 
      name: "Team Member 4", 
      role: "Role 4",
      imagePath: "/path/to/member4-image.jpg"  // ← Update this path
    },
    { 
      id: 5, 
      name: "Team Member 5", 
      role: "Role 5",
      imagePath: "/path/to/member5-image.jpg"  // ← Update this path
    },
    { 
      id: 6, 
      name: "Team Member 6", 
      role: "Role 6",
      imagePath: "/path/to/member6-image.jpg"  // ← Update this path
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <main className="flex-1 flex flex-col items-center justify-center py-16 px-4">
        <div className="w-full max-w-6xl mx-auto space-y-24">
          <section className="text-center">
            <h1 className="text-5xl font-bold text-blue-500 mb-12">Mission</h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              At DoctorAid, we believe healthcare should be accessible, organized, and stress-free. Our platform is
              designed to streamline the process of connecting patients with doctors while providing doctors with the
              tools they need to manage their practice efficiently.
            </p>
          </section>

          <section className="text-center">
            <h2 className="mb-16">
              <span className="text-5xl font-bold text-blue-500">Meet Our </span>
              <span className="text-5xl font-bold text-navy-900">Team</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
              {teamMembers.map((member) => (
                <div key={member.id} className="flex flex-col items-center group">
                  <div className="w-40 h-40 rounded-full bg-blue-100 mb-6 overflow-hidden transform transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={member.imagePath} // ← This will use the individual image path
                      alt={`${member.name}'s profile`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-blue-500 font-semibold text-xl mb-2">{member.name}</h3>
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