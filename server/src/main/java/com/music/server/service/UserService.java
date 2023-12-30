package com.music.server.service;

import com.music.server.Main;
import com.music.server.exception.UserLoginException;
import com.music.server.model.User;
import com.music.server.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private static final Logger log = LoggerFactory.getLogger(UserService.class);

    @Autowired
    private UserRepository userRepository;

    public String loginUser(User user) {
        Optional<User> userOptional = userRepository.findByUsername(user.getUsername());
        if (userOptional.isPresent()) {
            if(user.getPassword().equals(userOptional.get().getPassword())) {
                Main.currentUser = user.getUsername();
                log.info("Login successful for user: {}", user.getUsername());
                return "Login was successful.";
            }
            log.info("Password incorrect for user: {}", user.getUsername());
            throw new UserLoginException("Password is not correct.");
        } else {
            log.warn("User with username: {}, does not exist.", user.getUsername());
            throw new UserLoginException("Username is not correct.");
        }
    }

    public String createAccount(User user) {
        if (userRepository.findByUsername(user.getUsername()).isPresent()) {
            log.warn("User with username: {} already exists.", user.getUsername());
            throw new UserLoginException("Username already exists.");
        } else if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            log.warn("User with email: {} already exists.", user.getEmail());
            throw new UserLoginException("Email already exists.");
        } else {
            userRepository.save(user);
            log.info("Account created for user: {}", user.getUsername());
            return "Account created successfully.";
        }
    }
}
