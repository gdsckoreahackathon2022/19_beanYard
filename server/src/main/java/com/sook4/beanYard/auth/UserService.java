package com.sook4.beanYard.auth;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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
