package com.unir.purchases.data;

import org.springframework.data.jpa.repository.JpaRepository;

import com.unir.purchases.data.model.Purchase;

public interface PurchaseJpaRepository extends JpaRepository<Purchase, Long> {
}
