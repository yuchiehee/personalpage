// Visitor Counter
let visitorCount = localStorage.getItem('visitorCount') || 0;
document.getElementById('visitor-count').innerText = "Visitors: " + visitorCount;
localStorage.setItem('visitorCount', ++visitorCount);

// Show Content Function
function showContent(section) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none');

    // Show the clicked section
    if (section === 'about') {
        document.getElementById('about-section').style.display = 'block';
    } else if (section === 'chat') {
        document.getElementById('chat-section').style.display = 'block';
    }
}

// Message Board Function
function submitMessage() {
    const message = document.getElementById('message').value;
    if (message) {
        const messageBoard = document.getElementById('messages');
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerText = message;
        messageBoard.appendChild(messageElement);
        document.getElementById('message').value = ''; // Clear the text area
    }
}
