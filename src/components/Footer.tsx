import { FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mt-16 pt-6 border-t border-white text-center text-sm text-gray-400">
    <p className="mb-2 text-gray-300">📧 info@sleepwalkersoft.com • 📞 (305) 833-5389</p>
      <div className="flex justify-center gap-4 mt-3">
        <a
          href="mailto:info@sleepwalkersoft.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <FaEnvelope size={20} />
        </a>
        {/* <a
          href="https://twitter.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <FaTwitter size={20} />
        </a>
        <a
          href="https://linkedin.com/in/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <FaLinkedin size={20} />
        </a> */}
      </div>
      <p className="mt-4 opacity-50 text-xs">
        © {new Date().getFullYear()} Sleepwalker Software. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
