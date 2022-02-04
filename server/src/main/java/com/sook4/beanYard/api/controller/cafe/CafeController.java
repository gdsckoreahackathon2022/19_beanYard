package com.sook4.beanYard.api.controller.cafe;

import com.sook4.beanYard.api.dto.ApplyDto;
import com.sook4.beanYard.api.dto.ApplySearchCondition;
import com.sook4.beanYard.api.dto.CafeDto;
import com.sook4.beanYard.api.dto.CafeSearchCondition;
import com.sook4.beanYard.api.service.apply.ApplyService;
import com.sook4.beanYard.api.service.cafe.CafeService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/cafe")
@RequiredArgsConstructor
public class CafeController {
    private final CafeService cafeService;

    private final ApplyService applyService;

    @GetMapping
    public ResponseEntity<Page<CafeDto>> search(CafeSearchCondition condition, Pageable pageable) {

        Page<CafeDto> cafeDtoPage = cafeService.search(condition, pageable);

        if (cafeDtoPage.hasContent()) {
            return ResponseEntity.status(HttpStatus.OK).body(cafeDtoPage);
        } else {
            return ResponseEntity.noContent().build();
        }
    }

    @PostMapping
    public ResponseEntity<CafeDto> newCafe(@RequestBody @Validated CafeDto cafeDto, Errors errors){
        if(errors.hasErrors()) {
            return ResponseEntity.badRequest().build();
        }

        Optional<CafeDto> optionalCafeDto = cafeService.addCafe(cafeDto);

        return  optionalCafeDto.map(cafe -> ResponseEntity.status(HttpStatus.CREATED).body(cafe)).orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @PutMapping
    public ResponseEntity<CafeDto> updateCafe(@RequestBody @Validated CafeDto cafeDto, Errors errors){
        if(errors.hasErrors()) {
            return ResponseEntity.badRequest().build();
        }

        Optional<CafeDto> updateCafe = cafeService.updateCafe(cafeDto);

        return  updateCafe.map(cafe -> ResponseEntity.status(HttpStatus.OK).body(cafe)).orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @GetMapping("/{farmer_id}")
    public ResponseEntity<List<CafeDto>> getFarmerCafe(@PathVariable("farmer_id") Long farmer_id) {

        ApplySearchCondition applySearchCondition = new ApplySearchCondition();
        applySearchCondition.setUserSeq(farmer_id);
        List<CafeDto> cafeDtoList = new ArrayList<>();
        Page<ApplyDto> search = applyService.search(applySearchCondition, Pageable.unpaged());

        search.forEach(applyDto -> {
            cafeDtoList.add(cafeService.getCafe(applyDto.getCafeSeq()).get());
        });

        return ResponseEntity.status(HttpStatus.OK).body(cafeDtoList);
    }
}
