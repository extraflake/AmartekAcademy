import axios from "axios"

axios.defaults.baseURL = "http://localhost:8088/api";

const SendRecruitment = {    
	saveRecruitment: (applicant, job) => {
		return axios.post("/recruitment", {			
            applicant : applicant,         
            job : job
		});
	},    	
};

export default SendRecruitment;