import { useState, useRef } from 'react';
import { Mail, Send, CheckCircle2, AlertTriangle, MapPin, XCircle } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import emailjs from '@emailjs/browser';

// ─── EmailJS Configuration ───────────────────────────────────────────
// Follow these steps to set up EmailJS:
//
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Add an Email Service:
//    - Go to "Email Services" → "Add New Service"
//    - Choose "Gmail" → Connect your Gmail (karthikkaraka444@gmail.com)
//    - Note down the Service ID (e.g., "service_xxxxxxx")
//
// 3. Create an Email Template:
//    - Go to "Email Templates" → "Create New Template"
//    - Set the template content like this:
//      Subject: {{subject}}
//      Body:
//        New message from your portfolio:
//
//        Name: {{from_name}}
//        Email: {{from_email}}
//        Subject: {{subject}}
//
//        Message:
//        {{message}}
//    - Note down the Template ID (e.g., "template_xxxxxxx")
//
// 4. Get your Public Key:
//    - Go to "Account" → "General" tab
//    - Copy the "Public Key"
//
// 5. Replace the values below with your actual IDs:
// ─────────────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = 'service_i6xlr0e';   // e.g., "service_abc1234"
const EMAILJS_TEMPLATE_ID = 'template_1y91nfe'; // e.g., "template_xyz5678"
const EMAILJS_PUBLIC_KEY = 'ggi6m6GUjxYH2TQA_';    // e.g., "AbCdEfGhIjKlMnOp"

const GithubIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const { email, linkedin, location } = resumeData.personal;
  const formRef = useRef();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: null
      });
    }
    // Clear any previous submit error when user starts typing again
    if (submitError) setSubmitError(null);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name.';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    
    if (!formData.subject.trim()) newErrors.subject = 'Please specify a subject.';
    if (!formData.message.trim()) newErrors.message = 'Please write a message.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Send email via EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: email, // karthikkaraka444@gmail.com from resumeData
        },
        EMAILJS_PUBLIC_KEY
      );

      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitError(
        'Failed to send message. Please try again or email me directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-brand-bg-secondary relative overflow-hidden bg-grid-pattern">
      <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Title Section */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="editorial-label">
              [ 07 / CONNECT ]
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2 font-heading tracking-tight">
              GET IN TOUCH
            </h2>
          </div>
          <span className="font-mono text-xs text-brand-muted/70 tracking-widest uppercase">
            // Let's Collaborate
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact details cards */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading tracking-tight mb-4 leading-tight">
              Let's Discuss Opportunities & Collaborations
            </h3>
            
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-light mb-8">
              I am actively seeking software development internships, full-time engineering roles, and open-source collaborations. Drop me a line, and let's build something secure!
            </p>

            <div className="space-y-4 pt-4">
              
              {/* Email link */}
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.005] border border-white/5 hover:border-brand-primary/20 hover:bg-brand-primary/5 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-mono text-[9px] uppercase tracking-wider text-brand-muted font-bold">Email Me</h4>
                  <span className="font-mono text-xs text-white font-semibold mt-1 break-all">{email}</span>
                </div>
              </a>

              {/* LinkedIn Link */}
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.005] border border-white/5 hover:border-brand-secondary/20 hover:bg-brand-secondary/5 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-secondary shrink-0">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-mono text-[9px] uppercase tracking-wider text-brand-muted font-bold">LinkedIn</h4>
                  <span className="font-mono text-xs text-white font-semibold mt-1">linkedin.com/in/karaka-karthik</span>
                </div>
              </a>

              {/* Location display */}
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.005] border border-white/5 shrink-0">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-muted shrink-0">
                  <MapPin className="w-5 h-5 text-brand-secondary" />
                </div>
                <div>
                  <h4 className="font-mono text-[9px] uppercase tracking-wider text-brand-muted font-bold">Location</h4>
                  <span className="font-mono text-xs text-white font-semibold mt-1">{location}</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact form - Editorial flat inputs */}
          <div className="lg:col-span-7">
            <div className="editorial-card p-6 sm:p-8 md:p-10 rounded-3xl text-left bg-white/[0.005]">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="font-mono text-[9px] uppercase tracking-widest text-brand-muted font-bold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={`w-full px-4 py-3.5 rounded-lg text-sm editorial-input font-medium ${
                      errors.name ? 'border-red-500/35 bg-red-500/[0.01]' : ''
                    }`}
                  />
                  {errors.name && (
                    <span className="text-[10px] text-red-400 font-mono flex items-center gap-1 mt-1">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="font-mono text-[9px] uppercase tracking-widest text-brand-muted font-bold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="yourname@example.com"
                    className={`w-full px-4 py-3.5 rounded-lg text-sm editorial-input font-medium ${
                      errors.email ? 'border-red-500/35 bg-red-500/[0.01]' : ''
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[10px] text-red-400 font-mono flex items-center gap-1 mt-1">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Subject field */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="font-mono text-[9px] uppercase tracking-widest text-brand-muted font-bold">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject of discussion"
                    className={`w-full px-4 py-3.5 rounded-lg text-sm editorial-input font-medium ${
                      errors.subject ? 'border-red-500/35 bg-red-500/[0.01]' : ''
                    }`}
                  />
                  {errors.subject && (
                    <span className="text-[10px] text-red-400 font-mono flex items-center gap-1 mt-1">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="font-mono text-[9px] uppercase tracking-widest text-brand-muted font-bold">
                    Message Body
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Details of your message..."
                    className={`w-full px-4 py-3.5 rounded-lg text-sm editorial-input font-medium resize-none ${
                      errors.message ? 'border-red-500/35 bg-red-500/[0.01]' : ''
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[10px] text-red-400 font-mono flex items-center gap-1 mt-1">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 font-mono text-xs uppercase tracking-widest text-white bg-brand-primary rounded-lg hover:bg-brand-primary/95 transition-all duration-300 active:scale-[0.99] disabled:opacity-50 cursor-pointer shadow-lg shadow-brand-primary/10"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-3 h-3 border border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Secure Message</span>
                    </>
                  )}
                </button>

                {/* Success Banner */}
                {isSuccess && (
                  <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 text-emerald-400 rounded-xl font-mono text-[10px] flex items-center gap-3 animate-fade-in font-bold uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500" />
                    <span>Success // Message sent successfully</span>
                  </div>
                )}

                {/* Error Banner */}
                {submitError && (
                  <div className="p-4 bg-red-500/5 border border-red-500/20 text-red-400 rounded-xl font-mono text-[10px] flex items-center gap-3 animate-fade-in font-bold uppercase tracking-wider">
                    <XCircle className="w-4 h-4 shrink-0 text-red-500" />
                    <span>{submitError}</span>
                  </div>
                )}

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
