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
import Home from '../pages/Home';
import AllPrankEpisodes from '../categories/AllPrankEpisodes';
import Embarrassing from '../categories/Embarrassing';
import Supernatural from '../categories/Supernatural';
import Movies from '../pages/Movies';

// import '../styles/Theme.scss'; // Comedy UI theme styling

const App = () => {
  return (
    <>
      {/* Comedy Themed Background Elements */}
{/* <div className="confetti"></div> */}

{/* <div className="comedy-decor-wrapper">
  {[...Array(100)].map((_, index) => {
    const isIcon = index >= 50; // First 50 are banana peels, next 50 are icons

    const top = `${Math.floor(Math.random() * 400)}vh`; // Extend up to 400vh
    const isLeft = Math.random() > 0.5;
    const horizontal = `${Math.floor(Math.random() * 90)}%`;

    const style = {
      position: 'absolute',
      top,
      [isLeft ? 'left' : 'right']: horizontal,
    };

    if (!isIcon) {
      return (
        <div
          key={`banana-${index}`}
          className="background-decor banana-peel"
          style={style}
        />
      );
    } else {
      const icons = [
        { className: 'icon-laugh', image: '/assets/images/laugh.png' },
        { className: 'icon-sweat', image: '/assets/images/sweat1.png' },
        { className: 'icon-chicken', image: '/assets/images/chicken1.png' },
        { className: 'icon-banana', image: '/assets/images/banana.png' },
      ];
      const randomIcon = icons[Math.floor(Math.random() * icons.length)];

      return (
        <div
          key={`icon-${index}`}
          className={`floating-icon ${randomIcon.className}`}
          style={{
            ...style,
            backgroundImage: `url(${randomIcon.image})`,
          }}
        />
      );
    }
  })}
</div> */}




      {/* Routes */}
      <Routes>
        <Route path="Subscription" element={<Subscription />} />
        <Route path="payment" element={<PaymentPage />} />
        <Route path="payment-options" element={<PaymentOptions />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="login" element={<Login />} />
        <Route path="FanRankings" element={<FanRankings />} />
        <Route path="Movies" element={<Movies/>}>
          <Route path="AllPrankEpisodes" element={<AllPrankEpisodes />} />
          <Route path="Embarrassing" element={<Embarrassing />} />
          <Route path="Supernatural" element={<Supernatural />} />
        </Route>
        <Route path="WatchEpisode" element={<WatchEpisode />} />
        <Route path="History" element={<History />} />
        <Route path="Downloads" element={<Downloads />} />
        <Route path="Accountsetting" element={<AccountSetting />} />
        <Route path="home" element={<Home />} />
        <Route path="PrankEpisodes" element={<PrankEpisodes />} />
      </Routes>
    </>
  );
};

export default App;
