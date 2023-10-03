
function trigger() {
// Get the button element
const darkModeToggle = document.getElementById('darkModeToggle');

// Listen for clicks on the button
darkModeToggle.addEventListener('click', () => {
    // Toggle the dark mode class on the body
    console.log("s")
    document.body.classList.toggle('dark-mode');
});

} 


trigger();
