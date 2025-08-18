import React from "react";
import { Button } from "react-bootstrap";

const WaitlistForm: React.FC = () => {
  return (
    <form netlify name="waitlist" method="POST">
      <input type="hidden" name="form-name" value="waitlist" />
      <div className="d-flex flex-column gap-3">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Enter your email address"
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
          Join Waitlist
        </Button>
      </div>
    </form>
  );
};

export default WaitlistForm;