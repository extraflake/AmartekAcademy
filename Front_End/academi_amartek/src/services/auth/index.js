import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/api/";

const APIAUTH = {
  login: (email, password) => {
    return axios.post("auth/login", { email, password });
  },

  register: (
    email,
    password,
    fullname,
    birthdate,
    retypepassword,
    noTelp,
    universitas,
    jurusan
  ) => {
    return axios.post("auth/register", {
      email,
      password,
      fullname,
      birthdate,
      retypepassword,
      noTelp,
      universitas,
      jurusan,
    });
  },
};

export default APIAUTH;
