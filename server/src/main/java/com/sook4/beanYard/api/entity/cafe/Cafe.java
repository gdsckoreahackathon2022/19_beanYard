package com.sook4.beanYard.api.entity.cafe;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sook4.beanYard.api.entity.apply.Apply;
import com.sook4.beanYard.auth.User;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "CAFE")
public class Cafe {
    @JsonIgnore
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CAFE_SEQ")
    private Long cafeSeq;

    private String name;

    private Double lon;

    private Double lat;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private LocalDateTime time;

    private Long coffee;

    private String message;

    private String number;

    @NotNull
    @ManyToOne(targetEntity = User.class, fetch = FetchType.LAZY, cascade = {CascadeType.MERGE, CascadeType.MERGE})
    @JoinColumn(name = "USER_SEQ", referencedColumnName = "user_seq")
    private User cafeUser;

    @OneToMany(mappedBy = "applyCafe")
    private List<Apply> applyCafes;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private LocalDateTime createdAt;
}
