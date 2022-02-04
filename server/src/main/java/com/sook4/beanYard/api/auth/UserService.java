package com.sook4.beanYard.api.auth;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    private final ModelMapper modelMapper;

    private final PasswordEncoder passwordEncoder;

    public Optional<UserCredentials> saveUser(UserCredentials userCredentials) {
        userCredentials.setPassword(passwordEncoder.encode(userCredentials.getPassword()));
        User savedUser = userRepository.save(modelMapper.map(userCredentials, User.class));

        return Optional.of(modelMapper.map(savedUser, UserCredentials.class));
    }

    public Optional<UserCredentials> getUser(String username) {
        Optional<User> byUserName = userRepository.findByUserName(username);

        return Optional.of(modelMapper.map(byUserName.get(), UserCredentials.class));
    }

}
