import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ListVideo from './components/ListVideo';

function App() {

 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Header></Header>
      
      <div class="row">
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <ListVideo
          name="Captain America"
          image="https://static.fptplay.net/static/img/share/video/06_05_2017/captain_america_the_first_avenger_poster06-05-2017_17g07-45.jpg?w=282&mode=scale&fmt=webp"
        />          
        </div>
        
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <ListVideo
          name="Cẩm Túc Nam Ca"
          image="https://static.fptplay.net/static/img/share/video/24_07_2020/cam-tu-nam-ca-vietsub-fpt-play-poster24-07-2020_17g25-32.jpg?w=282&mode=scale"
        />  
        </div>

        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <ListVideo
          name="Thư Sinh Bóng Đêm"
          image="https://static.fptplay.net/static/img/share/video/24_06_2020/thusinhbongdem-poster24-06-2020_21g08-40.png?w=282&mode=scale"
        />  
        </div>

      </div>
    </div>
  );
}

export default App;
