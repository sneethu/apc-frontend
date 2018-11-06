import React from 'react';
import BigCalendar from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import moment from 'moment';
import { observer,inject } from 'mobx-react';

import './react-big-calendar.css';

const localizer = BigCalendar.momentLocalizer(moment);

const moveEvent = ({ event, start, end, allDay }) => {
    alert("Change "+event.title)
}

const onEventResize = ({ event, start, end, allDay }) => {
    alert("Resized "+event.title)
}

const onSelecting = () => true;

const DraggableCalendar = withDragAndDrop(BigCalendar)

const Calendar = ({meeting, handleSelectSlot,handleSelectEvent}) => {
    return (
        <div>
            <BigCalendar
                selectable
                resizable
                localizer={localizer}
                events={meeting.events}
                startAccessor="start" 
                endAccessor="end"
                onSelectEvent={handleSelectEvent}
                onSelectSlot={handleSelectSlot}
                onEventDrop={moveEvent}
                onEventResize={onEventResize}
                onSelecting={onSelecting}
                />
        </div>    
    )
};

export default inject("meeting")(observer(Calendar));