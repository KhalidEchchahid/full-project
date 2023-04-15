package com.openfeign.openfeign.user;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient("userManagement")
public interface UserInfo {
    @GetMapping("/api/v1/auth/getUserId")
    UserId getCurrentUserId();

}
