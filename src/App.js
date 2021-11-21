import React from "react";
import Background from "./components/background";
import {Globalstyle} from './globalstyles'
import Main from "./components/Main";

function App() {

  const baseurl = 'http://api.weatherapi.com/v1/current.json?key=${key}&q=London&aqi=no'
  const key = '2369b60cfbbf472d92a192549210910'

  return (
    <div className="App">
      <Globalstyle />
      {/* <Background /> */}
      <Main />
    </div>
  );
}

export default App;
