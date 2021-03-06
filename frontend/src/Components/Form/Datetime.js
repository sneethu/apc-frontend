import React from 'react';
import { observer } from 'mobx-react';
import DatetimePicker from 'react-datetime';

import 'react-datetime/css/react-datetime.css';

const Datetime = ({field,...rest}) => (
    <div {...rest}>
        <div>
            <label htmlFor={field.id}>   
                {field.label}
            </label>
            <DatetimePicker {...field.bind()}/>   
        </div>
        <div>
            {field.error}
        </div>
    </div>
);

export default observer(Datetime);