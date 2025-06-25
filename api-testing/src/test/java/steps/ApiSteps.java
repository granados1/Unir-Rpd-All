package steps;

import io.cucumber.java.en.*;
import io.restassured.response.Response;

import static io.restassured.RestAssured.*;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import io.restassured.http.ContentType;

public class ApiSteps {

    private Response response;
    private int libroId;

    @Given("el servicio está disponible")
    public void el_servicio_esta_disponible() {
        baseURI = "http://localhost:8081";
    }

    @When("hago una petición GET a {string}")
    public void hago_una_peticion_get_a(String endpoint) {
        response = get(endpoint);
    }

    @Then("el código de respuesta debe ser {int}")
    public void el_codigo_de_respuesta_debe_ser(Integer statusCode) {
        assertThat(response.getStatusCode(), is(statusCode));
    }

    @Then("la respuesta debe contener {string}")
    public void la_respuesta_debe_contener(String contenido) {
        assertThat(response.getBody().asString(), containsString(contenido));
    }

    @Given("el servicio de libros está disponible")
    public void el_servicio_de_libros_esta_disponible() {
        baseURI = "http://localhost:8081";
    }

    @When("hago una petición POST a {string} con el siguiente cuerpo:")
    public void hago_una_peticion_post_con_cuerpo(String endpoint, String body) {
        response = given()
                .contentType(ContentType.JSON)
                .body(body)
                .when()
                .post(endpoint);
    }

    @Given("he creado un libro con los siguientes datos:")
    public void he_creado_un_libro_con_los_siguientes_datos(String body) {
        response = given()
                .contentType(ContentType.JSON)
                .body(body)
                .when()
                .post("/books");

        assertThat(response.getStatusCode(), is(201));
        libroId = response.jsonPath().getInt("id");
    }

    @When("hago una petición PATCH a {string} con el siguiente cuerpo:")
    public void hago_una_peticion_patch_con_el_siguiente_cuerpo(String endpoint, String body) {
        String endpointConId = endpoint.replace("{id}", String.valueOf(libroId));
        response = given()
                .contentType(ContentType.JSON)
                .body(body)
                .when()
                .patch(endpointConId);
    }

}
