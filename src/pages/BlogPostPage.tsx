import React from "react";
import { useParams, Navigate } from "react-router-dom";
import BlogPost from "../components/BlogPost";
import { getPostBySlug, blogPosts } from "../data/blogPosts";
import SEO from "../components/SEO";

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const post = getPostBySlug(slug);
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Get related posts (same category or similar tags)
  const relatedPosts = blogPosts
    .filter(p => 
      p.id !== post.id && (
        p.category === post.category ||
        p.tags.some(tag => post.tags.includes(tag))
      )
    )
    .slice(0, 3);

  return (
    <>
      <SEO
        title={`${post.title} - ZUTTO Blog`}
        description={post.excerpt}
        keywords={post.tags.join(", ")}
        canonical={`/blog/${post.slug}`}
        image={post.featuredImage}
        article={{
          publishedTime: post.publishedAt,
          modifiedTime: post.updatedAt || post.publishedAt,
          author: post.author.name,
          section: post.category,
          tags: post.tags,
        }}
      />
      <div style={{ paddingTop: "80px", minHeight: "100vh" }}>
        <BlogPost post={post} relatedPosts={relatedPosts} />
      </div>
    </>
  );
};

export default BlogPostPage;