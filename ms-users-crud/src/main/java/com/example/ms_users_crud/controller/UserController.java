package com.example.ms_users_crud.controller;

import com.example.ms_users_crud.dto.LoginRequest;
import com.example.ms_users_crud.dto.RegisterRequest;
import com.example.ms_users_crud.model.User;
import com.example.ms_users_crud.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/api/users")
@Tag(name = "User Management", description = "Operations related to user CRUD and authentication")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    // CRUD Endpoints

    @Operation(summary = "Get all users", description = "Retrieves a list of all registered users")
    @ApiResponse(responseCode = "200", description = "Successfully retrieved list of users",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = User.class)))
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    @Operation(summary = "Get user by ID", description = "Retrieves a user by their unique ID")
    @ApiResponse(responseCode = "200", description = "Successfully retrieved user",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = User.class)))
    @ApiResponse(responseCode = "404", description = "User not found")
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        Optional<User> user = userService.getUserById(id);
        return user.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @Operation(summary = "Create a new user", description = "Registers a new user in the system")
    @ApiResponse(responseCode = "201", description = "User created successfully",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = User.class)))
    @ApiResponse(responseCode = "400", description = "Invalid user data provided")
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User createdUser = userService.createUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
    }

    @Operation(summary = "Update an existing user", description = "Updates details of an existing user by ID")
    @ApiResponse(responseCode = "200", description = "User updated successfully",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = User.class)))
    @ApiResponse(responseCode = "404", description = "User not found")
    @ApiResponse(responseCode = "400", description = "Invalid user data provided")
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
        Optional<User> updatedUser = userService.updateUser(id, userDetails);
        return updatedUser.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @Operation(summary = "Delete a user", description = "Deletes a user by their unique ID")
    @ApiResponse(responseCode = "204", description = "User deleted successfully")
    @ApiResponse(responseCode = "404", description = "User not found")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        boolean deleted = userService.deleteUser(id);
        if (deleted) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Authentication and Registration Endpoints

    /*@Operation(summary = "Register a new user account", description = "Creates a new user account with unique username and email")
    @ApiResponse(responseCode = "201", description = "User registered successfully",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = User.class)))
    @ApiResponse(responseCode = "400", description = "Username or email already taken, or invalid input")
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterRequest registerRequest) {
        User newUser = new User();
        newUser.setUsername(registerRequest.getUsername());
        newUser.setPassword(registerRequest.getPassword()); // En un entorno real, la contraseña DEBE ser codificada
        newUser.setEmail(registerRequest.getEmail());

        try {
            Optional<User> registeredUser = userService.registerUser(newUser);
            return registeredUser.map(user -> ResponseEntity.status(HttpStatus.CREATED).body(user))
                    .orElse(ResponseEntity.status(HttpStatus.BAD_REQUEST).build());
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }*/

    @Operation(summary = "User login", description = "Authenticates a user with username and password")
    @ApiResponse(responseCode = "200", description = "Login successful",
            content = @Content(mediaType = "application/json", schema = @Schema(type = "string", example = "Login successful for user: testuser")))
    @ApiResponse(responseCode = "401", description = "Invalid credentials")
    @PostMapping("/auth")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
        Optional<User> userOptional = userService.loginUser(loginRequest.getUsername(), loginRequest.getPassword());
        if (userOptional.isPresent()) {
            // En una aplicación real, aquí generarías y retornarías un token JWT
            // o una sesión, no el objeto User completo con la contraseña.
            return ResponseEntity.ok("Login successful for user: " + userOptional.get().getUsername());
            // Si quieres retornar el usuario (sin la contraseña para seguridad):
            // User loggedInUser = userOptional.get();
            // loggedInUser.setPassword(null); // No enviar la contraseña al cliente
            // return ResponseEntity.ok(loggedInUser);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }

}
