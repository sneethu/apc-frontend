package com.ingg.apcmeeting.webSocket;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

//@Configuration
public class BackUpWebSocketConfiguration {

    final Logger LOGGER = LoggerFactory.getLogger(BackUpWebSocketConfiguration.class);
/*
    @Bean
    Executor executor() {
        return Executors.newSingleThreadExecutor();
    }

    @Bean
    HandlerMapping handlerMapping(WebSocketHandler wsh) {
        return new SimpleUrlHandlerMapping() {
            {
                LOGGER.info("Mapping /webSocketMeeting to a handler");
                setUrlMap(Collections.singletonMap("/webSocketMeeting", wsh));
                setCorsConfigurations(
                        Collections.singletonMap("*", new CorsConfiguration().applyPermitDefaultValues()));
                setOrder(10);
            }
        };
    }

    @Bean
    WebSocketHandlerAdapter webSocketHandlerAdapter() {
        return new WebSocketHandlerAdapter();
    }

    @Bean
    WebSocketHandler webSocketHandler(
            MeetingCreatedEventPublisher eventPublisher
    ) {
        LOGGER.info("webSocketHandler");
        Flux<MeetingCreatedEvent> publish = Flux
                .create(eventPublisher)
                .share();

        return session -> {
            Flux<WebSocketMessage> messageFlux = publish
                    .map(evt -> {
                        LOGGER.info("Received an event from the publisher {}", evt);
                        try {
                            return wsObjectMapper().writeValueAsString(evt.getSource());
                        }
                        catch (JsonProcessingException e) {
                            throw new RuntimeException(e);
                        }
                    })
                    .map(str -> {
                        LOGGER.info("Sending event - {} over web socket", str);
                        return session.textMessage(str);
                    });

            return session.send(messageFlux);
        };
    }

    @Bean
    RouterFunction<ServerResponse> staticResourceRouter(){
        return RouterFunctions.resources("/ws*", new ClassPathResource("static/"));
    }

    public ObjectMapper wsObjectMapper() {
        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        mapper.configure(MapperFeature.DEFAULT_VIEW_INCLUSION, true);

        return mapper;
    }*/
}
