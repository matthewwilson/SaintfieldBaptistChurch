import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import SBC from './components/sbc/SBC'
import HomePage from './components/home/HomePage'
import AboutPage from './components/about/AboutPage';
import MeetingsPage from './components/meetings/MeetingsPage';
import LivePage from './components/live/LivePage';
import SermonsPage from './components/sermons/SermonsPage'
import ContactPage from './components/contact/ContactPage'

const Index = () => (
  <BrowserRouter>
    <SBC>
      <Route exact path="/" component={HomePage}/>
      <Route path="/about" component={AboutPage}/>
      <Route path="/meetings" component={MeetingsPage}/>
      <Route path="/live" component={LivePage}/>
      <Route path="/sermons" component={SermonsPage}/>
      <Route path="/contact" component={ContactPage}/>
    </SBC>
  </BrowserRouter>
)

ReactDOM.render(<Index />, document.getElementById('root'));
