Feature: Validar el endpoint de documentación OpenAPI

  Scenario: Obtener la documentación del API
    Given el servicio está disponible
    When hago una petición GET a "/v3/api-docs"
    Then el código de respuesta debe ser 200
    And la respuesta debe contener "openapi"