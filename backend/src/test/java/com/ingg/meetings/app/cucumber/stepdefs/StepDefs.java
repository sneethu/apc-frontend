package com.ingg.meetings.app.cucumber.stepdefs;

import com.ingg.meetings.app.ApcMeetingsApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = ApcMeetingsApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
