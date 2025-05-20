// src/components/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Subscription from './Subscription';
import PaymentPage from './PaymentPage';
import PaymentOptions from './PaymentOptions';
import Profile from './Profile';
import Login from './Login';
import FanRankings from "../pages/FanRankings";
import PrankEpisodes from "../pages/PrankEpisodes";
import WatchEpisode from "../VideoPlayer/WatchEpisode";

const App = () => {
  return (
    <Routes>
      <Route path="Subscription" element={<Subscription />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="payment-options" element={<PaymentOptions />} />
      <Route path="Profile" element={<Profile />} />
      <Route path="login" element={<Login />} />
      <Route path="FanRankings" element={<FanRankings />} />
      <Route path='PrankEpisodes' element={<PrankEpisodes/>}/>
      <Route path='WatchEpisode' element={<WatchEpisode/>}/>
      
    </Routes>
  );
};

export default App;
