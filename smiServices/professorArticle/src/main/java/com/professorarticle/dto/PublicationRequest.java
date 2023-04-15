package com.professorarticle.dto;

import org.springframework.web.multipart.MultipartFile;

public record PublicationRequest(
        Long userId,
        String tags ,
        MultipartFile imageFile,
        String title,
        String description
) {
}