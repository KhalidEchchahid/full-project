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
@Table(name = "letter_response")
public class LetterResponse {
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

    @Lob
    @Column(name="pdf_file")
    private byte[] pdfFile ;
}
