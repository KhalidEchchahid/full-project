package com.letterservice.letterservice.services;

import com.letterservice.letterservice.models.LetterRequest;
import com.letterservice.letterservice.repositories.LetterRequestRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class LetterRequestServiceImpl implements LetterRequestService{

    LetterRequestRepository letterRequestRepository ;
    @Override
    public ResponseEntity<?> getAllLetterRequestsByStudentId(Long id) {
        List<LetterRequest> letterRequests = letterRequestRepository.findByStudentId(id);
        return ResponseEntity.ok().body(letterRequests);
    }

    @Override
    public ResponseEntity<?> deleteLetterRequestById(Long id) {
        letterRequestRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @Override
    public ResponseEntity<?> createLetterRequest(LetterRequest request) {
        LetterRequest letterRequest ;
        request.setStatus("pending");
        letterRequest = letterRequestRepository.save(request);
        return ResponseEntity.ok().body(letterRequest);
    }

//    @Override
//    public ResponseEntity<?> getAllLetterRequestsByProfessorId(Long id) {
//        List<LetterRequest> letterRequests = letterRequestRepository.findByProfessorId(id);
//        return ResponseEntity.ok(letterRequests);
//    }
}
