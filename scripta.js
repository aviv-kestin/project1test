$("document").ready(function() {

// Show static text when the page is loaded
document.querySelectorAll('.static-text').forEach(text => text.style.display = 'inline');

// Function to toggle animation on hover
function toggleAnimation() {
    const animatedTexts = document.querySelectorAll('.animated-text');
    animatedTexts.forEach(textPath => {
        textPath.style.display = textPath.style.display === 'none' ? 'inline' : 'none';
    });
}

// Add event listeners for hover
const svgContainers = document.querySelectorAll('.svg-container');
svgContainers.forEach(container => {
    container.addEventListener('mouseover', (event) => {
        // Check if mouse is over the SVG or its child elements
        if (event.target.closest('svg') === container) {
            // Show animated text on hover if mouse is over the SVG or its child elements
            container.querySelectorAll('.animated-text').forEach(text => text.style.display = 'inline');
            // Hide static text on hover if mouse is over the SVG or its child elements
            container.querySelectorAll('.static-text').forEach(text => text.style.display = 'none');
        }
    });
    container.addEventListener('mouseout', (event) => {
        // Check if mouse is over the SVG or its child elements
        if (event.target.closest('svg') === container) {
            // Show static text when not hovered if mouse is over the SVG or its child elements
            container.querySelectorAll('.static-text').forEach(text => text.style.display = 'inline');
            // Hide animated text when not hovered if mouse is over the SVG or its child elements
            container.querySelectorAll('.animated-text').forEach(text => text.style.display = 'none');
        }
    });
});






});