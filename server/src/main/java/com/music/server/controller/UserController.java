package com.music.server.controller;

import com.music.server.exception.UserLoginException;
import com.music.server.model.User;
import com.music.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping(path = "/login", consumes = "application/json")
    public ResponseEntity<?> loginUser(@RequestBody User user) {
        try {
            User saved = userService.saveUser(user);
            return ResponseEntity.ok().body(saved);
        } catch (UserLoginException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }
}
