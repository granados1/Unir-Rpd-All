Feature: Búsqueda de libros por palabra clave

  Scenario: Usuario ingresa una palabra clave válida
    Given el usuario abre la aplicación de búsqueda de libros
    And el usuario hace clic en "Lista de productos"
    When el usuario ingresa "Gabriel García" en el campo de búsqueda
    And preciona la tecla Enter
    Then el sistema muestra un párrafo con el texto "Autor: Gabriel García Márquez"
