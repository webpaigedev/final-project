package com.hccs.advweb.recipeweb.Repo;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hccs.advweb.recipeweb.Models.Recipe;

@Repository
public interface RecipeRepo extends JpaRepository<Recipe, Long> {
	
	List<Recipe> findByNameContainingIgnoreCase(String name);

}
