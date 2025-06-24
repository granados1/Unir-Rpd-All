package com.unir.purchases.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.unir.purchases.controller.model.PurchasesRequest;
import com.unir.purchases.data.PurchaseJpaRepository;
import com.unir.purchases.data.model.Purchase;
import com.unir.purchases.facade.BooksFacade;
import com.unir.purchases.facade.model.Book;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class PurchasesServiceImpl implements PurchasesService {

  @Autowired //Inyeccion por campo (field injection). Es la menos recomendada.
  private BooksFacade boocksFacade;

  @Autowired //Inyeccion por campo (field injection). Es la menos recomendada.
  private PurchaseJpaRepository repository;

  @Override
  public Purchase createPurchase(PurchasesRequest request) {

    List<Book> products = request.getBooks().stream().map(boocksFacade::getBook).filter(Objects::nonNull).toList();

    if(products.size() != request.getBooks().size() || products.stream().anyMatch(product -> !product.getVisible()) 
    || products.stream().anyMatch(product -> product.getStock()==0)) {
      return null;
    } else {
      Purchase purchase = Purchase.builder().books(products.stream().map(Book::getId).collect(Collectors.toList())).build();
      purchase.setClientId(request.getClientId());
      purchase.setDiscountId(request.getDiscountId());
      purchase.setPaymentMethod(request.getPaymentMethod());
      purchase.setSubTotal(request.getSubTotal());
      purchase.setTotal(request.getTotal());
      purchase.setUserCreation(request.getUserCreation());
      repository.save(purchase);
      return purchase;
    }
  }

  @Override
  public Purchase getPurchase(String id) {
    return repository.findById(Long.valueOf(id)).orElse(null);
  }

  @Override
  public List<Purchase> getPurchases() {
    List<Purchase> purchases = repository.findAll();
    return purchases.isEmpty() ? null : purchases;
  }
}
