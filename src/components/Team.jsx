import React from "react";

const teamMembers = [
  {
    id: 1,
    name: "Raymond Shroff",
    role: "CEO",
    bio: "Visionary leader with 10+ years in the tech industry.",
    image: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?w=1200&h=600&fit=crop"
  },
  {
    id: 2,
    name: "Freddie Mercury",
    role: "CTO",
    bio: "Innovative tech expert with 7+ years of experience.",
    image: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?w=1200&h=600&fit=crop"
  },
  {
    id: 3,
    name: "Kriti Shah",
    role: "Designer",
    bio: "Master of UI/UX design with 5+ years of experience.",
    image: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?w=1200&h=600&fit=crop"
  }
];

const Team = () => {
  return (
    <section className="py-12 px-4 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-gray-800 rounded-xl p-6 shadow-md">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-400">{member.role}</p>
            <p className="mt-2 text-gray-300">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
