document.getElementById('schedule-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const className = document.getElementById('class-name').value;
    const classDate = document.getElementById('class-date').value;
    const classTime = document.getElementById('class-time').value;
    
    if (className && classDate && classTime) {
        const classList = document.getElementById('classes');
        
        const newClass = document.createElement('li');
        newClass.textContent = `${className} - ${classDate} at ${classTime}`;
        
        classList.appendChild(newClass);
        
        document.getElementById('schedule-form').reset();
    }
});
