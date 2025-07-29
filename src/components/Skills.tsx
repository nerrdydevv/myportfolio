import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      color: "blue",
      skills: [
        "React", "TypeScript", "Next.js", "Tailwind CSS", 
        "JavaScript", "HTML5", "CSS3", "Responsive Design"
      ]
    },
    {
      title: "Backend Development",
      color: "teal",
      skills: [
        "Node.js", "Express.js", "Python", "RESTful APIs", 
        "GraphQL", "Database Design", "MongoDB", "PostgreSQL"
      ]
    },
    {
      title: "Blockchain & Web3",
      color: "purple",
      skills: [
        "Solidity", "Ethereum", "Smart Contracts", "Web3.js", 
        "Ethers.js", "MetaMask Integration", "IPFS", "DeFi Protocols"
      ]
    },
    {
      title: "Tools & Technologies",
      color: "green",
      skills: [
        "Git", "Docker", "AWS", "Vercel", "Webpack", 
        "Jest", "Cypress", "Figma", "VS Code"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800",
      teal: "from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800",
      purple: "from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800",
      green: "from-green-500 to-green-700 hover:from-green-600 hover:to-green-800"
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit spanning traditional web development 
            and cutting-edge blockchain technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`inline-block bg-gradient-to-r ${getColorClasses(category.color)} text-white px-4 py-2 rounded-full text-sm font-semibold mb-6`}>
                {category.title}
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-gray-50 px-4 py-3 rounded-lg text-center text-gray-700 font-medium hover:bg-gray-100 transition-colors duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Currently Learning
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Rust", "Move Language", "Layer 2 Solutions", "DeFi Protocols", 
                "NFT Standards", "Cross-chain Development", "Zero-Knowledge Proofs"
              ].map((skill, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;