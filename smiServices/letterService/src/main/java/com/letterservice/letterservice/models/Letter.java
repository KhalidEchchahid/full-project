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
@Table(name = "letter")
public class Letter {
    @Id
    @SequenceGenerator(
            name = "letter_id_sequence",
            sequenceName = "letter_id_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "letter_id_sequence"
    )
    private Long id;

    @OneToOne
    private LetterRequest letterRequest;

    @Lob
    @Column(name="pdf_file")
    private byte[] pdfFile ;
}
