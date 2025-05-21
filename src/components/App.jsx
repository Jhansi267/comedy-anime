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
import History  from './History';
import Downloads from './Downloads';
import AccountSetting from './Accountsetting';
import WatchEpisode from "../VideoPlayer/WatchEpisode";
import  Home from '../pages/Home';
import AllPrankEpisodes from '../categories/AllPrankEpisodes';
import Embarrassing from '../categories/Embarrassing';
import Supernatural from '../categories/Supernatural';

const App = () => {
  return (
    <Routes>
      <Route path="Subscription" element={<Subscription />} />
      <Route path="payment" element={<PaymentPage />} />
      <Route path="payment-options" element={<PaymentOptions />} />
      <Route path="Profile" element={<Profile />} />
      <Route path="login" element={<Login />} />
      <Route path="FanRankings" element={<FanRankings />} />
      <Route path='AllPrankEpisodes' element={<AllPrankEpisodes/>}/>
      <Route path='Embarrassing' element={<Embarrassing/>}/>
      <Route path='Supernatural' element={<Supernatural/>}/>
      <Route path='WatchEpisode' element={<WatchEpisode/>}/>
      <Route path='History' element={<History/>}/>
      <Route path='Downloads' element={<Downloads/>}/>
      <Route path='Accountsetting' element={<AccountSetting/>}/>
      <Route path='home'element={<Home/>}/>
  
    </Routes>
  );
};

export default App;
