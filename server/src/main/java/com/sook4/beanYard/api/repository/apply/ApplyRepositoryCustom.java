package com.sook4.beanYard.api.repository.apply;

import com.sook4.beanYard.api.dto.ApplySearchCondition;
import com.sook4.beanYard.api.dto.CafeSearchCondition;
import com.sook4.beanYard.api.entity.apply.Apply;
import com.sook4.beanYard.api.entity.cafe.Cafe;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ApplyRepositoryCustom {
    Page<Apply> search(ApplySearchCondition condition, Pageable pageable);
}
