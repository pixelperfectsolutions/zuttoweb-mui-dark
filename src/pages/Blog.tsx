import React from "react";
import BlogList from "../components/BlogList";
import { blogPosts } from "../data/blogPosts";
import SEO from "../components/SEO";

const Blog: React.FC = () => {
  return (
    <>
      <SEO
        title="Blog - ZUTTO | Travel Rewards & Credit Card Insights"
        description="Discover expert insights on maximizing travel rewards, credit card benefits, and airport lounge access. Learn strategies to make the most of your travel spending."
        keywords="travel rewards, credit cards, airport lounges, travel benefits, points, miles, credit card perks"
        canonical="/blog"
      />
      <div style={{ paddingTop: "80px", minHeight: "100vh" }}>
        <BlogList 
          posts={blogPosts}
          showFeatured={true}
          title="Travel Rewards & Credit Card Insights"
          subtitle="Expert tips and strategies to maximize your travel benefits, unlock hidden perks, and make every journey more rewarding"
        />
      </div>
    </>
  );
};

export default Blog;