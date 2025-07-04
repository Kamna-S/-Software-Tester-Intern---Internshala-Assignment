document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();

  if (name === '' || email === '') {
    alert('Error: Both fields must be filled.');
  } else if (!email.includes('@')) {
    alert('Error: Please enter a valid email.');
  } else {
    alert(`Success: Name - ${name}, Email - ${email}`);
  }
});
