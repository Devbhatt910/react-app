import { useState } from "react";

const ModernFormValidation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(false);
    let validationErrors = {};

    if (name.trim() === "") {
      validationErrors.name = "Name is required";
    }

    if (email.trim() === "") {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Please enter a valid email address";
    }

    if (password.trim() === "") {
      validationErrors.password = "Password is required";
    } else if (password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSubmitted(true);
      console.log("Form submitted successfully", { name, email, password });

      // Reset fields
      setName("");
      setEmail("");
      setPassword("");
      
      // Clear success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h2 style={styles.title}>Create an Account</h2>
          <p style={styles.subtitle}>Please fill out the form below to get started.</p>
        </div>

        {isSubmitted && (
          <div style={styles.successBanner}>
            ✓ Account created successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Name Input Group */}
          <div style={styles.inputGroup}>
            <label htmlFor="name" style={styles.label}>Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                ...styles.input,
                ...(errors.name ? styles.inputError : {}),
              }}
            />
            {errors.name && <span style={styles.errorText}>{errors.name}</span>}
          </div>

          {/* Email Input Group */}
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                ...styles.input,
                ...(errors.email ? styles.inputError : {}),
              }}
            />
            {errors.email && <span style={styles.errorText}>{errors.email}</span>}
          </div>

          {/* Password Input Group */}
          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                ...styles.input,
                ...(errors.password ? styles.inputError : {}),
              }}
            />
            {errors.password && <span style={styles.errorText}>{errors.password}</span>}
          </div>

          <button type="submit" style={styles.button}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

// Modern, clean UI styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f4f6f9",
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    padding: "20px",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.05)",
    width: "100%",
    maxWidth: "420px",
    padding: "32px",
    boxSizing: "border-box",
  },
  header: {
    marginBottom: "24px",
    textAlign: "center",
  },
  title: {
    margin: "0 0 8px 0",
    color: "#1a1f36",
    fontSize: "24px",
    fontWeight: "700",
  },
  subtitle: {
    margin: 0,
    color: "#697386",
    fontSize: "14px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  label: {
    color: "#3c4257",
    fontSize: "14px",
    fontWeight: "500",
  },
  input: {
    padding: "12px 16px",
    borderRadius: "8px",
    border: "1px solid #e3e8ee",
    fontSize: "15px",
    color: "#1a1f36",
    outline: "none",
    transition: "all 0.2s ease",
    backgroundColor: "#ffffff",
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
  },
  inputError: {
    border: "1px solid #df1b41",
    backgroundColor: "#fef2f4",
  },
  errorText: {
    color: "#df1b41",
    fontSize: "12px",
    fontWeight: "500",
    marginTop: "2px",
  },
  button: {
    backgroundColor: "#635bff",
    color: "#ffffff",
    border: "none",
    padding: "12px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    marginTop: "8px",
  },
  successBanner: {
    backgroundColor: "#e7faf0",
    color: "#0ab96b",
    padding: "12px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "500",
    textAlign: "center",
    marginBottom: "20px",
    border: "1px solid #d1f5e3",
  },
};

export default ModernFormValidation;