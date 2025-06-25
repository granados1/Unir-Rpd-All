Feature: Crear un nuevo libro en el sistema

  Scenario: Crear un libro exitosamente
    Given el servicio de libros está disponible
    When hago una petición POST a "/books" con el siguiente cuerpo:
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
    Then el código de respuesta debe ser 201
    And la respuesta debe contener "Cien años de soledad"