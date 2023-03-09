package com.studentpublication.repositories;

import com.studentpublication.models.StudentPublication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentPublicationRepository extends JpaRepository<StudentPublication , Long> {
}
