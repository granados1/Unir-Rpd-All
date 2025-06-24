package com.unir.purchases.facade;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.reactive.function.client.WebClient;

import com.unir.purchases.facade.model.Book;

@Component
@RequiredArgsConstructor
@Slf4j
public class BooksFacade {

  @Value("${getBook.url}")
  private String getBookUrl;

  private final WebClient.Builder webClient;

  public Book getBook(String id) {

    try {
      String url = String.format(getBookUrl, id);
      log.info("Getting book with ID {}. Request to {}", id, url);
      return webClient.build()
              .get()
              .uri(url)
              .retrieve()
              .bodyToMono(Book.class)
              .block();
    } catch (HttpClientErrorException e) {
      log.error("Client Error: {}, Product with ID {}", e.getStatusCode(), id);
      return null;
    } catch (HttpServerErrorException e) {
      log.error("Server Error: {}, Product with ID {}", e.getStatusCode(), id);
      return null;
    } catch (Exception e) {
      log.error("Error: {}, Product with ID {}", e.getMessage(), id);
      return null;
    }
  }

}
