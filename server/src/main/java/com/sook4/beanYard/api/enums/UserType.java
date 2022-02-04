package com.sook4.beanYard.api.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum UserType {
    CAFE("카페주인"),
    FARMER("농장주인");

    private String description;
}
