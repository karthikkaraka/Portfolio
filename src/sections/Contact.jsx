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
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 17.3 3.438 21.8 8.205 23.385C8.805 23.495 9.025 23.127 9.025 22.808C9.025 22.52 9.015 21.755 9.01 20.74C5.672 21.465 4.968 19.13 4.968 19.13C4.425 17.75 3.645 17.385 3.645 17.385C2.557 16.643 3.728 16.658 3.728 16.658C4.93 16.743 5.564 17.895 5.564 17.895C6.634 19.728 8.37 19.2 9.052 18.895C9.16 18.12 9.47 17.59 9.812 17.29C7.147 16.99 4.345 15.958 4.345 11.358C4.345 10.048 4.81 8.978 5.578 8.138C5.455 7.833 5.045 6.61 5.694 4.96C5.694 4.96 6.7 4.638 8.99 6.19C9.948 5.922 10.978 5.79 12.002 5.785C13.023 5.79 14.053 5.922 15.012 6.19C17.3 4.638 18.303 4.96 18.303 4.96C18.955 6.61 18.545 7.833 18.423 8.138C19.193 8.978 19.654 10.048 19.654 11.358C19.654 15.97 16.848 16.985 14.175 17.28C14.605 17.65 14.99 18.38 14.99 19.505C14.99 21.113 14.975 22.41 14.975 22.802C14.975 23.125 15.19 23.502 15.8 23.382C20.563 21.795 24 17.3 24 12C24 5.37 18.63 0 12 0Z" fill="#F5F5F0"/>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#0A66C2"/>
    <path d="M8.5 19H5.5V9.5H8.5V19ZM7 8.22C6.03 8.22 5.25 7.44 5.25 6.47C5.25 5.5 6.03 4.72 7 4.72C7.97 4.72 8.75 5.5 8.75 6.47C8.75 7.44 7.97 8.22 7 8.22ZM19 19H16V14.12C16 12.95 15.98 11.45 14.38 11.45C12.75 11.45 12.5 12.72 12.5 14.04V19H9.5V9.5H12.38V10.8H12.42C12.82 10.04 13.8 9.25 15.24 9.25C18.24 9.25 18.8 11.23 18.8 13.81V19H19Z" fill="white"/>
  </svg>
);

const GmailIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" fill="#eeeeee"/>
    <path d="M22 6c0-1.1-.9-2-2-2h-3v7l5-3.75V6z" fill="#EA4335"/>
    <path d="M2 6v3.25L7 11V4H4c-1.1 0-2 .9-2 2z" fill="#C5221F"/>
    <path d="M2 18c0 1.1.9 2 2 2h3v-9l-5 3.75V18z" fill="#4285F4"/>
    <path d="M17 11v9h3c1.1 0 2-.9 2-2v-5.75L17 11z" fill="#34A853"/>
    <path d="M7 11v9h10v-9L12 7.25 7 11z" fill="#EA4335"/>
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
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <GmailIcon className="w-5 h-5" />
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
