
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Crown, Zap } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      description: "Perfect for getting started",
      icon: Zap,
      features: [
        "5 templates per month",
        "Basic Marathi fonts",
        "Standard resolution downloads",
        "Watermark on downloads",
        "Basic editing tools"
      ],
      buttonText: "Get Started Free",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Pro",
      price: "₹299",
      period: "per month",
      description: "For individuals & small businesses",
      icon: Crown,
      features: [
        "Unlimited templates",
        "Premium Marathi fonts",
        "High-resolution downloads",
        "No watermarks",
        "Advanced editing tools",
        "Priority support",
        "Commercial usage rights"
      ],
      buttonText: "Start Pro Trial",
      buttonVariant: "default" as const,
      popular: true
    },
    {
      name: "Business",
      price: "₹999",
      period: "per month",
      description: "For teams & agencies",
      icon: Crown,
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom branding",
        "API access",
        "Advanced analytics",
        "Dedicated support",
        "Custom templates",
        "White-label solution"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start free and upgrade when you need more features. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-2xl transition-all duration-300 border-0 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white scale-105 shadow-2xl' 
                  : 'bg-white hover:scale-105'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <div className={`inline-flex p-3 rounded-2xl mb-4 ${
                  plan.popular 
                    ? 'bg-white/20' 
                    : 'bg-gradient-to-r from-purple-500 to-pink-500'
                }`}>
                  <plan.icon className={`h-8 w-8 ${plan.popular ? 'text-white' : 'text-white'}`} />
                </div>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={`text-sm ${plan.popular ? 'text-white/80' : 'text-gray-500'}`}>
                    /{plan.period}
                  </span>
                </div>
                <p className={`text-sm ${plan.popular ? 'text-white/80' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                <Button 
                  className={`w-full mb-6 ${
                    plan.popular 
                      ? 'bg-white text-purple-600 hover:bg-gray-100' 
                      : plan.buttonVariant === 'outline'
                        ? 'border-2 border-purple-300 text-purple-600 hover:bg-purple-50'
                        : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white'
                  }`}
                  variant={plan.popular ? 'secondary' : plan.buttonVariant}
                >
                  {plan.buttonText}
                </Button>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                        plan.popular ? 'text-white' : 'text-green-500'
                      }`} />
                      <span className={`text-sm ${
                        plan.popular ? 'text-white/90' : 'text-gray-600'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All plans include 7-day free trial • No setup fees • Cancel anytime
          </p>
          <p className="text-sm text-gray-500">
            Prices in Indian Rupees (INR) • GST applicable as per Indian tax laws
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
