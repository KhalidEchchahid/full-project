package com.usermanagement.services;

import com.usermanagement.models.User;
import org.springframework.http.ResponseEntity;

public interface UserService {
    ResponseEntity<?> getAllUsers(int page);

    ResponseEntity<?> getUserById(Long id);

    ResponseEntity<?> updatePassword(Long id, String newPassword);

    ResponseEntity<String> deleteUserById(Long id);
}
