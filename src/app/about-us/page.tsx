import Image from "next/image";
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function AboutUs() {
  const staffMembers = [
    {
      name: "Juan Garibaldi",
      position: "CEO & Founder",
      image: "/images/IMG_9852.JPG",
      quote: "Leading with innovation and integrity in the steel industry.",
      linkedin: "#",
      twitter: "#",
      email: "juan@segallc.com"
    },
    {
      name: "Sarah Johnson",
      position: "Chief Operations Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400",
      quote: "Excellence in operations is the foundation of our success.",
      linkedin: "#",
      twitter: "#",
      email: "sarah@segallc.com"
    },
    {
      name: "Michael Chen",
      position: "Technical Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400",
      quote: "Pushing the boundaries of steel technology every day.",
      linkedin: "#",
      twitter: "#",
      email: "michael@segallc.com"
    },
    {
      name: "Emily Rodriguez",
      position: "Head of Sustainability",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400",
      quote: "Building a greener future through sustainable steel production.",
      linkedin: "#",
      twitter: "#",
      email: "emily@segallc.com"
    },
    {
      name: "David Wilson",
      position: "Global Sales Director",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400",
      quote: "Connecting quality steel solutions with global partners.",
      linkedin: "#",
      twitter: "#",
      email: "david@segallc.com"
    },
    {
      name: "Lisa Thompson",
      position: "Research & Development Lead",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400",
      quote: "Innovation drives our competitive edge in the market.",
      linkedin: "#",
      twitter: "#",
      email: "lisa@segallc.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 to-black/80">
          <div className="relative w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=1920&h=1080"
              alt="SEGA LLC Team"
              fill
              className="object-cover mix-blend-overlay opacity-70"
              priority
              unoptimized
            />
          </div>
        </div>
        
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Meet Our Team
              <span className="block text-2xl md:text-3xl text-blue-400 mt-2">
                The People Behind SEGA LLC
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Staff Grid */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staffMembers.map((member, index) => (
              <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700 hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-blue-400 mb-4">{member.position}</p>
                  <p className="text-gray-300 italic mb-6">"{member.quote}"</p>
                  <div className="flex space-x-4">
                    <a href={member.linkedin} className="text-gray-400 hover:text-blue-400 transition-colors">
                      <FaLinkedin className="text-xl" />
                    </a>
                    <a href={member.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                      <FaTwitter className="text-xl" />
                    </a>
                    <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-blue-400 transition-colors">
                      <FaEnvelope className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
