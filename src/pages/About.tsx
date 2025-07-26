import React from 'react';

const About: React.FC = () => (
  <div className="w-full max-w-[1300px] mx-auto py-16 px-4 bg-[#ddc8aa] text-[#181511] font-roboto">
    {/* The Story Behind ZUTTO */}
    <section className="mb-10 p-8 rounded-lg bg-white text-[#181511] shadow-lg">
      <h1 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">The Story Behind ZUTTO: Why ZUTTO?</h1>
      <p className="font-roboto text-lg mb-2 text-[#23272F]">
        The idea for ZUTTO was born from a frustrating travel experience faced by our founder’s father, who was denied lounge entry due to unclear card eligibility.<br/>
        Sharing this experience with his son, they recognized a common challenge many travelers face, and together, they created ZUTTO to solve it.<br/>
        With a vision to simplify lounge access and offer clarity, ZUTTO was built to transform airport experiences across India.
      </p>
    </section>

    {/* Founder's Message */}
    <section className="mb-10 p-8 rounded-lg bg-neutral-800 text-white shadow-lg">

    <h2 className="font-montserrat font-semibold text-xl mb-3 text-yellow-400">Founder’s Message</h2>
    <blockquote className="font-roboto italic text-lg text-white mb-4 border-l-4 border-yellow-400 pl-4">
      “ZUTTO was born from a moment of frustration, when my father was denied lounge access due to unclear card eligibility. What seemed like a minor inconvenience revealed a major gap in the travel experience. That moment sparked a vision to build something meaningful.<br/><br/>
      Together, we created ZUTTO—a platform built on the pillars of clarity, convenience, and premium travel. This is just the beginning of a smarter way to travel.”
    </blockquote>
    <div className="font-montserrat font-bold text-yellow-400 mb-2">— Varshan Kannan, Founder & CEO</div>
    <div className="font-roboto text-base text-white">
      Every journey tells a story—and for ZUTTO, it began with one that hit close to home...
    </div>
  </section>

  {/* Vision & Mission Cards */}
  <section className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Vision Card */}
    <div className="bg-white rounded-lg shadow-lg p-8 text-[#181511]">
      <h2 className="font-montserrat font-bold text-xl mb-2 text-yellow-400">Vision</h2>
      <p className="font-roboto text-base">
        To transform air travel by making airport lounges accessible, comfortable, and clear for every traveler. At ZUTTO, we aim to ensure every journey begins with peace of mind and every traveler enjoys the luxury they deserve.
      </p>
    </div>
    {/* Mission Card */}
    <div className="bg-white rounded-lg shadow-lg p-8 text-[#181511]">
      <h2 className="font-montserrat font-bold text-xl mb-2 text-yellow-400">Mission</h2>
      <p className="font-roboto text-base">
        Our mission is to remove confusion around lounge access, offering a seamless and stress-free experience. ZUTTO empowers travelers with clarity and convenience, ensuring they can confidently enjoy their journey with premium access.
      </p>
    </div>
  </section>
  {/* Our Journey Section */}
    <section className="mb-10 p-8 rounded-lg bg-white text-[#181511] shadow-lg">
      <h2 className="font-montserrat font-bold text-xl md:text-2xl mb-6 text-yellow-400">Our Journey</h2>
      <ul className="font-roboto text-base ml-6 list-disc">
        <li className="mb-1">🔍 <b>2023-24</b> – Identified the problem, mapped the travel pain points.</li>
        <li className="mb-1">💡 <b>Late 2024</b> – Conceptualized ZUTTO, built the founding team.</li>
        <li className="mb-1">🔧 <b>Jan – July 2025</b> – Research, testing & refinement.</li>
        <li>🚀 <b>Aug / September 2025</b> – Official launch, transforming lounge access in India.</li>
      </ul>
    </section>

    {/* Products & Services 4-card layout */}
    <section className="mb-10">
      <h2 className="font-montserrat font-bold text-xl md:text-2xl mb-6 text-yellow-400">Products & Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6 text-[#181511]">
          <h3 className="font-montserrat font-bold text-lg mb-2 text-yellow-400">Lounge Eligibility Checker</h3>
          <p className="font-roboto text-base text-[#181511]">
            Instantly check if your card is eligible for airport lounge access.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-[#181511]">
          <h3 className="font-montserrat font-bold text-lg mb-2 text-yellow-400">Lounge Finder</h3>
          <p className="font-roboto text-base text-[#181511]">
            Find lounges at airports across India with details and access info.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-[#181511]">
          <h3 className="font-montserrat font-bold text-lg mb-2 text-yellow-400">Travel Insights</h3>
          <p className="font-roboto text-base text-[#181511]">
            Get travel tips, news, and updates for a seamless journey.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-[#181511]">
          <h3 className="font-montserrat font-bold text-lg mb-2 text-yellow-400">Rewards & Offers</h3>
          <p className="font-roboto text-base text-[#181511]">
            Discover exclusive rewards and offers for ZUTTO users.
          </p>
        </div>
      </div>
    </section>

    {/* More Products & Services */}
    <section className="mb-10">
      <h2 className="font-montserrat font-bold text-xl md:text-2xl mb-6 text-yellow-400">More Products & Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6 text-[#181511]">
          <h3 className="font-montserrat font-bold text-lg mb-2 text-yellow-400">Lounge Access Checker</h3>
          <p className="font-roboto text-base text-[#181511]">
            Instantly find eligible lounges.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-[#181511]">
          <h3 className="font-montserrat font-bold text-lg mb-2 text-yellow-400">Card Benefits & Eligibility</h3>
          <p className="font-roboto text-base text-[#181511]">
            Understand terms, limits, and offers.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-[#181511]">
          <h3 className="font-montserrat font-bold text-lg mb-2 text-yellow-400">Seamless Travel Experience</h3>
          <p className="font-roboto text-base text-[#181511]">
            Plan ahead and avoid surprises.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-[#181511]">
          <h3 className="font-montserrat font-bold text-lg mb-2 text-yellow-400">Coming Soon</h3>
          <p className="font-roboto text-base text-[#181511]">
            More features, wider coverage & brand partnerships.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default About;
