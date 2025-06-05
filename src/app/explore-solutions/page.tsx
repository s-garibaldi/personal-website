import Image from "next/image";
import Link from "next/link";
import { FaIndustry, FaTools, FaChartLine, FaGlobe, FaRecycle, FaCogs } from 'react-icons/fa';

export default function ExploreSolutions() {
  const solutions = [
    {
      icon: <FaIndustry className="text-4xl text-blue-400 mb-4" />,
      title: "Industrial Solutions",
      description: "Comprehensive steel solutions for industrial applications, from manufacturing to heavy machinery.",
      features: [
        "Custom steel fabrication",
        "Industrial equipment manufacturing",
        "Heavy machinery components",
        "Process optimization"
      ]
    },
    {
      icon: <FaTools className="text-4xl text-blue-400 mb-4" />,
      title: "Construction Solutions",
      description: "Advanced steel construction solutions for modern infrastructure and buildings.",
      features: [
        "Structural steel frameworks",
        "Pre-engineered buildings",
        "Steel reinforcement systems",
        "Custom architectural solutions"
      ]
    },
    {
      icon: <FaChartLine className="text-4xl text-blue-400 mb-4" />,
      title: "Business Solutions",
      description: "Strategic steel solutions to optimize your business operations and growth.",
      features: [
        "Supply chain optimization",
        "Quality control systems",
        "Market analysis",
        "Business development"
      ]
    }
  ];

  const technologies = [
    {
      icon: <FaCogs className="text-3xl text-blue-400" />,
      title: "Advanced Manufacturing",
      description: "State-of-the-art manufacturing processes and technologies"
    },
    {
      icon: <FaRecycle className="text-3xl text-blue-400" />,
      title: "Sustainable Practices",
      description: "Eco-friendly production methods and recycling initiatives"
    },
    {
      icon: <FaGlobe className="text-3xl text-blue-400" />,
      title: "Global Distribution",
      description: "Worldwide logistics and supply chain solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 to-black/80">
          <div className="relative w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?w=1920&h=1080"
              alt="Steel Solutions"
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
              Explore Our Solutions
              <span className="block text-2xl md:text-3xl text-blue-400 mt-2">
                Comprehensive Steel Solutions for Every Industry
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

      {/* Technology Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">
            Our Technology & Capabilities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-xl text-center hover:bg-gray-700 transition-colors duration-300">
                {tech.icon}
                <h3 className="text-xl font-semibold text-white mt-4 mb-2">{tech.title}</h3>
                <p className="text-gray-300">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our steel solutions can help you achieve your goals.
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