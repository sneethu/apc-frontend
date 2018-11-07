import {decorate, observable, action} from "mobx";
import moment from 'moment';

import Rest from '../Services/Rest'
import demo_events from './Events'
 
const rest = new Rest();

const merge = (events, newEvents) => {
    return events.concat(newEvents).filter(function(item, pos, self) {
        return self.indexOf(item) === pos;
    })  
}

class Meeting {
    events = demo_events

    async getMeeting(start,end) {
        try {
            const mStart = moment(start);
            const checkStartDate = ((!this.startDate) || (mStart.isBefore(this.start)));
            const mEnd = moment(end);
            const checkEndDate = ((!this.endDate) | (mEnd.isAfter(this.start)));

            if( checkStartDate && checkEndDate ) {
                const response = await rest.getMeetings(start.format(),end.format());
                this.events = merge(this.events,response.data.meetings);
                this.startDate = mStart;
                this.endDate = mEnd;
            }
        } catch(error) {
            console.log('Failing to request meetings '+error);
        }
    }

    async createMeeting(event) {
        try {
            await rest.createMeeting(event);
        } catch(error) {
            console.log('Failing to create meetings '+error);
        }
    }

    async updateMeeting(event) {
        try {
            await rest.updateMeeting(event);
        } catch(error) {
            console.log('Failing to update meetings '+error);  
        }
    }
}

decorate(Meeting,{
    getMeeting: action,
    events: observable,
    createMeeting: action,
    updateMeeting: action
  })

export default Meeting;