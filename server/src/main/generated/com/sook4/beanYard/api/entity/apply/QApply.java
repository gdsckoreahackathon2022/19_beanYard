package com.sook4.beanYard.api.entity.apply;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QApply is a Querydsl query type for Apply
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QApply extends EntityPathBase<Apply> {

    private static final long serialVersionUID = -889159588L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QApply apply = new QApply("apply");

    public final com.sook4.beanYard.api.entity.cafe.QCafe applyCafe;

    public final NumberPath<Long> applySeq = createNumber("applySeq", Long.class);

    public final com.sook4.beanYard.auth.QUser applyUser;

    public QApply(String variable) {
        this(Apply.class, forVariable(variable), INITS);
    }

    public QApply(Path<? extends Apply> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QApply(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QApply(PathMetadata metadata, PathInits inits) {
        this(Apply.class, metadata, inits);
    }

    public QApply(Class<? extends Apply> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.applyCafe = inits.isInitialized("applyCafe") ? new com.sook4.beanYard.api.entity.cafe.QCafe(forProperty("applyCafe"), inits.get("applyCafe")) : null;
        this.applyUser = inits.isInitialized("applyUser") ? new com.sook4.beanYard.auth.QUser(forProperty("applyUser")) : null;
    }

}

