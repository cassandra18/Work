
import { ContactInfo } from '../components/contact/contactInfo';
import { ContactForm } from '../components/contact/contactForm';
import { MapEmbed } from '../components/contact/mapEmbed';
import { SocialLinks } from '../components/contact/socialLinks';

const ContactPage = () => (
  <div className="p-6 md:p-12 max-w-6xl mx-auto space-y-10 poppins-regular">
    <h1 className="text-3xl md:text-5xl font-bold text-center text-green-800 mb-4">📞 Contact Us</h1>
    <ContactInfo />
    <ContactForm />
    <MapEmbed />
    <SocialLinks />
  </div>
);

export default ContactPage;