import React from "react";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaClock, FaUser, FaCalendarAlt } from "react-icons/fa";
import { BlogPost as BlogPostType } from "../types/blog";

interface BlogPostProps {
  post: BlogPostType;
  relatedPosts?: BlogPostType[];
}

const BlogPost: React.FC<BlogPostProps> = ({ post, relatedPosts = [] }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatContent = (content: string) => {
    // Convert markdown-like content to HTML
    return content
      .replace(/^# (.*$)/gm, '<h1 class="blog-h1">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="blog-h2">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="blog-h3">$1</h3>')
      .replace(/^\*\*(.*?)\*\*/gm, '<strong>$1</strong>')
      .replace(/^\*(.*?)$/gm, '<li>$1</li>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/^(?!<[hl])/gm, '<p>')
      .replace(/(?<!>)$/gm, '</p>')
      .replace(/<\/li><\/p>/g, '</li>')
      .replace(/<p><li>/g, '<ul><li>')
      .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
      .replace(/<\/ul><\/p>/g, '</ul>')
      .replace(/<p><\/p>/g, '');
  };

  return (
    <div style={{ background: "var(--apple-bg)" }}>
      {/* Header with back button */}
      <Container style={{ maxWidth: "1200px", paddingTop: "2rem" }}>
        <Link
          to="/blog"
          style={{
            textDecoration: "none",
            color: "var(--apple-accent)",
            fontSize: "1rem",
            fontWeight: "500",
            fontFamily: "var(--primary-font)",
            display: "inline-flex",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <FaArrowLeft style={{ marginRight: "0.5rem" }} />
          Back to Blog
        </Link>
      </Container>

      {/* Featured Image */}
      <div
        style={{
          height: "400px",
          backgroundImage: `url(${post.featuredImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          marginBottom: "3rem",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(0, 0, 0, 0.7)",
            backdropFilter: "blur(10px)",
            padding: "1.5rem 2rem",
            borderRadius: "1rem",
            maxWidth: "800px",
            width: "90%",
          }}
        >
          <Badge
            bg="warning"
            text="dark"
            style={{
              fontSize: "0.875rem",
              fontWeight: "600",
              padding: "0.5rem 1rem",
              marginBottom: "1rem",
            }}
          >
            {post.category}
          </Badge>
          
          <h1
            style={{
              color: "white",
              fontSize: "2.5rem",
              fontWeight: "700",
              lineHeight: "1.2",
              marginBottom: "1rem",
              fontFamily: "var(--primary-font)",
            }}
          >
            {post.title}
          </h1>
          
          <p
            style={{
              color: "rgba(255, 255, 255, 0.9)",
              fontSize: "1.125rem",
              lineHeight: "1.6",
              marginBottom: "1.5rem",
            }}
          >
            {post.excerpt}
          </p>

          <div className="d-flex flex-wrap align-items-center gap-3 text-white">
            <div className="d-flex align-items-center">
              <FaUser style={{ marginRight: "0.5rem" }} />
              <span style={{ fontWeight: "500" }}>{post.author.name}</span>
            </div>
            <div className="d-flex align-items-center">
              <FaCalendarAlt style={{ marginRight: "0.5rem" }} />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            <div className="d-flex align-items-center">
              <FaClock style={{ marginRight: "0.5rem" }} />
              <span>{post.readingTime} min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <Container style={{ maxWidth: "800px" }}>
        <Row>
          <Col>
            {/* Tags */}
            <div className="mb-4">
              {post.tags.map((tag, index) => (
                <Badge
                  key={index}
                  bg="light"
                  text="dark"
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    padding: "0.5rem 0.75rem",
                    marginRight: "0.5rem",
                    marginBottom: "0.5rem",
                    border: "1px solid #e0e0e0",
                  }}
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Article Body */}
            <div
              className="blog-content"
              style={{
                fontFamily: "var(--primary-font)",
                fontSize: "1.125rem",
                lineHeight: "1.8",
                color: "var(--apple-text)",
              }}
              dangerouslySetInnerHTML={{
                __html: formatContent(post.content)
              }}
            />

            {/* Author Info */}
            <div
              className="mt-5 p-4"
              style={{
                background: "#f8f9fa",
                borderRadius: "1rem",
                border: "1px solid #e0e0e0",
              }}
            >
              <div className="d-flex align-items-center">
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    backgroundColor: "var(--apple-accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "600",
                    fontSize: "1.25rem",
                    marginRight: "1rem",
                  }}
                >
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <h5
                    style={{
                      margin: 0,
                      color: "var(--apple-heading)",
                      fontFamily: "var(--primary-font)",
                    }}
                  >
                    {post.author.name}
                  </h5>
                  <p
                    style={{
                      margin: 0,
                      color: "var(--apple-text)",
                      fontSize: "0.95rem",
                    }}
                  >
                    Contributing Author
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <Container style={{ maxWidth: "1200px", paddingTop: "4rem", paddingBottom: "4rem" }}>
          <h3
            className="mb-4"
            style={{
              fontSize: "2rem",
              fontWeight: "600",
              color: "var(--apple-heading)",
              fontFamily: "var(--primary-font)",
            }}
          >
            Related Articles
          </h3>
          <Row>
            {relatedPosts.slice(0, 3).map((relatedPost) => (
              <Col key={relatedPost.id} lg={4} md={6} className="mb-4">
                <div
                  style={{
                    background: "white",
                    borderRadius: "1rem",
                    overflow: "hidden",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                    transition: "transform 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      height: "150px",
                      backgroundImage: `url(${relatedPost.featuredImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div style={{ padding: "1.5rem" }}>
                    <Badge
                      bg="light"
                      text="dark"
                      className="mb-2"
                      style={{
                        fontSize: "0.75rem",
                        border: "1px solid #e0e0e0",
                      }}
                    >
                      {relatedPost.category}
                    </Badge>
                    <h5
                      style={{
                        fontWeight: "600",
                        lineHeight: "1.3",
                        marginBottom: "0.75rem",
                        fontFamily: "var(--primary-font)",
                      }}
                    >
                      <Link
                        to={`/blog/${relatedPost.slug}`}
                        style={{
                          textDecoration: "none",
                          color: "var(--apple-heading)",
                        }}
                      >
                        {relatedPost.title}
                      </Link>
                    </h5>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "var(--apple-text)",
                        marginBottom: "1rem",
                      }}
                    >
                      {relatedPost.excerpt.substring(0, 100)}...
                    </p>
                    <small style={{ color: "#666" }}>
                      {relatedPost.readingTime} min read
                    </small>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default BlogPost;