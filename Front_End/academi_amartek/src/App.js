import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import CariLowongan from "./components/page/user_management/cari_lowongan";
import Tentang from "./components/page/user_management/tentang";
import ArrangeInterview from "./components/page/ta/arrangeinterview";
import InterviewhrPage from "./components/page/hr/Interview";;
// import JobVacancy from "./components/template/user_management/job-vacancy";
import Register from "./components/page/user_management/register";
// import Dashboard from "./components/page/dashboard";
import { useEffect, useState } from "react";
import CurriculumVitae from "./components/template/curriculumvitae";
import CurriculumVitaeCetak from "./components/template/curriculumvitae/cetakcv";
import JobVacancy from "./components/template/user_management/job-vacancy";

// ini untuk route url aplikasi
function App () {  
  let navigate = useNavigate();
  const [ infoLogin, setInfoLogin ] = useState();
  const [ isLoggedIn, setIsLoggedIn ] = useState( [] );  
  useEffect( () => {
    setInfoLogin( sessionStorage.getItem( "token" ) );
    setIsLoggedIn( sessionStorage.getItem( "isLoggedIn" ) );
    if ( !isLoggedIn )
    {
      sessionStorage.getItem( "isLoggedIn" )
    }
  } );
  return (
    <div>
      { isLoggedIn ? (
        //ROUTE PAS UDAH LOGIN 
      <Routes>
        <Route exact path="/" element={<Tentang />} />
        <Route path="/cari-lowongan" element={<CariLowongan/>} />
        <Route path="/job-vacancy/:id" element={<JobVacancy />} />
        <Route path="/cv" element={ <CurriculumVitae/> } />
        <Route path="/cv/print" element={ <CurriculumVitaeCetak/>} />
        <Route path="/interview/ta" element={<ArrangeInterview />} />
        <Route path="/interview/hr" element={ <InterviewhrPage />}/>        
      </Routes>
      ) : (
        //ROUTE BELOM LOGIN
      <Routes>
        <Route exact path="/" element={<Tentang />} />
        <Route path="/register" element={<Register />} />
        <Route path="/find-job" element={<CariLowongan />} />
        <Route path="/about" element={<Tentang />} />
      </Routes>
      )}
    </div>

  );
}

export default App;