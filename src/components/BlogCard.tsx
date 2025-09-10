import React from "react";
import { Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BlogPost } from "../types/blog";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, featured = false }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Card 
      className={`blog-card h-100 ${featured ? 'featured-post' : ''}`}
      style={{
        border: "none",
        borderRadius: "1rem",
        overflow: "hidden",
        transition: "all 0.3s ease",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
      }}
    >
      <div 
        className="blog-card-image"
        style={{
          height: featured ? "250px" : "200px",
          backgroundImage: `url(${post.featuredImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
          }}
        >
          <Badge 
            bg="dark" 
            style={{
              fontFamily: "var(--primary-font)",
              fontWeight: "500",
              fontSize: "0.75rem",
              padding: "0.5rem 0.75rem",
            }}
          >
            {post.category}
          </Badge>
        </div>
        {post.featured && (
          <div
            style={{
              position: "absolute",
              top: "1rem",
              left: "1rem",
            }}
          >
            <Badge 
              bg="warning" 
              text="dark"
              style={{
                fontFamily: "var(--primary-font)",
                fontWeight: "600",
                fontSize: "0.75rem",
                padding: "0.5rem 0.75rem",
              }}
            >
              Featured
            </Badge>
          </div>
        )}
      </div>

      <Card.Body 
        className="d-flex flex-column"
        style={{ 
          padding: "1.5rem",
          fontFamily: "var(--primary-font)",
        }}
      >
        <div className="mb-2">
          <small 
            className="text-muted"
            style={{ 
              fontSize: "0.875rem",
              fontWeight: "500",
            }}
          >
            {formatDate(post.publishedAt)} • {post.readingTime} min read
          </small>
        </div>

        <Card.Title
          as="h3"
          className="mb-3"
          style={{
            fontSize: featured ? "1.5rem" : "1.25rem",
            fontWeight: "600",
            lineHeight: "1.3",
            color: "var(--apple-heading)",
          }}
        >
          <Link
            to={`/blog/${post.slug}`}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = "var(--apple-accent)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = "var(--apple-heading)";
            }}
          >
            {post.title}
          </Link>
        </Card.Title>

        <Card.Text 
          className="mb-3 flex-grow-1"
          style={{
            color: "var(--apple-text)",
            lineHeight: "1.6",
            fontSize: "0.95rem",
          }}
        >
          {post.excerpt}
        </Card.Text>

        <div className="d-flex flex-wrap gap-2 mb-3">
          {post.tags.slice(0, 3).map((tag, index) => (
            <Badge
              key={index}
              bg="light"
              text="dark"
              style={{
                fontSize: "0.75rem",
                fontWeight: "500",
                padding: "0.35rem 0.6rem",
                borderRadius: "0.5rem",
                border: "1px solid #e0e0e0",
              }}
            >
              {tag}
            </Badge>
          ))}
          {post.tags.length > 3 && (
            <Badge
              bg="light"
              text="muted"
              style={{
                fontSize: "0.75rem",
                fontWeight: "500",
                padding: "0.35rem 0.6rem",
                borderRadius: "0.5rem",
                border: "1px solid #e0e0e0",
              }}
            >
              +{post.tags.length - 3}
            </Badge>
          )}
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                backgroundColor: "var(--apple-accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "600",
                fontSize: "0.875rem",
                marginRight: "0.75rem",
              }}
            >
              {post.author.name.charAt(0)}
            </div>
            <small 
              style={{ 
                color: "var(--apple-text)",
                fontWeight: "500",
              }}
            >
              {post.author.name}
            </small>
          </div>

          <Link
            to={`/blog/${post.slug}`}
            style={{
              fontSize: "0.875rem",
              fontWeight: "600",
              color: "var(--apple-accent)",
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.textDecoration = "underline";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.textDecoration = "none";
            }}
          >
            Read More →
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;