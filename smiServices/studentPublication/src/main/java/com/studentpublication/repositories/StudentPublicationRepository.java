package com.studentpublication.repositories;

import com.studentpublication.models.StudentPublication;



import org.springframework.data.jpa.repository.JpaRepository;


import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;

@Repository
public interface StudentPublicationRepository extends JpaRepository<StudentPublication , Long> {

    @Transactional(readOnly = true)
    List<StudentPublication> findByTitleContainingIgnoreCaseOrTagsContainingIgnoreCaseOrderByCreatedAtDesc(String searchQuery, String tags);


}
