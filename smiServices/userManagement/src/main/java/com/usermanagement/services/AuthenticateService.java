package com.usermanagement.services;

import com.openfeign.openfeign.user.UserId;
import com.usermanagement.dto.AuthenticationRequest;
import com.usermanagement.dto.AuthenticationResponse;
import com.usermanagement.dto.RegisterRequest;
import com.usermanagement.models.User;

public interface AuthenticateService {
    AuthenticationResponse registerStudent(RegisterRequest request);

    AuthenticationResponse authenticate(AuthenticationRequest request);
    public UserId getCurrentUserId();
    public void validateToken(String token);
    public User registerProfessor(RegisterRequest request, User admin);
}
