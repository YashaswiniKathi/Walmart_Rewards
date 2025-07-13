
import React from 'react';
import { ArrowRight, Star, Gift, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import './homePage.css';

const HomePage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <h1>
            Turn Every Purchase into a Win!
          </h1>
          <p>
            Shop at Walmart and unlock exciting reward games. Earn points, win prizes, and get exclusive discounts!
          </p>
          <Link to="/checkout-confirmation" className="hero-button">
            🛒 Demo Checkout Experience
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <h2 className="section-title">How It Works</h2>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon shop">
                <span>🛒</span>
              </div>
              <h3 className="feature-title">1. Shop & Purchase</h3>
              <p className="feature-description">
                Complete your regular Walmart shopping and checkout process
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon game">
                <span>🎮</span>
              </div>
              <h3 className="feature-title">2. Play Reward Games</h3>
              <p className="feature-description">
                Unlock fun games after each purchase - slots, trivia, and shell games
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon earn">
                <span>🏆</span>
              </div>
              <h3 className="feature-title">3. Earn & Redeem</h3>
              <p className="feature-description">
                Collect points and redeem them for discounts, free shipping, and more
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Games Preview */}
      <section className="games-section">
        <div className="games-container">
          <h2 className="section-title">Exciting Reward Games</h2>
          
          <div className="games-grid">
            <Link to="/game" className="game-card">
              <div className="game-icon">🎰</div>
              <h3 className="game-title">Slot Machine</h3>
              <p className="game-description">Match three symbols to win big!</p>
              <div className="game-points">Win up to 100 points</div>
            </Link>

            <Link to="/game" className="game-card">
              <div className="game-icon">❓</div>
              <h3 className="game-title">Trivia Quiz</h3>
              <p className="game-description">Test your knowledge and earn points!</p>
              <div className="game-points">Win up to 75 points</div>
            </Link>

            <Link to="/game" className="game-card">
              <div className="game-icon">🥚</div>
              <h3 className="game-title">Shell Game</h3>
              <p className="game-description">Find the hidden treasure!</p>
              <div className="game-points">Win up to 150 points</div>
            </Link>
          </div>
          
          <div style={{textAlign: 'center', marginTop: '2rem'}}>
            <Link to="/checkout-confirmation" className="cta-button">
              Start Playing Games
            </Link>
          </div>
        </div>
      </section>

      {/* Rewards Preview */}
      <section className="rewards-section">
        <div className="rewards-container">
          <h2 className="section-title">Amazing Rewards Await</h2>
          
          <div className="rewards-grid">
            <div className="reward-card">
              <Gift className="reward-icon discount" />
              <h4 className="reward-title">Instant Discounts</h4>
              <p className="reward-description">Save money on your next purchase</p>
            </div>

            <div className="reward-card">
              <Zap className="reward-icon shipping" />
              <h4 className="reward-title">Free Shipping</h4>
              <p className="reward-description">Skip shipping fees entirely</p>
            </div>

            <div className="reward-card">
              <Star className="reward-icon exclusive" />
              <h4 className="reward-title">Exclusive Access</h4>
              <p className="reward-description">Member-only deals and products</p>
            </div>

            <div className="reward-card">
              <ArrowRight className="reward-icon bonus" />
              <h4 className="reward-title">Bonus Points</h4>
              <p className="reward-description">Double point earning days</p>
            </div>
          </div>
          
          <div style={{textAlign: 'center', marginTop: '2rem'}}>
            <Link to="/rewards" className="cta-button secondary">
              View My Rewards
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
