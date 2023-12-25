package com.music.server.service;

import com.music.server.exception.UserLoginException;
import com.music.server.model.User;
import com.music.server.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private static final Logger log = LoggerFactory.getLogger(UserService.class);

    @Autowired
    private UserRepository userRepository;

    public User saveUser(User user) {
        if ("Vuk".equals(user.getUsername())) {
            log.info("Login successful for user: {}", user.getUsername());
            return userRepository.save(user);
        } else {
            log.warn("Login failed for user: {}", user.getUsername());
            throw new UserLoginException("Login failed for user: " + user.getUsername());
        }
    }
}
