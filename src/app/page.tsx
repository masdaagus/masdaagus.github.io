import { CustomNavbar } from "@/components/CustomNavbar";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa6";


export default function TestPage() {
  return (
    <div className="min-h-screen bg-[#fafaf8]  text-[#111110] font-sans">
      <CustomNavbar />

      {/* HERO */}
      <div className="mx-auto max-w-3xl px-6">
        <header className="py-20 border-b border-zinc-200">
          <div className="flex flex-col lg:flex-row lg:items-center gap-12">
            {/* Text */}
            <div className="flex-1">
              <p className="text-[12px] tracking-[0.12em] uppercase text-zinc-400 mb-5">
                Mobile &amp; Frontend Developer &middot; Surabaya, Indonesia
              </p>
              <h1 className="font-serif text-[clamp(36px,6vw,52px)] leading-[1.08] tracking-[-0.02em] text-[#111110]">
                Building mobile apps
              </h1>
              <p className="font-serif text-[clamp(32px,6vw,42px)] md:text-[clamp(36px,6vw,45px)] leading-[1.08] tracking-[-0.02em] mb-6 italic text-zinc-500">that people actually use.</p>
              <p className="text-[16px] text-zinc-500 leading-relaxed max-w-[520px] mb-8">
                I&apos;m Masda Agus Ruswoko — 4+ years crafting Flutter apps for Android &amp; iOS at PT. Triple One Global.
                I also work across the stack with React and Next.js, an d I believe good software is as much about the
                experience as the code behind it.
              </p>
              <div className="flex flex-wrap gap-2 mb-9">
                <span className="text-[12px] px-3 py-1 border border-zinc-200 rounded-full text-zinc-500 bg-[#f2f2ee]">
                  Open to full-time opportunities
                </span>
                {["Flutter", "React", "Next.js", "CI/CD", "Surabaya · Remote OK"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[12px] px-3 py-1 border border-zinc-200 rounded-full text-zinc-500 bg-[#f2f2ee]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 flex-wrap mb-10">
                <a href="#projects" className="inline-flex items-center gap-1.5 text-[13px] font-medium px-5 py-2.5 rounded-md bg-[#111110] text-[#fafaf8] no-underline hover:bg-[#333330] transition-all duration-150">
                  View Projects
                </a>
                <a href="#contact" className="inline-flex items-center gap-1.5 text-[13px] font-medium px-5 py-2.5 rounded-md bg-transparent text-[#111110] border border-zinc-200 no-underline hover:border-zinc-400 hover:bg-[#f2f2ee] transition-all duration-150">
                  Get in Touch
                </a>
                <a href="https://www.linkedin.com/in/masda-agus-1393a01b4/" target="_blank" className="inline-flex items-center gap-1.5 text-[13px] font-medium px-5 py-2.5 rounded-md bg-transparent text-[#111110] border border-zinc-200 no-underline hover:border-zinc-400 hover:bg-[#f2f2ee] transition-all duration-150">
                  LinkedIn
                </a>
              </div>
              <div className="flex flex-col sm:flex-row gap-[18px] pt-8 border-t border-zinc-200">
                <a href="https://github.com/masdaagus" target="_blank" className="inline-flex items-center gap-1.5 text-[12px] tracking-wide text-zinc-400 no-underline hover:text-[#111110] transition-colors duration-150">
                  <FaGithub className="h-3.5 w-3.5" /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/masda-agus-1393a01b4/" target="_blank" className="inline-flex items-center gap-1.5 text-[12px] tracking-wide text-zinc-400 no-underline hover:text-[#111110] transition-colors duration-150">
                  <FaLinkedin className="h-3.5 w-3.5" /> LinkedIn
                </a>
                <a href="https://www.instagram.com/masdaagus/" target="_blank" className="inline-flex items-center gap-1.5 text-[12px] tracking-wide text-zinc-400 no-underline hover:text-[#111110] transition-colors duration-150">
                  <FaInstagram className="h-3.5 w-3.5" /> Instagram
                </a>
                <a href="mailto:masdaagusruswoko@gmail.com" className="inline-flex items-center gap-1.5 text-[12px] tracking-wide text-zinc-400 no-underline hover:text-[#111110] transition-colors duration-150">
                  <FaEnvelope className="h-3.5 w-3.5" /> masdaagusruswoko@gmail.com
                </a>
              </div>
            </div>
            {/* Photo */}
            <div className="flex-shrink-0 mx-auto">
              <div className="w-[280px] h-[280px] max-w-full">
                <Image
                  src="/img-profile-2.jpg"
                  alt="Masda Agus"
                  width={280}
                  height={280}
                  className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover transition duration-1000"
                />
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* SKILLS */}
      <section id="skills">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-[11px] tracking-[0.14em] uppercase text-zinc-300 mb-8">Technical Skills</p>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {skills.map((skill, i) => (
              <div
                key={skill.cat}
                className={`flex items-baseline gap-4 py-[14px] border-b border-zinc-200 ${
                  i % 2 === 0 ? "sm:pr-8 sm:border-r sm:border-zinc-200" : "sm:pl-8"
                }`}
              >
                <span className="text-[12px] text-zinc-400 min-w-[96px] flex-shrink-0">{skill.cat}</span>
                <span className="text-[13px] text-zinc-500 leading-relaxed">
                  {skill.items.map((item, j) => (
                    <span key={item.name}>
                      {j > 0 && ", "}
                      <span className={item.highlight ? "text-[#111110] font-medium" : ""}>{item.name}</span>
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-[11px] tracking-[0.14em] uppercase text-zinc-300 mb-8">Experience</p>
          <div className="flex flex-col">
            {experiences.map((exp) => (
              <div key={exp.company} className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-1 sm:gap-7 py-6 border-b border-zinc-200 last:border-b-0">
                <p className="text-[12px] text-zinc-400 pt-0.5 leading-relaxed">{exp.period}</p>
                <div>
                  <p className="text-[15px] font-medium text-[#111110] mb-0.5">{exp.company}</p>
                  <p className="text-[13px] text-zinc-400 mb-2.5">{exp.role}</p>
                  <ul className="list-none flex flex-col gap-1.5">
                    {exp.bullets.map((b) => (
                      <li key={b} className="text-[13px] text-zinc-500 pl-[14px] relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-zinc-300 before:text-[11px] before:top-0.5">
                        {b}
                      </li>
                    ))}
                  </ul>
                  {exp.achievement && (
                    <div className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#111110] bg-[#f2f2ee] border border-zinc-200 rounded px-2.5 py-1 mt-2 before:content-['↑'] before:text-[11px]">
                      {exp.achievement}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-[11px] tracking-[0.14em] uppercase text-zinc-300 mb-8">Projects</p>
          <p className="text-[13px] text-zinc-400 mb-8 max-w-[480px]">
            A selection of work I can share — some professional projects remain confidential by agreement.
          </p>
          <div className="flex flex-col">
            {projects.map((project) => (
              <div key={project.name} className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 py-6 border-b border-zinc-200 items-start last:border-b-0">
                <div>
                  <p className="text-[15px] font-medium text-[#111110] mb-1">{project.name}</p>
                  <p className="text-[13px] text-zinc-500 leading-relaxed mb-2.5">{project.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[11px] px-2 py-0.5 border border-zinc-200 rounded text-zinc-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex sm:flex-col gap-1.5 items-start sm:items-end">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      className="text-[12px] text-zinc-400 no-underline border border-zinc-200 px-2.5 py-1 rounded whitespace-nowrap hover:text-[#111110] hover:border-zinc-400 transition-all duration-150"
                    >
                      {link.label}
                    </a>
                  ))}
                  {project.badge && (
                    <span className="text-[11px] px-2 py-0.5 rounded bg-[#f2f2ee] text-zinc-400 border border-zinc-200 whitespace-nowrap self-start">
                      {project.badge}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-[11px] tracking-[0.14em] uppercase text-zinc-300 mb-8">About</p>
          <div className="max-w-[560px]">
            <p className="text-[15px] text-zinc-500 leading-relaxed mb-5">
              I&apos;m a Mobile Developer with 4+ years of experience building Flutter applications for Android and iOS.
              Currently based in Surabaya, I&apos;m open to full-time opportunities in mobile or fullstack development
              (React/Next.js). I have a track record of optimizing app performance and implementing CI/CD pipelines that
              meaningfully cut release cycles.
            </p>
            <p className="text-[15px] text-zinc-500 leading-relaxed mb-5">
              But my path here wasn&apos;t straightforward — and I think that&apos;s worth telling.
            </p>
            <p className="text-[15px] text-zinc-500 leading-relaxed mb-5">
              Back in 2019, I was working as a factory patroller at PT. Cemindo Gemilang. One day, I got talking with my
              supervisor — a genuinely sharp person, calm and methodical. I noticed that despite being clearly intelligent,
              he had taken longer than most to finish his degree. I asked him why.
            </p>
            <div className="border-l-2 border-zinc-200 pl-5 my-7">
              <p className="font-serif italic text-[16px] text-zinc-500 mb-2">
                &ldquo;Because I didn&apos;t have a skill worth selling yet. So there was no rush to graduate. We should
                work based on our skills — not on who we know. That&apos;s the only way to be truly valued.&rdquo;
              </p>
              <cite className="text-[12px] text-zinc-300 not-italic">
                — My supervisor at PT. Cemindo Gemilang, 2019
              </cite>
            </div>
            <p className="text-[15px] text-zinc-500 leading-relaxed mb-5">
              That answer hit differently. I had no higher education background. If I couldn&apos;t rely on credentials
              or connections, the only thing I could build was skill. So I started teaching myself how to code — from
              scratch, on my own time, alongside a full-time job.
            </p>
            <p className="text-[15px] text-zinc-500 leading-relaxed mb-5">
              When it came to choosing a direction, I chose Mobile Development. My reasoning was simple: everyone has a
              smartphone, and the demand for good apps was only going to grow. That bet has paid off in ways I didn&apos;t
              expect.
            </p>
            <p className="text-[15px] text-zinc-500 leading-relaxed mb-5">
              I&apos;ve since shipped apps to the App Store and Play Store, built CI/CD pipelines that cut release cycles
              by 60%, and expanded into frontend web with React and Next.js. I&apos;m still self-driven, still curious,
              and still learning — now exploring fullstack development as my next chapter.
            </p>
            <p className="text-[14px] text-zinc-400 leading-relaxed">
              I believe good design has a real impact on people&apos;s lives — not just how things look, but how they
              work. That belief is what drives me to keep building.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-[11px] tracking-[0.14em] uppercase text-zinc-300 mb-8">Get in Touch</p>
          <p className="text-[15px] text-zinc-500 leading-relaxed max-w-[440px] mb-7">
            Currently open to full-time roles in Mobile or Fullstack Development. Feel free to reach out — I respond to
            every message.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 border border-zinc-200 rounded-lg overflow-hidden">
            <a href="mailto:masdaagusruswoko@gmail.com" className="bg-[#fafaf8] px-6 py-5 no-underline hover:bg-[#f2f2ee] transition-colors duration-150 border-b border-zinc-200 sm:border-b-0 sm:border-r border-zinc-200">
              <p className="text-[11px] tracking-[0.08em] uppercase text-zinc-300 mb-1">Email</p>
              <p className="text-[14px] text-[#111110]">masdaagusruswoko@gmail.com</p>
            </a>
            <a href="https://www.linkedin.com/in/masda-agus-1393a01b4/" target="_blank" className="bg-[#fafaf8] px-6 py-5 no-underline hover:bg-[#f2f2ee] transition-colors duration-150 border-b border-zinc-200 sm:border-b-0">
              <p className="text-[11px] tracking-[0.08em] uppercase text-zinc-300 mb-1">LinkedIn</p>
              <p className="text-[14px] text-[#111110]">Masda Agus</p>
            </a>
            <a href="https://github.com/masdaagus" target="_blank" className="bg-[#fafaf8] px-6 py-5 no-underline hover:bg-[#f2f2ee] transition-colors duration-150">
              <p className="text-[11px] tracking-[0.08em] uppercase text-zinc-300 mb-1">GitHub</p>
              <p className="text-[14px] text-[#111110]">masdaagus</p>
            </a>
            <a href="tel:+6281260741178" className="bg-[#fafaf8] px-6 py-5 no-underline hover:bg-[#f2f2ee] transition-colors duration-150 border-t sm:border-t-0 sm:border-l border-zinc-200">
              <p className="text-[11px] tracking-[0.08em] uppercase text-zinc-300 mb-1">Phone / WhatsApp</p>
              <p className="text-[14px] text-[#111110]">+62 812 6074 1178</p>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200 py-8 mt-16 mb-6">
        <div className="mx-auto max-w-3xl px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[12px] text-zinc-300">&copy; 2025 Masda Agus Ruswoko</p>
          <div className="flex items-center gap-2 text-[12px] text-zinc-500">
            <span className="w-[7px] h-[7px] rounded-full bg-[#3B6D11] flex-shrink-0"></span>
            Open to opportunities &middot; Surabaya, Indonesia
          </div>
        </div>
      </footer>
    </div>
  );
}

const skills = [
  { cat: "Mobile", items: [{ name: "Flutter", highlight: true }, { name: "Kotlin" }, { name: "Dart" }] },
  { cat: "State Mgmt", items: [{ name: "BLoC", highlight: true }, { name: "Provider" }, { name: "GetX" }] },
  { cat: "Frontend", items: [{ name: "React", highlight: true }, { name: "Next.js" }, { name: "TypeScript" }, { name: "TailwindCSS" }] },
  { cat: "DevOps", items: [{ name: "Fastlane", highlight: true }, { name: "Jenkins" }, { name: "CI/CD" }, { name: "Git" }] },
  { cat: "Services", items: [{ name: "Firebase FCM" }, { name: "RESTful APIs" }, { name: "Postman" }] },
  { cat: "Tools", items: [{ name: "Figma" }, { name: "JIRA" }, { name: "Android Studio" }, { name: "Xcode" }] },
];

const experiences = [
  {
    period: "Aug 2022 — Present",
    company: "PT. Triple One Global",
    role: "Mobile Developer · Surabaya, Indonesia",
    bullets: [
      "Design and develop cross-platform mobile apps using Flutter for Android & iOS",
      "Collaborate with designers and backend engineers in a cross-functional team",
      "Optimize app performance through state management with BLoC, Provider, and GetX",
      "Conduct code reviews and maintain high code quality standards",
      "Deploy apps to App Store and Google Play Store",
      "Utilize Git for version control, collaborating via GitLab/GitHub",
    ],
    achievement: "CI/CD with Fastlane — release cycles reduced by 60%",
  },
  {
    period: "Aug 2020 — Present",
    company: "Freelance",
    role: "Mobile Developer · Medan, Indonesia",
    bullets: [
      "Built mobile applications for independent clients across various industries",
      "Handled full project lifecycle from design to deployment",
    ],
  },
  {
    period: "Sep 2018 — Aug 2022",
    company: "PT. Cemindo Gemilang",
    role: "Mobile Developer & IT Support · Medan, Indonesia",
    bullets: [
      "Designed and developed mobile apps using Flutter for Android",
      "Implemented push notification features using Firebase Cloud Messaging (FCM)",
      "Collaborated with IT team to implement system upgrades, updates, and patches",
      "Installed, configured, and maintained IT infrastructure including desktops, laptops, and peripherals",
    ],
  },
];

const projects = [
  {
    name: "Monster Pro",
    desc: "A property super-app actively collaborating with property industry players — developers, service vendors, offices, and agents — under the auspices of AREBI.",
    tags: ["Flutter", "Android", "iOS", "CI/CD"],
    links: [
      { label: "App Store", href: "https://apps.apple.com/us/app/monster-pro/id6450938268" },
      { label: "Play Store", href: "https://play.google.com/store/apps/details?id=id.monsterpro.apps&hl=en" },
    ],
  },
  {
    name: "Casso",
    desc: "A restaurant app that streamlines the order-to-payment workflow and generates operational reports — improving service quality and dining experience.",
    tags: ["Flutter", "Android", "POS System"],
    links: [{ label: "GitHub", href: "https://github.com/masdaagus/Casso" }],
  },
  {
    name: "Inspection Machine",
    desc: "A mobile inspection tool built for industrial use, enabling field teams to log, track, and report machine inspections efficiently.",
    tags: ["Flutter", "Android", "Industrial"],
    links: [{ label: "GitHub", href: "https://github.com/masdaagus/Inspection-App" }],
  },
  {
    name: "Note Encryption",
    desc: "A secure note-taking app with end-to-end encryption using DES and RSA algorithms — combining utility with cryptographic safety.",
    tags: ["Flutter", "Cryptography", "DES", "RSA"],
    links: [{ label: "GitHub", href: "https://github.com/masdaagus/Note-Encryption-App" }],
  },
  {
    name: "Cashback Count",
    desc: "A utility app that helps users calculate and compare cashback deals, finding the best value in an increasingly cashback-heavy market.",
    tags: ["Flutter", "Android", "Utility"],
    links: [{ label: "GitHub", href: "https://github.com/masdaagus/Cashback-count" }],
  },
  {
    name: "Fullstack Project",
    desc: "Currently in development — a fullstack web application exploring React, Next.js, and backend integration. Details coming soon.",
    tags: ["Next.js", "React", "TypeScript"],
    links: [],
    badge: "In Development",
  },
];
