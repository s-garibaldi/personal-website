import Image from "next/image";
import Link from "next/link";
import { FaIndustry, FaCogs, FaChartLine, FaTools, FaRobot, FaCheckCircle } from 'react-icons/fa';

export default function ManufacturingExcellence() {
  const capabilities = [
    {
      icon: <FaIndustry className="text-4xl text-blue-400 mb-4" />,
      title: "Advanced Manufacturing",
      description: "State-of-the-art facilities equipped with cutting-edge technology for precision manufacturing.",
      features: [
        "Automated production lines",
        "Precision machining",
        "Quality control systems",
        "Process optimization"
      ]
    },
    {
      icon: <FaRobot className="text-4xl text-blue-400 mb-4" />,
      title: "Smart Manufacturing",
      description: "Integration of Industry 4.0 technologies for enhanced efficiency and productivity.",
      features: [
        "IoT-enabled equipment",
        "Real-time monitoring",
        "Predictive maintenance",
        "Data-driven insights"
      ]
    },
    {
      icon: <FaTools className="text-4xl text-blue-400 mb-4" />,
      title: "Custom Solutions",
      description: "Tailored manufacturing solutions to meet specific industry requirements.",
      features: [
        "Custom steel fabrication",
        "Specialized components",
        "Technical consulting",
        "Process development"
      ]
    }
  ];

  const qualityStandards = [
    {
      icon: <FaCheckCircle className="text-3xl text-blue-400" />,
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensuring the highest standards"
    },
    {
      icon: <FaChartLine className="text-3xl text-blue-400" />,
      title: "Performance Metrics",
      description: "Continuous monitoring and improvement of manufacturing processes"
    },
    {
      icon: <FaCogs className="text-3xl text-blue-400" />,
      title: "Process Excellence",
      description: "Optimized manufacturing workflows for maximum efficiency"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 to-black/80">
          <div className="relative w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1565976469782-7c91e1955b04?w=1920&h=1080"
              alt="Manufacturing Excellence"
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
              Manufacturing Excellence
              <span className="block text-2xl md:text-3xl text-blue-400 mt-2">
                Precision Engineering & Advanced Production
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Main Capabilities Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-gray-800 rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border border-gray-700">
                <div className="p-8">
                  {capability.icon}
                  <h3 className="text-2xl font-bold text-white mb-4">{capability.title}</h3>
                  <p className="text-gray-300 mb-6">{capability.description}</p>
                  <ul className="space-y-3">
                    {capability.features.map((feature, idx) => (
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

      {/* Quality Standards Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">
            Our Quality Standards
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {qualityStandards.map((standard, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-xl text-center hover:bg-gray-700 transition-colors duration-300">
                {standard.icon}
                <h3 className="text-xl font-semibold text-white mt-4 mb-2">{standard.title}</h3>
                <p className="text-gray-300">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Experience Manufacturing Excellence?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Let&apos; discuss how our manufacturing capabilities can benefit your business.
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