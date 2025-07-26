import React from 'react';

const Testimonials: React.FC = () => (
  <div style={{ maxWidth: 1300, margin: '0 auto', padding: '4rem 1.5rem', background: '#ddc8aa', color: '#181511', fontFamily: 'Roboto, Arial, sans-serif' }}>
    <h1 style={{ fontFamily: 'Montserrat, Roboto, Arial, sans-serif', fontWeight: 700, fontSize: '2.25rem', marginBottom: '1rem', color: 'white' }}>Testimonials</h1>
    <div className="mb-8">
      <blockquote className="border-l-4 border-blue-400 pl-4 italic text-white mb-4" style={{ fontFamily: 'Roboto, Arial, sans-serif', fontSize: '1.125rem' }}>
        “ZUTTO helped me avoid a huge hassle on a business trip. The app knew exactly which terminal my card worked in!”
        <span className="block font-bold mt-2">— Anil R., Frequent Flyer</span>
      </blockquote>
      <blockquote className="border-l-4 border-blue-400 pl-4 italic text-white mb-4" style={{ fontFamily: 'Roboto, Arial, sans-serif', fontSize: '1.125rem' }}>
        “Love the clarity ZUTTO gives. No more guessing or last-minute confusion.”
        <span className="block font-bold mt-2">— Meera S., Solo Traveler</span>
      </blockquote>
      {/* Add more testimonials as they come in */}
    </div>
    <div className="text-sm text-white" style={{ fontFamily: 'Roboto, Arial, sans-serif', color: 'white' }}>(This page will go live when more testimonials are ready.)</div>
  </div>
);

export default Testimonials;
