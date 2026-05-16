export default function Home() {
  return (
    <div className="page">
      <div className="stripe-bar"></div>

      <div className="hero">
        <div className="hero-name">Priya Vyas</div>
        <div className="hero-title">Fullstack Software Engineer</div>
        <div className="hero-title">Platform Engineering</div>
        <div className="hero-contact">
          <a href="#">📍 Waterloo, ON</a>
          <a href="mailto:vyaspriya5@gmail.com"> 📩 vyaspriya5@gmail.com</a>
          <a href="#">📞 226-899-0719</a>
          <a href="https://linkedin.com/in/priyarvyas"> 🔗 LinkedIn</a>
        </div>
        <div className="badge-row">
          <span className="badge">Angular</span>
          <span className="badge">React</span>
          <span className="badge">Python</span>
          <span className="badge">TypeScript</span>
          <span className="badge">Design Systems</span>
          <span className="badge">Node.js</span>
          <span className="badge">CI/CD</span>
          <span className="badge">10+ Years</span>
        </div>
      </div>

      <div className="full-card card-accent">
        <div className="section-label">Summary</div>
        <div className="summary-text">
          Fullstack Software Engineer with 10+ years of experience building scalable platforms and end-to-end product features used by millions. Proven track record of designing shared UI systems and developer-facing infrastructure that accelerate delivery across multiple teams. Strong generalist who works across frontend, backend, and infrastructure — comfortable picking up new languages, debugging production issues across the stack, and driving technical decisions cross-functionally.
        </div>
      </div>

      <div className="full-card">
        <div className="section-label">Technical Skills</div>
        <div className="skill-group">
          <div className="skill-label">Languages & Frameworks</div>
          <div className="skill-tags">
            <span className="skill-tag">TypeScript</span>
            <span className="skill-tag">JavaScript (ES6+)</span>
            <span className="skill-tag">Python</span>
            <span className="skill-tag">React</span>
            <span className="skill-tag">Redux</span>
            <span className="skill-tag">Angular</span>
            <span className="skill-tag">AngularJS</span>
            <span className="skill-tag">Vue</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">Django</span>
            <span className="skill-tag">HTML5</span>
            <span className="skill-tag">CSS3</span>
          </div>
        </div>
        <div className="skill-group" style={{ marginTop: '0.9rem' }}>
          <div className="skill-label">Infrastructure & Tooling</div>
          <div className="skill-tags">
            <span className="skill-tag">AWS (S3, EC2)</span>
            <span className="skill-tag">Docker</span>
            <span className="skill-tag">CI/CD pipelines</span>
            <span className="skill-tag">Monorepo architecture</span>
            <span className="skill-tag">Webpack</span>
            <span className="skill-tag">Git</span>
          </div>
        </div>
        <div className="skill-group" style={{ marginTop: '0.9rem' }}>
          <div className="skill-label">Databases</div>
          <div className="skill-tags">
            <span className="skill-tag">MySQL</span>
            <span className="skill-tag">Neo4j</span>
            <span className="skill-tag">DynamoDB</span>
          </div>
        </div>
          <div className="skill-group" style={{ marginTop: '0.9rem' }}>
            <div className="skill-label">Core Strengths </div>
            <div className="skill-tags">
              <span className="skill-tag">Platform/infrastructure thinking</span>
              <span className="skill-tag">cross-team technical leadership</span>
              <span className="skill-tag">end-to-end feature ownership</span>
              <span className="skill-tag">system design</span>
              <span className="skill-tag">production debugging</span>
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
            <div className="job-meta">March 2020 – April 2026<br /><span style={{ color: '#8792a2' }}>Kitchener, ON</span></div>
          </div>
          <ul className="job-bullets">
            <li><b>Led shared UI component library and design system serving 4 engineering teams,</b> reducing duplicate development effort by ~40% and standardizing cross-product frontend patterns organization-wide; directly enabling faster, more consistent feature delivery.</li>
            <li><b>Drove monorepo architecture and CI/CD pipeline improvements,</b> implementing affected-only test execution that cut build times by ~70%, improving developer velocity across the org.</li>
            <li>Delivered fullstack features end-to-end across Angular frontend and backend services, owning complete user-facing workflows in a complex, data-driven platform serving municipalities and traffic engineers.</li>
            <li>Led technical conversations cross-functionally with product, design, and backend engineering teams to define requirements, review API contracts, and make tradeoffs balancing user experience with sustainable architecture.</li>
            <li>Debugged production issues across frontend, backend services, and infrastructure layers, triaging and resolving cross-service failures.</li>
            <li>Mentored junior developers on fullstack best practices; ran company-wide Lunch & Learn sessions on engineering topics.</li>
          </ul>
        </div>

        <div className="job">
          <div className="job-header">
            <div>
              <div className="job-title">Software Engineer</div>
              <div className="job-company">Insticator</div>
            </div>
            <div className="job-meta">May 2019 – Feb 2020<br /><span style={{ color: '#8792a2' }}>Kitchener, ON</span></div>
          </div>
          <ul className="job-bullets">
            <li>Built and shipped frontend and API-integrated features for platforms serving 350M+ users, using React and Redux for scalable, reliable state management at high traffic volume.</li>
            <li>Collaborated across teams in agile sprints to deliver production features across the full request lifecycle; API integration through rendered UI.</li>
          </ul>
        </div>

        <div className="job">
          <div className="job-header">
            <div>
              <div className="job-title">Full stack Web Developer (Part-time)</div>
              <div className="job-company">Meddo</div>
            </div>
            <div className="job-meta">May 2018 – Apr 2019<br /><span style={{ color: '#8792a2' }}>Kitchener, ON</span></div>
          </div>
          <ul className="job-bullets">
            <li>Built core product features fullstack: React frontend, Node.js/Express backend, REST API design, and Neo4j graph database; owning the full stack from data model to UI.</li>
            <li>Designed API interfaces and data models from scratch; optimized graph queries to improve application performance.</li>
            <li>Developed modular, reusable UI architecture that supported rapid feature iteration across the product.</li>
          </ul>
        </div>

        <div className="job">
          <div className="job-header">
            <div>
              <div className="job-title">Python Developer → Senior Fullstack Developer</div>
              <div className="job-company">Amor Innovations</div>
              <div className="job-promo">↑ Promoted Jan 2017</div>
            </div>
            <div className="job-meta">Jan 2016 – Dec 2017<br /><span style={{ color: '#8792a2' }}>Vadodara, India</span></div>
          </div>
          <ul className="job-bullets">
            <li>Delivered end-to-end product features across Python/Django backend, database design, and frontend; demonstrating ability to work as a generalist across varying technologies.</li>
            <li>Contributed to system architecture decisions and scalability planning; introduced testing practices across the codebase.</li>
          </ul>
        </div>

        <div className="job">
          <div className="job-header">
            <div>
              <div className="job-title">Junior Fullstack Web Developer</div>
              <div className="job-company">Promact Infotech</div>
            </div>
            <div className="job-meta">Jun 2014 – Jan 2016<br /><span style={{ color: '#8792a2' }}>Vadodara, India</span></div>
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
      </div>
    </div>
  );
}
