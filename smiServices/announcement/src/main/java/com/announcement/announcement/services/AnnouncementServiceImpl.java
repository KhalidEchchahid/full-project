package com.announcement.announcement.services;

import com.announcement.announcement.dto.AnnouncementRequest;
import com.announcement.announcement.models.Announcement;
import com.announcement.announcement.repositories.AnnouncementRepository;
import com.openfeign.openfeign.user.UserId;
import com.openfeign.openfeign.user.UserInfo;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.Date;
import java.util.List;
import java.util.Optional;



@Service
@AllArgsConstructor
public class AnnouncementServiceImpl implements AnnouncementService {


    private final AnnouncementRepository announcementRepository;
    private final RestTemplate template;
    private final UserInfo userInfo ;

    @Override
    public ResponseEntity<?> getAllAnnouncements() throws Exception{
        try {
            List<Announcement> announcements = announcementRepository.findAll();
            return ResponseEntity.ok().body(announcements);
        }catch (Exception e){
            throw new Exception("Error getting announcements", e);
        }
    }

    @Override
    public ResponseEntity<?> createAnnouncement(AnnouncementRequest request) throws Exception {
        try {

            Announcement announcement = new Announcement();
            announcement.setTitle(request.getTitle());
            announcement.setFile(request.getFile().getBytes());
            announcement.setDescription(request.getDescription());
            announcement.setCreatedAt(new Date());
            announcement.setUserId(request.getUserId());

            announcement = announcementRepository.save(announcement);

            return ResponseEntity.ok().body(announcement);
        }catch (Exception e){
            throw new Exception("Error creating announcement", e);
        }
    }

    @Override
    public ResponseEntity<?> deleteAnnouncementById(Long id) throws Exception {
        try {
            Optional<Announcement> announcement = announcementRepository.findById(id);

            if (announcement.isEmpty()) {
                return ResponseEntity.notFound().build();
            }

            //TODO: Check if the authenticated user is the creator of the announcement

            Long userId = announcement.get().getUserId();

            UserId userId1 = userInfo.getCurrentUserId();

            if (userId1.id() != userId){
                return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
            }

            announcementRepository.delete(announcement.get());
            return ResponseEntity.ok().build();

        }catch (Exception e){
            throw new Exception("Error deleting announcement", e);
        }

    }


    @Override
    public ResponseEntity<?> updateAnnouncementById(Long id, AnnouncementRequest request) throws Exception {

        try {

            Optional<Announcement> announcementOptional = announcementRepository.findById(id);

            if (announcementOptional.isEmpty()) {
                return ResponseEntity.notFound().build();
            }
            //TODO: Check if the authenticated user is the creator of the announcement

            Announcement announcement = announcementOptional.get();
            announcement.setTitle(request.getTitle());
            announcement.setFile(request.getFile().getBytes());
            announcement.setDescription(request.getDescription());
            announcement.setUserId(request.getUserId());

            announcementRepository.save(announcement);

            return ResponseEntity.ok().body(announcement);
        }catch (Exception e){
            throw new Exception("Error updating announcement", e);

        }
    }

}

