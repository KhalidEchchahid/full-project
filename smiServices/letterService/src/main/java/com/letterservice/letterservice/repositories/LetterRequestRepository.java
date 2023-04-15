package com.letterservice.letterservice.repositories;

import com.letterservice.letterservice.models.LetterRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LetterRequestRepository extends JpaRepository<LetterRequest , Long> {
    List<LetterRequest> findByStudentId(Long id);

    List<LetterRequest> findByProfessorId(Long id);
}
