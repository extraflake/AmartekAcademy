import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/api/";

const APIAUTH = {
  login: (email, password) => {
    return axios.post("auth/login", { email, password });
  },

  register: (
    email,
    password,
    reTypePassword,
    fullname,
    birthdate,
    noTelp,
    univ,
    major
  ) => {
    return axios.post("auth/register", {
      email,
      password,
      reTypePassword,
      fullname,
      birthdate,
      noTelp,
      univ,
      major,
    });
  },
};

export default APIAUTH;
