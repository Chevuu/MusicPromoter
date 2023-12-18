package com.example.server.controller;

import com.example.server.model.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
public class UserController {

    private static final Logger log = LoggerFactory.getLogger(UserController.class);

    @PostMapping(path = "/api/login", consumes = "application/json")
    public ResponseEntity<?> loginUser(@RequestBody User user) {
        if ("Vuk".equals(user.getUsername())) {
            log.info("Login successful for user: {}", user.getUsername());
            return ResponseEntity.ok().build();
        } else {
            log.warn("Login failed for user: {}", user.getUsername());
            return ResponseEntity.status(401).body("Unauthorized");
        }
    }
}
