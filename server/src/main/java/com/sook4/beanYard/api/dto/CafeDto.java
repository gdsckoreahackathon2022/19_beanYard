package com.sook4.beanYard.api.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class CafeDto {
    private Long cafeSeq;

    private String name;

    private String location;

    private Double lon;

    private Double lat;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private LocalDateTime time;

    private Long coffee;

    private String message;

    private Long userSeq;
}
