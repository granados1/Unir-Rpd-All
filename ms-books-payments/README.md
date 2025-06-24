# Books-Payments
Aplicación que se encarga de ejecutar la operación principal de la aplicación - registrar compras

Las operaciones que la API debe soportar son las siguientes:
- Crear compras
- Consultar lista de compras
- Consultar compras por registro

**Recursos identificados**
- purchases (Compras): Representa una compra en el sistema.

| Método Http | Endpoint                   | Query Params | Cuerpo JSON de la petición           | Respuesta JSON de la petición         | Códigos HTTP de respuesta posibles                 |
|-------------|----------------------------|--------------|--------------------------------------|---------------------------------------|----------------------------------------------------|
| POST        | /purchases                 |              | `{"books":["string"],"clientId":0,"discountId":0,"paymentMethod":"string","subTotal":0,"total":0,"userCreation":"string"}`  | `{"id":0,"books":[0],"clientId":0,"discountId":0,"paymentMethod":"string","subTotal":0,"total":0,"createDate":"2025-06-11T23:27:26.518Z","updateDate":"2025-06-11T23:27:26.518Z","userCreation":"string","userUpdate":"string"}` | 200 OK, 400 Bad Request, 500 Internal Server Error |
| GET         | /purchases                 |              |                                      | `[{"id":0,"books":[0],"clientId":0,"discountId":0,"paymentMethod":"string","subTotal":0,"total":0,"createDate":"2025-06-11T23:27:26.518Z","updateDate":"2025-06-11T23:27:26.518Z","userCreation":"string","userUpdate":"string"}]`| 200 OK, 500 Internal Server Error, 400 Bad Request                |
| GET         | /purchases/{id}            |              |                                      | `{"id":0,"books":[0],"clientId":0,"discountId":0,"paymentMethod":"string","subTotal":0,"total":0,"createDate":"2025-06-11T23:27:26.518Z","updateDate":"2025-06-11T23:27:26.518Z","userCreation":"string","userUpdate":"string"}` | 200 OK, 404 Not Found, 500 Internal Server Error |
