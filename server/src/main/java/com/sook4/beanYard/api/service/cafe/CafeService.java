package com.sook4.beanYard.api.service.cafe;

import com.sook4.beanYard.api.dto.CafeDto;
import com.sook4.beanYard.api.dto.CafeSearchCondition;
import com.sook4.beanYard.api.entity.cafe.Cafe;
import com.sook4.beanYard.api.repository.cafe.CafeRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CafeService {
    private final CafeRepository cafeRepository;

    private final ModelMapper modelMapper;


    public Optional<CafeDto> addCafe(CafeDto cafeDto) {
        Cafe map = modelMapper.map(cafeDto, Cafe.class);

        Cafe savedCafe = cafeRepository.save(map);

        return Optional.of(modelMapper.map(savedCafe, CafeDto.class));
    }

    public Page<CafeDto> search(CafeSearchCondition condition, Pageable pageable) {
        Page<Cafe> search = cafeRepository.search(condition, pageable);

        List<CafeDto> cafeDtos = search.stream().map(cafe -> modelMapper.map(cafe, CafeDto.class)).collect(Collectors.toList());

        return new PageImpl<>(cafeDtos, pageable, search.getTotalElements());
    }

    public Optional<CafeDto> getCafe(Long cafe_id) {
        Cafe byIdCafe = cafeRepository.findById(cafe_id).get();

        return Optional.of(modelMapper.map(byIdCafe, CafeDto.class));
    }

    public Optional<CafeDto> updateCafe(CafeDto cafeDto) {

        Cafe cafe = cafeRepository.findById(cafeDto.getCafeSeq()).get();

        // 만약 수정 기능 있으면 추가

        cafeRepository.saveAndFlush(cafe);

        return Optional.of(modelMapper.map(cafe, CafeDto.class));
    }
}
