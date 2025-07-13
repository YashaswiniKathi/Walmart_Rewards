
import React, { useState } from 'react';
import { CreditCard, Gift, Star, Clock, ArrowRight, Coins } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { useRewards } from '../contexts/RewardsContext';
import './rewardsWallet.css';

const RewardsWallet = () => {
  const { totalPoints, redeemReward } = useRewards();
  const [redeemableRewards] = useState([
    {
      id: 1,
      title: '₹50 off your next purchase',
      pointsCost: 100,
      description: 'Valid on orders above ₹1000',
      expiry: '30 days',
      category: 'discount',
      icon: '💰'
    },
    {
      id: 2,
      title: 'Free shipping on next order',
      pointsCost: 75,
      description: 'Free shipping on any order',
      expiry: '15 days',
      category: 'shipping',
      icon: '🚚'
    },
    {
      id: 3,
      title: '10% off electronics',
      pointsCost: 200,
      description: 'Apply to electronics purchases',
      expiry: '45 days',
      category: 'electronics',
      icon: '📱'
    },
    {
      id: 4,
      title: 'Exclusive member deals',
      pointsCost: 50,
      description: 'Access to special member pricing',
      expiry: '60 days',
      category: 'exclusive',
      icon: '⭐'
    }
  ]);

  const handleRedeemReward = (pointsCost: number, rewardTitle: string) => {
    redeemReward(pointsCost, rewardTitle);
  };

  return (
    <Layout>
      <div className="rewards-container">
        {/* Header */}
        <div className="header">
          <div className="header-title">
            <CreditCard />
            <h1>My Rewards Wallet</h1>
          </div>
          <p className="header-description">Track your points and redeem exclusive rewards!</p>
        </div>

        {/* Points Balance Card */}
        <div className="points-card">
          <h2 className="points-title">Your Point Balance</h2>
          <div className="points-balance">{totalPoints}</div>
          <p className="points-subtext">Keep shopping and playing games to earn more points!</p>
        </div>

        {/* Available Rewards Section */}
        <div>
          <h2 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem'}}>Available Rewards</h2>
          
          <div className="rewards-grid">
            {redeemableRewards.map((reward) => (
              <div key={reward.id} className="reward-card">
                <div className="reward-header">
                  <div style={{display: 'flex', alignItems: 'start'}}>
                    <span className="reward-icon">{reward.icon}</span>
                    <div className="reward-content">
                      <h3 className="reward-title">{reward.title}</h3>
                      <p className="reward-description">{reward.description}</p>
                    </div>
                  </div>
                </div>
                
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                  <div style={{color: '#1d4ed8', fontWeight: 'bold', fontSize: '1.125rem'}}>
                    {reward.pointsCost} points
                  </div>
                  <button 
                    onClick={() => handleRedeemReward(reward.pointsCost, reward.title)}
                    style={{
                      padding: '0.5rem 1.5rem',
                      borderRadius: '9999px',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      transition: 'background-color 0.3s',
                      backgroundColor: totalPoints >= reward.pointsCost ? '#059669' : '#e5e7eb',
                      color: totalPoints >= reward.pointsCost ? 'white' : '#6b7280',
                      cursor: totalPoints >= reward.pointsCost ? 'pointer' : 'not-allowed',
                      border: 'none'
                    }}
                    disabled={totalPoints < reward.pointsCost}
                  >
                    {totalPoints >= reward.pointsCost ? 'Redeem' : 'Need More Points'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions to Earn More Points */}
        <div className="earn-more">
          <h3 className="earn-more-title">🎮 Earn More Points</h3>
          <p className="earn-more-description">Complete purchases and play games to boost your point balance!</p>
          
          <div className="actions">
            <Link to="/checkout-confirmation" className="action-link">
              <span>Make a Purchase</span>
              <ArrowRight />
            </Link>
            <Link to="/" className="action-link" style={{backgroundColor: '#fbbf24', color: 'black'}}>
              <span>Continue Shopping</span>
              <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RewardsWallet;
