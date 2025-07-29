import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Simit Chaudhary
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Web App & dApp Developer crafting the future of decentralized applications
            and modern web experiences
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Passionate about blockchain technology, smart contracts, and building 
            user-centric applications that bridge Web2 and Web3
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
            >
              View My Work
            </a>
          </div>

          <div className="flex items-center justify-center space-x-6">
            <a
              href="https://github.com"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
            >
              <Github className="w-6 h-6 text-gray-700" />
            </a>
            <a
              href="https://linkedin.com"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
            >
              <Linkedin className="w-6 h-6 text-gray-700" />
            </a>
            <a
              href="mailto:simit@example.com"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
            >
              <Mail className="w-6 h-6 text-gray-700" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;