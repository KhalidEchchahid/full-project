package com.usermanagement.services;

import com.openfeign.openfeign.user.UserId;
import com.usermanagement.models.User;
import com.usermanagement.repositories.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository ;
    private final PasswordEncoder passwordEncoder ;




    @Override
    public ResponseEntity<?> getAllUsers(int pageNumber) {
        Pageable pageable = PageRequest.of(pageNumber - 1, 10);
        Page<User> pageResult = userRepository.findAll(pageable);
        return ResponseEntity.ok(pageResult.getContent());
    }

    @Override
    public ResponseEntity<User> getUserById(Long id) {
        Optional<User> optionalUser = userRepository.findById(Math.toIntExact(id));
        if (optionalUser.isPresent()) {
            return ResponseEntity.ok(optionalUser.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @Override
    public ResponseEntity<?> updatePassword(Long id, String newPassword) {
        Optional<User> existingUser = userRepository.findById(Math.toIntExact(id));
        if (existingUser.isPresent()) {
            User UserReq = existingUser.get();
            UserReq.setPassword(passwordEncoder.encode(newPassword));
            userRepository.save(UserReq);
            return new ResponseEntity<>("User has been updated successfully", HttpStatus.ACCEPTED);
        } else {

            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public ResponseEntity<String> deleteUserById(Long id) {
        if (userRepository.existsById(Math.toIntExact(id))) {
            userRepository.deleteById(Math.toIntExact(id));
            return new ResponseEntity<>("User deleted successfully!", HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
