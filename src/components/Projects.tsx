import React from 'react';
import { ExternalLink, Github, Smartphone, Globe, Blocks } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "DeFi Portfolio Tracker",
      description: "A comprehensive dApp for tracking DeFi investments across multiple chains with real-time portfolio analytics and yield farming insights.",
      technologies: ["React", "Web3.js", "Solidity", "Node.js", "MongoDB"],
      category: "dApp",
      status: "In Development",
      icon: <Blocks className="w-6 h-6" />
    },
    {
      title: "Modern E-Commerce Platform",
      description: "Full-stack e-commerce solution with advanced features like real-time inventory, payment processing, and admin dashboard.",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind"],
      category: "Web App",
      status: "Coming Soon",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "NFT Marketplace",
      description: "Decentralized marketplace for creating, buying, and selling NFTs with integrated wallet support and IPFS storage.",
      technologies: ["React", "Ethers.js", "IPFS", "Smart Contracts", "MetaMask"],
      category: "dApp",
      status: "Planning",
      icon: <Blocks className="w-6 h-6" />
    },
    {
      title: "Task Management Dashboard",
      description: "Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics.",
      technologies: ["React", "Express.js", "Socket.io", "MongoDB", "Chart.js"],
      category: "Web App",
      status: "Concept",
      icon: <Smartphone className="w-6 h-6" />
    }
  ];

  const getStatusColor = (status: string) => {
    const statusColors = {
      "In Development": "bg-blue-100 text-blue-800",
      "Coming Soon": "bg-green-100 text-green-800",
      "Planning": "bg-yellow-100 text-yellow-800",
      "Concept": "bg-purple-100 text-purple-800"
    };
    return statusColors[status as keyof typeof statusColors] || "bg-gray-100 text-gray-800";
  };

  const getCategoryColor = (category: string) => {
    return category === "dApp" 
      ? "bg-gradient-to-r from-purple-500 to-indigo-600" 
      : "bg-gradient-to-r from-blue-500 to-teal-600";
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of upcoming projects spanning web applications 
            and decentralized solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className={`${getCategoryColor(project.category)} text-white p-3 rounded-lg`}>
                    {project.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-colors">
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Demo</span>
                  </button>
                </div>
              </div>
              
              <div className="h-1 bg-gradient-to-r from-blue-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              More Projects Coming Soon
            </h3>
            <p className="text-gray-600 mb-6">
              I'm constantly working on new and exciting projects. Check back regularly 
              for updates, or follow me on social media to stay in the loop!
            </p>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
            >
              <span>Get Updates</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;