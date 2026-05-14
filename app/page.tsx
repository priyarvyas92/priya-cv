import Image from "next/image";

export default function Home() {
  return (
    <div className="page">
      <div className="stripe-bar"></div>

      <div className="hero">
        <div className="hero-name">Priya R Vyas</div>
        <div className="hero-title">Frontend Engineer</div>
        <div className="hero-contact">
          <a href="#">📍 Waterloo, ON</a>
          <a href="mailto:vyaspriya5@gmail.com"> 📩 vyaspriya5@gmail.com</a>
          <a href="#">📞 226-899-0719</a>
          <a href="https://linkedin.com/in/priyarvyas"> 🔗 LinkedIn</a>
        </div>
        <div className="badge-row">
          <span className="badge">Angular</span>
          <span className="badge">React</span>
          <span className="badge">TypeScript</span>
          <span className="badge">Design Systems</span>
          <span className="badge">Node.js</span>
          <span className="badge">CI/CD</span>
          <span className="badge">10+ Years</span>
        </div>
      </div>

      <div className="full-card card-accent">
        <div className="section-label">Summary</div>
        <div className="summary-text">Frontend Engineer with 10+ years building polished, high-performance web applications that users notice and trust. Deep expertise in Angular, TypeScript, and design systems, with working knowldedge of React and Node.js. Passionate about crafting seamless user experiences
           with a strong eye for craft — component architecture, interaction quality, and visual consistency. Experienced collaborating with design and cross-functional teams to raise the quality bar across entire teams. Motivated by work where engineering excellence and user experience are inseparable.</div>
      </div>

      <div className="full-card">
        <div className="section-label">Technical Skills</div>
        <div className="skill-group">
          <div className="skill-label">Frontend & Interaction</div>
          <div className="skill-tags">
            <span className="skill-tag">React</span><span className="skill-tag">Redux</span><span className="skill-tag">TypeScript</span><span className="skill-tag">JavaScript ES6+</span><span className="skill-tag">Angular</span><span className="skill-tag">AngularJS</span><span className="skill-tag">Vue.js</span><span className="skill-tag">HTML5</span><span className="skill-tag">CSS3</span>
          </div>
        </div>
        <div className="skill-group" style={{ marginTop: '0.9rem' }}>
          <div className="skill-label">Backend & APIs</div>
          <div className="skill-tags">
            <span className="skill-tag backend">Node.js</span><span className="skill-tag backend">Express</span><span className="skill-tag backend">Python</span><span className="skill-tag backend">Django</span><span className="skill-tag backend">REST APIs</span>
          </div>
        </div>
        <div className="skill-group" style={{ marginTop: '0.9rem' }}>
          <div className="skill-label">Tooling & Infrastructure</div>
          <div className="skill-tags">
            <span className="skill-tag tool">CI/CD</span><span className="skill-tag tool">Monorepo</span><span className="skill-tag tool">Docker</span><span className="skill-tag tool">AWS S3/EC2</span><span className="skill-tag tool">Webpack</span><span className="skill-tag tool">Git</span>
          </div>
        </div>
      </div>

      <div className="full-card">
        <div className="section-label">Work Experience</div>

        <div className="job">
          <div className="job-header">
            <div>
              <div className="job-title">Software Developer → Senior Software Developer</div>
              <div className="job-company">Miovision</div>
              <div className="job-promo">↑ Promoted Jan 2023</div>
            </div>
            <div className="job-meta">March 2020 – April 2026<br/><span style={{ color: '#8792a2' }}>Kitchener, ON</span></div>
          </div>
          <ul className="job-bullets">
            <li>Owned and led a shared UI component library and design system adopted across 4 engineering teams — establishing consistent interaction patterns and visual standards that reduced duplicate UI effort by ~40%.</li>
            <li>Collaborated closely with design to translate specs into polished, pixel-accurate frontend implementations, maintaining a high craft bar across complex data-driven interfaces.</li>
            <li>Built performant Angular and AngularJS applications with optimized rendering, smooth component transitions, and responsive layouts.</li>
            <li>Contributed to monorepo architecture and CI/CD pipelines; implemented affected-only test execution, cutting build times by ~70%.</li>
            <li>Standardized UI engineering practices company-wide; conducted Lunch & Learn sessions and mentored junior developers.</li>
          </ul>
        </div>

        <div className="job">
          <div className="job-header">
            <div>
              <div className="job-title">Software Engineer</div>
              <div className="job-company">Insticator</div>
            </div>
            <div className="job-meta">May 2019 – Feb 2020<br/><span style={{ color: '#8792a2' }}>Kitchener, ON</span></div>
          </div>
          <ul className="job-bullets">
            <li>Built interactive React and Redux UI components for platforms reaching 350M+ users, focusing on frontend responsiveness and visual quality at scale.</li>
            <li>Delivered production features in agile cycles, balancing speed with attention to interaction detail and cross-browser polish.</li>
          </ul>
        </div>

        <div className="job">
          <div className="job-header">
            <div>
              <div className="job-title">Web Developer (Part-time)</div>
              <div className="job-company">Meddo</div>
            </div>
            <div className="job-meta">May 2018 – Apr 2019<br/><span style={{ color: '#8792a2' }}>Kitchener, ON</span></div>
          </div>
          <ul className="job-bullets">
            <li>Built core product UI in React with modular component architecture; designed REST APIs and integrations powering dynamic user flows.</li>
            <li>Optimized Neo4j query performance and frontend data flow for smooth, responsive experiences.</li>
          </ul>
        </div>

        <div className="job">
          <div className="job-header">
            <div>
              <div className="job-title">Python Developer → Senior Fullstack Developer</div>
              <div className="job-company">Amor Innovations</div>
              <div className="job-promo">↑ Promoted Jan 2017</div>
            </div>
            <div className="job-meta">Jan 2016 – Dec 2017<br/><span style={{ color: '#8792a2' }}>Vadodara, India</span></div>
          </div>
          <ul className="job-bullets">
            <li>Delivered end-to-end features for a learning platform using Python, Django, and frontend technologies; contributed to architecture and scalability decisions.</li>
          </ul>
        </div>

        <div className="job">
          <div className="job-header">
            <div>
              <div className="job-title">Junior Web Developer</div>
              <div className="job-company">Promact Infotech</div>
            </div>
            <div className="job-meta">Jun 2014 – Jan 2016<br/><span style={{ color: '#8792a2' }}>Vadodara, India</span></div>
          </div>
          <ul className="job-bullets">
            <li>Built frontend modules and backend features independently for a booking system using PHP, HTML, CSS, and JavaScript.</li>
          </ul>
        </div>
      </div>

      <div className="full-card">
        <div className="section-label">Education</div>
        <div className="edu-item">
          <div>
            <div className="edu-degree">P.G. Diploma in Mobile Solutions Development</div>
            <div className="edu-school">Conestoga College, Waterloo, ON, Canada</div>
          </div>
          <div className="edu-year">2018 – 2019</div>
        </div>
        <div className="edu-item">
          <div>
            <div className="edu-degree">B.E. Computer Engineering</div>
            <div className="edu-school">Gujarat Technological University, Vadodara, India</div>
          </div>
          <div className="edu-year">2011 – 2014</div>
        </div>
        <div className="edu-item">
          <div>
            <div className="edu-degree">Diploma in Computer Engineering</div>
            <div className="edu-school">Gujarat Technological University, Vadodara, India</div>
          </div>
          <div className="edu-year">2009 – 2011</div>
        </div>
      </div>
    </div>
  );
}
