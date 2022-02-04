package com.sook4.beanYard.auth;

import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final Oauth2Kakao oauth2Kakao;

    // 카카오로 인증받기
    public void oauth2AuthorizationKakao(String code) throws JsonProcessingException {
        AuthorizationKakao authorization = oauth2Kakao.callTokenApi(code);
        String userInfoFromKakao = oauth2Kakao.callGetUserByAccessToken(authorization.getAccess_token());
        System.out.println("userInfoFromKakao = " + userInfoFromKakao);
    }
}
