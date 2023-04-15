package com.studentpublication.dto;

import org.springframework.web.multipart.MultipartFile;

public record PublicationRequest(
        Long userId,
        String creatorName ,
        String tags ,
        MultipartFile pdfFile,
        String title,
        String description
) {
}
