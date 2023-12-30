package com.music.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Main {

    public static String currentUser = "";
    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }

}
