import React from "react";


//api key
const api = {
  key: "bd06f09ccccb674bc5846dc8fa0ab5dc",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    //get one day out of the days array
    let day = days[d.getDay()];
  
  }
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
        <div className=".location-box">
          <div className="location">New York City, US</div>
            <div className='date'>{dateBuilder(new Date())}</div>
        

        </div>
      </main>
    </div>
  );
}

export default App;
