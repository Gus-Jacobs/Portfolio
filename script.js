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
    projectModalVideo: document.querySelector(".project-modal-video"),
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
            title: "Static Build 1",
            video: 'img/projects/1.mp4',
            description: "Iteration 1 of 3 for social media type website 'Static'.",
            info: "Technologies: HTML5, CSS3, JavaScript (ES6+)"
        },
        {
            title: "Static Build 2",
            video: 'img/projects/2.mp4',
            description: "Iteration 2 of 3 of social media type website 'Static'.",
            info: "Technologies: HTML, CSS, JavaScript, PHP, MySQL"
        },
        {
            title: "Static Build 3",
            video: 'img/projects/3.mp4',
            description: "Final iteration of Static social media page.",
            info: "Technologies: HTML, CSS, JavaScript, Python, Django"
        },
        {
            title: "Meme Generator",
            video: 'img/projects/4.mp4',
            description: "Entertaining time-passer featuring hundreds of memes.",
            info: "Technologies: Python"
        },
        {
            title: "Music Mania",
            video: 'img/projects/5.mp4',
            description: "Interactive music discovery platform.",
            info: "Technologies: HTML, CSS, JavaScript, jQuery"
        },
        {
            title: "Nancy Drew Portal",
            video: 'img/projects/6.mp4',
            description: "Custom game portal developed for a client.",
            info: "Technologies: Python"
        }
    ],
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
            description: "This position begins May 12, 2025. Check back after that date for details about my work experience.",
        },
        {
            title: "FedEx Ground",
            image: "img/wp1.jpg",
            position: "Package Handler",
            location: "Independence, Kentucky",
            time: "June 2024 - Present",
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
            { name: 'React', level: 15, icon: 'bi-filetype-jsx', certified: true },
            { name: 'jQuery', level: 20, icon: 'bi-filetype-js', certified: true },
            { name: 'Bootstrap 3', level: 40, icon: 'bi-bootstrap', certified: true },
            { name: 'Bootstrap 4', level: 45, icon: 'bi-bootstrap-fill', certified: true },
            { name: 'TypeScript', level: 20, icon: 'bi-filetype-tsx', certified: true }
        ],
        'Programming Languages': [
            { name: 'Python', level: 80, icon: 'bi-filetype-py', certified: true },
            { name: 'Django', level: 40, icon: 'bi-filetype-py' },
            { name: 'Java', level: 25, icon: 'bi-filetype-java', certified: true },
            { name: 'PHP', level: 30, icon: 'bi-filetype-php', certified: true },
            { name: 'R', level: 20, icon: 'bi-filetype-r', certified: true },
            { name: 'C', level: 20, icon: 'bi-filetype-c' },
            { name: 'C++', level: 15, icon: 'bi-filetype-cpp', certified: true },
            { name: 'C#', level: 15, icon: 'bi-filetype-cs', certified: true }
        ],
        'Frontend Development': [
            { name: 'Angular', level: 5, icon: 'bi-filetype-jsx' },
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
        'Tools': [
            { name: 'VS Code', level: 40, icon: 'bi-code-square' },
            { name: 'GitHub', level: 35, icon: 'bi-github' },
            { name: 'Docker', level: 10, icon: 'bi-docker' }
        ]
    },
    gpaData: {
        highSchool: [3.62, 3.38, 3.64, 3.83],
        college: [3.6, 3.75, null, null]
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
    const navGlow = document.querySelector('.nav-glow');
    if (!navGlow) return;

    const glowRect = navGlow.getBoundingClientRect();
    const glowCenter = glowRect.left + glowRect.width / 2;

    elements.navLinks.forEach(link => {
        const linkRect = link.getBoundingClientRect();
        const linkCenter = linkRect.left + linkRect.width / 2;
        const distance = Math.abs(glowCenter - linkCenter);
        const maxDistance = 150;
        
        if (distance < maxDistance) {
            const intensity = 1 - (distance / maxDistance);
            link.style.transform = `translateY(${-3 * intensity}px)`;
            link.style.boxShadow = `0 8px 25px rgba(59, 130, 246, ${0.4 * intensity})`;
            link.style.filter = `brightness(${1 + intensity * 0.5})`;
        } else {
            link.style.transform = '';
            link.style.boxShadow = '';
            link.style.filter = '';
        }
    });
}

function createProjectCards() {
    elements.projectGrid.innerHTML = state.projects.map((project, index) => `
        <div class="project-card" data-view="image">
            <div class="project-toggle">
                <div class="toggle-container">
                    <div class="toggle-slider" style="left: 5px; width: calc(33.33% - 10px);"></div>
                    <div class="toggle-option active" data-view="image" onclick="handleProjectViewToggle(this.closest('.project-card'), 'image')">Image</div>
                    <div class="toggle-option" data-view="description" onclick="handleProjectViewToggle(this.closest('.project-card'), 'description')">Description</div>
                    <div class="toggle-option" data-view="info" onclick="handleProjectViewToggle(this.closest('.project-card'), 'info')">Details</div>
                </div>
            </div>
            <div class="project-image-container">
                <img src="img/projects/${index+1}.png" class="project-image" alt="${project.title}" onclick="openProjectModal(${index})">
                <div class="project-content-overlay description-content">
                    <p class="project-description">${project.description}</p>
                </div>
                <div class="project-content-overlay info-content">
                    <pre class="project-info">${project.info}</pre>
                </div>
            </div>
            <h3 class="project-title">${project.title}</h3>
        </div>
    `).join('');
    
    document.querySelectorAll('.project-card').forEach(card => {
        card.querySelector('.description-content').style.display = 'none';
        card.querySelector('.info-content').style.display = 'none';
    });
}

function handleProjectViewToggle(card, view) {
    const options = card.querySelectorAll('.toggle-option');
    options.forEach(opt => opt.classList.remove('active'));
    card.querySelector(`.toggle-option[data-view="${view}"]`).classList.add('active');
    card.setAttribute('data-view', view);
    
    const slider = card.querySelector('.toggle-slider');
    const activeOption = card.querySelector(`.toggle-option[data-view="${view}"]`);
    const optionRect = activeOption.getBoundingClientRect();
    const containerRect = activeOption.parentElement.getBoundingClientRect();
    
    slider.style.left = `${optionRect.left - containerRect.left + 5}px`;
    slider.style.width = `${optionRect.width - 10}px`;
    
    const overlays = card.querySelectorAll('.project-content-overlay');
    overlays.forEach(overlay => overlay.style.display = 'none');
    
    if (view === 'image') {
        card.querySelector('.project-image').style.display = 'block';
    } else if (view === 'description') {
        card.querySelector('.description-content').style.display = 'block';
    } else if (view === 'info') {
        card.querySelector('.info-content').style.display = 'block';
    }
}

function openProjectModal(index) {
    state.currentProjectIndex = index;
    state.modalOpen = true;
    
    elements.projectModalTitle.textContent = state.projects[index].title;
    elements.projectModalTech.textContent = state.projects[index].info;
    elements.projectModalVideo.src = state.projects[index].video;
    elements.projectModalDescription.textContent = state.projects[index].description;
    
    elements.projectModal.classList.add('show');
    elements.overlay.classList.add('active');
    elements.body.style.overflow = 'hidden';
    
    elements.projectModalVideo.loop = true;
    elements.projectModalVideo.play().catch(e => console.log("Autoplay prevented:", e));
}

function closeProjectModal() {
    elements.projectModal.classList.remove('show');
    elements.overlay.classList.remove('active');
    state.modalOpen = false;
    elements.body.style.overflow = 'auto';
    elements.projectModalVideo.pause();
}

function nextProject() {
    state.currentProjectIndex = (state.currentProjectIndex + 1) % state.projects.length;
    const project = state.projects[state.currentProjectIndex];
    
    elements.projectModalTitle.textContent = project.title;
    elements.projectModalTech.textContent = project.info;
    elements.projectModalVideo.src = project.video;
    elements.projectModalDescription.textContent = project.description;
    elements.projectModalVideo.loop = true;
    elements.projectModalVideo.play();
}

function prevProject() {
    state.currentProjectIndex = (state.currentProjectIndex - 1 + state.projects.length) % state.projects.length;
    const project = state.projects[state.currentProjectIndex];
    
    elements.projectModalTitle.textContent = project.title;
    elements.projectModalTech.textContent = project.info;
    elements.projectModalVideo.src = project.video;
    elements.projectModalDescription.textContent = project.description;
    elements.projectModalVideo.loop = true;
    elements.projectModalVideo.play();
}

async function loadSVGs() {
    try {
        const response = await fetch("svgs.json");
        if (!response.ok) throw new Error("Failed to load SVGs");
        const data = await response.json();
        const svgNS = "http://www.w3.org/2000/svg";
        
        // Clear existing content
        elements.svgContent.innerHTML = '';
        elements.svgContentMobile.innerHTML = '';
        state.paths = [];
        state.ellipses = [];

        // Create paths
        data.svgs[0].paths.forEach(pathData => {
            const path = document.createElementNS(svgNS, "path");
            path.setAttribute("d", pathData.d);
            path.setAttribute("filter", "url(#glow)");
            path.setAttribute("stroke", "#00ff00");
            path.setAttribute("stroke-width", "3");
            path.setAttribute("fill", "none");
            path.setAttribute("vector-effect", "non-scaling-stroke");
            
            const length = path.getTotalLength();
            path.style.strokeDasharray = length;
            path.style.strokeDashoffset = length;
            
            elements.svgContent.appendChild(path);
            elements.svgContentMobile.appendChild(path.cloneNode(true));
            state.paths.push(path);
        });

        // Create ellipses
        data.svgs[0].ellipses.forEach(ellipseData => {
            const ellipse = document.createElementNS(svgNS, "ellipse");
            ellipse.setAttribute("cx", ellipseData.cx);
            ellipse.setAttribute("cy", ellipseData.cy);
            ellipse.setAttribute("rx", ellipseData.rx);
            ellipse.setAttribute("ry", ellipseData.ry);
            ellipse.setAttribute("filter", "url(#glow)");
            ellipse.setAttribute("stroke", "#00ff00");
            ellipse.setAttribute("stroke-width", "3");
            ellipse.setAttribute("fill", "none");
            ellipse.setAttribute("vector-effect", "non-scaling-stroke");
            
            const length = ellipse.getTotalLength();
            ellipse.style.strokeDasharray = length;
            ellipse.style.strokeDashoffset = length;
            
            elements.svgContent.appendChild(ellipse);
            elements.svgContentMobile.appendChild(ellipse.cloneNode(true));
            state.ellipses.push(ellipse);
        });

        // Animate immediately
        setTimeout(() => {
            animateCircuitRecolor(state.activeSection);
        }, 50);

    } catch (error) {
        console.error("SVG Error:", error);
        createFallbackSVG();
    }
}

function createFallbackSVG() {
    const svgNS = "http://www.w3.org/2000/svg";
    
    // Create simple circuit path as fallback
    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("d", "M100,100 C150,50 200,150 250,100 S350,50 400,100");
    path.setAttribute("stroke", "#00ff00");
    path.setAttribute("stroke-width", "3");
    path.setAttribute("fill", "none");
    path.setAttribute("filter", "url(#glow)");
    path.setAttribute("vector-effect", "non-scaling-stroke");
    
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    
    elements.svgContent.appendChild(path);
    elements.svgContentMobile.appendChild(path.cloneNode(true));
    state.paths = [path];
    
    setTimeout(() => {
        animateCircuitRecolor(state.activeSection);
    }, 50);
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
}

function getElementRegion(el, section) {
    const bbox = el.getBBox();
    const centerX = bbox.x + bbox.width/2;
    const centerY = bbox.y + bbox.height/2;
    
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
    const allElements = [...state.paths, ...state.ellipses];
    
    allElements.forEach(el => {
        const region = getElementRegion(el, section);
        const color = region === 'active' ? '#00ff00' : 
                     region === 'inactive' ? '#ff0000' : '#00ff00';
        
        el.style.animation = 'none';
        void el.offsetHeight;
        el.style.stroke = color;
        el.style.animation = 'dash 2s linear forwards, pulse 2s ease-in-out infinite';
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
        
        await new Promise(r => setTimeout(r, 800));
        
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

        await new Promise(r => setTimeout(r, 2000));
        
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
    elements.certGrid.innerHTML = certs.map((cert, index) => `
        <div class="cert-card">
            <img src="${cert.image}" loading="lazy" alt="${cert.title}" data-index="${index}">
            <p>${cert.title}</p>
        </div>
    `).join("");
}

function openModal(index) {
    state.currentImageIndex = index;
    state.modalOpen = true;
    elements.modal.classList.add("show");
    elements.modalImg.src = state.filteredCerts[index].image;
    elements.body.style.overflow = 'hidden';
    updateArrows();
}

function closeModal() {
    elements.modal.classList.remove("show");
    state.modalOpen = false;
    elements.body.style.overflow = 'auto';
}

function prevImage() {
    if (state.currentImageIndex > 0) {
        state.currentImageIndex--;
        elements.modalImg.src = state.filteredCerts[state.currentImageIndex].image;
        updateArrows();
    }
}

function nextImage() {
    if (state.currentImageIndex < state.filteredCerts.length - 1) {
        state.currentImageIndex++;
        elements.modalImg.src = state.filteredCerts[state.currentImageIndex].image;
        updateArrows();
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
            labels: ['Year 1', 'Sem 1', 'Year 2', 'Sem 2', 'Year 3', 'Sem 3', 'Year 4', 'Sem 4'],
            datasets: [
                {
                    label: 'High School GPA',
                    data: [3.62, null, 3.38, null, 3.64, null, 3.83, null],
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
                    data: [3.6, 3.75, null, null, null, null, null, null],
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
            setTimeout(() => {
                icon.style.animation = '';
            }, 500);
        });
    });

    document.querySelectorAll('.skill-progress-bar').forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });

    document.querySelectorAll('.orbit-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            const skillName = item.querySelector('.orbit-tooltip').textContent.toLowerCase();
            document.querySelector(`.skill-card[data-skill="${skillName}"]`)?.classList.add('highlight');
        });
        item.addEventListener('mouseleave', () => {
            const skillName = item.querySelector('.orbit-tooltip').textContent.toLowerCase();
            document.querySelector(`.skill-card[data-skill="${skillName}"]`)?.classList.remove('highlight');
        });
    });
}

function handleOverlayClick(e) {
    if (state.activeSection && !e.target.closest('#certificates, #projects, #about, #skills, nav a, .hamburger')) {
        toggleSection(state.activeSection);
    }
}

function animateNavGlow() {
    state.navGlowPosition += 1;
    if (state.navGlowPosition > 200) {
        state.navGlowPosition = -100;
    }
    
    const navGlow = document.querySelector('.nav-glow');
    if (navGlow) {
        navGlow.style.left = `${state.navGlowPosition}%`;
    }
    
    updateNavButtonEffects();
    requestAnimationFrame(animateNavGlow);
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

    elements.overlay.addEventListener("click", handleOverlayClick);

    elements.certGrid.addEventListener("click", (e) => {
        if (e.target.tagName === "IMG") {
            openModal(parseInt(e.target.dataset.index));
        }
    });

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
    });

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
    });

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
    
    window.addEventListener('resize', () => {
        const wasMobile = state.isMobile;
        state.isMobile = checkMobile();
        
        if (wasMobile !== state.isMobile) {
            handleMobileLayout();
            if (state.isMobile) {
                elements.nav.classList.remove('active');
                elements.hamburger.classList.remove('active');
            }
        }
    });

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