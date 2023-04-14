import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import CariLowongan from "./components/page/user_management/cari_lowongan";
import Tentang from "./components/page/user_management/tentang";
import ArrangeInterview from "./components/page/ta/arrangeinterview";
import InterviewhrPage from "./components/page/hr/Interview";
import InterviewtrainerPage from "./components/page/trainer/Interview"
// import TrainerInterview from "./components/page/trainer/interview";
import LowonganKerja from "./components/template/user_management/job-vacancy";
import JobVacancy from "./components/template/user_management/job-vacancy";
import Register from "./components/page/user_management/register";
import Dashboard from "./components/page/dashboard";
import CurriculumVitaeRead from "./components/template/curriculumvitae/readCV";
import { useEffect, useState } from "react";

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
          <Route path="/cari-lowongan" element={ <CariLowongan /> } />
          {/* <Route path="/lowongan-kerja" element={<LowonganKerja/>} /> */ }
          <Route path="/interview/ta" element={ <ArrangeInterview /> } />
          <Route path="/interview/hr" element={ <InterviewhrPage /> } />

        </Routes>
      ) : (
        //ROUTE BELOM LOGIN
        <Routes>
          <Route exact path="/" element={ <Tentang /> } />
          <Route path="/job-vacancy/:id" element={ <JobVacancy /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/find-job" element={ <CariLowongan /> } />
          <Route path="/job-vacancy" element={ <LowonganKerja /> } />
          <Route path="/about" element={ <Tentang /> } />
          <Route path="/interview/ta" element={ <ArrangeInterview /> } />
          <Route path="/interview/trainer" element={ <InterviewtrainerPage /> } />

          {/* <Route path="/interview/hr" element={ <InterviewhrPage /> } /> */ }
           {/* <Route path="/cv/" element={ <CurriculumVitae /> } />
          <Route path="/cv/print" element={ <CurriculumVitaeCetak /> } />  */}
          <Route path="/cv/applicant/:id" element={ <CurriculumVitaeRead /> } /> 

          <Route path="/interview/hr" element={ <InterviewhrPage /> } />
          {/* <Route path="/trainer/ArrangeInterview" element={ <TrainerInterview /> } /> */ }
        </Routes>
      ) }
    </div>

  );
}

export default App;