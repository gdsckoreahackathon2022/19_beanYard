package com.sook4.beanYard.api.repository.cafe;

import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.JPQLQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.sook4.beanYard.api.dto.CafeSearchCondition;
import com.sook4.beanYard.api.entity.cafe.Cafe;
import com.sook4.beanYard.utils.PagingUtil;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import static com.sook4.beanYard.api.entity.cafe.QCafe.cafe;

@Repository
public class CafeRepositoryImpl implements CafeRepositoryCustom{

    private final JPAQueryFactory jpaQueryFactory;

    private final PagingUtil pagingUtil;

    public CafeRepositoryImpl(JPAQueryFactory jpaQueryFactory, PagingUtil pagingUtil) {
        this.jpaQueryFactory = jpaQueryFactory;
        this.pagingUtil = pagingUtil;
    }

    @Override
    public Page<Cafe> search(CafeSearchCondition condition, Pageable pageable) {
        JPQLQuery<Cafe> query = jpaQueryFactory       // 1)
                .selectFrom(cafe)
                .where(
                        cafeSeqEq(condition.getCafeSeq()),
                        userSeqEq(condition.getUserSeq())
                );
        return pagingUtil.getPageImpl(pageable, query, Cafe.class);
    }
    private BooleanExpression cafeSeqEq(Long cafe_id) {
        return cafe_id != null ? cafe.cafeSeq.eq(cafe_id) : null;
    }

    private BooleanExpression userSeqEq(Long user_id) {
        return user_id != null ? cafe.cafeUser.userSeq.eq(user_id) : null;
    }
}
