import './style/style.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import SkyBlock from './modules/SkyBlock';

import logoHtml from './image/html5.png';

// import reportWebVitals from './reportWebVitals';
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const root = ReactDOM.createRoot(document.getElementById('root'));

function tickShadow() {

    let shadowStatus = Boolean(Math.round(Math.random()));

    root.render(
        <React.StrictMode>
            <SkyBlock logo={logoHtml} shadow={shadowStatus}/>
        </React.StrictMode>
    );
}

function tickPositionX() {
    window.tickPositionX = (window.tickPositionX === 1 ? 30 : 1);
    updateTick();
}
function tickPositionY() {
    window.tickPositionY = (window.tickPositionY === 1 ? 15 : 1);
    updateTick();
}


function updateTick() {
    document.getElementsByClassName('skyblock')[0].className = 'skyblock shadow ts-3 translate-X'+window.tickPositionX + ' translate-Y'+window.tickPositionY;
}

window.tickPositionX = 1;
window.tickPositionY = 1;
setInterval(tickShadow, 1500);
setInterval(tickPositionX, 3333);
// setInterval(tickPositionY, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
