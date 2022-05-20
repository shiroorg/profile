import './style/style.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import SkyBlock from './modules/SkyBlock';

import logoPhp from './image/php.png';
import logoHtml from './image/html5.png';

// import reportWebVitals from './reportWebVitals';
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const root = ReactDOM.createRoot(document.getElementById('root'));

function tickShadow() {

    let shadowStatus = Boolean(Math.round(Math.random()));

    root.render(
        <React.StrictMode>
            <div className="container tick-position-1">
                <div className="row mt-3">
                    <div className="col-12 col-lg-12">
                        <SkyBlock logo={logoHtml} shadow={shadowStatus} block="html"/>
                    </div>
                    <div className="col-12 col-lg-12">
                        <SkyBlock logo={logoPhp} shadow={shadowStatus} block="php"/>
                    </div>
                </div>
            </div>
        </React.StrictMode>
    );
}

function updateTick() {

    if(window.tickPosition > 5) {
        window.tickPosition = 1;
    }

    document.getElementsByClassName('container')[0].className = 'container tick-position-'+window.tickPosition;

    window.tickPosition++;
}

window.tickPosition = 1;
setInterval(tickShadow, 1500);
setInterval(updateTick, 3333);
// setInterval(tickPositionY, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
