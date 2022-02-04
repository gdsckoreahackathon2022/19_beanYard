package com.sook4.beanYard.api.repository.apply;

import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.JPQLQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.sook4.beanYard.api.dto.ApplySearchCondition;
import com.sook4.beanYard.api.dto.CafeSearchCondition;
import com.sook4.beanYard.api.entity.apply.Apply;
import com.sook4.beanYard.api.entity.cafe.Cafe;
import com.sook4.beanYard.utils.PagingUtil;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import static com.sook4.beanYard.api.entity.apply.QApply.apply;

@Repository
public class ApplyRepositoryImpl implements ApplyRepositoryCustom {

    private final JPAQueryFactory jpaQueryFactory;

    private final PagingUtil pagingUtil;

    public ApplyRepositoryImpl(JPAQueryFactory jpaQueryFactory, PagingUtil pagingUtil) {
        this.jpaQueryFactory = jpaQueryFactory;
        this.pagingUtil = pagingUtil;
    }

    @Override
    public Page<Apply> search(ApplySearchCondition condition, Pageable pageable) {
        JPQLQuery<Apply> query = jpaQueryFactory       // 1)
                .selectFrom(apply)
                .where(
                        applySeqEq(condition.getApplySeq()),
                        cafeSeqEq(condition.getCafeSeq()),
                        userSeqEq(condition.getUserSeq())
                );
        return pagingUtil.getPageImpl(pageable, query, Apply.class);
    }

    private BooleanExpression applySeqEq(Long apply_id) {
        return apply_id != null ? apply.applySeq.eq(apply_id) : null;
    }

    private BooleanExpression cafeSeqEq(Long cafe_id) {
        return cafe_id != null ? apply.applyCafe.cafeSeq.eq(cafe_id) : null;
    }

    private BooleanExpression userSeqEq(Long user_id) {
        return user_id != null ? apply.applyUser.userSeq.eq(user_id) : null;
    }
}
