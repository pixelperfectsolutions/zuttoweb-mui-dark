import React from 'react';

const Footer: React.FC = () => (
  <footer className="w-full bg-[#ddc8aa] text-[#181511] py-6 px-4 shadow-lg mt-8 text-center">
    <p className="font-roboto text-sm mb-2">
      &copy; {new Date().getFullYear()} <b>ZUTTO</b>. All rights reserved.
    </p>

    <div className="flex items-center justify-center space-x-4 mb-2 font-roboto text-sm">
      <a href="/privacy" className="hover:text-yellow-400 font-medium transition-colors">
        Privacy Policy
      </a>
      <span className="opacity-50">|</span>
      <a href="/terms" className="hover:text-yellow-400 font-medium transition-colors">
        Terms of Service
      </a>
      <span className="opacity-50">|</span>
      <a href="mailto:support@zutto.in" className="hover:text-yellow-400 font-medium transition-colors flex items-center space-x-1">
        <span>✉️</span>
        <span>support@zutto.in</span>
      </a>
    </div>

    <p className="font-roboto text-sm flex items-center justify-center gap-1">
      Made with <span className="animate-pulse text-red-500">❤</span> in Coimbatore, India
    </p>
  </footer>
);

export default Footer;
