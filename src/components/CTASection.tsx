import { useState } from "react";
import { Phone, Mail, MessageCircle, Send } from "lucide-react";

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
      }, 2000);
    }, 1500);
  };

  return (
    <section className="bg-[#f7f5f5] py-16 lg:py-24">
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#B7410E] mb-4" style={{ fontFamily: 'Gotham, sans-serif' }}>
              GET IN TOUCH
            </h2>
          <div className="w-24 h-0.5 mx-auto mb-6">
            {/* <div className="w-full h-full bg-gradient-to-r from-transparent via-[#B7410E] to-transparent"></div> */}
          </div>
          <p className="text-gray-600 text-lg md:text-xl font-[Lato,sans-serif] max-w-2xl mx-auto leading-relaxed">
            Ready to transform your restaurant vision into reality? <span className="text-[#B7410E] italic">Let's discuss your project.</span>
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-normal text-gray-900 mb-6 tracking-[0.04em] font-[Gotham,sans-serif]">
                LET'S START A CONVERSATION
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 font-[Lato,sans-serif] tracking-[0.04em]">
                Whether you're planning a new restaurant concept or looking to elevate your existing establishment, I'm here to help bring your culinary vision to life.
              </p>
            </div>

            {/* Contact Items */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#B7410E]/10 group-hover:bg-[#B7410E]/15 rounded-full flex items-center justify-center transition-colors">
                  <Phone className="w-5 h-5 text-[#B7410E]" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-wider font-[Gotham,sans-serif]">
                    Phone
                  </p>
                  <p className="text-gray-900 text-lg font-[Gotham,sans-serif]">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#B7410E]/10 group-hover:bg-[#B7410E]/15 rounded-full flex items-center justify-center transition-colors">
                  <Mail className="w-5 h-5 text-[#B7410E]" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-wider font-[Gotham,sans-serif]">
                    Email
                  </p>
                  <p className="text-gray-900 text-lg font-[Gotham,sans-serif]">
                    hello@suriludeshi.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#B7410E]/10 group-hover:bg-[#B7410E]/15 rounded-full flex items-center justify-center transition-colors">
                  <MessageCircle className="w-5 h-5 text-[#B7410E]" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-wider font-[Gotham,sans-serif]">
                    Response Time
                  </p>
                  <p className="text-gray-900 text-lg font-[Gotham,sans-serif]">
                    Within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[20px] p-0.5 bg-gradient-to-br from-[#B7410E]/10 to-[#B7410E]/5">
              {/* Animated Background Elements */}
              <div 
                className="absolute w-[400%] h-[60%] bottom-[-15px] right-[-300%] rounded-full pointer-events-none z-10 opacity-60"
                style={{
                  background: 'radial-gradient(circle, rgba(163, 67, 46, 0.3) 0%, rgba(163, 67, 46, 0.2) 15%, rgba(163, 67, 46, 0.1) 30%, transparent 50%)',
                  animation: 'floatBottom 12s ease-in-out infinite'
                }}
              ></div>
              <div 
                className="absolute w-[400%] h-[60%] top-[-15px] left-[-300%] rounded-full pointer-events-none z-10 opacity-60"
                style={{
                  background: 'radial-gradient(circle, rgba(163, 67, 46, 0.3) 0%, rgba(163, 67, 46, 0.2) 15%, rgba(163, 67, 46, 0.1) 30%, transparent 50%)',
                  animation: 'floatTop 12s ease-in-out infinite 2s'
                }}
              ></div>

              {/* Form Container */}
              <div className="relative z-20 bg-gradient-to-b from-white to-gray-50 border-2 border-[#B7410E] rounded-[20px] p-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-600 text-sm font-medium mb-2 font-[Gotham,sans-serif]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full h-10 px-3 py-2 bg-white/80 border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-[#B7410E] focus:ring-2 focus:ring-[#B7410E]/30 rounded-lg transition-all duration-300 hover:border-gray-400 text-sm outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-600 text-sm font-medium mb-2 font-[Gotham,sans-serif]">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className="w-full h-10 px-3 py-2 bg-white/80 border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-[#B7410E] focus:ring-2 focus:ring-[#B7410E]/30 rounded-lg transition-all duration-300 hover:border-gray-400 text-sm outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-600 text-sm font-medium mb-2 font-[Gotham,sans-serif]">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="w-full h-10 px-3 py-2 bg-white/80 border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-[#B7410E] focus:ring-2 focus:ring-[#B7410E]/30 rounded-lg transition-all duration-300 hover:border-gray-400 text-sm outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-600 text-sm font-medium mb-2 font-[Gotham,sans-serif]">
                      Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Tell us about your project or requirements..."
                      className="w-full px-3 py-2 bg-white/80 border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-[#B7410E] focus:ring-2 focus:ring-[#B7410E]/30 rounded-lg transition-all duration-300 hover:border-gray-400 text-sm resize-none outline-none"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-[#B7410E] hover:bg-[#B7410E]/90 hover:shadow-lg hover:shadow-[#B7410E]/25 disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:shadow-none text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group transform hover:scale-[1.02] font-[Gotham,sans-serif]"
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span>
                      {isSubmitting ? "Sending..." : isSubmitted ? "Message Sent!" : "Send Message"}
                    </span>
                  </button>

                  <p className="text-gray-500 text-xs text-center mt-4">
                    * Required fields
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatBottom {
          0%, 100% { 
            transform: translateX(0) rotate(0deg); 
          }
          50% { 
            transform: translateX(-50px) rotate(180deg); 
          }
        }
        
        @keyframes floatTop {
          0%, 100% { 
            transform: translateX(0) rotate(0deg); 
          }
          50% { 
            transform: translateX(50px) rotate(-180deg); 
          }
        }
      `}</style>
    </section>
  );
};

export default CTASection;