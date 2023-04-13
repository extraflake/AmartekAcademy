import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CariLowongan from "./components/page/user_management/cari_lowongan";
import Tentang from "./components/page/user_management/tentang";
import ArrangeInterview from "./components/page/ta/arrangeinterview";
// import HRInterview from "./components/page/hr/interview";
// import TrainerInterview from "./components/page/trainer/interview";
import JobVacancy from "./components/template/user_management/job-vacancy";
import React from "react";

// ini untuk route url aplikasi
function App () {
	return (
		<Router>
			<Routes>
				<Route path="/" element={ <CariLowongan /> } />
				{/* :id parameter untuk custom link untuk get data parameter dari url -> ./components/template/user_management/job-vacancy */}
				<Route path="/user_management/job-vacancy/:id" element={<JobVacancy />} />
				<Route path="/about" element={ <Tentang /> } />
				<Route path="/ta/arrangeInterview" element={ <ArrangeInterview /> } />
				{/* <Route path="/hr/ArrangeInterview" element={ <HRInterview /> } />  */ }
				{/* <Route path="/trainer/ArrangeInterview" element={ <TrainerInterview /> } /> */ }
			</Routes>
		</Router>
	);
}

export default App;