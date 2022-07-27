import React from "react";
import '../../styles/app.css';
import logo from '../../image/republique.jpg';
import photos from '../../image/user.webp';
import Field from "../components/Forms/Field";
const Profil = () => {
    return (
        <>
            <div className="container mt-5" style={{ height: '68vh' }}>
                <div className="container" id="profil">
                    <div className="photos">
                        <img src={photos} className='img-fluid' style={{ width: '4cm' }} />
                    </div>
                    <div className="name">
                        <h3>RANDRIANARISON</h3>
                        <p>Jacquit Marius</p>

                    </div> <hr />
                    <div className="autre">
                        <h6>POSTE : <b style={{ color: 'green' }}>Developpeur</b>  </h6>
                        <h6>DIRECTION : <b>DSI</b></h6>
                        <h6>Adresse Email</h6><hr />
                        <i>Connecté</i>
                    </div>
                </div>
                <div className="container" style={{ float: 'left', width: '60%', textAlign: 'center' }}>
                    <img src={logo} alt="" />

                </div>
            </div>
            <footer style={{ height: '1.5cm', backgroundColor: ' #20bcaf', marginTop: '1.3cm', textAlign: 'center' }}>
                <p style={{ fontSize: '0.7em', color: 'white', paddingTop: '0.5cm' }}>Ministere de l'enseignement Technique et de Formation Professionnelle Copyright 2022</p>
            </footer>
        </>
    );
}

export default Profil;