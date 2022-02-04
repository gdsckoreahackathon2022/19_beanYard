package com.sook4.beanYard.auth;

import com.fasterxml.jackson.core.JsonProcessingException;
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
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping("/register")
    public ResponseEntity<UserCredentials> newUser(@RequestBody @Validated UserCredentials userCredentials, Errors errors){
        if(errors.hasErrors()) {
            return ResponseEntity.badRequest().build();
        }

        Optional<UserCredentials> optionalUserDto = userService.saveUser(userCredentials);

        return  optionalUserDto.map(user -> ResponseEntity.status(HttpStatus.CREATED).body(user)).orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @GetMapping()
    public ResponseEntity<UserCredentials>  getUser(@RequestBody @Validated UserCredentials userCredentials, Errors errors) {

        Optional<UserCredentials> optionalUserDto = userService.getUser(userCredentials.getUserName());

        return optionalUserDto.map(credentials -> ResponseEntity.status(HttpStatus.OK).body(credentials)).orElseGet(() -> ResponseEntity.noContent().build());
    }

}
