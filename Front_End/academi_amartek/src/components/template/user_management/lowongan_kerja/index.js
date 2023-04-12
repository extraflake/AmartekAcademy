import Footer from "../footer";
import Navbar from "../navbar";
import "bootstrap";
import "./index.css";
import API from "../../../../services/jobVacancy";
import { useState, useEffect } from "react";

function LowonganKerja(props){

    const [dataJobById, setDataJobById] = useState(null);
    const [httpStatus, setHttpStatus] = useState(null);

    useEffect(() => {
		API.getJobById(1).then((response) => {
            setDataJobById(response.data);
        });		
		return () => {		
			setHttpStatus(null);
		}
	}, [httpStatus]);

    console.log(dataJobById);

    return (
        <div>
            <Navbar /> 
            <div className="lowongan">
                <img src="https://i.ibb.co/MZn1w9s/image0.jpg" alt="Gambar Lowongan Pekerjan" />            
                <p>{dataJobById.title_job}</p>
                <table>
                    <tr>
                        <td>Pendaftaran Ditutup</td>                     
                    </tr>
                    <tr>
                        <td>Lokasi</td>                        
                    </tr>
                    <tr>
                        <td>Open Date</td>                        
                    </tr>
                    <tr>
                        <td>Close Date</td>                        
                    </tr>
                </table>
            </div>           
            
            <Footer />
        </div>
    );
}

export default LowonganKerja;