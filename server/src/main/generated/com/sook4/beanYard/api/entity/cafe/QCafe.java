package com.sook4.beanYard.api.entity.cafe;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QCafe is a Querydsl query type for Cafe
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QCafe extends EntityPathBase<Cafe> {

    private static final long serialVersionUID = 1008532092L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QCafe cafe = new QCafe("cafe");

    public final ListPath<com.sook4.beanYard.api.entity.apply.Apply, com.sook4.beanYard.api.entity.apply.QApply> applyCafes = this.<com.sook4.beanYard.api.entity.apply.Apply, com.sook4.beanYard.api.entity.apply.QApply>createList("applyCafes", com.sook4.beanYard.api.entity.apply.Apply.class, com.sook4.beanYard.api.entity.apply.QApply.class, PathInits.DIRECT2);

    public final NumberPath<Long> cafeSeq = createNumber("cafeSeq", Long.class);

    public final com.sook4.beanYard.api.auth.QUser cafeUser;

    public final NumberPath<Long> coffee = createNumber("coffee", Long.class);

    public final DateTimePath<java.time.LocalDateTime> createdAt = createDateTime("createdAt", java.time.LocalDateTime.class);

    public final NumberPath<Double> lat = createNumber("lat", Double.class);

    public final StringPath location = createString("location");

    public final NumberPath<Double> lon = createNumber("lon", Double.class);

    public final StringPath message = createString("message");

    public final StringPath name = createString("name");

    public final DateTimePath<java.time.LocalDateTime> time = createDateTime("time", java.time.LocalDateTime.class);

    public QCafe(String variable) {
        this(Cafe.class, forVariable(variable), INITS);
    }

    public QCafe(Path<? extends Cafe> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QCafe(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QCafe(PathMetadata metadata, PathInits inits) {
        this(Cafe.class, metadata, inits);
    }

    public QCafe(Class<? extends Cafe> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.cafeUser = inits.isInitialized("cafeUser") ? new com.sook4.beanYard.api.auth.QUser(forProperty("cafeUser")) : null;
    }

}

