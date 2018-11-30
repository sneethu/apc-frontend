package com.ingg.apcmeeting.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document
public class Meeting {

    @Id
    private String id;

    private String title;

    private LocalDateTime start;

    private LocalDateTime end;

    private String description;
}
