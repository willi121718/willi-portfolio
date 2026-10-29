import './App.css'

const projects = [
  {
    number: '01',
    name: 'Laundrykan',
    category: 'Full-Stack Application',
    description:
      'Platform layanan laundry dengan alur pemesanan, pengelolaan pesanan, wallet, dan integrasi pembayaran Midtrans Sandbox.',
    stack: ['Laravel', 'PHP', 'MySQL', 'Midtrans'],
    featured: true,
    link: 'https://github.com/willi121718/Laundrykan',
    label: 'REAL APPLICATION PREVIEW',
    visual: 'laundry',
  },
  {
    number: '02',
    name: 'Kerinci Kultur',
    category: 'Web Information System',
    description:
      'Sistem informasi pemesanan paket wisata berbasis web untuk membantu pelanggan menemukan paket dan melakukan pemesanan secara online.',
    stack: ['PHP', 'MySQL', 'Bootstrap'],
    featured: false,
    link: 'https://github.com/willi121718',
    label: 'INFORMATION SYSTEM',
    visual: 'kerinci',
  },
]

const skills = [
  { number: '01', title: 'Backend', tools: 'PHP / Laravel / REST API' },
  { number: '02', title: 'Database', tools: 'MySQL / SQL / Migrations' },
  { number: '03', title: 'Frontend', tools: 'HTML / CSS / JavaScript / React' },
  { number: '04', title: 'Engineering', tools: 'Git / Postman / Testing' },
]

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? '↗' : '↘'}</span>
}

function ProjectVisual({ project }) {
  return (
    <div className={`project-visual ${project.visual}`}>
      <div className="visual-topline">
        <span>W / PROJECT-{project.number}</span>
        <span>{project.label}</span>
      </div>

      {project.featured ? (
        <a
          className="laundry-real-preview"
          href="/images/laundrykan-home.png"
          target="_blank"
          rel="noreferrer"
          aria-label="Buka screenshot halaman utama Laundrykan"
        >
          <img
            src="/images/laundrykan-home.png"
            alt="Screenshot halaman utama aplikasi Laundrykan"
            loading="lazy"
          />
          <span className="preview-label">
            LAUNDRYKAN / HOMEPAGE ↗
          </span>
        </a>
      ) : (
        <div className="kerinci-art">
          <span className="kerinci-orbit orbit-one" />
          <span className="kerinci-orbit orbit-two" />
          <span className="kerinci-sun" />
          <div className="kerinci-title">
            <small>EXPLORE THE EXPERIENCE</small>
            <strong>
              KERINCI
              <br />
              KULTUR<span>.</span>
            </strong>
            <span className="kerinci-caption">
              TOURISM BOOKING SYSTEM — 002
            </span>
          </div>
          <div className="kerinci-coordinate">01°45′ S / 101°15′ E</div>
        </div>
      )}

      <span className="visual-index">{project.number}</span>
    </div>
  )
}

function App() {
  return (
    <div className="portfolio">
      <div className="top-line" />

      <header className="navbar">
        <a className="brand" href="#home" aria-label="Willi Dev home">
          willi<span>.dev</span><i>®</i>
        </a>

        <nav aria-label="Navigasi utama">
          <a href="#about">Tentang</a>
          <a href="#skills">Keahlian</a>
          <a href="#projects">Proyek</a>
        </nav>

        <a className="nav-contact" href="#contact">
          Mari terhubung <Arrow diagonal />
        </a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" />
              OPEN TO OPPORTUNITIES
              <span className="availability-year">2026</span>
            </div>

            <p className="eyebrow">FULL-STACK DEVELOPER / INDONESIA</p>

            <h1>
              I BUILD
              <br />
              <span className="headline-outline">DIGITAL</span>
              <br />
              <span className="headline-lime">SOLUTIONS.</span>
            </h1>

            <p className="hero-description">
              Halo, saya Willi. Saya membangun aplikasi web dengan fokus pada
              backend, integrasi API, dan sistem yang menyelesaikan masalah nyata.
            </p>

            <div className="hero-actions">
              <a className="button button-lime" href="#projects">
                Explore my work <Arrow />
              </a>
              <a
                className="button button-outline"
                href="https://github.com/willi121718"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <Arrow diagonal />
              </a>
            </div>

            <div className="hero-meta">
              <span><i /> BASED IN INDONESIA</span>
              <span>PHP · LARAVEL · REACT</span>
            </div>
          </div>

          <div className="hero-art">
            <div className="hero-art-label">SELECTED WORK / 2026</div>
            <div className="hero-art-grid" />

            <div className="hero-monogram">
              <span>W</span>
              <i className="monogram-corner corner-one" />
              <i className="monogram-corner corner-two" />
              <i className="monogram-corner corner-three" />
              <i className="monogram-corner corner-four" />
            </div>

            <div className="orbit orbit-a" />
            <div className="orbit orbit-b" />
            <div className="orbit-dot" />

            <div className="floating-code">
              <span className="floating-code-label">CURRENT FOCUS</span>
              <code><b>const</b> future = <em>'full-stack'</em>;</code>
              <span className="floating-code-status">
                <i /> ALWAYS LEARNING
              </span>
            </div>

            <span className="hero-side-note">DESIGN / BUILD / ITERATE</span>
            <span className="hero-art-number">001 — 004</span>
          </div>

          <div className="hero-bottomline">
            <span>FROM IDEA TO IMPLEMENTATION.</span>
            <a href="#about">SCROLL TO EXPLORE ↓</a>
          </div>
        </section>

        <section className="about section-wrap" id="about">
          <div className="section-marker">
            <span>01</span>
            <span>THE DEVELOPER</span>
          </div>

          <div className="about-main">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <h2>
              Bukan sekadar membuat website.
              <span> Saya membangun solusi yang punya tujuan.</span>
            </h2>
            <p className="about-description">
              Dengan latar belakang S1 Sistem Informasi dan D3 Manajemen
              Informatika, saya mengembangkan kemampuan full-stack melalui
              proyek nyata. Saya tertarik pada bagaimana frontend, backend,
              database, dan API bekerja bersama menjadi satu sistem.
            </p>
          </div>

          <div className="about-aside">
            <div className="aside-symbol">✳</div>
            <p>
              Curious by nature.
              <br />
              Built through practice.
            </p>
            <span>WILLI FEBRIANSYAH / 2026</span>
          </div>
        </section>

        <section className="skills section-wrap" id="skills">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / TECHNICAL TOOLKIT</p>
              <h2>Tools of the <span>trade.</span></h2>
            </div>
            <p className="section-aside">
              Teknologi yang saya gunakan untuk merancang, membangun, dan
              menguji aplikasi web.
            </p>
          </div>

          <div className="skill-grid">
            {skills.map((skill) => (
              <article className="skill-card" key={skill.number}>
                <div className="skill-card-top">
                  <span>{skill.number} / 04</span>
                  <span className="skill-cross">↗</span>
                </div>
                <h3>{skill.title}</h3>
                <p>{skill.tools}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="projects section-wrap" id="projects">
          <div className="section-heading projects-heading">
            <div>
              <p className="eyebrow">03 / SELECTED PROJECTS</p>
              <h2>Proof of <span>practice.</span></h2>
            </div>
            <a
              className="text-link"
              href="https://github.com/willi121718"
              target="_blank"
              rel="noreferrer"
            >
              ALL REPOSITORIES <Arrow diagonal />
            </a>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article
                className={`project-card ${project.featured ? 'featured' : ''}`}
                key={project.number}
              >
                <ProjectVisual project={project} />

                <div className="project-info">
                  <div className="project-title-row">
                    <div>
                      <p className="project-category">{project.category}</p>
                      <h3>{project.name}<span>.</span></h3>
                    </div>
                    <span className="project-number">/{project.number}</span>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="tech-list">
                    {project.stack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    VIEW SOURCE CODE <Arrow diagonal />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="project-note">
            Laundrykan menampilkan screenshot aplikasi asli. Visual Kerinci
            Kultur merupakan ilustrasi desain.
          </p>
        </section>

        <section className="engineering section-wrap">
          <div className="engineering-intro">
            <p className="eyebrow">04 / ENGINEERING MINDSET</p>
            <h2>Beyond the <span>interface.</span></h2>
            <p>
              Saya juga fokus pada hal-hal yang tidak selalu terlihat:
              struktur data, alur transaksi, dan perilaku sistem ketika diuji.
            </p>
          </div>

          <div className="engineering-list">
            <div><span>01</span><strong>API Design & Integration</strong><span>↗</span></div>
            <div><span>02</span><strong>Database & Migrations</strong><span>↗</span></div>
            <div><span>03</span><strong>Payment Flow & Webhooks</strong><span>↗</span></div>
            <div><span>04</span><strong>Automated Feature Testing</strong><span>↗</span></div>
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <p className="eyebrow">05 / WHAT'S NEXT?</p>
          <h2>
            LET'S BUILD
            <br />
            <span>SOMETHING</span>
            <br />
            <span className="contact-lime">MEANINGFUL.</span>
          </h2>
          <p>
            Terbuka untuk peluang kerja, kolaborasi, dan tantangan baru
            di bidang pengembangan web.
          </p>
          <a
            className="button button-lime"
            href="https://github.com/willi121718"
            target="_blank"
            rel="noreferrer"
          >
            Find me on GitHub <Arrow diagonal />
          </a>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home">willi<span>.dev</span><i>®</i></a>
        <p>DESIGNED & BUILT BY WILLI FEBRIANSYAH</p>
        <a href="#home">BACK TO TOP ↑</a>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </div>
  )
}

export default App
