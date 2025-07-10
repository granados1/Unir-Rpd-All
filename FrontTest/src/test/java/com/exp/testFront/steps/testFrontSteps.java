package com.exp.testFront.steps;

import io.cucumber.java.en.*;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;


import static org.junit.Assert.*;

public class testFrontSteps {
    WebDriver driver;

    @Given("el usuario abre la aplicación de búsqueda de libros")
    public void abrirFormulario() {
        System.setProperty("webdriver.chrome.driver", "C:\\tools\\chromedriver-win64\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("https://relatos-de-papel-pink.vercel.app/");
    }

    @And("el usuario hace clic en {string}")
    public void el_usuario_hace_clic_en(String textoBoton) {
        WebElement boton = driver.findElement(By.linkText(textoBoton));
        boton.click();
    }

    @When("el usuario ingresa {string} en el campo de búsqueda")
    public void el_usuario_ingresa_en_el_campo_de_búsqueda(String texto) {
        WebElement campoBusqueda = driver.findElement(By.id("search-input"));
        campoBusqueda.sendKeys(texto);
    }

    @And("preciona la tecla Enter")
    public void preciona_la_tecla_enter() {
        WebElement campoBusqueda = driver.findElement(By.id("search-input"));
        campoBusqueda.sendKeys(Keys.ENTER);
    }

    @Then("el sistema muestra un párrafo con el texto {string}")
    public void el_sistema_muestra_un_parrafo_con_el_texto(String textoEsperado) {
        WebElement parrafo = driver.findElement(By.id("autor-1"));
        assertTrue(parrafo.getText().contains(textoEsperado));
        driver.quit();
    }

    @Then("el sistema muestra el titulo del libro {string}")
    public void el_sistema_muestra_el_titulo_del_libro(String textoEsperado) {
        java.util.List<WebElement> titulos = driver.findElements(By.cssSelector("h2.product-name"));
        boolean encontrado = titulos.stream()
                .anyMatch(titulo -> titulo.getText().toLowerCase().contains(textoEsperado.toLowerCase()));
        assertTrue("No se encontró el texto esperado en los títulos de los libros", encontrado);
        driver.quit();
    }

    @And("el usuario hace clic en el botón con id {string}")
    public void el_usuario_hace_clic_en_el_boton_con_id(String idBoton) {
        WebElement boton = driver.findElement(By.id(idBoton));
        boton.click();
    }

    @When("el usuario hace clic en el icono del carrito con texto {string}")
    public void el_usuario_hace_clic_en_el_icono_del_carrito_con_texto(String texto) {
        WebElement iconoCarrito = driver.findElement(By.id("ver-carrito-btn"));
        iconoCarrito.click();
    }

    @Then("el sistema muestra {string} en el texto con id {string}")
    public void el_sistema_muestra_en_el_texto_con_id(String valorEsperado, String idElemento) {
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(5));
        WebElement elemento = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id(idElemento)));
        String texto = elemento.getText().trim();
        assertEquals(valorEsperado, texto);
    }

    @And("el usuario hace clic en el botón para quitar el producto del carrito")
    public void el_usuario_hace_clic_en_el_boton_para_quitar_el_producto_del_carrito() {
        WebElement botonQuitar = driver.findElement(By.id("x-btn-1"));
        botonQuitar.click();
        driver.quit();
    }

}