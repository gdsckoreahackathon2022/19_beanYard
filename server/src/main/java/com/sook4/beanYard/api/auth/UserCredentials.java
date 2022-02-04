package com.sook4.beanYard.api.auth;

import com.sook4.beanYard.api.entity.apply.Apply;
import com.sook4.beanYard.api.entity.cafe.Cafe;
import com.sook4.beanYard.api.enums.UserType;
import com.sook4.beanYard.api.enums.VegType;
import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
public class UserCredentials {
    private Long userSeq;

    private String userName;

    private String password;

    private String phone;

    private VegType vegType;

    private UserType userType;
}
