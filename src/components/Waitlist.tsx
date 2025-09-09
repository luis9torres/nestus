import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Mail, Users, TrendingUp, Clock, Zap, Gift } from "lucide-react";
import { toast } from "sonner";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [waitlistCount, setWaitlistCount] = useState(12847);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setWaitlistCount(prev => prev + 1);
      toast.success("Welcome to the waitlist! You'll be the first to know when we launch.");
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <section id="waitlist" className="nestus-section bg-background">
        <div className="nestus-container max-w-4xl mx-auto px-6 text-center">
          <div className="animate-scale-in">
            <Card className="gradient-card border-primary/20 shadow-feature p-8">
              <CardContent className="space-y-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-foreground">You're On The List!</h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Thank you for joining our waitlist! We'll send you exclusive updates and early access when NestUS launches.
                  </p>
                </div>

                <div className="bg-primary/5 rounded-2xl p-6">
                  <div className="flex items-center justify-center gap-3 text-primary">
                    <Users className="w-6 h-6" />
                    <span className="text-2xl font-bold">{waitlistCount.toLocaleString()}+</span>
                    <span className="text-lg font-medium">Students Waiting</span>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-sm text-muted-foreground">
                    Share with friends and move up the list! 🚀
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="nestus-section bg-background">
      <div className="nestus-container max-w-5xl mx-auto px-6">
        <div className="space-y-6">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slide-up">
              <Badge className="mb-8 gradient-primary text-primary-foreground px-8 py-4 text-lg font-bold rounded-full shadow-glow">
                🚀 Limited Time: FREE Early Access  
              </Badge>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-foreground leading-tight">
                Join <span className="gradient-hero bg-clip-text text-transparent">12,847+ Students</span>
              </h2>
              <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Get <span className="font-bold text-primary">FREE lifetime access</span> when you join our waitlist. 
                <br className="hidden md:block" />
                Only <span className="font-bold text-primary animate-pulse">153 spots left</span> for early access!
              </p>
              
              {/* Enhanced Urgency Timer */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-3xl p-6 max-w-lg mx-auto mt-8 shadow-lg">
                <div className="flex items-center justify-center gap-3 text-red-600">
                  <Clock className="w-6 h-6 animate-pulse" />
                  <span className="font-bold text-lg">Early Access Ends in 72 Hours!</span>
                </div>
                <div className="text-sm text-red-500 mt-2 font-medium">Don't miss out on lifetime savings</div>
              </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Enhanced Waitlist Form */}
          <Card className="gradient-card border-primary/20 shadow-feature animate-scale-in relative overflow-hidden">
            {/* Premium Badge */}
            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold transform rotate-12 shadow-lg">
              FREE Access
            </div>
            
            <CardContent className="p-8">
              {/* Value Proposition */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Get Lifetime Access FREE</h3>
                <p className="text-muted-foreground">Join now and save $4.99/month forever!</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground">
                    Enter Your College Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@university.edu"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-12 py-5 text-lg border-2 border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl transition-base"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full gradient-primary text-primary-foreground hover:scale-105 transition-smooth shadow-glow py-6 text-xl font-bold rounded-xl relative overflow-hidden group"
                >
                  <span className="relative z-10">
                    {isLoading ? "Securing Your Spot..." : "🎉 Get FREE Lifetime Access"}
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                </Button>

                <p className="text-xs text-muted-foreground text-center leading-relaxed">
                  By joining, you agree to receive updates about NestUS. 
                  <br />
                  No spam, unsubscribe anytime. 🎓
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Stats & Benefits */}
          <div className="space-y-8 animate-stagger">
            
            {/* Live Counter */}
            <Card className="gradient-card border-primary/20 shadow-card">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Live Count</span>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <Users className="w-8 h-8 text-primary" />
                  <span className="text-4xl font-bold gradient-hero bg-clip-text text-transparent">
                    {waitlistCount.toLocaleString()}+
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Students Already Waiting</p>
              </CardContent>
            </Card>

            {/* Enhanced Benefits List */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">🎁 Exclusive Benefits Worth $59.97:</h3>
              
              {[
                { icon: Zap, title: "Lifetime FREE Access", desc: "Save $4.99/month forever (Value: $59.88/year)", highlight: true },
                { icon: Gift, title: "Exclusive Beta Features", desc: "Get premium features first, before anyone else" },
                { icon: TrendingUp, title: "Priority Support", desc: "Direct line to our development team" },
                { icon: Users, title: "VIP Community Access", desc: "Join exclusive Discord with founders" },
              ].map((benefit, index) => (
                <div 
                  key={index}
                  className={`flex items-start gap-4 p-5 rounded-xl transition-base animate-stagger border-2 ${
                    benefit.highlight 
                      ? 'bg-gradient-to-r from-primary/10 to-purple-500/10 border-primary/30 shadow-lg' 
                      : 'bg-secondary/20 border-secondary/30 hover:bg-secondary/40'
                  }`}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className={`p-3 rounded-lg ${benefit.highlight ? 'bg-primary shadow-glow' : 'bg-primary/10'}`}>
                    <benefit.icon className={`w-6 h-6 ${benefit.highlight ? 'text-white' : 'text-primary'}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground text-lg">{benefit.title}</h4>
                    <p className="text-muted-foreground">{benefit.desc}</p>
                    {benefit.highlight && (
                      <div className="mt-2 text-sm font-semibold text-primary">✨ Limited Time Only!</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;