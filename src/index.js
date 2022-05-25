import './style/style.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import SkyBlock from './modules/SkyBlock';
import BIRDS from 'vanta/dist/vanta.birds.min'

import logoJs from './image/js.jpg';
import logoPhp from './image/php.png';
import logoHtml from './image/html5.png';

// import reportWebVitals from './reportWebVitals';
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const root = ReactDOM.createRoot(document.getElementById('root'));

function tickShadow() {

    let shadowStatus = Boolean(Math.round(Math.random()));

    root.render(
        <React.StrictMode>
            <div id="page-profile" className="container tick-position-1">
                <div className="row">
                    <div className="profile col-6 col-lg-6 mt-3">
                        <div className="mt-5 pt-5">
                            <h2>Dmitry Kremezion</h2>
                            <h6>WEB Developer</h6>
                        </div>
                    </div>
                    <div className="col-6 col-lg-6 mt-3">
                        <div className="col-12 col-lg-12">
                            <SkyBlock logo={logoHtml} shadow={shadowStatus} block="html"/>
                        </div>
                        <div className="col-12 col-lg-12">
                            <SkyBlock logo={logoPhp} shadow={shadowStatus} block="php"/>
                        </div>
                        <div className="col-12 col-lg-12">
                            <SkyBlock logo={logoJs} shadow={shadowStatus} block="js"/>
                        </div>
                    </div>
                    <div className="col-12 col-lg-12 mt-3 white-block">
                        <h4 className="">Hi, My name is <span className="btn btn-danger">Dmitry Kremezion</span></h4>
                        <div className="btn btn-dark">Backend</div>
                        <div className="btn btn-light m-2">Frontend</div>
                        <p>
                            I have been a PHP developer since 2013. I have been working on server programming (big data, cluster programming, high load). From 2015 i have been working on a back-end development for mobile app. I have also been working on design for the mobile app
                        </p>
                    </div>
                </div>
            </div>
        </React.StrictMode>
    );
}

tickShadow();

function updateTick() {

    if(window.tickPosition > 5) {
        window.tickPosition = 1;
    }

    document.getElementsByClassName('container')[0].className = 'container tick-position-'+window.tickPosition;

    window.tickPosition++;
}

window.tickPosition = 1;
setInterval(tickShadow, 1500);
// setInterval(updateTick, 3333);
// setInterval(tickPositionY, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
