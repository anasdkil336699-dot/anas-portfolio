// src/Documents.js
import React from "react";

export default function Documents() {
  return (
    <section id="documents">
      <h2>Official Documents</h2>
      <p>Here you can find my official documents for review.</p>

      <ul className="document-list">
        <li>
          <strong>My CV:</strong>
          <a
            href="files/Cooperative Training CV..pdf"
            target="_blank"
            rel="noreferrer"
          >
            View / Download PDF
          </a>
        </li>
        <li>
          <strong>Academic Transcript:</strong> (كشف الدرجات)
          <a
            href="files/السجل الأكاديمي- طبق الأصل.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View / Download PDF
          </a>
        </li>
        <li>
          <strong>University Co-op Letter:</strong> (خطاب الجامعة)
          <a href="files/General spech.pdf" target="_blank" rel="noreferrer">
            View / Download PDF
          </a>
        </li>
      </ul>
    </section>
  );
}
