package com.usermanagement.services;

import com.openfeign.openfeign.user.UserId;
import com.usermanagement.config.JwtService;
import com.usermanagement.dto.AuthenticationRequest;
import com.usermanagement.dto.AuthenticationResponse;
import com.usermanagement.dto.RegisterRequest;
import com.usermanagement.models.Role;
import com.usermanagement.models.User;
import com.usermanagement.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.jetbrains.annotations.NotNull;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticateServiceImplement implements AuthenticateService {
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    @Override
    public AuthenticationResponse registerStudent(@NotNull RegisterRequest request) {
        var user = User.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .semester(request.getSemester())
                .email(request.getEmail())
                .email(request.getEmail())
                .password(passwordEncoder.encode((request.getPassword())))
                .role(Role.ROLE_STUDENT)
                .build();
        repository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .user(user)
                .build();
    }

    @Override
    public User registerProfessor(RegisterRequest request, User admin) {
        // Check if the admin is authorized to create a professor account
        if (!admin.getRole().equals(Role.ROLE_ADMIN)) {
            throw new AccessDeniedException("Only admins can create professor accounts.");
        }
        // Set role to PROFESSOR
        var user = User.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .semester(request.getSemester())
                .email(request.getEmail())
                .email(request.getEmail())
                .password(passwordEncoder.encode((request.getPassword())))
                .role(Role.ROLE_PROFESSOR)
                .build();
        return repository.save(user);

    }

    @Override
    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = repository.findByEmail(request.getEmail())
                .orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .user(user)
                .build();
    }


    @Override
    public UserId getCurrentUserId() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null) {
            return null;
        }

        Object principal = authentication.getPrincipal();
        if (principal instanceof User) {
            return new UserId(((User) principal).getId());
        }
        return null;
    }

    @Override
    public void validateToken(String token){
        jwtService.extractAllClaims(token);

    }



}
