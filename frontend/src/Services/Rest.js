import axios from 'axios';

const LOGIN_PATH = "";
const LOGOUT_PATH = "";
const MEETING_PATH = "";
const CREATE_MEETING_PATH = "";
const UPDATE_MEETING_PATH = "";

class Rest {

    async login(email,password) {
        return axios.post(LOGIN_PATH,{email,password})
    }

    async logout() {
        return axios.post(LOGOUT_PATH)
    }

    async getMeetings(start,end) {
        return axios.get(MEETING_PATH)
    }

    async createMeeting(event) {
        return axios.post(CREATE_MEETING_PATH,event)
    }

    async updateMeeting(event) {
        return axios.put(UPDATE_MEETING_PATH,event)
    }

}

export default Rest;