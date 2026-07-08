// src/Cv.js
import React from "react";

export default function Cv() {
  return (
    <section id="cv">
      <h2>My CV</h2>

      <h3>Summary</h3>
      <p>
        A computer science student at Umm Al-Qura University. I'm continuously developing my technical
        skills through courses and self-learning.
        I gained practical experience in protecting industrial systems and working with network infrastructure,
        including switches, routers, and servers.
      </p>

<h3>Education</h3>
      
      <article>
        <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', flexWrap: 'wrap' }}>
          <h4>Bachelor of <strong>Computer Science</strong> GPA: 3.62 / 4.0</h4>
          <span style={{ fontWeight: 'bold', marginLeft: 'auto' }}>2023 – Present</span>
        </div>
        <ul>
          <li style={{ listStyleType: 'none', marginLeft: '-20px' }}>
            <strong>Umm Al-Qura</strong> University | Kingdom of Saudi Arabia <br />
            <strong>Expected Graduation:</strong> 2027
          </li>
        </ul>
      </article>
  
<h3>Experience</h3>
      
      <article>
        <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', flexWrap: 'wrap' }}>
          <h4>Cybersecurity & Networks Intern | Yanpet - SABIC Affiliate</h4>
          <span style={{ fontWeight: 'bold', marginLeft: 'auto' }}>Jan 2026 – Jun 2026</span>
        </div>
        <ul>
          <li>
            <strong>Infrastructure & System Administration:</strong> Configured Cisco switches (VLANs, Ports, IPs), deployed Windows Server with RAID, and managed Active Directory, GPOs, DNS, and central patching via WSUS.
          </li>
          <li>
            <strong>Information Security & Data Protection:</strong> Implemented security controls to ensure data integrity and confidentiality (CIA Triad), while monitoring and protecting industrial data flows within the operational technology (OT) network.
          </li>
          <li>
            <strong>Technical Support & Security Awareness:</strong> Handled end-user PC setup and corporate provisioning, while delivering cybersecurity awareness presentations to educate employees on data protection.
          </li>
        </ul>
      </article>

      <h3>Certificates and Courses</h3>
    <ol>
      <li style={{ display: 'flex', justifyContent: 'between', marginBottom: '4px' }}>
        <span><strong>CompTIA Security+ Training Course</strong> | Cyberani Academy</span>
        <span style={{ fontWeight: 'bold', marginLeft: 'auto' }}>June 2026</span>
      </li >
      <li style={{ display: 'flex', justifyContent: 'between', marginBottom: '4px' }}>
        <span><strong>CompTIA Security+ ce</strong> | CompTIA</span>
        <span style={{ fontWeight: 'bold', marginLeft: 'auto' }}>June 2026</span>
      </li>
      <li style={{ display: 'flex', justifyContent: 'between', marginBottom: '4px' }}>
        <span><strong>Data Entry and Word Processing</strong> | Al-Basaer Institute</span>
        <span style={{ fontWeight: 'bold', marginLeft: 'auto' }}>March 2026</span>
      </li>
      <li style={{ display: 'flex', justifyContent: 'between', marginBottom: '4px' }}>
        <span><strong>Web Development Fundamentals</strong> | IBM SkillsBuild</span>
        <span style={{ fontWeight: 'bold', marginLeft: 'auto' }}>Sep 2025</span>
      </li>
      <li style={{ display: 'flex', justifyContent: 'between', marginBottom: '4px' }}>
        <span><strong>Cybersecurity Fundamentals</strong> | IBM SkillsBuild</span>
        <span style={{ fontWeight: 'bold', marginLeft: 'auto' }}>Sep 2025</span>
      </li>
      <li style={{ display: 'flex', justifyContent: 'between', marginBottom: '4px' }}>
        <span><strong>Network Security 102</strong> | Satr Platform</span>
        <span style={{ fontWeight: 'bold', marginLeft: 'auto' }}>Sep 2025</span>
      </li>
    </ol>

      <h3>Projects</h3>

      <article>
        <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', flexWrap: 'wrap' }}>
          <h4>1. Cisco Assets & Vulnerability Assessment Project | Yanpet</h4>
          <span style={{ fontWeight: 'bold', marginLeft: 'auto' }}>May 2026</span>
        </div>
        <ul>
          <li>I have <strong>inventoried</strong> and documented the <strong>routers and switches</strong> belonging to Cisco.</li>
          <li><strong>Checked</strong> hardware and firmware <strong>versions</strong> to identify <strong>existing vulnerabilities</strong> in each device.</li>
          <li>Researched and <strong>developed solutions</strong> to prevent the exploitation of these vulnerabilities.</li>
        </ul>
      </article>

      <article>
        <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', flexWrap: 'wrap' }}>
          <h4>2. Personal Portfolio Website</h4>
          <span style={{ fontWeight: 'bold', marginLeft: 'auto' }}>Sep 2025</span>
        </div>
        <ul>
          <li>Developed a personal website to showcase projects and skills.</li>
          <li>Portfolio: <strong>https://anas-portfolio-rose.vercel.app/</strong></li>
        </ul>
      </article>

            
      <h3>Skills</h3>

      <div className="skills-container">
        <div>
          <h4>Technical Skills</h4>
          <ul>
            <li>Cybersecurity</li>
            <li>Network Infrastructure (Switches, Routers) </li>
            <li> Server Management </li>
            <li>Web Development </li>
            <li>Object-Oriented Programming (Java)</li>
          </ul>
        </div>

        <div>
          <h4>Communication Skills</h4>
          <ul>
            <li>Time Management</li>
            <li>Teamwork</li>
            <li>Attention to Detail</li>
            <li>Problem-Solving</li>
            <li>Adaptability</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
