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
      <ul>
        <li>
          <h4>Bachelor of Computer Science  GPA: 3.62 / 4.0                                 ( 2023 – Present ) </h4>
          <ul>
            <li>
              Umm Al-Qura University | Kingdom of Saudi Arabia 
            </li>
            <li>
              Expected Graduation: 2027
            </li>
          </ul>
        </li>
      </ul>

      <h3>Certificates and Courses</h3>
      <ol>
        <li>Cybersecurity Fundamentals | IBM SkillsBuild | September 2025</li>
        <li>Network Security 102 | Satr Platform | Sep 2025</li>
        <li>Web Development Fundamentals | IBM SkillsBuild | Sep 2025 </li>
        <li>Data Entry and Word Processing | Al-Basaer Institute  </li>
      </ol>

      <h3>Projects</h3>

      <article>
        <h4>Cybersecurity Simulation | IBM SkillsBuild | September 2025</h4>
        <ul>
          <li>
           Identified vulnerabilities and applied basic defensive measures in real-world scenarios. 
          </li>
        </ul>
      </article>

      <article>
        <h4>Web Development Project | IBM SkillsBuild | Sep 2025</h4>
        <ul>
          <li>
            Developed an interactive web application using HTML, CSS, and JavaScript. 
          </li>
        </ul>
      </article>

      <article>
        <h4>
          Java Garage Management System | Satr Educational Platform, September
          2025
        </h4>
        <ul>
          <li>
            Built a vehicle management system using OOP principles. 
          </li>
        </ul>
      </article>

      <article>
        <h4>
          Personal Portfolio Website | 2025
        </h4>
        <ul>
          <li>
           Developed a personal website to showcase projects and skills.  
          </li>
          <li>
           Portfolio: anas-portfolio-rose.vercel.app   
          </li>
        </ul>
      </article>

      <h3> Experience</h3>
      <h4>
        Cybersecurity Trainee | Yanpet (A SABIC subsidiary) | 2026 – Present  
      </h4>
      <ol>
        <li>Gaining hands-on experience in protecting industrial systems within an operational environment.</li>
        <li> Working with network infrastructure, including switches, routers, and servers.</li>
        <li> Assisting in monitoring and maintaining system security and performance.</li>
        <li>Supporting basic network and system-related tasks within the I&CS department.</li>
      </ol>

            
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
