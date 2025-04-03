import React from 'react';

const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center justify-center">
    <div className="max-w-[90%] sm:max-w-xl md:max-w-2xl mx-auto text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight text-balance">
        Sleepwalker<br />Software
      </h1>

    <p className="text-lg md:text-xl text-gray-400 mb-8">
      Smart tools built in the shadows. We craft powerful automation and analytics tools for teams who work like nightfall — quiet, focused, unstoppable.
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
      <button
        onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
        className="px-6 py-3 border border-white text-white rounded-xl font-semibold hover:bg-white hover:text-black transition"
      >
        Save Time
      </button>

      <button
        onClick={() => {
          const el = document.getElementById('contact');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="px-6 py-3 border border-white text-white rounded-xl font-semibold hover:bg-white hover:text-black transition"
      >
        Contact Us
      </button>
      </div>
    </div>
  </div>

  );
};

export default Homepage;
