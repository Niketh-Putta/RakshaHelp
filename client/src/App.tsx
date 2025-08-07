import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
// import { Toaster } from "@/components/ui/toaster";
// import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { registerServiceWorker } from "@/lib/pwa";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import CardiacArrest from "@/pages/cardiac-arrest";
import Stroke from "@/pages/stroke";
import HeartAttack from "@/pages/heart-attack";
import SevereBleeding from "@/pages/severe-bleeding";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/cardiac-arrest" component={CardiacArrest} />
      <Route path="/stroke" component={Stroke} />
      <Route path="/heart-attack" component={HeartAttack} />
      <Route path="/severe-bleeding" component={SevereBleeding} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    // Register service worker for offline functionality
    registerServiceWorker();
    
    // Add viewport meta tag for mobile optimization
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no');
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-50">
        <Router />
      </div>
    </QueryClientProvider>
  );
}

export default App;
