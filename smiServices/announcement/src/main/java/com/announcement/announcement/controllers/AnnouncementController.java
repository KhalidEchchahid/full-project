package com.announcement.announcement.controllers;

import com.announcement.announcement.dto.AnnouncementRequest;
import com.announcement.announcement.services.AnnouncementService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/announcements")
@AllArgsConstructor
public class AnnouncementController {


    private AnnouncementService announcementService;

    @GetMapping
    public ResponseEntity<?> getAllAnnouncements() {
        try {
            return announcementService.getAllAnnouncements();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @PostMapping
    public ResponseEntity<?> createAnnouncement(@ModelAttribute AnnouncementRequest request) {
        try {
            return announcementService.createAnnouncement(request);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteAnnouncementById(@PathVariable("id") Long id) {
        try {
            return announcementService.deleteAnnouncementById(id);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateAnnouncementById(@PathVariable("id") Long id, @RequestBody AnnouncementRequest request) {
        try {
            return announcementService.updateAnnouncementById(id, request);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }
}

