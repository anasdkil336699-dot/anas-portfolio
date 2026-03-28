import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* زر القائمة */}
      <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* القائمة الجانبية */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#cv" onClick={() => setIsOpen(false)}>CV</a>
        <a href="#documents" onClick={() => setIsOpen(false)}>
          Certificates & Documents
        </a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </div>
    </>
  );
}
