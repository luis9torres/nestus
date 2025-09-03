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
    <section id="features" className="nestus-section-alt text-white">
      <div className="nestus-container max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 px-6 py-3 text-sm font-semibold rounded-full">
            🚀 Powerful Features
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Everything You Need for 
            <span className="block text-white/90 mt-2">
              College Success
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            NestUS brings together all aspects of your student life into one beautifully designed, easy-to-use mobile app.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index}
                className="group bg-white/10 backdrop-blur-sm border-white/20 hover:border-white/40 hover:bg-white/15 transition-smooth shadow-card hover:shadow-feature hover:-translate-y-2 animate-stagger overflow-hidden"
                style={{animationDelay: `${index * 0.15}s`}}
              >
                <CardContent className="p-0">
                  
                  {/* Feature Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={feature.image}
                      alt={`${feature.title} - NestUS App Feature Screenshot`}
                      className="w-full h-64 object-cover transition-smooth group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Badge Overlay */}
                    <Badge className="absolute top-4 left-4 bg-white/90 text-primary border-0 font-semibold">
                      {feature.badge}
                    </Badge>
                    
                    {/* Icon Overlay */}
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-glow">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  
                  {/* Feature Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-white/90 transition-smooth">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Features List */}
        <div className="text-center animate-slide-up">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">And So Much More...</h3>
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
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-3 rounded-full hover:bg-white/20 hover:border-white/40 transition-smooth animate-stagger"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <item.icon className="h-5 w-5 text-white" />
                <span className="text-sm font-medium text-white">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;