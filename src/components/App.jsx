// import React from 'react'
// // import Login from './Login'
// import Subscription from './Subscription'


// const App = () => {
//   return (
//     <div>
//       {/* <Login /> */}
//       <Subscription />
//     </div>
//   )
// }

// export default App

// src/components/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Subscription from './Subscription'; // Subscription page
import PaymentPage from './PaymentPage';   // Payment page
import PaymentOptions from './PaymentOptions';
import Profile from './Profile';
import Login from './Login';
// import History from './History';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="Subscription" element={<Subscription />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="payment-options" element={<PaymentOptions/>} />
        <Route path="Profile" element= {<Profile/>}/>
        {/* <Route path='History' element={<History/>}/> */}
        <Route path="login" element={<Login/>}/>
      </Routes>
    </Router>
  );
};

export default App;

