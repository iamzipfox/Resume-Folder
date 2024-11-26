// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const sectionID = event.target.getAttribute('href').substring(1);
        document.getElementById(sectionID).scrollIntoView({ behavior: 'smooth' });
    });
});

// Form validation
const form = document.querySelector('form');
form.addEventListener('submit', event => {
    event.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    alert(`Thank you, ${name}! Your message has been sent.`);
    form.reset();
});

// Button click feedback
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mousedown', () => {
        button.style.transform = 'scale(0.95)';
    });

    button.addEventListener('mouseup', () => {
        button.style.transform = 'scale(1)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});
