import React, { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import APIAUTH from "../services/auth/index"
import Swal from "sweetalert2";
import jwtDecode from "jwt-decode"

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  let navigate = useNavigate();

  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });

  const [dataRegister, setDataRegister] = useState({
    email: "",
    password: "",
    fullname: "",
    birthdate: "",
    reTypePassword: "",
    noTelp: "",
    univ: "",
    major: "",
  });

  const [errorString, setErrorString] = useState();

  const loginHandleChange = (e) => {
    const newData = { ...dataLogin };
    newData[e.target.id] = e.target.value;
    // console.log(newData)
    setDataLogin(newData);
  };

  const registerHandleChange = (e) => {
    const newData = { ...dataRegister };
    newData[e.target.id] = e.target.value;
    console.log(newData)
    setDataRegister(newData);
  }


  const loginHandleSubmit = async (e) => {
    e.preventDefault();
    await APIAUTH.login(dataLogin.email, dataLogin.password).then((res) => {
      if (res.data.statusCode === 200) {
        const token = res.data.data; //cara getbyid yg lg login
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("isLoggedIn", true);
        const decodedValue = jwtDecode(token)
        if (decodedValue.role_id.id === 1) {
          //Masukin kondisi untuk route atau yang lainnya
          navigate(`/cari-lowongan`)
          // window.location.reload();

        }
        if (decodedValue.role_id.id === 2) {
          //Masukin kondisi untuk route atau yang lainnya
          // navigate(`/`)
          window.location.reload();

        }
        if (decodedValue.role_id.id === 3) {
          //Masukin kondisi untuk route atau yang lainnya
          // navigate(`/`)
          window.location.reload();

        }
        if (decodedValue.role_id.id === 4) {
          //Masukin kondisi untuk route atau yang lainnya

        }
        // console.log(decodedValue.role_id.id)
        // buat kondisi untuk dapetin role
        // kondisinya ada 4 hr, user, tallent accuisision, trainer
        // navigate("/cari-lowongan");
        window.location.reload();
      } else {
        Swal.fire({
          title: "Error",
          text: res.data.message,
          timer: 3000
        })

      }
      // alert(res.data.message)
    })
    // .catch((e)=>{console.log(e.message)})
  };

  const registerHandleSubmit = async (e) => {
    e.preventDefault();
    await APIAUTH.register(
      dataRegister.email,
      dataRegister.password,
      dataRegister.reTypePassword,
      dataRegister.fullname,
      dataRegister.birthdate,
      dataRegister.noTelp,
      dataRegister.univ,
      dataRegister.major
    ).then((res) => {
      console.log(res)
      if (res.data.statusCode === 200) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Akun berhasil di daftarkan silahkan login",
          timer: 3000
        })
        // alert("Berhasil Membuat Akun Silahkan login");
        navigate("/");
        // window.location.reload();
      } else {
        Swal.fire({
          title: "Error",
          text: res.data.message,
          timer: 3000
        })
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
        registerHandleChange,
        registerHandleSubmit
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
