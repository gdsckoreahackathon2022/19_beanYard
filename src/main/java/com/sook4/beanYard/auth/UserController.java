package com.sook4.beanYard.auth;

import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/oauth2/authorization/kakao")
    public void oauth2AuthorizationKakao(@RequestParam("code") String code) throws JsonProcessingException {
        userService.oauth2AuthorizationKakao(code);
    }
}
