package com.unir.purchases.controller.model;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PurchasesRequest {

	
	@NotNull(message = "`books` cannot be null")
	@NotEmpty(message = "`books` cannot be empty")
	private List<String> books;
	private Long clientId;
	private Long discountId;
	private String paymentMethod;
	private BigDecimal subTotal;
	private BigDecimal total;
	private String userCreation;


}
