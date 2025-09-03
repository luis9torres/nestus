import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone } from "lucide-react";
import appDashboard from "@/assets/app-dashboard.jpg";

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
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                <span className="block gradient-hero bg-clip-text text-transparent">
                  NestUS
                </span>
                <span className="block text-foreground text-3xl md:text-4xl lg:text-5xl mt-3 font-semibold">
                  Your Campus Life, Simplified
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                The all-in-one app every college student needs. Connect, organize, and thrive in your campus life.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToWaitlist}
                size="lg" 
                className="gradient-primary text-primary-foreground hover:scale-105 transition-smooth shadow-glow group px-8 py-4 text-lg rounded-2xl font-semibold"
              >
                Join Waitlist
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-base" />
              </Button>
              
              <Button 
                onClick={scrollToFeatures}
                size="lg" 
                variant="outline" 
                className="border-2 border-primary/20 text-primary hover:bg-primary/10 hover:border-primary/40 px-8 py-4 text-lg rounded-2xl transition-smooth font-semibold"
              >
                <Smartphone className="mr-2 h-5 w-5" />
                See Features
              </Button>
            </div>

            <div className="flex items-center gap-8 justify-center lg:justify-start text-muted-foreground">
              <div className="text-center animate-stagger" style={{animationDelay: '0.2s'}}>
                <div className="text-2xl font-bold text-primary">12K+</div>
                <div className="text-sm font-medium">Students Waiting</div>
              </div>
              <div className="text-center animate-stagger" style={{animationDelay: '0.4s'}}>
                <div className="text-2xl font-bold text-primary">75+</div>
                <div className="text-sm font-medium">Universities</div>
              </div>
              <div className="text-center animate-stagger" style={{animationDelay: '0.6s'}}>
                <div className="text-2xl font-bold text-primary">4.9★</div>
                <div className="text-sm font-medium">Beta Rating</div>
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