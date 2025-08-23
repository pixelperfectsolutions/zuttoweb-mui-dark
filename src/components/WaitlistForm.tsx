import React from "react";
import { Button } from "react-bootstrap";

const WaitlistForm: React.FC = () => {
  return (
    <>
      <form netlify name="contact" method="POST">
        <input type="hidden" name="form-name" value="contact" />
        <div className="d-flex flex-column gap-3">
          <label style={{
            fontFamily: "var(--primary-font)",
            fontWeight: "500",
            color: "#1d1d1f",
            fontSize: "0.9rem",
          }}>
            Name
            <input
              type="text"
              name="name"
              className="form-control mt-1"
              required
              style={{
                padding: "0.75rem 1rem",
                fontSize: "1rem",
                borderRadius: "0.5rem",
                border: "1px solid #ddd",
                fontFamily: "var(--primary-font)",
                width: "100%",
              }}
            />
          </label>
          
          <label style={{
            fontFamily: "var(--primary-font)",
            fontWeight: "500",
            color: "#1d1d1f",
            fontSize: "0.9rem",
          }}>
            Email
            <input
              type="email"
              name="email"
              className="form-control mt-1"
              required
              style={{
                padding: "0.75rem 1rem",
                fontSize: "1rem",
                borderRadius: "0.5rem",
                border: "1px solid #ddd",
                fontFamily: "var(--primary-font)",
                width: "100%",
              }}
            />
          </label>
          
          <Button
            type="submit"
            size="lg"
            style={{
              backgroundColor: "#333",
              borderColor: "#333",
              fontFamily: "var(--primary-font)",
              fontWeight: "600",
              padding: "0.75rem 1.5rem",
              fontSize: "1rem",
              borderRadius: "0.5rem",
              width: "100%",
            }}
          >
            Join Android Waitlist
          </Button>
        </div>
      </form>
    </>
  );
};

export default WaitlistForm;