package com.ingg.apcmeeting.eventPublisher;

import com.ingg.apcmeeting.event.MeetingEvent;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;
import reactor.core.publisher.FluxSink;

import java.util.concurrent.Executor;
import java.util.function.Consumer;

@Component
public class MeetingEventPublisher implements ApplicationListener<MeetingEvent>, Consumer<FluxSink<MeetingEvent>> {

    final Logger LOGGER = LoggerFactory.getLogger(MeetingEventPublisher.class);

    private final Executor executor;
    private FluxSink<MeetingEvent> fluxSink;

    MeetingEventPublisher(Executor executor) {
        this.executor = executor;
    }

    @Override
    public void onApplicationEvent(MeetingEvent event) {
        LOGGER.info("Publishing {}", event);
        fluxSink.next(event);
    }

    @Override
    public void accept(FluxSink<MeetingEvent> sink) {
        fluxSink = sink;
    }
}
