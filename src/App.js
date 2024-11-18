import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);

  const handleExploreClick = () => {
    setShowWelcomeScreen(false);
  };







  return (
    <div className="App">
      {showWelcomeScreen ? (
        <div className="WelcomeScreen">
          
          <div className="HeaderContainerbody1">
            <header className="Header"></header>
            <header className="Header2"></header>
            <header className="Header3"></header>
          </div>

          <div className="Body1">
            <div className="image-line-text-container">
              <div className="ImageContainer">
                <img src="/imagenbody1.png" alt="Imagen" />
              </div>
              <div className="line2"></div>
              <div className="text-container">
                <h1 className="SICRP">SICRP</h1>
                <div className="line1"></div>
                <p className="p">SISTEMA INTEGRADO DE CONTROL DE RECORRIDOS DE LA POLICIA</p>
                <div className="cajatext">
                  <input type="text" placeholder="ID PATRULLA" />
                  <input type="text" placeholder="CUADRANTE" />
                </div>
                <div className="cajaingresar">
                  <button className="boton-ingresar" onClick="">INGRESAR</button>
                </div>
              </div>
            </div>

            <img src="/logo1.png" alt="Logo" className="logoesquina" />
          </div>




          <div className="HeaderContainerbody2">
            <header className="Header"></header>
            <header className="Header2"></header>
            <header className="Header3"></header>
          </div>

          <div className="Body2">
          </div>

          <div className="contenedorbody2">
            <div className="lateralI">
              <p className="p2">
                <img src="/casa.png" alt="casa"/> INICIO
              </p>
              <p className="p2">
                <img src="/casa.png" alt="casa"/> REPORTE CUADRANTE
              </p>
              <p className="p2">
                <img src="/casa.png" alt="casa"/> CUADRANTES
              </p>
              <p className="p2">
                <img src="/casa.png" alt="casa"/> PATRULLAS
              </p>
            </div>
            <img src="/logo1.png" alt="Logo" className="logoesquina2" />
            <div className="lateralD">
              <div className="ImageContainer">
                <img src="/imagenbody1.png" alt="Imagen" />
              </div>
            </div>
          </div>


          <div className="HeaderContainerbody3">
            <header className="Header"></header>
            <header className="Header2"></header>
            <header className="Header3"></header>
          </div>

          <div className="Body3">
            <div className="contenedorbody3">
              <div className="lateralI2">
                <p className="p2">
                  <img src="/casa.png" alt="casa" /> INICIO
                </p>
                <p className="p4">
                  <img src="/casa.png" alt="casa" /> REPORTE CUADRANTE
                </p>
                <p className="p2">
                  <img src="/casa.png" alt="casa" /> CUADRANTES
                </p>
                <p className="p2">
                  <img src="/casa.png" alt="casa" /> PATRULLAS
                </p>
              </div>
              <img src="/logo1.png" alt="Logo" className="logoesquina3" />
              <div className="lateralD3">
                <div className="contenedor-imagen-tabla">
                  <img src="/imagenbody1.png" alt="Imagen" className="imagen-fondo" />
                  <table className="tabla-sobre-imagen">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>PATRULLA</th>
                        <th>CUADRANTE</th>
                        <th>UBICACIÓN</th>
                        <th>RECORRIDO</th>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                      </tr>
                    </thead>
                    <tbody>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>



          <div className="HeaderContainerbody4">
            <header className="Header"></header>
            <header className="Header2"></header>
            <header className="Header3"></header>
          </div>

          <div className="Body4">
            <div className="mainContent">
              <div className="body4div">
                <img src="/imagenbody1.png" alt="Imagen" className="body4img" />
                <div className="line2body4"></div>
                <p className="p3">ESCANEAR QR</p>
              </div>

              <img src="/logo1.png" alt="Logo" className="logoesquina4" />
            </div>
          </div>
          </div>











      ) : (
        <div className="MainContent">
          <div className="Header">
          </div>
          <div className="Body">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edita <code>src/App.js</code> y guarda para recargar.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aprende más
              </a>
            </header>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
