import React from 'react';

const Contact: React.FC = () => (
  <div style={{ maxWidth: 1300, margin: '0 auto', padding: '4rem 1.5rem', background: '#18191A', color: 'white', fontFamily: 'Roboto, Arial, sans-serif' }}>
    <h1 style={{ fontFamily: 'Montserrat, Roboto, Arial, sans-serif', fontWeight: 700, fontSize: '2.25rem', marginBottom: '1rem', color: 'white' }}>Contact Us</h1>
    <p style={{ fontFamily: 'Roboto, Arial, sans-serif', fontSize: '1.125rem', marginBottom: '1.5rem', color: 'white' }}>Let’s connect. Whether you have a query, feedback, or partnership interest, we’d love to hear from you.</p>
    <div className="mb-4">
      <span className="font-semibold">Email:</span> <a href="mailto:support@zutto.in" className="text-white hover:underline">support@zutto.in</a>
    </div>
    <div className="mb-4">
      <span className="font-semibold">Location:</span> Coimbatore, India
    </div>
    <div className="mb-4">
      <span className="font-semibold">Follow Us:</span>
      <div className="flex gap-4 mt-2">
        <a href="#" className="text-white hover:underline">Instagram</a>
        <a href="#" className="text-white hover:underline">LinkedIn</a>
        <a href="#" className="text-white hover:underline">Twitter</a>
      </div>
    </div>
  </div>
);

export default Contact;
