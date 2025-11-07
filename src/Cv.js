// src/Cv.js
import React from "react";

export default function Cv() {
  return (
    <section id="cv">
      <h2>My CV</h2>

      <h3>Summary</h3>
      <p>
        A third-year Computer Science student at Umm Al-Qura University, seeking
        a co-op training opportunity. I have strong knowledge of programming
        languages such as Java, as well as database creation. I have skills in
        developing and building websites. I aspire to apply my skills in a
        professional work environment and contribute to achieving the company's
        goals.
      </p>

      <h3>Education</h3>
      <ul>
        <li>
          <h4>High School Diploma | Kingdom of Saudi Arabia</h4>
          <ul>
            <li>Cumulative GPA: 99.35</li>
            <li>Achievement Score: 85</li>
          </ul>
        </li>
        <li>
          <h4>Umm Al-Qura University | Kingdom of Saudi Arabia</h4>
          <ul>
            <li>
              Bachelor of Computer Science Student | Current Cumulative GPA:
              3.58 / 4.0
            </li>
            <li>
              Studied programming fundamentals and algorithms, and data
              structures.
            </li>
            <li>
              Studied computer networks, databases, cybersecurity, and web
              development.
            </li>
          </ul>
        </li>
      </ul>

      <h3>Certificates and Courses</h3>
      <ol>
        <li>Cybersecurity Fundamentals | IBM SkillsBuild, September 2025</li>
        <li>Web Development Fundamentals | IBM SkillsBuild, September 2025</li>
        <li>
          Introduction to Data Analysis | Satr Educational Platform, September
          2025
        </li>
        <li>JAVA 103 | Satr Educational Platform, September 2025</li>
        <li>
          Network Security 102 | Satr Educational Platform, September 2025
        </li>
      </ol>

      <h3>Projects</h3>

      <article>
        <h4>Cybersecurity Simulation | IBM SkillsBuild | September 2025</h4>
        <ul>
          <li>
            Completed a practical simulation in the field of cybersecurity based
            on real-world scenarios.
          </li>
          <li>
            Identified security vulnerabilities, responded to incidents, and
            applied defensive measures.
          </li>
          <li>
            Demonstrated skills in risk assessment and operating secure systems.
          </li>
        </ul>
      </article>

      <article>
        <h4>Web Development Fundamentals | IBM SkillsBuild | September 2025</h4>
        <ul>
          <li>
            Designed and developed a fully responsive web page using CSS, HTML,
            and JavaScript.
          </li>
          <li>
            Applied fundamental concepts of the Software Development Life Cycle
            (SDLC) and modern methodologies like DevOps.
          </li>
          <li>
            Gained hands-on experience in website testing and applying
            continuous deployment principles.
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
            Developed a vehicle management system using OOP principles
            (Encapsulation, Inheritance, and Polymorphism) to manage different
            vehicle types.
          </li>
        </ul>
      </article>

      <h3>Skills</h3>

      <div className="skills-container">
        <div>
          <h4>Technical Skills</h4>
          <ul>
            <li>Software Development</li>
            <li>Database Management</li>
            <li>Computer Networks</li>
            <li>Algorithm Design</li>
            <li>Web Development</li>
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
      <h3>Languages</h3>
      <ul>
        <li>Arabic</li>
        <li>English</li>
      </ul>
    </section>
  );
}
