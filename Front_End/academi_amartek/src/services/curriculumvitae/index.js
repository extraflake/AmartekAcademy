import axios from "axios";

axios.defaults.baseURL = "http://localhost:8088/api/";

// var userses;
// if (sessionStorage.getItem('userId') !== ""){
//     userId = sessionStorage.getItem('userId');
// } else {
//     userId = "USR001";
// }


const APICV = {
    
    getAllCv: (userId) => {
        return axios.get( "/cv/assemble/"+userId)
    },
    getBiodata: (userId ) => {
        return axios.get( "cv/biodata/"+userId)
    },
    getProject: (userId) => {
        return axios.get( "cv/project/"+userId)
    },
    getEducation: (userId) => {
        return axios.get( "cv/education/"+userId)
    },
    getUserSkill: (userId) => {
        return axios.get( "cv/userskill/"+userId)
    },
    getSkill: () => {
        return axios.get( "cv/skill" )
    },
    getDegree: () => {
        return axios.get( "cv/degree" )
    },
    getUniv: () => {
        return axios.get( "cv/univ" )
    },
    getMajor: () => {
        return axios.get( "cv/major" )
    },
    saveProject: ( userId, name, projectDesc, projectStart, projectEnd ) => {
        //let user = "USR001";
        return axios.post( "cv/project", {
            user: userId,
            name: name,
            projectStart: projectStart,
            projectEnd: projectEnd,
            projectDesc: projectDesc
        } );
    },
    saveEducation: (userId, univId, degreeId, majorId, gpa) => {
        //let user = "USR001";
        return axios.post("cv/education", {
            user: userId,
            univId: univId,
            degreeId: degreeId,
            majorId: majorId,
            gpa: gpa
        });

    },
    saveUserSkill: (userId, skillId) => {
        let user = "USR001";
        return axios.post("cv/userskill", {
            user: userId,
            skill: skillId
        })
    },
    updateProject: (id, data) => {
        return axios.put("cv/project/"+id, data);

    },
    updateEducation: (id, data) => {
        return axios.put("cv/education/"+id, data);
    },
    updateBiodata: (id, data) => {
        return axios.put("cv/biodata/"+id, data);
    },

    deleteProject: (id) =>{
        return axios.delete("cv/project/" + id)
    },
    deleteEducation: ( id ) => {
        return axios.delete( "cv/education/" + id )
    },
    deleteUserSkill: ( id ) => {
        return axios.delete( "cv/userskill/" + id )
    }

}

export default APICV;