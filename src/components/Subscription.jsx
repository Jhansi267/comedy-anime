import React, { useState } from 'react';
import './Subscription.scss';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const plans = [
  {
    name: '😄 Laugh Lite',
    price: '₹99 per month',
    features: [
      'Access to Comedy Section',
      'Meme Freeze & Rewind the Laugh',
      'Ads every 15 mins (with whoopee cushion sounds)'
    ],
    color: 'lite'
  },
  {
    name: '😂 Gag God Mode',
    price: '₹199 per month',
    features: [
      'All Lite Features',
      'Exclusive “Slapstick Society” badge',
      'Comedy-themed alerts & meme snapshots',
      'Joke Counter + Laugh Meter'
    ],
    color: 'god'
  },
  {
    name: '😎 Chibi Chill Pack',
    price: '₹149 per month',
    features: [
      'Limited Access to Top Gags',
      'Weekly “Joke of the Day” Spotlights',
      'Hilarious pop-up episode alerts'
    ],
    color: 'chibi'
  }
];

const Subscription = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSubscribe = (plan) => {
    setSelectedPlan(plan.name);
    // Navigate to PaymentOptions page with selected plan as state
    navigate('/payment-options', { state: plan });
  };

  return (
    <>
    <Navbar/>
  <div className="subscription-container" style={{ marginTop: '85px', marginBottom: '0' }}>
      <h1 className="comic-title">SUBSCRIBE & LOL!</h1>
      <h2 className="comic-subtitle">Choose Your Gag Plan!</h2>

      <div className="plans-wrapper">
        {plans.map((plan, index) => (
          <div 
            className={`plan-card ${plan.color} ${selectedPlan === plan.name ? 'selected' : ''}`} 
            key={index}
          >
            <h3>{plan.name}</h3>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>💥 {feature}</li>
              ))}
            </ul>
            <button 
              className="comic-btn" 
              onClick={() => handleSubscribe(plan)}
            >
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>

  );
};

export default Subscription;
