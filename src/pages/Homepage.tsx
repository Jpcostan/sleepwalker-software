import React from 'react';

const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center justify-center">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          Sleepwalker Software
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8">
          Smart tools built in the shadows. We craft powerful automation and analytics tools for teams who work like nightfall — quiet, focused, unstoppable.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-white text-black rounded-xl font-semibold shadow-md hover:bg-gray-200 transition">
            Learn More
          </button>
          <button className="px-6 py-3 border border-white text-white rounded-xl font-semibold hover:bg-white hover:text-black transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
