package com.sook4.beanYard.api.auth;

import com.sook4.beanYard.api.entity.apply.Apply;
import com.sook4.beanYard.api.entity.cafe.Cafe;
import com.sook4.beanYard.api.enums.UserType;
import com.sook4.beanYard.api.enums.VegType;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "USER")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "USER_SEQ")
    private Long userSeq;

    private String userName;

    private String password;

    private String phone;

    private double coffee;

    @Enumerated(EnumType.STRING)
    @NotNull
    private VegType vegType;

    @Enumerated(EnumType.STRING)
    @NotNull
    private UserType userType;

    @OneToMany(mappedBy = "cafeUser")
    private List<Cafe> userCafes;

    @OneToMany(mappedBy = "applyUser")
    private List<Apply> userApply;

    public User(String userName, String password) {
        this.userName = userName;
        this.password = password;
    }
}
