
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Lock, Wallet, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const simulateWalletConnection = async () => {
    setIsConnecting(true);
    
    // Simulate loading for 2-3 seconds
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    // Generate mock wallet address
    const mockAddress = "0x" + Math.random().toString(16).substring(2, 10).toUpperCase() + "...";
    setWalletAddress(mockAddress);
    setIsConnected(true);
    setIsConnecting(false);
    
    // Show success toast
    toast({
      title: "Wallet Connected Successfully!",
      description: `Wallet connected: ${mockAddress}`,
      duration: 3000,
    });
    
    // Auto redirect to dashboard after 2 seconds
    setTimeout(() => {
      navigate("/app/dashboard");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="text-center p-8 max-w-lg mx-auto">
        <div className="flex justify-center items-center mb-8">
          <div className="p-4 bg-primary/10 rounded-full">
            <Lock className="h-20 w-20 text-primary" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          Welcome to the Ghostip Network
        </h1>
        
        <h2 className="text-2xl font-semibold mb-4 text-foreground">
          Ghostip Network
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Send anonymous, encrypted feedback using blockchain technology.
          Connect your pseudonymous wallet to get started.
        </p>

        {!isConnected ? (
          <div className="space-y-6">
            <Button 
              onClick={simulateWalletConnection}
              disabled={isConnecting}
              size="lg" 
              className="w-full max-w-xs mx-auto h-14 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {isConnecting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin mr-2" />
                  Connecting Wallet...
                </>
              ) : (
                <>
                  <Wallet className="h-5 w-5 mr-2" />
                  Connect Wallet
                </>
              )}
            </Button>
            
            {isConnecting && (
              <div className="animate-fade-in">
                <div className="bg-card border rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Connecting to MetaMask...
                  </p>
                </div>
              </div>
            )}
            
            <p className="text-sm text-muted-foreground">
              No name or email required. Your privacy is protected.
            </p>
          </div>
        ) : (
          <div className="animate-fade-in space-y-4">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <div className="flex items-center justify-center mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-green-700 dark:text-green-300 font-medium">
                  Wallet Connected
                </span>
              </div>
              <p className="text-sm text-green-600 dark:text-green-400">
                {walletAddress}
              </p>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Redirecting to dashboard...
            </p>
            
            <Button asChild size="lg" className="w-full max-w-xs mx-auto">
              <Link to="/app/dashboard">
                Continue to Dashboard
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
