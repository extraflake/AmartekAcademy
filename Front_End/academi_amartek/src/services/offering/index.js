import axios from "axios"

axios.defaults.baseURL = "http://localhost:8088/api";

const OFFERING = {
    getContoh: (id) => {
		return axios.put("recruitment/offering/" + id);
	},
}

export default OFFERING;