import React,{Component} from 'react';


import Input from '../../Components/Form/Input';
import TextArea from '../../Components/Form/TextArea';
import Datetime from '../../Components/Form/Datetime';

class CreateMeeting extends Component {
    render() {
        const {meetingForm,title} = this.props;
        return (
            <div>
                {title}
                <Datetime field={meetingForm.$('start')}/>
                <Datetime field={meetingForm.$('end')}/>
                <Input field={meetingForm.$('title')}/>
                <TextArea field={meetingForm.$('description')}/>
            </div>
        )
    }
}

export default CreateMeeting;