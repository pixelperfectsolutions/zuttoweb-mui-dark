import React from 'react';

const Footer: React.FC = () => (
  <footer className="w-full bg-[#f5efe6] text-[#181511] pt-10 pb-4 px-4 border-t border-[#e5d6be] mt-8">
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-6">
      {/* Primary Row: Four Columns, always horizontal */}
      <div className="w-full flex flex-row gap-6 pb-6 border-b border-[#e5d6be]">
        {/* Column 1: Links */}
        <div className="w-1/4 min-w-[40px]">
          <h3 className="font-bold mb-3 text-lg">Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/travel-hub" className="hover:underline">Travel Hub</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
      
        {/* Column 3: Contact */}
        <div className="w-1/4 flex flex-col items-end text-right justify-center min-w-[40px]">
          <h3 className="font-bold mb-3 text-lg">Contact</h3>
          <p className="text-sm flex items-center gap-1"><span role="img" aria-label="location">📍</span> Coimbatore, India</p>
          <a href="mailto:support@zutto.in" className="text-sm text-[#1a237e] hover:underline flex items-center gap-1 mt-1"><span role="img" aria-label="email">✉️</span> support@zutto.in</a>
        </div>
        {/* Column 4: Support/Social */}
        <div className="w-1/4 flex flex-col items-end text-right justify-center min-w-[40px]">
          <h3 className="font-bold mb-3 text-lg">Support</h3>
          <a href="mailto:support@zutto.in" className="text-sm text-[#1a237e] hover:underline flex items-center gap-1 mb-2"><span role="img" aria-label="email">✉️</span> support@zutto.in</a>
          <div className="flex gap-2 justify-end">
            <a href="#" className="text-[#1a237e] hover:underline text-sm">Instagram</a>
            <a href="#" className="text-[#1a237e] hover:underline text-sm">LinkedIn</a>
            <a href="#" className="text-[#1a237e] hover:underline text-sm">Twitter</a>
          </div>
        </div>
      </div>
      {/* Secondary Row: Three Columns, always horizontal */}
      <div className="w-full flex flex-row gap-4 pt-4 text-xs text-[#6b6b6b] items-center">
        <div className="flex-1 flex justify-start">
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
        </div>
        <div className="flex-1 flex justify-center">
          <a href="/terms" className="hover:underline">Terms of Service</a>
        </div>
        <div className="flex-1 flex justify-end">
          &copy; {new Date().getFullYear()} <b>ZUTTO</b>. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
