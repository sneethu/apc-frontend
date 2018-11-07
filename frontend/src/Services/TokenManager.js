import axios from 'axios';

axios.defaults.headers.common['Authorization'] = "gg"

export default {
    setToken : function (token) {
        axios.defaults.headers.common['Authorization'] = (token) ? "Bearer "+token : null;
    },

   isValidateToken: function() {
        return axios.defaults.headers.common['Authorization'];
    },

    invalidateToken: function() {
        delete axios.defaults.headers.common['Authorization'];
    }
}