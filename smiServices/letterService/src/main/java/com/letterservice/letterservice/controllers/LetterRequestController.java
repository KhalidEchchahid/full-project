package com.letterservice.letterservice.controllers;

import com.letterservice.letterservice.models.LetterRequest;
import com.letterservice.letterservice.services.LetterRequestService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/letter_request")
@AllArgsConstructor
public class LetterRequestController {

    private LetterRequestService service ;

    @GetMapping
    public ResponseEntity<?> getAllLetterRequestsByStudentId(@RequestParam Long id){
        try {
            return service.getAllLetterRequestsByStudentId(id);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

//    @GetMapping
//    public ResponseEntity<?> getAllLetterRequestsByProfessorId(@RequestParam Long id){
//        try {
//            return service.getAllLetterRequestsByProfessorId(id);
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
//        }
//    }

    @PostMapping
    public ResponseEntity<?> createLetterRequest(@RequestBody LetterRequest request) {
        try {
            return service.createLetterRequest(request);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteLetterRequestById(@PathVariable("id") Long id){
        try {
            return service.deleteLetterRequestById(id);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }



}
