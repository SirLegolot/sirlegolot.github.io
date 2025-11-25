function updateTheme() {
    let newMode = ui('mode') == 'dark' ? 'light' : 'dark';
    ui('mode', newMode)
}

// Function to handle the project category chips
function show_pages(chip) {
    // 1. Update active chip style
    document.querySelectorAll('nav.scroll button.chip').forEach(c => c.classList.remove('fill'));
    chip.classList.add('fill');

    const category = chip.getAttribute('name').replace('_chip', ''); // 'all', 'work', 'project', 'hackathon'
    const cards = document.querySelectorAll('#project-card-container section');

    // 2. Filter and display cards
    cards.forEach(card => {
        const cardType = card.getAttribute('data-type');
        if (category === 'all' || cardType === category) {
            // Show the card and move it to the right (BeerCSS animation)
            card.classList.add('active', 'right');
            card.classList.remove('hide');
        } else {
            // Hide the card
            card.classList.remove('active', 'right');
            card.classList.add('hide');
        }
    });
}

// Function to open and populate the dialog
function show_dialog(projectTitle) {
    // --- CHANGE HERE: Search by title instead of id ---
    const project = projects.find(p => p.title === projectTitle);

    if (!project) return;

    // Get dialog elements
    const dialog = document.getElementById('dialog-post');
    const titleContainer = dialog.querySelector('nav.wrap h6');
    const contentContainer = dialog.querySelector('div.space').nextElementSibling;
    const linksContainer = dialog.querySelector('footer nav');

    // 1. Set Title
    titleContainer.textContent = project.title;

    // 2. Set Content/Description
    const descriptionHtml = project.description.map(paragraph => `<p>${paragraph}</p>`).join('');
    contentContainer.innerHTML = descriptionHtml;

    // 3. Set Links
    const linksHtml = project.links.map(link =>
        // Use the semantically correct <a> tag, styled as a BeerCSS button
        `<a class="button border" href="${link.url}" ${link.url !== '#' ? 'target="_blank"' : ''}>${link.text}</a>`
    ).join('');

    // Add the Close button back
    linksContainer.innerHTML = linksHtml + '<button data-ui="#dialog-post">Close</button>';

    // Open the dialog using the BeerCSS utility function
    ui('#dialog-post');
}

// Main rendering logic
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('project-card-container');
    const allChip = document.querySelector('button[name="all_chip"]');

    projects.forEach(project => {
        // Create the card section element
        const cardSection = document.createElement('section');
        cardSection.className = `s12 m6 l6 page active right`;
        cardSection.setAttribute('data-type', project.type);
        cardSection.onclick = () => show_dialog(project.title);

        // Build the card HTML content
        cardSection.innerHTML = `
            <article class="no-elevate no-padding round wave">
                <img class="responsive large top-round" src="${project.image}">
                <div class="small-padding center-align">
                    <h6>${project.title}</h6>
                </div>
            </article>
        `;

        container.appendChild(cardSection);
    });

    // Ensure "All" chip is active and calls the filter function on load
    show_pages(allChip);
});