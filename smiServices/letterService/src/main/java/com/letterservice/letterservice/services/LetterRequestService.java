package com.letterservice.letterservice.services;

import com.letterservice.letterservice.models.LetterRequest;
import org.springframework.http.ResponseEntity;

public interface LetterRequestService {
    ResponseEntity<?> getAllLetterRequestsByStudentId(Long id) ;
    ResponseEntity<?> deleteLetterRequestById(Long id) ;
    ResponseEntity<?> createLetterRequest(LetterRequest request) ;

//    ResponseEntity<?> getAllLetterRequestsByProfessorId(Long id) ;
}
