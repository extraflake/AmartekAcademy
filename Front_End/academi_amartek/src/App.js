import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import CariLowongan from "./components/page/user_management/cari_lowongan";
import Tentang from "./components/page/user_management/tentang";
import ArrangeInterview from "./components/page/ta/arrangeinterview";
import InterviewhrPage from "./components/page/hr/interview";
import JobVacancy from "./components/template/user_management/job-vacancy";
import Register from "./components/page/user_management/register";
import Dashboard from "./components/page/dashboard";
import { useEffect, useState } from "react";
import CurriculumVitae from "./components/template/curriculumvitae";
import CurriculumVitaeCetak from "./components/template/curriculumvitae/cetakcv";
import APIINTERVIEW from "./services/arrangeinterview"
import readCV from "./components/template/curriculumvitae/readCV";
// ini untuk route url aplikasi
function App () {
  let navigate = useNavigate();
  const [ infoLogin, setInfoLogin ] = useState();
  const [ isLoggedIn, setIsLoggedIn ] = useState( [] );
  const [ id, setId ] = useState();
  const [ getRoles, setRoles ] = useState();

  useEffect( () => {
    setInfoLogin( sessionStorage.getItem( "token" ) );
    setIsLoggedIn( sessionStorage.getItem( "isLoggedIn" ) );
    if ( !isLoggedIn )
    {
      sessionStorage.getItem( "isLoggedIn" )
    } else if ( isLoggedIn )
    {
      setId( sessionStorage.getItem( "userId" ) );
      APIINTERVIEW.userbyId( id ).then( ( res ) => {
        setRoles( res.data.role.name );
      } )
    }

  } );

  const Role = () => {
    switch ( getRoles )
    {

      case "HR": return (
        < Routes >
          <Route path="/" element={ <InterviewhrPage /> } />
          <Route path="/cv/applicant/userId" element={ <readCV /> } />
        </Routes>


      );

      case "TA": return (
        < Routes >
          <Route path="/" element={ <ArrangeInterview /> } />
          <Route path="/cv/applicant/userId" element={ <readCV /> } />
        </Routes>
      );
      case "Trainer": return (
        < Routes >
          <Route path="/cv/applicant/userId" element={ <readCV /> } />
          <Route path="/interview/hr" element={ <InterviewhrPage /> } />

        </Routes>
      );

      default: return (
        < Routes >
          <Route exact path="/" element={ <Tentang /> } />
          <Route path="/find-job" element={ <CariLowongan /> } />
          <Route path="/job-vacancy/:id" element={ <JobVacancy /> } />
          <Route path="/cv" element={ <CurriculumVitae /> } />
          <Route path="/cv/print/:userId" element={ <CurriculumVitaeCetak /> } />
          <Route path="/interview/ta" element={ <ArrangeInterview /> } />
          <Route path="/interview/hr" element={ <InterviewhrPage /> } />
          <Route path="/tentang" element={ <Tentang /> } />

        </Routes>

      )
    }
  }

  return (
    <div>
      { isLoggedIn ? (


        Role()

      ) : (

        //ROUTE BELOM LOGIN
        <Routes>
          <Route exact path="/" element={ <Tentang /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/find-job" element={ <CariLowongan /> } />
          <Route path="/about" element={ <Tentang /> } />
        </Routes>
      )
      }
    </div >

  );
}

export default App;