import React from 'react';
import { Code2, Blocks, Rocket, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-8 h-8 text-blue-600" />,
      title: "Web Development",
      description: "Building responsive, modern web applications with cutting-edge technologies"
    },
    {
      icon: <Blocks className="w-8 h-8 text-teal-600" />,
      title: "dApp Development",
      description: "Creating decentralized applications that leverage blockchain technology"
    },
    {
      icon: <Rocket className="w-8 h-8 text-purple-600" />,
      title: "Innovation Focus",
      description: "Always exploring new technologies and pushing the boundaries of what's possible"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "User-Centric",
      description: "Designing intuitive experiences that make complex technology accessible"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A passionate developer at the intersection of traditional web development 
            and blockchain innovation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              My Journey
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm Simit Chaudhary, a dedicated developer who started my journey building 
              web applications and quickly became fascinated with the potential of 
              decentralized applications (dApps). I believe in the power of technology 
              to create more open, transparent, and user-controlled digital experiences.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              My approach combines solid web development fundamentals with cutting-edge 
              blockchain technologies. I'm constantly learning and adapting to new tools, 
              frameworks, and paradigms that emerge in this rapidly evolving space.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether it's building a responsive React application or developing smart 
              contracts for Ethereum, I bring the same attention to detail, user experience 
              focus, and commitment to clean, maintainable code.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl">
            <h4 className="text-xl font-semibold text-gray-900 mb-6">
              What Drives Me
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Building applications that solve real-world problems
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Creating seamless user experiences across Web2 and Web3
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Contributing to the decentralized future of the internet
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Continuous learning and sharing knowledge with the community
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                {highlight.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                {highlight.title}
              </h4>
              <p className="text-gray-600 text-sm">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;