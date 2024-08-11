document.getElementById('loginForm')?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
      const response = await fetch(`${process.env.FRONTEND_URL}/api/users/login`, {  // Updated URL
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
      });
    
      if (response.ok) {
          const data = await response.json();
          alert('Login successful');
          console.log('Token:', data.token);
          window.location.href = "home.html";
      } else {
          const data = await response.json();
          alert(data.message);
      }
  } catch (error) {
      console.error('Error:', error);
  }
});

document.getElementById('registerForm')?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
      const response = await fetch(`${process.env.FRONTEND_URL}/api/users/register`, {  // Updated URL
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password })
      });
    
      if (response.ok) {
          alert('Registration successful');
          window.location.href = 'home.html';
      } else {
          const data = await response.json();
          alert(data.message);
      }
  } catch (error) {
      console.error('Error:', error);
  }
});
