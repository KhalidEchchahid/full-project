package com.studentpublication.models;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "student_publication")
public class StudentPublication {
    @Id
    @SequenceGenerator(
            name = "student_publication_id_sequence",
            sequenceName = "student_publication_id_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "student_publication_id_sequence"
    )
    private Long id ;

    @Column(name="title")
    private String title;
    @Lob
    @Column(name="pdf_file")
    private byte[] pdfFile ;
    @Column(name="description")
    private String description;
    @Column(name="tags")
    private String tags;
    @Column(name="createdAt")
    private Date createdAt;

    @OneToMany(mappedBy = "studentPublication" , cascade = CascadeType.ALL ,orphanRemoval = true)
    private List<Comment> comments = new ArrayList<>();
    @OneToMany(mappedBy = "studentPublication" , cascade = CascadeType.ALL ,orphanRemoval = true)
    private List<Like> likes = new ArrayList<>();

}
