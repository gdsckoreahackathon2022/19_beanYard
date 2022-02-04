package com.sook4.beanYard.api.controller.apply;

import com.sook4.beanYard.api.dto.ApplyDto;
import com.sook4.beanYard.api.dto.ApplySearchCondition;
import com.sook4.beanYard.api.service.apply.ApplyService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/apply")
@RequiredArgsConstructor
public class ApplyController {
    private final ApplyService applyService;

    @GetMapping
    public ResponseEntity<Page<ApplyDto>> search(ApplySearchCondition condition, Pageable pageable) {

        Page<ApplyDto> applyDtoPage = applyService.search(condition, pageable);

        if (applyDtoPage.hasContent()) {
            return ResponseEntity.status(HttpStatus.OK).body(applyDtoPage);
        } else {
            return ResponseEntity.noContent().build();
        }
    }

    @PostMapping
    public ResponseEntity<ApplyDto> newApply(@RequestBody @Validated ApplyDto applyDto, Errors errors){
        if(errors.hasErrors()) {
            return ResponseEntity.badRequest().build();
        }

        Optional<ApplyDto> optionalApplyDto = applyService.addApply(applyDto);

        return  optionalApplyDto.map(apply -> ResponseEntity.status(HttpStatus.CREATED).body(apply)).orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @PutMapping
    public ResponseEntity<ApplyDto> updateApply(@RequestBody @Validated ApplyDto applyDto, Errors errors){
        if(errors.hasErrors()) {
            return ResponseEntity.badRequest().build();
        }

        Optional<ApplyDto> updateApply = applyService.updateApply(applyDto);

        return  updateApply.map(apply -> ResponseEntity.status(HttpStatus.OK).body(apply)).orElseGet(() -> ResponseEntity.badRequest().build());
    }
}
