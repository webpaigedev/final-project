package com.hccs.advweb.recipeweb.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hccs.advweb.recipeweb.Models.Recipe;
import com.hccs.advweb.recipeweb.Repo.RecipeRepo;


@RestController
@RequestMapping("api")
public class RecipeController {
	
	@Autowired
	private RecipeRepo recipeRepo;
	
	@GetMapping(value ="/home")
	public String getPage() {
		return "index.html";
	}
	
	@GetMapping(value = "recipes")
	public List<Recipe> getRecipes() {
		return recipeRepo.findAll();
	}
	
	@PostMapping(value = "recipes")
	public Recipe saveRecipe(@RequestBody Recipe recipe) {
		return recipeRepo.save(recipe);
	}

}
