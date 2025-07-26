import React from 'react';

const Privacy: React.FC = () => (
  <div style={{ maxWidth: 1300, margin: '0 auto', padding: '4rem 1.5rem', background: '#ddc8aa', color: '#181511', fontFamily: 'Roboto, Arial, sans-serif' }}>
    <h1 style={{ fontFamily: 'Montserrat, Roboto, Arial, sans-serif', fontWeight: 700, fontSize: '2.25rem', marginBottom: '1rem', color: 'white' }}>Privacy Policy</h1>
    <p style={{ fontFamily: 'Roboto, Arial, sans-serif', fontSize: '1.125rem', marginBottom: '1rem', color: 'white' }}>ZUTTO respects your privacy. We collect only what’s essential to provide you with the best experience.</p>
    <a href="#" className="text-white underline" style={{ fontFamily: 'Roboto, Arial, sans-serif', fontSize: '1.125rem', color: 'white' }}>Read Full Privacy Policy</a>
  </div>
);

export default Privacy;
