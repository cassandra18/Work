import { useState, ChangeEvent, FormEvent } from 'react';

export const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', form);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-green-700 mb-4">📬 Send Us a Message</h2>
      <input type="text" name="name" placeholder="Name" required onChange={handleChange} className="w-full p-2 border border-green-600 rounded mb-4" />
      <input type="email" name="email" placeholder="Email" required onChange={handleChange} className="w-full p-2 border border-green-600 rounded mb-4" />
      <select name="subject" onChange={handleChange} className="w-full p-2 border border-green-600 rounded mb-4">
        <option value="">Select Subject</option>
        <option value="Admissions">Admissions</option>
        <option value="Support">Support</option>
        <option value="General">General Inquiry</option>
      </select>
      <textarea name="message" placeholder="Message" required rows={5} onChange={handleChange} className="w-full p-2 border border-green-600 rounded mb-4"></textarea>
      <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">Send</button>
    </form>
  );
};
