import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { Leaf, Upload, Handshake, Truck, BarChart3, Heart, Users, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const steps = [
  { icon: Upload, title: "Donor Uploads Food", desc: "Restaurants, hotels, and households post surplus food details." },
  { icon: Handshake, title: "NGO Requests Food", desc: "NGOs browse listings and request food for their communities." },
  { icon: Truck, title: "Volunteer Delivers", desc: "Volunteers pick up and deliver food to those in need." },
];

const features = [
  { icon: Heart, title: "Food Donation", desc: "Easy-to-use platform for listing and donating surplus food." },
  { icon: Users, title: "Real-time Coordination", desc: "Connect donors, NGOs, and volunteers seamlessly." },
  { icon: Truck, title: "Volunteer Delivery", desc: "Efficient pickup and delivery system for food distribution." },
  { icon: BarChart3, title: "Analytics Dashboard", desc: "Track impact with detailed statistics and insights." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Community sharing food" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="container relative mx-auto px-4 py-24 md:py-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5">
              <Leaf className="h-4 w-4 text-primary-foreground" />
              <span className="text-sm font-medium text-primary-foreground">Reduce Food Waste</span>
            </div>
            <h1 className="font-heading text-4xl font-extrabold leading-tight text-primary-foreground md:text-6xl">
              FoodBridge
            </h1>
            <p className="mt-2 font-heading text-lg font-medium text-primary-foreground/80 md:text-xl">
              Bridging Surplus Food to Those in Need
            </p>
            <p className="mt-4 max-w-lg text-primary-foreground/70">
              FoodBridge connects food donors — restaurants, hotels, marriage halls, and households — with NGOs and volunteers to reduce waste and feed communities efficiently.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link to="/register">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20" asChild>
                <Link to="/login">Login</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold">How It Works</h2>
            <p className="mt-2 text-muted-foreground">Three simple steps to make a difference</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="stat-card text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                <p className="mt-2 text-sm font-semibold text-primary">Step {i + 1}</p>
                <h3 className="mt-1 font-heading text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold">Platform Features</h2>
            <p className="mt-2 text-muted-foreground">Everything you need to fight food waste</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="stat-card group cursor-default"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                  <f.icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
                </div>
                <h3 className="mt-4 font-heading text-base font-bold">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground">Ready to Make a Difference?</h2>
          <p className="mt-2 text-primary-foreground/80">Join FoodBridge today and help reduce food waste in your community.</p>
          <Button size="lg" variant="secondary" className="mt-6" asChild>
            <Link to="/register">Join FoodBridge <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="container mx-auto grid gap-8 px-4 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-primary" />
              <span className="font-heading text-lg font-bold">FoodBridge</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">Bridging surplus food to those in need. Together we can reduce waste and feed communities.</p>
          </div>
          <div>
            <h4 className="font-heading font-semibold">Quick Links</h4>
            <div className="mt-3 space-y-2 text-sm text-muted-foreground">
              <p><Link to="/food-listings" className="hover:text-foreground">Food Listings</Link></p>
              <p><Link to="/analytics" className="hover:text-foreground">Analytics</Link></p>
              <p><Link to="/register" className="hover:text-foreground">Register</Link></p>
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold">Contact</h4>
            <div className="mt-3 space-y-2 text-sm text-muted-foreground">
              <p>contact@foodbridge.org</p>
              <p>+91 98765 43210</p>
              <p>Hyderabad, India</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-8 border-t border-border px-4 pt-6 text-center text-sm text-muted-foreground">
          © 2026 FoodBridge. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
