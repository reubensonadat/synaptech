import React from 'react';
import SEO from '../common/SEO';

const Terms = () => {
  return (
    <>
      <SEO 
        title="Terms of Service" 
        description="Terms of Service of Synap Tech"
      />
      
      <section className="py-16 light-page-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Terms of Service</h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                By using Synap Tech's website and services, you agree to the following:
              </p>
              
              <div className="bg-card rounded-xl p-6 mb-6 shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Project Timelines and Costs</h2>
                <p className="text-muted-foreground">
                  All project timelines and costs are confirmed after consultation. We provide detailed quotes and timelines based on your specific requirements.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 mb-6 shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Payment Terms</h2>
                <p className="text-muted-foreground">
                  Payment terms are outlined in each project agreement. Typically, we require a 50% deposit to begin work, with the remaining balance due upon completion.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 mb-6 shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Intellectual Property</h2>
                <p className="text-muted-foreground">
                  Creative materials remain Synap Tech's property until full payment is made. Upon final payment, all rights to the delivered work are transferred to the client.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 mb-6 shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Project Approval</h2>
                <p className="text-muted-foreground">
                  We aim for accuracy and excellence, but final client approval is required before launch. Clients are responsible for reviewing all deliverables and providing feedback in a timely manner.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 mb-6 shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  Synap Tech is not liable for any indirect, incidental, or consequential damages arising from the use of our services or website.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to update these terms at any time. Continued use of our services constitutes acceptance of any changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;