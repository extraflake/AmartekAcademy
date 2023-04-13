import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CariLowongan from "./components/page/user_management/cari_lowongan";
import Tentang from "./components/page/user_management/tentang";
import ArrangeInterview from "./components/page/ta/arrangeinterview";
// import HRInterview from "./components/page/hr/interview";
// import TrainerInterview from "./components/page/trainer/interview";
import LowonganKerja from "./components/template/user_management/lowongan_kerja";
import CurriculumVitaeCetak from "./components/template/curriculumvitae/cetakcv";
import CurriculumVitae from "./components/template/curriculumvitae";

// ini untuk route url aplikasi
function App () {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={ <CurriculumVitae/> } />
				<Route path="/find-job" element={ <CariLowongan /> } />
				<Route path="/job-vacancy" element={<LowonganKerja />} />
				<Route path="/about" element={ <Tentang /> } />
				<Route path="/ta/arrangeInterview" element={ <ArrangeInterview /> } />
				<Route path="/cetakcv" element={ <CurriculumVitaeCetak/>} />
				{/* <Route path="/hr/ArrangeInterview" element={ <HRInterview /> } />  */ }
				{/* <Route path="/trainer/ArrangeInterview" element={ <TrainerInterview /> } /> */ }
			</Routes>
		</Router>
	);
}

export default App;
