import Image from "next/image";
import FeaturedProjectSlider, {
  type FeaturedProject,
} from "./components/featured-project-slider";
import PortfolioNav from "./components/portfolio-nav";

const toolkitGroups = [
  {
    category: "Frontend",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Vite",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Express.js", "REST APIs", "JWT authentication"],
  },
  {
    category: "Data & Databases",
    technologies: [
      "PostgreSQL",
      "MongoDB",
      "SQL",
      "R",
      "RStudio",
      "Relational database design",
      "SQL querying",
      "Data cleaning",
      "KPI dashboards",
    ],
  },
  {
    category: "Programming",
    technologies: ["C#", "Python"],
  },
  {
    category: "Tools & Workflow",
    technologies: [
      "Git",
      "GitHub",
      "VS Code",
      "DBeaver",
      "Postman",
      "API testing",
      "CRUD architecture",
      "Collaborative development",
      "Conventional Commits",
    ],
  },
];

const aiDataConcepts = [
  "Classification",
  "Clustering",
  "Overfitting",
  "Text mining",
  "Sentiment analysis",
  "ANN",
  "SVM",
  "K-NN fundamentals",
];

const featuredProjects: FeaturedProject[] = [
  {
    number: "01",
    name: "CampusCare",
    subtitle: "Uni Wellbeing Suite",
    type: "Full-stack web application",
    liveDemo: "https://campuscare-platform.vercel.app/",
    imageSrc: "/campuscare-preview.png",
    description:
      "A university wellbeing platform designed to support students academically, emotionally, and practically through one connected system.",
    groups: [
      {
        label: "System roles",
        items: ["Student", "Mentor", "Admin"],
      },
      {
        label: "Key functionality",
        items: [
          "Silent Help support requests",
          "Exam Stress tracking",
          "Mood Campus timeline",
          "Skill Map",
          "Lost & Found",
          "Role-based dashboards",
          "Mentor interaction",
          "Admin management",
          "Audit logs",
        ],
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
    ],
  },
  {
    number: "02",
    name: "MD Creative",
    subtitle: "Event Booking System",
    type: "Full-stack booking & management platform",
    liveDemo: "https://md-creative-event-booking-system.vercel.app/",
    imageSrc: "/md-creative-preview.png",
    description:
      "A booking and management platform shaped around an event-services business, connecting customer bookings with day-to-day administration.",
    groups: [
      {
        label: "Public experience",
        items: ["Home", "Packages", "Booking", "Admin Login"],
      },
      {
        label: "Administrative management",
        items: [
          "Packages",
          "Bookings",
          "Decorations",
          "Mascots",
          "Activities",
          "Gallery",
          "Staff",
        ],
      },
      {
        label: "System capabilities",
        items: [
          "CRUD management",
          "Authentication",
          "JWT",
          "Email functionality",
          "Administrative dashboard",
        ],
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
      "Nodemailer",
    ],
  },
  {
    number: "03",
    name: "Hi5",
    subtitle: "AI Team Leader",
    type: "AI Agent / Hackathon Project",
    team: "Team Hi5",
    award: "3rd Place · AI Hackathon Kosovo 2026",
    githubUrl: "https://github.com/VocaDev/hi5-team-leader",
    imageSrc: "/hi5-preview.svg",
    description:
      "An AI-powered team coordination system that turns a client request into a validated execution plan. The agent prepares the plan, deterministic code checks capacity and operational rules, and a human leader approves it before workers receive detailed tasks with confirmation and progress tracking.",
    groups: [
      {
        label: "Workflow",
        items: [
          "Free-text client request",
          "Capacity and rule validation",
          "Task assignment",
          "Human approval",
          "Worker ACCEPT / CAN'T",
          "Live progress tracking",
          "Safe reassignment when needed",
        ],
      },
      {
        label: "System design",
        items: [
          "AI understands, plans and writes",
          "Deterministic code validates rules",
          "Human remains in control",
          "Telegram worker communication",
          "Role-based reporting",
          "AI plans. Code checks. Human approves.",
        ],
      },
      {
        label: "My contribution",
        items: [
          "Event-domain data and operational rules",
          "Expected test scenarios",
          "Real-business problem validation",
          "Interview and problem-validation input",
          "Demo and pitch support",
        ],
      },
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Uvicorn",
      "Anthropic / Claude",
      "Telegram Bot API",
      "HTML",
      "CSS",
      "JavaScript",
      "JSON",
      "pytest",
    ],
  },
];

const otherProjects = [
  {
    number: "01",
    name: "Business Intelligence Analysis",
    type: "Data / BI academic project",
    description:
      "An end-to-end business intelligence project covering data preparation, metric definition, analysis, and dashboard-driven insights.",
    details: [
      "4,986 records",
      "Data quality analysis",
      "15 defined metrics",
      "KPI/dashboard work",
      "Waste and open records analysis",
    ],
  },
  {
    number: "02",
    name: "Dormitory & Cafeteria Database System",
    type: "Database design project",
    description:
      "A relational database project focused on modeling and managing dormitory and cafeteria operations.",
    details: [
      "ERD design",
      "At least 12 tables",
      "PostgreSQL",
      "SQL",
      "100+ data inserts",
      "Relational queries",
    ],
  },
  {
    number: "03",
    name: "Banking System",
    type: "C# programming project",
    description:
      "A console-based banking application built to practice object-oriented programming and reliable transaction handling.",
    details: [
      "C#",
      "Deposit",
      "Withdraw",
      "Balance",
      "Reports",
      "try/catch exception handling",
    ],
  },
];

const experienceEntries = [
  {
    number: "01",
    organization: "Magic Events",
    role: "Event Operations Team Member",
    period: "2020 — Present",
    description:
      "Support preparation and delivery of children’s and family events, including coordination, client communication, on-site logistics, and service organization. Since 2024, also contribute to digital promotion and social-media content for the family event business.",
  },
];

const leadershipEntries = [
  {
    period: "Oct 2024 — Present",
    role: "Student Representative",
    organization:
      "Faculty of Mechanical Engineering and Computer Engineering, University “Isa Boletini” in Mitrovica",
    description:
      "Coordinate communication between students, faculty, and university administration; prepare announcements, organize meetings, and support academic initiatives.",
  },
  {
    period: "Apr 2026 — Present",
    role: "Community Manager (LinkedIn & Facebook)",
    organization:
      "Faculty of Mechanical Engineering and Computer Engineering, University “Isa Boletini” in Mitrovica",
    description:
      "Manage the department’s LinkedIn and Facebook communities and publish academic news, research achievements, student stories, opportunities, and official announcements.",
  },
];

const selectedActivities = [
  {
    name: "JunctionX Regional Hackathon — DigiCamp & Digital Skills Festival 2026",
    detail: "21–23 May 2026 · Innovation and Training Park (ITP), Prizren",
  },
  {
    name: "International Telecollaboration Project 2026",
    detail:
      "International online collaboration in Computer Science & Engineering",
  },
];

const contactMethods = [
  {
    label: "Personal Email",
    value: "fluturahysenni@gmail.com",
    href: "mailto:fluturahysenni@gmail.com",
    external: false,
  },
  {
    label: "Academic Email",
    value: "flutura.hyseni@umib.net",
    href: "mailto:flutura.hyseni@umib.net",
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/fluturahyseni",
    href: "https://www.linkedin.com/in/fluturahyseni/",
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/fh-umib",
    href: "https://github.com/fh-umib",
    external: true,
  },
];

export default function Home() {
  return (
    <>
      <PortfolioNav />

      <main id="top">
        <section className="hero-shell">
          <section className="hero content-width" aria-labelledby="hero-title">
            <div className="hero-copy">
              <p className="eyebrow hero-intro">Hello, I&apos;m</p>

              <h1 id="hero-title">Flutura Hyseni</h1>

              <p className="hero-description">
                I build full-stack applications and keep exploring how data and
                AI can help solve practical problems.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  Explore My Work
                  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10h11m-4-4 4 4-4 4" />
                  </svg>
                </a>

                <a className="button button-secondary" href="#contact">
                  Get in Touch
                </a>

                <a
                  className="hero-cv-link"
                  href="/Flutura-Hyseni-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Flutura Hyseni's CV (PDF, opens in a new tab)"
                >
                  <span>View CV</span>

                  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
                    <path d="M5 15 15 5M6 5h9v9" />
                  </svg>
                </a>
              </div>

              <div className="hero-socials" aria-label="Social profiles">
                <a
                  href="https://github.com/fh-umib"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Flutura Hyseni on GitHub (opens in a new tab)"
                  title="GitHub"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.31-3.76-1.31-.51-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.21 3.26.93.1-.72.39-1.21.71-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.62 10.62 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.27-2.6 5.21-5.08 5.49.4.35.76 1.02.76 2.06v3.07c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                  </svg>

                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/fluturahyseni/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Flutura Hyseni on LinkedIn (opens in a new tab)"
                  title="LinkedIn"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.9H4.98V9.4h2.95v9.5ZM6.45 8.1a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.47 10.8h-2.94v-4.62c0-1.1-.02-2.51-1.53-2.51-1.53 0-1.77 1.2-1.77 2.43v4.7H9.74V9.4h2.82v1.3h.04c.39-.74 1.35-1.52 2.78-1.52 2.97 0 3.54 1.96 3.54 4.51v5.21Z" />
                  </svg>

                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="hero-art">
              <div className="portrait-stage">
                <span
                  className="seal-axis seal-axis-horizontal"
                  aria-hidden="true"
                />

                <span
                  className="seal-axis seal-axis-vertical"
                  aria-hidden="true"
                />

                <span className="portrait-outline" aria-hidden="true" />

                <figure className="portrait-frame">
                  <Image
                    className="portrait-image"
                    src="/flutura-hyseni.jpg"
                    alt="Portrait of Flutura Hyseni"
                    fill
                    priority
                    sizes="(max-width: 760px) 78vw, (max-width: 980px) 34vw, 390px"
                  />
                </figure>

                <span
                  className="seal-index portrait-index"
                  aria-hidden="true"
                >
                  FH / 01
                </span>

                <span
                  className="seal-caption portrait-caption"
                  aria-hidden="true"
                >
                  LEARN · BUILD · REFINE
                </span>

                <span className="coord coord-tl" aria-hidden="true">
                  FIG. 01 / PORTRAIT
                </span>

                <span className="coord coord-br" aria-hidden="true">
                  X 00 · Y 00
                </span>
              </div>

              <span className="art-note">A practice in progress</span>
            </div>
          </section>

          <div className="hero-bottom content-width" aria-hidden="true">
            <span>COMPUTER SCIENCE &amp; ENGINEERING</span>
            <span className="hero-bottom-line" />
            <span>PORTFOLIO / 2026</span>
          </div>
        </section>

        <section
          id="about"
          className="portfolio-section about-section"
          aria-labelledby="about-title"
        >
          <div className="section-inner content-width">
            <div className="section-heading about-heading">
              <p className="section-kicker">
                <span className="section-number">01</span>
                <span>ABOUT</span>
              </p>

              <h2 id="about-title">About Me</h2>
            </div>

            <div className="about-layout">
              <h3 className="about-statement">
                I&apos;m a Computer Science &amp; Engineering student who learns
                best by building.
              </h3>

              <div className="about-copy">
                <p>
                  My work has grown from coursework into complete applications
                  where I can explore how interfaces, data, backend logic, and
                  real user needs come together. I enjoy taking an idea from its
                  first rough version, understanding what does and doesn&apos;t
                  work, and improving it until it becomes something useful.
                </p>

                <p>
                  Right now, I&apos;m focused on strengthening my software
                  development skills through practical projects, academic work,
                  and new technical challenges.
                </p>
              </div>
            </div>

            <div className="process-note" aria-label="Learn. Build. Refine.">
              <span className="process-label">A WORKING RHYTHM</span>

              <ol className="process-steps">
                <li>Learn.</li>
                <li>Build.</li>
                <li>Refine.</li>
              </ol>
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="portfolio-section toolkit-section"
          aria-labelledby="toolkit-title"
        >
          <div className="section-inner content-width">
            <div className="toolkit-heading">
              <div className="section-heading">
                <p className="section-kicker">
                  <span className="section-number">02</span>
                  <span>TECHNICAL TOOLKIT</span>
                </p>

                <h2 id="toolkit-title">Technical Toolkit</h2>
              </div>

              <p className="toolkit-intro">
                Tools I use to turn ideas into working projects.
              </p>
            </div>

            <div className="toolkit-grid">
              {toolkitGroups.map(({ category, technologies }, index) => (
                <article className="toolkit-module" key={category}>
                  <div className="toolkit-module-head">
                    <span className="toolkit-ring" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3>{category}</h3>

                    <span className="toolkit-count">
                      {String(technologies.length).padStart(2, "0")} items
                    </span>
                  </div>

                  <ul
                    className="toolkit-chips"
                    aria-label={`${category} skills`}
                  >
                    {technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="toolkit-exploring">
              <span>02 / A · ALSO EXPLORING</span>

              <ul aria-label="AI and data concepts">
                {aiDataConcepts.map((concept) => (
                  <li key={concept}>{concept}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="portfolio-section projects-section"
          aria-labelledby="projects-title"
        >
          <div className="section-inner content-width">
            <div className="projects-intro">
              <div className="section-heading">
                <p className="section-kicker">
                  <span className="section-number">03</span>
                  <span>SELECTED WORK</span>
                </p>

                <h2 id="projects-title">Projects</h2>
              </div>

              <p className="projects-lede">
                A selection of projects where I turned coursework, ideas, and
                real needs into working software.
              </p>
            </div>

            <FeaturedProjectSlider projects={featuredProjects} />

            <section className="other-work" aria-labelledby="other-work-title">
              <div className="other-work-heading">
                <div>
                  <p className="section-kicker">
                    <span className="section-number">03 / B</span>
                    <span>ADDITIONAL PROJECTS</span>
                  </p>

                  <h3 id="other-work-title">Other Work</h3>
                </div>

                <p>A compact index of academic and programming work.</p>
              </div>

              <div className="other-work-list">
                {otherProjects.map((project) => (
                  <article className="other-work-row" key={project.number}>
                    <span className="other-work-number">{project.number}</span>

                    <div className="other-work-main">
                      <p className="other-work-type">{project.type}</p>

                      <h4>{project.name}</h4>

                      <p className="other-work-description">
                        {project.description}
                      </p>
                    </div>

                    <ul className="other-work-details">
                      {project.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </section>

        <section className="quote-section" aria-label="My approach">
          <div className="quote-inner content-width">
            <p className="section-kicker">
              <span className="section-number">—</span>
              <span>MY APPROACH</span>
            </p>

            <blockquote>
              <span className="quote-mark" aria-hidden="true">
                “
              </span>

              Learning becomes meaningful when I can turn it into something
              real.

              <span className="quote-close" aria-hidden="true">
                ”
              </span>
            </blockquote>

            <span className="quote-line" aria-hidden="true" />
          </div>
        </section>

        <section
          id="experience"
          className="portfolio-section journey-section experience-section"
          aria-labelledby="experience-title"
        >
          <div className="section-inner content-width">
            <div className="journey-intro">
              <div className="section-heading">
                <p className="section-kicker">
                  <span className="section-number">04</span>
                  <span>EXPERIENCE</span>
                </p>

                <h2 id="experience-title">Experience</h2>
              </div>

              <p className="journey-lede">
                Work beyond the classroom has taught me how to communicate,
                organize, adapt, and turn ideas into something people can
                actually use.
              </p>
            </div>

            <div className="experience-layout">
              <div className="experience-stack">
                {experienceEntries.map((entry) => (
                  <article
                    className="experience-entry experience-entry-primary"
                    key={entry.organization}
                  >
                    <div className="experience-identity">
                      <span className="journey-index">
                        {entry.number} / {entry.period}
                      </span>

                      <h3>{entry.role}</h3>

                      <p>{entry.organization}</p>
                    </div>

                    <div className="experience-detail">
                      <p className="experience-description">
                        {entry.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              <section
                className="leadership-panel"
                aria-labelledby="leadership-title"
              >
                <p className="section-kicker">
                  <span className="section-number">04 / A</span>
                  <span>LEADERSHIP &amp; COMMUNITY</span>
                </p>

                <h3 id="leadership-title">Leadership &amp; Community</h3>

                <div className="leadership-entries">
                  {leadershipEntries.map((entry) => (
                    <article className="leadership-entry" key={entry.role}>
                      <p className="education-status">{entry.period}</p>

                      <h4>{entry.role}</h4>

                      <p className="leadership-organization">
                        {entry.organization}
                      </p>

                      <p className="leadership-description">
                        {entry.description}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>

        <section
          id="education"
          className="portfolio-section journey-section education-section"
          aria-labelledby="education-title"
        >
          <div className="section-inner content-width">
            <div className="journey-intro education-intro">
              <div className="section-heading">
                <p className="section-kicker">
                  <span className="section-number">05</span>
                  <span>EDUCATION</span>
                </p>

                <h2 id="education-title">Education</h2>
              </div>

              <p className="journey-lede">
                Learning through study, practical work, and continued
                participation beyond the classroom.
              </p>
            </div>

            <div className="education-layout">
              <ol className="education-journey">
                <li className="education-entry education-entry-earlier">
                  <div className="education-marker">
                    <span>01</span>
                  </div>

                  <div className="education-entry-copy">
                    <p className="education-status">EARLIER EDUCATION</p>

                    <h3>Gymnasium &quot;Eqrem Çabej&quot;</h3>

                    <p className="education-meta">High School · Completed</p>
                  </div>
                </li>

                <li className="education-entry education-entry-current">
                  <div className="education-marker">
                    <span>02</span>
                  </div>

                  <div className="education-entry-copy">
                    <p className="education-status">
                      CURRENT STUDY · 2024 — 2027 (EXPECTED)
                    </p>

                    <h3>Computer Science &amp; Engineering</h3>

                    <p className="education-institution">
                      University &quot;Isa Boletini&quot; Mitrovica
                    </p>

                    <p className="education-meta">
                      Final-year undergraduate student
                    </p>

                    <p className="education-description">
                      Building a foundation across software development,
                      databases, computer systems, data analysis, and
                      engineering-focused problem solving.
                    </p>
                  </div>
                </li>
              </ol>

              <section
                className="activities-index"
                aria-labelledby="activities-title"
              >
                <div className="activities-heading">
                  <p className="section-kicker">
                    <span className="section-number">05 / A</span>
                    <span>BEYOND COURSEWORK</span>
                  </p>

                  <h3 id="activities-title">Selected Activities</h3>
                </div>

                <ol className="activities-list">
                  {selectedActivities.map((activity, index) => (
                    <li className="activity-entry" key={activity.name}>
                      <span className="activity-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>
                        <h4>{activity.name}</h4>
                        <p>{activity.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="portfolio-section contact-section"
          aria-labelledby="contact-title"
        >
          <div className="section-inner content-width">
            <div className="contact-heading">
              <p className="section-kicker">
                <span className="section-number">06</span>
                <span>CONTACT</span>
              </p>

              <span className="contact-heading-rule" aria-hidden="true" />
            </div>

            <div className="contact-layout">
              <h2 id="contact-title">
                Let&apos;s build something worth sharing.
              </h2>

              <div className="contact-copy">
                <p>
                  I&apos;m always open to learning, collaborating, and
                  connecting around interesting ideas, projects, and
                  opportunities.
                </p>

                <ul className="contact-methods" aria-label="Contact methods">
                  {contactMethods.map((method) => (
                    <li className="contact-method" key={method.label}>
                      <a
                        href={method.href}
                        target={method.external ? "_blank" : undefined}
                        rel={
                          method.external ? "noopener noreferrer" : undefined
                        }
                      >
                        <span className="contact-method-label">
                          {method.label}
                        </span>

                        <span className="contact-method-value">
                          {method.value}
                        </span>

                        <svg
                          aria-hidden="true"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path d="M5 15 15 5M6 5h9v9" />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>

                <a
                  className="contact-cv-link"
                  href="/Flutura-Hyseni-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Flutura Hyseni's CV (PDF, opens in a new tab)"
                >
                  View CV (PDF)

                  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
                    <path d="M5 15 15 5M6 5h9v9" />
                  </svg>
                </a>
              </div>
            </div>

            <p className="contact-signoff">
              <span className="contact-signoff-mark" aria-hidden="true" />
              Open to a good conversation
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner content-width">
          <div className="footer-identity">
            <span className="footer-name">Flutura Hyseni</span>

            <span className="footer-field">
              Computer Science &amp; Engineering Student
            </span>
          </div>

          <p className="footer-closing">
            Learning, building, and refining — one project at a time.
          </p>

          <nav className="footer-links" aria-label="Footer links">
            {contactMethods
              .filter(
                (method) =>
                  method.label === "Personal Email" ||
                  method.label === "LinkedIn" ||
                  method.label === "GitHub",
              )
              .map((method) => (
                <a
                  href={method.href}
                  key={method.label}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noopener noreferrer" : undefined}
                >
                  {method.label === "Personal Email"
                    ? "Email"
                    : method.label}
                </a>
              ))}

            <a
              href="/Flutura-Hyseni-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
          </nav>
        </div>

        <div className="footer-bottom content-width">
          <p>© {new Date().getFullYear()} Flutura Hyseni</p>

          <a className="back-to-top" href="#top">
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  );
}