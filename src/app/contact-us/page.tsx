'use client';

import Navigation from '../../../components/navigation';
import Footer from '../../../components/footer';
import imageLoader from '@/lib/imageLoader';
import { motion } from 'framer-motion';
import { useContactForm } from '@/hooks/useContactForm';

const ContactPage = () => {
  const heroImageUrl = imageLoader({ src: '/v1755236122/mirage/fv7qgb3ihskuxhus2mkm.jpg', width: 1920 });
  const contactInfo = [
    {
      label: "Email",
      value: "info@miragetiles.com",
      href: "mailto:info@miragetiles.com"
    },
    {
      label: "Phone",
      value: "0700 386458 / 0754 434566",
      href: "tel:+256700386458"
    },
    {
      label: "Address",
      value: "Hardware City, Mulwana Rd, Kampala",
      href: "https://maps.app.goo.gl/ne3Dboem7eWJadXV8"
    }
  ];

  const {
    formData,
    isSubmitting,
    submitSuccess,
    submitError,
    handleSubmit,
    handleInputChange,
  } = useContactForm({
    endpoint: 'https://mfss.aptusagency.com/submit/5BM7Q3Hqy4'
  });

  return (
    <>
      <Navigation />
      <main>

        <motion.section
          className="relative h-[50vh] bg-background flex items-center justify-center text-center mt-16 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Background Image Div */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20"
            style={{
              backgroundImage: `url(${heroImageUrl})`,
              backgroundRepeat: 'no-repeat',
            }}
          />

          {/* Centered Text Content */}
          <motion.div
            className="relative z-10 px-6" // Added padding for mobile
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <h1 className="text-display text-foreground mb-4">Contact Us</h1>
            <p className="text-body text-text-secondary max-w-2xl mx-auto">
              We&apos;d love to hear from you. Get in touch with us for any inquiries or to start your next project.
            </p>
          </motion.div>
        </motion.section>

        <section className="section-padding bg-surface">
          <div className="container-luxury">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div>
                <h2 className="text-heading text-foreground mb-8">
                  Get in Touch
                </h2>
                <div className="space-y-8 mb-12">
                  {contactInfo.map((item, index) => (
                    <div key={index}>
                      <div className="text-small text-gold uppercase tracking-widest mb-2">
                        {item.label}
                      </div>
                      <a
                        href={item.href}
                        className="text-body text-foreground hover:text-gold transition-colors duration-300"
                      >
                        {item.value}
                      </a>
                    </div>
                  ))}
                </div>

                <h3 className="text-subheading text-foreground mb-4">Business Hours</h3>
                <p className="text-body text-text-secondary">Mon - Fri: 8:00 AM - 6:00 PM</p>
                <p className="text-body text-text-secondary">Sat: 9:00 AM - 2:00 PM</p>
              </div>

              {/* Contact Form */}
              <div className="card-luxury p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Success Message */}
                  {submitSuccess && (
                    <div className="p-4 bg-gold/10 border border-gold rounded-md">
                      <p className="text-gold text-body">
                        Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                      </p>
                    </div>
                  )}

                  {/* Error Message */}
                  {submitError && (
                    <div className="p-4 bg-red-500/10 border border-red-500 rounded-md">
                      <p className="text-red-500 text-body">
                        {submitError}
                      </p>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-small text-text-secondary uppercase tracking-wide mb-3 block">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full bg-transparent border border-gold outline-none px-4 py-3 text-foreground transition-colors duration-300 rounded-md disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label className="text-small text-text-secondary uppercase tracking-wide mb-3 block">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full bg-transparent border border-gold outline-none px-4 py-3 text-foreground transition-colors duration-300 rounded-md disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-small text-text-secondary uppercase tracking-wide mb-3 block">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full bg-transparent border border-gold outline-none px-4 py-3 text-foreground transition-colors duration-300 rounded-md disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label className="text-small text-text-secondary uppercase tracking-wide mb-3 block">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full bg-transparent border border-gold outline-none px-4 py-3 text-foreground transition-colors duration-300 resize-none rounded-md disabled:opacity-50"
                      placeholder="Send in an order, or request..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="h-[50vh] bg-background">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d838.7433617994279!2d32.61349126897555!3d0.3142913057003377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb8a14193dd5%3A0x6a56f2511af261e1!2sMirage%20Tiles%20Ltd!5e0!3m2!1sen!2sug!4v1761592513895!5m2!1sen!2sug"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
