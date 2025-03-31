import React from 'react';

type Project = {
  title: string;
  description: string;
  image: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: 'Morphlings',
    description: 'An NFT minting application for ImmutibleX',
    image: '/images/Morphlings.png',
    link: 'https://www.immutable.com/products/immutable-x',
  },
  {
    title: 'Rent Scanner',
    description: 'Python automation software for scanning physical state goverment rent record data into Excel files.',
    image: '/images/RentScanner.pngclear',
  },
  {
    title: 'G434 (Gaea)',
    description: 'A python script that creates a set of NFTs with metadata, along with adding in customization for the user.',
    image: '/images/gaea.png',
  },
  // Add more...
];

const Portfolio: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  className="text-blue-400 text-sm mt-2 inline-block hover:underline"
                >
                  View Project →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
