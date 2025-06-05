import Image from "next/image";
import Link from "next/link";
import { FaIndustry, FaCogs, FaChartLine, FaTools, FaBuilding, FaRecycle } from 'react-icons/fa';

export default function IndustrialSolutions() {
  const solutions = [
    {
      icon: <FaBuilding className="text-4xl text-blue-400 mb-4" />,
      title: "Industrial Infrastructure",
      description: "Comprehensive solutions for industrial facilities and infrastructure development.",
      features: [
        "Factory construction",
        "Industrial parks",
        "Warehouse facilities",
        "Utility infrastructure"
      ]
    },
    {
      icon: <FaTools className="text-4xl text-blue-400 mb-4" />,
      title: "Equipment Solutions",
      description: "Specialized equipment and machinery for industrial applications.",
      features: [
        "Custom machinery",
        "Industrial automation",
        "Process equipment",
        "Maintenance systems"
      ]
    },
    {
      icon: <FaRecycle className="text-4xl text-blue-400 mb-4" />,
      title: "Sustainable Solutions",
      description: "Eco-friendly industrial solutions for a sustainable future.",
      features: [
        "Energy efficiency",
        "Waste reduction",
        "Green technology",
        "Environmental compliance"
      ]
    }
  ];

  const services = [
    {
      icon: <FaIndustry className="text-3xl text-blue-400" />,
      title: "Industrial Consulting",
      description: "Expert guidance for industrial operations and optimization"
    },
    {
      icon: <FaCogs className="text-3xl text-blue-400" />,
      title: "Process Engineering",
      description: "Advanced process design and implementation"
    },
    {
      icon: <FaChartLine className="text-3xl text-blue-400" />,
      title: "Performance Analysis",
      description: "Comprehensive evaluation and improvement strategies"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 to-black/80">
          <div className="relative w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1565715101379-54e8fdc110ce?w=1920&h=1080"
              alt="Industrial Solutions"
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
              Industrial Solutions
              <span className="block text-2xl md:text-3xl text-blue-400 mt-2">
                Comprehensive Industrial Services & Infrastructure
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Main Solutions Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gray-800 rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border border-gray-700">
                <div className="p-8">
                  {solution.icon}
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  <ul className="space-y-3">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">
            Our Industrial Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-xl text-center hover:bg-gray-700 transition-colors duration-300">
                {service.icon}
                <h3 className="text-xl font-semibold text-white mt-4 mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Transform Your Industrial Operations?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Let's discuss how our industrial solutions can enhance your business.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white hover:bg-gray-100 text-blue-900 px-8 py-3 rounded-md text-lg font-semibold transition-colors border-2 border-transparent hover:border-white hover:bg-transparent hover:text-white"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
} 