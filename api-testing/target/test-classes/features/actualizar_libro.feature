Feature: Actualizar parcialmente un libro existente

  Scenario: Actualizar el título y precio de un libro existente
    Given el servicio de libros está disponible
    And he creado un libro con los siguientes datos:
      """
      {
        "titulo": "Cien años de soledad",
        "autor": "Gabriel García Márquez",
        "fechapublicacion": "2025-06-06",
        "categoria": "Novela",
        "isbn": "12345",
        "calificacion": 4,
        "visible": true,
        "stock": 100,
        "precio": 50
      }
      """
    When hago una petición PATCH a "/books/{id}" con el siguiente cuerpo:
      """
      {
        "titulo": "Cien años de soledad patch",
        "precio": 5000
      }
      """
    Then el código de respuesta debe ser 200
    And la respuesta debe contener "5000"
