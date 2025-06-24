package com.example.ms_users_crud.service;

import com.example.ms_users_crud.model.User;
import com.example.ms_users_crud.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;
    // private final BCryptPasswordEncoder passwordEncoder; // Descomentar en un entorno real

    @Autowired
    public UserService(UserRepository userRepository /*, BCryptPasswordEncoder passwordEncoder */) {
        this.userRepository = userRepository;
        // this.passwordEncoder = passwordEncoder; // Descomentar en un entorno real
    }

    // CRUD Operations

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public User createUser(User user) {
        // En un entorno real: Codificar la contraseña antes de guardar
        // user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public Optional<User> updateUser(Long id, User userDetails) {
        return userRepository.findById(id)
                .map(existingUser -> {
                    existingUser.setUsername(userDetails.getUsername());
                    // En un entorno real: Codificar la nueva contraseña si se actualiza
                    // if (userDetails.getPassword() != null && !userDetails.getPassword().isEmpty()) {
                    //     existingUser.setPassword(passwordEncoder.encode(userDetails.getPassword()));
                    // }
                    existingUser.setEmail(userDetails.getEmail());
                    return userRepository.save(existingUser);
                });
    }

    public boolean deleteUser(Long id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
            return true;
        }
        return false;
    }

    // Authentication and Registration Specific Logic

    public Optional<User> registerUser(User user) {
        // Validación básica: verificar si ya existe un usuario con el mismo username o email
        if (userRepository.existsByUsername(user.getUsername())) {
            throw new RuntimeException("Username already taken.");
        }
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new RuntimeException("Email already registered.");
        }
        // En un entorno real: Codificar la contraseña
        // user.setPassword(passwordEncoder.encode(user.getPassword()));
        return Optional.of(userRepository.save(user));
    }

    public Optional<User> loginUser(String username, String password) {
        Optional<User> userOptional = userRepository.findByUsername(username);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            // En un entorno real: Comparar la contraseña codificada
            // if (passwordEncoder.matches(password, user.getPassword())) {
            //    return Optional.of(user);
            // }
            // Para este ejemplo simple sin seguridad:
            if (user.getPassword().equals(password)) {
                return Optional.of(user);
            }
        }
        return Optional.empty();
    }

}
