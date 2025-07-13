import React, { useState, useEffect } from 'react';
import { RotateCcw, Trophy, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { useRewards } from '../contexts/RewardsContext';
import './gamePage.css';

const GamePage = () => {
  const { addPoints } = useRewards();
  const [selectedGame, setSelectedGame] = useState<string>('');
  const [gameResult, setGameResult] = useState<string | null>(null);
  const [points, setPoints] = useState<number | null>(null);
  const [showOutcome, setShowOutcome] = useState<boolean>(false);
  const [outcomeMessage, setOutcomeMessage] = useState<string>('');

  // Slot Machine Game
  const [slotReels, setSlotReels] = useState(['🍎', '🍊', '🍇']);
  const [isSpinning, setIsSpinning] = useState(false);

  // Trivia Game
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [triviaSubmitted, setTriviaSubmitted] = useState(false);

  // Shell Game
  const [selectedCup, setSelectedCup] = useState<number | null>(null);
  const [revealedCups, setRevealedCups] = useState<boolean>(false);
  const [winningCup] = useState(Math.floor(Math.random() * 3));

  const fruits = ['🍎', '🍊', '🍇', '🍌', '🍓', '🥝'];

  // Randomly select one game when component loads
  useEffect(() => {
    const games = ['slots', 'trivia', 'shell'];
    const randomGame = games[Math.floor(Math.random() * games.length)];
    setSelectedGame(randomGame);
  }, []);

  // Add points to the global wallet when game ends
  useEffect(() => {
    if (points !== null) {
      addPoints(points);
    }
  }, [points, addPoints]);

  const spinSlots = () => {
    setIsSpinning(true);
    
    // Animate spinning
    const spinInterval = setInterval(() => {
      setSlotReels([
        fruits[Math.floor(Math.random() * fruits.length)],
        fruits[Math.floor(Math.random() * fruits.length)],
        fruits[Math.floor(Math.random() * fruits.length)]
      ]);
    }, 100);

    setTimeout(() => {
      clearInterval(spinInterval);
      setIsSpinning(false);
      
      const finalReels = [
        fruits[Math.floor(Math.random() * fruits.length)],
        fruits[Math.floor(Math.random() * fruits.length)],
        fruits[Math.floor(Math.random() * fruits.length)]
      ];
      
      setSlotReels(finalReels);
      
      // Show outcome first
      const isWin = finalReels[0] === finalReels[1] && finalReels[1] === finalReels[2];
      const matchingTwo = finalReels[0] === finalReels[1] || finalReels[1] === finalReels[2] || finalReels[0] === finalReels[2];
      
      setShowOutcome(true);
      
      if (isWin) {
        setOutcomeMessage('🎉 Amazing! Three matching symbols!');
        setTimeout(() => {
          setPoints(100);
          setGameResult('You won 100 points! 🎉');
        }, 2000);
      } else if (matchingTwo) {
        setOutcomeMessage('🎯 Nice! Two matching symbols!');
        setTimeout(() => {
          setPoints(25);
          setGameResult('You earned 25 bonus points!');
        }, 2000);
      } else {
        setOutcomeMessage('Nice Try. Better Luck Next Time');
        setTimeout(() => {
          setPoints(0);
          setGameResult('Nice Try. Better Luck Next Time');
        }, 2000);
      }
    }, 2000);
  };

  const submitTrivia = () => {
    setTriviaSubmitted(true);
    setShowOutcome(true);
    
    const isCorrect = selectedAnswer === 'B';
    
    if (isCorrect) {
      setOutcomeMessage('🎯 Correct! You know your Walmart history!');
      setTimeout(() => {
        setPoints(75);
        setGameResult('You won 75 points! 🎉');
      }, 2000);
    } else {
      setOutcomeMessage('Nice Try. Better Luck Next Time');
      setTimeout(() => {
        setPoints(0);
        setGameResult('Nice Try. Better Luck Next Time');
      }, 2000);
    }
  };

  const selectCup = (cupIndex: number) => {
    setSelectedCup(cupIndex);
    setRevealedCups(true);
    setShowOutcome(true);
    
    const isWin = cupIndex === winningCup;
    
    if (isWin) {
      setOutcomeMessage('🏆 Fantastic! You found the treasure!');
      setTimeout(() => {
        setPoints(150);
        setGameResult('You won 150 points! 🎉');
      }, 2000);
    } else {
      setOutcomeMessage('Nice Try. Better Luck Next Time');
      setTimeout(() => {
        setPoints(0);
        setGameResult('Nice Try. Better Luck Next Time');
      }, 2000);
    }
  };

  if (gameResult) {
    return (
      <Layout>
        <div className="result-container">
          <div className={`result-card ${points > 0 ? 'success' : 'failure'}`}>
            {points > 0 ? (
              <>
                <Trophy className="result-icon success" />
                <h1 className="result-title">🎉 Congratulations! 🎉</h1>
                <p className="result-message">{outcomeMessage}</p>
                <div className="result-points">You earned {points} points!</div>
              </>
            ) : (
              <>
                <div className="result-icon failure" style={{fontSize: '4rem'}}>😔</div>
                <h1 className="result-title">Nice Try. Better Luck Next Time</h1>
                <p className="result-message">You didn't earn any points this time</p>
              </>
            )}
          </div>

          <div className="result-actions">
            <Link to="/rewards" className="wallet-button">
              Go to My Rewards Wallet <ArrowRight />
            </Link>
            
            <div>
              <Link to="/" className="continue-link">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  const getGameTitle = () => {
    switch (selectedGame) {
      case 'slots': return '🎰 Slot Machine';
      case 'trivia': return '❓ Trivia Quiz';
      case 'shell': return '🥚 Find the Treasure';
      default: return 'Loading Game...';
    }
  };

  return (
    <Layout>
      <div className="game-container">
        <div className="game-header">
          <h1>
            🎉 You've Unlocked a Reward Game!
          </h1>
          <p>Play your special game to earn bonus reward points!</p>
        </div>

        <div className="game-content">
          <div className="game-card">
            <h2 className="game-title">{getGameTitle()}</h2>
            
            {showOutcome && (
              <div className="outcome-message">
                <p>{outcomeMessage}</p>
              </div>
            )}

            {/* Slot Machine Game */}
            {selectedGame === 'slots' && (
              <>
                <p className="slot-description">Match symbols to win big points!</p>
                <div className="slot-reels">
                  {slotReels.map((fruit, index) => (
                    <div 
                      key={index}
                      className={`slot-reel ${isSpinning ? 'spinning' : ''}`}
                    >
                      {fruit}
                    </div>
                  ))}
                </div>
                <button 
                  onClick={spinSlots}
                  disabled={isSpinning || showOutcome}
                  className="spin-button"
                >
                  {isSpinning ? 'SPINNING...' : 'SPIN TO WIN!'}
                </button>
              </>
            )}

            {/* Trivia Game */}
            {selectedGame === 'trivia' && (
              <>
                <p className="slot-description">Test your knowledge about Walmart!</p>
                <div>
                  <h3 className="trivia-question">
                    Which year was Walmart founded?
                  </h3>
                  
                  <div className="trivia-options">
                    {[
                      { id: 'A', text: '1958' },
                      { id: 'B', text: '1962' },
                      { id: 'C', text: '1970' },
                      { id: 'D', text: '1965' }
                    ].map((option) => (
                      <button
                        key={option.id}
                        onClick={() => setSelectedAnswer(option.id)}
                        disabled={triviaSubmitted || showOutcome}
                        className={`trivia-option ${selectedAnswer === option.id ? 'selected' : ''}`}
                      >
                        <span className="trivia-option-label">{option.id}.</span> {option.text}
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={submitTrivia}
                  disabled={!selectedAnswer || triviaSubmitted || showOutcome}
                  className="trivia-submit"
                >
                  SUBMIT ANSWER
                </button>
              </>
            )}

            {/* Shell Game */}
            {selectedGame === 'shell' && (
              <>
                <p className="shell-description">One cup has a treasure. Choose wisely!</p>
                <div className="shell-cups">
                  {[0, 1, 2].map((cupIndex) => (
                    <button
                      key={cupIndex}
                      onClick={() => !revealedCups && !showOutcome && selectCup(cupIndex)}
                      disabled={revealedCups || showOutcome}
                      className={`shell-cup ${
                        selectedCup === cupIndex ? 'selected' : ''
                      } ${revealedCups && cupIndex === winningCup ? 'treasure' : ''}`}
                    >
                      {revealedCups ? (cupIndex === winningCup ? '🏆' : '🥚') : '🥚'}
                    </button>
                  ))}
                </div>

                {!revealedCups && !showOutcome && (
                  <p className="shell-instruction">Click a cup to reveal what's underneath!</p>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GamePage;
