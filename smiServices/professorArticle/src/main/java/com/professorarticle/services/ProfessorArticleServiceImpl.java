package com.professorarticle.services;

import com.professorarticle.Exceptions.ProfessorArticleNotFoundException;
import com.professorarticle.Exceptions.ResourceNotFoundException;
import com.professorarticle.dto.PublicationRequest;
import com.professorarticle.models.Comment;
import com.professorarticle.models.ProfessorArticle;
import com.professorarticle.repositories.CommentRepository;
import com.professorarticle.repositories.ProfessorArticleRepository;
import com.professorarticle.util.FileUtils;
import jakarta.ws.rs.NotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Date;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ProfessorArticleServiceImpl implements ProfessorArticleService {


    private final ProfessorArticleRepository professorArticleRepository;
    private final CommentRepository commentRepository;

    @Override
    public ResponseEntity<?> getAllProfessorArticles(int pageNumber) {
        Pageable pageable = PageRequest.of(pageNumber, 10, Sort.by("createdAt").descending());
        Page<ProfessorArticle> professorArticlePage = professorArticleRepository.findAll(pageable);
        for (ProfessorArticle publication : professorArticlePage) {
            publication.setImageData(FileUtils.decompressImage(publication.getImageData()));
        }
        return ResponseEntity.ok(professorArticlePage.getContent());
    }

    @Override
    public ResponseEntity<?> getProfessorArticleById(Long id) throws ResourceNotFoundException {
        Optional<ProfessorArticle> professorArticleOptional = professorArticleRepository.findById(id);
        professorArticleOptional.get().setImageData(FileUtils.decompressImage(professorArticleOptional.get().getImageData()));
        if (professorArticleOptional.isPresent()) {
            return ResponseEntity.ok(professorArticleOptional.get());
        } else {
            throw new ResourceNotFoundException("ProfessorArticle", "id", id);
        }
    }

    @Override
    public ResponseEntity<String> createProfessorArticle(PublicationRequest request) throws IOException {

            ProfessorArticle professorArticle = new ProfessorArticle();
            professorArticle.setImageData(FileUtils.compressImage(request.imageFile().getBytes()));
            professorArticle.setCreatedAt(new Date());
            professorArticle.setDescription(request.description());
            professorArticle.setCategory(request.tags());
            professorArticle.setTitle(request.title());
            professorArticle.setUserId(request.userId());
            ProfessorArticle savedProfessorArticle = professorArticleRepository.save(professorArticle);
            return ResponseEntity.ok("ProfessorArticle with id " + savedProfessorArticle.getId() + " created successfully");
    }

    @Override
    public ResponseEntity<String> updateProfessorArticleById(Long id, PublicationRequest request) throws ResourceNotFoundException, IOException {
        Optional<ProfessorArticle> professorArticleOptional = professorArticleRepository.findById(id);
        if (professorArticleOptional.isPresent()) {

            //TODO: Check if the authenticated user is the creator of the announcement

            ProfessorArticle existingProfessorArticle = professorArticleOptional.get();
            existingProfessorArticle.setTitle(request.title());
            existingProfessorArticle.setDescription(request.description());
            existingProfessorArticle.setCategory(request.tags());
            existingProfessorArticle.setImageData(FileUtils.compressImage(request.imageFile().getBytes()));
            professorArticleRepository.save(existingProfessorArticle);
            return ResponseEntity.ok("ProfessorArticle with id " + id + " updated successfully");
        } else {
            throw new ResourceNotFoundException("ProfessorArticle", "id", id);
        }
    }

    @Override
    public ResponseEntity<String> deleteProfessorArticleById(Long id) throws ResourceNotFoundException {
        Optional<ProfessorArticle> professorArticleOptional = professorArticleRepository.findById(id);
        if (professorArticleOptional.isPresent()) {

            //TODO: Check if the authenticated user is the creator of the announcement

            ProfessorArticle professorArticle = professorArticleOptional.get();
            professorArticleRepository.delete(professorArticle);
            return ResponseEntity.ok("ProfessorArticle with id " + id + " deleted successfully");
        } else {
            throw new ResourceNotFoundException("ProfessorArticle", "id", id);
        }
    }



    @Override
    public ResponseEntity<String> addCommentToArticle(Long publicationId, Comment comment) {
        Optional<ProfessorArticle> professorArticle = professorArticleRepository.findById(publicationId);
        if (((Optional<?>) professorArticle).isPresent()) {
            ProfessorArticle publication = professorArticle.get();
            comment.setProfessorArticle(publication);
            publication.getComments().add(comment);
            professorArticleRepository.save(publication);
            return ResponseEntity.ok("Comment added successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @Override
    public ResponseEntity<String> deleteCommentById(Long commentId) {
        try {
            Comment comment = commentRepository.findById(commentId)
                    .orElseThrow(() -> new NotFoundException("Comment not found with id " + commentId));

            // remove the comment from the associated professor article
            ProfessorArticle professorArticle = comment.getProfessorArticle();
            professorArticle.getComments().remove(comment);

            // update the professor article in the database
            professorArticleRepository.save(professorArticle);

            return ResponseEntity.ok().body("Comment with id " + commentId + " deleted successfully.");
        } catch (NotFoundException ex) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(ex.getMessage());
        }
    }
}

