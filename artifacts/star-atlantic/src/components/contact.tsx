import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { SiWhatsapp } from "react-icons/si";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  companyName: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Phone number is required"),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget"),
  timeline: z.string().min(1, "Please select a timeline"),
  description: z.string().min(10, "Please provide some details about your project")
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      service: "",
      budget: "",
      timeline: "",
      description: ""
    }
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Get in touch</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Ready to sound <br />extraordinary?</h3>
              <p className="text-muted-foreground text-lg font-light">
                Tell us about your project. Our team is ready to help you craft the perfect audio experience.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-1">Email</h4>
                  <a href="mailto:staratlanticproductions@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    staratlanticproductions@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-1">Phone</h4>
                  <a href="tel:+918883820208" className="text-muted-foreground hover:text-primary transition-colors block mb-3">
                    +91 88838 20208
                  </a>
                  <Button asChild size="sm" className="rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-sm">
                    <a href="https://wa.me/918883820208" target="_blank" rel="noopener noreferrer">
                      <SiWhatsapp className="w-4 h-4 mr-2" /> WhatsApp Us
                    </a>
                  </Button>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-1">Studio Address</h4>
                  <address className="text-muted-foreground not-italic leading-relaxed">
                    27/49 Shanmughamani Illam,<br />
                    Lake View Road, West Mambalam,<br />
                    Chennai – 600033, Tamil Nadu, India.
                  </address>
                  <p className="mt-4 text-sm text-muted-foreground">
                    <strong className="text-foreground font-medium">Hours:</strong> Mon–Sat 10:00 AM – 7:00 PM IST<br />
                    Sunday Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden h-64 border border-gray-100 shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.858485233192!2d80.2223789!3d13.0446702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526651347ba013%3A0x6b71b8e8f8ab3fb4!2s27%2F49%2C%20Lake%20View%20Rd%2C%20West%20Mambalam%2C%20Chennai%2C%20Tamil%20Nadu%20600033!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps location of Star Atlantic Productions"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <Card className="bg-gray-50/50 border-gray-100 shadow-none sm:shadow-xl sm:shadow-black/5 rounded-3xl overflow-hidden">
              <CardContent className="p-6 md:p-10">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-20 text-center"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold text-foreground mb-2">Message Received</h4>
                    <p className="text-muted-foreground text-lg max-w-md mx-auto">
                      Thank you for contacting Star Atlantic Productions. Our team will get back to you within 24 hours.
                    </p>
                    <Button 
                      variant="outline" 
                      className="mt-8 rounded-full border-gray-200 text-foreground hover:bg-white"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send another message
                    </Button>
                  </motion.div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground font-semibold">Full Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" className="bg-white border-gray-200 h-12 focus-visible:ring-primary shadow-sm" data-testid="input-fullname" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="companyName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground font-semibold">Company Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Acme Films" className="bg-white border-gray-200 h-12 focus-visible:ring-primary shadow-sm" data-testid="input-company" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground font-semibold">Email Address *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john@example.com" className="bg-white border-gray-200 h-12 focus-visible:ring-primary shadow-sm" data-testid="input-email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground font-semibold">Phone Number *</FormLabel>
                              <FormControl>
                                <Input placeholder="+91 98765 43210" className="bg-white border-gray-200 h-12 focus-visible:ring-primary shadow-sm" data-testid="input-phone" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-semibold">Service Required *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-white border-gray-200 h-12 focus:ring-primary shadow-sm" data-testid="select-service">
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-white border-gray-100">
                                <SelectItem value="music">Music Production</SelectItem>
                                <SelectItem value="sound-design">Sound Design</SelectItem>
                                <SelectItem value="dubbing">Dubbing</SelectItem>
                                <SelectItem value="mixing">Mixing & Mastering</SelectItem>
                                <SelectItem value="dialogue">Dialogue Editing</SelectItem>
                                <SelectItem value="podcast">Podcast Production</SelectItem>
                                <SelectItem value="audiobook">Audiobook Production</SelectItem>
                                <SelectItem value="ott">OTT Audio Post</SelectItem>
                                <SelectItem value="video-production">Complete Video Production</SelectItem>
                                <SelectItem value="ai-filmmaking">AI Film Making</SelectItem>
                                <SelectItem value="training">Training Program</SelectItem>
                                <SelectItem value="multiple">Multiple Services</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="budget"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground font-semibold">Estimated Budget *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-white border-gray-200 h-12 focus:ring-primary shadow-sm" data-testid="select-budget">
                                    <SelectValue placeholder="Select budget range" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-white border-gray-100">
                                  <SelectItem value="1l-3l">₹1L – ₹3L</SelectItem>
                                  <SelectItem value="3l-5l">₹3L – ₹5L</SelectItem>
                                  <SelectItem value="5l-10l">₹5L – ₹10L</SelectItem>
                                  <SelectItem value="10l-plus">₹10L+</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="timeline"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground font-semibold">Project Timeline *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-white border-gray-200 h-12 focus:ring-primary shadow-sm" data-testid="select-timeline">
                                    <SelectValue placeholder="Select timeline" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-white border-gray-100">
                                  <SelectItem value="asap">ASAP</SelectItem>
                                  <SelectItem value="1-2-weeks">1–2 weeks</SelectItem>
                                  <SelectItem value="1-month">1 month</SelectItem>
                                  <SelectItem value="3-months-plus">3+ months</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-semibold">Project Description *</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us about your project, creative vision, and any specific requirements..." 
                                className="bg-white border-gray-200 min-h-[120px] resize-none focus-visible:ring-primary shadow-sm" 
                                data-testid="input-description"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full h-14 text-base font-semibold rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
                        data-testid="button-submit-form"
                      >
                        Send Inquiry
                      </Button>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}
