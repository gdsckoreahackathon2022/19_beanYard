package com.sook4.beanYard.auth;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum UserType {
    CAFE("카페주인"),
    FARM("농장주");

    private String description;
}
