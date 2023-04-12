import axios from "axios"

axios.defaults.baseURL = "http://localhost:8088/api";

const API = {
    getAllJob: () => {
        return axios.get("/job")
    },
    getJobById: (id) => {
		return axios.get("/job/" + id);
	},
	saveJob: (title, location, openDate, closeDate, desc, require, benefit) => {
		return axios.post("/job", {
			title,
            location,
            openDate, 
            closeDate, 
            desc, 
            require, 
            benefit
		});
	},    
	updateEmployee: (id, data) => {
		return axios.put("/job/" + id, data);
	},
	deleteEmployeeById: (id) => {
		return axios.delete("/job/" + id);
	},
};

export default API;