document.getElementById('loginForm')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      
      if (response.ok) {
        alert('Login successful');
        window.location.href = "home.html";
        console.log('Token:', data.token);
        
      } else {
        const data = await response.json();
        alert(data.message,"app.js");
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
      const response = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
      if (response.ok) {
        alert('Registration successful');
        window.location.href = 'home.html';
      } else {
        const data = await response.json();
        alert(data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
  