document.getElementById('eventForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('eventName').value;
    let date = document.getElementById('eventDate').value;
    let time = document.getElementById('eventTime').value;
    let location = document.getElementById('eventLocation').value;
    let description = document.getElementById('eventDescription').value;

    if (name && date && time && location && description) {
        let li = document.createElement('li');
        li.innerHTML = `<strong>${name}</strong><br>Date: ${date} | Time: ${time}<br>Location: ${location}<br>Description: ${description}`;
        document.getElementById('eventList').appendChild(li);
        
        document.getElementById('eventForm').reset();
    }
});
