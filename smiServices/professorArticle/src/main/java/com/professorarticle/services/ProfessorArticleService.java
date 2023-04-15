package com.professorarticle.services;

import com.professorarticle.Exceptions.ProfessorArticleNotFoundException;
import com.professorarticle.Exceptions.ResourceNotFoundException;
import com.professorarticle.dto.PublicationRequest;
import com.professorarticle.models.Comment;
import com.professorarticle.models.ProfessorArticle;
import org.springframework.http.ResponseEntity;

import java.io.IOException;
import java.util.Map;

public interface ProfessorArticleService {
    ResponseEntity<?> getAllProfessorArticles(int pageNumber);

    ResponseEntity<?> getProfessorArticleById(Long id) throws ResourceNotFoundException;

    ResponseEntity<String> createProfessorArticle(PublicationRequest request) throws IOException;

    ResponseEntity<String> updateProfessorArticleById(Long id, PublicationRequest request) throws ResourceNotFoundException, IOException;

    ResponseEntity<String> deleteProfessorArticleById(Long id) throws ResourceNotFoundException;


    ResponseEntity<String> addCommentToArticle(Long publicationId, Comment comment);

    ResponseEntity<String> deleteCommentById(Long commentId);
}
