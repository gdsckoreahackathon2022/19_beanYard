package com.sook4.beanYard.api.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class CafeSearchCondition {
    private Long cafeSeq;

    private Long userSeq;

    private String name;

    private Long coffee;
}
