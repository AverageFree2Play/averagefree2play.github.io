// Sidebar Collapse Logic
const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});

// Expandable Menu Logic
const triggers = document.querySelectorAll('.js-expand-trigger');

triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const parentItem = trigger.closest('.expandable-item');
        parentItem.classList.toggle('open');
    });
});