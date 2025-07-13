
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useToast } from '@/hooks/use-toast';

interface RewardsContextType {
  totalPoints: number;
  addPoints: (points: number) => void;
  redeemReward: (pointsCost: number, rewardTitle: string) => boolean;
}

const RewardsContext = createContext<RewardsContextType | undefined>(undefined);

export const RewardsProvider = ({ children }: { children: ReactNode }) => {
  // Initialize points from localStorage or default to 100
  const [totalPoints, setTotalPoints] = useState(() => {
    const saved = localStorage.getItem('walmart-rewards-points');
    return saved ? parseInt(saved, 10) : 100;
  });
  
  const { toast } = useToast();

  // Save points to localStorage whenever they change
  React.useEffect(() => {
    localStorage.setItem('walmart-rewards-points', totalPoints.toString());
  }, [totalPoints]);

  const addPoints = (points: number) => {
    if (typeof points !== 'number' || points < 0) {
      console.error('Invalid points value:', points);
      return;
    }
    
    setTotalPoints(prev => {
      const newTotal = prev + points;
      console.log(`Points added: ${points}, New total: ${newTotal}`);
      return newTotal;
    });
    
    if (points > 0) {
      toast({
        title: "Points Added!",
        description: `You've earned ${points} reward points!`,
      });
    }
  };

  const redeemReward = (pointsCost: number, rewardTitle: string) => {
    if (typeof pointsCost !== 'number' || pointsCost < 0) {
      console.error('Invalid point cost:', pointsCost);
      return false;
    }
    
    if (totalPoints >= pointsCost) {
      setTotalPoints(prev => {
        const newTotal = prev - pointsCost;
        console.log(`Points redeemed: ${pointsCost}, New total: ${newTotal}`);
        return newTotal;
      });
      
      toast({
        title: "Reward Redeemed!",
        description: `Successfully redeemed: ${rewardTitle}`,
      });
      return true;
    } else {
      toast({
        title: "Insufficient Points",
        description: `You need ${pointsCost - totalPoints} more points to redeem this reward.`,
        variant: "destructive",
      });
      return false;
    }
  };

  return (
    <RewardsContext.Provider value={{ totalPoints, addPoints, redeemReward }}>
      {children}
    </RewardsContext.Provider>
  );
};

export const useRewards = () => {
  const context = useContext(RewardsContext);
  if (context === undefined) {
    throw new Error('useRewards must be used within a RewardsProvider');
  }
  return context;
};
