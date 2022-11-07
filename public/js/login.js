const loginFormHandler = async function(event) {
    event.preventDefault();
  
    // Collect values from the login form
    const username = document.querySelector('#username-input-login').value;
    const password = document.querySelector('#password-input-login').value;
  
    if (username && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the dashboard page
        document.location.replace('/dashboard');
      } else {
        alert('Sorry, that login did not work');
      }
    }
  };

  document.querySelector('#login-form').
addEventListener('submit', loginFormHandler)