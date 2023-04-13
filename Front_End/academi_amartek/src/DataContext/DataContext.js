import React, { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import APIAUTH from "../services/auth/index"

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  let navigate = useNavigate();
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });
  const [dataRegister, setDataRegister]= useState({
    email: "",
    password: "",
    fullname: "",
    birthdate: "",
    retypepassword: "",
    noTelp: "",
    universitas: "",
    jurusan: "",
  });

  const [errorString, setErrorString] = useState();

  const loginHandleChange = (e) => {
    const newData = { ...dataLogin };
    newData[e.target.id] = e.target.value;
    // console.log(newData)
    setDataLogin(newData);
  };

  const registerHandleChange =(e) => {
    const newData = {...dataRegister};
    newData[e.target.id] = e.target.value;
    //console.log(newData)
    setDataRegister(newData);
  }


  const loginHandleSubmit = async (e) => {
    e.preventDefault();
    await APIAUTH.login(dataLogin.email, dataLogin.password).then((res)=>{
      if(res.data.statusCode === 200){
        const token = res.data.data;
          sessionStorage.setItem("token", token);
          sessionStorage.setItem("isLoggedIn", true);
          //buat kondisi untuk dapetin role
          //kondisinya ada 4 hr, user, tallent accuisision, trainer
          navigate("/cari-lowongan");
          window.location.reload();
      }
      // alert(res.data.message)
    })
    // .catch((e)=>{console.log(e.message)})
  };

  const registerHandleSubmit = async (e) => {
    e.preventDefault();
    await APIAUTH.register(dataRegister).then((res)=>{
      if(res.data.statusCode === 201){
        const token = res.data.data;
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("isLoggedIn", true);
        navigate("/cari-lowongan");
        window.location.reload();
      }
      // alert(res.data.message)
    })
    // .catch((e)=>{console.log(e.message)})
  };

  return (
    <DataContext.Provider
      value={{
        loginHandleChange,
        loginHandleSubmit,
        errorString,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
