import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Star, Users, Clock } from "lucide-react";
import appDashboard from "@/assets/app-dashboard.jpg";
import nestusLogo from "@/assets/nestus-logo.png";

const Hero = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background nestus-section">
      {/* Optimized animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/8 rounded-full blur-3xl animate-float opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/8 rounded-full blur-3xl animate-float opacity-40" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/4 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="nestus-container relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-up">
            {/* Logo and Brand */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              <img src={nestusLogo} alt="NestUS Logo" className="w-16 h-16 animate-pulse-glow" />
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-hero bg-clip-text text-transparent">
                  NestUS
                </h1>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">4.9/5 Beta Rating</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Your Campus Life, <span className="gradient-hero bg-clip-text text-transparent">Simplified</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                Join <span className="font-semibold text-primary">12,847+ students</span> already waiting for the ultimate college companion app.
              </p>

              {/* Social Proof & Urgency */}
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4 max-w-lg">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 border-2 border-background"></div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold text-foreground">Join 12,847+ students</div>
                    <div className="text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Limited early access spots
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToWaitlist}
                size="lg" 
                className="gradient-primary text-primary-foreground hover:scale-105 transition-smooth shadow-glow group px-10 py-5 text-xl rounded-2xl font-bold relative overflow-hidden"
              >
                <span className="relative z-10">Get Early Access FREE</span>
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-base relative z-10" />
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
              </Button>
              
              <Button 
                onClick={scrollToFeatures}
                size="lg" 
                variant="outline" 
                className="border-2 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 px-8 py-5 text-lg rounded-2xl transition-smooth font-semibold"
              >
                <Smartphone className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Enhanced Social Proof */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary/10">
              <div className="text-center animate-stagger" style={{animationDelay: '0.2s'}}>
                <div className="text-3xl font-bold gradient-hero bg-clip-text text-transparent">12,847+</div>
                <div className="text-sm font-medium text-muted-foreground">Students Waiting</div>
                <div className="flex justify-center mt-1">
                  <Users className="w-4 h-4 text-primary" />
                </div>
              </div>
              <div className="text-center animate-stagger" style={{animationDelay: '0.4s'}}>
                <div className="text-3xl font-bold gradient-hero bg-clip-text text-transparent">75+</div>
                <div className="text-sm font-medium text-muted-foreground">Universities</div>
                <div className="flex justify-center mt-1">
                  <div className="w-4 h-4 rounded bg-primary"></div>
                </div>
              </div>
              <div className="text-center animate-stagger" style={{animationDelay: '0.6s'}}>
                <div className="text-3xl font-bold gradient-hero bg-clip-text text-transparent">4.9★</div>
                <div className="text-sm font-medium text-muted-foreground">Beta Rating</div>
                <div className="flex justify-center mt-1">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                </div>
              </div>
            </div>
          </div>

          {/* App Preview */}
          <div className="relative animate-scale-in" style={{animationDelay: '0.3s'}}>
            <div className="relative mx-auto w-80 animate-float">
              <div className="relative">
                {/* Enhanced phone frame effect */}
                <div className="absolute inset-0 gradient-primary rounded-3xl p-1 shadow-feature">
                  <div className="bg-background rounded-3xl p-6">
                    <img 
                      src={appDashboard}
                      alt="NestUS App Dashboard - Student life management interface"
                      className="w-full h-auto rounded-2xl shadow-lg"
                      loading="eager"
                    />
                  </div>
                </div>
                
                {/* Floating elements around phone */}
                <div className="absolute -top-4 -right-4 gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-glow animate-pulse-glow">
                  Coming Soon
                </div>
                
                <div className="absolute -bottom-8 -left-8 bg-background/95 backdrop-blur-sm border-2 border-primary/20 px-5 py-3 rounded-xl text-sm font-medium shadow-card">
                  🎓 For College Students
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;