// JS scripts placed here
const toggleBtn = document.querySelector('#toggle-btn');
const extraContent = document.querySelector('#extra-content');

toggleBtn.addEventListener('click', function() {
    
    extraContent.classList.toggle('show-content');

    if (extraContent.classList.contains('show-content')) {
        toggleBtn.textContent = 'Hide Brewing Tip';
    } else {
        toggleBtn.textContent = 'Show Brewing Tip';
    }
});