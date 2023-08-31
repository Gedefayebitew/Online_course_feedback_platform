function showFacultyActions() {
    const facultySection = document.getElementById('facultySection');
    const courseSection = document.getElementById('courseSection');
    
    const facultyButtons = document.querySelectorAll('.faculty-actions');
    const courseButtons = document.querySelectorAll('.course-actions');
  
    facultySection.style.display = 'block';
    courseSection.style.display = 'none';
  
    facultyButtons.forEach(button => {
      button.style.display = 'inline-block';
    });
  
    courseButtons.forEach(button => {
      button.style.display = 'none';
    });
  }
  
  function showCourseActions() {
    const facultySection = document.getElementById('facultySection');
    const courseSection = document.getElementById('courseSection');
    
    const facultyButtons = document.querySelectorAll('.faculty-actions');
    const courseButtons = document.querySelectorAll('.course-actions');
  
    facultySection.style.display = 'none';
    courseSection.style.display = 'block';
  
    facultyButtons.forEach(button => {
      button.style.display = 'none';
    });
  
    courseButtons.forEach(button => {
      button.style.display = 'inline-block';
    });
  }
  
  // Other functions for managing faculty and courses
  