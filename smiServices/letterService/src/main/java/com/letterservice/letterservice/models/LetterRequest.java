package com.letterservice.letterservice.models;

import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@JsonInclude
@Table(name = "letter_request")
public class LetterRequest {

    @Id
    @SequenceGenerator(
            name = "letter_request_id_sequence",
            sequenceName = "letter_request_id_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "letter_request_id_sequence"
    )
    private Long id;

    @Column(name = "student_id")
    private Long studentId;
    @Column(name = "professor_id")
    private Long professorId;
    @Column(name = "letter_type")
    private String letterType;
    @Column(name = "cause")
    private String cause;
    @Column(name = "status")
    private String status;

}
//@RestController
//@RequestMapping("/requests")
//public class RequestController {
//
//    @Autowired
//    private RequestService requestService;
//
//    // Endpoint to get all requests
//    @GetMapping
//    public List<Request> getAllRequests() {
//        return requestService.getAllRequests();
//    }
//
//    // Endpoint to create a new request
//    @PostMapping
//    public Request createRequest(@RequestBody Request request) {
//        return requestService.createRequest(request);
//    }
//}



//@Service
//public class RequestService {
//
//    @Autowired
//    private RequestRepository requestRepository;
//
//    // Get all requests
//    public List<Request> getAllRequests() {
//        return requestRepository.findAll();
//    }
//
//    // Create a new request
//    public Request createRequest(Request request) {
//        // Set the initial status to "Pending"
//        request.setStatus("Pending");
//        return requestRepository.save(request);
//    }
//}
