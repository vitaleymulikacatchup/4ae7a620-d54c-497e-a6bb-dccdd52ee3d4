"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import { Award, Briefcase, Building, DollarSign, Heart, Linkedin, Mail, MessageCircle, Package, Phone, Scale, Star, TrendingUp, Trophy, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Law Firm"
          button={{
            text: "Free Consultation",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Expert Legal Representation You Can Trust"
          description="Our experienced attorneys provide comprehensive legal services with a commitment to protecting your rights and achieving the best possible outcomes for your case."
          tag="Legal Excellence"
          tagIcon={Scale}
          buttons={[
            {
              text: "Free Consultation",
              href: "contact"
            },
            {
              text: "Our Practice Areas",
              href: "feature"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/8111879/pexels-photo-8111879.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Professional law office interior"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Why Choose Our Law Firm"
          description="With decades of combined experience, we deliver strategic legal solutions tailored to your unique needs and circumstances."
          tag="Our Approach"
          tagIcon={Award}
          bulletPoints={[
            {
              title: "Experienced Attorneys",
              description: "Our team brings over 50 years of combined legal experience across multiple practice areas.",
              icon: Users
            },
            {
              title: "Personalized Service",
              description: "We provide individualized attention and customized legal strategies for every client.",
              icon: Heart
            },
            {
              title: "Proven Track Record",
              description: "Successful outcomes in thousands of cases with a 98% client satisfaction rate.",
              icon: Trophy
            }
          ]}
          imageSrc="https://images.pexels.com/photos/8111879/pexels-photo-8111879.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Law firm team meeting"
          imagePosition="left"
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Our Practice Areas"
          description="We provide comprehensive legal services across multiple practice areas to meet all your legal needs."
          tag="Legal Services"
          tagIcon={Briefcase}
          features={[
            {
              title: "Corporate Law",
              description: "Business formation, contracts, mergers, acquisitions, and corporate compliance matters.",
              imageSrc: "https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Corporate law handshake"
            },
            {
              title: "Family Law",
              description: "Divorce, child custody, adoption, and other family-related legal matters handled with care.",
              imageSrc: "https://images.pexels.com/photos/7841811/pexels-photo-7841811.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Family law consultation"
            },
            {
              title: "Criminal Defense",
              description: "Aggressive defense representation for criminal charges at all levels of the legal system.",
              imageSrc: "https://images.pexels.com/photos/6069509/pexels-photo-6069509.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Criminal defense attorney"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardThree
          title="Legal Service Packages"
          description="Choose from our comprehensive legal service packages designed for different needs and budgets."
          tag="Service Packages"
          tagIcon={Package}
          products={[
            {
              id: "consultation",
              name: "Initial Legal Consultation",
              price: "$200",
              imageSrc: "https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Legal consultation service"
            },
            {
              id: "document-review",
              name: "Contract Review & Analysis",
              price: "$500",
              imageSrc: "https://images.pexels.com/photos/7841811/pexels-photo-7841811.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Document review service"
            },
            {
              id: "full-representation",
              name: "Full Legal Representation",
              price: "$2,500",
              imageSrc: "https://images.pexels.com/photos/6069509/pexels-photo-6069509.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Full legal representation"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Transparent Legal Fees"
          description="Our pricing is straightforward with no hidden fees. Choose the service level that best fits your needs."
          tag="Pricing"
          tagIcon={DollarSign}
          plans={[
            {
              id: "consultation",
              price: "$200/hr",
              name: "Legal Consultation",
              buttons: [
                {
                  text: "Schedule Now",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "about"
                }
              ],
              features: [
                "Initial case assessment",
                "Legal advice and guidance",
                "Document review",
                "Next steps consultation"
              ]
            },
            {
              id: "representation",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$350/hr",
              name: "Full Representation",
              buttons: [
                {
                  text: "Get Started",
                  href: "contact"
                },
                {
                  text: "View Details",
                  href: "feature"
                }
              ],
              features: [
                "Complete case management",
                "Court representation",
                "Document preparation",
                "Settlement negotiations",
                "24/7 case updates"
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardThree
          title="Our Track Record"
          description="Numbers that demonstrate our commitment to excellence and client success."
          tag="Results"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              icon: Scale,
              title: "Cases Won",
              value: "2,500+"
            },
            {
              id: "2",
              icon: Users,
              title: "Satisfied Clients",
              value: "5,000+"
            },
            {
              id: "3",
              icon: Award,
              title: "Years Experience",
              value: "25+"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Legal Team"
          description="Our experienced attorneys are dedicated to providing exceptional legal representation and personalized service."
          tag="Our Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Michael Johnson",
              role: "Senior Partner",
              description: "With over 20 years of experience in corporate and criminal law, Michael leads our legal team with expertise and integrity.",
              imageSrc: "https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Johnson, Senior Partner",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com/in/michael-johnson"
                },
                {
                  icon: Mail,
                  url: "mailto:mjohnson@lawfirm.com"
                }
              ]
            },
            {
              id: "2",
              name: "Sarah Martinez",
              role: "Family Law Attorney",
              description: "Sarah specializes in family law matters and is known for her compassionate approach to sensitive legal issues.",
              imageSrc: "https://images.pexels.com/photos/8730374/pexels-photo-8730374.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Martinez, Family Law Attorney",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com/in/sarah-martinez"
                },
                {
                  icon: Mail,
                  url: "mailto:smartinez@lawfirm.com"
                }
              ]
            },
            {
              id: "3",
              name: "David Chen",
              role: "Corporate Attorney",
              description: "David brings extensive experience in business law and corporate transactions to serve our commercial clients.",
              imageSrc: "https://images.pexels.com/photos/14634936/pexels-photo-14634936.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Chen, Corporate Attorney",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com/in/david-chen"
                },
                {
                  icon: Mail,
                  url: "mailto:dchen@lawfirm.com"
                }
              ]
            },
            {
              id: "4",
              name: "Emily Rodriguez",
              role: "Criminal Defense Attorney",
              description: "Emily is a fierce advocate for her clients, specializing in criminal defense with a track record of successful outcomes.",
              imageSrc: "https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emily Rodriguez, Criminal Defense Attorney",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com/in/emily-rodriguez"
                },
                {
                  icon: Mail,
                  url: "mailto:erodriguez@lawfirm.com"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Clients Say"
          description="Don't just take our word for it. Here's what our satisfied clients have to say about our legal services."
          tag="Client Testimonials"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Robert Thompson",
              role: "CEO",
              company: "Thompson Industries",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Robert Thompson testimonial"
            },
            {
              id: "2",
              name: "Jennifer Davis",
              role: "Business Owner",
              company: "Davis Consulting",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Jennifer Davis testimonial"
            },
            {
              id: "3",
              name: "Mark Wilson",
              role: "Director",
              company: "Wilson Group",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4473398/pexels-photo-4473398.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Mark Wilson testimonial"
            },
            {
              id: "4",
              name: "Lisa Anderson",
              role: "Founder",
              company: "Anderson LLC",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8871898/pexels-photo-8871898.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Lisa Anderson testimonial"
            },
            {
              id: "5",
              name: "James Miller",
              role: "President",
              company: "Miller Corporation",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3801426/pexels-photo-3801426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "James Miller testimonial"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Leading Companies"
          description="We proudly serve Fortune 500 companies and growing businesses across various industries."
          tag="Our Clients"
          tagIcon={Building}
          logos={[
            "https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949426/pexels-photo-9949426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/2449452/pexels-photo-2449452.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Get answers to common questions about our legal services and how we can help with your case."
          faqs={[
            {
              id: "1",
              title: "What types of cases do you handle?",
              content: "We handle a wide range of legal matters including corporate law, family law, criminal defense, personal injury, and estate planning. Our experienced attorneys can provide comprehensive legal services for both individuals and businesses."
            },
            {
              id: "2",
              title: "How much do your legal services cost?",
              content: "Our fees vary depending on the complexity and type of case. We offer transparent pricing with no hidden fees. Initial consultations are available for $200/hour, and we provide detailed fee estimates before beginning any work."
            },
            {
              id: "3",
              title: "How long does a typical case take?",
              content: "Case duration varies significantly based on complexity, court schedules, and other factors. Simple matters may resolve in weeks, while complex litigation can take months or years. We'll provide realistic timelines during your consultation."
            },
            {
              id: "4",
              title: "Do you offer free consultations?",
              content: "We offer initial consultations for $200/hour. This allows us to thoroughly evaluate your case and provide meaningful legal advice. The consultation fee is often applied toward your total legal fees if you decide to retain our services."
            },
            {
              id: "5",
              title: "What should I bring to my first appointment?",
              content: "Please bring any relevant documents related to your case, including contracts, correspondence, court papers, or other materials. Also bring a list of questions and a timeline of events. This helps us better understand your situation."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          title="Ready to Discuss Your Case?"
          description="Contact us today for a consultation. Our experienced attorneys are ready to help you navigate your legal challenges with confidence."
          tagIcon={Phone}
          inputPlaceholder="Enter your email address"
          buttonText="Schedule Consultation"
          termsText="By scheduling a consultation, you agree to our Terms of Service and Privacy Policy. We respect your confidentiality."
          imageSrc="https://images.pexels.com/photos/2451616/pexels-photo-2451616.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Law office consultation room"
          mediaPosition="right"
        />
      </div>
    </ThemeProvider>
  );
}