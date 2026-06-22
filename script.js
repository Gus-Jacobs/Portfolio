const elements = {
    certGrid: document.querySelector(".cert-grid"),
    projectGrid: document.querySelector(".project-grid"),
    filterButtons: document.querySelectorAll(".filter-btn"),
    prevBtn: document.querySelector(".prev-btn"),
    nextBtn: document.querySelector(".next-btn"),
    pageIndicator: document.querySelector(".page-indicator"),
    modal: document.getElementById("image-modal"),
    projectModal: document.getElementById("project-modal"),
    modalImg: document.getElementById("modal-image"),
    modalCaption: document.getElementById("modal-caption"),
    closeModal: document.querySelectorAll(".close"),
    closeSections: document.querySelectorAll(".close-section"),
    prevArrow: document.querySelectorAll(".prev-arrow"),
    nextArrow: document.querySelectorAll(".next-arrow"),
    overlay: document.getElementById("overlay"),
    certificatesSection: document.getElementById("certificates"),
    projectsSection: document.getElementById("projects"),
    aboutSection: document.getElementById("about"),
    skillsSection: document.getElementById("skills"),
    codeOutput: document.getElementById("code-output"),
    svgContent: document.getElementById("svg-content"),
    svgContentMobile: document.getElementById("svg-content-mobile"),
    svgContainer: document.querySelector(".svg-container"),
    svgContainerMobile: document.querySelector(".svg-container-mobile"),
    projectModalTitle: document.querySelector(".project-modal-title"),
    projectModalTech: document.querySelector(".project-modal-tech"),
    projectModalDescription: document.querySelector(".project-modal-description"),
    navLinks: document.querySelectorAll('nav a'),
    hamburger: document.querySelector('.hamburger'),
    nav: document.querySelector('#nav'),
    body: document.querySelector('body'),
    gpaChart: document.getElementById("gpaChart"),
    skillsContainer: document.querySelector(".skills-container"),
    skillsVisualization: document.querySelector(".skills-visualization"),
    skillsDetails: document.querySelector(".skills-details"),
    backgroundImage: document.querySelector(".background-image"),
    backgroundImageMobile: document.querySelector(".background-image-mobile")
};

let state = {
    certificates: [],
    projects: [
        {
            title: "Student Suite",
            type: "Mobile App",
            status: "Shipped",
            languages: [["Dart", 78.1], ["JavaScript", 8.4], ["Shell", 3.7], ["C++", 2.8], ["HTML", 2.6], ["CMake", 2.1], ["Swift", 1.3], ["TypeScript", 0.5], ["Ruby", 0.3]],
            description: "My flagship mobile app, live on the App Store. Student Suite blends AI, learning psychology, and proven study techniques into one toolkit built to actually help people learn — not just track that they didn't. It packs planners, career tools, study aids, and more into a polished Flutter app, with a cross-platform core spanning Dart, Swift, Kotlin, and C++ under the hood."
        },
        {
            title: "Contour",
            type: "Mobile App",
            status: "Coming Soon",
            languages: [["Dart", 78.1], ["Swift", 5.0], ["C++", 4.0], ["Kotlin", 3.0], ["Shell", 2.0]],
            description: "A mobile app in active development that turns the camera in your pocket into a creative tool. Using on-device hardware, Contour parses photos into clean, drawable and colorable line-art sheets — no server round-trip, no upload, just point, capture, and create. Built on the same cross-platform foundation as Student Suite."
        },
        {
            title: "Inference",
            type: "Game",
            status: "In Development",
            languages: [["C#", 100.0]],
            description: "A game I'm building in Unity where you play as an AI. You take in the prompts users throw at you, work out the best answers, and earn your way to better hardware — spending what you make on upgrades that let you think faster, handle heavier requests, and climb from a humble model to something formidable. Written in C# on top of Unity, it turns what it actually feels like to be a language model into something you get to play."
        },
        {
            title: "LucidCut",
            type: "Desktop App",
            status: "Beta",
            languages: [["TypeScript", 50.8], ["CSS", 19.0], ["JavaScript", 16.7], ["Python", 12.8], ["Shell", 0.6]],
            description: "A desktop video editor built for creators who edit by what's said, not just what's shown. Powered by OpenAI's Whisper model, LucidCut transcribes footage and lets you search, cut, and navigate clips by the actual spoken words on screen. A beta imagery-detection layer goes further — scanning frames for visual content and, for local users, auto-training lightweight scikit-learn models to recognize what matters to them. Written primarily in TypeScript with a Python engine doing the ML work under the hood."
        },
        {
            title: "Scribe",
            type: "Desktop App",
            languages: [["TypeScript", 99.2], ["CSS", 0.6], ["JavaScript", 0.2]],
            description: "A local-first, completely free document editor for people who want their words to stay on their machine. Written almost entirely in TypeScript, Scribe focuses on a clean writing experience with no accounts, no cloud lock-in, and no subscription — just open it and write. Privacy by default, ownership by design."
        },
        {
            title: "ApexConverter",
            type: "Tool",
            languages: [["HTML", 62.2], ["JavaScript", 21.8], ["Python", 16.1]],
            description: "A no-nonsense media toolkit that pulls audio and video straight from YouTube and converts local files between formats on the fly. A lightweight HTML/JS frontend is wired to a Python backend that leans on battle-tested libraries to handle the heavy lifting — fast downloads, clean conversions, and zero bloat. Built for people who just want their file in the right format without wrestling with sketchy online converters."
        },
        {
            title: "Game Portal",
            type: "Desktop App",
            languages: [["JavaScript", 66.6], ["CSS", 21.0], ["Python", 10.5], ["Batchfile", 1.6]],
            description: "A friendly launcher that gives aging Windows games a second life on modern machines. Built with Electron and Python, it acts as a compatibility wrapper — handling the quirks and broken support that keep older titles from running on current Windows. I built it for my sister, whose library of classic games had stopped cooperating with her new PC, then turned it into a clean, one-click portal anyone can use."
        },
        {
            title: "Meme Generator",
            type: "Tool",
            languages: [["Python", 100.0]],
            description: "A pure-Python desktop app for cranking out memes from a library of hundreds of templates. It started as a playground for sharpening my Python UI skills — turning a command-line idea into something with buttons, previews, and instant exports. Equal parts useful and a genuinely fun way to kill an afternoon."
        },
        {
            title: "Movie Word Scanner",
            type: "Tool",
            languages: [["Python", 100.0]],
            description: "The original spark that became LucidCut. This Python prototype scanned video and audio for specific spoken words, proving out the transcription-driven editing concept before it grew into a full editor. Rough around the edges, but it's where the whole idea started."
        },
        {
            title: "Pegumax Inc",
            type: "Web App",
            status: "Live",
            languages: [["JavaScript", 92.7], ["HTML", 3.9], ["Python", 2.1], ["CSS", 1.3]],
            description: "The current home of my company, Pegumax — a JavaScript-driven website built to present the brand, its work, and its services with polish. A near-total rewrite of the original, engineered to be fast, maintainable, and unmistakably mine."
        },
        {
            title: "Music Mania",
            type: "Website",
            languages: [["CSS", 53.8], ["HTML", 38.2], ["JavaScript", 8.0]],
            description: "An early web project built to cut my teeth on layout, styling, and interactivity. Heavy on CSS and HTML with a touch of JavaScript, Music Mania was where I learned how to make a page feel alive — hover states, transitions, and the small details that separate a template from something with personality."
        },
        {
            title: "Static (Build 1)",
            type: "Web App",
            status: "Archived",
            languages: [["CSS", 31.3], ["HTML", 27.9], ["JavaScript", 18.5], ["Hack", 12.4], ["PHP", 10.0]],
            description: "The first of three iterations toward 'Static,' a social-media and forum platform I set out to build. This build laid the groundwork with a hand-rolled HTML/CSS/JS frontend and early PHP experiments — figuring out structure, feeds, and the bones of a community site."
        },
        {
            title: "Static (Build 2)",
            type: "Web App",
            status: "Archived",
            languages: [["PHP", 46.0], ["CSS", 43.9], ["JavaScript", 10.1]],
            description: "The second pass at Static, shifting weight toward a PHP backend to handle real user data, posts, and sessions. This iteration was about moving from a static mockup to something that could actually store and serve a community — closing the gap between prototype and product."
        },
        {
            title: "Static (Build 3)",
            type: "Web App",
            status: "Archived",
            languages: [["HTML", 74.7], ["Python", 25.3]],
            description: "The final iteration of Static, rebuilt on Python and Django for a cleaner, more scalable foundation. Development was eventually paused, but this version got closest to the vision — a proper framework, real routing, and the structure a social platform actually needs. Shelved, not forgotten."
        },
        {
            title: "Pegumax (Legacy)",
            type: "Website",
            status: "Archived",
            languages: [["CSS", 58.8], ["HTML", 28.1], ["JavaScript", 13.1]],
            description: "An early iteration of my company's web presence — a CSS/HTML/JS site that's since been retired in favor of a fully rebuilt platform. Kept around as a snapshot of where Pegumax started and how far the brand has come."
        },
        {
            title: "This Portfolio",
            type: "Website",
            status: "Live",
            languages: [["JavaScript", 39.4], ["CSS", 37.1], ["HTML", 23.6]],
            description: "The very site you're looking at. I built a sleeker, more modern portfolio to replace it — but this one stays online because there's nothing else quite like it. Animated SVG circuitry, a terminal-style boot sequence, and a layout that doesn't play by the rules. It's part résumé, part experiment, and a reminder of where my front-end instincts came from."
        }
    ],
    languageColors: {
        "HTML": "#e34c26", "CSS": "#563d7c", "JavaScript": "#f1e05a", "TypeScript": "#3178c6",
        "Python": "#3572A5", "Dart": "#00B4AB", "PHP": "#4F5D95", "Shell": "#89e051",
        "Batchfile": "#C1F12E", "C++": "#f34b7d", "Swift": "#F05138", "Ruby": "#701516",
        "Hack": "#878787", "C": "#555555", "Kotlin": "#A97BFF", "CMake": "#DA3434",
        "C#": "#178600"
    },
    currentPage: 1,
    currentProjectIndex: 0,
    currentCategory: "all",
    currentImageIndex: 0,
    filteredCerts: [],
    itemsPerPage: 6,
    activeSection: null,
    paths: [],
    ellipses: [],
    modalOpen: false,
    isMobile: window.innerWidth <= 768,
    navGlowPosition: -100,
    experiences: [
        {
            title: "Cincinnati Insurance Companies",
            image: "img/w4.webp",
            position: "Software Engineer Intern",
            location: "Fairfield, Ohio",
            time: "May 12, 2025 - Present",
            description: "As a Software Engineer Intern at Cincinnati Insurance Companies, I work with a talented team on modernizing legacy applications. I specialize in rebuilding legacy ASP.NET applications into modern, beautiful Angular tools with C# backends. My work involves writing clean, optimized C# code for API endpoints, designing SQL queries for efficient data retrieval, and building responsive Angular frontends. I recently led the migration of a legacy application, transforming outdated architecture into a modern tech stack while maintaining data integrity and improving performance. During this project, I encountered and resolved security issues related to incorrect app ID configurations in the authentication system, demonstrating my ability to identify root causes and implement effective solutions. I'm passionate about code quality, team collaboration, and creating solutions that make a real impact on business operations.",
        },
        {
            title: "FedEx Ground",
            image: "img/wp1.jpg",
            position: "Package Handler",
            location: "Independence, Kentucky",
            time: "June 2024 - June 2025",
            description: "At FedEx Ground, I've consistently exceeded performance standards while demonstrating exceptional leadership qualities. My package handling rate of 700 packages per hour nearly doubles the standard of 400, and my scanning speed of 380 packages/hour far surpasses the 160 package standard. I've achieved an 80% cube utilization in trailers (compared to the 64% standard) through strategic loading techniques. My initiative in training new hires and assisting other areas of the dock has been recognized by multiple managers, who have praised my work ethic during presort meetings. The 'Gus Mentality' I've established - emphasizing efficiency, teamwork, and problem-solving - has become a model for others in the facility. I regularly help coworkers troubleshoot issues to maintain dock efficiency, often volunteering to assist other areas when they fall behind."
        },
        {
            title: "Walmart",
            image: "img/wp2.jpg",
            position: "Sales Associate",
            location: "Alexandria, Kentucky",
            time: "June 2024 - August 2024",
            description: "During my time at Walmart, I quickly became known for my fast learning, positive attitude, and dedication to customer service. I mastered multiple departments within weeks, often being called upon to assist in areas outside my primary assignment due to my comprehensive knowledge of store operations. My performance caught the attention of the Asset Protection Manager for the USA region during a store visit. After observing my work and speaking with me, he personally commended me to the store manager and department managers for my exceptional knowledge and work ethic. I was offered a promotion to department manager within two months of employment, which I ultimately declined due to school commitments. My ability to balance speed and accuracy in customer transactions, along with my willingness to take on additional responsibilities, made me a valued team member during my tenure."
        },
        {
            title: "Hohman Renovations",
            image: "img/wp3.jpg",
            position: "Laborer",
            location: "Florence, Kentucky",
            time: "May 2023 - May 2024",
            description: "As a laborer for Hohman Renovations, I developed a diverse skill set in residential construction and remodeling. I became proficient in drywall installation, framing, basic electrical work, plumbing, tile setting, and various finish work through hands-on experience at job sites. My ability to quickly learn new skills and solve problems on the job made me a valuable team member. I often took initiative to research proper techniques for unfamiliar tasks, ensuring high-quality results. The physical demands of the job strengthened my work ethic and taught me the importance of precision in craftsmanship. This experience gave me practical problem-solving skills that translate well to software development, particularly in troubleshooting and systematic thinking. The discipline and attention to detail I developed continue to benefit me in all areas of my work."
        }
    ],
    skills: {
        'Web Development': [
            { name: 'HTML', level: 90, icon: 'bi-filetype-html', certified: true },
            { name: 'CSS', level: 85, icon: 'bi-filetype-css', certified: true },
            { name: 'JavaScript', level: 25, icon: 'bi-filetype-js', certified: true },
            { name: 'React', level: 80, icon: 'bi-filetype-jsx', certified: true },
            { name: 'jQuery', level: 20, icon: 'bi-filetype-js', certified: true },
            { name: 'Bootstrap 3', level: 40, icon: 'bi-bootstrap', certified: true },
            { name: 'Bootstrap 4', level: 45, icon: 'bi-bootstrap-fill', certified: true },
            { name: 'TypeScript', level: 80, icon: 'bi-filetype-tsx', certified: true },
            { name: 'Electron', level: 55, icon: 'bi-filetype-jsx' }
        ],
        'Programming Languages': [
            { name: 'Python', level: 80, icon: 'bi-filetype-py', certified: true },
            { name: 'Django', level: 40, icon: 'bi-filetype-py' },
            { name: 'Java', level: 70, icon: 'bi-filetype-java', certified: true },
            { name: 'PHP', level: 30, icon: 'bi-filetype-php', certified: true },
            { name: 'R', level: 20, icon: 'bi-filetype-r', certified: true },
            { name: 'C', level: 20, icon: 'bi-filetype-c' },
            { name: 'C++', level: 15, icon: 'bi-filetype-cpp', certified: true },
            { name: 'C#', level: 70, icon: 'bi-filetype-cs', certified: true }
        ],
        'Frontend Development': [
            { name: 'Angular', level: 70, icon: 'bi-filetype-jsx' },
            { name: 'Vue.js', level: 5, icon: 'bi-filetype-jsx' },
            { name: 'Frontend', level: 35, icon: 'bi-layout-text-window' }
        ],
        'Backend Development': [
            { name: 'Node.js', level: 5, icon: 'bi-filetype-js' }
        ],
        'Data Science & Analysis': [
            { name: 'Data Analysis', level: 35, icon: 'bi-graph-up', certified: true },
            { name: 'Data Science', level: 30, icon: 'bi-database', certified: true },
            { name: 'NumPy', level: 25, icon: 'bi-filetype-py', certified: true },
            { name: 'Pandas', level: 30, icon: 'bi-filetype-py', certified: true }
        ],
        'Security & Cloud': [
            { name: 'Cyber Security', level: 25, icon: 'bi-shield-lock', certified: true },
            { name: 'AWS', level: 5, icon: 'bi-cloud' }
        ],
        'Tools & Databases': [
            { name: 'VS Code', level: 85, icon: 'bi-code-square' },
            { name: 'Visual Studio', level: 80, icon: 'bi-microsoft' },
            { name: 'GitHub', level: 80, icon: 'bi-github' },
            { name: 'SQL Server Management Studio', level: 75, icon: 'bi-database' },
            { name: 'Docker', level: 10, icon: 'bi-docker' },
            { name: 'SQL', level: 55, icon: 'bi-database' },
            { name: 'APIs', level: 50, icon: 'bi-lightning-charge' }
        ]
    },
    gpaData: {
        highSchool: [3.62, 3.38, 3.64, 3.83],
        college: [3.571, 3.759, 3.773, 3.729]
    }
};

function setActiveNavLink() {
    elements.navLinks.forEach(link => {
        link.classList.remove('active');
        if (state.activeSection && link.getAttribute('href') === `#${state.activeSection.id}`) {
            link.classList.add('active');
        }
    });
}

function updateNavButtonEffects() {
    // Disabled - glow effects removed
}

function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, c => (
        { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
    ));
}

function buildLanguageBar(languages, maxTags) {
    const segments = languages.map(([name, pct]) => {
        const color = state.languageColors[name] || '#64748b';
        return `<span class="lang-segment" style="width:${pct}%;background:${color}" title="${escapeHtml(name)} ${pct}%"></span>`;
    }).join('');

    const shown = maxTags ? languages.slice(0, maxTags) : languages;
    const hidden = maxTags ? languages.length - shown.length : 0;
    let tags = shown.map(([name, pct]) => {
        const color = state.languageColors[name] || '#64748b';
        return `<span class="lang-tag"><span class="lang-dot" style="background:${color}"></span>${escapeHtml(name)} <span class="lang-pct">${pct}%</span></span>`;
    }).join('');
    if (hidden > 0) tags += `<span class="lang-tag lang-more">+${hidden} more</span>`;

    return `<div class="lang-bar">${segments}</div><div class="lang-tags">${tags}</div>`;
}

function createProjectCards() {
    elements.projectGrid.innerHTML = state.projects.map((project, index) => {
        const status = project.status
            ? `<span class="project-status status-${project.status.toLowerCase().replace(/\s+/g, '-')}">${escapeHtml(project.status)}</span>`
            : '';
        return `
        <div class="project-card card-enter" style="animation-delay:${(index * 0.05).toFixed(2)}s" onclick="openProjectModal(${index})">
            <div class="project-card-header">
                <span class="project-type">${escapeHtml(project.type)}</span>
                ${status}
            </div>
            <h3 class="project-title">${escapeHtml(project.title)}</h3>
            <p class="project-description">${escapeHtml(project.description)}</p>
            <div class="project-langs">
                ${buildLanguageBar(project.languages, 4)}
            </div>
            <span class="project-readmore">Read more →</span>
        </div>`;
    }).join('');
}

function renderProjectModal(index) {
    const project = state.projects[index];
    const status = project.status
        ? `<span class="project-status status-${project.status.toLowerCase().replace(/\s+/g, '-')}">${escapeHtml(project.status)}</span>`
        : '';
    elements.projectModalTitle.innerHTML =
        `${escapeHtml(project.title)} <span class="project-type">${escapeHtml(project.type)}</span> ${status}`;
    elements.projectModalTech.innerHTML = buildLanguageBar(project.languages);
    elements.projectModalDescription.textContent = project.description;
}

function openProjectModal(index) {
    state.currentProjectIndex = index;
    state.modalOpen = true;

    renderProjectModal(index);

    elements.projectModal.classList.add('show');
    elements.overlay.classList.add('active');
    elements.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    elements.projectModal.classList.remove('show');
    state.modalOpen = false;
}

function nextProject() {
    state.currentProjectIndex = (state.currentProjectIndex + 1) % state.projects.length;
    renderProjectModal(state.currentProjectIndex);
}

function prevProject() {
    state.currentProjectIndex = (state.currentProjectIndex - 1 + state.projects.length) % state.projects.length;
    renderProjectModal(state.currentProjectIndex);
}

// Build only the SVG for the viewport that's actually visible (desktop OR mobile),
// not both. Element geometry (center + dash length) is measured once and cached so
// recolors never touch the layout engine again.
async function loadSVGs() {
    try {
        const response = await fetch("svgs.json", { cache: "force-cache" });
        if (!response.ok) throw new Error("Failed to load SVGs");
        const data = await response.json();
        state.svgData = data.svgs[0];
        buildCircuit();
    } catch (error) {
        console.error("SVG Error:", error);
        createFallbackSVG();
    }
}

function buildCircuit() {
    if (!state.svgData) return;
    const svgNS = "http://www.w3.org/2000/svg";
    const target = state.isMobile ? elements.svgContentMobile : elements.svgContent;
    const idle = state.isMobile ? elements.svgContent : elements.svgContentMobile;

    target.innerHTML = '';
    idle.innerHTML = '';
    state.paths = [];
    state.ellipses = [];

    const fragment = document.createDocumentFragment();

    state.svgData.paths.forEach(pathData => {
        const path = document.createElementNS(svgNS, "path");
        path.setAttribute("d", pathData.d);
        path.setAttribute("stroke", "#00ff00");
        path.setAttribute("stroke-width", "3");
        path.setAttribute("fill", "none");
        path.setAttribute("vector-effect", "non-scaling-stroke");
        fragment.appendChild(path);
        state.paths.push(path);
    });

    state.svgData.ellipses.forEach(ellipseData => {
        const ellipse = document.createElementNS(svgNS, "ellipse");
        ellipse.setAttribute("cx", ellipseData.cx);
        ellipse.setAttribute("cy", ellipseData.cy);
        ellipse.setAttribute("rx", ellipseData.rx);
        ellipse.setAttribute("ry", ellipseData.ry);
        ellipse.setAttribute("stroke", "#00ff00");
        ellipse.setAttribute("stroke-width", "3");
        ellipse.setAttribute("fill", "none");
        ellipse.setAttribute("vector-effect", "non-scaling-stroke");
        fragment.appendChild(ellipse);
        state.ellipses.push(ellipse);
    });

    target.appendChild(fragment);

    // Measure geometry ONCE: cache each element's center so getElementRegion (and
    // the scattered blink-in grouping) never has to call getBBox again.
    const all = [...state.paths, ...state.ellipses];
    all.forEach(el => {
        try {
            const bbox = el.getBBox();
            el._cx = bbox.x + bbox.width / 2;
            el._cy = bbox.y + bbox.height / 2;
        } catch (e) {
            el._cx = 0;
            el._cy = 0;
        }
    });

    runCircuitIntro(target);
}

// Three-stage intro: FLASH the whole circuit on bright for a beat, blink off,
// DRAW each trace in with a staggered dash sweep, then settle into a steady GLOW.
// All one-shot — nothing repaints once the glow is on (the filter paints once).
function runCircuitIntro(group) {
    const all = [...state.paths, ...state.ellipses];
    const FLICKER_MS = 900;   // keep in sync with .circuit-flicker duration in CSS
    const BLINK_MS = 950;     // keep in sync with .circuit-blink duration in CSS
    const GROUPS = 7;         // number of scattered groups that blink in
    const GROUP_GAP = 0.18;   // seconds between each group lighting up
    const cx = state.isMobile ? 480 : 960;   // viewBox center
    const cy = state.isMobile ? 270 : 540;

    // A soft layered halo — a real glow/bloom, not just a bright stroke colour.
    const greenGlow = 'drop-shadow(0 0 4px rgba(57,255,20,0.75)) ' +
                      'drop-shadow(0 0 14px rgba(57,255,20,0.45))';

    const reduceMotion = window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
        all.forEach(el => { el.style.strokeDasharray = 'none'; el.style.strokeDashoffset = '0'; });
        group.style.filter = greenGlow;
        requestAnimationFrame(() => animateCircuitRecolor(state.activeSection));
        return;
    }

    // Bucket each trace into a scattered group from a hash of its position, so a
    // group's members are spread across the board rather than next to each other.
    // Each group lights up at a staggered time, with a little per-trace jitter.
    let maxDelay = 0;
    all.forEach(el => {
        const hash = Math.abs(Math.sin((el._cx || cx) * 12.9898 + (el._cy || cy) * 78.233));
        const groupIdx = Math.floor(hash * GROUPS) % GROUPS;
        const jitter = (Math.abs(Math.sin((el._cx || cx) * 4.1 + (el._cy || cy) * 9.7)) * 0.09);
        el._delay = groupIdx * GROUP_GAP + jitter;
        if (el._delay > maxDelay) maxDelay = el._delay;
    });

    // Stage 1 — FLICKER: the whole circuit pulses green like a tube powering up,
    // ending dark (held) so the traces blink in from black.
    all.forEach(el => {
        el.style.strokeDasharray = 'none';
        el.style.strokeDashoffset = '0';
        el.style.opacity = '0';
        el.style.stroke = '#39ff14';
    });
    group.style.filter = 'drop-shadow(0 0 3px rgba(57,255,20,0.55))';
    group.classList.add('circuit-flicker');

    // Stage 2 — BLINK IN: scattered groups flicker on a few times then settle.
    setTimeout(() => {
        group.classList.remove('circuit-flicker');
        group.style.filter = 'none';
        all.forEach(el => {
            el.style.stroke = '#00ff00';
            el.style.animationDelay = `${el._delay.toFixed(3)}s`;
            void el.getBoundingClientRect();
            el.classList.add('circuit-blink');
        });
    }, FLICKER_MS);

    // Stage 3 — GLOW: bloom the halo in (filter transition) and let it breathe.
    setTimeout(() => {
        group.style.transition = 'filter 1.1s ease';
        group.style.filter = greenGlow;
        group.classList.add('circuit-breathe');
        animateCircuitRecolor(state.activeSection);
    }, FLICKER_MS + maxDelay * 1000 + BLINK_MS + 60);
}

function createFallbackSVG() {
    const svgNS = "http://www.w3.org/2000/svg";

    // Create simple circuit path as fallback
    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("d", "M100,100 C150,50 200,150 250,100 S350,50 400,100");
    path.setAttribute("stroke", "#00ff00");
    path.setAttribute("stroke-width", "3");
    path.setAttribute("fill", "none");
    path.setAttribute("vector-effect", "non-scaling-stroke");
    path._cx = 250;
    path._cy = 100;

    const target = state.isMobile ? elements.svgContentMobile : elements.svgContent;
    target.appendChild(path);
    state.paths = [path];
    state.ellipses = [];

    requestAnimationFrame(() => animateCircuitRecolor(state.activeSection));
}

function handleMobileLayout() {
    if (state.isMobile) {
        document.body.classList.add('mobile-view');
        elements.svgContainerMobile.style.display = 'block';
        elements.svgContainer.style.display = 'none';
        elements.backgroundImage.style.display = 'none';
        elements.backgroundImageMobile.style.display = 'block';
    } else {
        document.body.classList.remove('mobile-view');
        elements.svgContainer.style.display = 'block';
        elements.svgContainerMobile.style.display = 'none';
        elements.backgroundImage.style.display = 'block';
        elements.backgroundImageMobile.style.display = 'none';
    }
    // Only the active viewport's circuit is built, so rebuild it into the
    // now-visible container when the breakpoint is crossed.
    buildCircuit();
}

function getElementRegion(el, section) {
    const centerX = el._cx;
    const centerY = el._cy;

    if(!section) return 'all';

    switch(section.id) {
        case 'certificates':
            return (centerX < 640) ? 'active' : 'inactive';
        case 'projects':
            return (centerX > 640 && centerX < 1280) ? 'active' : 'inactive';
        case 'about':
            return (centerX > 1280) ? 'active' : 'inactive';
        case 'skills':
            return (centerY > 540) ? 'active' : 'inactive';
        default:
            return 'all';
    }
}

function animateCircuitRecolor(section) {
    requestAnimationFrame(() => {
        const allElements = [...state.paths, ...state.ellipses];
        allElements.forEach(el => {
            const region = getElementRegion(el, section);
            const color = region === 'active' ? '#00ff00' :
                         region === 'inactive' ? '#ff0000' : '#00ff00';
            el.style.stroke = color;
        });
    });
}

async function toggleSection(section) {
    if (state.activeSection === section) {
        section.classList.remove("show");
        elements.overlay.classList.remove("active");
        state.activeSection = null;
        animateCircuitRecolor(null);
        elements.codeOutput.style.color = 'var(--terminal-color)';
        elements.codeOutput.textContent = "SYSTEM READY";
        document.body.style.overflow = 'auto';
    } else {
        elements.codeOutput.style.color = 'var(--terminal-error)';
        elements.codeOutput.textContent = "TASK TERMINATED";

        await new Promise(r => setTimeout(r, 250));

        elements.codeOutput.style.color = 'var(--terminal-color)';
        const sectionName = section.id.toUpperCase().replace('-', ' ');
        elements.codeOutput.textContent = `LOADING ${sectionName}...`;

        if (state.activeSection) {
            state.activeSection.classList.remove("show");
        }

        animateCircuitRecolor(section);
        elements.overlay.classList.add("active");

        if(section === elements.projectsSection) createProjectCards();
        if(section === elements.aboutSection) createExperienceCards();
        if(section === elements.skillsSection) createSkillsCategories();

        await new Promise(r => setTimeout(r, 500));

        section.classList.add("show");
        state.activeSection = section;
        document.body.style.overflow = 'auto';
    }
    setActiveNavLink();
}

async function initCertificates() {
    try {
        const response = await fetch("certificates.json");
        state.certificates = await response.json();
        state.filteredCerts = state.certificates;
        updatePagination();
    } catch (error) {
        elements.certGrid.innerHTML = "<p>Error loading certificates</p>";
    }
}

function updatePagination() {
    state.filteredCerts = state.currentCategory === "all" 
        ? state.certificates 
        : state.certificates.filter(c => c.category === state.currentCategory);
    
    const totalPages = Math.ceil(state.filteredCerts.length / state.itemsPerPage);
    state.currentPage = Math.max(1, Math.min(state.currentPage, totalPages));
    
    const start = (state.currentPage - 1) * state.itemsPerPage;
    const end = start + state.itemsPerPage;
    displayCertificates(state.filteredCerts.slice(start, end));
    
    elements.pageIndicator.textContent = `Page ${state.currentPage} of ${totalPages}`;
    elements.prevBtn.disabled = state.currentPage === 1;
    elements.nextBtn.disabled = state.currentPage === totalPages;
}

function displayCertificates(certs) {
    const pageOffset = (state.currentPage - 1) * state.itemsPerPage;
    elements.certGrid.innerHTML = certs.map((cert, index) => `
        <div class="cert-card card-enter" style="animation-delay:${(index * 0.05).toFixed(2)}s">
            <img src="${cert.image}" loading="lazy" alt="${cert.title}" data-index="${pageOffset + index}">
            <p>${cert.title}</p>
        </div>
    `).join("");
}

function showCertificate() {
    const cert = state.filteredCerts[state.currentImageIndex];
    elements.modalImg.src = cert.image;
    elements.modalCaption.textContent = cert.title;
    updateArrows();
}

function openModal(index) {
    state.currentImageIndex = index;
    state.modalOpen = true;
    elements.modal.classList.add("show");
    elements.body.style.overflow = 'hidden';
    showCertificate();
}

function closeModal() {
    elements.modal.classList.remove("show");
    state.modalOpen = false;
}

function prevImage() {
    if (state.currentImageIndex > 0) {
        state.currentImageIndex--;
        showCertificate();
    }
}

function nextImage() {
    if (state.currentImageIndex < state.filteredCerts.length - 1) {
        state.currentImageIndex++;
        showCertificate();
    }
}

function updateArrows() {
    elements.prevArrow.forEach(arrow => {
        arrow.style.display = state.currentImageIndex > 0 ? "flex" : "none";
    });
    elements.nextArrow.forEach(arrow => {
        arrow.style.display = state.currentImageIndex < state.filteredCerts.length - 1 ? "flex" : "none";
    });
}

function createExperienceCards() {
    const experienceGrid = document.querySelector('.experience-grid');
    if (!experienceGrid) return;

    experienceGrid.innerHTML = state.experiences.map(exp => {
        return `
        <div class="experience-card">
            <div class="experience-front">
                <img src="${exp.image}" alt="${exp.title}">
                <div class="experience-info">
                    <h3>${exp.title}</h3>
                    <p>Position: ${exp.position}</p>
                    <p>Location: ${exp.location}</p>
                    <p>Time There: ${exp.time}</p>
                    <button class="expand-btn">Click to Expand</button>
                </div>
            </div>
            <div class="experience-back">
                <div class="experience-description">
                    ${exp.description}
                </div>
                <button class="back-btn">Click to Return</button>
            </div>
        </div>
        `;
    }).join('');
}

function flipExperienceCard(card) {
    card.classList.toggle('flipped');
    card.querySelector('.experience-back').scrollTop = 0;
}

function initGPAChart() {
    const ctx = elements.gpaChart.getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Year 1', 'Term', 'Year 2', 'Term', 'Year 3', 'Term', 'Year 4'],
            datasets: [
                {
                    label: 'High School GPA',
                    data: [3.62, null, 3.38, null, 3.64, null, 3.83],
                    borderColor: 'rgba(255, 159, 64, 1)',
                    borderWidth: 3,
                    fill: false,
                    tension: 0.1,
                    pointBackgroundColor: 'rgba(255, 159, 64, 1)',
                    pointRadius: 6,
                    pointHoverRadius: 8,
                    spanGaps: true
                },
                {
                    label: 'College GPA',
                    data: [3.571, 3.759, 3.773, 3.729, null, null, null],
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 3,
                    fill: false,
                    tension: 0.1,
                    pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                    pointRadius: 6,
                    pointHoverRadius: 8,
                    spanGaps: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: false,
                    min: 2.5,
                    max: 4.0,
                    ticks: {
                        stepSize: 0.1,
                        color: 'rgba(226, 232, 240, 0.8)'
                    },
                    grid: {
                        color: 'rgba(226, 232, 240, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: 'rgba(226, 232, 240, 0.8)'
                    },
                    grid: {
                        color: 'rgba(226, 232, 240, 0.1)'
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: 'rgba(226, 232, 240, 0.8)',
                        font: {
                            size: 14
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.parsed.y;
                        }
                    },
                    backgroundColor: 'rgba(30, 41, 59, 0.9)',
                    titleColor: 'rgba(226, 232, 240, 0.9)',
                    bodyColor: 'rgba(226, 232, 240, 0.8)',
                    borderColor: 'rgba(59, 130, 246, 0.5)',
                    borderWidth: 1
                }
            }
        }
    });
}

function createSkillsCategories() {
    elements.skillsContainer.innerHTML = `
        <div class="skills-visualization">
            <div class="skills-orbit">
                <div class="orbit-center">
                    <div class="center-icon">
                        <i class="bi bi-cpu"></i>
                    </div>
                </div>
                ${Object.values(state.skills)
                    .flat()
                    .filter(skill => skill.name !== 'C' && skill.name !== 'C++' && skill.name !== 'C#')
                    .slice(0, 8)
                    .map((skill, i) => `
                        <div class="orbit-item" style="--i:${i}">
                            <div class="orbit-icon">
                                <i class="bi ${skill.icon}"></i>
                            </div>
                            <div class="orbit-tooltip">${skill.name}</div>
                        </div>
                    `).join('')}
            </div>
        </div>
        <div class="skills-details">
            ${Object.entries(state.skills).map(([category, skills]) => `
                <div class="skills-category">
                    <h3>${category}</h3>
                    <div class="skills-grid">
                        ${skills.map(skill => `
                            <div class="skill-card" data-skill="${skill.name.toLowerCase()}">
                                <h4>
                                    <i class="bi ${skill.icon}"></i> ${skill.name}
                                    ${skill.certified ? `<i class="bi bi-patch-check-fill certified-icon" title="Certified"></i>` : ''}
                                </h4>
                                <div class="skill-progress">
                                    <div class="skill-progress-bar" style="width: ${skill.level}%"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    document.querySelectorAll('.certified-icon').forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.animation = 'spin 0.5s linear 1';
        }, { passive: true });
    });

    document.querySelectorAll('.skill-progress-bar').forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        bar.offsetHeight;
        bar.style.transition = 'width 0.6s ease-out';
        bar.style.width = width;
    });

    document.querySelectorAll('.orbit-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            const skillName = item.querySelector('.orbit-tooltip').textContent.toLowerCase();
            const skillCard = document.querySelector(`.skill-card[data-skill="${skillName}"]`);
            if (skillCard) skillCard.classList.add('highlight');
        }, { passive: true });
        item.addEventListener('mouseleave', () => {
            const skillName = item.querySelector('.orbit-tooltip').textContent.toLowerCase();
            const skillCard = document.querySelector(`.skill-card[data-skill="${skillName}"]`);
            if (skillCard) skillCard.classList.remove('highlight');
        }, { passive: true });
    });
}

function handleOverlayClick(e) {
    if (!state.activeSection) return;

    const isClickOnSection = e.target.closest('#certificates, #projects, #about, #skills, nav a, .hamburger, .modal, .modal-content');
    if (!isClickOnSection) {
        toggleSection(state.activeSection);
    }
}

let navGlowAnimationId = null;

function animateNavGlow() {
    // Disabled for performance - glow effect removed
}

function initEvents() {
    elements.hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        elements.nav.classList.toggle('active');
        elements.hamburger.classList.toggle('active');
    });

    elements.navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);
            toggleSection(section);
            if (state.isMobile) {
                elements.nav.classList.remove('active');
                elements.hamburger.classList.remove('active');
            }
        });
    });

    elements.closeSections.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (state.activeSection) {
                toggleSection(state.activeSection);
            }
        });
    });

    elements.overlay.addEventListener("click", handleOverlayClick, { passive: true });

    elements.certGrid.addEventListener("click", (e) => {
        if (e.target.tagName === "IMG") {
            openModal(parseInt(e.target.dataset.index));
        }
    }, { passive: true });

    elements.prevBtn.addEventListener("click", () => {
        state.currentPage--;
        updatePagination();
    });

    elements.nextBtn.addEventListener("click", () => {
        state.currentPage++;
        updatePagination();
    });

    elements.closeModal.forEach(btn => {
        btn.addEventListener('click', () => {
            closeModal();
            closeProjectModal();
        });
    });

    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
                closeProjectModal();
            }
        });
    });

    document.querySelectorAll('.prev-arrow').forEach(arrow => {
        arrow.addEventListener('click', (e) => {
            e.stopPropagation();
            if (arrow.closest('#project-modal')) {
                prevProject();
            } else {
                prevImage();
            }
        });
    });

    document.querySelectorAll('.next-arrow').forEach(arrow => {
        arrow.addEventListener('click', (e) => {
            e.stopPropagation();
            if (arrow.closest('#project-modal')) {
                nextProject();
            } else {
                nextImage();
            }
        });
    });

    elements.filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            elements.filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            state.currentCategory = button.dataset.category;
            state.currentPage = 1;
            updatePagination();
        });
    });

    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const targetTab = button.getAttribute('data-tab');
            tabPanes.forEach(pane => pane.classList.remove('active'));
            document.getElementById(targetTab).classList.add('active');
        });
    });

    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('expand-btn')) {
            e.stopPropagation();
            flipExperienceCard(e.target.closest('.experience-card'));
        }

        if (e.target.classList.contains('back-btn')) {
            e.stopPropagation();
            flipExperienceCard(e.target.closest('.experience-card'));
        }
    }, { passive: true });

    window.addEventListener('keydown', (e) => {
        if (state.modalOpen || state.activeSection) {
            if (e.key === 'Escape') {
                closeModal();
                closeProjectModal();
                if (state.activeSection) {
                    toggleSection(state.activeSection);
                }
            } else if (e.key === 'ArrowLeft') {
                if (document.querySelector('#project-modal.show')) {
                    prevProject();
                } else if (document.querySelector('#image-modal.show')) {
                    prevImage();
                }
            } else if (e.key === 'ArrowRight') {
                if (document.querySelector('#project-modal.show')) {
                    nextProject();
                } else if (document.querySelector('#image-modal.show')) {
                    nextImage();
                }
            }
        }
    });

    document.addEventListener('click', function(e) {
        if (state.isMobile && elements.nav.classList.contains('active') &&
            !e.target.closest('nav') && !e.target.closest('.hamburger')) {
            elements.nav.classList.remove('active');
            elements.hamburger.classList.remove('active');
        }
    }, { passive: true });

    animateNavGlow();
}

function init() {
    function checkMobile() {
        return window.innerWidth <= 768;
    }

    state.isMobile = checkMobile();

    // Load SVGs immediately
    loadSVGs();
    handleMobileLayout();

    initCertificates();
    initEvents();
    createProjectCards();
    createExperienceCards();
    createSkillsCategories();
    initGPAChart();

    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const wasMobile = state.isMobile;
            state.isMobile = checkMobile();

            if (wasMobile !== state.isMobile) {
                handleMobileLayout();
                if (state.isMobile) {
                    elements.nav.classList.remove('active');
                    elements.hamburger.classList.remove('active');
                }
            }
        }, 250);
    }, { passive: true });

    const hexagons = document.querySelectorAll('.hexagon');
    hexagons.forEach((hex, index) => {
        setTimeout(() => {
            hex.style.opacity = '0.3';
            hex.style.boxShadow = '0 0 15px var(--primary-light)';
            setTimeout(() => {
                hex.style.opacity = '0.1';
                hex.style.boxShadow = 'none';
            }, 600);
        }, index * 100);
    });

    const messages = ["Booting...", "Fetching data...", "Initializing...", "Welcome!"];
    let msgIndex = 0;
    const textAnim = () => {
        if (msgIndex < messages.length) {
            elements.codeOutput.textContent = messages[msgIndex++];
            setTimeout(textAnim, 1500);
        } else {
            elements.codeOutput.textContent = "SYSTEM READY";
        }
    };
    textAnim();
}

init();