# Users-crud Microservice
Microservicio que se encarga de ejecutar las acciones de creación y login de usuarios en la app relatos de papel

Las operaciones que la API debe soportar son las siguientes:
- Crear usuarios
- Consultar lista de usuarios
- Consultar usuarios por id
- Eliminar usuarios
- Validar login
- Actualizar usuarios completamente

**Recursos identificados**
- users (Usuarios): Representa un usuario en el sistema.

| Método Http | Endpoint    | Query Params | Cuerpo JSON de la petición           | Respuesta JSON de la petición                                      | Códigos HTTP de respuesta posibles                                   |
|-------------|-------------|--------------|--------------------------------------|--------------------------------------------------------------------|----------------------------------------------------------------------|
| POST        | /users      |              | `{"username":"string","password":"string","email":"string"}`  | `{"id":0,"username":"string","password":"string","email":"string"}` | 201 Created, 400 Bad Request, 500 Internal Server Error              |
| GET         | /users      |              |                                      | `[{"id":0,"username":"string","password":"string","email":"string"}]` | 200 OK, 500 Internal Server Error, 400 Bad Request, 404 Not Found    |
| GET         | /users/{id} |              |                                      | `[{"id":0,"username":"string","password":"string","email":"string"}]` | 200 OK, 404 Not Found, 500 Internal Server Error, 404 Not Found      |
| DELETE      | /users/{id} |              |                                      | `{"message":"string"}`                                             | 200 OK, 404 Not Found, 500 Internal Server Error,, 404 Not Found     |
| PUT         | /users/{id} |              | `{"username":"string","password":"string","email":"string"}`  | `{"id":0,"username":"string","password":"string","email":"string"}` | 200 OK, 400 Bad Request, 404 Not Found, 500 Internal Server Error    |
| POST        | /users/auth |              | `{"username":"string","password":"string"}`  | `{"message":"string"}`                       | 200 OK, 400 Bad Request, 401 UnAuthorized, 500 Internal Server Error |