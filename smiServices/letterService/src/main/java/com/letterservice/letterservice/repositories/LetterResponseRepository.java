package com.letterservice.letterservice.repositories;

import com.letterservice.letterservice.models.LetterResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface LetterResponseRepository extends JpaRepository<LetterResponse , Long> {
}
