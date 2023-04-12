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
        let user = "USR001";
        return axios.post("cv/project", {
           user: user, 
            name: name,
            projectStart: projectStart, 
            projectEnd: projectEnd, 
            projectDesc: projectDesc});
    },
    saveEducation: (degreeId, univId, majorId, gpa) => {
        let user = "USR001";
        return axios.post("cv/education", {
            user: user,
            univId: univId,
            majorId: majorId,
            degreeId: degreeId,
            gpa: gpa
        });

    },
    saveUserSkill: (skillId) => {
        let user = "USR001";
        return axios.post("cv/userskill", {
            user: user,
            skill: skillId
        })
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