// Target all menu toggle buttons (both mobile bar & sidebar internal)
const toggleBtns = document.querySelectorAll('.js-toggle-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebar-overlay');
const navItems = document.querySelectorAll('.nav-item');
const triggers = document.querySelectorAll('.js-expand-trigger');
const redirectRows = document.querySelectorAll('.js-redirect-row');


function isMobile() {
    return window.innerWidth <= 768;
}

function toggleSidebar() {
    if (isMobile()) {
        sidebar.classList.toggle('mobile-open');
        overlay.classList.toggle('active');
    } else {
        sidebar.classList.toggle('collapsed');
    }
}

function closeMobileSidebar() {
    if (isMobile()) {
        sidebar.classList.remove('mobile-open');
        overlay.classList.remove('active');
    }
}

function switchTab(tabId) {
    // Hide all content sections
    document.querySelectorAll('.tab-content').forEach(el => el.style.display = 'none');
    // Show the selected section
    document.getElementById('section-' + tabId).style.display = 'block';
    // Make the tab selector active
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    document.querySelector('.nav-item[onclick="switchTab(\'' + tabId + '\')"]').classList.add('active');
}

// Attach listener to both toggle buttons
toggleBtns.forEach(btn => btn.addEventListener('click', toggleSidebar));

triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const parentItem = trigger.closest('.expandable-item');
        parentItem.classList.toggle('open');
    });
});

redirectRows.forEach(row => {
    row.addEventListener('click', (e) => {
        // Prevents the outer expandable card from toggling when clicking this row
        e.stopPropagation();

        // Redirect in same tab:
        const targetUrl = row.getAttribute('data-url') || 'https://example.com';
        // window.location.href = targetUrl;

        // OR to open in a new tab, use:
        window.open(targetUrl, '_blank', 'noopener,noreferrer');
    });
});

overlay.addEventListener('click', closeMobileSidebar);

navItems.forEach(item => {
    item.addEventListener('click', () => {
        closeMobileSidebar();
    });
});

window.addEventListener('resize', () => {
    if (!isMobile()) {
        sidebar.classList.remove('mobile-open');
        overlay.classList.remove('active');
    }
});