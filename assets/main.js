// === APPLICATIONS CONFIGURATION ===
const APPLICATIONS = [
    {
        id: 'social-viral-1',
        name: 'Digital Ideas Generator',
        description: 'Generate viral content ideas for social media platforms.',
        url: 'https://henryk4god.github.io/Digital-Product-Ideas-Generator/',
        icon: '💡',
        type: 'free'
    },
    {
        id: 'social-viral-2',
        name: 'Viral Social MP',
        description: 'Create viral social media marketing posts and campaigns.',
        url: 'https://henryk4god.github.io/ViralsocialMP/',
        icon: '🚀',
        type: 'free'
    },
    {
        id: 'social-viral-premium',
        name: 'Social Media Viral Content System',
        description: 'Premium viral content creation system with advanced features.',
        url: '#premium',
        icon: '🌟',
        type: 'premium'
    },
    {
        id: 'product-sales',
        name: 'Complete Product Sales System',
        description: 'Generate effective sales prompts for any product.',
        url: 'https://henryk4god.github.io/dirsalespromt/',
        icon: '💰',
        type: 'free'
    },
    {
        id: 'youtube-master',
        name: 'YouTube Master Prompt System',
        description: 'Create engaging YouTube content with optimized prompts.',
        url: 'https://henryk4god.github.io/utubepromp/',
        icon: '📺',
        type: 'free'
    },
    {
        id: 'facebook-ads',
        name: 'Facebook Ad Prompt System',
        description: 'Generate high-converting Facebook ad copy and creatives.',
        url: 'https://henryk4god.github.io/Fbkadpromt/',
        icon: '📱',
        type: 'free'
    },
    {
        id: 'digital-products',
        name: 'Digital Product Prompt System',
        description: 'Workflow prompts for creating and selling digital products.',
        url: 'https://henryk4god.github.io/Digital-Products-Work-Flow/',
        icon: '🛒',
        type: 'free'
    },
    {
        id: 'amazon-publishing',
        name: 'Amazon Publishing Prompt System',
        description: 'Prompts for successful Amazon Kindle publishing.',
        url: 'https://henryk4god.github.io/Amazonpromt/',
        icon: '📚',
        type: 'free'
    },
    {
        id: 'blogging',
        name: 'Blogging Prompt System',
        description: 'Create engaging blog content with optimized prompts.',
        url: 'https://henryk4god.github.io/blogprompt/',
        icon: '✍️',
        type: 'free'
    },
    {
        id: 'podcast',
        name: 'Podcast Prompt System',
        description: 'Generate podcast episode ideas and scripts.',
        url: 'https://henryk4god.github.io/podcastprompt/',
        icon: '🎙️',
        type: 'free'
    },
    {
        id: 'whiteboard',
        name: 'White Board',
        description: 'Interactive whiteboard for brainstorming and planning.',
        url: 'https://henryk4god.github.io/whiteboard/',
        icon: '📋',
        type: 'free'
    },
    {
        id: 'webinar',
        name: 'Webinar System',
        description: 'Create engaging webinar content and presentations.',
        url: 'https://henryk4god.github.io/webinar/',
        icon: '🎯',
        type: 'free'
    },
    {
        id: 'sales-funnel',
        name: 'Sales Funnel Video',
        description: 'Create video sales funnels that convert.',
        url: 'https://henryk4god.github.io/Video-funnel/',
        icon: '📊',
        type: 'free'
    },
    {
        id: 'story-animation',
        name: 'Story Animation Video',
        description: 'Create animated story videos for marketing.',
        url: 'https://henryk4god.github.io/story/',
        icon: '🎬',
        type: 'free'
    }
];

// DOM Elements
const dashboardView = document.getElementById('dashboard-view');
const appView = document.getElementById('app-view');
const appIframe = document.getElementById('app-iframe');
const appTitle = document.getElementById('app-title');
const backButton = document.getElementById('back-button');
const supportButton = document.getElementById('support-button');
const supportModal = document.getElementById('support-modal');
const closeSupport = document.getElementById('close-support');
const copyButton = document.getElementById('copy-button');
const copySuccess = document.getElementById('copy-success');

// Initialize dashboard
function initDashboard() {
    renderAppCards();
    setupEventListeners();
    checkFirstVisit();
    setupBrowserNavigation();
}

// Render app cards in the dashboard
function renderAppCards() {
    dashboardView.innerHTML = '';
    
    APPLICATIONS.forEach(app => {
        const card = document.createElement('div');
        card.className = 'app-card';
        card.dataset.appId = app.id;
        
        const badgeClass = app.type === 'premium' ? 
            'app-card__badge--premium' : 'app-card__badge--free';
        
        card.innerHTML = `
            <div class="app-card__header">
                <div class="app-card__icon">${app.icon}</div>
                <h3 class="app-card__title">${app.name}</h3>
            </div>
            <p class="app-card__description">${app.description}</p>
            <span class="app-card__badge ${badgeClass}">${app.type.toUpperCase()}</span>
        `;
        
        dashboardView.appendChild(card);
    });
}

// Setup event listeners
function setupEventListeners() {
    // App card clicks
    dashboardView.addEventListener('click', (e) => {
        const card = e.target.closest('.app-card');
        if (card) {
            const appId = card.dataset.appId;
            openApp(appId);
        }
    });
    
    // Back button
    backButton.addEventListener('click', () => {
        closeApp();
    });
    
    // Support modal
    supportButton.addEventListener('click', () => {
        openSupportModal();
    });
    
    closeSupport.addEventListener('click', () => {
        closeSupportModal();
    });
    
    // Copy to clipboard
    copyButton.addEventListener('click', copyAccountDetails);
    
    // Close modal on backdrop click
    supportModal.addEventListener('click', (e) => {
        if (e.target === supportModal) {
            closeSupportModal();
        }
    });
}

// Open an app in the iframe
function openApp(appId) {
    const app = APPLICATIONS.find(a => a.id === appId);
    if (!app) return;
    
    // Handle premium apps
    if (app.type === 'premium') {
        openSupportModal();
        return;
    }
    
    // Update UI
    dashboardView.style.display = 'none';
    appView.classList.add('app-view--active');
    appTitle.textContent = app.name;
    
    // Load iframe
    appIframe.src = app.url;
    
    // Update URL
    history.pushState({ appId }, '', `#${appId}`);
}

// Close the app view
function closeApp() {
    appView.classList.remove('app-view--active');
    dashboardView.style.display = 'grid';
    appIframe.src = '';
    
    // Update URL
    history.pushState({}, '', window.location.pathname);
}

// Open support modal
function openSupportModal() {
    supportModal.classList.add('support-modal--active');
}

// Close support modal
function closeSupportModal() {
    supportModal.classList.remove('support-modal--active');
}

// Copy account details to clipboard
function copyAccountDetails() {
    const accountDetails = `Account Number: 2023268027\nBank: UBA\nAccount Name: Henry Lucky\nWhatsApp: +2348033867642`;
    
    navigator.clipboard.writeText(accountDetails).then(() => {
        copySuccess.classList.add('support-modal__success--active');
        setTimeout(() => {
            copySuccess.classList.remove('support-modal__success--active');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = accountDetails;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        copySuccess.classList.add('support-modal__success--active');
        setTimeout(() => {
            copySuccess.classList.remove('support-modal__success--active');
        }, 2000);
    });
}

// Check if this is the first visit
function checkFirstVisit() {
    const hasVisited = localStorage.getItem('hasVisited');
    
    if (!hasVisited) {
        setTimeout(() => {
            openSupportModal();
            localStorage.setItem('hasVisited', 'true');
        }, 2000);
    }
}

// Handle browser navigation
function setupBrowserNavigation() {
    window.addEventListener('popstate', (e) => {
        if (e.state && e.state.appId) {
            openApp(e.state.appId);
        } else {
            closeApp();
        }
    });
    
    // Check for deep links on page load
    const hash = window.location.hash.substring(1);
    if (hash) {
        const app = APPLICATIONS.find(a => a.id === hash);
        if (app) {
            setTimeout(() => openApp(hash), 500);
        }
    }
}

// Initialize the dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', initDashboard);
