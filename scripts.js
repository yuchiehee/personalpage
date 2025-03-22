// Visitor Counter
let visitorCount = localStorage.getItem('visitorCount') || 0;
document.getElementById('counter').innerText = visitorCount;
localStorage.setItem('visitorCount', ++visitorCount);

// Message Board
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
