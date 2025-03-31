import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-6 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Get in Touch</h2>
      <p className="text-gray-400 max-w-xl text-center mb-10">
        Have questions, ideas, or want to collaborate? Drop us a line — we’d love to hear from you.
      </p>
            <form
        className="w-full max-w-md flex flex-col gap-4"
        action="https://formspree.io/f/xyzedlvd"
        method="POST"
        >
        <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white"
            required
        />
        <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white"
            required
        />
        <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white"
            required
        />
        <button
            type="submit"
            className="bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition"
        >
            Send Message
        </button>
        </form>

    </section>
  );
};

export default Contact;
