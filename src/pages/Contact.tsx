
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon!",
    });
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow py-6 md:py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-restaurant-gold mb-8 text-center">Contact Us</h1>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-2xl font-bold text-restaurant-gold mb-4">Get In Touch</h2>
                <p className="text-gray-300 mb-6">
                  We'd love to hear from you! Whether you have a question about our menu, want to make a reservation,
                  or have feedback to share, feel free to reach out to us.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Address</h3>
                    <p className="text-gray-300">Pusat Pembangunan Usahawan,</p>
                    <p className="text-gray-300">Jabatan Perkhidmatan Veterinar,</p>
                    <p className="text-gray-300">Jalan Tuanku Antah, Off Jalan Rahang,</p>
                    <p className="text-gray-300">70100 Seremban, Negeri Sembilan</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white">Phone</h3>
                    <p className="text-gray-300">+60 12-345 6789</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white">Email</h3>
                    <p className="text-gray-300">info@cottagesteak.com</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white">Hours</h3>
                    <p className="text-gray-300">Monday - Friday: 10am - 10pm</p>
                    <p className="text-gray-300">Saturday - Sunday: 9am - 11pm</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-restaurant-gold mb-4">Send Us A Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-white mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-restaurant-gold text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-restaurant-gold text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-white mb-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-restaurant-gold text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-restaurant-gold text-white"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="bg-restaurant-gold text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-500 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.5359453634686!2d101.93294437495814!3d2.6815359970803147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cde25cd8cad985%3A0xa1bef438307bba97!2sCottage%20Steak%20Cafe%20%26%20Grill!5e0!3m2!1sen!2smy!4v1712476875591!5m2!1sen!2smy"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
