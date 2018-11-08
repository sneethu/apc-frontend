import React from 'react';
import { observer,inject } from 'mobx-react';

import Input from '../../Components/Form/Input';

const Login = ({session}) =>{
    const {loginForm} = session;
    let LoginPage = null;
    if(!session.isActive) LoginPage =     
    <div>
        <form onSubmit={loginForm.onSubmit}>

            <Input field={loginForm.$('email')}/>
            <Input field={loginForm.$('password')} type='password'/>

            <button type="submit" onClick={loginForm.onSubmit}>Login</button>
            <button type="button" onClick={loginForm.onClear}>Clear</button>

            <p>{loginForm.error}</p>
        </form>
    </div>
    return LoginPage;
}

export default inject("session")(observer(Login));