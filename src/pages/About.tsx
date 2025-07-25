import React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

const About: React.FC = () => (
  <div style={{ maxWidth: 1300, margin: '0 auto', padding: '4rem 1.5rem', background: '#18191A', color: 'white', fontFamily: 'Roboto, Arial, sans-serif' }}>
  {/* The Story Behind ZUTTO */}
  <Paper elevation={6} sx={{ p: { xs: 4, md: 6 }, mt: 0, mb: 10, background: '#23272F', color: 'white', borderRadius: 4 }}>
    <h1 style={{ fontFamily: 'Montserrat, Roboto, Arial, sans-serif', fontWeight: 700, fontSize: '2.25rem', marginBottom: '1rem', color: 'white' }}>The Story Behind ZUTTO: Why ZUTTO?</h1>
    <p style={{ fontFamily: 'Roboto, Arial, sans-serif', fontSize: '1.125rem', marginBottom: '1rem', color: 'white' }}>
      The idea for ZUTTO was born from a frustrating travel experience faced by our founder’s father, who was denied lounge entry due to unclear card eligibility.
      Sharing this experience with his son, they recognized a common challenge many travelers face, and together, they created ZUTTO to solve it.
      With a vision to simplify lounge access and offer clarity, ZUTTO was built to transform airport experiences across India.
    </p>
  </Paper>

  {/* Founder's Message */}
  <Paper elevation={6} sx={{ p: { xs: 4, md: 6 }, mt: 10, mb: 10, background: '#23272F', color: 'white', borderRadius: 4 }}>
    <h2 style={{ fontFamily: 'Montserrat, Roboto, Arial, sans-serif', fontWeight: 600, fontSize: '1.5rem', marginBottom: '0.75rem', color: '#ffeb3b' }}>Founder’s Message</h2>
    <blockquote style={{ fontFamily: 'Roboto, Arial, sans-serif', fontSize: '1.15rem', fontStyle: 'italic', color: 'white', marginBottom: '1rem', borderLeft: '4px solid #ffeb3b', paddingLeft: '1rem' }}>
      “ZUTTO was born from a moment of frustration, when my father was denied lounge access due to unclear card eligibility. What seemed like a minor inconvenience revealed a major gap in the travel experience. That moment sparked a vision to build something meaningful.<br/><br/>
      Together, we created ZUTTO—a platform built on the pillars of clarity, convenience, and premium travel. This is just the beginning of a smarter way to travel.”
    </blockquote>
    <div style={{ fontWeight: 700, color: '#ffeb3b', fontFamily: 'Montserrat, Roboto, Arial, sans-serif', marginBottom: 8 }}>— Varshan Kannan, Founder & CEO</div>
    <div style={{ fontFamily: 'Roboto, Arial, sans-serif', fontSize: '1.05rem', color: 'white' }}>
      Every journey tells a story—and for ZUTTO, it began with one that hit close to home...
    </div>
  </Paper>

  {/* Vision & Mission + Journey & Products (4-card layout) */}
  <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} sx={{ mt: 10, mb: 10 }}>
    {/* Vision Card */}
    <Paper elevation={6} sx={{ flex: 1, p: { xs: 4, md: 6 }, background: '#23272F', color: 'white', borderRadius: 4, mb: { xs: 4, md: 0 } }}>
      <h2 style={{ fontFamily: 'Montserrat, Roboto, Arial, sans-serif', fontWeight: 600, fontSize: '1.5rem', marginBottom: '0.5rem', color: '#ffeb3b' }}>Vision</h2>
      <p style={{ fontFamily: 'Roboto, Arial, sans-serif', fontSize: '1.1rem', color: 'white' }}>
        To transform air travel by making airport lounges accessible, comfortable, and clear for every traveler. At ZUTTO, we aim to ensure every journey begins with peace of mind and every traveler enjoys the luxury they deserve.
      </p>
    </Paper>
    {/* Mission Card */}
    <Paper elevation={6} sx={{ flex: 1, p: { xs: 4, md: 6 }, background: '#23272F', color: 'white', borderRadius: 4 }}>
      <h2 style={{ fontFamily: 'Montserrat, Roboto, Arial, sans-serif', fontWeight: 600, fontSize: '1.5rem', marginBottom: '0.5rem', color: '#ffeb3b' }}>Mission</h2>
      <p style={{ fontFamily: 'Roboto, Arial, sans-serif', fontSize: '1.1rem', color: 'white' }}>
        Our mission is to remove confusion around lounge access, offering a seamless and stress-free experience. ZUTTO empowers travelers with clarity and convenience, ensuring they can confidently enjoy their journey with premium access.
      </p>
    </Paper>
  </Stack>
    {/* Our Journey Section */}
  <Paper elevation={6} sx={{ p: { xs: 4, md: 6 }, background: '#23272F', color: 'white', borderRadius: 4, mb: 10 }}>
    <h2 style={{ fontFamily: 'Montserrat, Roboto, Arial, sans-serif', fontWeight: 600, fontSize: '1.5rem', marginBottom: '0.5rem', color: '#ffeb3b' }}>Our Journey</h2>
    <ul style={{ fontFamily: 'Roboto, Arial, sans-serif', fontSize: '1.1rem', color: 'white', listStyle: 'none', paddingLeft: 0 }}>
      <li style={{ marginBottom: 6 }}>📍 <b>Nov 2024</b> – The idea for ZUTTO was born.</li>
      <li style={{ marginBottom: 6 }}>⚡ <b>Jan 2025</b> – Product development began with a passionate team.</li>
      <li style={{ marginBottom: 6 }}>🔧 <b>Jan – July 2025</b> – Research, testing & refinement.</li>
      <li>🚀 <b>Aug / September 2025</b> – Official launch, transforming lounge access in India.</li>
    </ul>
  </Paper>
  {/* Products & Services 4-card layout */}
  <h2 style={{ fontFamily: 'Montserrat, Roboto, Arial, sans-serif', fontWeight: 700, fontSize: '1.5rem', marginBottom: '1.5rem', color: '#ffeb3b' }}>Products & Services</h2>
  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} sx={{ width: '100%' }}>
    <Paper elevation={6} sx={{ flex: 1, p: { xs: 4, md: 6 }, background: '#23272F', color: 'white', borderRadius: 4, mb: { xs: 4, sm: 0 } }}>
      <h3 style={{ fontFamily: 'Montserrat, Roboto, Arial, sans-serif', fontWeight: 600, fontSize: '1.2rem', marginBottom: '0.5rem', color: '#ffeb3b' }}>Lounge Access Checker</h3>
      <p style={{ fontFamily: 'Roboto, Arial, sans-serif', fontSize: '1.05rem', color: 'white' }}>Instantly find eligible lounges.</p>
    </Paper>
    <Paper elevation={6} sx={{ flex: 1, p: { xs: 4, md: 6 }, background: '#23272F', color: 'white', borderRadius: 4, mb: { xs: 4, sm: 0 } }}>
      <h3 style={{ fontFamily: 'Montserrat, Roboto, Arial, sans-serif', fontWeight: 600, fontSize: '1.2rem', marginBottom: '0.5rem', color: '#ffeb3b' }}>Card Benefits & Eligibility</h3>
      <p style={{ fontFamily: 'Roboto, Arial, sans-serif', fontSize: '1.05rem', color: 'white' }}>Understand terms, limits, and offers.</p>
    </Paper>
    <Paper elevation={6} sx={{ flex: 1, p: { xs: 4, md: 6 }, background: '#23272F', color: 'white', borderRadius: 4, mb: { xs: 4, sm: 0 } }}>
      <h3 style={{ fontFamily: 'Montserrat, Roboto, Arial, sans-serif', fontWeight: 600, fontSize: '1.2rem', marginBottom: '0.5rem', color: '#ffeb3b' }}>Seamless Travel Experience</h3>
      <p style={{ fontFamily: 'Roboto, Arial, sans-serif', fontSize: '1.05rem', color: 'white' }}>Plan ahead and avoid surprises.</p>
    </Paper>
    <Paper elevation={6} sx={{ flex: 1, p: { xs: 4, md: 6 }, background: '#23272F', color: 'white', borderRadius: 4 }}>
      <h3 style={{ fontFamily: 'Montserrat, Roboto, Arial, sans-serif', fontWeight: 600, fontSize: '1.2rem', marginBottom: '0.5rem', color: '#ffeb3b' }}>Coming Soon</h3>
      <p style={{ fontFamily: 'Roboto, Arial, sans-serif', fontSize: '1.05rem', color: 'white' }}>More features, wider coverage & brand partnerships.</p>
    </Paper>
  </Stack>
  {/* All text color forced to white below */}
  </div>
);

export default About;
