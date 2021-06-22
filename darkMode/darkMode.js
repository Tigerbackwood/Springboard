const toggleDark = document.querySelector('#switch');
if(localStorage.getItem('darkModeEnabled')) {
    document.body.className = 'dark';
    toggleDark.checked = true;
}
toggleDark.addEventListener('click', function(e) {
    const { checked } = toggleDark;
    document.body.className = checked ? 'dark' : '';
    if (checked) {
    localStorage.setItem('darkModeEnabled', true);
    } else {
        localStorage.removeItem('darkModeEnabled');
    }
})