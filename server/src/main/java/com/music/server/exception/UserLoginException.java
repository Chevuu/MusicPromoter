package com.music.server.exception;

public class UserLoginException extends RuntimeException {
    public UserLoginException(String message) {
        super(message);
    }
}
