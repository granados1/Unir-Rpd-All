package com.example.ms_users_crud.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Details about the Register request")
public class RegisterRequest {

    private String username;
    private String password;
    private String email;

}
