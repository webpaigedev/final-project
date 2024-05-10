document.addEventListener("DOMContentLoaded", () => {
  const addRecipeBtn = document.getElementById("add-recipe-btn");
  const recipeForm = document.querySelector(".add-recipe-form form");
  const responseDiv = document.getElementById('response');
  const recipesList = document.querySelector(".recipes-list");

  recipeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const ingredients = document.getElementById('ingredients').value.split('\n');

    const recipeData = {
      name,
      description,
      ingredients
    };

    fetch('/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recipeData)
    })
   .then(response => response.json())
   .then((data) => {
      responseDiv.innerHTML = `Recipe submitted successfully! ID: ${data.id}`;

      // Create a new recipe element
      const newRecipeElement = document.createElement("a");
      newRecipeElement.classList.add("recipe");
      newRecipeElement.href = "single-recipe.html";

      const imageUrl = `./images/thumbs/${Math.floor(Math.random() * 10) + 1}.jpg`;
      const img = document.createElement("img");
      img.classList.add("img", "recipe-img");
      img.src = imageUrl;
      img.alt = "";

      const h5 = document.createElement("h5");
      h5.textContent = name;

      const p = document.createElement("p");
      p.textContent = ``;

      newRecipeElement.appendChild(img);
      newRecipeElement.appendChild(h5);
      newRecipeElement.appendChild(p);

      recipesList.appendChild(newRecipeElement);

      recipeForm.reset();
    })
   .catch((error) => {
      responseDiv.innerHTML = `Error submitting recipe: ${error.message}`;
    });
  });
});