import axios from "axios";

axios.defaults.baseURL = "http://localhost:8088/api/";

const APIINTERVIEW = {
  getallInterview: () => {
    return axios.get( "interview" );
  },
  getById: ( id ) => {
    return axios.get( "interview/" + id );
  },

  putInterviewHr: ( id, selectedDate, url, hr_id ) => {
    return axios.put( "interview/hr/" + id, {
      dateInterviewHr: selectedDate,
      url: url,
      hr_id: hr_id,
    } );
  },
  putInterviewHrstatus: ( id, statushr ) => {
    return axios.put( "interview/hr/" + id, {
      statusHr: statushr,
    } );
  },
  putInterviewTrainerstatus: ( id, statusTrainer ) => {
    return axios.put( "interview/hr/" + id, {
      statusTrainer: statusTrainer,
    } );
  },

  putInterviewTrainer: ( id, selectedDate, url, trainer_id ) => {
    return axios.put( "interview/trainer/" + id, {
      dateInterviewTrainer: selectedDate,
      url: url,
      trainer_id: trainer_id,
    } );
  },

  getBiodatabyid: ( id ) => {
    return axios.get( "cv/biodata/" + id );
  },

  getUserAll: () => {
    return axios.get( "usersx" );
  },
};

export default APIINTERVIEW;
