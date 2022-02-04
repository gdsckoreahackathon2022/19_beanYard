package com.sook4.beanYard.api.auth;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QUser is a Querydsl query type for User
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QUser extends EntityPathBase<User> {

    private static final long serialVersionUID = -1182381256L;

    public static final QUser user = new QUser("user");

    public final StringPath password = createString("password");

    public final StringPath phone = createString("phone");

    public final ListPath<com.sook4.beanYard.api.entity.apply.Apply, com.sook4.beanYard.api.entity.apply.QApply> userApply = this.<com.sook4.beanYard.api.entity.apply.Apply, com.sook4.beanYard.api.entity.apply.QApply>createList("userApply", com.sook4.beanYard.api.entity.apply.Apply.class, com.sook4.beanYard.api.entity.apply.QApply.class, PathInits.DIRECT2);

    public final ListPath<com.sook4.beanYard.api.entity.cafe.Cafe, com.sook4.beanYard.api.entity.cafe.QCafe> userCafes = this.<com.sook4.beanYard.api.entity.cafe.Cafe, com.sook4.beanYard.api.entity.cafe.QCafe>createList("userCafes", com.sook4.beanYard.api.entity.cafe.Cafe.class, com.sook4.beanYard.api.entity.cafe.QCafe.class, PathInits.DIRECT2);

    public final StringPath userName = createString("userName");

    public final NumberPath<Long> userSeq = createNumber("userSeq", Long.class);

    public final EnumPath<com.sook4.beanYard.api.enums.UserType> userType = createEnum("userType", com.sook4.beanYard.api.enums.UserType.class);

    public final EnumPath<com.sook4.beanYard.api.enums.VegType> vegType = createEnum("vegType", com.sook4.beanYard.api.enums.VegType.class);

    public QUser(String variable) {
        super(User.class, forVariable(variable));
    }

    public QUser(Path<? extends User> path) {
        super(path.getType(), path.getMetadata());
    }

    public QUser(PathMetadata metadata) {
        super(User.class, metadata);
    }

}

