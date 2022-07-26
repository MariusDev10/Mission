import React, { useState } from 'react';
import './styles/app.css';
import ReactDOM from 'react-dom';

import { HashRouter, Switch, Route, withRouter, Redirect } from 'react-router-dom';
// start the Stimulus application
import './bootstrap';
import Home from './js/pages/Home';
import Login from './js/pages/Login';
import Compte from './js/pages/Compte';
import Rapoort from './js/pages/Rapport';
import authAPI from './js/services/authAPI';
import Navbar from './js/components/Navbar';
import Acceuil from './js/pages/Acceuil';
import ListesMission from './js/pages/ListesMission';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import PrintPDF from './js/components/PrintPDF';
import PvReunion from './js/pages/PvReunion';
import ListePVR from './js/pages/ListePVR';
import PrintPVR from './js/components/PrintPVR';
import Profil from './js/pages/Profil';

authAPI.setup();
const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(authAPI.isAuthenticated);
    const NavbarWhiteRouter = withRouter(Navbar);
    return (

        <HashRouter>
            <NavbarWhiteRouter isAuthenticated={isAuthenticated} onLOgout={setIsAuthenticated} />
            <main className="container-fluid pt-1">
                <Switch>

                    <Route path='/login' render={props => <Login onLogin={setIsAuthenticated} {...props} />} />

                    /** ROUTE VERS L'IMPRESSION DES RAPPORTS DE MISSION */
                    <Route
                        path='/print/:id'
                        render={props => isAuthenticated ?
                            (<PrintPDF {...props} />
                            ) : (
                                <Redirect to='/login' />
                            )
                        }
                    />

                    /**ROUTE VERS LA LISTE DES PV REUNION EXISTANTS */
                    <Route
                        path='/ListePVR'
                        render={props => isAuthenticated ?
                            (<ListePVR {...props} />
                            ) : (
                                <Redirect to='/login' />
                            )
                        }
                    />

                    /**ROUTE VERS L'IMPRESSION DE PV REUNION */
                    <Route
                        path='/printPVR/:idR'
                        render={props => isAuthenticated ?
                            (<PrintPVR {...props} />
                            ) : (
                                <Redirect to='/login' />
                            )
                        }
                    />
                    /**ROUTE VERS LE PROFIL DE L'UTILISATEUR CONNECTE */
                    <Route
                        path='/profil'
                        render={props => isAuthenticated ?
                            (<Profil {...props} />
                            ) : (
                                <Redirect to='/login' />
                            )
                        }
                    />


                    <Route
                        path='/pvReunion/:idN'
                        render={props => isAuthenticated ?
                            (<PvReunion {...props} />
                            ) : (
                                <Redirect to='/login' />
                            )
                        }
                    />

                    /**PAGE D'ACCEUIL DE L'APPLICATION */
                    <Route
                        path='/home'
                        render={props => isAuthenticated ?
                            (<Home {...props} />
                            ) : (
                                <Redirect to='/login' />
                            )
                        }
                    />

                    /**ROUTE VERS LA LISTE DES RAPPORT DE MISSION EFFECTUES */
                    <Route
                        path='/Listes'
                        render={props => isAuthenticated ?
                            (<ListesMission {...props} />
                            ) : (
                                <Redirect to='/login' />
                            )
                        }
                    />

                    /**ROUTE VERS L'AJOUT DE NOUVELLE RAPPORT DE MISSION */
                    <Route
                        path='/rapport/:idM'
                        render={props => isAuthenticated ?
                            (<Rapoort {...props} />
                            ) : (
                                <Redirect to='/login' />
                            )
                        }
                    />
                    /**ROUTE VERS LA PAGE D'INSCRIPTION */
                    <Route path='/compte' component={Compte} />

                    /**route vers la page de bienvenue */
                    <Route path='/' component={Acceuil} />

                </Switch>
            </main>
            <ToastContainer position={toast.POSITION.TOP_RIGHT} />
        </HashRouter>
    );


};


const rootElement = document.querySelector('#app');
ReactDOM.render(<App />, rootElement);