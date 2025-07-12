import React from 'react';
import {Menu, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Us Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to start your next project? We'd love to hear from you. 
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Grid: Contact Info + Socials & Button */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column – Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Phone</h4>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-green-100 rounded-full p-3 mr-4">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p className="text-gray-400">hello@innovatetech.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-purple-100 rounded-full p-3 mr-4">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Address</h4>
                  <p className="text-gray-400">
                    123 Innovation Street<br />
                    Tech City, TC 12345
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column – Social Links & Button */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4 mb-8">
                <a href="#" className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-blue-400 p-3 rounded-full hover:bg-blue-500 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="bg-pink-600 p-3 rounded-full hover:bg-pink-700 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-blue-800 p-3 rounded-full hover:bg-blue-900 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="bg-red-600 p-3 rounded-full hover:bg-red-700 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

