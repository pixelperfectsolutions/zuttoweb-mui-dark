import React from 'react';

const Contact: React.FC = () => (
  <div className="flex flex-1 justify-center items-center bg-[#f5efe6] py-10 px-2 pt-24" style={{ paddingTop: '6rem' }}>
    <div className="w-full max-w-lg bg-[#ddc8aa] rounded-2xl shadow-xl p-8 md:p-12 border border-[#e5d6be] flex flex-col items-center text-center">
      <h1 className="font-bold text-3xl md:text-4xl mb-4 text-[#181511] font-['Montserrat','Roboto','Arial',sans-serif]">Contact Us</h1>
      <p className="text-lg mb-8 text-[#3a2e1a] font-roboto">Let’s connect. Whether you have a query, feedback, or partnership interest, we’d love to hear from you.</p>
      <div className="flex flex-col gap-5 w-full">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-lg">
          <span role="img" aria-label="email"></span>
          <span className="font-semibold text-[#181511]">Email:</span>
          <a href="mailto:support@zutto.in" className="text-[#1a237e] hover:underline font-medium">support@zutto.in</a>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-lg">
          <span role="img" aria-label="location"></span>
          <span className="font-semibold text-[#181511]">Location:</span>
          <span className="text-[#3a2e1a]">Coimbatore, India</span>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-lg">
          <span role="img" aria-label="follow"></span>
          <span className="font-semibold text-[#181511]">Follow Us:</span>
          <a href="#" className="text-[#1a237e] hover:underline font-medium">Instagram</a>
          <a href="#" className="text-[#1a237e] hover:underline font-medium">LinkedIn</a>
          <a href="#" className="text-[#1a237e] hover:underline font-medium">Twitter</a>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
