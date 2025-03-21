
import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Sparkles, Phone, Image, Star, MapPin } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ServiceCard from '../components/ServiceCard';
import GalleryItem from '../components/GalleryItem';
import TestimonialCard from '../components/TestimonialCard';

const Index = () => {
  const galleryImages = [
    'https://images.unsplash.com/photo-1604654894610-df63bc536371',
    'https://images.unsplash.com/photo-1604654894610-df63bc536371',
    'https://images.unsplash.com/photo-1604654894610-df63bc536371',
    'https://images.unsplash.com/photo-1604654894610-df63bc536371',
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/10"></div>
          <img
            src="https://images.unsplash.com/photo-1600897435450-70921b22eb68?auto=format&fit=crop&q=80"
            alt="Beautiful nail art"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="section-container z-10 text-white">
          <AnimatedSection animation="slide-up" className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Nu Image Nails Spa
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Your Destination for Stunning Nails in Lincoln Square
            </p>
            <p className="text-base md:text-lg mb-10 text-white/80">
              Expert Nail Artistry, Impeccable Service, Beautiful Results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7735615841" className="button-primary">
                Book an Appointment
              </a>
              <Link to="/services" className="button-secondary bg-white/10 border-white/20 text-white hover:bg-white/20">
                View Our Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-float">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2 animate-slide-down"></div>
          </div>
          <span className="text-white/50 text-xs mt-2">Scroll down</span>
        </div>
      </section>

      {/* About Section (Brief) */}
      <section className="section-container">
        <AnimatedSection animation="fade-in" className="text-center max-w-3xl mx-auto">
          <span className="px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 inline-block">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Welcome to Nu Image Nails Spa</h2>
          <p className="text-muted-foreground mb-8">
            Located in the heart of Lincoln Square, Chicago, Nu Image Nails Spa is dedicated to providing
            exceptional nail care services. We specialize in creating beautiful, unique nail designs
            tailored to your personal style. Our team of skilled technicians uses only high-quality
            products to ensure the best results. We welcome both appointments and walk-ins.
          </p>
          <Link to="/about" className="text-primary font-medium hover:underline">
            Learn more about us →
          </Link>
        </AnimatedSection>
      </section>

      {/* Featured Services */}
      <section className="section-container py-16 bg-secondary/50">
        <AnimatedSection animation="fade-in" className="text-center">
          <span className="px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4 inline-block">
            Our Services
          </span>
          <h2 className="section-title">Featured Services</h2>
          <p className="section-subtitle">
            We offer a wide range of nail care services to enhance your natural beauty
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <AnimatedSection animation="slide-up" delay={100}>
            <ServiceCard
              title="Manicures"
              description="Pamper your hands with our luxurious manicure services, from basic to deluxe treatments."
              icon={Scissors}
              color="nu-pink"
            />
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={200}>
            <ServiceCard
              title="Pedicures"
              description="Treat your feet to our rejuvenating pedicure services, designed to relax and beautify."
              icon={Sparkles}
              color="nu-purple"
            />
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={300}>
            <ServiceCard
              title="Nail Art"
              description="Express your personality with our custom nail art designs, created by our talented technicians."
              icon={Image}
              color="nu-blue"
            />
          </AnimatedSection>
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="button-primary">
            View All Services
          </Link>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="section-container">
        <AnimatedSection animation="fade-in" className="text-center">
          <span className="px-4 py-1 rounded-full bg-nu-coral/10 text-nu-coral text-sm font-medium mb-4 inline-block">
            Our Work
          </span>
          <h2 className="section-title">Gallery Showcase</h2>
          <p className="section-subtitle">
            Browse through our collection of stunning nail designs
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {galleryImages.map((image, index) => (
            <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
              <GalleryItem src={`${image}?w=600&h=600&fit=crop`} alt="Nail design" />
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/gallery" className="button-primary">
            View Full Gallery
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-container bg-secondary/50 py-16">
        <AnimatedSection animation="fade-in" className="text-center">
          <span className="px-4 py-1 rounded-full bg-nu-purple/10 text-nu-purple text-sm font-medium mb-4 inline-block">
            Testimonials
          </span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <AnimatedSection animation="slide-up" delay={100}>
            <TestimonialCard
              name="Sarah Johnson"
              rating={5}
              text="The best nail salon I've been to in Chicago! The staff is friendly and very talented. My nails looked amazing and lasted for weeks!"
            />
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={200}>
            <TestimonialCard
              name="Emily Chen"
              rating={5}
              text="I love coming to Nu Image for my manicures. The salon is clean and the service is always excellent. Their nail art is outstanding!"
            />
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={300}>
            <TestimonialCard
              name="Michael Williams"
              rating={4}
              text="Great experience! The staff was attentive and took their time to ensure everything was perfect. Will definitely be returning."
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Location & Contact CTA */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slide-right">
            <div className="rounded-xl overflow-hidden h-[400px] shadow-elegant">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.2184115892647!2d-87.6787209!3d41.9762752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd1fd01c3d619%3A0x509c3569d8eb3f1b!2s1931%20W%20Foster%20Ave%2C%20Chicago%2C%20IL%2060640!5e0!3m2!1sen!2sus!4v1653443862975!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nu Image Nails Spa Location"
              ></iframe>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-left">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Visit Our Salon</h2>
              <p className="text-muted-foreground">
                We're conveniently located in the Lincoln Square neighborhood of Chicago. 
                Stop by for a visit or contact us to book your appointment today!
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-primary mt-1" size={22} />
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-muted-foreground">1931 W Foster Ave, Chicago, IL 60640</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="text-primary mt-1" size={22} />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-muted-foreground">(773) 561-5841</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Star className="text-primary mt-1" size={22} />
                  <div>
                    <h4 className="font-medium">Hours</h4>
                    <p className="text-muted-foreground">Monday - Saturday: 10 AM - 7 PM</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="tel:7735615841" className="button-primary">
                  Call to Book
                </a>
                <Link to="/contact" className="button-secondary">
                  Contact Us
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;
