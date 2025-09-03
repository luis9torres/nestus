import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Mail, Users, TrendingUp } from "lucide-react";
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
        
        {/* Section Header */}
        <div className="text-center mb-12 animate-slide-up">
          <Badge className="mb-6 gradient-primary text-primary-foreground px-6 py-3 text-sm font-semibold rounded-full">
            🎉 Be First in Line
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
            Join the <span className="gradient-hero bg-clip-text text-transparent">Waitlist</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get exclusive early access to NestUS and be among the first students to revolutionize their campus experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Waitlist Form */}
          <Card className="gradient-card border-primary/20 shadow-feature animate-scale-in">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your college email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-12 py-4 text-lg border-2 border-primary/20 focus:border-primary/50 rounded-xl transition-base"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full gradient-primary text-primary-foreground hover:scale-105 transition-smooth shadow-glow py-4 text-lg font-semibold rounded-xl"
                >
                  {isLoading ? "Joining..." : "Join Waitlist"}
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

            {/* Benefits List */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">What You'll Get:</h3>
              
              {[
                { icon: TrendingUp, title: "Early Access", desc: "Be first to download when we launch" },
                { icon: Mail, title: "Exclusive Updates", desc: "Behind-the-scenes development insights" },
                { icon: Users, title: "Beta Testing", desc: "Help shape the final product" },
              ].map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-base animate-stagger"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.desc}</p>
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