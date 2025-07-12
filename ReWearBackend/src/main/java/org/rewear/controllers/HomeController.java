package org.rewear.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/public/api")
public class HomeController {

    @GetMapping("/health")
    public String home() {
        return "Server is running";
    }
}
