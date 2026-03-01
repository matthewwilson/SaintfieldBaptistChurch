import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SBC from './components/sbc/SBC.jsx';
import HomePage from './components/home/HomePage.jsx';
import AboutPage from './components/about/AboutPage.jsx';
import LivePage from './components/live/LivePage.jsx';
import SermonsPage from './components/sermons/SermonsPage.jsx';
import SermonSeriesPage from './components/sermons/SermonSeriesPage.jsx';
import SermonPage from './components/sermons/SermonPage.jsx';
import ContactPage from './components/contact/ContactPage.jsx';
import GivingPage from './components/giving/GivingPage.jsx';
import NotFoundPage from './components/not-found/NotFoundPage.jsx';

const ExternalRedirect = ({ to }) => {
  window.location.href = to;
  return null;
};

const App = () => (
  <BrowserRouter>
    <SBC>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about/*" element={<AboutPage />} />
        <Route path="/live" element={<LivePage />} />
        <Route path="/sermons" element={<SermonsPage />} />
        <Route path="/sermons/series/:title" element={<SermonSeriesPage />} />
        <Route path="/sermon/:sermonId/:title" element={<SermonPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/giving" element={<GivingPage />} />
        <Route path="/consent" element={<ExternalRedirect to="https://forms.gle/Uu21ADNG8Ddznm7DA" />} />
        <Route path="/hbc" element={<ExternalRedirect to="https://forms.gle/sLyqc8vLZdAYhsAh8" />} />
        <Route path="/s4c" element={<ExternalRedirect to="https://forms.gle/LGJWhhwdfzdz8joW8" />} />
        <Route path="/bc" element={<ExternalRedirect to="https://forms.gle/k7UjoYDYywCTLmSX6" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </SBC>
  </BrowserRouter>
);

export default App;
