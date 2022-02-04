package com.sook4.beanYard.api.entity.apply;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sook4.beanYard.api.entity.cafe.Cafe;
import com.sook4.beanYard.auth.User;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "APPLY")
public class Apply {
    @JsonIgnore
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "APPLY_SEQ")
    private Long applySeq;

    @NotNull
    @ManyToOne(targetEntity = User.class, fetch = FetchType.LAZY, cascade = {CascadeType.MERGE, CascadeType.MERGE})
    @JoinColumn(name = "USER_SEQ", referencedColumnName = "user_seq")
    private User applyUser;

    @NotNull
    @ManyToOne(targetEntity = Cafe.class, fetch = FetchType.LAZY, cascade = {CascadeType.MERGE, CascadeType.MERGE})
    @JoinColumn(name = "CAFE_SEQ", referencedColumnName = "cafe_seq")
    private Cafe applyCafe;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private LocalDateTime createdAt;
}
