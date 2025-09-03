import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Mail, Users, Sparkles, CheckCircle, ArrowRight } from "lucide-react";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [waitlistCount, setWaitlistCount] = useState(10847); // Starting count
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Please enter a valid email",
        description: "We need your email to notify you when NestUS launches!",
        variant: "destructive",
      });
      return;
    }

    // Simulate joining waitlist
    setIsSubmitted(true);
    setWaitlistCount(prev => prev + 1);
    
    toast({
      title: "Welcome to the NestUS family! 🎉",
      description: "You'll be the first to know when we launch on your campus.",
    });

    // Reset after showing success
    setTimeout(() => {
      setEmail("");
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Header */}
          <div className="mb-12 animate-slide-up">
            <Badge className="mb-6 gradient-primary text-primary-foreground px-6 py-3 text-lg font-medium">
              <Sparkles className="mr-2 h-5 w-5" />
              Early Access
            </Badge>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Transform Your
              <span className="gradient-hero bg-clip-text text-transparent block">
                Campus Experience?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of students already waiting for the ultimate campus life app.
            </p>
          </div>

          {/* Waitlist Counter */}
          <div className="mb-12 animate-scale-bounce">
            <Card className="inline-block gradient-card border-primary/20 shadow-glow">
              <CardContent className="p-6">
                <div className="flex items-center justify-center gap-4">
                  <Users className="h-8 w-8 text-primary animate-pulse" />
                  <div>
                    <div className="text-3xl md:text-4xl font-bold gradient-hero bg-clip-text text-transparent">
                      {waitlistCount.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      students waiting
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Waitlist Form */}
          <div className="max-w-lg mx-auto animate-slide-up">
            <Card className="gradient-card border-primary/20 shadow-feature">
              <CardContent className="p-8">
                
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-foreground">
                        Enter your college email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                          type="email"
                          placeholder="your-email@college.edu"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10 py-3 text-lg border-primary/20 focus:border-primary/50 rounded-xl"
                        />
                      </div>
                    </div>

                    <Button 
                      type="submit"
                      size="lg" 
                      className="w-full gradient-primary text-primary-foreground hover:scale-105 transition-smooth shadow-glow py-4 text-lg rounded-xl group"
                    >
                      Join the Waitlist
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
                    </Button>
                  </form>
                ) : (
                  <div className="text-center space-y-4 animate-scale-bounce">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      You're In! 🎉
                    </h3>
                    <p className="text-muted-foreground">
                      Check your email for confirmation. We'll notify you as soon as NestUS launches at your campus!
                    </p>
                  </div>
                )}

                <p className="text-xs text-muted-foreground mt-4 text-center">
                  By joining, you agree to receive updates about NestUS. No spam, unsubscribe anytime.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Benefits */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 animate-slide-up">
            {[
              { title: "Early Access", desc: "Be first to download when we launch" },
              { title: "Beta Testing", desc: "Help shape the app with your feedback" },
              { title: "Exclusive Perks", desc: "Special features for early supporters" }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="text-center p-4 bg-background/40 backdrop-blur-sm rounded-xl border border-primary/10 hover:border-primary/30 transition-smooth"
              >
                <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;