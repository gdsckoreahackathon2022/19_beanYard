package com.sook4.beanYard.api.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ApplyDto {
    private Long applySeq;

    private Long userSeq;

    private Long cafeSeq;
}

