import React from 'react';

const FAQ: React.FC = () => (
  <div style={{ maxWidth: 1300, margin: '0 auto', padding: '4rem 1.5rem', background: '#18191A', color: 'white', fontFamily: 'Roboto, Arial, sans-serif' }}>
    <h1 style={{ fontFamily: 'Montserrat, Roboto, Arial, sans-serif', fontWeight: 700, fontSize: '2.25rem', marginBottom: '1rem', color: 'white' }}>Frequently Asked Questions</h1>
    <ul className="space-y-8">
      <li>
        <h2 style={{ fontFamily: 'Montserrat, Roboto, Arial, sans-serif', fontWeight: 600, fontSize: '1.25rem', marginBottom: '0.5rem', color: 'white' }}>How does ZUTTO work?</h2>
        <p style={{ fontFamily: 'Roboto, Arial, sans-serif', fontSize: '1.125rem', color: 'white' }}>ZUTTO instantly checks your card’s lounge access eligibility and provides clarity on travel benefits.</p>
      </li>
      <li>
        <h2 style={{ fontFamily: 'Montserrat, Roboto, Arial, sans-serif', fontWeight: 600, fontSize: '1.25rem', marginBottom: '0.5rem', color: 'white' }}>Which cards are supported?</h2>
        <p style={{ fontFamily: 'Roboto, Arial, sans-serif', fontSize: '1.125rem', color: 'white' }}>We support a wide range of credit and debit cards across India. Please check the app for the latest list.</p>
      </li>
      <li>
        <h2 style={{ fontFamily: 'Montserrat, Roboto, Arial, sans-serif', fontWeight: 600, fontSize: '1.25rem', marginBottom: '0.5rem', color: 'white' }}>Is lounge access free with every card?</h2>
        <p style={{ fontFamily: 'Roboto, Arial, sans-serif', fontSize: '1.125rem', color: 'white' }}>Not all cards offer free lounge access. ZUTTO helps you understand your card’s specific terms and benefits.</p>
      </li>
    </ul>
  </div>
);

export default FAQ;
