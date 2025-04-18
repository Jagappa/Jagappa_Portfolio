import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formBody = new FormData();
    formBody.append('access_key', 'bf65766a-d7b2-4b53-b446-ceb7f5c202c7'); // ✅ Your Web3Forms key
    formBody.append('name', formData.name);
    formBody.append('email', formData.email);
    formBody.append('message', formData.message);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formBody,
      });

      const result = await res.json();

      if (result.success) {
        toast({
          title: 'Message sent successfully!',
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message || 'Something went wrong.');
      }
    } catch (error) {
      toast({
        title: 'Error sending message',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contact</h2>

        <div className="max-w-2xl mx-auto">
          <div className="bg-portfolio-card rounded-lg shadow-lg p-6 md:p-8 card-hover">
            <h3 className="text-2xl font-bold mb-6">
              Contact <span className="text-portfolio-accent">Me!</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="access_key" value="bf65766a-d7b2-4b53-b446-ceb7f5c202c7" />

              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-portfolio-dark border border-gray-700 rounded-md p-3 text-white 
                  focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:border-transparent"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full bg-portfolio-dark border border-gray-700 rounded-md p-3 text-white 
                  focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:border-transparent"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows={5}
                  className="w-full bg-portfolio-dark border border-gray-700 rounded-md p-3 text-white 
                  focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:border-transparent"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary min-w-[160px] flex items-center justify-center"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
