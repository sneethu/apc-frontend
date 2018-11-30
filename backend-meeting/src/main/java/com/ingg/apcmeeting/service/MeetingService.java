package com.ingg.apcmeeting.service;

import com.ingg.apcmeeting.domain.Meeting;
import com.ingg.apcmeeting.event.MeetingEventType;
import com.ingg.apcmeeting.event.MeetingEvent;
import com.ingg.apcmeeting.repository.MeetingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class MeetingService{

    private final MeetingRepository meetingRepository;
    private final ApplicationEventPublisher publisher;
    private final NextSequenceService nextSequenceService;

    public MeetingService(@Autowired MeetingRepository meetingRepository,
                          ApplicationEventPublisher publisher,
                          @Autowired NextSequenceService nextSequenceService){
        this.meetingRepository = meetingRepository;
        this.publisher = publisher;
        this.nextSequenceService = nextSequenceService;
    }

    public Mono<Meeting> create(Meeting meeting){
        //meeting.setId(nextSequenceService.getNextSequence("customSequences"));
        return meetingRepository
                .save(meeting)
                .doOnSuccess(meetingSaved -> this.publisher.publishEvent(new MeetingEvent(MeetingEventType.NEW_MEETING,meetingSaved)));
    }

    public Flux<Meeting> findMeetings(LocalDateTime start, LocalDateTime end){
        return meetingRepository.findByStartAfterAndEndBefore(start, end);
    }

    public Flux<Meeting> findAll(){
        return meetingRepository.findAll();
    }

    public Flux<Meeting> saveAll(List<Meeting> meetings) {
        return meetingRepository.saveAll(meetings);
    }

    public Mono<Meeting> update(Meeting meetingToUpdate) {

        return meetingRepository
                .findById(meetingToUpdate.getId())
                .map(meetingFound -> Meeting.builder().id(meetingFound.getId())
                        .title(meetingToUpdate.getTitle())
                        .start(meetingToUpdate.getStart())
                        .end(meetingToUpdate.getEnd())
                        .description(meetingToUpdate.getDescription()).build())
                .flatMap(meeting -> meetingRepository
                                     .save(meeting)
                                     .doOnSuccess(meetingUpdated -> this.publisher.
                                                                         publishEvent(new MeetingEvent(MeetingEventType.UPDATE_MEETING, meetingUpdated))));
    }
}
