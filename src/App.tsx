
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RewardsProvider } from "./contexts/RewardsContext";
import HomePage from "./pages/HomePage";
import CheckoutConfirmation from "./pages/CheckoutConfirmation";
import GamePage from "./pages/GamePage";
import RewardsWallet from "./pages/RewardsWallet";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <RewardsProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/checkout-confirmation" element={<CheckoutConfirmation />} />
            <Route path="/game" element={<GamePage />} />
            <Route path="/rewards" element={<RewardsWallet />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </RewardsProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
