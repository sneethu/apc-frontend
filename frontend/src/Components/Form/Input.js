import React from 'react';
import { observer } from 'mobx-react';

const Input = observer(({field,type,...rest}) => (
    <div {...rest}>
        <div>
            <label htmlFor={field.id}>
                {field.label}
            </label>
            <input {...field.bind()} type={type}/>
        </div>
        <div>
            {field.error}
        </div>
    </div>
));

export default Input;