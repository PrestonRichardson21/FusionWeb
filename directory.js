document.addEventListener("DOMContentLoaded", function() {
    fetch('directory.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('directory').innerHTML = data;
        })
        .catch(error => console.error('Error fetching directory:', error));
});