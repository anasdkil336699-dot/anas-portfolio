// src/Home.js
import React from "react";

export default function Home() {
  return (
    <section id="home">
      <h2> Welcome to My CV</h2>
      <p>
        {" "}
        Hello! I am a student passionate about technology, specializing in
        Computer Science.
      </p>
      <p className="portfolio-note">
        <strong>A note on this portfolio:</strong> I built this entire website
        from scratch, applying the principles of semantic HTML and modern CSS
        (including Flexbox and Grid). This project itself is one of my primary
        examples of web development.
      </p>
    </section>
  );
}
