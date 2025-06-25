Feature: Búsqueda de libros por palabra clave - Nombre

  Scenario: Usuario ingresa una palabra clave válida - Nombre
    Given el usuario abre la aplicación de búsqueda de libros
    And el usuario hace clic en "Lista de productos"
    When el usuario ingresa "Cien" en el campo de búsqueda
    And preciona la tecla Enter
    Then el sistema muestra el titulo del libro "Cien años de soledad"
