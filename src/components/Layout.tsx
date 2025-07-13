
import React from 'react';
import { Search, Heart, User, ShoppingCart, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  return (
    <div className="layout">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="header-content">
            {/* Logo and Location */}
            <div className="logo-section">
              <Link to="/" className="logo-link">
                <img 
                  src="/walmart-logo.svg" 
                  alt="Walmart" 
                  className="logo-img"
                />
                <span className="logo-text">Walmart</span>
              </Link>
              <div className="location-info">
                <span className="location-text">Pickup or delivery?</span>
                <div className="location-details">
                  <div>Mumbai, 400001 • Mumbai Central</div>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="search-container">
              <div className="search-wrapper">
                <input
                  type="text"
                  placeholder="Search everything at Walmart online and in store"
                  className="search-input"
                />
                <Search className="search-icon" />
              </div>
            </div>

            {/* User Actions */}
            <div className="user-actions">
              <button className="user-button">
                <Heart />
                <span>Reorder</span>
                <span>My Items</span>
              </button>
              <button className="user-button">
                <User />
                <span>Sign In</span>
                <span>Account</span>
              </button>
              <button className="cart-button">
                <ShoppingCart />
                <span className="cart-count">2</span>
                <div className="cart-total">
                  <span>₹33.32</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-content">
            <div className="nav-links">
              <button className="nav-button">
                <Menu />
                <span>Departments</span>
              </button>
              <button className="nav-button">
                <span>Services</span>
              </button>
              <span className="nav-separator">|</span>
              <a href="#" className="nav-link">Get it Fast</a>
              <a href="#" className="nav-link">New Arrivals</a>
              <a href="#" className="nav-link">Deals</a>
              <a href="#" className="nav-link">Dinner Made Easy</a>
              <a href="#" className="nav-link">Pharmacy Delivery</a>
              <a href="#" className="nav-link">Trending</a>
              <a href="#" className="nav-link">Swim Shop</a>
              <a href="#" className="nav-link">My Items</a>
              <a href="#" className="nav-link">Auto Service</a>
              <a href="#" className="nav-link">Only at Walmart</a>
              <a href="#" className="nav-link">Registry</a>
              <a href="#" className="nav-link">Walmart+</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
