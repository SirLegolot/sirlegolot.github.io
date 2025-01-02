function updateTheme() {
    let newMode = ui('mode') == 'dark' ? 'light' : 'dark';
    ui('mode', newMode)
}



function show_pages(key_elem) {
    let key_map = {};
    key_map["work_chip"] = ["work_page"];
    key_map["project_chip"] = ["project_page"];
    key_map["hackathon_chip"] = ["hackathon_page"];
    key_map["all_chip"] = ['work_page', 'project_page', 'hackathon_page'];


    // Hide everything.
    for (const [key, value] of Object.entries(key_map)) {
        let elements = document.getElementsByName(key);
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove("fill");
        }
    }
    let all_pages = key_map["all_chip"];
    for (let i = 0; i < all_pages.length; i++) {
        let elements = document.getElementsByName(all_pages[i]);
        for (let j = 0; j < elements.length; j++) {
            elements[j].classList.remove("active");
        }
    }

    // Now show what is requested.
    key_elem.classList.add("fill");
    let pages = key_map[key_elem.name];
    for (let i = 0; i < pages.length; i++) {
        let elements = document.getElementsByName(pages[i]);
        for (let j = 0; j < elements.length; j++) {
            elements[j].classList.add("active");
        }
    }
}