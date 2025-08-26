import "../App.css";

function About() {
  return (
    <div className="about-page" style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <h1>About Our Marketplace</h1>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginTop: "1rem" }}>
        Welcome to <strong>Store</strong> – a simple marketplace built with
        <span style={{ color: "#2563eb", fontWeight: "600" }}> Node.js</span> and
        <span style={{ color: "#2563eb", fontWeight: "600" }}> React</span>.
      </p>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginTop: "1rem" }}>
        This project allows users to:
      </p>
      <ul style={{ fontSize: "1rem", lineHeight: "1.6" }}>
        <li>👤 Register and log in securely</li>
        <li>📦 Add, edit, and delete products</li>
        <li>🖼️ Upload images for products</li>
        <li>❤️ Browse and interact with items in the marketplace</li>
      </ul>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginTop: "1rem" }}>
        The goal of this project is to demonstrate a full-stack application using
        modern technologies:
      </p>
      <ul style={{ fontSize: "1rem", lineHeight: "1.6" }}>
        <li>⚡ <strong>Frontend:</strong> React + Axios + React Router</li>
        <li>⚡ <strong>Backend:</strong> Node.js + Express</li>
        <li>⚡ <strong>Database:</strong> MongoDB</li>
      </ul>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginTop: "1rem" }}>
        This is just the beginning – the project can be extended with features
        like ratings, categories, payments, and more 🚀
      </p>
    </div>
  );
}

export default About;
