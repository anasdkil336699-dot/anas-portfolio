import React from "react";

export default function Documents() {
  return (
    <section>
      <h2>Certificates</h2>

      <div className="doc-grid">
{/* كرت الشهادة الاحترافية CompTIA Security+ ce */}
        <div className="doc-card">
          <span>📄</span>
          <p>CompTIA Security+ ce</p>
          <a
            href="/security_plus_cert.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
          <a href="/security_plus_cert.pdf" download>
            Download
          </a>
        </div>

        {/* كرت دورة التدريب CompTIA Security+ Training Course */}
        <div className="doc-card">
          <span>📄</span>
          <p>CompTIA Security+ Training Course</p>
          <a
            href="/security_plus_course.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
          <a href="/security_plus_course.pdf" download>
            Download
          </a>
        </div>
        <div className="doc-card">
          <span>📄</span>
          <p>Cybersecurity Fundamentals Guided Learning</p>
          <a
            href="/Cybersecurity%20Fundamentals%20Guided%20Learning.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
          <a href="/Cybersecurity%20Fundamentals%20Guided%20Learning.pdf" download>
            Download
          </a>
        </div>

        <div className="doc-card">
          <span>📄</span>
          <p>Data Entry and Word Processing</p>
          <a
            href="/Data%20Entry%20and%20Word%20Processing.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
          <a href="/Data%20Entry%20and%20Word%20Processing.pdf" download>
            Download
          </a>
        </div>

        <div className="doc-card">
          <span>📄</span>
          <p>Web Development Fundamentals</p>
          <a
            href="/Web%20Development%20Fundamentals.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
          <a href="/Web%20Development%20Fundamentals.pdf" download>
            Download
          </a>
        </div>

        <div className="doc-card">
          <span>📄</span>
          <p>Java 103</p>
          <a
            href="/Java%20103.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
          <a href="/Java%20103.pdf" download>
            Download
          </a>
        </div>

        <div className="doc-card">
          <span>📄</span>
          <p>Introduction to Data Analysis</p>
          <a
            href="/Introduction%20to%20Data%20Analysis.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
          <a href="/Introduction%20to%20Data%20Analysis.pdf" download>
            Download
          </a>
        </div>

        <div className="doc-card">
          <span>📄</span>
          <p>Network security</p>
          <a
            href="/Network%20security.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
          <a href="/Network%20security.pdf" download>
            Download
          </a>
        </div>
      </div>

      <hr />

      <h2>Other Documents</h2>

      <div className="doc-grid">
        <div className="doc-card">
          <span>📄</span>
          <p>Academic transcript - true copy</p>
          <a
            href="/Academic%20transcript%20-%20true%20copy.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
          <a href="/Academic%20transcript%20-%20true%20copy.pdf" download>
            Download
          </a>
        </div>

        <div className="doc-card">
          <span>📄</span>
          <p>Anas CV</p>
          <a
            href="/Anas%20CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
          <a href="/Anas%20CV.pdf" download>
            Download
          </a>
        </div>
      </div>
    </section>
  );
}
