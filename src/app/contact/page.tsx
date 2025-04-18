import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';
import Image from 'next/image';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 to-black/80">
          <div className="relative w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&h=1080"
              alt="Contact SEGA LLC"
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
              Contact Us
              <span className="block text-2xl md:text-3xl text-blue-400 mt-2">
                Get in Touch with Our Team
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-400"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-400"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-400"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <FaBuilding className="text-2xl text-blue-400 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">Headquarters</h3>
                      <p className="text-gray-300">SEGA LLC Main Office</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <FaMapMarkerAlt className="text-2xl text-blue-400 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">Address</h3>
                      <p className="text-gray-300">123 Steel Avenue<br />Industrial District<br />New York, NY 10001</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <FaPhone className="text-2xl text-blue-400 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">Phone</h3>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <FaEnvelope className="text-2xl text-blue-400 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">Email</h3>
                      <p className="text-gray-300">contact@segallc.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-6">Business Hours</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Monday - Friday</span>
                    <span className="text-white">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Saturday</span>
                    <span className="text-white">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Sunday</span>
                    <span className="text-white">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}