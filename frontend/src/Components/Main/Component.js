import { observer,inject } from 'mobx-react';

const Main = ({session,children}) => {
    let MainPage = null;
    if(session.isActive) MainPage = children
    return MainPage
};

export default inject("session")(observer(Main));