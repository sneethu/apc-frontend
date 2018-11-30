package com.ingg.apcmeeting.event;

import com.ingg.apcmeeting.domain.Meeting;
import org.springframework.context.ApplicationEvent;

import java.util.HashMap;
import java.util.Map;

public class MeetingEvent extends ApplicationEvent {

    private final MeetingEventType meetingEventType;

    /**
     * Create a new ApplicationEvent.
     *
     * @param source the object on which the event initially occurred (never {@code null})
     */
    public MeetingEvent(MeetingEventType meetingEventType, Meeting source) {
        super(source);
        this.meetingEventType = meetingEventType;
    }

    public MeetingEventType getMeetingEventType() {
        return meetingEventType;
    }

    public Map<String,Object> getData() {
        Map<String,Object> map = new HashMap<>();
        map.put("meeting", getSource());
        map.put("type", meetingEventType.name());
        return map;
    }
}
