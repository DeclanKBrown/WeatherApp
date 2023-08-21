import API from './api'

export default class UI {
    static loadHome() {
        UI.loadContent()
        API.get('Melbourne')
    }

    static loadContent() {
        document.body.innerHTML = `
        <header>
            <div class="logo">
                <h1>Wthr</h1>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M4,10A1,1 0 0,1 3,9A1,1 0 0,1 4,8H12A2,2 0 0,0 14,6A2,2 0 0,0 12,4C11.45,4 10.95,4.22 10.59,4.59C10.2,5 9.56,5 9.17,4.59C8.78,4.2 8.78,3.56 9.17,3.17C9.9,2.45 10.9,2 12,2A4,4 0 0,1 16,6A4,4 0 0,1 12,10H4M19,12A1,1 0 0,0 20,11A1,1 0 0,0 19,10C18.72,10 18.47,10.11 18.29,10.29C17.9,10.68 17.27,10.68 16.88,10.29C16.5,9.9 16.5,9.27 16.88,8.88C17.42,8.34 18.17,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H5A1,1 0 0,1 4,13A1,1 0 0,1 5,12H19M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z" />
                </svg>
            </div>
            <div class="nav">
                <input id="search" type="text">
                <button class="conv" id="celcius">&degC, kmh</button>
                <button class="conv" id="fahrenheit">&degF, mph</button>
            </div>
        </header>
        <main>
            <div class="main-inner">
                <div class="primary-info">
                    <h2 id="location"></h2>
                    <span id="time"></span>
                    <div class="temp">
                        <div class="symbol">
                        </div>
                        <div class="temperature">
                            <h1 id="temp"></h1>
                        </div>
                    </div>
                    <span id="temp-info"></span>
                    <span id="feels-like"></span>
                    <span id="temp-desc"></span>
                </div>
                <div class="secondary-info">
                    <div class="sec-info" id="wind">
                        <span>Wind</span>
                        <h3></h3>
                    </div>
                    <div class="sec-info" id="humidity">
                        <span>Humidity</span>
                        <h3></h3>
                    </div>
                    <div class="sec-info" id="uv-index">
                        <span>UV Index</span>
                        <h3></h3>
                    </div>
                    <div class="sec-info" id="visibility">
                        <span>Visibility</span>
                        <h3></h3>
                    </div>
                    <div class="sec-info" id="cloudiness">
                        <span>Cloudiness</span>
                        <h3></h3>
                    </div>
                    <div class="sec-info" id="chance-of-rain">
                        <span>Chance of Rain</span>
                        <h3></h3>
                    </div>
                    <div class="sec-info" id="sunrise">
                        <span>Sunrise</span>
                        <h3></h3>
                    </div>
                    <div class="sec-info" id="sunset">
                        <span>Sunset</span>
                        <h3></h3>
                    </div>
                    <div class="sec-info" id="phase">
                        <span>Moon Phase</span>
                    </div>
                </div>
            </div>
        </main>
        <footer>
            <span>Copyright © 2023 Declankb</span>
            <a href='https://github.com/DeclanKBrown' target='_blank' rel='noopener noreferrer'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                    <path d='M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z' />
                </svg>
            </a>
        </footer>`
    }

}