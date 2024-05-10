package com.hccs.advweb.recipeweb.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hccs.advweb.recipeweb.Models.User;

public interface UserRepo extends JpaRepository<User, Long> {

}
