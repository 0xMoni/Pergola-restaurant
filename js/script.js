document.querySelector('.cta').addEventListener('click', () => {
    alert('Redirecting to reservations page!');
});

document.addEventListener('DOMContentLoaded', function() {
    // Get all required elements
    const form = document.getElementById('booking-form');
    const popup = document.querySelector('.popup');
    const overlay = document.querySelector('.popup-overlay');

    // Debug check - remove these later
    console.log('Form:', form);
    console.log('Popup:', popup);
    console.log('Overlay:', overlay);

    if (!form || !popup || !overlay) {
        console.error('Required elements not found!');
        return;
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Check if all required fields are filled
        const isValid = form.checkValidity();
        
        if (isValid) {
            // Show popup
            popup.classList.add('show');
            overlay.classList.add('show');
            
            // Reset form
            form.reset();
        }
    });
});

function closePopup() {
    const popup = document.querySelector('.popup');
    const overlay = document.querySelector('.popup-overlay');
    
    if (popup && overlay) {
        popup.classList.remove('show');
        overlay.classList.remove('show');
    }
}
