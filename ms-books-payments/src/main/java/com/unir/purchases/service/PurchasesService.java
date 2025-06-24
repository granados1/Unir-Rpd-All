package com.unir.purchases.service;

import java.util.List;

import com.unir.purchases.controller.model.PurchasesRequest;
import com.unir.purchases.data.model.Purchase;

public interface PurchasesService {
	
	Purchase createPurchase(PurchasesRequest request);

	Purchase getPurchase(String id);

	List<Purchase> getPurchases();

}
