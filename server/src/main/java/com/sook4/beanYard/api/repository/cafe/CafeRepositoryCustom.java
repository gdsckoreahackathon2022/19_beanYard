package com.sook4.beanYard.api.repository.cafe;

import com.sook4.beanYard.api.dto.CafeSearchCondition;
import com.sook4.beanYard.api.entity.cafe.Cafe;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface CafeRepositoryCustom {
    Page<Cafe> search(CafeSearchCondition condition, Pageable pageable);
}
