import React from 'react';

const Home: React.FC = () => (
  <>
    {/* Hero Image Only */}
    <div className="w-full min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/hero-bg.jpg)' }} />

    {/* Main Content Below Hero */}
    <div className="w-full max-w-[1300px] mx-auto py-10 px-4 text-[#181511] font-sans">
      {/* Hero Section Content (now below image) */}
      <section className="w-full flex flex-col items-center justify-center text-center py-14 mb-8">
        <h1 className="font-montserrat text-[#181511] text-3xl md:text-5xl font-bold tracking-wide mb-2">
          ZUTTO – REWARDS UN.LTD
        </h1>
        <h2 className="font-montserrat text-[#181511] text-xl md:text-2xl font-normal mb-3">
          Maximize Your Lounge Access – Instantly
        </h2>
        <p className="font-roboto text-base md:text-lg text-[#181511] mb-4 max-w-xl mx-auto">
          Your trusted companion for seamless airport lounge access across India.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mb-3 justify-center">
          <a href="#" className="px-8 py-3 rounded bg-yellow-400 hover:bg-yellow-300 text-[#181511] font-semibold font-montserrat text-lg shadow transition">
            Download App
          </a>
          <a href="#" className="px-8 py-3 rounded border-2 border-yellow-400 hover:border-yellow-300 hover:bg-yellow-100 text-[#181511] font-semibold font-montserrat text-lg transition">
            Learn More
          </a>
        </div>
      </section>

      <a
        href="#"
        className="inline-block px-6 py-2 font-montserrat font-bold text-base rounded-full text-[#181511] bg-yellow-400 shadow-md transition-colors duration-300 hover:bg-yellow-300"
      >
        Download on Google Play
      </a>

      {/* Intro Section */}
      <section className="flex flex-col md:flex-row items-start p-8 mb-10 bg-gradient-to-r from-neutral-800 via-neutral-800 to-yellow-100/20 border-l-8 border-yellow-400 rounded-lg shadow-lg relative overflow-hidden">
        <div className="mr-6 mt-1 hidden md:block">
          {/* Icon removed for now. Add SVG or emoji if needed */}
          <span className="text-5xl mb-1 block text-yellow-400">🛋️</span>
        </div>
        <div className="flex-1">
          <p className="font-roboto text-base md:text-lg text-[#181511]">
            In today’s fast-paced world of air travel, every moment counts.<br />
            <span className="text-yellow-400 font-bold">At ZUTTO</span>, we believe your journey should begin with comfort, convenience, and premium experiences.
          </p>
          <p className="font-roboto text-yellow-400 italic text-base md:text-lg mt-2">
            It’s not just an app, it’s a gateway to stress-free travel.
          </p>
        </div>
      </section>
    </div>
  </>
);

export default Home;
