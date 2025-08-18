import React, { useState } from "react";
import { Button } from "react-bootstrap";

const WaitlistForm: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      
      if (response.ok) {
        setStatus("success");
        setMessage("Thank you! We'll be in touch soon.");
        form.reset();
      } else {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <form netlify name="contact" method="POST" onSubmit={handleSubmit}>
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
              disabled={status === "submitting"}
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
              disabled={status === "submitting"}
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
            disabled={status === "submitting"}
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
            {status === "submitting" ? "Sending..." : "Send"}
          </Button>
        </div>
        
        {message && (
          <div
            className={`mt-3 text-center ${
              status === "success" ? "text-success" : "text-danger"
            }`}
            style={{
              fontFamily: "var(--primary-font)",
              fontSize: "0.9rem",
              fontWeight: "500",
            }}
          >
            {message}
          </div>
        )}
      </form>
    </>
  );
};

export default WaitlistForm;