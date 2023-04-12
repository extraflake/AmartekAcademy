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
        return axios.put( "interview/hr" + id, {
            dateInterviewHr: time,
            hr_id: hr_id
        } )
    },

    putInterviewTrainer: ( id, time, trainer_id ) => {
        return axios.put( "interview/trainer" + id, {
            id: id,
            dateInterviewHr: time,
            trainer_id: trainer_id
        } )
    },

    getBiodatabyid: ( id ) => {
        return axios.get( "cv/biodata/" + id )
    },

    getUserAll: () => {
        return axios.get( "users" )
    }

}

export default APIINTERVIEW;