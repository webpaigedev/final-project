document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const registrationForm = document.getElementById('registrationForm');
  const message = document.getElementById('message');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Check if the username and password match a stored user
    if (username === 'user' && password === 'password') {
      // Redirect to the index page and display a success message
      localStorage.setItem('username', username);
      window.location.href = 'index.html';
    } else {
      // Display an error message
      message.textContent = 'Invalid username or password';
      message.style.color = '#dc3545';
    }
  });

  registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('regUsername').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;

    // Check if the passwords match
    if (password!== confirmPassword) {
      message.textContent = 'Passwords do not match';
      message.style.color = '#dc3545';
      return;
    }

    // Store the new user
    // (in a real application, you would send the registration data to a server)
    localStorage.setItem('username', username);

    // Clear the form fields
    document.getElementById('regUsername').value = '';
    document.getElementById('regEmail').value = '';
    document.getElementById('regPassword').value = '';
    document.getElementById('regConfirmPassword').value = '';

    // Display a success message
    message.textContent = `You have successfully registered, ${username}!`;
    message.style.color = '#28a745';
    
    // Redirect to the login page
    setTimeout(() => {
      window.location.href = 'login.html';
    }, 2000); // redirect after 2 seconds
  });
  
  const apiUrl = 'http://localhost:8080'; // adjust to your Spring Boot app's URL

// Get all recipes
fetch(`${apiUrl}/recipes`)
   .then(response => response.json())
   .then(recipes => {
        const recipeList = document.getElementById('recipe-list');
        recipes.forEach(recipe => {
            const listItem = document.createElement('li');
            listItem.textContent = recipe.name;
            recipeList.appendChild(listItem);
        });
    });

// Add event listeners for create, update, and delete operations
document.addEventListener('DOMContentLoaded', () => {
    const createRecipeForm = document.getElementById('create-recipe-form');
    createRecipeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const recipeData = {
            name: document.getElementById('recipe-name').value,
            description: document.getElementById('recipe-description').value,
            //...
        };
        fetch(`${apiUrl}/recipes`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(recipeData),
        })
           .then(response => response.json())
           .then((data) => console.log(data));
    });

    // Add event listeners for update and delete operations similarly
});
});