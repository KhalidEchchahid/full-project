package com.professorarticle.controllers;

import com.professorarticle.Exceptions.ProfessorArticleNotFoundException;
import com.professorarticle.Exceptions.ResourceNotFoundException;
import com.professorarticle.dto.PublicationRequest;
import com.professorarticle.models.Comment;
import com.professorarticle.models.ProfessorArticle;
import com.professorarticle.services.ProfessorArticleService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/api/v1/professor-articles")
@AllArgsConstructor
public class ProfessorArticleController {


    private ProfessorArticleService professorArticleService;

    @GetMapping
    public ResponseEntity<?> getAllProfessorArticles(@RequestParam(defaultValue = "0") int page) {
        return professorArticleService.getAllProfessorArticles(page);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getProfessorArticleById(@PathVariable Long id) throws ResourceNotFoundException {
        return professorArticleService.getProfessorArticleById(id);
    }

    @PostMapping
    public ResponseEntity<String> createProfessorArticle(@ModelAttribute PublicationRequest request) throws IOException {
        return professorArticleService.createProfessorArticle(request);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateProfessorArticleById(@PathVariable Long id, @Valid @ModelAttribute PublicationRequest request) throws ResourceNotFoundException, IOException {
        return professorArticleService.updateProfessorArticleById(id, request);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProfessorArticleById(@PathVariable Long id) throws ResourceNotFoundException {
        return professorArticleService.deleteProfessorArticleById(id);
    }

    @PostMapping("{articleId}/likes/{userId}")
    public ResponseEntity<?> toggleLikePublication(@PathVariable Long articleId, @PathVariable Long userId) {
        try {
            professorArticleService.toggleLikeProfessorArticle(articleId, userId);
            return ResponseEntity.ok().build();
        } catch (ProfessorArticleNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/comments/{publicationId}")
    public ResponseEntity<String> addCommentToArticle(@PathVariable Long publicationId, @RequestBody Comment comment) {
        return professorArticleService.addCommentToArticle(publicationId, comment);
    }

    @DeleteMapping("/comments/{id}")
    public ResponseEntity<String> deleteCommentById(@PathVariable("id") Long commentId) {
        return professorArticleService.deleteCommentById(commentId);
    }

}

