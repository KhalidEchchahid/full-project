package com.usermanagement.controllers;

import com.openfeign.openfeign.user.UserId;
import com.usermanagement.dto.AuthenticationRequest;
import com.usermanagement.dto.AuthenticationResponse;
import com.usermanagement.dto.RegisterRequest;
import com.usermanagement.models.User;
import com.usermanagement.services.AuthenticateService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticateService service;
    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegisterRequest request
    ){
        return ResponseEntity.ok(service.registerStudent(request));
    }

    @PostMapping("/registerProfessor")
    public User registerProfessor(
            @RequestBody RegisterRequest request , @RequestBody User admin
            ){
        return ResponseEntity.ok(service.registerProfessor(request , admin)).getBody();
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request
    ){
        return ResponseEntity.ok(service.authenticate(request));
    }

    @GetMapping("/validate")
    public String validateToken(@RequestParam("token") String token){
        service.validateToken(token);
        return "Token is valid";
    }

    @GetMapping("/getUserId")
    public UserId getCurrentUserId(){
        return service.getCurrentUserId();
    }

}
