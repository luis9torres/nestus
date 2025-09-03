import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone } from "lucide-react";
import appDashboard from "@/assets/app-dashboard.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-accent/20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="block gradient-hero bg-clip-text text-transparent">
                  NestUS
                </span>
                <span className="block text-foreground text-3xl md:text-4xl lg:text-5xl mt-2">
                  Your Campus Life, Simplified
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                The all-in-one app every college student needs. Connect, organize, and thrive in your campus life.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="gradient-primary text-primary-foreground hover:scale-105 transition-smooth shadow-glow group px-8 py-4 text-lg rounded-2xl"
              >
                Join Waitlist
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/20 text-primary hover:bg-primary/10 px-8 py-4 text-lg rounded-2xl transition-smooth"
              >
                <Smartphone className="mr-2 h-5 w-5" />
                See Features
              </Button>
            </div>

            <div className="flex items-center gap-8 justify-center lg:justify-start text-muted-foreground">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm">Students Waiting</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm">Universities</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4.9★</div>
                <div className="text-sm">Beta Rating</div>
              </div>
            </div>
          </div>

          {/* App Preview */}
          <div className="relative animate-scale-bounce">
            <div className="relative mx-auto w-80 animate-float">
              <div className="relative">
                {/* Phone frame effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-glow to-accent rounded-3xl p-1 shadow-feature">
                  <div className="bg-background rounded-3xl p-6">
                    <img 
                      src={appDashboard}
                      alt="NestUS App Dashboard Preview"
                      className="w-full h-auto rounded-2xl shadow-lg"
                    />
                  </div>
                </div>
                
                {/* Floating elements around phone */}
                <div className="absolute -top-4 -right-4 bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium shadow-glow animate-pulse-glow">
                  Coming Soon
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-accent/20 backdrop-blur-sm border border-accent/30 px-4 py-2 rounded-xl text-sm">
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