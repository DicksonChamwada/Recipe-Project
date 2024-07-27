document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');

    if (!name || !email || !message) {
      formMessage.textContent = 'Please fill out all fields.';
      formMessage.className = 'mt-4 text-red-500';
      return;
    }

    // Form submission message
    formMessage.textContent = 'Thank you for your message!';
    formMessage.className = 'mt-4 text-green-500';

    // Clear the form
    document.getElementById('contactForm').reset();
  });