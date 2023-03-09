package com.usermanagement.services;

import com.usermanagement.controllers.AuthenticationRequest;
import com.usermanagement.controllers.AuthenticationResponse;
import com.usermanagement.controllers.RegisterRequest;

public interface AuthenticateService {
    AuthenticationResponse register(RegisterRequest request);

    AuthenticationResponse authenticate(AuthenticationRequest request);
}
