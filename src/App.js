import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ListVideo from './components/ListVideo';
import Details1 from './components/Details1';
import Details2 from './components/Details2';
import Details3 from './components/Details3';
import Infor1 from './components/Infor1';
import Infor2 from './components/Infor2';
import Infor3 from './components/Infor3';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Buuh <code>learning</code> ReactJS .
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

      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <Router>
            <ListVideo
              name="Hoa Của Quỷ"
              image="https://static.fptplay.net/static/img/share/video/28_07_2020/hoa-cua-quy-vietsub-fpt-play-poster-128-07-2020_14g22-31.jpg?w=282&amp;mode=scale "
              video="blob:https://fptplay.vn/3cdd1b8d-19a4-4bdd-a87f-3ccc9d9274a4"
            />
            <p>
              <Link to="/details1" className="btn btn-primary">Details</Link>
              <Link to="/infor1" className="btn btn-info">Infor</Link>
              <Link to="/listvideo" className="btn btn-dark">Hide</Link>
            </p>
            <Route path="/details1" component={Details1}></Route>
            <Route path="/infor1" component={Infor1}></Route>
          </Router>
        </div>

        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <Router>
            <ListVideo
              name="Cẩm Túc Nam Ca"
              image="https://static.fptplay.net/static/img/share/video/24_07_2020/cam-tu-nam-ca-vietsub-fpt-play-poster24-07-2020_17g25-32.jpg?w=282&mode=scale"
              video="blob:https://fptplay.vn/921c0f79-439a-42b9-9d3a-aa9b8b08ca60"
            />
            <p>
              <Link to="/details2" className="btn btn-primary">Details</Link>
              <Link to="/infor2" className="btn btn-info">Infor</Link>
              <Link to="/listvideo" className="btn btn-dark">Hide</Link>
            </p>
            <Route path="/details2" component={Details2}></Route>
            <Route path="/infor2" component={Infor2}></Route>
          </Router>
        </div>

        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <Router>
            <ListVideo
              name="Thư Sinh Bóng Đêm"
              image="https://static.fptplay.net/static/img/share/video/24_06_2020/thusinhbongdem-poster24-06-2020_21g08-40.png?w=282&mode=scale"
              video="blob:https://fptplay.vn/24215901-6933-4fc7-92aa-46eb494af92b"
            />
            <p>
              <Link to="/details3" className="btn btn-primary">Details</Link>
              <Link to="/infor3" className="btn btn-info">Infor</Link>
              <Link to="/listvideo" className="btn btn-dark">Hide</Link>
            </p>
            <Route path="/details3" component={Details3}></Route>
            <Route path="/infor3" component={Infor3}></Route>
          </Router>
        </div>

      </div>
    </div>
  );
}

export default App;
