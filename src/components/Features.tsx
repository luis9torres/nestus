import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, MapPin, Calendar, MessageSquare, Utensils } from "lucide-react";
import coursesFeature from "@/assets/courses-feature.jpg";
import socialFeature from "@/assets/social-feature.jpg";
import campusFeature from "@/assets/campus-feature.jpg";

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Smart Course Management",
      description: "Track assignments, grades, and schedules all in one place. Never miss a deadline again.",
      image: coursesFeature,
      badge: "Academic Excellence"
    },
    {
      icon: Users,
      title: "Campus Social Network", 
      description: "Connect with classmates, find study groups, and discover campus events happening around you.",
      image: socialFeature,
      badge: "Connect & Collaborate"
    },
    {
      icon: MapPin,
      title: "Campus Life Hub",
      description: "Dining menus, laundry status, library booking, and campus navigation - all at your fingertips.",
      image: campusFeature,
      badge: "Campus Services"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <Badge className="mb-4 gradient-primary text-primary-foreground px-4 py-2 text-sm font-medium">
            🚀 Powerful Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need for 
            <span className="gradient-hero bg-clip-text text-transparent block">
              College Success
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            NestUS brings together all aspects of your student life into one beautifully designed, easy-to-use mobile app.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index}
                className="group gradient-card border-primary/10 hover:border-primary/30 transition-smooth shadow-card hover:shadow-feature hover:-translate-y-2 animate-scale-bounce overflow-hidden"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <CardContent className="p-0">
                  
                  {/* Feature Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={feature.image}
                      alt={`${feature.title} Screenshot`}
                      className="w-full h-64 object-cover transition-smooth group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                    
                    {/* Badge Overlay */}
                    <Badge className="absolute top-4 left-4 gradient-primary text-primary-foreground">
                      {feature.badge}
                    </Badge>
                    
                    {/* Icon Overlay */}
                    <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm p-3 rounded-full shadow-glow">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  
                  {/* Feature Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-smooth">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Features List */}
        <div className="mt-16 text-center animate-slide-up">
          <h3 className="text-2xl font-bold mb-8">And So Much More...</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: Calendar, text: "Smart Calendar Sync" },
              { icon: MessageSquare, text: "Campus Chat Rooms" },
              { icon: Utensils, text: "Dining Hall Tracker" },
              { icon: BookOpen, text: "Study Space Finder" },
              { icon: Users, text: "Roommate Matching" },
              { icon: MapPin, text: "Campus Navigation" }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 bg-background/60 backdrop-blur-sm border border-primary/20 px-4 py-2 rounded-full hover:bg-primary/10 transition-smooth"
              >
                <item.icon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;