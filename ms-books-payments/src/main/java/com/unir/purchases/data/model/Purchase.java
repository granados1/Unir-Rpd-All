package com.unir.purchases.data.model;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.OffsetDateTime;
import java.util.List;

@Entity
@Table(name = "purchases")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class Purchase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ElementCollection
    @Column(name = "libro_id")
    private List<Long> books;

    @Column(name = "cliente_id")
    private Long clientId;

    @Column(name = "descuento_id")
	private Long discountId;

    @Column(name = "medio_pago")
	private String paymentMethod;

    @Column(name = "subtotal")
	private BigDecimal subTotal;

    @Column(name = "total")
	private BigDecimal total;


    @Column(name = "create_date", columnDefinition = "TIMESTAMP")
    private OffsetDateTime createDate;

    @Column(name = "update_date", columnDefinition = "TIMESTAMP")
    private OffsetDateTime updateDate;

    @Column(name = "user_creation", length = 100)
    private String userCreation;

    @Column(name = "user_update", length = 100)
    private String userUpdate;

    @PrePersist
    public void prePersist() {
        createDate = OffsetDateTime.now();
    }

    @PreUpdate
    public void preUpdate() {
        updateDate = OffsetDateTime.now();
    }

}
