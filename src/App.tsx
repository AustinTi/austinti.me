import React from 'react';
import './App.css';
import Div100vh from 'react-div-100vh'

function App() {
  return (
    <div className="App">
      <div className="background" />
      <Div100vh className="first">
        <h1>bark.</h1>
        <span className="arrow">⇩</span>
      </Div100vh>

      <Div100vh className="second">
        <div className="text">

          <div className="project">
            <img src="https://cdn.discordapp.com/avatars/504508062929911869/0f9262a088f168a8ba56b12d5e442c6f.png" height="100" className="pimg" alt="HolidayBot" />
            <p>
              <span><a href="https://github.com/AustinTi/HolidayBot" className="App-link"><b><u>HolidayBot</u></b></a></span>
              <br />
              <span>a discord bot created with DiscordGo that spits out real holidays that you may have never heard of before.</span>
            </p>
          </div>

          <div className="project">
            <img src="https://metagrab.austinti.me/logo.png" height="100" className="pimg" alt="MetaGrab" />
            <p>
              <span><a href="https://metagrab.austinti.me" className="App-link"><b><u>MetaGrab</u></b></a></span>
              <br />
              <span>a webapp that grabs Spotify's metadata for any track you'd like.</span>
            </p>
          </div>

          <div className="project">
            <img src="https://austin-serves-the.yiff.church/i/1lksz7b8.png" height="75" className="pimg" alt="United States (Reformed International)" />
            <p>
              <span><a href="https://github.com/AustinTi/US-Reformed-International" className="App-link"><b><u>United States (Reformed International)</u></b></a></span>
              <br />
              <span>a sensible version of the US-International keyboard layout with AltGr dead keys for Windows, Mac, and Linux.</span>
            </p>
          </div>

          <div className="project">
            <img src="https://austin-serves-the.yiff.church/i/6tlliugp.png" height="100" className="pimg" alt="austinti.me" />
            <p>
              <span><a href="https://github.com/AustinTi/austinti.me" className="App-link"><b><u>austinti.me</u></b></a></span>
              <br />
              <span>the very website you are viewing right now.</span>
            </p>
          </div>

          <span><i>and maybe more to come...</i></span>
        </div>

        <div className="foot">
          <a href="https://github.com/AustinTi" className="App-link">
            <img src="https://raw.githubusercontent.com/github/docs/main/assets/images/site/favicon.png" alt="GitHub" />
          </a>
          <span><b>-AustinTi :3</b></span>
        </div>
      </Div100vh>
    </div>
  );
}

export default App;
