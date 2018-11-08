import React from 'react';
import { observer } from 'mobx-react';

const TextArea = ({field,row = 80,cols=10,...rest}) => (
    <div {...rest}>
        <div>
            <label htmlFor={field.id}>
                {field.label}
            </label>
            <div>
                <textarea {...field.bind()} row={row} cols={cols}/>
            </div>
        </div>
        <div>
            {field.error}
        </div>
    </div>
);

export default observer(TextArea);