"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const pricingPlans = [
  // ---------- STATIC WEBSITE PACKAGES ----------
  {
    name: "Single Page",
    price: "$299",
    description: "",
    features: [
      "1 Page Static Website",
      "W3C Certified HTML",
      "JQuery Slider Banner",
      "Mobile Responsive Layout",
      "JQuery Slider Banners",
      "Products/Services Section",
      "Portfolio/Gallery Section",
      "Contact Us Section",
      "Lead Inquiry Form",
      "Website Favicon Design",
      "Web Page Banner Design",
      "Royalty Free Stock Image",
      "Advance UI/UX Effects",
      "Social Media Integrations",
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "5 Pages",
    price: "$499",
    description: "",
    features: [
      "5 Pages Static Website",
      "W3C Certified HTML",
      "JQuery Slider Banner",
      "Mobile Responsive Layout",
      "Home Page Layout",
      "Company Profile Page",
      "Product/Service Page",
      "Portfolio/Gallery Page",
      "Contact Us Page",
      "Lead Inquiry Form",
      "Website Favicon Design",
      "5 Web Page Banners Design",
      "5 Royalty Free Stock Images",
      "Advance UI/UX Effects",
      "Social Media Integrations",
    ],
    popular: true,
    cta: "Most Popular",
  },
  {
    name: "8 Pages",
    price: "$699",
    description: "",
    features: [
      "8 Pages Static Website",
      "W3C Certified HTML",
      "JQuery Slider Banner",
      "Mobile Responsive Layout",
      "Home Page Layout",
      "Company Profile Page",
      "Main Product/Service Page",
      "Products/Services Inner Pages",
      "Portfolio/Gallery Page",
      "Contact Us Page",
      "Lead Inquiry Form",
      "Website Favicon Design",
      "8 Web Page Banners Design",
      "8 Royalty Free Stock Images",
      "Advance UI/UX Effects",
      "Social Media Integrations",
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "12 Pages",
    price: "$899",
    description: "",
    features: [
      "12 Pages Static Website",
      "W3C Certified HTML",
      "JQuery Slider Banner",
      "Mobile Responsive Layout",
      "Home Page Layout",
      "Company Profile Page",
      "Main Product/Service Page",
      "Products/Services Inner Pages",
      "Portfolio/Gallery Page",
      "Contact Us Page",
      "Lead Inquiry Form",
      "Website Favicon Design",
      "12 Web Page Banners Design",
      "12 Royalty Free Stock Images",
      "Advance UI/UX Effects",
      "Social Media Integrations",
    ],
    popular: false,
    cta: "Contact Us",
  },

  // ---------- CMS WEBSITE PACKAGES (FROM IMAGE) ----------
  {
    name: "Single Page CMS Website",
    price: "$399",
    description: "",
    features: [
      "1 Page Custom Website",
      "CMS Admin Panel",
      "JQuery Slider Banner",
      "Mobile Responsive Layout",
      "Company Profile Section",
      "Products/Services Section",
      "Portfolio/Gallery Section",
      "Contact Us Section",
      "Lead Inquiry Form",
      "Website Favicon Design",
      "Royalty Free Stock Image",
      "Advance UI/UX Effects",
      "Social Media Integrations",
    ],
    popular: false,
    cta: "Order Now",
  },
  {
    name: "5 Pages CMS Website",
    price: "$799",
    description: "",
    features: [
      "5 Pages Custom Website",
      "CMS Admin Panel",
      "JQuery Slider Banner",
      "Mobile Responsive Layout",
      "Home Page Layout",
      "Company Profile Page",
      "Product/Service Page",
      "Portfolio/Gallery Page",
      "Contact Us Page",
      "Lead Inquiry Form",
      "Website Favicon Design",
      "5 Web Page Banners Design",
      "5 Royalty Free Stock Images",
      "Advance UI/UX Effects",
      "Social Media Integrations",
    ],
    popular: false,
    cta: "Order Now",
  },
  {
    name: "8 Pages CMS Website",
    price: "$999",
    description: "",
    features: [
      "8 Pages Custom Website",
      "CMS Admin Panel",
      "JQuery Slider Banner",
      "Mobile Responsive Layout",
      "Home Page Layout",
      "Company Profile Page",
      "Main Product/Service Page",
      "Products/Services Inner Pages",
      "Portfolio/Gallery Page",
      "Contact Us Page",
      "Lead Inquiry Form",
      "Website Favicon Design",
      "8 Web Page Banners Design",
      "8 Royalty Free Stock Images",
      "Advance UI/UX Effects",
      "Social Media Integrations",
    ],
    popular: false,
    cta: "Order Now",
  },
  {
    name: "12 Pages CMS Website",
    price: "$1299",
    description: "",
    features: [
      "12 Pages Custom Website",
      "CMS Admin Panel",
      "JQuery Slider Banner",
      "Mobile Responsive Layout",
      "Home Page Layout",
      "Company Profile Page",
      "Main Product/Service Page",
      "Products/Services Inner Pages",
      "Portfolio/Gallery Page",
      "Contact Us Page",
      "Lead Inquiry Form",
      "Website Favicon Design",
      "12 Web Page Banners Design",
      "12 Royalty Free Stock Images",
      "Advance UI/UX Effects",
      "Social Media Integrations",
      "3 Month LiveChat Support Agent",
    ],
    popular: false,
    cta: "Order Now",
  },
];

export function WebPricing() {
  return (
    <section className="py-24 lg:py-32 pt-0">
      <div className="container">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Web Design & <span className="text-gradient">Development Packages</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We create websites that not just fit your expectations, needs, and
            demands, but are budget-friendly too. Our pricing plans are customized
            in such a way considering all the business levels and scales.
          </p>
        </FadeIn>

        {/* 4 columns per row on large screens, 2 on tablets */}
        <div className="grid gap-8 max-w-6xl mx-auto md:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan, index) => (
            <FadeIn key={plan.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card
                  className={cn(
                    "h-full relative overflow-hidden transition-all duration-300",
                    plan.popular
                      ? "border-primary shadow-glow-lg bg-gradient-to-b from-primary/5 to-transparent"
                      : "border-border/50 hover:border-primary/30 bg-card/50"
                  )}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-secondary py-2 text-center">
                      <span className="text-sm font-semibold text-white flex items-center justify-center gap-1">
                        <Sparkles className="w-4 h-4" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <CardHeader
                    className={cn("text-center pb-0", plan.popular && "pt-14")}
                  >
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <div className="mb-4">
                      <span className="text-4xl md:text-5xl font-display font-bold text-foreground">
                        {plan.price}
                      </span>
                    </div>
                    {plan.description && (
                      <p className="text-sm text-muted-foreground">
                        {plan.description}
                      </p>
                    )}
                  </CardHeader>

                  <CardContent className="pt-6">
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                          <span className="text-muted-foreground text-sm">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    <Button
                      variant={plan.popular ? "hero" : "outline"}
                      size="lg"
                      className="w-full"
                      asChild
                    >
                      <Link href="/contact" className="gap-2">
                        {plan.cta}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Money-back guarantee */}
        <FadeIn delay={0.4}>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 glass-card px-6 py-4 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
                <Check className="w-6 h-6 text-success" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">
                  30-Day Money-Back Guarantee
                </p>
                <p className="text-sm text-muted-foreground">
                  Not satisfied? Full refund, no questions asked.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
