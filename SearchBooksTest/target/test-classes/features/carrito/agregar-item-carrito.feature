Feature: Agregar un libro al carrito de compras

  Scenario: Usuario agrega un libro al carrito
    Given el usuario abre la aplicación de búsqueda de libros
    And el usuario hace clic en "Lista de productos"
    And el usuario hace clic en el botón con id "add-to-cart-1"
    When el usuario hace clic en el icono del carrito con texto "Ver carrito"
    Then el sistema muestra "1" en el texto con id "item-quantity-1"
