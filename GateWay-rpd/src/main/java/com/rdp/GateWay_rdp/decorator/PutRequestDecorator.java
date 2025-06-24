package com.rdp.GateWay_rdp.decorator;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.rdp.GateWay_rdp.model.GatewayRequest;
import lombok.NonNull;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cloud.gateway.support.ServerWebExchangeUtils;
import org.springframework.core.io.buffer.DataBuffer;
import org.springframework.core.io.buffer.DataBufferFactory;
import org.springframework.core.io.buffer.DefaultDataBufferFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.server.reactive.ServerHttpRequestDecorator;
import org.springframework.web.util.UriComponentsBuilder;
import reactor.core.publisher.Flux;

import java.net.URI;

/**
 * Decorador para solicitudes PUT.
 */
@Slf4j
public class PutRequestDecorator extends ServerHttpRequestDecorator {

    private final GatewayRequest gatewayRequest;
    private final ObjectMapper objectMapper;

    public PutRequestDecorator(GatewayRequest gatewayRequest, ObjectMapper objectMapper) {
        super(gatewayRequest.getExchange().getRequest());
        this.gatewayRequest = gatewayRequest;
        this.objectMapper = objectMapper;
    }

    @Override
    @NonNull
    public HttpMethod getMethod() {
        return HttpMethod.PUT;
    }

    @Override
    @NonNull
    public URI getURI() {
        return UriComponentsBuilder
                .fromUri((URI) gatewayRequest.getExchange().getAttributes().get(ServerWebExchangeUtils.GATEWAY_REQUEST_URL_ATTR))
                .queryParams(gatewayRequest.getQueryParams())
                .build()
                .toUri();
    }

    @Override
    @NonNull
    public HttpHeaders getHeaders() {
        return gatewayRequest.getHeaders();
    }

    @Override
    @NonNull
    public Flux<DataBuffer> getBody() {
        try {
            DataBufferFactory bufferFactory = new DefaultDataBufferFactory();
            byte[] bodyData = objectMapper.writeValueAsBytes(gatewayRequest.getBody());
            DataBuffer buffer = bufferFactory.allocateBuffer(bodyData.length);
            buffer.write(bodyData);
            return Flux.just(buffer);
        } catch (Exception e) {
            log.error("Error serializando el cuerpo de la solicitud PUT", e);
            return Flux.empty();
        }
    }
}
