package org.rewear.controllers;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.security.SignatureException;
import org.rewear.DataRepository.UserRepository;
import org.rewear.jwtrepo.JWTHelper;
import org.rewear.models.JWTRequest;
import org.rewear.models.JWTResponse;
import org.rewear.models.User;
import org.rewear.models.UserDTO;
import org.rewear.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/public/api")
public class HomeController {

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private AuthenticationManager manager;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JWTHelper helper;

    @Autowired
    UserService userService;

    @GetMapping("/health")
    public String home() {
        return "Server is running";
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody JWTRequest request) {

        try {
            this.doAuthenticate(request.getUsername(), request.getPassword());
        } catch (BadCredentialsException e) {
            return new ResponseEntity<>("CREDENTIALS_INVALID", HttpStatus.UNAUTHORIZED);
        }


        UserDetails userDetails = userDetailsService.loadUserByUsername(request.getUsername());
        String token = this.helper.generateToken(userDetails);

        JWTResponse response = JWTResponse.builder()
                .jwtToken(token)
                .user(this.userRepository.findByUsername(userDetails.getUsername()).orElseThrow(() -> new UsernameNotFoundException("User Not Found")))
                .build();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    private void doAuthenticate(String username, String password) {
        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(username, password);
        try {
            manager.authenticate(authentication);
        } catch (BadCredentialsException e) {
            throw new BadCredentialsException("Invalid Username or Password");
        }
    }

    @PostMapping("/user")
    public ResponseEntity<String> setUser(@RequestBody UserDTO user) {
        String message = userService.setUser(user);
        System.out.println(message);
        if (message == null)
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("USER_CANNOT_BE_CREATED");
        else if(message.equals("Username already exist"))
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("USERNAME_EXIST");
        else if (message.equals("Invalid role"))
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("INVALID_ROLE");
        else
            return ResponseEntity.status(HttpStatus.CREATED).body(message);
    }

    @ExceptionHandler(BadCredentialsException.class)
    public String badExceptionHandler() {
        return "CREDENTIALS_INVALID";
    }

    @ExceptionHandler(UsernameNotFoundException.class)
    public String usernameNotFoundExceptionHandler() {
        return "USERNAME_NOT_FOUND";
    }

    @ExceptionHandler(ExpiredJwtException.class)
    public String expiredJwtException() {
        return "INVALID_TOKEN";
    }

    @ExceptionHandler(SignatureException.class)
    public String signatureException() {
        return "INVALID_TOKEN";
    }

}
