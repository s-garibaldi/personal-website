import Image from "next/image";
import { FaGlobe, FaIndustry, FaChartLine, FaHandshake } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 to-black/80">
          <div className="relative w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=1920&h=1080"
              alt="Steel Manufacturing"
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
              SEGA LLC
              <span className="block text-2xl md:text-3xl text-blue-400 mt-2">
                International Steel Excellence
              </span>
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Leading the global steel industry with innovation, quality, and sustainable practices
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors">
              Explore Our Solutions
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">
            Global Steel Excellence
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
              <FaGlobe className="text-4xl text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Global Reach</h3>
              <p className="text-gray-300">Operating in major markets across six continents</p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
              <FaIndustry className="text-4xl text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Advanced Manufacturing</h3>
              <p className="text-gray-300">State-of-the-art facilities and processes</p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
              <FaChartLine className="text-4xl text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Industry Leadership</h3>
              <p className="text-gray-300">Setting standards in steel production</p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
              <FaHandshake className="text-4xl text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Customer Partnership</h3>
              <p className="text-gray-300">Committed to client success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Projects Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">
            Our Latest Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                url: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600',
                title: 'Steel Construction',
                desc: 'Modern infrastructure development'
              },
              {
                url: 'https://images.unsplash.com/photo-1565976469782-7c91e1955b04?w=800&h=600',
                title: 'Manufacturing Excellence',
                desc: 'Advanced steel processing'
              },
              {
                url: 'https://images.unsplash.com/photo-1565715101379-54e8fdc110ce?w=800&h=600',
                title: 'Industrial Solutions',
                desc: 'Innovative steel applications'
              }
            ].map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg bg-gray-800 border border-gray-700">
                <div className="relative h-[300px]">
                  <Image
                    src={project.url}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    unoptimized
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-blue-300">{project.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Partner with SEGA LLC?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Join us in building the future of steel manufacturing with innovative solutions and sustainable practices.
          </p>
          <button className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-3 rounded-md text-lg font-semibold transition-colors border-2 border-transparent hover:border-white hover:bg-transparent hover:text-white">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
}
