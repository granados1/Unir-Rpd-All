package com.unir.purchases.controller;

import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.unir.purchases.controller.model.PurchasesRequest;
import com.unir.purchases.data.model.Purchase;
import com.unir.purchases.service.PurchasesService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

import java.util.Collections;
import java.util.List;

@RestController
@Tag(name = "Purchases Controller", description = "Microservicio encargado de exponer operaciones de CRUD para libros")
@RequiredArgsConstructor
@Slf4j
public class PurchasesController {

    private final PurchasesService service; //Inyeccion por constructor mediante @RequiredArgsConstructor. Y, también es inyección por interfaz.

    @PostMapping("/purchases")
    public ResponseEntity<Purchase> creatPurchase(@RequestBody @Valid PurchasesRequest request) { 

        log.info("Creating purchase...");
        Purchase created = service.createPurchase(request);

        if (created != null) {
            return ResponseEntity.ok(created);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/purchases")
    public ResponseEntity<List<Purchase>> getPurchases() {

        List<Purchase> purchases = service.getPurchases();
        if (purchases != null) {
            return ResponseEntity.ok(purchases);
        } else {
            return ResponseEntity.ok(Collections.emptyList());
        }
    }

    @GetMapping("/purchases/{id}")
    public ResponseEntity<Purchase> getPurchase(@PathVariable String id) {

        Purchase purchase = service.getPurchase(id);
        if (purchase != null) {
            return ResponseEntity.ok(purchase);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
