package com.unir.purchases.facade.model;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class Book {

	private Long id;
    private String titulo;
    private String autor;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate fechapublicacion;
    private String categoria;
    private String isbn;
    private Integer calificacion;
    private Boolean visible;
    private Integer stock;
    private Double precio;
}
