// === APPLICATIONS CONFIGURATION ===
const APPLICATIONS = [
    {
        id: 'social-viral-1',
        name: 'Digital Ideas Generator',
        description: 'Generate viral content ideas for social media platforms.',
        url: 'https://henryk4god.github.io/Digital-Product-Ideas-Generator/',
        icon: '💡',
        type: 'free',
        comment: 'Free tool - Great for beginners'
    },
    {
        id: 'social-viral-2',
        name: 'Viral Social MP',
        description: 'Create viral social media marketing posts and campaigns.',
        url: 'https://henryk4god.github.io/ViralsocialMP/',
        icon: '🚀',
        type: 'free',
        comment: 'Free tool - Advanced features'
    },
    {
        id: 'social-viral-premium',
        name: 'Social Media Viral Content System',
        description: 'Premium viral content creation system with advanced features.',
        url: 'https://henryk4god.github.io/ViralsocialMP/', // Replace with actual premium URL
        icon: '🌟',
        type: 'premium',
        comment: 'PREMIUM - Requires access code'
    },
    {
        id: 'product-sales',
        name: 'Complete Product Sales System',
        description: 'Generate effective sales prompts for any product.',
        url: 'https://henryk4god.github.io/dirsalespromt/',
        icon: '💰',
        type: 'free',
        comment: 'Free tool - Sales optimization'
    },
    {
        id: 'youtube-master',
        name: 'YouTube Master Prompt System',
        description: 'Create engaging YouTube content with optimized prompts.',
        url: 'https://henryk4god.github.io/utubepromp/',
        icon: '📺',
        type: 'free',
        comment: 'Free tool - YouTube focused'
    },
    {
        id: 'facebook-ads',
        name: 'Facebook Ad Prompt System',
        description: 'Generate high-converting Facebook ad copy and creatives.',
        url: 'https://henryk4god.github.io/Fbkadpromt/',
        icon: '📱',
        type: 'free',
        comment: 'Free tool - Facebook ads'
    },
    {
        id: 'digital-products',
        name: 'Digital Product Prompt System',
        description: 'Workflow prompts for creating and selling digital products.',
        url: 'https://henryk4god.github.io/Digital-Products-Work-Flow/',
        icon: '🛒',
        type: 'free',
        comment: 'Free tool - Digital products'
    },
    {
        id: 'amazon-publishing',
        name: 'Amazon Publishing Prompt System',
        description: 'Prompts for successful Amazon Kindle publishing.',
        url: 'https://henryk4god.github.io/Amazonpromt/',
        icon: '📚',
        type: 'free',
        comment: 'Free tool - Amazon focused'
    },
    {
        id: 'blogging',
        name: 'Blogging Prompt System',
        description: 'Create engaging blog content with optimized prompts.',
        url: 'https://henryk4god.github.io/blogprompt/',
        icon: '✍️',
        type: 'free',
        comment: 'Free tool - Blog content'
    },
    {
        id: 'podcast',
        name: 'Podcast Prompt System',
        description: 'Generate podcast episode ideas and scripts.',
        url: 'https://henryk4god.github.io/podcastprompt/',
        icon: '🎙️',
        type: 'free',
        comment: 'Free tool - Podcast creation'
    },
    {
        id: 'whiteboard',
        name: 'White Board',
        description: 'Interactive whiteboard for brainstorming and planning.',
        url: 'https://henryk4god.github.io/whiteboard/',
        icon: '📋',
        type: 'free',
        comment: 'Free tool - Brainstorming'
    },
    {
        id: 'webinar',
        name: 'Webinar System',
        description: 'Create engaging webinar content and presentations.',
        url: 'https://henryk4god.github.io/webinar/',
        icon: '🎯',
        type: 'free',
        comment: 'Free tool - Webinar creation'
    },
    {
        id: 'sales-funnel',
        name: 'Sales Funnel Video',
        description: 'Create video sales funnels that convert.',
        url: 'https://henryk4god.github.io/Video-funnel/',
        icon: '📊',
        type: 'free',
        comment: 'Free tool - Sales funnels'
    },
    {
        id: 'story-animation',
        name: 'Story Animation Video',
        description: 'Create animated story videos for marketing.',
        url: 'https://henryk4god.github.io/story/',
        icon: '🎬',
        type: 'free',
        comment: 'Free tool - Story animation'
    }
];

// Premium Access System
const PREMIUM_SYSTEM = {
    adminPassword: 'admin123', // Change this in production
    validCodes: JSON.parse(localStorage.getItem('premiumCodes')) || [],
    generateCode: function() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let code = '';
        for (let i = 0; i < 12; i++) {
            code += chars.charAt(Math.floor(Math.random() * chars.length));
            if ((i + 1) % 4 === 0 && i < 11) code += '-';
        }
        return code;
    },
    validateCode: function(code) {
        return this.validCodes.some(validCode => 
            validCode.code === code && !validCode.used
        );
    },
    useCode: function(code) {
        const codeObj = this.validCodes.find(c => c.code === code);
        if (codeObj) {
            codeObj.used = true;
            codeObj.usedAt = new Date().toISOString();
            this.saveCodes();
            return true;
        }
        return false;
    },
    saveCodes: function() {
        localStorage.setItem('premiumCodes', JSON.stringify(this.validCodes));
    },
    generateNewCodes: function(count = 5) {
        const newCodes = [];
        for (let i = 0; i < count; i++) {
            const code = this.generateCode();
            newCodes.push({
                code: code,
                generatedAt: new Date().toISOString(),
                used: false
            });
        }
        this.validCodes = [...this.validCodes, ...newCodes];
        this.saveCodes();
        return newCodes;
    }
};

// DOM Elements
const dashboardView = document.getElementById('dashboard-view');
const appView = document.getElementById('app-view');
const appIframe = document.getElementById('app-iframe');
const appTitle = document.getElementById('app-title');
const backButton = document.getElementById('back-button');
const adminButton = document.getElementById('admin-button');
const supportButton = document.getElementById('support-button');
const supportModal = document.getElementById('support-modal');
const closeSupport = document.getElementById('close-support');
const copyButton = document.getElementById('copy-button');
const copySuccess = document.getElementById('copy-success');
const premiumModal = document.getElementById('premium-modal');
const closePremium = document.getElementById('close-premium');
const accessCodeInput = document.getElementById('access-code-input');
const submitCode = document.getElementById('submit-code');
const premiumMessage = document.getElementById('premium-message');
const getPremiumLink = document.getElementById('get-premium-link');
const adminModal = document.getElementById('admin-modal');
const closeAdmin = document.getElementById('close-admin');
const adminPassword = document.getElementById('admin-password');
const generateCodes = document.getElementById('generate-codes');
const generatedCodes = document.getElementById('generated-codes');
const adminAppsList = document.getElementById('admin-apps-list');
const validCodesList = document.getElementById('valid-codes-list');

// Current app state
let currentApp = null;
let hasPremiumAccess = localStorage.getItem('hasPremiumAccess') === 'true';

// Initialize dashboard
function initDashboard() {
    renderAppCards();
    setupEventListeners();
    checkFirstVisit();
    setupBrowserNavigation();
    updatePremiumStatus();
}

// Render app cards in the dashboard - FIXED
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
                <div>
                    <h3 class="app-card__title">${app.name}</h3>
                    <p class="app-card__description">${app.description}</p>
                </div>
            </div>
            <span class="app-card__badge ${badgeClass}">${app.type.toUpperCase()}</span>
            ${app.comment ? `<div class="app-card__comment">${app.comment}</div>` : ''}
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
    
    // Admin modal
    adminButton.addEventListener('click', () => {
        openAdminModal();
    });
    
    closeAdmin.addEventListener('click', () => {
        closeAdminModal();
    });
    
    // Premium modal
    closePremium.addEventListener('click', () => {
        closePremiumModal();
    });
    
    // Copy to clipboard
    copyButton.addEventListener('click', copyAccountDetails);
    
    // Premium access
    submitCode.addEventListener('click', validatePremiumCode);
    accessCodeInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') validatePremiumCode();
    });
    
    getPremiumLink.addEventListener('click', (e) => {
        e.preventDefault();
        closePremiumModal();
        openSupportModal();
    });
    
    // Admin functions
    generateCodes.addEventListener('click', generatePremiumCodes);
    
    // Close modals on backdrop click
    [supportModal, premiumModal, adminModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                if (modal === supportModal) closeSupportModal();
                if (modal === premiumModal) closePremiumModal();
                if (modal === adminModal) closeAdminModal();
            }
        });
    });
}

// Open an app in the iframe
function openApp(appId) {
    const app = APPLICATIONS.find(a => a.id === appId);
    if (!app) return;
    
    currentApp = app;
    
    // Handle premium apps
    if (app.type === 'premium' && !hasPremiumAccess) {
        openPremiumModal();
        return;
    }
    
    // Update UI
    dashboardView.style.display = 'none';
    appView.classList.add('app-view--active');
    appTitle.textContent = app.name;
    
    // Load iframe with proper sizing
    appIframe.src = app.url;
    appIframe.onload = () => {
        // Ensure iframe displays properly
        setTimeout(() => {
            appIframe.style.visibility = 'visible';
        }, 100);
    };
    
    // Update URL
    history.pushState({ appId }, '', `#${appId}`);
}

// Close the app view
function closeApp() {
    appView.classList.remove('app-view--active');
    dashboardView.style.display = 'grid';
    appIframe.src = '';
    appIframe.style.visibility = 'hidden';
    currentApp = null;
    
    // Update URL
    history.pushState({}, '', window.location.pathname);
}

// Modal functions
function openSupportModal() {
    supportModal.classList.add('modal--active');
}

function closeSupportModal() {
    supportModal.classList.remove('modal--active');
}

function openPremiumModal() {
    premiumModal.classList.add('modal--active');
    accessCodeInput.value = '';
    premiumMessage.style.display = 'none';
    accessCodeInput.focus();
}

function closePremiumModal() {
    premiumModal.classList.remove('modal--active');
}

function openAdminModal() {
    adminModal.classList.add('modal--active');
    renderAdminApps();
    renderValidCodes();
    adminPassword.value = '';
    generatedCodes.innerHTML = '';
}

function closeAdminModal() {
    adminModal.classList.remove('modal--active');
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

// Premium access validation
function validatePremiumCode() {
    const code = accessCodeInput.value.trim().toUpperCase();
    
    if (!code) {
        showPremiumMessage('Please enter an access code', 'error');
        return;
    }
    
    if (PREMIUM_SYSTEM.validateCode(code)) {
        PREMIUM_SYSTEM.useCode(code);
        hasPremiumAccess = true;
        localStorage.setItem('hasPremiumAccess', 'true');
        showPremiumMessage('Premium access granted! You can now use all premium features.', 'success');
        
        setTimeout(() => {
            closePremiumModal();
            if (currentApp) {
                openApp(currentApp.id);
            }
        }, 2000);
    } else {
        showPremiumMessage('Invalid or already used access code. Please check and try again.', 'error');
    }
}

function showPremiumMessage(message, type) {
    premiumMessage.textContent = message;
    premiumMessage.className = 'premium-modal__message';
    premiumMessage.classList.add(`premium-modal__message--${type}`);
}

function updatePremiumStatus() {
    // Check if premium access is still valid
    if (hasPremiumAccess) {
        // You could add expiration logic here
        console.log('Premium access active');
    }
}

// Admin functions
function generatePremiumCodes() {
    const password = adminPassword.value;
    
    if (password !== PREMIUM_SYSTEM.adminPassword) {
        alert('Invalid admin password');
        return;
    }
    
    const newCodes = PREMIUM_SYSTEM.generateNewCodes(5);
    let codesHTML = '<strong>New Premium Codes Generated:</strong><br><br>';
    
    newCodes.forEach(codeObj => {
        codesHTML += `<div>${codeObj.code}</div>`;
    });
    
    codesHTML += '<br><small>These codes have been saved and are ready for distribution.</small>';
    generatedCodes.innerHTML = codesHTML;
    
    renderValidCodes();
}

function renderAdminApps() {
    adminAppsList.innerHTML = '';
    
    APPLICATIONS.forEach((app, index) => {
        const appItem = document.createElement('div');
        appItem.className = 'admin-modal__app-item';
        
        appItem.innerHTML = `
            <div class="admin-modal__app-info">
                <div class="admin-modal__app-name">${app.name}</div>
                <div class="admin-modal__app-url">${app.url}</div>
                <div class="admin-modal__app-comment">${app.comment || 'No comment'}</div>
            </div>
            <div class="admin-modal__app-actions">
                <button class="admin-modal__action-btn admin-modal__action-btn--edit" onclick="editAppComment(${index})">Edit Comment</button>
                <button class="admin-modal__action-btn admin-modal__action-btn--toggle" onclick="toggleAppType(${index})">
                    Make ${app.type === 'free' ? 'Premium' : 'Free'}
                </button>
            </div>
        `;
        
        adminAppsList.appendChild(appItem);
    });
}

function renderValidCodes() {
    validCodesList.innerHTML = '';
    
    if (PREMIUM_SYSTEM.validCodes.length === 0) {
        validCodesList.innerHTML = '<div>No premium codes generated yet.</div>';
        return;
    }
    
    PREMIUM_SYSTEM.validCodes.forEach(codeObj => {
        const codeItem = document.createElement('div');
        codeItem.className = 'admin-modal__code-item';
        
        codeItem.innerHTML = `
            <div class="admin-modal__code-value">${codeObj.code}</div>
            <div class="admin-modal__code-status">
                ${codeObj.used ? 'USED' : 'ACTIVE'}
            </div>
        `;
        
        validCodesList.appendChild(codeItem);
    });
}

// Admin app management functions
function editAppComment(index) {
    const newComment = prompt('Enter new comment for this app:', APPLICATIONS[index].comment || '');
    if (newComment !== null) {
        APPLICATIONS[index].comment = newComment;
        renderAdminApps();
        renderAppCards(); // Update main dashboard
        // In a real app, you would save this to localStorage or a database
    }
}

function toggleAppType(index) {
    APPLICATIONS[index].type = APPLICATIONS[index].type === 'free' ? 'premium' : 'free';
    renderAdminApps();
    renderAppCards(); // Update main dashboard
    // In a real app, you would save this to localStorage or a database
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

// Make functions globally available for onclick handlers
window.editAppComment = editAppComment;
window.toggleAppType = toggleAppType;

// Initialize the dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', initDashboard);
