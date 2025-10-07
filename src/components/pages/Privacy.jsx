import React from 'react';
import SEO from '../common/SEO';

const Privacy = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy" 
        description="Privacy Policy of Synap Tech"
      />
      
      <section className="py-16 light-page-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Privacy Policy</h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="bg-card rounded-xl p-8 shadow-md mb-6">
                <p className="text-muted-foreground mb-6">
                  We respect your privacy. Any personal information you share through this website will be used only to communicate with you about your project or inquiry.
                </p>
                
                <p className="text-muted-foreground mb-6">
                  We do not share, sell, or disclose your data to third parties without consent.
                </p>
                
                <p className="text-muted-foreground">
                  By submitting a contact form, you agree to allow Synap Tech to store and use your data solely for service delivery.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-8 shadow-md mb-6">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Information We Collect</h2>
                <p className="text-muted-foreground">
                  When you contact us through our website, we collect the information you provide in the contact form, including your name, email address, phone number, and any message you send.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-8 shadow-md mb-6">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">How We Use Your Information</h2>
                <p className="text-muted-foreground">
                  We use the information you provide to respond to your inquiries, provide the services you request, and improve our website and services.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-8 shadow-md mb-6">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Data Security</h2>
                <p className="text-muted-foreground">
                  We take appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-8 shadow-md mb-6">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Your Rights</h2>
                <p className="text-muted-foreground">
                  You have the right to access, update, or delete your personal information. If you would like to exercise these rights, please contact us at synaptech25@gmail.com.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-8 shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us at synaptech25@gmail.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Privacy;