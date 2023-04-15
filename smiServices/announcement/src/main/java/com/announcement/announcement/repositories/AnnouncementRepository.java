package com.announcement.announcement.repositories;

import com.announcement.announcement.models.Announcement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnnouncementRepository extends JpaRepository<Announcement , Long> {
}
