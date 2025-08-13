import React, { useState } from "react";
import { Button } from "react-bootstrap";

const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const downloadEmails = () => {
    const emails = localStorage.getItem('waitlistEmails') || '';
    if (!emails.trim()) {
      alert('No emails to download yet!');
      return;
    }
    
    const blob = new Blob([emails], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'waitlist-emails.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      // Save to localStorage for demo purposes
      const timestamp = new Date().toISOString();
      const emailEntry = `${timestamp}: ${email}`;
      
      const existingEmails = localStorage.getItem('waitlistEmails') || '';
      const updatedEmails = existingEmails + emailEntry + '\n';
      localStorage.setItem('waitlistEmails', updatedEmails);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus("success");
      setMessage("Thank you! We'll notify you when ZUTTO launches.");
      setEmail("");
      
      // Clean up after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
      
    } catch (error) {
      console.error('Error saving email:', error);
      setStatus("error");
      setMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="d-flex flex-column gap-3">
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            {status === "submitting" ? "Joining..." : "Join Waitlist"}
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
      
      {/* Hidden admin download button - triple click to show */}
      <div 
        style={{ 
          position: "absolute", 
          bottom: "10px", 
          right: "10px", 
          opacity: "0.1",
          fontSize: "0.7rem",
          cursor: "pointer"
        }}
        onDoubleClick={downloadEmails}
        title="Double-click to download emails"
      >
        📧
      </div>
    </>
  );
};

export default WaitlistForm;