package com.sook4.beanYard.auth;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;

    private String userName;

    private String password;

    @Enumerated(EnumType.STRING)
    @NotNull
    private UserType userType;

    public User(String userName, String password) {
        this.userName = userName;
        this.password = password;
    }
}
