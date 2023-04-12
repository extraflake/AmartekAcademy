import axios from "axios";

axios.defaults.baseURL = "http://localhost:8088/api/"

const APIINTERVIEW = {
    getallInterview: () => {
        return axios.get( "interview" )
    },
    getById: ( id ) => {
        return axios.get( "interview/" + id )
    },

    putInterviewHr: ( id, time, hr_id ) => {
        return axios.put( "interview/hr" + id )
    },

    putInterviewTrainer: ( id ) => {
        return axios.put( "interview/trainer" + id )
    },

    getBiodatabyid: ( id ) => {
        return axios.get( "cv/biodata/" + id )
    },

    getUserAll: () => {
        return axios.get( "users" )
    }

}

export default APIINTERVIEW;