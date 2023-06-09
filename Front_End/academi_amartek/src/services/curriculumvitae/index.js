import axios from "axios";

axios.defaults.baseURL = "http://localhost:8088/api/"

const APICV = {
    getAllCv: () =>{
        return axios.get("/cv/assemble/USR001")
    },
    getBiodata: () =>{
        return axios.get("cv/biodata/USR001")
    },
    getProject: () =>{
        return axios.get("cv/project/USR001")
    },
    getEducation: () =>{
        return axios.get("cv/education/USR001")
    },
    getUserSkill: () =>{
        return axios.get("cv/userskill/USR001")
    },
    getSkill: () =>{
        return axios.get("cv/skill")
    },
    getDegree: () =>{
        return axios.get("cv/degree")
    },
    getUniv: () =>{
        return axios.get("cv/univ")
    },
    getMajor: () =>{
        return axios.get("cv/major")
    },
    saveProject: (name, projectDesc, projectStart, projectEnd) =>{
        return axios.post("cv/project", name, projectStart, projectEnd, projectDesc)
    },
    deleteProject: (id) =>{
        return axios.delete("cv/project/" + id)
    },
    deleteEducation: (id) =>{
        return axios.delete("cv/education/" + id)
    },
    deleteUserSkill: (id) =>{
        return axios.delete("cv/userskill/" + id)
    }
    
}

export default APICV;