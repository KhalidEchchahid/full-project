package com.professorarticle.repositories;

import com.professorarticle.models.ProfessorArticle;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProfessorArticleRepository extends JpaRepository<ProfessorArticle , Long> {

}
