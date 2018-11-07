import axios from 'axios';

const LOGIN_PATH = "login";
const LOGOUT_PATH = "logout";
const MEETING_PATH = "meeting";

class Rest {

    async login(email,password) {
        return axios.post(LOGIN_PATH,{email,password})
    }

    async logout() {
        return axios.post(LOGOUT_PATH)
    }

    async getMeetings(start,end) {
        return axios.get(MEETING_PATH+"?start="+start+"&end="+end)
    }

    async createMeeting(event) {
        return axios.post(MEETING_PATH,event)
    }

    async updateMeeting(event) {
        return axios.put(MEETING_PATH+"/"+event.id,event)
    }

}

export default Rest;