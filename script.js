const wrapper = document.querySelector('.wrapper');
const originalContent = wrapper.innerHTML; // Save original content
wrapper.innerHTML += originalContent; // Clone and append original content
let scrollAmount = 0;
const scrollStep = 1; // Adjust scroll speed here
const delay = 15; // Adjust delay here

function autoScroll() {
    scrollAmount += scrollStep;
    if (scrollAmount >= wrapper.scrollWidth / 2) { // Check against half the scroll width
        scrollAmount = 0; // Reset scroll amount to the start
    }
    wrapper.scrollLeft = scrollAmount;
    requestAnimationFrame(autoScroll);
}

requestAnimationFrame(autoScroll);
