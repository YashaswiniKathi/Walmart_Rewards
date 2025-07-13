
import React from 'react';
import { Check, Truck, Calendar, MapPin, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import './checkoutConfirmation.css';

const CheckoutConfirmation = () => {
  return (
    <Layout>
      <div className="confirmation-container">
        {/* Success Message */}
        <div className="success-section">
          <div className="success-icon">
            <Check />
          </div>
          <h1 className="success-title">
            ✅ Thank you for your purchase!
          </h1>
          <p className="success-message">Your order has been confirmed and is being processed.</p>
        </div>

        <div className="cards-container">
          {/* Order Summary */}
          <div className="info-card">
            <div className="card-header">
              <Package className="card-icon" />
              <h2>Order Summary</h2>
            </div>
            
            <div className="order-details">
              <div className="order-row">
                <span className="label">Order Number:</span>
                <span className="value">#WM-789456123</span>
              </div>
              <div className="order-row">
                <span className="label">Order Date:</span>
                <span className="value">{new Date().toLocaleDateString('en-IN')}</span>
              </div>
              <div className="order-row">
                <span className="label">Subtotal (2 items):</span>
                <span className="value">₹2,799</span>
              </div>
              <div className="order-row savings">
                <span className="label">Savings:</span>
                <span className="value">-₹429</span>
              </div>
              <div className="order-row">
                <span className="label">Shipping:</span>
                <span className="value">₹589</span>
              </div>
              <div className="order-row">
                <span className="label">Taxes:</span>
                <span className="value">₹429</span>
              </div>
              <div className="order-total">
                <div className="order-row total">
                  <span className="label">Total:</span>
                  <span className="value">₹3,388</span>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Information */}
          <div className="info-card">
            <div className="card-header">
              <Truck className="card-icon" />
              <h2>Delivery Information</h2>
            </div>
            
            <div className="delivery-details">
              <div className="delivery-item">
                <Calendar className="delivery-icon" />
                <div>
                  <p className="delivery-title">Shipping, arrives Fri, Jul 11</p>
                  <p className="delivery-subtitle">Standard shipping to Mumbai 400001</p>
                </div>
              </div>
              
              <div className="delivery-item">
                <MapPin className="delivery-icon" />
                <div>
                  <p className="delivery-title">Delivery Address:</p>
                  <p className="delivery-subtitle">123 Marine Drive</p>
                  <p className="delivery-subtitle">Nariman Point, Mumbai 400001</p>
                  <p className="delivery-subtitle">Maharashtra, India</p>
                </div>
              </div>

              <div className="items-section">
                <p className="delivery-title">Items:</p>
                <ul className="items-list">
                  <li>• Wireless Bluetooth Headphones</li>
                  <li>• USB-C Charging Cable</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Reward Game CTA */}
        <div className="cta-section">
          <div className="cta-content">
            <div className="cta-icon">
              <span>🎉</span>
            </div>
            <h2 className="cta-title">Congratulations!</h2>
            <p className="cta-description">
              You've unlocked a special reward game! Play now to earn bonus points and exclusive offers.
            </p>
            
            <div className="cta-buttons">
              <Link to="/game" className="cta-button primary">
                🎮 Play Your Reward Game
              </Link>
              <Link to="/" className="cta-button secondary">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutConfirmation;
