import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  X,
  Zap,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import "./index.css";

const profile = {
  name: "Badal Rajput",
  title: "Software Developer | Java | Spring Boot",
  email: "rajputbadal597@gmail.com",
  github: "https://github.com/Badalrajput2006",
  linkedin: "https://www.linkedin.com/in/badal-rajput-ab8a15289",
  leetcode: "https://leetcode.com/u/badalrajput4545/",
};

const skills = [
  { name: "Java", level: 85, icon: Code2, group: "Backend" },
  { name: "Spring Boot", level: 82, icon: Server, group: "Backend" },
  { name: "Spring Security", level: 76, icon: ShieldCheck, group: "Backend" },
  { name: "REST APIs", level: 80, icon: Zap, group: "Backend" },
  { name: "MySQL", level: 78, icon: Database, group: "Database" },
  { name: "C++", level: 80, icon: Terminal, group: "Programming" },
  { name: "C", level: 80, icon: Terminal, group: "Programming" },
  { name: "Python", level: 65, icon: Code2, group: "Programming" },
  { name: "HTML / CSS", level: 76, icon: Code2, group: "Frontend" },
  { name: "JavaScript", level: 68, icon: Code2, group: "Frontend" },
  { name: "React", level: 62, icon: Code2, group: "Frontend" },
  { name: "Git / GitHub", level: 76, icon: Github, group: "Tools" },
];

const projects = [
  {
    title: "AgriGuard",
    type: "AI-Powered Crop Disease Detection",
    description:
      "A full-stack agriculture platform focused on crop disease detection from leaf images, with authentication, detection history and a disease library.",
    tags: ["Java", "Spring Boot", "React", "MySQL", "AI Vision"],
    accent: "green",
    icon: Sparkles,
    status: "In Development",
    link: null,
  },
  {
    title: "DEPOT",
    type: "Full-Stack E-Commerce Web Application",
    description:
      "A full-stack e-commerce management application for handling products, inventory and core shopping workflows with a Java backend.",
    tags: ["Java", "Spring Boot", "MySQL", "REST API", "React"],
    accent: "violet",
    icon: BriefcaseBusiness,
    status: "Project",
    link: null,
  },
  {
    title: "Library Management System",
    type: "Java Web Application",
    description:
      "A role-based library management system with book, user and issue/return workflows, authentication and MySQL-backed persistence.",
    tags: ["Java", "JSP", "Servlets", "MySQL", "Bootstrap"],
    accent: "blue",
    icon: Database,
    status: "GitHub",
    link: "https://github.com/Badalrajput2006/Library_Management_Project_By_Badal_Rajput.git",
  },
  {
    title: "Student Management System",
    type: "Spring Boot Backend",
    description:
      "A backend-focused student management application built around Spring Boot, relational data and RESTful application design.",
    tags: ["Java", "Spring Boot", "MySQL", "REST API"],
    accent: "orange",
    icon: GraduationCap,
    status: "GitHub",
    link: "https://github.com/Badalrajput2006/Student-Management-System-By-Badal-Rajput.git",
  },
];

const certifications = [
  "Advanced Java — RCPL",
  "Python Programming — RCPL",
  "C++ Programming — RCPL",
  "Advanced C Programming — RCPL",
  "Software Development — Prodigy",
  "C++ Programming — CodSoft",
  "Clash Of Coders Hackathon — 2025",
];

const education = [
  {
    period: "2023 — 2027",
    title: "B.Tech — Computer Science & Engineering",
    place: "Krishna Institute of Technology",
    detail: "CGPA: 8.43",
  },
  {
    period: "2022 — 2023",
    title: "Intermediate",
    place: "U.P. Board",
    detail: "Saraswati Vidhya Mandir Inter College",
  },
];

function Section({ id, eyebrow, title, children, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });

  return (
    <motion.section
      id={id}
      ref={ref}
      className={`section-shell ${className}`}
      initial={{ opacity: 0, y: 34 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      <div className="section-heading">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
        </div>
        <span className="section-number">{id}</span>
      </div>
      {children}
    </motion.section>
  );
}

function TiltCard({ children, className = "" }) {
  const [transform, setTransform] = useState("");

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -4;
    const rotateY = ((x / rect.width) - 0.5) * 5;
    setTransform(`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`);
  };

  return (
    <div
      className={className}
      style={{ transform }}
      onMouseMove={handleMove}
      onMouseLeave={() => setTransform("")}
    >
      {children}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = ["home", "about", "skills", "projects", "experience", "contact"];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const box = el.getBoundingClientRect();
        return box.top <= 150 && box.bottom >= 150;
      });
      if (current) setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    ["about", "About"],
    ["skills", "Skills"],
    ["projects", "Projects"],
    ["experience", "Journey"],
    ["contact", "Contact"],
  ];

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="app">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grid-overlay" />

      <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <button className="brand" onClick={() => go("home")} aria-label="Go to home">
          <span className="brand-mark">BR</span>
          <span>
            <strong>BADAL</strong>
            <small>SOFTWARE DEVELOPER</small>
          </span>
        </button>

        <nav className="desktop-nav">
          {nav.map(([id, label]) => (
            <button key={id} className={active === id ? "active" : ""} onClick={() => go(id)}>
              {label}
            </button>
          ))}
        </nav>

        <a className="nav-cta" href={`mailto:${profile.email}`}>
          Let's Talk <ArrowUpRight size={16} />
        </a>

        <button className="mobile-menu" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {menuOpen && (
        <motion.div className="mobile-nav" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          {nav.map(([id, label]) => (
            <button key={id} onClick={() => go(id)}>{label}</button>
          ))}
          <a href={`mailto:${profile.email}`}>Let's Talk</a>
        </motion.div>
      )}

      <main>
        <section id="home" className="hero section-shell">
          <div className="hero-copy">
            <motion.div
              className="availability"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <span className="pulse-dot" /> Open to software development opportunities
            </motion.div>

            <motion.p
              className="hero-kicker"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
            >
              JAVA • SPRING BOOT • BACKEND DEVELOPMENT
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Building reliable
              <span className="gradient-text"> backend systems.</span>
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              I'm <strong>Badal Rajput</strong>, a Computer Science & Engineering student focused on Java,
              Spring Boot, Spring Security, REST APIs and database-driven applications.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <button className="primary-btn" onClick={() => go("projects")}>
                View Projects <ArrowUpRight size={18} />
              </button>
              <a className="secondary-btn" href={profile.github} target="_blank" rel="noreferrer">
                <Github size={18} /> GitHub
              </a>
            </motion.div>

            <div className="hero-metrics">
              <div><strong>8.43</strong><span>CGPA</span></div>
              <div><strong>Java</strong><span>Primary Stack</span></div>
              <div><strong>2027</strong><span>Graduation</span></div>
            </div>
          </div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="portrait-glow" />
            <div className="portrait-frame">
              <img src="/Badal Profile Pic.jpeg" alt="Badal Rajput" />
              <div className="portrait-scan" />
            </div>
            <div className="floating-card floating-card-one">
              <Code2 size={18} />
              <span><b>Java</b><small>Primary language</small></span>
            </div>
            <div className="floating-card floating-card-two">
              <ShieldCheck size={18} />
              <span><b>Security</b><small>JWT • OAuth2</small></span>
            </div>
          </motion.div>

          <button className="scroll-cue" onClick={() => go("about")} aria-label="Scroll to about">
            <ArrowDown size={17} /> SCROLL TO EXPLORE
          </button>
        </section>

        <Section id="about" eyebrow="01 / ABOUT" title="A developer who likes understanding the backend.">
          <div className="about-grid">
            <div className="about-lead">
              <p>
                I'm a Computer Science & Engineering student who enjoys turning ideas into practical
                software. My strongest area is <span>Java backend development</span>, especially with
                Spring Boot, Spring Security, REST APIs and MySQL.
              </p>
              <p>
                I have worked on academic and personal projects involving authentication, role-based
                access, CRUD workflows, relational data and full-stack application development.
                I am continuously improving my DSA, backend architecture and frontend integration skills.
              </p>
              <div className="mini-stack">
                <span>Java</span><span>Spring Boot</span><span>Spring Security</span><span>MySQL</span>
                <span>REST APIs</span><span>React</span>
              </div>
            </div>

            <div className="about-card">
              <div className="terminal-top"><span /><span /><span /></div>
              <pre>{`const developer = {
  name: "Badal Rajput",
  focus: "Java Backend",
  framework: "Spring Boot",
  security: ["JWT", "OAuth2"],
  database: "MySQL",
  mindset: "Keep learning."
};`}</pre>
            </div>
          </div>
        </Section>

        <Section id="skills" eyebrow="02 / SKILLS" title="Tools I use to build and learn.">
          <div className="skills-grid">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  className="skill-card"
                  key={skill.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.035 }}
                >
                  <div className="skill-head">
                    <span className="skill-icon"><Icon size={17} /></span>
                    <span>{skill.name}</span>
                    <small>{skill.level}%</small>
                  </div>
                  <div className="skill-track"><span style={{ width: `${skill.level}%` }} /></div>
                  <em>{skill.group}</em>
                </motion.div>
              );
            })}
          </div>
        </Section>

        <Section id="projects" eyebrow="03 / PROJECTS" title="Selected work.">
          <div className="projects-grid">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <TiltCard key={project.title} className={`project-card project-${project.accent}`}>
                  <div className="project-card-inner">
                    <div className="project-top">
                      <div className="project-icon"><Icon size={22} /></div>
                      <span className="project-status">{project.status}</span>
                    </div>
                    <span className="project-type">{project.type}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tag-list">
                      {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                    {project.link ? (
                      <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                        View on GitHub <ExternalLink size={15} />
                      </a>
                    ) : (
                      <span className="project-link muted-link">Details available on request</span>
                    )}
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </Section>

        <Section id="experience" eyebrow="04 / JOURNEY" title="Education, certifications & growth.">
          <div className="journey-grid">
            <div>
              <div className="subheading"><GraduationCap size={18} /> Education</div>
              <div className="timeline">
                {education.map((item) => (
                  <div className="timeline-item" key={item.period}>
                    <span className="timeline-dot" />
                    <span className="timeline-period">{item.period}</span>
                    <h3>{item.title}</h3>
                    <p>{item.place}</p>
                    <small>{item.detail}</small>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="subheading"><Sparkles size={18} /> Certifications & Activities</div>
              <div className="cert-list">
                {certifications.map((cert) => (
                  <div className="cert-item" key={cert}>
                    <span><Check size={14} /></span>{cert}
                  </div>
                ))}
              </div>
              <div className="growth-card">
                <span>Current direction</span>
                <strong>Java → Spring Boot → Secure REST APIs → Full-Stack Integration</strong>
                <p>Focused on becoming a stronger software developer through projects, DSA and consistent practice.</p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="contact" eyebrow="05 / CONTACT" title="Let's build something useful.">
          <div className="contact-card">
            <div>
              <span className="eyebrow">GET IN TOUCH</span>
              <h3>Have a project, internship, or software opportunity?</h3>
              <p>I'm interested in opportunities where I can contribute, learn and grow as a Java/Spring Boot developer.</p>
            </div>
            <div className="contact-actions">
              <a className="primary-btn" href={`mailto:${profile.email}`}>
                <Mail size={18} /> Email Me
              </a>
              <a className="secondary-btn" href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </Section>
      </main>

      <footer>
        <div className="footer-inner">
          <div>
            <strong>BADAL RAJPUT</strong>
            <span>Software Developer • Java • Spring Boot</span>
          </div>
          <div className="footer-links">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href={profile.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode"><Terminal size={18} /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></a>
          </div>
          <small>© {new Date().getFullYear()} Badal Rajput. Built with React + Vite + Tailwind CSS.</small>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);