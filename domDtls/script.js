const body = document.body;

console.log('Dark mode state:', localStorage.getItem('isDarkMode'));

if (localStorage.getItem('isDarkMode')) {
    let iDarkMode = JSON.parse(localStorage.getItem('isDarkMode'));
    (iDarkMode) ? body.classList.add('dark') : body.classList.remove('dark')
};

const gp = document.getElementById('grandparent');
const p = document.getElementById('parent');
const c = document.getElementById('child');
const log = document.getElementById('log');
const clearBtn = document.getElementById('clear-log');


function logEvent(elementName, phaseName, className) {
    const li = document.createElement('li');
    li.innerHTML = `<strong>[${phaseName}]</strong> ${elementName}`;
    li.classList.add(className);
    log.appendChild(li);

    log.scrollTop = log.scrollHeight;
}


gp.addEventListener('click', (e) => logEvent('Grandparent', 'CAPTURE', 'phase-capture'), true);
p.addEventListener('click', (e) => logEvent('Parent', 'CAPTURE', 'phase-capture'), true);

/**
 * TARGET PHASE 
 * The event reaches the actual target element.
 */
c.addEventListener('click', (e) => logEvent('Child', 'TARGET', 'phase-target'), true);

/**
 * BUBBLING PHASE (Travelling Up)
 * The third argument `false` (or omitted) specifies the bubbling phase.
 */
c.addEventListener('click', (e) => logEvent('Child', 'BUBBLE', 'phase-bubble'), false);
p.addEventListener('click', (e) => logEvent('Parent', 'BUBBLE', 'phase-bubble'), false);
gp.addEventListener('click', (e) => logEvent('Grandparent', 'BUBBLE', 'phase-bubble'), false);

/**
 * EVENT DELEGATION
 * Instead of adding listeners to individual children, we add ONE listener 
 * to a higher-level parent (the document/body in this case) and catch events as they bubble up.
 */
document.addEventListener('click', (e) => {

    if (e.target.classList.contains('dom-node')) {
        logEvent(`Caught by Document via Delegation: ${e.target.id}`, 'DELEGATION', 'phase-delegation');

        const spacer = document.createElement('div');
        spacer.style.height = '10px';
        log.appendChild(spacer);
    }
});


clearBtn.addEventListener('click', () => {
    log.innerHTML = '';
});