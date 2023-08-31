function submitFeedback() {
    const form = document.getElementById('feedback-form');
    const formData = new FormData(form);
  
    // Calculate total feedback score
    let totalScore = 0;
    formData.forEach((value) => {
      totalScore += parseInt(value);
    });
  
    alert(`Feedback submitted! Total score: ${totalScore}`);
    // Here you can send the feedback data to the server for processing and storage
  }
  