// Simple vanilla JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('clickMe');
    const message = document.getElementById('message');
    let clickCount = 0;
    
    button.addEventListener('click', function() {
        clickCount++;
        
        const messages = [
            'Hello from Azure Static Web Apps! 🚀',
            'You clicked me! Click count: ' + clickCount,
            'Vanilla JS is awesome! 🎉',
            'Keep clicking! You\'re at ' + clickCount + ' clicks!',
            'This is hosted on Azure! ☁️'
        ];
        
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        message.textContent = randomMessage;
        
        // Add a fade-in animation
        message.style.opacity = '0';
        setTimeout(() => {
            message.style.transition = 'opacity 0.5s ease-in';
            message.style.opacity = '1';
        }, 10);
    });
    
    // Log to console when page loads
    console.log('Kawashimo app loaded successfully!');
    console.log('Running on Azure Static Web Apps');
});
