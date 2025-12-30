// ===== DOM Elements =====
const form = document.getElementById('cardForm');
const downloadBtn = document.getElementById('downloadBtn');
const profilePhotoInput = document.getElementById('profilePhoto');
const statsGrid = document.getElementById('statsGrid');

const cardUserName = document.getElementById('cardUserName');
const cardJobTitle = document.getElementById('cardJobTitle');
const cardProfilePhoto = document.getElementById('cardProfilePhoto');

const fullNameInput = document.getElementById('fullName');
const jobTitleInput = document.getElementById('jobTitle');
const githubContributionsInput = document.getElementById('githubContributions');
const githubProjectsInput = document.getElementById('githubProjects');
const linkedinPostsInput = document.getElementById('linkedinPosts');
const kaggleNotebooksInput = document.getElementById('kaggleNotebooks');
const kaggleCompetitionsInput = document.getElementById('kaggleCompetitions');
const mediumArticlesInput = document.getElementById('mediumArticles');
const hfModelsInput = document.getElementById('hfModels');
const hfSpacesInput = document.getElementById('hfSpaces');

// SVG Icons
const ICONS = {
    github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    kaggle: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.281.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.075.339"/></svg>`,
    projects: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6 10H6v-2h8v2zm4-4H6v-2h12v2z"/></svg>`,
    medium: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>`,
    huggingface: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 1.5c4.687 0 8.5 3.813 8.5 8.5s-3.813 8.5-8.5 8.5S3.5 16.687 3.5 12 7.313 3.5 12 3.5zM8 9.5C8 8.672 8.672 8 9.5 8s1.5.672 1.5 1.5S10.328 11 9.5 11 8 10.328 8 9.5zm5 0c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5zm-5.5 4h9c0 2.5-2 4.5-4.5 4.5s-4.5-2-4.5-4.5z"/></svg>`
};

let uploadedPhotoDataUrl = null;

// Photo upload
profilePhotoInput.addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            uploadedPhotoDataUrl = event.target.result;
            document.getElementById('photoPreview').innerHTML = `<img src="${uploadedPhotoDataUrl}" alt="Profile">`;
            document.getElementById('photoPreview').classList.add('has-image');
            cardProfilePhoto.innerHTML = `<img src="${uploadedPhotoDataUrl}" alt="Profile">`;
        };
        reader.readAsDataURL(file);
    }
});

function createStatCard(type, label, value, icon) {
    return `<div class="stat-card ${type}-card"><div class="stat-icon">${icon}</div><div class="stat-info"><span class="stat-label">${label}</span><span class="stat-value">${value}</span></div></div>`;
}

// Form submit
form.addEventListener('submit', function (e) {
    e.preventDefault();

    cardUserName.textContent = fullNameInput.value.trim() || 'Kullanıcı Adı';
    cardJobTitle.textContent = jobTitleInput.value.trim();

    let statsHtml = '';

    const githubContributions = parseInt(githubContributionsInput.value) || 0;
    const githubProjects = parseInt(githubProjectsInput.value) || 0;
    const linkedinPosts = parseInt(linkedinPostsInput.value) || 0;
    const kaggleNotebooks = parseInt(kaggleNotebooksInput.value) || 0;
    const kaggleCompetitions = parseInt(kaggleCompetitionsInput.value) || 0;
    const mediumArticles = parseInt(mediumArticlesInput.value) || 0;
    const hfModels = parseInt(hfModelsInput.value) || 0;
    const hfSpaces = parseInt(hfSpacesInput.value) || 0;

    if (githubContributions > 0) statsHtml += createStatCard('github', 'GitHub', `${githubContributions}+ katkı`, ICONS.github);
    if (linkedinPosts > 0) statsHtml += createStatCard('linkedin', 'LinkedIn', `${linkedinPosts}+ gönderi`, ICONS.linkedin);
    if (kaggleNotebooks > 0 || kaggleCompetitions > 0) {
        let kText = kaggleNotebooks > 0 ? `${kaggleNotebooks} notebook` : '';
        if (kaggleCompetitions > 0) kText += (kText ? ', ' : '') + `${kaggleCompetitions} yarışma`;
        statsHtml += createStatCard('kaggle', 'Kaggle', kText, ICONS.kaggle);
    }
    if (githubProjects > 0) statsHtml += createStatCard('projects', 'Projeler', `${githubProjects} proje`, ICONS.projects);
    if (mediumArticles > 0) statsHtml += createStatCard('medium', 'Medium', `${mediumArticles} makale`, ICONS.medium);
    if (hfModels > 0 || hfSpaces > 0) {
        let hfText = hfModels > 0 ? `${hfModels} model` : '';
        if (hfSpaces > 0) hfText += (hfText ? ', ' : '') + `${hfSpaces} space`;
        statsHtml += createStatCard('huggingface', 'HuggingFace', hfText, ICONS.huggingface);
    }

    statsGrid.innerHTML = statsHtml || '<div class="empty-state">Henüz istatistik yok</div>';
    downloadBtn.disabled = false;
});

// Real-time preview
fullNameInput.addEventListener('input', () => cardUserName.textContent = fullNameInput.value.trim() || 'Kullanıcı Adı');
jobTitleInput.addEventListener('input', () => cardJobTitle.textContent = jobTitleInput.value.trim());

// Download - using html2canvas
downloadBtn.addEventListener('click', async function () {
    const card = document.getElementById('contributionCard');
    downloadBtn.innerHTML = '⏳ Hazırlanıyor...';
    downloadBtn.disabled = true;

    try {
        // Simple html2canvas capture
        const canvas = await html2canvas(card, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#0d1b2a',
            logging: false,
            width: card.offsetWidth,
            height: card.offsetHeight
        });

        const link = document.createElement('a');
        link.download = `2025_katki_karti_${cardUserName.textContent.replace(/\s+/g, '_')}.png`;
        link.href = canvas.toDataURL('image/png', 1.0);
        link.click();
    } catch (error) {
        console.error('Download error:', error);
        alert('İndirme hatası. Lütfen tekrar deneyin.');
    } finally {
        downloadBtn.innerHTML = '📥 PNG Olarak İndir';
        downloadBtn.disabled = false;
    }
});

console.log('🎯 2025 Katkı Kartı - Ozan M.');
