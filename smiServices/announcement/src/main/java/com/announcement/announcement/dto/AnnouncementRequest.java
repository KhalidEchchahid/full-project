package com.announcement.announcement.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AnnouncementRequest {
        private String title;
        private MultipartFile file;
        private String description;
        private Long userId;
}
