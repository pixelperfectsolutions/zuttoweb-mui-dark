import React from 'react';

const TravelHub: React.FC = () => (
  <div style={{ maxWidth: 1300, margin: '0 auto', padding: '4rem 1.5rem', background: '#18191A', color: 'white', fontFamily: 'Roboto, Arial, sans-serif' }}>
    <section>
      <h1 style={{ fontFamily: 'Montserrat, Roboto, Arial, sans-serif', fontWeight: 700, fontSize: '2.25rem', marginBottom: '1rem', color: 'white' }}>Travel Hub – News, Tips & Stories</h1>
      <p style={{ fontFamily: 'Roboto, Arial, sans-serif', fontSize: '1.125rem', marginBottom: '1.5rem', color: 'white' }}>Your go-to space for updates, insider news, and travel insights.</p>
      <div className="mb-8">
        <h2 style={{ fontFamily: 'Montserrat, Roboto, Arial, sans-serif', fontWeight: 600, fontSize: '1.5rem', marginBottom: '0.5rem', color: 'white' }}>Travel News</h2>
        <p style={{ fontFamily: 'Roboto, Arial, sans-serif', fontSize: '1.125rem', color: 'white' }}>Stay informed on lounge openings, travel restrictions, and aviation trends.</p>
      </div>
      <div className="mb-8">
        <h2 style={{ fontFamily: 'Montserrat, Roboto, Arial, sans-serif', fontWeight: 600, fontSize: '1.5rem', marginBottom: '0.5rem', color: 'white' }}>Pro Travel Tips</h2>
        <ul style={{ fontFamily: 'Roboto, Arial, sans-serif', fontSize: '1.125rem', marginLeft: '2rem', color: 'white' }}>
          <li>💼 Maximize Your Lounge Visit – Enjoy all the perks, from gourmet meals to spa access.</li>
          <li>🛃 Airport Hacks – Navigate terminals like a pro.</li>
          <li>🌍 Top Destinations – Curated global hotspots and hidden gems.</li>
        </ul>
      </div>
      <div>
        <h2 style={{ fontFamily: 'Montserrat, Roboto, Arial, sans-serif', fontWeight: 600, fontSize: '1.5rem', marginBottom: '0.5rem', color: 'white' }}>Featured Travel Stories</h2>
        <p style={{ fontFamily: 'Roboto, Arial, sans-serif', fontSize: '1.125rem', color: 'white' }}>Be inspired by real travelers—business flyers, adventurers, and global wanderers—sharing their luxurious and stress-free journeys with ZUTTO.</p>
      </div>
    </section>
  </div>
);

export default TravelHub;
