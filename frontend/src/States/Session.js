import validatorjs from 'validatorjs';
import MobxReactForm from 'mobx-react-form';
import {decorate, computed, action} from "mobx";

import Rest from '../Services/Rest'
import tokenManager from '../Services/TokenManager';

const plugins = { dvr: validatorjs };

const rest = new Rest();

const fields = [{
    name: 'email',
    label: 'Email',
    placeholder: 'Insert Email',
    rules: 'required|email|string|between:5,25',
  }, {
    name: 'password',
    label: 'Password',
    placeholder: 'Insert Password',
    rules: 'required|string|between:5,25',
  }];

const hooks = {
    async onSuccess(form) {
      console.log('Form Values!', form.values());
      const {email,password} = form.values();
      try {
        const response = await rest.login(email,password);
        tokenManager.setToken(response.data.token);
        
      } catch(error) {
        console.log('Failing login '+error);
        form.invalidate(error.message);
      }
    },
    onError(form) {
      console.log('All form errors', form.errors());
    }
  }

class LoginForm extends MobxReactForm {

    options() {
      return {
        validateOnChange: true
      };
    }

}

class Session {
    loginForm = new LoginForm({ fields }, { plugins, hooks });
    
    get isActive() {
        return tokenManager.isValidateToken();
    }
    
    async logout() {
      try {
        await rest.logout();
        tokenManager.setToken(null);
      } catch(error) {
        console.log('Failing logout '+error);
      }
    }
}

decorate(Session,{
    isActive: computed,
    logout: action
  })

export default Session;

