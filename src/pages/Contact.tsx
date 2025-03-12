
import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import Card from '@/components/Card';

const Contact = () => {
  return (
    <div className="container px-4 py-16 mx-auto">
      <div className="space-y-4 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-display animate-fade-in">Contact Us</h1>
        <p className="text-xl text-muted-foreground max-w-3xl animate-fade-in-slow">
          Reach out to us for inquiries, quotes, or to discuss your construction needs. Our team is ready to assist you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <ContactForm />
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-muted-foreground">+251 11 123 4567</p>
                <p className="text-muted-foreground">+251 91 234 5678</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-muted-foreground">info@ethioconstruct.com</p>
                <p className="text-muted-foreground">sales@ethioconstruct.com</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Location</h3>
                <p className="text-muted-foreground">Bole Road, Addis Ababa</p>
                <p className="text-muted-foreground">Ethiopia, East Africa</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-0 overflow-hidden h-64">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5512055978117!2d38.758915!3d9.010939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1709234567890!5m2!1sen!2sus" 
              className="w-full h-full border-0" 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
