// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const getStartedButton = document.querySelector('.get-started-button');
    const userOptions = document.getElementById('user-options');
    const adminButton = document.getElementById('admin-button');
    const facultyButton = document.getElementById('faculty-button');
    const studentButton = document.getElementById('student-button');
    
    getStartedButton.addEventListener('click', function() {
      userOptions.style.display = 'block';
    });
  });
  