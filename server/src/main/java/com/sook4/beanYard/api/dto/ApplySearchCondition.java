package com.sook4.beanYard.api.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class ApplySearchCondition {
    private Long applySeq;

    private Long userSeq;

    private Long cafeSeq;
}
