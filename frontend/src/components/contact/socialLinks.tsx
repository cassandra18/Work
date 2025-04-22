import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export const SocialLinks = () => (
  <div className="flex space-x-4 justify-center mt-6 text-xl text-green-700">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
  </div>
);
