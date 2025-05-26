import React from "react";
import { Routes, Route } from "react-router-dom";
import Subscription from "./Subscription";
import PaymentPage from "./PaymentPage";
import PaymentOptions from "./PaymentOptions";
import Profile from "./Profile";
import Login from "./Login";
import FanRankings from "../pages/FanRankings";
import PrankEpisodes from "../pages/PrankEpisodes";
import History from "./History";
import Downloads from "./Downloads";
import AccountSetting from "./Accountsetting";
import WatchEpisode from "../VideoPlayer/WatchEpisode";
import Home from "../pages/Home";
import AllPrankEpisodes from "../categories/AllPrankEpisodes";
import Embarrassing from "../categories/Embarrassing";
import Supernatural from "../categories/Supernatural";
import Movies from "../pages/Movies";
import NoPage from "../pages/NoPage";
import WishList from "../pages/WishList";
import CurrentSubscription from "./CurrentSubscription";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="Subscription" element={<Subscription />} />
        <Route path="payment" element={<PaymentPage />} />
        <Route path="payment-options" element={<PaymentOptions />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="login" element={<Login />} />
        <Route path="FanRankings" element={<FanRankings />} />
        <Route path="Movies" element={<Movies />}>
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
        <Route path="WishList" element={<WishList />} />
        <Route path="CurrentSubscription" element={<CurrentSubscription />} />

        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
};
export default App;
