import React, { useState, useMemo } from "react";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import { FaSearch, FaFilter } from "react-icons/fa";
import BlogCard from "./BlogCard";
import { BlogPost, BlogCategory } from "../types/blog";
import { blogCategories, getFeaturedPosts } from "../data/blogPosts";

interface BlogListProps {
  posts: BlogPost[];
  showFeatured?: boolean;
  title?: string;
  subtitle?: string;
}

const BlogList: React.FC<BlogListProps> = ({ 
  posts, 
  showFeatured = true,
  title = "Latest Blog Posts",
  subtitle = "Discover insights about travel rewards, credit cards, and maximizing your benefits"
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const featuredPosts = useMemo(() => {
    return showFeatured ? getFeaturedPosts() : [];
  }, [showFeatured]);

  const filteredPosts = useMemo(() => {
    let filtered = posts;

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(post =>
        post.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Remove featured posts from regular list if showing featured section
    if (showFeatured && featuredPosts.length > 0) {
      const featuredIds = featuredPosts.map(post => post.id);
      filtered = filtered.filter(post => !featuredIds.includes(post.id));
    }

    return filtered;
  }, [posts, searchQuery, selectedCategory, showFeatured, featuredPosts]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ background: "var(--apple-bg)", paddingTop: "2rem" }}>
      <Container style={{ maxWidth: "1200px" }}>
        {/* Header */}
        <div className="text-center mb-5">
          <h1 
            style={{
              fontSize: "3rem",
              fontWeight: "700",
              color: "var(--apple-heading)",
              marginBottom: "1rem",
              fontFamily: "var(--primary-font)",
            }}
          >
            {title}
          </h1>
          <p 
            style={{
              fontSize: "1.125rem",
              color: "var(--apple-text)",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* Featured Posts */}
        {showFeatured && featuredPosts.length > 0 && (
          <div className="mb-5">
            <h2 
              className="mb-4"
              style={{
                fontSize: "2rem",
                fontWeight: "600",
                color: "var(--apple-heading)",
                fontFamily: "var(--primary-font)",
              }}
            >
              Featured Posts
            </h2>
            <Row>
              {featuredPosts.map((post) => (
                <Col key={post.id} lg={6} className="mb-4">
                  <BlogCard post={post} featured={true} />
                </Col>
              ))}
            </Row>
          </div>
        )}

        {/* Search and Filter */}
        <Row className="mb-4">
          <Col md={8}>
            <InputGroup size="lg">
              <InputGroup.Text
                style={{
                  backgroundColor: "white",
                  border: "2px solid #e0e0e0",
                  borderRight: "none",
                }}
              >
                <FaSearch color="var(--apple-accent)" />
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                style={{
                  border: "2px solid #e0e0e0",
                  borderLeft: "none",
                  fontSize: "1rem",
                  fontFamily: "var(--primary-font)",
                }}
              />
            </InputGroup>
          </Col>
          <Col md={4}>
            <Form.Select
              size="lg"
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setCurrentPage(1);
              }}
              style={{
                border: "2px solid #e0e0e0",
                fontSize: "1rem",
                fontFamily: "var(--primary-font)",
              }}
            >
              <option value="">All Categories</option>
              {blogCategories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name} ({category.count})
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>

        {/* Results Info */}
        {(searchQuery || selectedCategory) && (
          <div className="mb-4">
            <p style={{ color: "var(--apple-text)", fontSize: "1rem" }}>
              {filteredPosts.length === 0 ? (
                "No articles found matching your criteria."
              ) : (
                `Found ${filteredPosts.length} article${filteredPosts.length !== 1 ? 's' : ''} 
                ${searchQuery ? `for "${searchQuery}"` : ''}
                ${selectedCategory ? ` in ${selectedCategory}` : ''}`
              )}
            </p>
          </div>
        )}

        {/* Blog Posts Grid */}
        {currentPosts.length > 0 ? (
          <>
            <Row>
              {currentPosts.map((post) => (
                <Col key={post.id} lg={4} md={6} className="mb-4">
                  <BlogCard post={post} />
                </Col>
              ))}
            </Row>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="d-flex justify-content-center mt-5">
                <div className="d-flex gap-2">
                  <Button
                    variant="outline-primary"
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                    style={{
                      border: "2px solid var(--apple-accent)",
                      color: "var(--apple-accent)",
                      fontFamily: "var(--primary-font)",
                      fontWeight: "500",
                    }}
                  >
                    Previous
                  </Button>
                  
                  {Array.from({ length: totalPages }, (_, index) => {
                    const page = index + 1;
                    if (
                      page === 1 ||
                      page === totalPages ||
                      (page >= currentPage - 1 && page <= currentPage + 1)
                    ) {
                      return (
                        <Button
                          key={page}
                          variant={page === currentPage ? "primary" : "outline-primary"}
                          onClick={() => handlePageChange(page)}
                          style={{
                            border: "2px solid var(--apple-accent)",
                            backgroundColor: page === currentPage ? "var(--apple-accent)" : "transparent",
                            color: page === currentPage ? "white" : "var(--apple-accent)",
                            fontFamily: "var(--primary-font)",
                            fontWeight: "500",
                            minWidth: "45px",
                          }}
                        >
                          {page}
                        </Button>
                      );
                    } else if (
                      page === currentPage - 2 ||
                      page === currentPage + 2
                    ) {
                      return (
                        <span key={page} style={{ alignSelf: "center", padding: "0 0.5rem" }}>
                          ...
                        </span>
                      );
                    }
                    return null;
                  })}

                  <Button
                    variant="outline-primary"
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                    style={{
                      border: "2px solid var(--apple-accent)",
                      color: "var(--apple-accent)",
                      fontFamily: "var(--primary-font)",
                      fontWeight: "500",
                    }}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-5">
            <FaFilter size={48} color="#ccc" className="mb-3" />
            <h4 style={{ color: "var(--apple-text)", fontFamily: "var(--primary-font)" }}>
              No articles found
            </h4>
            <p style={{ color: "#999" }}>
              Try adjusting your search terms or browsing all categories.
            </p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default BlogList;