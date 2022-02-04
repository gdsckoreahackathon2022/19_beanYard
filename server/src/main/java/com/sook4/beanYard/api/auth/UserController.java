package com.sook4.beanYard.api.auth;

import lombok.RequiredArgsConstructor;
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
    public ResponseEntity<UserCredentials>  getUser(@RequestParam("userName") String userName) {

        Optional<UserCredentials> optionalUserDto = userService.getUser(userName);

        if (optionalUserDto != null) {
            return ResponseEntity.status(HttpStatus.OK).body(optionalUserDto.get());
        } else {
            return ResponseEntity.noContent().build();
        }
    }
}
