import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CariLowongan from "./components/page/user_management/cari_lowongan";
import Tentang from "./components/page/user_management/tentang";

// ini untuk route url aplikasi
function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<CariLowongan />} />
				<Route path="/tentang" element={<Tentang />} />
			</Routes>
		</Router>
	);
}

export default App;
