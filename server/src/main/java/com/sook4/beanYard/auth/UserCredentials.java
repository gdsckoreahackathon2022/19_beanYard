package com.sook4.beanYard.auth;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserCredentials {
    private Long userSeq;
    private String userName;
    private String password;
    private UserType userType;
}
