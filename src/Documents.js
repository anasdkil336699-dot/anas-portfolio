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
          {/* STEP 1: We removed target="_blank" 
            This will make it open in the SAME tab.
          */}
          <a href="files/Cooperative Training CV..pdf">View / Download PDF</a>
        </li>
        <li>
          <strong>Academic Transcript:</strong> (كشف الدرجات)
          {/* STEP 2: We removed target="_blank" */}
          <a href="files/السجل الأكاديمي- طبق الأصل.pdf">View / Download PDF</a>
        </li>
        <li>
          <strong>University Co-op Letter:</strong> (خطاب الجامعة)
          {/* STEP 3: We removed target="_blank" */}
          <a href="files/General spech.pdf">View / Download PDF</a>
        </li>
      </ul>
    </section>
  );
}
