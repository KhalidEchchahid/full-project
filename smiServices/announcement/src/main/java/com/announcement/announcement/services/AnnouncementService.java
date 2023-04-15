package com.announcement.announcement.services;

import com.announcement.announcement.dto.AnnouncementRequest;
import com.announcement.announcement.models.Announcement;
import org.springframework.http.ResponseEntity;

public interface AnnouncementService {
    ResponseEntity<?> getAllAnnouncements() throws Exception;
    ResponseEntity<?> createAnnouncement(AnnouncementRequest request) throws Exception;
    ResponseEntity<?> deleteAnnouncementById(Long id) throws Exception;
    ResponseEntity<?> updateAnnouncementById(Long id, AnnouncementRequest request) throws Exception;

}
