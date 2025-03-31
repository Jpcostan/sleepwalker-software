import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch('https://formspree.io/f/xyzedlvd', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    });

    if (res.ok) {
      setStatus('success');
      form.reset();
    } else {
      setStatus('error');
    }
  };

  return (
    <section className="bg-black text-white py-16 px-6 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Get in Touch</h2>
      <p className="text-gray-400 max-w-xl text-center mb-10">
        Have questions, ideas, or want to collaborate? Drop us a line — we’d love to hear from you.
      </p>

      <form className="w-full max-w-md flex flex-col gap-4" onSubmit={handleSubmit}>
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
        {status === 'success' && (
          <p className="text-green-400 text-sm mt-2">Thanks! Your message has been sent. 🌙</p>
        )}
        {status === 'error' && (
          <p className="text-red-500 text-sm mt-2">Oops! Something went wrong. Try again later.</p>
        )}
      </form>
    </section>
  );
};

export default Contact;
