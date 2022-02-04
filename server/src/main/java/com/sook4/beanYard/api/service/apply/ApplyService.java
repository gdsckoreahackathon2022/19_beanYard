package com.sook4.beanYard.api.service.apply;

import com.sook4.beanYard.api.dto.ApplyDto;
import com.sook4.beanYard.api.dto.ApplySearchCondition;
import com.sook4.beanYard.api.entity.apply.Apply;
import com.sook4.beanYard.api.repository.apply.ApplyRepository;
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
public class ApplyService {
    private final ApplyRepository applyRepository;

    private final ModelMapper modelMapper;


    public Optional<ApplyDto> addApply(ApplyDto applyDto) {
        Apply map = modelMapper.map(applyDto, Apply.class);
        map.setCreatedAt(LocalDateTime.now());

        Apply savedApply = applyRepository.save(map);

        return Optional.of(modelMapper.map(savedApply, ApplyDto.class));
    }

    public Page<ApplyDto> search(ApplySearchCondition condition, Pageable pageable) {
        Page<Apply> search = applyRepository.search(condition, pageable);

        List<ApplyDto> applyDtos = search.stream().map(apply -> modelMapper.map(apply, ApplyDto.class)).collect(Collectors.toList());

        return new PageImpl<>(applyDtos, pageable, search.getTotalElements());
    }

    public Optional<ApplyDto> getApply(Long apply_id) {
        Apply byIdApply = applyRepository.findById(apply_id).get();

        return Optional.of(modelMapper.map(byIdApply, ApplyDto.class));
    }

    public Optional<ApplyDto> updateApply(ApplyDto applyDto) {

        Apply apply = applyRepository.findById(applyDto.getApplySeq()).get();

        // 만약 수정 기능 있으면 추가

        applyRepository.saveAndFlush(apply);

        return Optional.of(modelMapper.map(apply, ApplyDto.class));
    }
}

