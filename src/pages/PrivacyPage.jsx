import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Server, RefreshCw, Mail } from 'lucide-react';

const PrivacyPage = () => {
  const lastUpdated = "March 15, 2026";

  const sections = [
    {
      id: "information-we-collect",
      icon: <Eye className="w-6 h-6 text-brand-orange" />,
      title: "1. Information We Collect",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 font-light leading-relaxed">
            When you interact with Tranceform Hypnotherapy, we may collect the following types of information:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 font-light marker:text-brand-orange/50">
            <li><strong className="text-brand-blue font-semibold">Personal Identification Information:</strong> Name, email address, phone number, and physical address when you book a session or use our contact form.</li>
            <li><strong className="text-brand-blue font-semibold">Health & Medical History:</strong> Information you voluntarily provide during consultations to help us tailor your hypnotherapy sessions safely and effectively.</li>
            <li><strong className="text-brand-blue font-semibold">Usage Data:</strong> Information on how the Website is accessed and used (e.g., your IP address, browser type, operating system, and pages visited).</li>
          </ul>
        </div>
      )
    },
    {
      id: "how-we-use",
      icon: <Server className="w-6 h-6 text-brand-orange" />,
      title: "2. How We Use Your Information",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 font-light leading-relaxed">
            We use the collected data for various professional and clinical purposes:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 font-light marker:text-brand-orange/50">
            <li>To provide and maintain our therapeutic services.</li>
            <li>To safely evaluate your suitability for clinical hypnotherapy.</li>
            <li>To notify you about changes to our sessions, pricing, or schedules.</li>
            <li>To provide customer support and appointment reminders.</li>
            <li>To gather analysis or valuable information so that we can improve our Website.</li>
            <li>To monitor the usage of our Website and detect technical issues.</li>
          </ul>
        </div>
      )
    },
    {
      id: "data-retention-and-security",
      icon: <Lock className="w-6 h-6 text-brand-orange" />,
      title: "3. Data Retention & Security",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 font-light leading-relaxed">
            The security of your data is of critical importance, especially given the sensitive nature of clinical therapy. We retain your Personal Information only for as long as is necessary for the purposes set out in this policy and to comply with legal/medical record keeping obligations.
          </p>
          <p className="text-gray-600 font-light leading-relaxed">
            All digital records are encrypted and stored on secure, GDPR-compliant servers. We implement commercially acceptable security measures to protect your Personal Information. However, please remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure.
          </p>
        </div>
      )
    },
    {
      id: "confidentiality-exceptions",
      icon: <Shield className="w-6 h-6 text-brand-orange" />,
      title: "4. Confidentiality Exceptions",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 font-light leading-relaxed">
            As members of the Vedic Hypnotherapy Council (VHC) and other professional bodies, we are bound by strict ethical codes of confidentiality. Everything discussed in session remains completely private, with the following legal exceptions:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 font-light marker:text-brand-orange/50">
            <li>If there is a serious risk of imminent harm to yourself or others.</li>
            <li>If child protection issues or elder abuse are disclosed.</li>
            <li>When ordered by a court of law.</li>
          </ul>
        </div>
      )
    },
    {
      id: "your-rights",
      icon: <RefreshCw className="w-6 h-6 text-brand-orange" />,
      title: "5. Your Rights (GDPR & Data Protection)",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 font-light leading-relaxed">
            You have certain data protection rights regarding your personal information. If you wish to be informed what Personal Data we hold about you or if you want it to be removed from our systems, please contact us. Under certain circumstances, you have the right to:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 font-light marker:text-brand-orange/50">
            <li>Access and receive a copy of the Personal Data we hold about you.</li>
            <li>Request the rectification of inaccurate personal data.</li>
            <li>Request the erasure of your Personal Data (Right to be Forgotten).</li>
            <li>Object to or request restriction of the processing of your data.</li>
          </ul>
        </div>
      )
    },
    {
      id: "contact-us",
      icon: <Mail className="w-6 h-6 text-brand-orange" />,
      title: "6. Contact Us Regarding Your Privacy",
      content: (
        <p className="text-gray-600 font-light leading-relaxed">
          If you have any questions about this Privacy Policy, the practices of this site, or your dealings with Tranceform Hypnotherapy, please contact our Data Protection Officer at: <br/><br/>
          <strong className="text-brand-blue font-semibold">Email:</strong> privacy@tranceform.com<br/>
          <strong className="text-brand-blue font-semibold">Address:</strong> 12 Harley Street, London, W1G 9PF
        </p>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      
      {/* ─── Header Spacer ─── */}
      <div className="pt-36 bg-[#1E2A3A]"></div>

      {/* ─── Page Header ─── */}
      <section className="bg-[#1E2A3A] py-20 border-b border-white/5 relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-16 max-w-4xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-brand-orange" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white italic leading-tight">
              Privacy & Security Policy
            </h1>
            <p className="text-white/60 text-lg font-light max-w-2xl mx-auto leading-relaxed">
              We highly value your trust and are committed to protecting your personal and medical information with the utmost integrity and in full compliance with data protection laws.
            </p>
            <div className="inline-block mt-8 px-4 py-2 bg-white/5 rounded-full border border-white/10">
              <span className="text-white/40 text-xs font-mono tracking-widest uppercase">Last Updated: <span className="text-white/80">{lastUpdated}</span></span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Main Content ─── */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-16 max-w-4xl">
          
          <div className="bg-white rounded-[40px] p-8 md:p-14 lg:p-20 shadow-2xl shadow-gray-200/40 border border-gray-100">
            <div className="prose prose-lg max-w-none space-y-16">
              
              {/* Intro text */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-gray-600 font-light leading-relaxed text-lg"
              >
                Tranceform Hypnotherapy ("us", "we", or "our") operates the <span className="font-semibold text-brand-blue border-b border-brand-orange/30">tranceform.com</span> website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
              </motion.div>

              <hr className="border-gray-100" />

              {/* Policy Sections */}
              <div className="space-y-16">
                {sections.map((section) => (
                  <motion.div 
                    key={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="relative group"
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-brand-orange/5 flex items-center justify-center shrink-0 border border-brand-orange/10 group-hover:scale-110 group-hover:bg-brand-orange/10 transition-all duration-300">
                        {section.icon}
                      </div>
                      <div className="space-y-4 pt-2">
                        <h2 className="text-2xl font-serif text-brand-blue">
                          {section.title}
                        </h2>
                        {section.content}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ─── Bottom CTA ─── */}
      <section className="py-20 bg-[#E8E1DC]">
        <div className="container mx-auto px-6 max-w-3xl text-center space-y-6">
          <h3 className="text-2xl md:text-3xl font-serif text-brand-blue italic">Have concerns about confidentiality?</h3>
          <p className="text-gray-600 font-light leading-relaxed">
            Our priority is your comfort and security. You can discuss any privacy concerns directly with a therapist during your free discovery call before committing to any sessions.
          </p>
          <div className="pt-4">
            <a href="/contact" className="inline-flex items-center gap-2 bg-[#15202B] text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-brand-orange hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              BOOK DISCOVERY CALL
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PrivacyPage;
