import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import SBC from './components/sbc/SBC'
import HomePage from './components/home/HomePage'
import AboutPage from './components/about/AboutPage';
import MeetingsPage from './components/meetings/MeetingsPage';
import BulletinPage from './components/bulletin/BulletinPage'

const Index = () => (
  <BrowserRouter>
    <SBC>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/about" component={AboutPage}/>
      <Route exact path="/meetings" component={MeetingsPage}/>
      <Route exact path="/bulletin" component={BulletinPage}/>
    </SBC>
  </BrowserRouter>
)

ReactDOM.render(<Index />, document.getElementById('root'));
