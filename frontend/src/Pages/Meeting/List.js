import React, {Component} from 'react';
import Modal from 'react-modal';
import {decorate, observable} from "mobx";
import { observer,inject } from 'mobx-react';
import validatorjs from 'validatorjs';
import MobxReactForm from 'mobx-react-form';

import Calendar from '../../Components/Calendar/Component';
import MeetingPage from './Page';

const plugins = { dvr: validatorjs };

const hooks = {
    async onSuccess(form) {
      console.log('Form Values!', form.values());
      /*const {email,password} = form.values();
      try {
        const response = await rest.login(email,password);
        tokenManager.setToken(response.data.token);
        
      } catch(error) {
        console.log('Failing login '+error);
        form.invalidate(error.message);
      }*/
    },
    onError(form) {
      console.log('All form errors', form.errors());
    }
}

class MeetingForm extends MobxReactForm {

    options() {
      return {
        validateOnChange: true
      };
    }

}

const createMeetingForm = (meeting) => {
    const fields = [{
        name: 'id',
        label: 'id',
        value: meeting.id
      }, {
        name: 'title',
        label: 'Title',
        placeholder: 'Insert Title',
        rules: 'required|string|between:5,25',
        value: meeting.title
      }, {
        name: 'description',
        label: 'Description',
        placeholder: 'Insert Description',
        rules: 'required|string|between:5,200',
        value: meeting.description
      }, {
        name: 'start',
        label: 'Start Date',
        placeholder: 'Insert Start Date',
        value: meeting.start
      }, {
        name: 'end',
        label: 'End Date',
        placeholder: 'Insert End Date',
        value: meeting.end
      }];
      return new MeetingForm({ fields }, { plugins, hooks });
}

const toData = (meetingForm) => {
    return meetingForm.values()
}

class ListMeeting extends Component {
    createModalOpen = false;
    changeModalOpen = false;

    constructor(props) {
        super(props)
        this.handleSelectSlot = this.handleSelectSlot.bind(this);
        this.handleSelectEvent = this.handleSelectEvent.bind(this);
        this.createMeeting = this.createMeeting.bind(this);
        this.updateMeeting = this.updateMeeting.bind(this);
    }

    handleSelectSlot = ({ start, end }) => {
        this.meetingForm = createMeetingForm({start,end});
        this.createModalOpen = true;
    }

    handleSelectEvent = (event) => {
        this.meetingForm = createMeetingForm(event);
        this.changeModalOpen = true;
    }

    createMeeting = () => {
        const {meeting} = this.props;
        const data = toData(this.meetingForm);
        meeting.createMeeting(data);
        this.createModalOpen = false;
    }

    updateMeeting = () => {
        const {meeting} = this.props;
        const data = toData(this.meetingForm);
        meeting.updateMeeting(data);
        this.changeModalOpen = false;
    }

    cancel = () => {
        this.changeModalOpen = false;
        this.createModalOpen = false;
    }

    render() {
        const root = document.getElementById('root');
        return (
            <div>
                <Modal isOpen={this.createModalOpen} appElement={root}>
                    <MeetingPage meetingForm={this.meetingForm} title='Create Meeting'/>
                    <div>
                        <button onClick={this.createMeeting}>Create</button>
                        <button onClick={this.cancel}>Cancel</button>
                    </div>
                </Modal>
                <Modal isOpen={this.changeModalOpen} appElement={root}>
                    <MeetingPage meetingForm={this.meetingForm} title='Change Meeting'/>
                    <div>
                        <button onClick={this.updateMeeting}>Update</button>
                        <button onClick={this.cancel}>Cancel</button>
                    </div>
                </Modal>
                <Calendar handleSelectSlot={this.handleSelectSlot} handleSelectEvent={this.handleSelectEvent}/>
            </div>
        )
    }
}

decorate(ListMeeting,{
    createModalOpen: observable,
    changeModalOpen: observable
});

export default inject("meeting")(observer(ListMeeting));

