function updateTheme() {
    let newMode = ui('mode') == 'dark' ? 'light' : 'dark';
    ui('mode', newMode)
}