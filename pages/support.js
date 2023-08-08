import React from 'react';
import Layout from '../components/Layout';

const Support = () => {
  return (
    <Layout
      title="Support - Nosh Diary" 
      description="Have a question? Get in touch with us at Nosh Diary. We're here to help. Email us at help@noshdiary.com. Expect a response within 1-2 days." 
      keywords="Nosh Diary, Support, Customer Service, Contact Us"
    >
      <div className="container py-10 pr-10">
        <section className="mb-8">
          <h2 className="text-5xl font-bold mb-4">Support</h2>
          <span className="text-lg">
            {"Have a question? Get in touch with through email — we're always here to help. Email us at "}
            <a href="mailto:help@noshdiary.com" className="text-blue-800 underline ml-2">{"help@noshdiary.com"}</a>.
            {"Expect a response within a day."}
          </span>
        </section>
      </div>
    </Layout>
  );
};

export default Support;
