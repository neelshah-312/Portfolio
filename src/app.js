export function renderApp() {
  const root = document.getElementById("app");
  if (!root) return;

  const b = import.meta.env.BASE_URL;

  root.innerHTML = `
    <a class="skip-link" href="#main">Skip to content</a>

    <header class="top-nav" id="top-nav" data-scrolled="false">
      <div class="top-nav__inner">
        <a class="brand" href="${b}" aria-label="Neel Shah home">NS</a>
        <nav class="top-nav__links" aria-label="Primary">
          <a href="#row-about">About</a>
          <a href="#row-experience">Experience</a>
          <a href="#row-projects">Projects</a>
          <a href="#row-skills">Skills</a>
          <a href="#row-education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
        <button
          type="button"
          class="nav-toggle"
          aria-expanded="false"
          aria-controls="mobile-drawer"
          aria-label="Open menu"
        >
          <span class="sr-only">Menu</span>
          <span></span><span></span><span></span>
        </button>
      </div>
      <div id="mobile-drawer" class="mobile-drawer" hidden>
        <a href="#row-about">About</a>
        <a href="#row-experience">Experience</a>
        <a href="#row-projects">Projects</a>
        <a href="#row-skills">Skills</a>
        <a href="#row-education">Education</a>
        <a href="#contact">Contact</a>
      </div>
    </header>

    <main id="main">
      <section class="billboard" aria-label="Featured">
        <div
          class="billboard__bg"
          role="img"
          aria-label="Portrait with Golden Gate Bridge"
        ></div>
        <div class="billboard__vignette" aria-hidden="true"></div>
        <div class="billboard__content">
          <p class="billboard__meta">SOC · Detection · Incident Response</p>
          <h1 class="billboard__title">Neel Shah</h1>
          <p class="billboard__logline">
            Security Operations Analyst — SIEM detection engineering, incident
            response, and threat hunting across Splunk and ELK, with Python
            automation and MITRE ATT&amp;CK mapping.
          </p>
          <div class="billboard__actions">
            <a class="btn btn--play" href="#row-experience">
              <span class="btn__icon" aria-hidden="true">▶</span>
              Explore
            </a>
            <a class="btn btn--info" href="#row-about">More about me</a>
          </div>
          <ul class="billboard__tags">
            <li>San Jose, CA</li>
            <li>
              <a href="mailto:shahneel2196@gmail.com">shahneel2196@gmail.com</a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/neel-s-b5112b215/"
                target="_blank"
                rel="noopener noreferrer"
                >LinkedIn</a
              >
            </li>
          </ul>
        </div>
      </section>

      <div class="lanes">
        <section class="row" id="row-about">
          <h2 class="row__title">About</h2>
          <div class="row__track-wrap">
            <div class="row__track row__track--about" tabindex="0">
              <article class="tile tile--about">
                <p>
                  I work at the intersection of identity, telemetry, and
                  detection: validating access patterns, triaging alerts with
                  context from authentication and endpoint data, and feeding
                  lessons back into the incident response lifecycle.
                </p>
                <p>
                  I build and tune correlation logic in Splunk and ELK, pair
                  threat intelligence with detection engineering, and use SQL and
                  regex to pull IOCs from firewall, IPS, auth, and endpoint logs
                  to support forensic collaboration.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section class="row" id="row-experience">
          <h2 class="row__title">Experience</h2>
          <div class="row__track-wrap">
            <button
              type="button"
              class="row__chev row__chev--left"
              aria-label="Scroll experience left"
              data-scroll-dir="-1"
            >
              ‹
            </button>
            <div class="row__track" data-row-scroll tabindex="0">
              <article class="tile tile--job">
                <div class="tile__glow"></div>
                <p class="tile__eyebrow">Aditech Infotech · Ahmedabad</p>
                <h3 class="tile__headline">
                  Cyber Security Analyst / Security Operations Engineer
                </h3>
                <p class="tile__sub">IAM &amp; SOC · Aug 2022 – Apr 2024</p>
                <ul class="tile__bullets">
                  <li>
                    Applied RBAC and Okta with directory services to validate
                    access logs and detect unauthorized activity across cloud and
                    on‑prem.
                  </li>
                  <li>
                    Triaged alerts and traced root causes through auth events and
                    endpoint telemetry; documented IR findings.
                  </li>
                  <li>
                    Engineered detection logic and optimized correlation in Splunk
                    and ELK using TI and detection engineering practices.
                  </li>
                  <li>
                    Used SQL and regex to extract IOCs from firewall, IPS, auth,
                    and endpoint logs for forensics.
                  </li>
                </ul>
              </article>
            </div>
            <button
              type="button"
              class="row__chev row__chev--right"
              aria-label="Scroll experience right"
              data-scroll-dir="1"
            >
              ›
            </button>
          </div>
        </section>

        <section class="row" id="row-projects">
          <h2 class="row__title">Highlighted work</h2>
          <div class="row__track-wrap">
            <button
              type="button"
              class="row__chev row__chev--left"
              aria-label="Scroll projects left"
              data-scroll-dir="-1"
            >
              ‹
            </button>
            <div class="row__track" data-row-scroll tabindex="0">
              <article class="tile tile--poster" data-tone="teal">
                <h3>Security Automation &amp; Risk Analysis</h3>
                <ul>
                  <li>
                    Python automation on vulnerability datasets for SOC workflows
                    and alert handling.
                  </li>
                  <li>
                    Advanced SIEM regex to cut noise and elevate critical events.
                  </li>
                  <li>
                    Automated reporting in Splunk/ELK for compliance and risk
                    traceability.
                  </li>
                </ul>
              </article>
              <article class="tile tile--poster" data-tone="violet">
                <h3>Identity &amp; Telemetry Dashboards</h3>
                <ul>
                  <li>
                    Splunk dashboards for auth events, access anomalies, and
                    suspicious logins.
                  </li>
                  <li>
                    TI‑integrated custom alerts and reports for classification.
                  </li>
                  <li>
                    MITRE ATT&amp;CK mapping for detection coverage and adversary
                    behavior context.
                  </li>
                </ul>
              </article>
            </div>
            <button
              type="button"
              class="row__chev row__chev--right"
              aria-label="Scroll projects right"
              data-scroll-dir="1"
            >
              ›
            </button>
          </div>
        </section>

        <section class="row" id="row-skills">
          <h2 class="row__title">Skills</h2>
          <div class="row__track-wrap">
            <button
              type="button"
              class="row__chev row__chev--left"
              aria-label="Scroll skills left"
              data-scroll-dir="-1"
            >
              ‹
            </button>
            <div class="row__track row__track--dense" data-row-scroll tabindex="0">
              <article class="tile tile--chip">
                <h3>Platforms &amp; tools</h3>
                <p>
                  Splunk · ELK · Nessus · OpenVAS · Wireshark · Nmap · Snort ·
                  AlienVault · Burp Suite · Metasploit
                </p>
              </article>
              <article class="tile tile--chip">
                <h3>SOC &amp; IR</h3>
                <p>
                  SOC Ops · IR · Triage · Detection engineering · TI ·
                  Vulnerability management · Log analysis · Network forensics ·
                  Phishing analysis
                </p>
              </article>
              <article class="tile tile--chip">
                <h3>Cloud &amp; identity</h3>
                <p>
                  AWS (Cloud Practitioner) · Microsoft 365 · IAM · Okta · Least
                  privilege
                </p>
              </article>
              <article class="tile tile--chip">
                <h3>Networking</h3>
                <p>
                  TCP/IP · SSL/TLS · IDS/IPS · SIEM · SOAR · Firewall/proxy · VPN
                  · Segmentation
                </p>
              </article>
              <article class="tile tile--chip">
                <h3>Dev &amp; OS</h3>
                <p>
                  Python · Bash · PowerShell · SQL · Regex · Windows · Linux
                  (Ubuntu, Kali) · macOS
                </p>
              </article>
            </div>
            <button
              type="button"
              class="row__chev row__chev--right"
              aria-label="Scroll skills right"
              data-scroll-dir="1"
            >
              ›
            </button>
          </div>
        </section>

        <section class="row" id="row-education">
          <h2 class="row__title">Education &amp; certifications</h2>
          <div class="row__track-wrap">
            <button
              type="button"
              class="row__chev row__chev--left"
              aria-label="Scroll education left"
              data-scroll-dir="-1"
            >
              ‹
            </button>
            <div class="row__track" data-row-scroll tabindex="0">
              <article class="tile tile--edu" data-tone="gold">
                <h3>M.S. Computer Science</h3>
                <p>Loyola Marymount University</p>
                <p class="tile__dates">Los Angeles, CA · 2024 – Present</p>
              </article>
              <article class="tile tile--edu" data-tone="blue">
                <h3>B.Tech Computer Engineering</h3>
                <p>Silver Oak University</p>
                <p class="tile__dates">India · 2020 – 2024</p>
              </article>
              <article class="tile tile--edu" data-tone="red">
                <h3>Certifications</h3>
                <p>Certified in Cybersecurity</p>
                <p>AWS Cloud Foundation</p>
              </article>
            </div>
            <button
              type="button"
              class="row__chev row__chev--right"
              aria-label="Scroll education right"
              data-scroll-dir="1"
            >
              ›
            </button>
          </div>
        </section>

        <section class="row row--footer-cta" id="contact">
          <h2 class="row__title">Contact</h2>
          <div class="cta-panel">
            <p>
              Open to roles in security operations, detection engineering, and
              incident response.
            </p>
            <div class="cta-panel__actions">
              <a class="btn btn--play" href="mailto:shahneel2196@gmail.com">Email</a>
              <a class="btn btn--info" href="tel:+16692612450">Call</a>
              <a
                class="btn btn--info"
                href="https://www.linkedin.com/in/neel-s-b5112b215/"
                target="_blank"
                rel="noopener noreferrer"
                >LinkedIn</a
              >
            </div>
          </div>
        </section>
      </div>
    </main>

    <footer class="site-footer">
      <p>© <span id="year"></span> Neel Shah</p>
    </footer>
  `;
}
