import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CariLowongan from "./components/page/user_management/cari_lowongan";
import Tentang from "./components/page/user_management/tentang";
import ArrangeInterview from "./components/page/ta/arrangeinterview";
// import HRInterview from "./components/page/hr/interview";
// import TrainerInterview from "./components/page/trainer/interview";

// ini untuk route url aplikasi
function App () {
	return (
		<Router>
			<Routes>
				<Route path="/" element={ <CariLowongan /> } />
				<Route path="/tentang" element={ <Tentang /> } />
				<Route path="/ta/arrangeInterview" element={ <ArrangeInterview /> } />
				{/* <Route path="/hr/ArrangeInterview" element={ <HRInterview /> } />  */ }
				{/* <Route path="/trainer/ArrangeInterview" element={ <TrainerInterview /> } /> */ }
			</Routes>
		</Router>
	);
}

export default App;
